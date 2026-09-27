import React from 'react';
import { Rocket, PlayCircle, ArrowRight, Compass, Satellite, Flame, Radio, Zap } from 'lucide-react';

export default function Hero({ onOpenDemo }) {
  const scrollToTelemetry = () => {
    const el = document.getElementById('telemetry-preview');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full overflow-hidden pt-32 pb-16 lg:pt-36 lg:pb-24" id="platform">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-brand-purple/20 via-brand-cyan/10 to-transparent blur-[130px] pointer-events-none -z-10" />
      <div className="absolute -top-24 left-1/4 w-[380px] h-[380px] bg-primary-container/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-48 right-1/4 w-[340px] h-[340px] bg-secondary-container/15 rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* Subtle Star/Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0f_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Live Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container/70 backdrop-blur-xl border border-primary/30 shadow-[0_0_24px_rgba(183,109,255,0.25)] hover:border-primary/60 transition-all duration-300 group mb-8 cursor-pointer" onClick={scrollToTelemetry}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary shadow-[0_0_8px_#ddb7ff]"></span>
            </span>
            <span className="font-mono text-xs sm:text-sm font-medium tracking-wide text-on-surface">
              Orbit OS v3.2 is Live • Sub-second telemetry & trajectory AI
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-1 transition-transform" />
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl">
            Launch Faster.{' '}
            <span className="bg-gradient-to-r from-[#C084FC] via-[#A855F7] to-[#38BDF8] bg-clip-text text-transparent">
              Orbit Smarter.
            </span>{' '}
            Navigate the Cosmos in Real-Time.
          </h1>

          {/* Subheadline */}
          <p className="font-body text-lg sm:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
            LaunchPad unifies orbital mechanics, satellite telemetry, and autonomous propulsion APIs into a single cloud dashboard for commercial aerospace teams.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16">
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary-container text-on-primary-container font-semibold text-base tracking-wide shadow-[0_0_30px_rgba(183,109,255,0.45)] hover:bg-primary hover:text-on-primary hover:shadow-[0_0_40px_rgba(183,109,255,0.65)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              Get Started Now
              <Rocket className="w-5 h-5 ml-2.5" />
            </button>

            <button
              onClick={scrollToTelemetry}
              className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-surface-container/60 backdrop-blur-xl text-white font-medium text-base border border-outline-variant/40 hover:border-secondary hover:text-secondary hover:shadow-[0_0_24px_rgba(123,208,255,0.25)] transition-all duration-200"
            >
              <PlayCircle className="w-5 h-5 mr-2 text-secondary" />
              Live Flight Console
            </button>
          </div>

          {/* Social Proof Bar */}
          <div className="w-full flex flex-col items-center gap-4 border-y border-outline-variant/20 py-6 mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-on-surface-variant/70">
              Trusted by aerospace innovators and commercial orbital fleets worldwide
            </span>
            <div className="w-full flex flex-wrap items-center justify-center md:justify-around gap-6 sm:gap-10 opacity-75">
              <div className="flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors">
                <Compass className="w-5 h-5 text-primary" />
                <span className="font-display font-bold text-sm tracking-wider">AEROASTRO</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors">
                <Satellite className="w-5 h-5 text-secondary" />
                <span className="font-display font-bold text-sm tracking-wider">NEBULAX</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors">
                <Zap className="w-5 h-5 text-primary" />
                <span className="font-display font-bold text-sm tracking-wider">STELLAR DYNAMICS</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors">
                <Radio className="w-5 h-5 text-secondary" />
                <span className="font-display font-bold text-sm tracking-wider">ORBITALIQ</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors">
                <Flame className="w-5 h-5 text-primary" />
                <span className="font-display font-bold text-sm tracking-wider">STARFORGE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
