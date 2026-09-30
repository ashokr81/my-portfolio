import React, { useState } from 'react';
import { skillsData, skillsCategories } from '../data/skills';
import type { SkillCategory } from '../data/skills';
import { Terminal, Search, Sparkles } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory =
      activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.context.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 bg-[#090b10] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono-code text-cyan-400 mb-3">
              <Terminal className="w-3.5 h-3.5" />
              TECHNICAL COMPETENCIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Verified Technical Stack & Ecosystem
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
              Categorized technologies backed by concrete production implementations, performance benchmarks, and architectural designs.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search tech, protocol, database..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white/[0.03] border border-white/10 focus:border-cyan-400 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-white/[0.02] border border-white/[0.08] mb-8">
          {skillsCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between group ${
                skill.isPrimary
                  ? 'bg-gradient-to-b from-[#101420] to-[#0c0f18] border-cyan-500/30 hover:border-cyan-400 shadow-md'
                  : 'bg-white/[0.02] hover:bg-white/[0.04] border-white/[0.08] hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-code text-[11px] px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-slate-400">
                    {skill.category}
                  </span>
                  {skill.isPrimary && (
                    <span className="text-[10px] font-mono-code text-cyan-400 font-semibold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Core Focus
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {skill.context}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400 font-mono-code">
                <span>Verified Competency</span>
                <span className="text-cyan-400/90 font-medium">{skill.proficiencyLevel}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="py-12 text-center text-slate-500 text-sm">
            No technologies matched "{searchQuery}". Try searching for Flutter, Node.js, WebSockets, or PostgreSQL.
          </div>
        )}
      </div>
    </section>
  );
};
