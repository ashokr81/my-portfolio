import React, { useState } from 'react';
import { engineeringDna } from '../data/profile';
import { Dna } from 'lucide-react';

export const EngineeringDna: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const pillar = engineeringDna[selectedPillar];

  return (
    <section id="dna" className="py-20 bg-[#090b10] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/50 border border-indigo-800/40 text-xs font-mono-code text-indigo-300 mb-3">
            <Dna className="w-3.5 h-3.5" />
            ENGINEERING DNA & PHILOSOPHY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Approach Engineering
          </h2>
          <p className="text-base text-slate-400 mt-3 leading-relaxed">
            Six foundational pillars governing architectural integrity, operational reliability, and high-velocity delivery across every codebase I build and lead.
          </p>
        </div>

        {/* 6-Pillar Tab Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-8">
          {engineeringDna.map((item, index) => {
            const isSelected = selectedPillar === index;
            return (
              <button
                key={item.number}
                onClick={() => setSelectedPillar(index)}
                className={`p-3.5 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-cyan-500/20 to-indigo-500/10 border border-cyan-400/50 shadow-lg shadow-cyan-950/30'
                    : 'bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono-code text-xs font-bold ${
                      isSelected ? 'text-cyan-400' : 'text-slate-500'
                    }`}
                  >
                    {item.number}
                  </span>
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      isSelected ? 'bg-cyan-400' : 'bg-slate-700'
                    }`}
                  />
                </div>
                <h3 className="text-sm font-bold text-white mt-1">{item.title}</h3>
                <p className="text-[11px] text-slate-400 truncate mt-0.5">
                  {item.subtitle.split('&')[0]}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Showcase */}
        <div className="rounded-2xl bg-[#0b0e17] border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="font-mono-code text-3xl font-extrabold text-cyan-400">
                  {pillar.number}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-white">{pillar.title}</h3>
                  <span className="text-xs font-mono-code text-indigo-300">
                    {pillar.subtitle}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {pillar.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono-code text-slate-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Principles (Right) */}
            <div className="lg:col-span-5 bg-white/[0.02] border border-white/[0.08] rounded-xl p-5 sm:p-6 space-y-3">
              <h4 className="font-mono-code text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Non-Negotiable Architecture Standards
              </h4>
              <div className="space-y-3 pt-1">
                {pillar.principles.map((principle, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5 text-cyan-400 font-mono-code text-[11px]">
                      {idx + 1}
                    </div>
                    <span className="leading-relaxed">{principle}</span>
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
