import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProofMetrics } from './components/ProofMetrics';
import { AboutSection } from './components/AboutSection';
import { EngineeringDna } from './components/EngineeringDna';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ArchitectureLab } from './components/ArchitectureLab';
import { TechStackSection } from './components/TechStackSection';
import { LeadershipSection } from './components/LeadershipSection';
import { PerformanceSection } from './components/PerformanceSection';
import { AiSection } from './components/AiSection';
import { CredentialsSection } from './components/CredentialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Sticky Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Above-The-Fold Verified Metrics */}
        <ProofMetrics />

        {/* About: Engineer Behind the System */}
        <AboutSection />

        {/* Engineering DNA */}
        <EngineeringDna />

        {/* Vertical Career Experience Timeline */}
        <ExperienceTimeline />

        {/* Featured Case Studies: Civilbook, KingResearch, Peepul Agri */}
        <FeaturedProjects />

        {/* Signature Architecture Lab: How I Think About Systems */}
        <ArchitectureLab />

        {/* Categorized Tech Stack */}
        <TechStackSection />

        {/* Engineering Leadership */}
        <LeadershipSection />

        {/* Performance Engineering */}
        <PerformanceSection />

        {/* AI Integration */}
        <AiSection />

        {/* Education & Certifications */}
        <CredentialsSection />

        {/* Professional Contact & Call to Action */}
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Resume Document Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
