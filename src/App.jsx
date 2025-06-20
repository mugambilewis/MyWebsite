import React from 'react';
import { Navigation } from '/src/components/Navigation';
import { HeroSection } from '/src/components/HeroSection.jsx';
import ParticleBackground from './components/ParticleBackground';
import Footer from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { ThemeProvider } from './components/ThemeProvider';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';

function App() {
  

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background font-inter">
        <AnimatedBackground />
        <Navigation />
        <main>
          
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ServicesSection />
          <ProjectsSection />
          <ParticleBackground />
        </main>
      </div>
     </ThemeProvider>
    
  )
}

export default App
