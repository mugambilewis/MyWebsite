import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';

import { Navigation } from '@/components/Navigation';
import  HeroSection  from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FAQsSection} from '@/components/FAQsSection';
import { SmoothScrollProvider, ScrollProgressIndicator } from '@/components/SmoothScroll';
import { ScrollToTop } from '@/components/ScrollProgressBar';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <SmoothScrollProvider>
        <div className="min-h-screen bg-background font-inter">
          <ScrollProgressIndicator />
          <Navigation />
          <CustomCursor />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ServicesSection />
            <ProjectsSection />
            <ContactSection />
            <TestimonialsSection />
            <FAQsSection />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </SmoothScrollProvider>
    </ThemeProvider>
  );
};

export default Index;