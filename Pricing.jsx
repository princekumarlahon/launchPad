import React, { useState } from 'react';
import { CheckCircle2, Sparkles, Rocket, ShieldAlert } from 'lucide-react';

export default function Pricing({ onOpenDemo }) {
  const [annualBilling, setAnnualBilling] = useState(false);

  return (
    <section className="w-full max-w-[1680px] mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28 relative" id="pricing">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-brand-purple/10 blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary font-mono text-xs font-semibold tracking-widest uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Mission-Ready Pricing
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
          Predictable Pricing for Orbital Missions
        </h2>
        <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed mb-8">
          Deploy instantly with zero lock-in contracts or configure dedicated ground network instances for enterprise constellations.
        </p>

        {/* Annual / Monthly Toggle */}
        <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md">
          <button
            onClick={() => setAnnualBilling(false)}
            className={`px-5 py-2 rounded-full font-medium text-xs sm:text-sm transition-all ${
              !annualBilling
                ? 'bg-primary-container text-on-primary-container font-semibold shadow-md'
                : 'text-on-surface-variant hover:text-white'
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setAnnualBilling(true)}
            className={`px-5 py-2 rounded-full font-medium text-xs sm:text-sm flex items-center gap-2 transition-all ${
              annualBilling
                ? 'bg-primary-container text-on-primary-container font-semibold shadow-md'
                : 'text-on-surface-variant hover:text-white'
            }`}
          >
            <span>Annual Flight Plan</span>
            <span className="px-2 py-0.5 rounded-full bg-secondary/20 text-secondary text-[10px] font-bold uppercase">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
        {/* Tier 1: CubeSat */}
        <div className="rounded-3xl bg-surface-container/45 backdrop-blur-xl border border-outline-variant/30 hover:border-outline-variant/60 transition-all duration-300 p-8 flex flex-col justify-between">
          <div>
            <div className="mb-6">
              <span className="font-mono text-xs uppercase tracking-wider text-secondary block mb-1 font-semibold">
                SmallSat & Technology Demo
              </span>
              <h3 className="font-display text-2xl font-bold text-white">CubeSat</h3>
              <p className="font-body text-xs text-on-surface-variant mt-2 leading-relaxed">
                Perfect for single payloads, university space labs, and technology demonstrators.
              </p>
            </div>

            <div className="mb-8">
              <span className="font-display text-4xl sm:text-5xl font-extrabold text-white">
                ${annualBilling ? '1,999' : '2,499'}
              </span>
              <span className="font-body text-sm text-on-surface-variant ml-2">/ month</span>
            </div>

            <div className="space-y-3.5 mb-8">
              {[
                'Up to 3 active satellites',
                '5-second telemetry refresh',
                'Standard ground mesh routing',
                'Automated collision alerts',
                'Community aerospace support',
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-on-surface">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={onOpenDemo}
            className="w-full py-3.5 rounded-full bg-surface-container-high text-white text-center font-semibold text-sm border border-outline-variant/30 hover:border-secondary hover:text-secondary hover:shadow-[0_0_20px_rgba(123,208,255,0.2)] transition-all"
          >
            Deploy CubeSat Tier
          </button>
        </div>

        {/* Tier 2: Constellation (MOST POPULAR) */}
        <div className="relative rounded-3xl bg-surface-container-high/85 backdrop-blur-2xl border-2 border-brand-purple shadow-[0_0_55px_rgba(168,85,247,0.35)] p-8 flex flex-col justify-between lg:-translate-y-4">
          {/* Most Popular Badge */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary-container text-on-primary-container font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(183,109,255,0.6)]">
            <Rocket className="w-3.5 h-3.5" />
            Most Popular
          </div>

          <div>
            <div className="mb-6 mt-2">
              <span className="font-mono text-xs uppercase tracking-wider text-primary block mb-1 font-semibold">
                Commercial Constellations
              </span>
              <h3 className="font-display text-2xl font-bold text-white">Constellation</h3>
              <p className="font-body text-xs text-on-surface-variant mt-2 leading-relaxed">
                Production fleet operations with continuous autonomous propulsion & station keeping.
              </p>
            </div>

            <div className="mb-8">
              <span className="font-display text-4xl sm:text-5xl font-extrabold text-white">
                ${annualBilling ? '7,199' : '8,999'}
              </span>
              <span className="font-body text-sm text-on-surface-variant ml-2">/ month</span>
            </div>

            <div className="space-y-3.5 mb-8">
              {[
                'Up to 25 active satellites',
                'Sub-second 20Hz telemetry',
                'Real-time AI trajectory optimization',
                'Priority ground station access',
                'Custom propulsion API webhooks',
                '24/7 Flight Dynamics Officer SLA',
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={onOpenDemo}
            className="w-full py-4 rounded-full bg-primary-container text-on-primary-container text-center font-bold text-sm shadow-[0_0_24px_rgba(183,109,255,0.45)] hover:bg-primary hover:text-on-primary hover:shadow-[0_0_35px_rgba(183,109,255,0.7)] transition-all hover:scale-[1.02]"
          >
            Get Started with Constellation
          </button>
        </div>

        {/* Tier 3: Deep Space & Enterprise */}
        <div className="rounded-3xl bg-surface-container/45 backdrop-blur-xl border border-outline-variant/30 hover:border-outline-variant/60 transition-all duration-300 p-8 flex flex-col justify-between">
          <div>
            <div className="mb-6">
              <span className="font-mono text-xs uppercase tracking-wider text-secondary block mb-1 font-semibold">
                Defense & Interplanetary
              </span>
              <h3 className="font-display text-2xl font-bold text-white">Deep Space & Enterprise</h3>
              <p className="font-body text-xs text-on-surface-variant mt-2 leading-relaxed">
                Government, military, and interplanetary missions requiring air-gapped sovereign control.
              </p>
            </div>

            <div className="mb-8">
              <span className="font-display text-4xl sm:text-5xl font-extrabold text-white">Custom</span>
              <span className="font-body text-sm text-on-surface-variant ml-2">/ mission</span>
            </div>

            <div className="space-y-3.5 mb-8">
              {[
                'Unlimited fleet & interplanetary probes',
                'Sovereign air-gapped ground networks',
                'Bespoke orbital mechanics modeling',
                'Dedicated Mission Operations Engineer on-site',
                'ITAR & FedRAMP High compliant',
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-on-surface">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={onOpenDemo}
            className="w-full py-3.5 rounded-full bg-surface-container-high text-white text-center font-semibold text-sm border border-outline-variant/30 hover:border-secondary hover:text-secondary hover:shadow-[0_0_20px_rgba(123,208,255,0.2)] transition-all"
          >
            Contact Flight Team
          </button>
        </div>
      </div>
    </section>
  );
}
