import React, { useState, useEffect } from 'react';
import { Wifi, MapPin, Activity, ShieldAlert, Cpu, Eye, CheckCircle2, RotateCw } from 'lucide-react';

export default function TelemetryConsole() {
  const [latency, setLatency] = useState(12);
  const [velocity, setVelocity] = useState(7642);
  const [solarFlux, setSolarFlux] = useState(1418);
  const [activeTab, setActiveTab] = useState('orbit');
  const [recalibrating, setRecalibrating] = useState(false);

  // Live telemetry pulse simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setLatency(prev => {
        const delta = Math.floor(Math.random() * 3) - 1;
        return Math.max(10, Math.min(15, prev + delta));
      });
      setVelocity(prev => {
        const delta = Math.floor(Math.random() * 5) - 2;
        return Math.max(7635, Math.min(7650, prev + delta));
      });
      setSolarFlux(prev => {
        const delta = Math.floor(Math.random() * 7) - 3;
        return Math.max(1410, Math.min(1425, prev + delta));
      });
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleRecalibrate = () => {
    setRecalibrating(true);
    setTimeout(() => setRecalibrating(false), 1200);
  };

  return (
    <section className="w-full max-w-[1680px] mx-auto px-6 sm:px-8 lg:px-12 pb-24" id="telemetry-preview">
      {/* Mission Control Container */}
      <div className="w-full relative rounded-2xl sm:rounded-3xl bg-surface-container-low/75 backdrop-blur-2xl border border-outline-variant/30 shadow-[0_20px_80px_rgba(0,0,0,0.8)] p-6 md:p-8 lg:p-10 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

        {/* HUD Top Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-outline-variant/20 mb-6">
          <div className="flex items-center gap-3">
            <div className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 shadow-[0_0_12px_#34d399]"></span>
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <span className="font-display text-xl font-bold text-white tracking-tight">VEGA-IV CONSTEL-09</span>
                <span className="px-2.5 py-0.5 rounded-full bg-primary/15 border border-primary/30 text-primary font-mono text-[11px] font-semibold uppercase tracking-wider">
                  LEO Operational
                </span>
              </div>
              <span className="font-mono text-xs text-on-surface-variant">
                NORAD ID: 58921 • COSPAR: 2024-118A • Inclination 97.4° • Semi-major Axis: 6,918 km
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-lg bg-surface-container/60 border border-outline-variant/30 flex items-center gap-2">
              <Wifi className="w-4 h-4 text-secondary" />
              <span className="font-mono text-xs text-on-surface-variant">UPLINK LATENCY:</span>
              <span className="font-mono text-xs text-secondary font-bold">{latency}ms LINK</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-surface-container/60 border border-outline-variant/30 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-mono text-xs text-on-surface">LAT 28.5721° N • LON 80.6480° W</span>
            </div>
            <button 
              onClick={handleRecalibrate}
              title="Sync Telemetry Stream"
              className="p-1.5 rounded-lg bg-surface-container/60 border border-outline-variant/30 text-on-surface-variant hover:text-white transition-colors"
            >
              <RotateCw className={`w-4 h-4 ${recalibrating ? 'animate-spin text-primary' : ''}`} />
            </button>
          </div>
        </div>

        {/* Telemetry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Chart Panel */}
          <div className="lg:col-span-8 flex flex-col gap-4 rounded-xl bg-surface-container/40 border border-outline-variant/20 p-5 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-display text-lg font-bold text-white">Orbital Trajectory & Delta-V Stream</h2>
                <p className="font-body text-xs text-on-surface-variant">Live telemetry vs. Kalman filtered ephemeris projection</p>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-primary">
                  <span className="w-3 h-0.5 bg-primary inline-block rounded-full"></span> Apogee (542.4 km)
                </span>
                <span className="flex items-center gap-1.5 text-secondary">
                  <span className="w-3 h-0.5 bg-secondary inline-block rounded-full"></span> Perigee (538.1 km)
                </span>
              </div>
            </div>

            {/* Trajectory Wave SVG Visualization */}
            <div className="w-full h-64 relative flex items-center justify-center bg-surface-container-lowest/70 rounded-xl p-2 overflow-hidden border border-outline-variant/15">
              <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="orbitGrad" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#A855F7" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="areaGrad" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#A855F7" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#A855F7" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Horizontal Grid Lines */}
                <line x1="0" y1="40" x2="700" y2="40" stroke="#4d4354" strokeDasharray="4 4" strokeOpacity="0.25" />
                <line x1="0" y1="90" x2="700" y2="90" stroke="#4d4354" strokeDasharray="4 4" strokeOpacity="0.25" />
                <line x1="0" y1="140" x2="700" y2="140" stroke="#4d4354" strokeDasharray="4 4" strokeOpacity="0.25" />

                {/* Vertical Grid Lines */}
                <line x1="140" y1="0" x2="140" y2="200" stroke="#4d4354" strokeDasharray="4 4" strokeOpacity="0.2" />
                <line x1="350" y1="0" x2="350" y2="200" stroke="#4d4354" strokeDasharray="4 4" strokeOpacity="0.2" />
                <line x1="560" y1="0" x2="560" y2="200" stroke="#4d4354" strokeDasharray="4 4" strokeOpacity="0.2" />

                {/* Shaded Area Under Curve */}
                <path d="M0,130 C120,40 240,160 360,80 C480,20 600,120 700,90 L700,200 L0,200 Z" fill="url(#areaGrad)" />

                {/* Trajectory Wave Primary */}
                <path d="M0,130 C120,40 240,160 360,80 C480,20 600,120 700,90" stroke="url(#orbitGrad)" strokeWidth="3" strokeLinecap="round" />

                {/* Perigee Reference Track */}
                <path d="M0,150 C130,120 250,140 370,110 C490,90 590,130 700,120" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="6 4" strokeOpacity="0.6" />

                {/* Active Satellite Node */}
                <circle cx="360" cy="80" r="7" fill="#f0dbff" stroke="#a855f7" strokeWidth="3.5" className="filter drop-shadow-[0_0_10px_#a855f7]" />
                <circle cx="360" cy="80" r="16" stroke="#ddb7ff" strokeWidth="1" strokeOpacity="0.5" className="animate-ping" />
              </svg>

              {/* Floating Node Telemetry Box */}
              <div className="absolute top-4 left-1/2 -translate-x-12 px-3 py-1.5 rounded-lg bg-surface-container-high/90 border border-primary/40 backdrop-blur-md shadow-lg pointer-events-none">
                <span className="font-mono text-[10px] text-primary block leading-none font-bold uppercase tracking-wider">BURST STAGE ACTIVE</span>
                <span className="font-mono text-xs text-white font-bold">V: {(velocity / 1000).toFixed(2)} km/s</span>
              </div>
            </div>

            {/* Quick Metrics HUD Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-lg bg-surface-container-lowest/50 border border-outline-variant/15">
                <span className="font-mono text-[11px] text-on-surface-variant block uppercase tracking-wider">Velocity</span>
                <span className="font-display text-lg font-bold text-white">
                  {velocity.toLocaleString()} <span className="text-xs text-on-surface-variant font-normal">m/s</span>
                </span>
              </div>
              <div className="p-3.5 rounded-lg bg-surface-container-lowest/50 border border-outline-variant/15">
                <span className="font-mono text-[11px] text-on-surface-variant block uppercase tracking-wider">Propellant R-4D</span>
                <span className="font-display text-lg font-bold text-secondary">
                  88.4 <span className="text-xs text-on-surface-variant font-normal">%</span>
                </span>
              </div>
              <div className="p-3.5 rounded-lg bg-surface-container-lowest/50 border border-outline-variant/15">
                <span className="font-mono text-[11px] text-on-surface-variant block uppercase tracking-wider">Solar Array Flux</span>
                <span className="font-display text-lg font-bold text-primary">
                  {solarFlux} <span className="text-xs text-on-surface-variant font-normal">W</span>
                </span>
              </div>
              <div className="p-3.5 rounded-lg bg-surface-container-lowest/50 border border-outline-variant/15">
                <span className="font-mono text-[11px] text-on-surface-variant block uppercase tracking-wider">Next AOS (Svalbard)</span>
                <span className="font-display text-lg font-bold text-white">
                  04:19 <span className="text-xs text-on-surface-variant font-normal">min</span>
                </span>
              </div>
            </div>
          </div>

          {/* Secondary Systems Status Rail */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            {/* Subsystem Health Card */}
            <div className="rounded-xl bg-surface-container/40 border border-outline-variant/20 p-5 flex flex-col gap-3">
              <div className="font-mono text-xs uppercase tracking-wider text-white font-semibold flex items-center justify-between">
                <span>Subsystem Integrity</span>
                <span className="text-xs text-emerald-400 font-mono font-bold">100% NOMINAL</span>
              </div>

              <div className="space-y-3 pt-1">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-on-surface-variant">ADCS Attitude Lock</span>
                    <span className="text-white font-semibold">0.002° error</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: '98%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-on-surface-variant">S-Band Encryption Key</span>
                    <span className="text-secondary font-semibold">AES-GCM-256</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-secondary rounded-full transition-all duration-500" style={{ width: '100%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-on-surface-variant">Thermal Radiator Array</span>
                    <span className="text-white font-semibold">+18.4°C eq</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary-container rounded-full transition-all duration-500" style={{ width: '86%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Optical Sensor Feed View */}
            <div className="rounded-xl bg-surface-container/40 border border-outline-variant/20 p-5 relative overflow-hidden flex flex-col justify-end min-h-[170px] group">
              <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" 
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[10px] text-secondary tracking-widest uppercase font-semibold">
                    STAR TRACKER 01 • STARBURST-FOCUSED
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <p className="font-display text-sm text-white font-semibold">
                  Earth Horizon Limb Acquisition: Locked
                </p>
                <span className="font-body text-xs text-on-surface-variant">
                  Visual line-of-sight confirmed with 14 ground optical anchors.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
