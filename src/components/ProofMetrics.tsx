import React, { useState } from 'react';
import { verifiedMetrics } from '../data/metrics';
import type { Metric } from '../data/metrics';
import { CheckCircle, Info } from 'lucide-react';
import { CountUp, Stagger, StaggerItem, SpotlightCard } from './motion';

export const ProofMetrics: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<Metric | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Payments', 'Scale', 'Performance', 'Experience'];

  const filteredMetrics = filterCategory === 'All'
    ? verifiedMetrics
    : verifiedMetrics.filter((m) => m.category === filterCategory);

  return (
    <section id="metrics" className="relative py-16 bg-[#090b10] border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40 text-[11px] font-mono-code text-cyan-400 mb-2">
              <CheckCircle className="w-3 h-3 text-cyan-400" />
              PRODUCTION RESULTS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Impact in numbers
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Play Store reach, payment coverage and performance results from production systems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Metrics Grid */}
        <Stagger key={filterCategory} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6" gap={0.06}>
          {filteredMetrics.map((metric) => (
            <StaggerItem key={metric.id} className="h-full">
            <SpotlightCard className="h-full rounded-2xl">
            <div
              onClick={() => setSelectedMetric(selectedMetric?.id === metric.id ? null : metric)}
              className="group relative h-full p-5 sm:p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-mono-code text-[11px] uppercase tracking-wider text-slate-400">
                    {metric.sourceCompany}
                  </span>
                  <span className="text-[10px] font-mono-code px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-slate-300">
                    {metric.category}
                  </span>
                </div>

                <CountUp
                  to={metric.value}
                  decimals={metric.decimals}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  className={`block text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-mono-code text-white group-hover:text-cyan-300 transition-colors`}
                />

                <h3 className="text-sm font-semibold text-slate-200 mt-2 leading-snug">
                  {metric.label}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.06]">
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {metric.context}
                </p>
                <div className="mt-2 flex items-center gap-1 text-[11px] text-cyan-400/90 group-hover:text-cyan-300 font-mono-code">
                  <Info className="w-3 h-3" />
                  <span>Click for technical detail</span>
                </div>
              </div>
            </div>
            </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Metric Detail Drawer / Card when clicked */}
        {selectedMetric && (
          <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#0e121c] border border-cyan-500/40 shadow-xl shadow-cyan-950/30 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-mono-code font-bold text-cyan-400">
                  {selectedMetric.prefix}{selectedMetric.value}{selectedMetric.suffix}
                </span>
                <div>
                  <h4 className="text-base font-bold text-white">
                    {selectedMetric.label}
                  </h4>
                  <span className="text-xs text-slate-400 font-mono-code">
                    Source: {selectedMetric.sourceCompany} • Category: {selectedMetric.category}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedMetric(null)}
                className="text-xs font-mono-code text-slate-400 hover:text-white px-2 py-1 rounded bg-white/[0.05] border border-white/10 cursor-pointer self-start sm:self-auto"
              >
                Close Details [✕]
              </button>
            </div>
            <p className="text-sm text-slate-300 mt-3 leading-relaxed">
              {selectedMetric.detail}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
