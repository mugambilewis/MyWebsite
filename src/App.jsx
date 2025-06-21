import React from 'react';
import { Navigation } from '/src/components/Navigation';
import { HeroSection } from '/src/components/HeroSection.jsx';
import ParticleBackground from './components/ParticleBackground';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';

import { ContactSection } from './components/ContactSection';

function App() {
  

  return (
      <div className="min-h-screen bg-background text-foreground font-inter">
        <AnimatedBackground />
        <Navigation />
        <main>
          
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ServicesSection />
          <ProjectsSection />
          <ContactSection />
          <ParticleBackground />
          <Footer />
        </main>
      </div>
     
    
  )
}

export default App
