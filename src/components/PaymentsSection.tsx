import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { CreditCard, Server, Smartphone, Database, ShieldCheck, Webhook, Check } from 'lucide-react';
import { gateways, lifecycle, paymentPractices } from '../data/payments';
import { Reveal, SectionHeading, SpotlightCard, Stagger, StaggerItem } from './motion';

const ownerIcon = {
  Client: Smartphone,
  Server: Server,
  Gateway: CreditCard,
  Database: Database,
} as const;

/** Horizontal lifecycle flow; auto-advances while in view, click any step to pin it. */
const LifecycleFlow: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-120px' });
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    if (!inView || pinned || reduce) return;
    const t = setInterval(() => setActive((a) => (a + 1) % lifecycle.length), 2200);
    return () => clearInterval(t);
  }, [inView, pinned, reduce]);

  const current = lifecycle[active];
  const Icon = ownerIcon[current.owner];

  return (
    <div ref={ref} className="rounded-3xl bg-[#0b0e17] border border-white/[0.08] p-5 sm:p-8 shadow-2xl shadow-black/60">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Webhook className="w-4 h-4 text-cyan-400" />
          <span className="font-mono-code text-xs font-semibold text-slate-300 uppercase tracking-wider">Transaction lifecycle</span>
        </div>
        <button
          onClick={() => setPinned((p) => !p)}
          className="text-[11px] font-mono-code px-2 py-1 rounded-md border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors cursor-pointer"
        >
          {pinned ? '▶ Auto-play' : '❚❚ Pause'}
        </button>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 relative">
        {lifecycle.map((s, i) => {
          const done = i < active;
          const isActive = i === active;
          const StepIcon = ownerIcon[s.owner];
          return (
            <button
              key={s.id}
              onClick={() => {
                setActive(i);
                setPinned(true);
              }}
              className="group relative flex flex-col items-center text-center gap-2 cursor-pointer"
            >
              {i < lifecycle.length - 1 && (
                <span className="hidden md:block absolute top-6 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-px bg-white/10 overflow-hidden">
                  {isActive && !reduce && <span className="animate-packet absolute top-[-2px] w-6 h-[5px] rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />}
                  <motion.span
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 to-emerald-400"
                    animate={{ width: done ? '100%' : '0%' }}
                    transition={{ duration: 0.5 }}
                  />
                </span>
              )}
              <motion.span
                animate={isActive ? { scale: 1.08 } : { scale: 1 }}
                className={`relative w-12 h-12 rounded-2xl flex items-center justify-center border transition-colors duration-300 ${
                  isActive
                    ? 'bg-cyan-500/15 border-cyan-400 shadow-lg shadow-cyan-500/30'
                    : done
                      ? 'bg-emerald-500/10 border-emerald-500/40'
                      : 'bg-white/[0.03] border-white/10 group-hover:border-white/25'
                }`}
              >
                {done ? <Check className="w-5 h-5 text-emerald-400" /> : <StepIcon className={`w-5 h-5 ${isActive ? 'text-cyan-300' : 'text-slate-400'}`} />}
                {isActive && <span className="absolute inset-0 rounded-2xl border border-cyan-400 animate-signal" />}
              </motion.span>
              <span className={`text-xs font-semibold leading-tight ${isActive ? 'text-white' : 'text-slate-400'}`}>{s.title}</span>
              <span className="text-[10px] font-mono-code text-slate-500">{s.owner}</span>
            </button>
          );
        })}
      </div>

      {/* Active step detail */}
      <div className="mt-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] p-5 min-h-[112px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex gap-4 items-start"
          >
            <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-cyan-300" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono-code text-sm text-cyan-300">{current.event}</span>
                <span className="text-[10px] font-mono-code px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/10 text-slate-400">
                  step {active + 1}/{lifecycle.length} · {current.owner}
                </span>
              </div>
              <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">{current.detail}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export const PaymentsSection: React.FC = () => {
  return (
    <section id="payments" className="relative py-24 sm:py-28 overflow-hidden">
      <div className="aurora w-[500px] h-[500px] bg-indigo-600/15 top-20 -right-40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Payment Engineering"
          icon={<CreditCard className="w-3 h-3" />}
          title={
            <>
              Payments built to be <span className="text-gradient">trusted</span>, not just to work.
            </>
          }
          subtitle="I have integrated Stripe and Razorpay into almost every product I have shipped: marketplace bookings, provider subscriptions and premium passes. The backend owns every decision about money; the client only collects details."
        />

        {/* Gateways */}
        <Stagger className="grid md:grid-cols-2 gap-5 mt-12">
          {gateways.map((g) => (
            <StaggerItem key={g.name}>
              <SpotlightCard className="h-full rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 p-6 sm:p-7 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className={`inline-flex px-3 py-1 rounded-lg bg-gradient-to-r ${g.color} text-white text-sm font-bold tracking-tight shadow-lg`}>
                      {g.name}
                    </div>
                    <p className="text-sm text-slate-300 mt-3">{g.tagline}</p>
                  </div>
                  <span className="text-[10px] font-mono-code px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 whitespace-nowrap">
                    In production
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.capabilities.map((c) => (
                    <span key={c} className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300">
                      {c}
                    </span>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/[0.06]">
                  <p className="text-[11px] font-mono-code uppercase tracking-wider text-slate-500 mb-2">Shipped in</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {g.usedIn.map((u) => (
                      <span key={u} className="text-sm text-slate-200 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {u}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Lifecycle */}
        <Reveal className="mt-8">
          <LifecycleFlow />
        </Reveal>

        {/* Practices */}
        <Reveal className="mt-14">
          <div className="flex items-center gap-2 mb-5">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h3 className="text-xl font-bold text-white">How I keep money flows safe</h3>
          </div>
        </Reveal>
        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" gap={0.05}>
          {paymentPractices.map((p) => (
            <StaggerItem key={p.title}>
              <SpotlightCard
                glow="rgba(52,211,153,0.12)"
                className="h-full rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-emerald-500/30 p-5 transition-colors"
              >
                <p className="text-sm font-semibold text-white flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  {p.title}
                </p>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{p.detail}</p>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};
