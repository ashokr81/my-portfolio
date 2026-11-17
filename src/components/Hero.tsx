import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowDown, FileText, Mail, Phone, MapPin, ShieldCheck, CheckCircle2, Loader2, CreditCard, Smartphone } from 'lucide-react';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { GithubIcon } from './icons/GithubIcon';
import { profileData } from '../data/profile';
import { lifecycle } from '../data/payments';
import { triggerConfetti } from '../utils/confetti';
import { CountUp } from './motion';

interface HeroProps {
  onOpenResume: () => void;
}

const ease = [0.22, 1, 0.36, 1] as const;

const transactions = [
  { gateway: 'Razorpay', amount: '₹4,999.00', item: 'CivilBook · Provider subscription', ref: 'order_Nx7K2' },
  { gateway: 'Stripe', amount: '$129.00', item: 'Civilbook · Service booking', ref: 'pi_3PqLm' },
  { gateway: 'Razorpay', amount: '₹1,499.00', item: 'Kingresearch · Premium pass', ref: 'order_Kr9W1' },
];

/** Animated console that walks one transaction at a time through the payment lifecycle. */
const PaymentConsole: React.FC = () => {
  const reduce = useReducedMotion();
  const [txIndex, setTxIndex] = useState(0);
  const [step, setStep] = useState(reduce ? lifecycle.length : 0);

  useEffect(() => {
    if (reduce) return;
    const t = setTimeout(
      () => {
        if (step < lifecycle.length) setStep(step + 1);
        else {
          setStep(0);
          setTxIndex((i) => (i + 1) % transactions.length);
        }
      },
      step < lifecycle.length ? 850 : 2600,
    );
    return () => clearTimeout(t);
  }, [step, reduce]);

  const tx = transactions[txIndex];
  const done = step >= lifecycle.length;

  return (
    <div className="relative glow-border rounded-2xl">
      <div className="relative rounded-2xl bg-[#0b0e17]/95 backdrop-blur border border-white/[0.08] p-5 sm:p-6 shadow-2xl shadow-black/80">
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
            </span>
            <span className="ml-2 font-mono-code text-xs font-semibold text-slate-300 uppercase tracking-wider">
              payments.log
            </span>
            <span className="text-[10px] font-mono-code text-slate-500">· simulated</span>
          </div>
          <AnimatePresence mode="wait">
            <motion.span
              key={tx.gateway + txIndex}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              className={`font-mono-code text-[11px] px-2 py-0.5 rounded border ${
                tx.gateway === 'Stripe'
                  ? 'text-indigo-300 bg-indigo-950/60 border-indigo-700/40'
                  : 'text-sky-300 bg-sky-950/60 border-sky-700/40'
              }`}
            >
              {tx.gateway}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Transaction header */}
        <AnimatePresence mode="wait">
          <motion.div
            key={txIndex}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.35 }}
            className="flex items-center justify-between py-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-cyan-300" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{tx.item}</p>
                <p className="text-[11px] font-mono-code text-slate-500">{tx.ref}</p>
              </div>
            </div>
            <p className="text-lg font-bold font-mono-code text-white">{tx.amount}</p>
          </motion.div>
        </AnimatePresence>

        {/* Lifecycle steps */}
        <ol className="relative space-y-1.5">
          <div className="absolute left-[15px] top-3 bottom-3 w-px bg-white/[0.08]" />
          <motion.div
            className="absolute left-[15px] top-3 w-px bg-gradient-to-b from-cyan-400 to-emerald-400"
            animate={{ height: `calc(${(Math.min(step, lifecycle.length - 1) / (lifecycle.length - 1)) * 100}% - 24px)` }}
            transition={{ duration: 0.5, ease }}
          />
          {lifecycle.map((s, i) => {
            const state = i < step ? 'done' : i === step ? 'active' : 'idle';
            return (
              <li key={s.id} className="relative flex items-center gap-3 py-1">
                <span
                  className={`relative z-10 w-[31px] h-[31px] rounded-full flex items-center justify-center border transition-colors duration-300 ${
                    state === 'done'
                      ? 'bg-emerald-500/15 border-emerald-400/60'
                      : state === 'active'
                        ? 'bg-cyan-500/15 border-cyan-400'
                        : 'bg-slate-900 border-white/10'
                  }`}
                >
                  {state === 'done' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : state === 'active' ? (
                    <Loader2 className="w-4 h-4 text-cyan-300 animate-spin" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                  )}
                </span>
                <div className="flex-1 flex items-center justify-between gap-2 min-w-0">
                  <span
                    className={`font-mono-code text-xs truncate transition-colors ${
                      state === 'idle' ? 'text-slate-500' : 'text-slate-100'
                    }`}
                  >
                    {s.event}
                  </span>
                  <span className="text-[10px] font-mono-code text-slate-500 shrink-0">{s.owner}</span>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-4 h-11 flex items-center">
          <AnimatePresence mode="wait">
            {done ? (
              <motion.div
                key="ok"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold"
              >
                <ShieldCheck className="w-4 h-4" />
                Verified, recorded and reconciled. No client-side trust.
              </motion.div>
            ) : (
              <motion.p
                key={step}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-xs text-slate-400 leading-relaxed"
              >
                {lifecycle[step].detail}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleResumeClick = () => {
    triggerConfetti();
    onOpenResume();
  };

  const item = (d: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: d, ease },
  });

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="aurora w-[520px] h-[520px] bg-cyan-600/25 -top-40 -left-32" />
      <div className="aurora w-[480px] h-[480px] bg-indigo-600/25 top-10 right-[-120px]" style={{ animationDelay: '-6s' }} />
      <div className="aurora w-[360px] h-[360px] bg-emerald-600/15 bottom-[-120px] left-1/3" style={{ animationDelay: '-12s' }} />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div {...item(0)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-slate-300 backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-signal" />
              <span className="font-mono-code text-[11px] text-emerald-300 tracking-wider uppercase font-semibold">
                {profileData.status}
              </span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="text-slate-400 items-center gap-1 hidden sm:flex">
                <MapPin className="w-3 h-3" />
                {profileData.location}
              </span>
            </motion.div>

            <div className="space-y-3">
              <motion.h1 {...item(0.08)} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gradient leading-[1.02]">
                {profileData.name}
              </motion.h1>
              <motion.div {...item(0.16)} className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base sm:text-lg lg:text-xl font-medium">
                <span className="text-cyan-400 font-semibold">{profileData.role}</span>
                <span className="text-slate-600">•</span>
                <span className="text-indigo-300">{profileData.specialization}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300">{profileData.leadership}</span>
              </motion.div>
            </div>

            <motion.p {...item(0.24)} className="text-lg sm:text-xl text-slate-200 max-w-2xl leading-relaxed">
              {profileData.tagline}
            </motion.p>

            <motion.p {...item(0.3)} className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              <strong className="text-white">Stripe</strong> and <strong className="text-white">Razorpay</strong> integrated in almost every
              product I have shipped, including the <strong className="text-cyan-300">CivilBook</strong> marketplace apps with{' '}
              <strong className="text-cyan-300">100K+ downloads</strong>. Node.js, React, PostgreSQL, MongoDB, AWS and LLM integrations.
            </motion.p>

            {/* Mini stats */}
            <motion.div {...item(0.36)} className="grid grid-cols-3 gap-3 max-w-lg">
              {[
                { v: 6, s: '', l: 'Live Play Store apps', icon: Smartphone },
                { v: 200, s: 'K+', l: 'Installs', icon: ArrowDown },
                { v: 2, s: '', l: 'Payment gateways', icon: CreditCard },
              ].map((m) => (
                <div key={m.l} className="rounded-xl bg-white/[0.03] border border-white/[0.08] px-3 py-3">
                  <CountUp to={m.v} suffix={m.s} className="block text-2xl sm:text-3xl font-extrabold font-mono-code text-white" />
                  <span className="text-[11px] text-slate-400 leading-tight">{m.l}</span>
                </div>
              ))}
            </motion.div>

            <motion.div {...item(0.42)} className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#payments"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-sm font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>See Payment Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#apps"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-500/50 text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
              >
                <Smartphone className="w-4 h-4 text-cyan-400" />
                <span>Live Apps</span>
              </a>
              <button
                onClick={handleResumeClick}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-slate-300 hover:text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Resume</span>
              </button>
            </motion.div>

            <motion.div {...item(0.5)} className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
                <LinkedInIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>{profileData.linkedinDisplay}</span>
              </a>
              <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
                <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                <span>{profileData.githubDisplay}</span>
              </a>
              <button onClick={handleCopyEmail} className="inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors cursor-pointer" title="Click to copy email address">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>{copiedEmail ? 'Copied to clipboard!' : profileData.email}</span>
              </button>
              <a href={`tel:${profileData.phone.replace(/\s+/g, '')}`} className="inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{profileData.phone}</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 40, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.3, ease }}
            style={{ perspective: 1200 }}
          >
            <PaymentConsole />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
