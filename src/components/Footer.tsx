import React from 'react';
import { ArrowUp, FileText } from 'lucide-react';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { GithubIcon } from './icons/GithubIcon';
import { profileData } from '../data/profile';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070a] border-t border-white/[0.08] py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-white/[0.06]">
          {/* Logo & Identity */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-900 to-[#121622] border border-cyan-500/30 flex items-center justify-center font-mono-code font-bold text-xs text-cyan-400">
                AR
              </div>
              <span className="font-bold text-base text-white">{profileData.name}</span>
            </div>
            <p className="text-xs text-slate-400 max-w-md font-mono-code">
              {profileData.role} • {profileData.specialization} • {profileData.leadership}
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenResume}
              className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono-code text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Verified Resume</span>
            </button>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono-code text-slate-300 hover:text-white flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
              <span>GitHub</span>
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono-code text-slate-300 hover:text-white flex items-center gap-1.5"
            >
              <LinkedInIcon className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-400 hover:text-white cursor-pointer"
              aria-label="Back to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Verified Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono-code">
          <div>
            © {new Date().getFullYear()} Ashok Rongali. All technical claims verified against enterprise production systems.
          </div>
          <div className="flex items-center gap-4">
            <span>Visakhapatnam, India</span>
            <span>•</span>
            <span className="text-cyan-400/80">Built with React, Vite & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
