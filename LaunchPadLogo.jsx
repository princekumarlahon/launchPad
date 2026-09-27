import React from 'react';

export default function LaunchPadLogo({ className = "h-8" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-8 w-8 flex-shrink-0" fill="none">
        <defs>
          <linearGradient id="rocketGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7E22CE"/>
            <stop offset="50%" stopColor="#A855F7"/>
            <stop offset="100%" stopColor="#C084FC"/>
          </linearGradient>
          <linearGradient id="flameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C084FC"/>
            <stop offset="100%" stopColor="#38BDF8"/>
          </linearGradient>
          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
        </defs>
        <rect width="32" height="32" rx="9" fill="#131B2E" stroke="#A855F7" strokeWidth="1.5" />
        {/* Rocket Body */}
        <path d="M16 7 C19 11 21 16 21 21 L11 21 C11 16 13 11 16 7 Z" fill="url(#rocketGrad)" filter="url(#neonGlow)" />
        {/* Fins */}
        <path d="M11 18 L7 22 L11 22 Z" fill="#7E22CE" />
        <path d="M21 18 L25 22 L21 22 Z" fill="#7E22CE" />
        {/* Porthole */}
        <circle cx="16" cy="15" r="2.2" fill="#0B1326" stroke="#C084FC" strokeWidth="0.8" />
        {/* Exhaust Flame */}
        <path d="M13.5 22.5 L16 27 L18.5 22.5 Z" fill="url(#flameGrad)" />
      </svg>
      <div className="flex items-baseline">
        <span className="font-display font-extrabold text-xl tracking-tight text-white">Launch</span>
        <span className="font-display font-extrabold text-xl tracking-tight bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent">Pad</span>
      </div>
    </div>
  );
}
