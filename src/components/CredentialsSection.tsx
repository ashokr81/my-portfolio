import React from 'react';
import { educationData, certificationsData } from '../data/certifications';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';

export const CredentialsSection: React.FC = () => {
  return (
    <section id="credentials" className="py-16 bg-[#090b10] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono-code text-cyan-400">
              <GraduationCap className="w-3.5 h-3.5" />
              ACADEMIC FOUNDATION
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Education & Honors
            </h2>

            <div className="p-6 rounded-2xl bg-[#0b0e17] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono-code text-xs text-indigo-300 font-semibold">
                  {educationData.period}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/50 text-emerald-300 font-mono-code text-xs font-bold">
                  {educationData.gradeLabel}: {educationData.grade}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  {educationData.degree} in {educationData.field}
                </h3>
                <div className="text-xs sm:text-sm text-cyan-400 font-mono-code mt-0.5">
                  {educationData.institution}
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] space-y-2">
                {educationData.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono-code text-indigo-300">
              <Award className="w-3.5 h-3.5" />
              VERIFIED CREDENTIALS
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Professional Certifications
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {certificationsData.map((cert) => (
                <div
                  key={cert.name}
                  className="p-5 rounded-2xl bg-[#0b0e17] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono-code text-slate-500 mb-2">
                      <span>{cert.issuer}</span>
                      <Award className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1.5">{cert.name}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{cert.focus}</p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-white/[0.06] text-[10px] font-mono-code text-indigo-300">
                    {cert.verificationBadge}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
