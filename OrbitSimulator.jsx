import React, { useState } from 'react';
import { Satellite, Flame, Sun, RefreshCw, Terminal, CheckCircle2, AlertCircle } from 'lucide-react';

const FLEET_DATA = [
  {
    id: 'vega-4',
    name: 'VEGA-IV',
    class: 'Polar LEO Orbiter',
    orbit: '542 km × 538 km',
    inclination: '97.4°',
    speed: 7.64,
    fuel: 88.4,
    power: 1418,
    status: 'Nominal',
  },
  {
    id: 'cygnus-x',
    name: 'CYGNUS-X',
    class: 'GEO Transport Node',
    orbit: '35,786 km Circular',
    inclination: '0.04°',
    speed: 3.07,
    fuel: 94.2,
    power: 2850,
    status: 'Nominal',
  },
  {
    id: 'polaris-02',
    name: 'POLARIS-02',
    class: 'Hyperspectral SSO',
    orbit: '680 km × 674 km',
    inclination: '98.2°',
    speed: 7.51,
    fuel: 72.8,
    power: 1120,
    status: 'Orienting',
  }
];

export default function OrbitSimulator() {
  const [selectedSat, setSelectedSat] = useState(FLEET_DATA[0]);
  const [fuel, setFuel] = useState(selectedSat.fuel);
  const [speed, setSpeed] = useState(selectedSat.speed);
  const [thrusterActive, setThrusterActive] = useState(false);
  const [solarDeployed, setSolarDeployed] = useState(true);
  const [logs, setLogs] = useState([
    { id: 1, time: '16:04:12', msg: 'Ephemeris vector synced with Svalbard station.', type: 'info' },
    { id: 2, time: '16:05:45', msg: 'ADCS star tracker lock: +0.002° nominal.', type: 'success' },
    { id: 3, time: '16:07:01', msg: 'Attitude hold verified for payload downlink.', type: 'info' },
  ]);

  const handleSelectSat = (sat) => {
    setSelectedSat(sat);
    setFuel(sat.fuel);
    setSpeed(sat.speed);
    addLog(`Switched mission telemetry stream to [${sat.name}].`, 'info');
  };

  const addLog = (msg, type = 'info') => {
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0];
    setLogs(prev => [{ id: Date.now(), time: timeStr, msg, type }, ...prev.slice(0, 5)]);
  };

  const fireThruster = () => {
    if (fuel <= 5) {
      addLog(`ERR: Propellant threshold critical for ${selectedSat.name}. Burn aborted.`, 'error');
      return;
    }
    setThrusterActive(true);
    setFuel(prev => +(prev - 1.2).toFixed(1));
    setSpeed(prev => +(prev + 0.05).toFixed(2));
    addLog(`RCS burn completed on ${selectedSat.name}. ΔV +0.05 km/s. Fuel -1.2%.`, 'success');

    setTimeout(() => {
      setThrusterActive(false);
    }, 1500);
  };

  const toggleSolar = () => {
    setSolarDeployed(!solarDeployed);
    addLog(
      `Solar array ${!solarDeployed ? 'deployed to 100%' : 'feathered to 15% for eclipse mode'}.`,
      'info'
    );
  };

  return (
    <section className="w-full max-w-[1680px] mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24" id="simulator">
      <div className="rounded-3xl bg-surface-container/30 backdrop-blur-2xl border border-outline-variant/30 p-6 md:p-10 shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
        {/* Title & Satellite Selector */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-outline-variant/20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary font-mono text-xs uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Interactive Mission Console
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Constellation Flight Simulator
            </h2>
            <p className="font-body text-sm text-on-surface-variant mt-1">
              Select any orbital vehicle in your fleet to command thrusters, deploy solar arrays, and test real-time attitude adjustments.
            </p>
          </div>

          {/* Fleet Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-surface-container-lowest/60 p-1.5 rounded-2xl border border-outline-variant/20">
            {FLEET_DATA.map(sat => (
              <button
                key={sat.id}
                onClick={() => handleSelectSat(sat)}
                className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold transition-all ${
                  selectedSat.id === sat.id
                    ? 'bg-primary-container text-on-primary-container shadow-[0_0_15px_rgba(183,109,255,0.4)]'
                    : 'text-on-surface-variant hover:text-white'
                }`}
              >
                {sat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Console Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          {/* Left: 2D Orbital Orbit Viewport */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="relative w-full h-80 rounded-2xl bg-surface-container-lowest/90 border border-outline-variant/25 overflow-hidden flex items-center justify-center p-4">
              {/* Star Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#4d4354_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />

              {/* Central Planet Earth */}
              <div className="relative z-10 w-28 h-28 rounded-full bg-gradient-to-tr from-[#0284c7] via-[#0369a1] to-[#38bdf8] shadow-[0_0_40px_rgba(56,189,248,0.4)] flex items-center justify-center border border-white/20">
                <div className="w-20 h-20 rounded-full bg-black/20 backdrop-blur-xs flex items-center justify-center">
                  <span className="font-display font-black text-xs text-white tracking-widest uppercase">EARTH</span>
                </div>
              </div>

              {/* Orbit Rings */}
              <div className="absolute w-56 h-56 rounded-full border border-primary/30 border-dashed animate-[spin_40s_linear_infinite]" />
              <div className="absolute w-72 h-72 rounded-full border border-secondary/20" />

              {/* Satellite Position on Orbit Ring */}
              <div className="absolute w-56 h-56 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className={`p-1.5 rounded-lg bg-surface-container-highest border ${thrusterActive ? 'border-amber-400 bg-amber-500/20' : 'border-primary'} shadow-lg`}>
                    <Satellite className={`w-4 h-4 ${thrusterActive ? 'text-amber-400' : 'text-primary'}`} />
                  </div>
                  {thrusterActive && (
                    <span className="text-[10px] font-mono font-bold text-amber-300 animate-bounce">
                      THRUSTER FIRING 🔥
                    </span>
                  )}
                </div>
              </div>

              {/* Live HUD Floating Tag */}
              <div className="absolute bottom-4 left-4 font-mono text-xs bg-surface-container/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-outline-variant/30 text-on-surface-variant">
                <span>ORBIT: </span>
                <span className="text-secondary font-bold">{selectedSat.orbit}</span>
                <span className="ml-3">INC: </span>
                <span className="text-primary font-bold">{selectedSat.inclination}</span>
              </div>
            </div>

            {/* Interactive Flight Actions */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <button
                onClick={fireThruster}
                disabled={thrusterActive}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-surface-container-high border border-outline-variant/30 hover:border-amber-400/80 hover:text-amber-300 font-semibold text-xs tracking-wide transition-all shadow-[0_0_15px_rgba(251,191,36,0.15)] group"
              >
                <Flame className={`w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform ${thrusterActive ? 'animate-pulse' : ''}`} />
                RCS Delta-V Burn
              </button>

              <button
                onClick={toggleSolar}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-surface-container-high border border-outline-variant/30 hover:border-brand-cyan hover:text-brand-cyan font-semibold text-xs tracking-wide transition-all"
              >
                <Sun className="w-4 h-4 text-brand-cyan" />
                {solarDeployed ? 'Stow Solar Array' : 'Deploy Solar Array'}
              </button>

              <button
                onClick={() => addLog(`Kalman filter re-converged. Ephemeris drift: 0.0001m.`, 'success')}
                className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-surface-container-high border border-outline-variant/30 hover:border-primary hover:text-primary font-semibold text-xs tracking-wide transition-all"
              >
                <RefreshCw className="w-4 h-4 text-primary" />
                Sync Ephemeris
              </button>
            </div>
          </div>

          {/* Right: Live Flight Telemetry & Console Log */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-surface-container/60 border border-outline-variant/20">
                <span className="font-mono text-[10px] text-on-surface-variant block uppercase tracking-wider">Velocity</span>
                <span className="font-display text-xl font-bold text-white">
                  {speed} <span className="text-xs text-on-surface-variant font-normal">km/s</span>
                </span>
                <span className="text-[10px] text-emerald-400 block font-mono mt-1">▲ Orbital speed</span>
              </div>

              <div className="p-4 rounded-xl bg-surface-container/60 border border-outline-variant/20">
                <span className="font-mono text-[10px] text-on-surface-variant block uppercase tracking-wider">Propellant Remainder</span>
                <span className={`font-display text-xl font-bold ${fuel < 20 ? 'text-rose-400' : 'text-secondary'}`}>
                  {fuel}%
                </span>
                <span className="text-[10px] text-on-surface-variant block font-mono mt-1">R-4D Monopropellant</span>
              </div>
            </div>

            {/* Terminal Feed Log */}
            <div className="rounded-xl bg-surface-container-lowest border border-outline-variant/25 p-4 font-mono text-xs flex flex-col flex-1">
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20 mb-3 text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-white">ORBIT OS LIVE LOG FEED</span>
                </div>
                <span className="text-[10px] text-emerald-400">CONNECT: 20Hz</span>
              </div>

              <div className="space-y-2 overflow-y-auto max-h-48 pr-1">
                {logs.map(log => (
                  <div key={log.id} className="flex items-start gap-2 text-[11px] leading-tight">
                    <span className="text-on-surface-variant/60 flex-shrink-0">[{log.time}]</span>
                    <span className={
                      log.type === 'error' ? 'text-rose-400' :
                      log.type === 'success' ? 'text-emerald-300' : 'text-on-surface'
                    }>
                      {log.msg}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
