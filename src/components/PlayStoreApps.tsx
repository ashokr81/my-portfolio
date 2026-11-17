import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Smartphone, CreditCard, Play } from 'lucide-react';
import { playStoreApps } from '../data/playstore';
import type { PlayStoreApp } from '../data/playstore';
import { SectionHeading, SpotlightCard, Stagger, StaggerItem } from './motion';

const accents: Record<PlayStoreApp['accent'], { ring: string; text: string; bg: string; glow: string }> = {
  cyan: { ring: 'hover:border-cyan-400/40', text: 'text-cyan-300', bg: 'from-cyan-500/25 to-cyan-500/5', glow: 'rgba(34,211,238,0.14)' },
  indigo: { ring: 'hover:border-indigo-400/40', text: 'text-indigo-300', bg: 'from-indigo-500/25 to-indigo-500/5', glow: 'rgba(129,140,248,0.14)' },
  amber: { ring: 'hover:border-amber-400/40', text: 'text-amber-300', bg: 'from-amber-500/25 to-amber-500/5', glow: 'rgba(251,191,36,0.12)' },
  emerald: { ring: 'hover:border-emerald-400/40', text: 'text-emerald-300', bg: 'from-emerald-500/25 to-emerald-500/5', glow: 'rgba(52,211,153,0.12)' },
  violet: { ring: 'hover:border-violet-400/40', text: 'text-violet-300', bg: 'from-violet-500/25 to-violet-500/5', glow: 'rgba(167,139,250,0.14)' },
  rose: { ring: 'hover:border-rose-400/40', text: 'text-rose-300', bg: 'from-rose-500/25 to-rose-500/5', glow: 'rgba(251,113,133,0.12)' },
};

const PlayBadge: React.FC = () => <Play className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" aria-hidden="true" />;

const AppCard: React.FC<{ app: PlayStoreApp }> = ({ app }) => {
  const a = accents[app.accent];
  return (
    <motion.a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="block h-full group"
    >
      <SpotlightCard
        glow={a.glow}
        className={`h-full flex flex-col rounded-3xl bg-white/[0.02] border border-white/[0.08] ${a.ring} p-6 transition-colors ${app.featured ? 'glow-border' : ''}`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${a.bg} border border-white/10 flex items-center justify-center`}>
            <Smartphone className={`w-6 h-6 ${a.text}`} />
          </div>
          <div className="text-right">
            <p className={`text-2xl font-extrabold font-mono-code ${app.downloadsValue ? 'text-white' : 'text-slate-400 text-base pt-1'}`}>
              {app.downloads}
            </p>
            <p className="text-[10px] font-mono-code uppercase tracking-wider text-slate-500 flex items-center gap-1 justify-end">
              {app.downloadsValue ? (
                <>
                  <Download className="w-3 h-3" /> downloads
                </>
              ) : (
                'recently launched'
              )}
            </p>
          </div>
        </div>

        <h3 className="mt-5 text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">{app.name}</h3>
        <p className={`text-xs font-mono-code ${a.text} mt-0.5`}>
          {app.context} · {app.category}
        </p>
        <p className="text-sm text-slate-400 mt-3 leading-relaxed">{app.description}</p>

        <ul className="mt-4 space-y-1.5 flex-1">
          {app.highlights.map((h) => (
            <li key={h} className="text-sm text-slate-300 flex gap-2">
              <span className={`mt-2 w-1 h-1 rounded-full shrink-0 bg-current ${a.text}`} />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {app.payments && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {app.payments.map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
              >
                <CreditCard className="w-3 h-3" />
                {p}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
          <span className="text-[11px] text-slate-500">{app.publisher}</span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 group-hover:text-white">
            <PlayBadge />
            Google Play
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </SpotlightCard>
    </motion.a>
  );
};

export const PlayStoreApps: React.FC = () => (
  <section id="apps" className="relative py-24 sm:py-28 bg-[#090b10] border-y border-white/[0.06] overflow-hidden">
    <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <SectionHeading
        eyebrow="Live on Google Play"
        icon={<PlayBadge />}
        title={
          <>
            Six production apps. <span className="text-gradient">200K+ installs.</span>
          </>
        }
        subtitle="Apps I built and deployed myself, with the payment flows inside them. Every card opens the real Play Store listing."
      />
      <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {playStoreApps.map((app) => (
          <StaggerItem key={app.id} className="h-full">
            <AppCard app={app} />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
);
