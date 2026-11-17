import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Download, Printer, Copy, Check, Mail, Phone, MapPin } from 'lucide-react';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { profileData } from '../data/profile';
import { triggerConfetti } from '../utils/confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/** Based on public/Ashok_Rongali_Resume.pdf (the PDF served by the Download button). */
const resume = {
  title: 'Full Stack Engineer | MERN Stack | Agentic AI',
  summary:
    'Full Stack MERN & Agentic AI Developer with 3.5+ years of enterprise and around 4 years of freelance experience architecting multi-tenant web applications, scalable Node.js/Express backends, and autonomous Generative AI agent workflows. Stripe and Razorpay integrated in almost every product shipped, including the CivilBook marketplace apps (100K+ downloads). Proficient in LLM integrations across OpenAI, Anthropic Claude and Gemini, agentic tool-calling, Model Context Protocol (MCP) and Cloudflare AutoRAG vector retrieval pipelines.',
  competencies: [
    ['Payments', 'Stripe, Razorpay, Payment Webhooks, Signature Verification, Transaction Lifecycle, Refunds, Subscriptions'],
    ['Generative & Agentic AI', 'OpenAI Function Calling, Model Context Protocol (MCP), Cloudflare AutoRAG, Prompt Engineering, Anthropic Claude, Google Gemini, Embeddings'],
    ['Frontend', 'React.js, Next.js, Redux Toolkit, Context API, TypeScript, JavaScript (ES6+), HTML5, Tailwind CSS'],
    ['Backend & Node.js', 'Node.js, Express.js, RESTful APIs, GraphQL, Microservices, JWT/OAuth, WebSocket (Socket.io), WebRTC'],
    ['Caching & Queues', 'Redis (Caching, Pub/Sub), BullMQ (Async Queues, Delayed Retries)'],
    ['Databases', 'Multi-Tenant Schema Design, MongoDB (Mongoose, Aggregations), PostgreSQL (Prisma), MySQL'],
    ['DevOps & Cloud', 'AWS (EC2, S3, RDS), Cloudflare Workers & Vectorize, Docker, CI/CD (GitHub Actions), Nginx, Cron Jobs, Git'],
  ],
  experience: [
    {
      role: 'Senior Full Stack Developer',
      company: 'Fugen Webtech',
      period: 'December 2024 – Present',
      location: 'Vijayawada, India',
      points: [
        ['Payments', 'Integrated Stripe and Razorpay across the CivilBook User and Provider apps: server-side orders, SDK checkout, verified webhooks and status sync.'],
        ['Agentic Tool-Calling & LLM Automation', 'Autonomous workflows using OpenAI function-calling and MCP servers to automate property documentation summaries and contractor compliance evaluations.'],
        ['RAG & Intelligent Retrieval', 'Cloudflare AutoRAG vector ingestion for context-aware search across unstructured construction contracts.'],
        ['Async Task Scheduling', 'BullMQ & Redis job queues for AI embeddings, batch notifications and invoice generation, reducing primary API response times by 40%.'],
        ['Full-Stack CRM & Multi-Tenant Design', 'Architected Civilbook Admin Web CRM (React.js, Node.js, Express, PostgreSQL) with multi-tenant isolation, granular RBAC and analytics.'],
      ],
    },
    {
      role: 'Backend & Full Stack Developer',
      company: 'Orotron',
      period: 'May 2023 – November 2024',
      location: 'Hyderabad, India',
      points: [
        ['API & Microservices', 'Scalable Node.js and Express microservices powering multi-platform apps across FinTech and IoT domains.'],
        ['Real-Time Event Processing', 'High-throughput Socket.io and streaming ingestion engines, lowering event dispatch latency by 30% with 99.9% uptime.'],
        ['Database Design & Caching', 'Normalized PostgreSQL schemas and MongoDB collections with Redis caching, cutting repeated query loads by 45%.'],
        ['Performance Optimization', 'Refactored subqueries and API bottlenecks, reducing server response cycles by 20%.'],
      ],
    },
    {
      role: 'Independent Full Stack Developer',
      company: 'Freelance Ecosystem',
      period: '2020 – Present',
      location: 'Remote',
      points: [
        ['Delivery', 'Full-stack platforms, SaaS tools and cloud backends for global clients with MERN, Next.js, Redis and AWS (EC2/S3/RDS).'],
        ['AI', 'Integrated Claude, OpenAI and Gemini APIs to build intelligent assistants, automated summarizers and client portals.'],
      ],
    },
  ],
  projects: [
    ['CivilBook User & Provider Apps — Construction Marketplace', 'Node.js • Express • PostgreSQL • Redis • BullMQ • WebSockets • WebRTC • Stripe • Razorpay', 'Backend and REST APIs for paired customer and provider apps (100K+ / 10K+ Play Store downloads); PostGIS 30–60 km radius search; live audio and job bidding.'],
    ['Civilbook Admin Web Platform — CRM Hub', 'React.js • Node.js • Express.js • PostgreSQL • Redis • BullMQ • MCP • AWS S3', 'KYC verification, booking lifecycles, commission payouts, multi-tenant RBAC and audit logs for financial records.'],
    ['KingResearch Academy — Real-Time Analytics Backend', 'Node.js • Express.js • MongoDB • Redis • WebSockets • Razorpay', 'Low-latency WebSocket streams and Redis Pub/Sub for live index analytics; Razorpay payments.'],
    ['Orbidian Web — Enterprise Services Portal', 'React.js • Node.js • Express.js • MongoDB • Tailwind CSS', 'Enterprise portal with content management, lead generation and automated email workflows.'],
    ['Lifestyle Tracker — Wellness SaaS', 'MERN • Redis • JWT • OpenAI API', 'Client-facing SaaS for habits and metrics with JWT sessions, encrypted storage and trend endpoints.'],
  ],
  certifications: ['MERN Stack Development (CCBP)', 'Node.js & Microservices Architecture (Udemy)', 'Full Stack Web Development & Cloud (AWS)'],
};

const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="font-mono-code text-xs font-bold text-cyan-300 uppercase tracking-wider">{children}</h2>
);

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const handleDownload = () => {
    triggerConfetti();
    const a = document.createElement('a');
    a.href = `${import.meta.env.BASE_URL}Ashok_Rongali_Resume.pdf`;
    a.download = 'Ashok_Rongali_Full_Stack_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `ASHOK RONGALI - ${resume.title}\nEmail: ${profileData.email} | Phone: ${profileData.phone} | LinkedIn: ${profileData.linkedin}`,
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0f18] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-[#090b10]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 font-mono-code text-xs font-bold">
                  AR
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Resume</h3>
                  <p className="text-xs text-slate-400 font-mono-code">Full Stack Engineer · Payments · AI</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownload}
                  className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>
                <button
                  onClick={() => window.print()}
                  className="hidden sm:flex px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 text-xs font-semibold items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close resume"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-7 text-slate-300 text-xs sm:text-sm">
              <div className="border-b border-white/10 pb-5 space-y-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">{profileData.name}</h1>
                <div className="text-cyan-400 font-semibold font-mono-code text-xs sm:text-sm">{resume.title}</div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 pt-1">
                  <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-cyan-400" />{profileData.phone}</span>
                  <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-indigo-400" />{profileData.email}</span>
                  <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-cyan-300 hover:underline">
                    <LinkedInIcon className="w-3 h-3" />{profileData.linkedinDisplay}
                  </a>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-emerald-400" />{profileData.location}</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <H2>Professional Summary</H2>
                <p className="leading-relaxed">{resume.summary}</p>
              </div>

              <div className="space-y-2">
                <H2>Core Competencies</H2>
                <div className="rounded-xl border border-white/10 overflow-hidden divide-y divide-white/10 text-xs">
                  {resume.competencies.map(([k, v], i) => (
                    <div key={k} className={`grid grid-cols-12 gap-2 p-2.5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                      <div className="col-span-4 sm:col-span-3 font-semibold text-slate-400 font-mono-code uppercase">{k}</div>
                      <div className="col-span-8 sm:col-span-9 text-slate-200">{v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <H2>Professional Experience</H2>
                {resume.experience.map((e) => (
                  <div key={e.company} className="space-y-1.5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div className="font-bold text-white text-sm">
                        {e.role} <span className="text-cyan-400">@ {e.company}</span>
                      </div>
                      <div className="text-[11px] font-mono-code text-slate-400">{e.period} | {e.location}</div>
                    </div>
                    <ul className="space-y-1">
                      {e.points.map(([k, v]) => (
                        <li key={k} className="leading-relaxed">• <strong className="text-slate-100">{k}:</strong> {v}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <H2>Key Production Systems</H2>
                {resume.projects.map(([name, stack, desc]) => (
                  <div key={name} className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5 text-xs">
                    <div className="font-bold text-white">{name}</div>
                    <div className="text-cyan-400 font-mono-code text-[11px]">{stack}</div>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs space-y-1">
                  <H2>Education</H2>
                  <div className="font-bold text-slate-200 pt-1">B.Tech in Electronics & Communication Engineering</div>
                  <div className="text-slate-400">RGUKT-IIIT, Srikakulam • CGPA: 9.0 / 10</div>
                  <div className="text-slate-500 font-mono-code">Graduated: 2019 – 2023</div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs space-y-1">
                  <H2>Certifications</H2>
                  {resume.certifications.map((c) => (
                    <div key={c} className="text-slate-300 pt-1">• {c}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-white/10 bg-[#090b10] flex items-center justify-between">
              <button onClick={handleCopy} className="text-xs font-mono-code text-slate-400 hover:text-white flex items-center gap-1.5 cursor-pointer">
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Details copied' : 'Copy contact details'}</span>
              </button>
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-white border border-white/10 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
