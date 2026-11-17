import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useSpring, animate, useReducedMotion } from 'framer-motion';

/** Fades + lifts its children into view once, as the user scrolls. */
export const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}> = ({ children, delay = 0, y = 28, className }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

/** Staggered grid: each child animates in a beat after the previous one. */
export const Stagger: React.FC<{ children: React.ReactNode; className?: string; gap?: number }> = ({
  children,
  className,
  gap = 0.08,
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-60px' }}
    variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
  >
    {children}
  </motion.div>
);

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 24, scale: 0.98 },
      show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
    }}
  >
    {children}
  </motion.div>
);

/** Counts from 0 to `to` when scrolled into view. */
export const CountUp: React.FC<{ to: number; decimals?: number; prefix?: string; suffix?: string; className?: string }> = ({
  to,
  decimals = 0,
  prefix = '',
  suffix = '',
  className,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
};

/** Thin gradient bar pinned to the top that fills as the page scrolls. */
export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400"
    />
  );
};

/** Card that tracks the pointer with a soft spotlight glow. */
export const SpotlightCard: React.FC<{ children: React.ReactNode; className?: string; glow?: string }> = ({
  children,
  className = '',
  glow = 'rgba(34,211,238,0.14)',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`spotlight-card relative overflow-hidden ${className}`}
      style={{ ['--glow' as string]: glow } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

/** Section heading with eyebrow chip, used by the new sections. */
export const SectionHeading: React.FC<{
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  icon?: React.ReactNode;
  align?: 'left' | 'center';
}> = ({ eyebrow, title, subtitle, icon, align = 'left' }) => (
  <Reveal className={align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}>
    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40 text-[11px] font-mono-code text-cyan-300 mb-3 tracking-wider uppercase">
      {icon}
      {eyebrow}
    </div>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">{title}</h2>
    {subtitle && <p className="text-base text-slate-400 mt-4 leading-relaxed">{subtitle}</p>}
  </Reveal>
);
