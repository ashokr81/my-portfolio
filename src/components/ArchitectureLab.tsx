import React, { useState } from 'react';
import { systemArchitectureModels } from '../data/architecture';
import {
  Cpu,
  Smartphone,
  Server,
  Database,
  Radio,
  Cloud,
  Clock,
  Shield,
  Activity,
  ArrowRight,
} from 'lucide-react';

export const ArchitectureLab: React.FC = () => {
  const [activeModelId, setActiveModelId] = useState<string>('arch-relational-scale');
  const [selectedNodeId, setSelectedNodeId] = useState<string>('node-query-optimizer');

  const currentModel =
    systemArchitectureModels.find((m) => m.id === activeModelId) || systemArchitectureModels[0];

  const currentNode =
    currentModel.nodes.find((n) => n.id === selectedNodeId) || currentModel.nodes[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'smartphone':
        return Smartphone;
      case 'server':
        return Server;
      case 'database':
        return Database;
      case 'radio':
        return Radio;
      case 'cloud':
        return Cloud;
      case 'clock':
        return Clock;
      case 'shield':
        return Shield;
      default:
        return Activity;
    }
  };

  return (
    <section id="architecture" className="py-20 bg-[#07090e] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/40 text-xs font-mono-code text-indigo-300 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            SYSTEM ARCHITECTURE LAB
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Think About Systems
          </h2>
          <p className="text-base text-slate-400 mt-2">
            Software engineering is the discipline of managing tradeoffs, data integrity, and throughput. Explore interactive topological models showing how clients, protocols, middleware, and databases orchestrate in production.
          </p>
        </div>

        {/* Architecture Model Selector Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {systemArchitectureModels.map((model) => {
            const isSelected = activeModelId === model.id;
            return (
              <button
                key={model.id}
                onClick={() => {
                  setActiveModelId(model.id);
                  setSelectedNodeId(model.nodes[0].id);
                }}
                className={`p-4 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500/15 border-2 border-cyan-400 text-white shadow-lg shadow-cyan-950/30'
                    : 'bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono-code text-cyan-400 mb-1">
                  <span>{model.badge}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>
                <h3 className="text-sm font-bold text-white line-clamp-2">{model.title}</h3>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Diagram Canvas */}
        <div className="rounded-3xl bg-[#0b0e17] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl space-y-8">
          {/* Top Bar of Diagram */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="font-mono-code text-xs text-cyan-400 uppercase tracking-wider">
                Active System Topology
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {currentModel.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                {currentModel.description}
              </p>
            </div>
            <div className="text-xs font-mono-code text-slate-400 bg-white/[0.03] border border-white/[0.06] p-2 rounded-lg shrink-0">
              💡 Click any node below to inspect engineering tradeoffs
            </div>
          </div>

          {/* Interactive Node Flow Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {currentModel.nodes.map((node, index) => {
              const isSelected = selectedNodeId === node.id;
              const Icon = getIcon(node.iconName);
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between relative group ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#131b2e] to-[#0d1320] border-cyan-400 shadow-xl shadow-cyan-950/50 ring-2 ring-cyan-500/20'
                      : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/[0.08] hover:border-cyan-500/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 font-mono-code mb-3">
                      <span>NODE 0{index + 1}</span>
                      <Icon
                        className={`w-4 h-4 ${
                          isSelected ? 'text-cyan-400' : 'text-slate-400'
                        }`}
                      />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">{node.name}</h4>
                    <div className="text-xs font-mono-code text-cyan-300 mb-2">{node.role}</div>
                    <div className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-black/40 border border-white/[0.06] text-indigo-300 inline-block">
                      {node.technology}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                    <span
                      className={`font-mono-code text-[11px] ${
                        isSelected ? 'text-cyan-300 font-bold' : 'text-slate-500'
                      }`}
                    >
                      {isSelected ? '● Selected Node' : '○ Click to inspect'}
                    </span>
                  </div>

                  {index < currentModel.nodes.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-600 group-hover:text-cyan-400 transition-colors pointer-events-none">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Deep Inspection Drawer for Selected Node */}
          <div className="p-6 rounded-2xl bg-black/40 border border-cyan-500/30 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 font-mono-code text-sm font-bold">
                  AR
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    {currentNode.name} — Technical Deep Dive
                  </h4>
                  <span className="text-xs font-mono-code text-slate-400">
                    Technology: {currentNode.technology} • System: {currentNode.role}
                  </span>
                </div>
              </div>

              <div className="text-xs font-mono-code text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-800/40 self-start sm:self-auto">
                Relevant Project: {currentNode.relevantProject}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1 text-xs sm:text-sm">
              <div className="space-y-1.5">
                <span className="font-mono-code text-xs uppercase text-slate-400 font-semibold block">
                  Node Purpose in Pipeline
                </span>
                <p className="text-slate-200 leading-relaxed">{currentNode.purpose}</p>
              </div>

              <div className="space-y-1.5">
                <span className="font-mono-code text-xs uppercase text-cyan-400 font-semibold block">
                  Key Engineering Consideration & Tradeoffs
                </span>
                <p className="text-slate-300 leading-relaxed">
                  {currentNode.engineeringConsiderations}
                </p>
              </div>
            </div>

            {/* Pipeline Dataflow Execution Steps */}
            <div className="pt-3 border-t border-white/[0.06]">
              <span className="font-mono-code text-xs text-slate-500 uppercase tracking-wider block mb-2">
                Operational Dataflow Sequence:
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs text-slate-300">
                {currentModel.flowDescription.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-cyan-400 font-mono-code">Step {idx + 1}:</span>
                    <span>{step}</span>
                    {idx < currentModel.flowDescription.length - 1 && (
                      <span className="hidden sm:inline text-slate-600 font-bold mx-1">→</span>
                    )}
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
