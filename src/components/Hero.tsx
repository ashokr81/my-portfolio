import React, { useState } from 'react';
import {
  ArrowDown,
  FileText,
  Mail,
  Phone,
  MapPin,
  Terminal,
  Smartphone,
  Globe,
  Server,
  Database,
  Radio,
  ChevronRight,
} from 'lucide-react';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { profileData } from '../data/profile';
import { triggerConfetti } from '../utils/confetti';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [selectedNodeIndex, setSelectedNodeIndex] = useState<number>(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const pipelineNodes = [
    {
      id: 'mobile',
      label: 'MOBILE',
      tech: 'Flutter • Dart • React Native',
      throughput: '60 FPS Rendering',
      description: 'Native compilation, low-latency state machines (Bloc/GetX), and background geolocators.',
      icon: Smartphone,
      color: 'from-cyan-500/20 to-cyan-500/5 text-cyan-300 border-cyan-500/30',
      activeBorder: 'border-cyan-400 shadow-cyan-500/20',
    },
    {
      id: 'web',
      label: 'WEB',
      tech: 'React.js • TypeScript',
      throughput: 'Instant Hydration',
      description: 'Operational administrative control centers and reactive customer dashboards.',
      icon: Globe,
      color: 'from-sky-500/20 to-sky-500/5 text-sky-300 border-sky-500/30',
      activeBorder: 'border-sky-400 shadow-sky-500/20',
    },
    {
      id: 'api',
      label: 'API GATEWAY',
      tech: 'Node.js • Express.js',
      throughput: '-35% Latency Drop',
      description: 'Stateless JWT routing, request rate-limiting, and sanitized route dispatching.',
      icon: Terminal,
      color: 'from-blue-500/20 to-blue-500/5 text-blue-300 border-blue-500/30',
      activeBorder: 'border-blue-400 shadow-blue-500/20',
    },
    {
      id: 'backend',
      label: 'BACKEND WORKERS',
      tech: 'Cron Modules • Async Schedulers',
      throughput: 'Fault-Tolerant Loops',
      description: 'High-frequency data aggregation jobs, notification queues, and automated workflows.',
      icon: Server,
      color: 'from-indigo-500/20 to-indigo-500/5 text-indigo-300 border-indigo-500/30',
      activeBorder: 'border-indigo-400 shadow-indigo-500/20',
    },
    {
      id: 'database',
      label: 'DATABASE',
      tech: 'PostgreSQL • MySQL • MongoDB',
      throughput: 'Defensive Indexing',
      description: 'Optimized composite indexing, subquery elimination, and geospatial bounding (30-60km).',
      icon: Database,
      color: 'from-violet-500/20 to-violet-500/5 text-violet-300 border-violet-500/30',
      activeBorder: 'border-violet-400 shadow-violet-500/20',
    },
    {
      id: 'realtime-ai',
      label: 'REAL-TIME / AI / CLOUD',
      tech: 'WebSockets • WebRTC • MQTT • LLM APIs',
      throughput: 'Sub-Second Streams',
      description: 'P2P sound streams, MQTT retry buffers, live trading boards, and Gemini/Claude orchestration.',
      icon: Radio,
      color: 'from-emerald-500/20 to-emerald-500/5 text-emerald-300 border-emerald-500/30',
      activeBorder: 'border-emerald-400 shadow-emerald-500/20',
    },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleResumeClick = () => {
    triggerConfetti();
    onOpenResume();
  };

  const currentNode = pipelineNodes[selectedNodeIndex];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-600/10 via-indigo-600/10 to-violet-600/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Identity & Positioning */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Verified badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-signal" />
              <span className="font-mono-code text-[11px] text-cyan-300 tracking-wider uppercase font-semibold">
                Enterprise Engineering Profile
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                {profileData.location}
              </span>
            </div>

            {/* Name & Titles */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                {profileData.name}
              </h1>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base sm:text-lg lg:text-xl font-medium">
                <span className="text-cyan-400 font-semibold">{profileData.role}</span>
                <span className="text-slate-600">•</span>
                <span className="text-indigo-300">{profileData.specialization}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300">{profileData.leadership}</span>
              </div>
            </div>

            {/* Concise Value Statement */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              {profileData.tagline}
            </p>

            <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              Leading cross-functional engineering at <strong className="text-white">Fugen Webtech</strong> (6-engineer team). Specialist in low-latency Flutter mobile ecosystems, defensive relational scaling (<strong className="text-cyan-400">35% API latency reduction</strong>), real-time streaming, and production IoT infrastructure.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-sm font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/35 transition-all duration-200 cursor-pointer"
              >
                <span>View Case Studies</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={handleResumeClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-500/50 text-white text-sm font-semibold transition-all duration-200 shadow-sm cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Quick Contact & Verification Row */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>{profileData.linkedinDisplay}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors cursor-pointer"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>{copiedEmail ? 'Copied to clipboard!' : profileData.email}</span>
              </button>

              <a
                href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{profileData.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Full-Stack System Visualization */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0b0e17] border border-white/[0.08] p-5 sm:p-6 shadow-2xl shadow-black/80">
              {/* Header of Visualizer */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono-code text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Full-Stack Execution Flow
                  </span>
                </div>
                <span className="font-mono-code text-[11px] text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                  Interactive Pipeline
                </span>
              </div>

              {/* The Linear Vertical Pipeline with connecting bus line */}
              <div className="relative py-4 space-y-2">
                {/* Connecting Bus Line */}
                <div className="absolute left-[26px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500/40 via-indigo-500/40 to-emerald-500/40 pointer-events-none" />

                {pipelineNodes.map((node, index) => {
                  const isSelected = selectedNodeIndex === index;
                  const Icon = node.icon;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNodeIndex(index)}
                      className={`w-full relative flex items-center gap-3.5 p-2.5 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? `bg-white/[0.08] border ${node.activeBorder} shadow-lg`
                          : 'bg-white/[0.02] hover:bg-white/[0.05] border border-transparent hover:border-white/[0.06]'
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border z-10 ${
                          isSelected
                            ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                            : 'bg-slate-900 border-white/10 text-slate-400'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono-code text-xs font-bold text-white tracking-wide">
                            {node.label}
                          </span>
                          <span className="font-mono-code text-[10px] text-cyan-400 shrink-0">
                            {node.throughput}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 truncate">{node.tech}</p>
                      </div>

                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isSelected ? 'text-cyan-400 translate-x-0.5' : 'text-slate-600'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Active Node Detail Card */}
              <div className="mt-2 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span className="font-mono-code text-cyan-400 font-semibold">
                    {currentNode.label} LAYER SPECIFICATION
                  </span>
                  <span className="font-mono-code text-[11px] text-slate-500">
                    Step {selectedNodeIndex + 1} of {pipelineNodes.length}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentNode.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
