import React, { useState } from 'react';
import { aiPipelineSteps, aiCapabilities } from '../data/aiEngineering';
import { Sparkles, ArrowRight, Bot } from 'lucide-react';

export const AiSection: React.FC = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(1);

  const activeStep = aiPipelineSteps[selectedStepIndex];

  return (
    <section id="ai" className="py-20 bg-[#07090e] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40 text-xs font-mono-code text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            AI SYSTEMS INTEGRATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pragmatic LLM Orchestration & Custom Agents
          </h2>
          <p className="text-base text-slate-400 mt-2">
            Integrating generative intelligence and LLM APIs as robust, schema-validated software components. Focusing on deterministic outputs, rate-limiting, error fallbacks, and agentic workflows.
          </p>
        </div>

        {/* Conceptual AI Pipeline Visualizer */}
        <div className="rounded-3xl bg-[#0b0e17] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="font-mono-code text-xs text-cyan-400 uppercase tracking-wider">
                Production AI Pipeline
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Deterministic LLM Orchestration Architecture
              </h3>
            </div>
            <span className="text-xs font-mono-code px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-slate-300 self-start sm:self-auto">
              Gemini • Claude • OpenAI APIs
            </span>
          </div>

          {/* 5-Step Pipeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-6 mb-6">
            {aiPipelineSteps.map((step, idx) => {
              const isSelected = selectedStepIndex === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setSelectedStepIndex(idx)}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between relative group ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#131b2e] to-[#0c121e] border-cyan-400 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-500/30'
                      : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/[0.08]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono-code text-slate-500 mb-2">
                      <span>STEP {step.step}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.04] text-cyan-400">
                        {step.badge}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-white/[0.06] text-[10px] font-mono-code text-indigo-300 truncate">
                    {step.tech}
                  </div>

                  {idx < aiPipelineSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-600 pointer-events-none">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Active Step Deep Dive */}
          <div className="p-5 rounded-2xl bg-black/40 border border-cyan-500/20 text-xs sm:text-sm text-slate-300 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono-code text-cyan-400 pb-1 border-b border-white/[0.06]">
              <span>STEP {activeStep.step}: {activeStep.title.toUpperCase()}</span>
              <span>Layer: {activeStep.badge}</span>
            </div>
            <p className="leading-relaxed pt-1">{activeStep.description}</p>
            <div className="text-xs text-slate-400 font-mono-code pt-1">
              Component Specification: <strong className="text-white">{activeStep.tech}</strong>
            </div>
          </div>
        </div>

        {/* 3 AI Capabilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiCapabilities.map((cap, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#0b0e17] border border-white/10 hover:border-cyan-500/30 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{cap.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {cap.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] space-y-2">
                <div className="flex flex-wrap gap-1.5">
                  {cap.models.map((m) => (
                    <span
                      key={m}
                      className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono-code text-slate-300"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <div className="text-[11px] text-cyan-400/90 leading-snug pt-1">
                  💡 {cap.keyEngineeringAspect}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
