import React from 'react';
import { ArrowRight, Sliders, Globe } from 'lucide-react';

export default function CtaBanner({ onOpenDemo }) {
  return (
    <section className="w-full max-w-[1680px] mx-auto px-6 sm:px-8 lg:px-12 pt-6 pb-24">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-surface-container-high via-surface-container to-surface-container-high border border-primary/30 p-8 sm:p-12 md:p-16 shadow-[0_0_60px_rgba(183,109,255,0.25)]">
        {/* Ambient Cosmic Glow Elements */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/15 border border-primary/40 text-primary font-mono text-xs font-semibold tracking-widest uppercase mb-6">
            <Globe className="w-4 h-4" />
            NEXT-GEN SPACE INFRASTRUCTURE
          </span>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Ready to Modernize Your Space Mission Stack?
          </h2>

          <p className="font-body text-base sm:text-lg text-on-surface-variant mb-10 max-w-xl leading-relaxed">
            Connect your spacecraft to the LaunchPad API mesh in under 15 minutes. Experience the confidence of autonomous flight dynamics.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary-container text-on-primary-container font-bold text-sm sm:text-base shadow-[0_0_30px_rgba(183,109,255,0.5)] hover:bg-primary hover:text-on-primary hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>

            <button
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-surface-container-lowest/80 backdrop-blur-xl text-white font-medium text-sm sm:text-base border border-outline-variant/40 hover:border-secondary hover:text-secondary transition-all"
            >
              <Sliders className="w-5 h-5 mr-2 text-secondary" />
              Book a Trajectory Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
