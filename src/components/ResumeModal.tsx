import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, Mail, Phone, MapPin } from 'lucide-react';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { profileData } from '../data/profile';
import { triggerConfetti } from '../utils/confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    triggerConfetti();
    const resumeText = `ASHOK RONGALI
Senior Full Stack Developer • Flutter Specialist • Team Lead
Phone: +91 7287071050 | Email: rongalaashok25@gmail.com | LinkedIn: https://linkedin.com/in/ashok-r-7bbab2242 | Location: Visakhapatnam, India

PROFESSIONAL SUMMARY
High-impact Senior Full Stack Mobile Developer and Engineering Team Lead with 4 years of enterprise and 4+ years of freelance experience delivering high-performance cross-platform architectures. Currently heading a 6-member cross-functional engineering team at Fugen Webtech, controlling core technical design, database scaling, and production delivery. Proven record of launching 6+ complex apps across FinTech, IoT, Agriculture, and E-commerce landscapes, collectively powering 10K to 50K+ production downloads.

CORE COMPETENCIES
- Mobile Platforms: Flutter (Primary), Dart, React Native, Android, iOS
- Web Frameworks: React.js, Node.js, Express.js, TypeScript, JavaScript
- State & Data: Bloc, GetX, WebRTC Audio, WebSockets, MQTT Protocol
- Databases & Infra: MySQL, PostgreSQL, MongoDB, SQL, Firebase, Pocketbase, AWS (EC2, S3, RDS)
- DevOps & Tooling: Git, GitHub, GitLab, CI/CD (GitHub Actions, GitLab CI), Cron Jobs, Schedulers
- AI Integration: LLM API Orchestration (Gemini, Claude, OpenAI), Custom AI Agents, Recommendation Engines
- Architecture: MVVM, Clean Architecture, Feature-First Design, Query Optimization, Engineering Leadership

PROFESSIONAL EXPERIENCE
Lead Full Stack Developer @ Fugen Webtech (March 2024 – Present | Vijayawada, India)
- Engineering Leadership: Command a 6-person engineering team; introduced standardized architecture, uniform code review metrics, and automated staging deployment workflows.
- Backend Optimization: Refactored legacy relational structures via defensive indexing and optimized subqueries, securing a measurable 35% reduction in API response latency.
- System Automation: Programmed fault-tolerant Node.js cron modules and asynchronous task schedulers to handle high-frequency data aggregations and cross-platform notifications.
- Full-Stack Architecture: Direct end-to-end engineering cycles spanning Flutter mobile systems, structural React.js administrative layers, and stateful Node.js/Express layers.

Software Developer @ Orotron (August 2022 – Feb 2024 | Hyderabad, India)
- Performance Engineering: Identified and mitigated complex UI rendering bottlenecks, generating a 30% increase in active user engagement by boosting screen-load fluidness.
- Operational Efficiency: Spearheaded unified debugging patterns that slashed time-to-market production delivery loops by 15% across the iOS and Android applications.
- Agile Delivery: Directed architectural scaffolding for custom business lines across IoT, FinTech, and Agriculture verticals using the Flutter and Dart toolsets.

Independent Full Stack Developer @ Freelance Ecosystem (2020 – 2023 | Remote)
- Architected and launched tailored production applications for global clients, defining business system logic, full-stack frameworks, and cloud-native hosting environments.

KEY PRODUCTION SYSTEMS
1. Civilbook — Marketplace Companions (User & Provider Apps)
   Flutter • React.js • Node.js • Express • PostgreSQL • WebRTC • Firebase
   - Streaming & Call Infra: Engineered highly stable WebRTC sound streams and WebSocket channels to provide instantaneous peer-to-peer messaging and media distribution.
   - Location Mechanics: Implemented reactive Google Maps geometric radius filters (30-60 km) paired with asynchronous background location streaming.

2. KingResearch Academy — Real-Time Analytics Engine
   Flutter • Bloc • MVVM • WebSockets • Razorpay
   - Sub-Second Streaming: Developed low-latency WebSocket subscription streams ensuring real-time index calculations and live trading board updates for active users.

3. Peepul Agri — Agricultural IoT Platform
   Flutter • GetX • MQTT Protocol • EMAQ Systems
   - Low-Bandwidth Resiliency: Implemented MQTT networks integrated with persistent retry buffers, ensuring flawless execution of remote machine controls in low-signal areas.

EDUCATION & CREDENTIALS
B.Tech in Electronics & Communication Engineering
RGUKT-IIIT, Srikakulam • CGPA: 9.3 / 10 | Graduated: 2019 – 2023

PROFESSIONAL CERTIFICATIONS
- Flutter with Node.js (Udemy)
- MERN Stack Development (CCBP)
- Firebase with Flutter (Udemy)
`;
    const element = document.createElement('a');
    const file = new Blob([resumeText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Ashok_Rongali_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`ASHOK RONGALI - Senior Full Stack Developer & Flutter Specialist
Email: rongalaashok25@gmail.com | Phone: +91 7287071050 | LinkedIn: https://linkedin.com/in/ashok-r-7bbab2242`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0f18] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-[#090b10]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 font-mono-code text-xs font-bold">
              AR
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Verified Career Resume</h3>
              <p className="text-xs text-slate-400 font-mono-code">
                Source of Truth Document • Updated 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>
            <button
              onClick={handlePrint}
              className="hidden sm:flex px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 text-xs font-semibold items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Document Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-300 text-xs sm:text-sm font-sans">
          {/* Header */}
          <div className="border-b border-white/10 pb-5 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              {profileData.name}
            </h1>
            <div className="text-cyan-400 font-semibold font-mono-code text-xs sm:text-sm">
              Senior Full Stack Developer • Flutter Specialist • Team Lead
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-cyan-400" />
                {profileData.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-indigo-400" />
                {profileData.email}
              </span>
              <span>•</span>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-cyan-300 hover:underline"
              >
                <LinkedInIcon className="w-3 h-3" />
                {profileData.linkedinDisplay}
              </a>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-400" />
                {profileData.location}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h2 className="font-mono-code text-xs font-bold text-white uppercase tracking-wider">
              Professional Summary
            </h2>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              {profileData.summary}
            </p>
          </div>

          {/* Core Competencies Table */}
          <div className="space-y-2">
            <h2 className="font-mono-code text-xs font-bold text-white uppercase tracking-wider">
              Core Competencies
            </h2>
            <div className="rounded-xl border border-white/10 overflow-hidden divide-y divide-white/10 text-xs">
              <div className="grid grid-cols-12 p-2.5 bg-white/[0.02]">
                <div className="col-span-4 sm:col-span-3 font-semibold text-slate-400 font-mono-code uppercase">
                  Mobile Platforms
                </div>
                <div className="col-span-8 sm:col-span-9 text-slate-200">
                  Flutter (Primary), Dart, React Native, Android, iOS
                </div>
              </div>
              <div className="grid grid-cols-12 p-2.5">
                <div className="col-span-4 sm:col-span-3 font-semibold text-slate-400 font-mono-code uppercase">
                  Web Frameworks
                </div>
                <div className="col-span-8 sm:col-span-9 text-slate-200">
                  React.js, Node.js, Express.js, TypeScript, JavaScript
                </div>
              </div>
              <div className="grid grid-cols-12 p-2.5 bg-white/[0.02]">
                <div className="col-span-4 sm:col-span-3 font-semibold text-slate-400 font-mono-code uppercase">
                  State & Data
                </div>
                <div className="col-span-8 sm:col-span-9 text-slate-200">
                  Bloc, GetX, WebRTC Audio, WebSockets, MQTT Protocol
                </div>
              </div>
              <div className="grid grid-cols-12 p-2.5">
                <div className="col-span-4 sm:col-span-3 font-semibold text-slate-400 font-mono-code uppercase">
                  Databases & Infra
                </div>
                <div className="col-span-8 sm:col-span-9 text-slate-200">
                  MySQL, PostgreSQL, MongoDB, SQL, Firebase, Pocketbase, AWS (EC2, S3, RDS)
                </div>
              </div>
              <div className="grid grid-cols-12 p-2.5 bg-white/[0.02]">
                <div className="col-span-4 sm:col-span-3 font-semibold text-slate-400 font-mono-code uppercase">
                  DevOps & Tooling
                </div>
                <div className="col-span-8 sm:col-span-9 text-slate-200">
                  Git, GitHub, GitLab, CI/CD (GitHub Actions, GitLab CI), Cron Jobs, Schedulers
                </div>
              </div>
              <div className="grid grid-cols-12 p-2.5">
                <div className="col-span-4 sm:col-span-3 font-semibold text-slate-400 font-mono-code uppercase">
                  AI Integration
                </div>
                <div className="col-span-8 sm:col-span-9 text-slate-200">
                  LLM API Orchestration (Gemini, Claude, OpenAI), Custom AI Agents, Recommendation Engines
                </div>
              </div>
              <div className="grid grid-cols-12 p-2.5 bg-white/[0.02]">
                <div className="col-span-4 sm:col-span-3 font-semibold text-slate-400 font-mono-code uppercase">
                  Architecture
                </div>
                <div className="col-span-8 sm:col-span-9 text-slate-200">
                  MVVM, Clean Architecture, Feature-First Design, Query Optimization, Engineering Leadership
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="font-mono-code text-xs font-bold text-white uppercase tracking-wider">
              Professional Experience
            </h2>

            {/* Fugen */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-white text-sm">
                  Lead Full Stack Developer @ Fugen Webtech
                </h3>
                <span className="font-mono-code text-xs text-cyan-400">
                  March 2024 – Present | Vijayawada, India
                </span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li>• <strong>Engineering Leadership:</strong> Command a 6-person engineering team; introduced standardized architecture, uniform code review metrics, and automated staging deployment workflows.</li>
                <li>• <strong>Backend Optimization:</strong> Refactored legacy relational structures via defensive indexing and optimized subqueries, securing a measurable <strong>35% reduction in API response latency</strong>.</li>
                <li>• <strong>System Automation:</strong> Programmed fault-tolerant Node.js cron modules and asynchronous task schedulers to handle high-frequency data aggregations and cross-platform notifications.</li>
                <li>• <strong>Full-Stack Architecture:</strong> Direct end-to-end engineering cycles spanning Flutter mobile systems, structural React.js administrative layers, and stateful Node.js/Express layers.</li>
              </ul>
            </div>

            {/* Orotron */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-white text-sm">
                  Software Developer @ Orotron
                </h3>
                <span className="font-mono-code text-xs text-cyan-400">
                  August 2022 – Feb 2024 | Hyderabad, India
                </span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li>• <strong>Performance Engineering:</strong> Identified and mitigated complex UI rendering bottlenecks, generating a <strong>30% increase in active user engagement</strong> by boosting screen-load fluidness.</li>
                <li>• <strong>Operational Efficiency:</strong> Spearheaded unified debugging patterns that slashed time-to-market production delivery loops by <strong>15%</strong> across the iOS and Android applications.</li>
                <li>• <strong>Agile Delivery:</strong> Directed architectural scaffolding for custom business lines across IoT, FinTech, and Agriculture verticals using the Flutter and Dart toolsets.</li>
              </ul>
            </div>

            {/* Freelance */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-white text-sm">
                  Independent Full Stack Developer @ Freelance Ecosystem
                </h3>
                <span className="font-mono-code text-xs text-cyan-400">
                  2020 – 2023 | Remote
                </span>
              </div>
              <ul className="space-y-1 text-xs text-slate-300">
                <li>• Architected and launched tailored production applications for global clients, defining business system logic, full-stack frameworks, and cloud-native hosting environments.</li>
              </ul>
            </div>
          </div>

          {/* Key Production Systems */}
          <div className="space-y-3">
            <h2 className="font-mono-code text-xs font-bold text-white uppercase tracking-wider">
              Key Production Systems
            </h2>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5 text-xs">
              <div className="font-bold text-white">
                Civilbook — Marketplace Companions (User & Provider Apps)
              </div>
              <div className="text-cyan-400 font-mono-code text-[11px]">
                Flutter • React.js • Node.js • Express • PostgreSQL • WebRTC • Firebase
              </div>
              <p className="text-slate-300">
                • <strong>Streaming & Call Infra:</strong> Engineered highly stable WebRTC sound streams and WebSocket channels to provide instantaneous peer-to-peer messaging and media distribution.<br />
                • <strong>Location Mechanics:</strong> Implemented reactive Google Maps geometric radius filters (30-60 km) paired with asynchronous background location streaming.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5 text-xs">
              <div className="font-bold text-white">
                KingResearch Academy — Real-Time Analytics Engine
              </div>
              <div className="text-cyan-400 font-mono-code text-[11px]">
                Flutter • Bloc • MVVM • WebSockets • Razorpay
              </div>
              <p className="text-slate-300">
                • <strong>Sub-Second Streaming:</strong> Developed low-latency WebSocket subscription streams ensuring real-time index calculations and live trading board updates for active users.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5 text-xs">
              <div className="font-bold text-white">
                Peepul Agri — Agricultural IoT Platform
              </div>
              <div className="text-cyan-400 font-mono-code text-[11px]">
                Flutter • GetX • MQTT Protocol • EMAQ Systems
              </div>
              <p className="text-slate-300">
                • <strong>Low-Bandwidth Resiliency:</strong> Implemented MQTT networks integrated with persistent retry buffers, ensuring flawless execution of remote machine controls in low-signal areas.
              </p>
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs space-y-1">
              <h2 className="font-mono-code text-xs font-bold text-white uppercase">Education</h2>
              <div className="font-bold text-slate-200">B.Tech in Electronics & Communication Engineering</div>
              <div className="text-slate-400">RGUKT-IIIT, Srikakulam • CGPA: 9.3 / 10</div>
              <div className="text-slate-500 font-mono-code">Graduated: 2019 – 2023</div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs space-y-1">
              <h2 className="font-mono-code text-xs font-bold text-white uppercase">Certifications</h2>
              <div className="text-slate-300">• Flutter with Node.js (Udemy)</div>
              <div className="text-slate-300">• MERN Stack Development (CCBP)</div>
              <div className="text-slate-300">• Firebase with Flutter (Udemy)</div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-[#090b10] flex items-center justify-between">
          <button
            onClick={handleCopy}
            className="text-xs font-mono-code text-slate-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Details copied' : 'Copy Contact Details'}</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-white border border-white/10 transition-colors cursor-pointer"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
