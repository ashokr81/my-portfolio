import React, { useState } from 'react';
import { featuredProjects } from '../data/projects';
import {
  Layers,
  ArrowRight,
  Shield,
  CheckCircle2,
  Activity,
  Radio,
  MapPin,
  Zap,
} from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('civilbook');
  const [activeTab, setActiveTab] = useState<'architecture' | 'subsystems' | 'pillars' | 'simulation'>('architecture');

  // Simulation states
  const [radiusKm, setRadiusKm] = useState<number>(45);
  const [tickerPrice, setTickerPrice] = useState<number>(24150.75);
  const [mqttOnline, setMqttOnline] = useState<boolean>(true);
  const [pendingRetries, setPendingRetries] = useState<number>(0);
  const [pumpState, setPumpState] = useState<'OFF' | 'STARTING' | 'RUNNING'>('RUNNING');

  const project = featuredProjects.find((p) => p.id === selectedProjectId) || featuredProjects[0];

  const handleSimulatePumpToggle = () => {
    if (!mqttOnline) {
      setPendingRetries((prev) => prev + 1);
      return;
    }
    setPumpState((prev) => (prev === 'RUNNING' ? 'OFF' : 'RUNNING'));
  };

  const handleToggleMqttNetwork = () => {
    if (!mqttOnline && pendingRetries > 0) {
      // Reconnect and flush buffer
      setMqttOnline(true);
      setTimeout(() => {
        setPendingRetries(0);
        setPumpState('RUNNING');
      }, 800);
    } else {
      setMqttOnline(!mqttOnline);
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#090b10] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40 text-xs font-mono-code text-cyan-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            FLAGSHIP CASE STUDIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production Systems Architecture
          </h2>
          <p className="text-base text-slate-400 mt-2">
            Detailed engineering breakdowns of mission-critical production platforms built across marketplaces, high-frequency financial analytics, and agricultural IoT.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {featuredProjects.map((p) => {
            const isSelected = selectedProjectId === p.id;
            return (
              <button
                key={p.id}
                onClick={() => {
                  setSelectedProjectId(p.id);
                  setActiveTab('architecture');
                }}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#131926] to-[#0d121c] border-2 border-cyan-400/60 shadow-xl shadow-cyan-950/40'
                    : 'bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono-code text-[11px] font-semibold uppercase tracking-wider ${
                      isSelected ? 'text-cyan-400' : 'text-slate-500'
                    }`}
                  >
                    {p.category}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">{p.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                  {p.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Container */}
        <div className="rounded-3xl bg-[#0b0e17] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl">
          {/* Case Study Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono-code font-bold bg-cyan-950/80 border border-cyan-700/50 text-cyan-300">
                  {project.classification}
                </span>
                <span className="text-xs font-mono-code text-slate-500">
                  Vertical: {project.category}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h3>
              <p className="text-sm text-slate-300 max-w-3xl mt-1 leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Technologies Pills */}
            <div className="flex flex-wrap gap-1.5 max-w-md lg:justify-end">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs font-mono-code text-cyan-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-6 pb-6">
            {[
              { id: 'architecture', label: 'Architecture Diagram & Flow' },
              { id: 'subsystems', label: 'Ecosystem Subsystems' },
              { id: 'pillars', label: 'Deep Technical Pillars' },
              { id: 'simulation', label: 'Interactive Telemetry Simulation' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-mono-code font-medium transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.05] border border-white/[0.06]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: ARCHITECTURE FLOW */}
          {activeTab === 'architecture' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-400 flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span>
                  High-level structural dataflow depicting client interactions, middleware routing, and stateful storage.
                </span>
              </div>

              {/* Horizontal / Grid Pipeline Nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {project.architectureFlow.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between relative group hover:border-cyan-500/40 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono-code text-slate-500 mb-2">
                        <span>STEP 0{idx + 1}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.04] text-cyan-400 font-semibold">
                          {step.badge}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1">{step.name}</h4>
                      <div className="text-xs text-indigo-300 font-mono-code mb-2">
                        {step.role}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{step.detail}</p>
                    </div>

                    {idx < project.architectureFlow.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-cyan-400/50">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Engineering Challenges & Solutions */}
              <div className="pt-4 space-y-3">
                <h4 className="text-xs font-mono-code text-slate-400 uppercase tracking-wider">
                  Critical Engineering Challenges Mitigated
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.engineeringChallenges.map((ec, i) => (
                    <div
                      key={i}
                      className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/[0.08] space-y-2 text-xs"
                    >
                      <div className="text-amber-400 font-semibold flex items-center gap-1.5">
                        <span className="font-mono-code uppercase text-[10px] px-1.5 py-0.5 rounded bg-amber-950/60 border border-amber-800/40">
                          Challenge
                        </span>
                        <span>{ec.challenge}</span>
                      </div>
                      <div className="text-slate-300 flex items-start gap-1.5 pt-1">
                        <span className="font-mono-code uppercase text-[10px] px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 shrink-0">
                          Solution
                        </span>
                        <span>{ec.solution}</span>
                      </div>
                      <div className="text-emerald-400 flex items-start gap-1.5 pt-1 font-medium">
                        <span className="font-mono-code uppercase text-[10px] px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40 text-emerald-300 shrink-0">
                          Outcome
                        </span>
                        <span>{ec.outcome}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SUBSYSTEMS */}
          {activeTab === 'subsystems' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-fadeIn">
              {project.subsystems.map((sub, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-cyan-500/30 transition-all space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      {sub.name}
                    </h4>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-white/[0.04] text-cyan-300 border border-white/[0.06]">
                      {sub.tech}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {sub.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: PILLARS */}
          {activeTab === 'pillars' && (
            <div className="space-y-6 animate-fadeIn">
              {project.technicalPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3"
                >
                  <h4 className="text-base font-bold text-cyan-300 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-cyan-400" />
                    {pillar.title}
                  </h4>
                  <ul className="space-y-2">
                    {pillar.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: INTERACTIVE SIMULATION */}
          {activeTab === 'simulation' && (
            <div className="p-6 sm:p-8 rounded-2xl bg-black/60 border border-cyan-500/30 space-y-6 animate-fadeIn">
              {/* Project Specific Simulation UI */}
              {project.id === 'civilbook' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2 font-mono-code">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        GEOMETRIC RADIUS FILTERING ENGINE (30–60 KM)
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Adjust client bounding radius to inspect dynamic PostgreSQL spatial filtering.
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-mono-code text-lg font-bold text-cyan-400">
                        {radiusKm} km Radius
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono-code text-slate-400">
                      <span>30 km (Urban Core)</span>
                      <span>Current: {radiusKm} km</span>
                      <span>60 km (Regional Perimeter)</span>
                    </div>
                    <input
                      type="range"
                      min={30}
                      max={60}
                      value={radiusKm}
                      onChange={(e) => setRadiusKm(Number(e.target.value))}
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                    />
                  </div>

                  {/* Simulated Telemetry Output */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs">
                      <div className="text-slate-400 font-mono-code">Active Providers Dispatched</div>
                      <div className="text-lg font-bold text-cyan-300 font-mono-code mt-1">
                        {Math.round(radiusKm * 1.8)} Contractors
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Background GPS active</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs">
                      <div className="text-slate-400 font-mono-code">PostgreSQL Query Time</div>
                      <div className="text-lg font-bold text-emerald-400 font-mono-code mt-1">
                        {(1.4 + (radiusKm - 30) * 0.05).toFixed(2)} ms
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Indexed Spatial Scan</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs">
                      <div className="text-slate-400 font-mono-code">WebRTC Sound Stream</div>
                      <div className="text-lg font-bold text-indigo-300 font-mono-code mt-1">
                        Direct P2P (0 ms transit)
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Opus codec • STUN handshake</div>
                    </div>
                  </div>
                </div>
              )}

              {project.id === 'kingresearch-academy' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2 font-mono-code">
                        <Activity className="w-4 h-4 text-emerald-400" />
                        SUB-SECOND WEBSOCKET TICKING STREAM SIMULATOR
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        High-frequency market data ingestion rendering on 60 FPS Flutter Bloc state machine.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          setTickerPrice((prev) => +(prev + (Math.random() * 8 - 4)).toFixed(2))
                        }
                        className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-xs font-mono-code text-emerald-300 cursor-pointer flex items-center gap-1.5"
                      >
                        <Zap className="w-3.5 h-3.5" />
                        Simulate Market Tick
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                      <span className="text-xs font-mono-code text-slate-400">NIFTY INDEX LIVE</span>
                      <div className="text-2xl font-bold font-mono-code text-emerald-400 mt-1">
                        ₹ {tickerPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                      </div>
                      <span className="text-[11px] text-emerald-300 font-mono-code flex items-center gap-1 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        WebSocket Stream Connected (QoS 0 latency)
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                      <span className="text-xs font-mono-code text-slate-400">STATE PIPELINE</span>
                      <div className="text-base font-bold text-indigo-300 font-mono-code mt-1">
                        Flutter Bloc Pattern
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Isolate worker transforms ticks into candlestick metrics with 0 dropped frames.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                      <span className="text-xs font-mono-code text-slate-400">PAYMENT & ENTITLEMENT</span>
                      <div className="text-base font-bold text-cyan-300 font-mono-code mt-1">
                        Razorpay Gateway
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Automated subscription webhooks & premium tier entitlement verified.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {project.id === 'peepul-agri' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2 font-mono-code">
                        <Radio className="w-4 h-4 text-cyan-400" />
                        MQTT NETWORK & PERSISTENT RETRY BUFFER SIMULATOR
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Simulate field connection blackout to see local SQLite retry queue in action.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleToggleMqttNetwork}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono-code cursor-pointer border ${
                          mqttOnline
                            ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                            : 'bg-rose-950/60 border-rose-500/40 text-rose-300'
                        }`}
                      >
                        Signal: {mqttOnline ? 'Cellular Connected' : 'Blackout (0 Bars)'}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                      <span className="text-xs font-mono-code text-slate-400">REMOTE HARDWARE RELAY</span>
                      <div className="text-xl font-bold font-mono-code text-white mt-1">
                        Pump State: <span className={pumpState === 'RUNNING' ? 'text-emerald-400' : 'text-amber-400'}>{pumpState}</span>
                      </div>
                      <button
                        onClick={handleSimulatePumpToggle}
                        className="mt-3 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-xs font-mono-code text-cyan-300 cursor-pointer w-full text-center"
                      >
                        Send Remote Toggle Command
                      </button>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                      <span className="text-xs font-mono-code text-slate-400">PERSISTENT RETRY BUFFER</span>
                      <div className="text-xl font-bold font-mono-code text-cyan-300 mt-1">
                        {pendingRetries} Buffered Actions
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        {pendingRetries > 0
                          ? 'Cellular offline: Commands queued in SQLite with idempotent tokens.'
                          : 'Buffer synced. All commands acknowledged by EMAQ controller.'}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                      <span className="text-xs font-mono-code text-slate-400">PROTOCOL SPEC</span>
                      <div className="text-base font-bold text-indigo-300 font-mono-code mt-1">
                        MQTT QoS Level 1
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Guaranteed at-least-once delivery with exponential backoff retries.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
