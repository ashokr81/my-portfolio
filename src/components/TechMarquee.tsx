import React from 'react';

const items = [
  'Stripe', 'Razorpay', 'Node.js', 'Express', 'TypeScript', 'React', 'Next.js', 'PostgreSQL', 'MongoDB',
  'Redis', 'BullMQ', 'AWS EC2 · S3 · RDS', 'Docker', 'GitHub Actions', 'WebSockets', 'WebRTC',
  'OpenAI', 'Claude', 'Gemini', 'MCP', 'RAG', 'Flutter',
];

export const TechMarquee: React.FC = () => (
  <div className="marquee overflow-hidden py-6 border-b border-white/[0.06] bg-[#08090d]">
    <div className="marquee-track gap-3">
      {[...items, ...items].map((t, i) => (
        <span
          key={i}
          className="shrink-0 mx-1.5 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-sm text-slate-300 font-medium whitespace-nowrap"
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);
