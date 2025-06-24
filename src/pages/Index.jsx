import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background font-inter">
        <AnimatedBackground />
        <Navigation />
        <main>
          <CustomCursor />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ServicesSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;