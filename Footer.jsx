import React from 'react';
import LaunchPadLogo from './LaunchPadLogo';
import { Terminal, Network, Globe, Radar } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/20 py-16">
      <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <LaunchPadLogo />
            <p className="font-body text-sm text-on-surface-variant max-w-sm leading-relaxed">
              Aerospace-grade telemetry, constellation orchestration, and mission infrastructure platform for continuous deep space and LEO operations.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/30 mt-2">
              <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#7bd0ff] animate-pulse" />
              <span className="font-mono text-xs text-secondary uppercase tracking-wider font-semibold">
                All Orbital Systems Operational
              </span>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Solutions
            </span>
            <a href="#features" className="font-body text-sm text-on-surface-variant hover:text-white transition-colors">
              Constellation Sync
            </a>
            <a href="#telemetry-preview" className="font-body text-sm text-on-surface-variant hover:text-white transition-colors">
              Optical Telemetry
            </a>
            <a href="#simulator" className="font-body text-sm text-on-surface-variant hover:text-white transition-colors">
              Trajectory Control
            </a>
            <a href="#features" className="font-body text-sm text-on-surface-variant hover:text-white transition-colors">
              Payload Relays
            </a>
          </div>

          {/* Developers Column */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Developers
            </span>
            <a href="#docs" className="font-body text-sm text-on-surface-variant hover:text-white transition-colors">
              Telemetry APIs
            </a>
            <a href="#docs" className="font-body text-sm text-on-surface-variant hover:text-white transition-colors">
              Python SDK
            </a>
            <a href="#docs" className="font-body text-sm text-on-surface-variant hover:text-white transition-colors">
              Rust Core Client
            </a>
            <a href="#docs" className="font-body text-sm text-on-surface-variant hover:text-white transition-colors">
              Documentation
            </a>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Company
            </span>
            <a href="#platform" className="font-body text-sm text-on-surface-variant hover:text-white transition-colors">
              Flight Team
            </a>
            <a href="#" className="font-body text-sm text-on-surface-variant hover:text-white transition-colors">
              Careers
            </a>
            <a href="#pricing" className="font-body text-sm text-on-surface-variant hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#" className="font-body text-sm text-on-surface-variant hover:text-white transition-colors">
              Press Dispatches
            </a>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Legal
            </span>
            <a href="#" className="font-body text-sm text-on-surface-variant hover:text-white transition-colors">
              Security & ITU
            </a>
            <a href="#" className="font-body text-sm text-on-surface-variant hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-sm text-on-surface-variant hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="font-body text-sm text-on-surface-variant hover:text-white transition-colors">
              ITAR Compliance
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-body text-xs text-on-surface-variant">
            © {new Date().getFullYear()} LaunchPad Infrastructure Technologies Inc. All orbital corridors reserved.
          </span>

          <div className="flex items-center gap-4 text-on-surface-variant">
            <a href="#" className="hover:text-primary transition-colors p-2" aria-label="Terminal">
              <Terminal className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-secondary transition-colors p-2" aria-label="Network Mesh">
              <Network className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-primary transition-colors p-2" aria-label="Global Earth Network">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-secondary transition-colors p-2" aria-label="Radar Telemetry">
              <Radar className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
