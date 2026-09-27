import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TelemetryConsole from './components/TelemetryConsole';
import Features from './components/Features';
import OrbitSimulator from './components/OrbitSimulator';
import Pricing from './components/Pricing';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-surface text-on-surface flex flex-col overflow-x-hidden selection:bg-brand-purple/30 selection:text-white">
      {/* Dynamic Background Noise / Radial Gradient */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(183,109,255,0.12),rgba(6,14,32,0))] pointer-events-none -z-20" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_60%,rgba(56,189,248,0.06),rgba(6,14,32,0))] pointer-events-none -z-20" />

      {/* Navigation */}
      <Navbar onOpenDemo={() => setDemoOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero onOpenDemo={() => setDemoOpen(true)} />

        {/* Live Mission Control Telemetry HUD */}
        <TelemetryConsole />

        {/* Feature Bento Grid */}
        <Features />

        {/* Interactive Constellation Flight Simulator */}
        <OrbitSimulator />

        {/* Pricing Tiers */}
        <Pricing onOpenDemo={() => setDemoOpen(true)} />

        {/* Conversion CTA Banner */}
        <CtaBanner onOpenDemo={() => setDemoOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modal */}
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}
