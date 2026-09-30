import React, { useState } from 'react';
import { Zap, CheckCircle2 } from 'lucide-react';

export const PerformanceSection: React.FC = () => {
  const [activeBenchmark, setActiveBenchmark] = useState<number>(0);

  const benchmarks = [
    {
      metric: '35%',
      label: 'API Response Latency Reduction',
      company: 'Fugen Webtech',
      leadEngineerRole: 'Lead Full Stack Developer',
      primaryFocus: 'Relational Database Tuning & Subquery Refactoring',
      before: '480ms - 850ms average P95 latency during peak multi-tenant bursts',
      after: '290ms - 420ms stabilized P95 latency (35% reduction measured across endpoints)',
      architectureImpact:
        'Refactored legacy PostgreSQL relational structures by replacing nested correlated subqueries with optimized indexed JOINs. Designed defensive composite indexes aligned with high-frequency WHERE clause filters, completely eliminating sequential table scans across multi-million row records.',
      technicalSteps: [
        'Analyzed PostgreSQL query plans via EXPLAIN (ANALYZE, BUFFERS) to detect slow scan nodes.',
        'Created multi-column composite indexes on high-cardinality foreign keys and date-range filters.',
        'Eliminated N+1 nested subqueries inside Node.js Express controllers with aggregated batch joins.',
        'Implemented connection pooling and tuned PostgreSQL shared buffers to maximize cache hits.',
      ],
    },
    {
      metric: '30%',
      label: 'Increase in Active User Engagement',
      company: 'Orotron',
      leadEngineerRole: 'Software Developer',
      primaryFocus: 'Flutter UI Rendering Pipeline & 60 FPS Fluidness',
      before: 'Intermittent frame drops (jank) and 1.8s screen transition delays on mid-range phones',
      after: 'Rock-solid 60 FPS transitions, sub-400ms screen loads, and a 30% increase in daily session length',
      architectureImpact:
        'Profiled Flutter widget rebuild trees using Flutter DevTools timeline inspection. Extracted heavy state calculations into Dart background Isolates, applied const constructor caches, and virtualized long scroll lists to keep GPU frame budgets strictly under 16ms.',
      technicalSteps: [
        'Mitigated unnecessary widget tree over-rebuilds using fine-grained Bloc selectors.',
        'Cached and compressed remote network images with disk-backed thumbnail pipelines.',
        'Offloaded JSON decoding and complex geospatial mathematics to background Dart Isolates.',
        'Adopted repaint boundaries to prevent cascade repaint thrashing across adjacent widgets.',
      ],
    },
    {
      metric: '15%',
      label: 'Improvement in Production Delivery Loops',
      company: 'Orotron',
      leadEngineerRole: 'Software Developer',
      primaryFocus: 'Unified Debugging & Cross-Platform Scaffolding',
      before: 'Disjointed iOS and Android bug triage resulting in prolonged 3-week sprint release lag',
      after: '15% faster time-to-market release loops across both iOS and Android production tracks',
      architectureImpact:
        'Spearheaded unified debugging patterns, standardized error-boundary middleware, and automated staging CI/CD builds that caught regressions before code reached staging review.',
      technicalSteps: [
        'Established common error logging and crash categorization patterns across mobile squads.',
        'Standardized architecture scaffolding (Clean Architecture & MVVM) reducing onboarding friction.',
        'Automated local test runners and pre-commit hooks to catch lint and type errors immediately.',
        'Created reproducible mock environments allowing rapid offline feature testing.',
      ],
    },
  ];

  const current = benchmarks[activeBenchmark];

  return (
    <section id="performance" className="py-20 bg-[#090b10] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40 text-xs font-mono-code text-cyan-400 mb-3">
            <Zap className="w-3.5 h-3.5" />
            PERFORMANCE ENGINEERING
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Measurable Engineering Impact
          </h2>
          <p className="text-base text-slate-400 mt-2">
            Engineering excellence is validated by numbers, not opinions. Here is the rigorous engineering work that achieved our verified performance benchmarks.
          </p>
        </div>

        {/* 3 Prominent Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {benchmarks.map((b, idx) => {
            const isSelected = activeBenchmark === idx;
            return (
              <button
                key={b.label}
                onClick={() => setActiveBenchmark(idx)}
                className={`p-6 sm:p-7 rounded-2xl text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#121826] to-[#0c101b] border-2 border-cyan-400 shadow-xl shadow-cyan-950/40'
                    : 'bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono-code text-slate-500 mb-2">
                  <span>{b.company}</span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold font-mono-code text-cyan-300">
                  {b.metric}
                </div>
                <h3 className="text-base font-bold text-white mt-2 leading-snug">
                  {b.label}
                </h3>
                <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                  {b.primaryFocus}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Impact Breakdown Canvas */}
        <div className="rounded-3xl bg-[#0b0e17] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono-code text-cyan-400 uppercase font-semibold">
                  Engineering Case Study
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs font-mono-code text-slate-400">
                  {current.company} ({current.leadEngineerRole})
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {current.label}
              </h3>
              <p className="text-xs sm:text-sm text-indigo-300 font-mono-code mt-1">
                Primary Strategy: {current.primaryFocus}
              </p>
            </div>
            <div className="text-3xl font-mono-code font-extrabold text-cyan-300 shrink-0">
              {current.metric} Measured
            </div>
          </div>

          {/* Before vs After Metric Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-4 sm:p-5 rounded-2xl bg-rose-950/20 border border-rose-900/30 space-y-1">
              <span className="font-mono-code text-[11px] uppercase tracking-wider text-rose-400 font-bold">
                Baseline (Before Optimization)
              </span>
              <p className="text-xs sm:text-sm text-rose-200/90 leading-relaxed font-mono-code">
                {current.before}
              </p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/20 border border-emerald-900/30 space-y-1">
              <span className="font-mono-code text-[11px] uppercase tracking-wider text-emerald-400 font-bold">
                Optimized Result (In Production)
              </span>
              <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed font-mono-code">
                {current.after}
              </p>
            </div>
          </div>

          {/* Architectural Explanation */}
          <div className="space-y-2 mb-6">
            <h4 className="font-mono-code text-xs text-slate-400 uppercase tracking-wider">
              Technical Rationale & Architectural Solution
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {current.architectureImpact}
            </p>
          </div>

          {/* Technical Execution Steps */}
          <div className="pt-4 border-t border-white/[0.06] space-y-3">
            <h4 className="font-mono-code text-xs text-slate-400 uppercase tracking-wider">
              Implementation Details & Execution Steps
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {current.technicalSteps.map((step, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-2.5 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
