import React, { useState } from 'react';
import { X, Rocket, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  const [missionClass, setMissionClass] = useState('Constellation');
  const [satCount, setSatCount] = useState('12');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-surface-container-high/95 backdrop-blur-2xl border border-primary/40 shadow-[0_0_60px_rgba(168,85,247,0.35)] p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-on-surface-variant hover:text-white hover:bg-surface-container transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Mission Slot Reserved!
            </h3>
            <p className="font-body text-sm text-on-surface-variant max-w-sm mx-auto mb-6">
              Our Flight Dynamics Officers have provisioned your Sandbox Spacecraft credentials. A telemetry access key has been dispatched to <span className="text-secondary font-mono">{email || 'your email'}</span>.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-6 py-2.5 rounded-full bg-primary-container text-on-primary-container font-semibold text-sm shadow-md hover:bg-primary hover:text-on-primary transition-all"
            >
              Back to Mission Control
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
                Orbital Sandbox Access
              </span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Schedule Mission Flight Demo
            </h3>
            <p className="font-body text-xs text-on-surface-variant mb-6">
              Connect to our real-time hardware-in-the-loop (HIL) telemetry testbed and test sub-second propulsion commands.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs text-on-surface-variant uppercase mb-1.5">
                  Mission Classification
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['CubeSat', 'Constellation', 'Deep Space'].map((cls) => (
                    <button
                      type="button"
                      key={cls}
                      onClick={() => setMissionClass(cls)}
                      className={`py-2 px-3 rounded-xl font-mono text-xs border text-center transition-all ${
                        missionClass === cls
                          ? 'border-primary bg-primary/20 text-white font-bold shadow-[0_0_15px_rgba(183,109,255,0.3)]'
                          : 'border-outline-variant/30 bg-surface-container text-on-surface-variant hover:text-white'
                      }`}
                    >
                      {cls}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-on-surface-variant uppercase mb-1.5">
                  Orbital Fleet Size
                </label>
                <select
                  value={satCount}
                  onChange={(e) => setSatCount(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/30 text-white font-mono text-xs focus:border-primary focus:outline-none"
                >
                  <option value="1">1 Spacecraft (Pathfinder)</option>
                  <option value="3">3 Spacecraft (Small Cluster)</option>
                  <option value="12">12 Spacecraft (Plane Constellation)</option>
                  <option value="48">48+ Spacecraft (Megaconstellation)</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-xs text-on-surface-variant uppercase mb-1.5">
                  Telemetry Dispatch Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="flight-director@space-agency.io"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/30 text-white font-mono text-xs focus:border-primary focus:outline-none placeholder:text-on-surface-variant/40"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-primary-container text-on-primary-container font-bold text-sm tracking-wide shadow-[0_0_24px_rgba(183,109,255,0.4)] hover:bg-primary hover:text-on-primary hover:shadow-[0_0_35px_rgba(183,109,255,0.6)] transition-all flex items-center justify-center gap-2"
                >
                  <Rocket className="w-4 h-4" />
                  Initialize Test Uplink
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-on-surface-variant/70 font-mono text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                <span>ITAR compliant • AES-GCM-256 telemetry encryption</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
