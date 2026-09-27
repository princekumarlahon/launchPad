import React, { useState, useEffect } from 'react';
import { Radar, Orbit, Network, CheckCircle, ShieldCheck, Radio, Sparkles } from 'lucide-react';

export default function Features() {
  const [ptsPerSec, setPtsPerSec] = useState(524190);

  useEffect(() => {
    const interval = setInterval(() => {
      setPtsPerSec(prev => prev + Math.floor(Math.random() * 21) - 10);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-[1680px] mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28 relative" id="features">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-purple/5 blur-[120px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary font-mono text-xs font-semibold tracking-widest uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Engineered for Deep Space & LEO
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
          Autonomous Orbital Infrastructure at Planetary Scale
        </h2>
        <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed">
          Built to withstand zero-tolerance mission criteria with 99.999% orbital uptime and deterministic failover architectures.
        </p>
      </div>

      {/* 3-Column Glass Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Card 1: Telemetry Streaming */}
        <div className="group relative rounded-2xl bg-surface-container/45 backdrop-blur-xl border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 p-7 lg:p-8 flex flex-col justify-between hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-surface-container-high border border-primary/30 flex items-center justify-center text-primary mb-6 shadow-[0_0_20px_rgba(183,109,255,0.25)] group-hover:scale-110 transition-transform">
              <Radar className="w-7 h-7" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">
              Real-Time Telemetry Streaming
            </h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
              Ingest 500k+ telemetry points per second with quantum-encrypted uplinks, sub-orbital latency monitoring, and automated anomaly detection.
            </p>
          </div>

          {/* Micro Telemetry Widget */}
          <div className="rounded-xl bg-surface-container-lowest/80 border border-outline-variant/20 p-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-2.5 border-b border-outline-variant/20 mb-2.5">
              <span className="text-on-surface-variant text-[11px]">TELEMETRY INGEST</span>
              <span className="text-secondary font-bold">{ptsPerSec.toLocaleString()} pts/s</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center pt-1">
              <div className="bg-surface-container/60 p-2 rounded-lg">
                <span className="text-on-surface-variant block text-[10px]">RF SIGNAL</span>
                <span className="text-emerald-400 font-bold">-48 dBm</span>
              </div>
              <div className="bg-surface-container/60 p-2 rounded-lg">
                <span className="text-on-surface-variant block text-[10px]">PACKET LOSS</span>
                <span className="text-primary font-bold">0.001%</span>
              </div>
              <div className="bg-surface-container/60 p-2 rounded-lg">
                <span className="text-on-surface-variant block text-[10px]">XPONDERS</span>
                <span className="text-white font-bold">8 / 8 Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Trajectory AI */}
        <div className="group relative rounded-2xl bg-surface-container/45 backdrop-blur-xl border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 p-7 lg:p-8 flex flex-col justify-between hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-surface-container-high border border-primary/30 flex items-center justify-center text-primary mb-6 shadow-[0_0_20px_rgba(183,109,255,0.25)] group-hover:scale-110 transition-transform">
              <Orbit className="w-7 h-7" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">
              Predictive Trajectory AI
            </h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
              Simulate orbital decay, collision hazard warnings, and delta-v burn budgets using machine learning trained on 40 years of celestial ephemeris.
            </p>
          </div>

          {/* Micro Conjunction Risk Widget */}
          <div className="rounded-xl bg-surface-container-lowest/80 border border-outline-variant/20 p-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-2.5 border-b border-outline-variant/20 mb-2.5">
              <span className="text-on-surface-variant text-[11px]">CONJUNCTION RISK (24H)</span>
              <span className="text-emerald-400 font-bold">1 in 4.2M • NOMINAL</span>
            </div>
            <div className="flex items-center justify-between gap-3 pt-1">
              <div>
                <span className="text-[10px] text-on-surface-variant block">BURNTIME TO AVOIDANCE</span>
                <span className="text-primary font-bold">0.42s • Delta-V: 0.12 m/s</span>
              </div>
              <ShieldCheck className="w-6 h-6 text-secondary flex-shrink-0" />
            </div>
          </div>
        </div>

        {/* Card 3: Ground Station Mesh */}
        <div className="group relative rounded-2xl bg-surface-container/45 backdrop-blur-xl border border-outline-variant/30 hover:border-secondary/50 transition-all duration-300 p-7 lg:p-8 flex flex-col justify-between hover:shadow-[0_0_40px_rgba(123,208,255,0.2)]">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-surface-container-high border border-secondary/30 flex items-center justify-center text-secondary mb-6 shadow-[0_0_20px_rgba(123,208,255,0.25)] group-hover:scale-110 transition-transform">
              <Network className="w-7 h-7" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">
              Universal Ground Station Mesh
            </h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
              Instant routing across 60+ global phased-array ground stations. Never lose line-of-sight during critical apogee burns or polar passes.
            </p>
          </div>

          {/* Micro Ground Pass Schedule */}
          <div className="rounded-xl bg-surface-container-lowest/80 border border-outline-variant/20 p-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-2.5 border-b border-outline-variant/20 mb-2.5">
              <span className="text-on-surface-variant text-[11px]">GROUND PASS NETWORK</span>
              <span className="text-secondary font-bold">60 NODES ONLINE</span>
            </div>
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-white text-xs">Svalbard Earth Station (NO)</span>
                <span className="text-emerald-400 font-bold">• Connected</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white text-xs">McMurdo Polar Node (AQ)</span>
                <span className="text-secondary font-bold">• In Range</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white text-xs">Kourou Space Centre (GF)</span>
                <span className="text-on-surface-variant text-xs">• Next AOS 14m</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
