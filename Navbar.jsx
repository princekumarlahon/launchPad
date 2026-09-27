import React, { useState, useEffect } from 'react';
import LaunchPadLogo from './LaunchPadLogo';
import { Menu, X, ArrowUpRight, Radio, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-surface/85 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
        : 'bg-surface/50 backdrop-blur-md border-b border-outline-variant/15'
    }`}>
      <div className="h-20 w-full max-w-[1680px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <LaunchPadLogo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#platform" className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors duration-200">
            Platform
          </a>
          <a href="#features" className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors duration-200">
            Features
          </a>
          <a href="#telemetry-preview" className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors duration-200">
            Telemetry
          </a>
          <a href="#simulator" className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors duration-200 flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
            Simulator
          </a>
          <a href="#pricing" className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors duration-200">
            Pricing
          </a>
          <a href="#docs" className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors duration-200 flex items-center gap-1">
            Docs
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container/60 border border-outline-variant/30 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
            <span className="text-on-surface-variant hidden md:inline">CORRIDOR:</span>
            <span>LEO-99.9%</span>
          </div>

          <button 
            onClick={onOpenDemo}
            className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors px-3 py-1.5"
          >
            Sign In
          </button>

          <button
            onClick={onOpenDemo}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary-container text-on-primary-container font-medium text-sm shadow-[0_0_24px_rgba(183,109,255,0.4)] hover:bg-primary hover:text-on-primary hover:shadow-[0_0_32px_rgba(183,109,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-on-surface-variant hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-high/95 backdrop-blur-2xl border-b border-outline-variant/30 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3 font-medium">
            <a 
              href="#platform" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-on-surface-variant hover:text-white py-2 border-b border-outline-variant/15"
            >
              Platform
            </a>
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-on-surface-variant hover:text-white py-2 border-b border-outline-variant/15"
            >
              Features
            </a>
            <a 
              href="#telemetry-preview" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-on-surface-variant hover:text-white py-2 border-b border-outline-variant/15"
            >
              Live Telemetry
            </a>
            <a 
              href="#simulator" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-on-surface-variant hover:text-white py-2 border-b border-outline-variant/15"
            >
              Orbit Simulator
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-on-surface-variant hover:text-white py-2 border-b border-outline-variant/15"
            >
              Pricing
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
              className="w-full py-3 rounded-full bg-primary-container text-on-primary-container font-semibold text-center shadow-[0_0_20px_rgba(183,109,255,0.4)]"
            >
              Launch Mission Console
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
