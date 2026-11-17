import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProofMetrics } from './components/ProofMetrics';
import { TechMarquee } from './components/TechMarquee';
import { PaymentsSection } from './components/PaymentsSection';
import { PlayStoreApps } from './components/PlayStoreApps';
import { AboutSection } from './components/AboutSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ArchitectureLab } from './components/ArchitectureLab';
import { AiSection } from './components/AiSection';
import { TechStackSection } from './components/TechStackSection';
import { CredentialsSection } from './components/CredentialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Reveal, ScrollProgress } from './components/motion';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const openResume = () => setIsResumeOpen(true);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      <ScrollProgress />
      <Navbar onOpenResume={openResume} />

      <main className="flex-1 w-full">
        {/* Hero with live payment-lifecycle console */}
        <Hero onOpenResume={openResume} />

        {/* Tech ribbon */}
        <TechMarquee />

        {/* Animated impact metrics */}
        <ProofMetrics />

        {/* Payment engineering: Stripe, Razorpay, lifecycle, safety practices */}
        <PaymentsSection />

        {/* Six apps live on Google Play */}
        <PlayStoreApps />

        <Reveal><AboutSection /></Reveal>
        <Reveal><ExperienceTimeline /></Reveal>

        {/* Deep-dive case studies: Civilbook, KingResearch, Peepul Agri */}
        <Reveal><FeaturedProjects /></Reveal>
        <Reveal><ArchitectureLab /></Reveal>
        <Reveal><AiSection /></Reveal>
        <Reveal><TechStackSection /></Reveal>
        <Reveal><CredentialsSection /></Reveal>
        <Reveal><ContactSection onOpenResume={openResume} /></Reveal>
      </main>

      <Footer onOpenResume={openResume} />

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

export default App;
