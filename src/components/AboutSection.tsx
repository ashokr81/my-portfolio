import React, { useState } from 'react';
import {
  Smartphone,
  Globe,
  Server,
  Database,
  Radio,
  Cpu,
  Users,
  CheckCircle2,
  Terminal,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<number>(0);

  const lifecycleDomains = [
    {
      title: 'Mobile Engineering',
      icon: Smartphone,
      tech: 'Flutter • Dart • React Native • iOS / Android',
      summary: 'Architecting cross-platform mobile systems with 60 FPS rendering pipelines, memory-isolated background threads, and native platform bindings.',
      capabilities: [
        'Frame-budget profiling eliminating jank on Android & iOS',
        'Offline-first sync engines and local SQLite caching',
        'Complex background geolocation and hardware sensor integration',
      ],
    },
    {
      title: 'Frontend Engineering',
      icon: Globe,
      tech: 'React.js • TypeScript • Tailwind CSS',
      summary: 'Building administrative suites, operational portals, and high-concurrency dashboards synchronized with mobile client operations.',
      capabilities: [
        'Strict TypeScript interfaces matching backend DTO schemas',
        'Real-time WebSocket telemetry visualization components',
        'Modular reusable design systems with high information density',
      ],
    },
    {
      title: 'Backend & APIs',
      icon: Server,
      tech: 'Node.js • Express.js • Cron Modules • Schedulers',
      summary: 'Developing stateless REST APIs, asynchronous task queues, and fault-tolerant cron jobs executing high-frequency aggregations.',
      capabilities: [
        '35% reduction in API response latency through query restructuring',
        'Asynchronous cron modules for automated scheduled reporting',
        'JWT authentication, rate limiting, and defensive input validation',
      ],
    },
    {
      title: 'Databases & Storage',
      icon: Database,
      tech: 'PostgreSQL • MySQL • MongoDB • Firebase • PocketBase',
      summary: 'Designing normalized relational and document schemas with defensive indexing, composite keys, and spatial radius bounding.',
      capabilities: [
        'Defensive B-Tree and GIST indexing for 30-60 km radius filters',
        'Subquery elimination and query execution plan optimization',
        'Connection pooling and multi-AZ database replication on AWS RDS',
      ],
    },
    {
      title: 'Real-Time Systems',
      icon: Radio,
      tech: 'WebSockets • WebRTC Audio • MQTT Protocol',
      summary: 'Engineering sub-second real-time pipelines, peer-to-peer sound streams, and resilient low-bandwidth IoT communication.',
      capabilities: [
        'P2P WebRTC audio streams without central media server latency',
        'Sub-second WebSocket financial tickers with Bloc state machines',
        'MQTT networks with persistent retry buffers for rural IoT devices',
      ],
    },
    {
      title: 'Infrastructure & DevOps',
      icon: Cpu,
      tech: 'AWS (EC2, S3, RDS) • GitHub Actions • GitLab CI',
      summary: 'Configuring automated staging deployment workflows, immutable cloud asset storage, and continuous delivery loops.',
      capabilities: [
        'Automated CI/CD workflows for linting, test suites, and staging deploys',
        'AWS EC2 microservice hosting with Nginx reverse proxy configuration',
        'Unified debugging patterns slashing production delivery loops by 15%',
      ],
    },
    {
      title: 'Engineering Leadership',
      icon: Users,
      tech: '6-Engineer Team Lead • Architecture Standards • Code Reviews',
      summary: 'Leading a 6-person cross-functional engineering team at Fugen Webtech, guiding architecture, review standards, and sprint deliveries.',
      capabilities: [
        'Direct command of cross-functional mobile, web, and backend engineers',
        'Standardized Clean Architecture and MVVM scaffolding across codebases',
        'Uniform code review metrics focused on performance and reliability',
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono-code text-cyan-400 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            ENGINEER BEHIND THE SYSTEM
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Full Product Lifecycle Mastery
          </h2>
          <p className="text-base text-slate-400 mt-3 leading-relaxed">
            I approach software not as isolated snippets of code, but as complete, resilient systems. From client-side 60 FPS frame budgets to defensive database indexing and cloud deployment pipelines, I control the technical architecture end-to-end.
          </p>
        </div>

        {/* Interactive Lifecycle Grid & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Domain List (Left) */}
          <div className="lg:col-span-5 space-y-2">
            <span className="font-mono-code text-xs text-slate-500 uppercase tracking-wider block mb-2 px-2">
              Select Lifecycle Domain
            </span>
            {lifecycleDomains.map((domain, index) => {
              const isSelected = activeDomain === index;
              const Icon = domain.icon;
              return (
                <button
                  key={domain.title}
                  onClick={() => setActiveDomain(index)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-500/10 border border-cyan-500/40 text-white shadow-md shadow-cyan-950/20'
                      : 'bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isSelected
                          ? 'bg-cyan-500/20 text-cyan-300'
                          : 'bg-white/[0.05] text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">{domain.title}</h3>
                      <p className="text-[11px] text-slate-400 truncate max-w-[220px]">
                        {domain.tech}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`font-mono-code text-xs ${
                      isSelected ? 'text-cyan-400' : 'text-slate-600'
                    }`}
                  >
                    0{index + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Domain Display (Right) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0c0f18] border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-3xl pointer-events-none rounded-full" />

              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                    {React.createElement(lifecycleDomains[activeDomain].icon, {
                      className: 'w-5 h-5',
                    })}
                  </div>
                  <div>
                    <span className="font-mono-code text-xs text-cyan-400 uppercase tracking-wider">
                      Domain 0{activeDomain + 1} Specification
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {lifecycleDomains[activeDomain].title}
                    </h3>
                  </div>
                </div>
                <span className="hidden sm:inline-block font-mono-code text-xs px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-slate-300">
                  Production Scope
                </span>
              </div>

              {/* Technologies Tag */}
              <div className="mt-4">
                <span className="text-xs text-slate-500 font-mono-code uppercase block mb-1.5">
                  Core Technologies & Standards
                </span>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06] font-mono-code text-xs text-cyan-300">
                  {lifecycleDomains[activeDomain].tech}
                </div>
              </div>

              {/* Architectural Summary */}
              <div className="mt-5">
                <span className="text-xs text-slate-500 font-mono-code uppercase block mb-1.5">
                  Engineering Execution
                </span>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {lifecycleDomains[activeDomain].summary}
                </p>
              </div>

              {/* Verified Capabilities */}
              <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5">
                <span className="text-xs text-slate-500 font-mono-code uppercase block mb-2">
                  Verified In-Production Capabilities
                </span>
                {lifecycleDomains[activeDomain].capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
