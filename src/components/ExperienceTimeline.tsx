import React, { useState } from 'react';
import { careerTimeline } from '../data/experience';
import {
  Briefcase,
  Calendar,
  MapPin,
} from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [filterType, setFilterType] = useState<'All' | 'Enterprise' | 'Freelance'>('All');

  const filteredTimeline = filterType === 'All'
    ? careerTimeline
    : careerTimeline.filter((item) => item.type === filterType);

  return (
    <section id="experience" className="py-20 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono-code text-cyan-400 mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              CAREER TRACK RECORD
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Professional Engineering Experience
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
              Chronological leadership and software engineering roles spanning enterprise scale, high-velocity teams, and independent global deliveries.
            </p>
          </div>

          {/* Type Filter */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08] self-start md:self-auto">
            {(['All', 'Enterprise', 'Freelance'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  filterType === type
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {type} {type !== 'All' && 'Roles'}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/[0.08] space-y-12">
          {filteredTimeline.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline node marker */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-colors ${
                  item.isCurrent
                    ? 'bg-cyan-400 border-[#07090e] ring-4 ring-cyan-500/20'
                    : 'bg-[#0f131d] border-slate-600 group-hover:border-cyan-400'
                }`}
              />

              {/* Experience Card */}
              <div className="rounded-2xl bg-[#0b0e17] border border-white/10 hover:border-cyan-500/30 p-6 sm:p-8 shadow-xl transition-all duration-200">
                {/* Top Bar: Role, Company, Period, Type Badge */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono-code uppercase font-semibold border ${
                          item.type === 'Enterprise'
                            ? 'bg-blue-950/60 border-blue-700/50 text-blue-300'
                            : 'bg-violet-950/60 border-violet-700/50 text-violet-300'
                        }`}
                      >
                        {item.type} Experience
                      </span>
                      {item.isCurrent && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono-code uppercase font-semibold bg-emerald-950/60 border border-emerald-700/50 text-emerald-300 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Current Role
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {item.role}{' '}
                      <span className="text-cyan-400 font-semibold">@ {item.company}</span>
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-2 font-mono-code">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Prominent Lead Metric Banner */}
                  {item.leadMetric && (
                    <div className="p-3 sm:p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center gap-3.5 shrink-0">
                      <div className="text-2xl sm:text-3xl font-extrabold font-mono-code text-cyan-300">
                        {item.leadMetric.value}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white uppercase tracking-wider">
                          {item.leadMetric.label}
                        </div>
                        <div className="text-[11px] text-cyan-400/80 max-w-[200px]">
                          {item.leadMetric.description}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Core Responsibilities Grid */}
                <div className="pt-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {item.responsibilities.map((resp, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2"
                      >
                        <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          {resp.category}
                        </h4>
                        <p className="text-xs text-slate-400 font-medium leading-relaxed">
                          {resp.summary}
                        </p>
                        <ul className="space-y-1.5 pt-1">
                          {resp.points.map((pt, pIdx) => (
                            <li key={pIdx} className="text-xs text-slate-300 flex items-start gap-2">
                              <span className="text-cyan-400 shrink-0 mt-0.5">•</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Pills */}
                  <div className="pt-3 border-t border-white/[0.06]">
                    <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider block mb-2">
                      Technologies & Ecosystem
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs font-mono-code text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
