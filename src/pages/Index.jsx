import React from 'react';

import HeroSection from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import CustomCursor from '@/components/CustomCursor';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FAQsSection } from '@/components/FAQsSection';
import { ScrollProgressIndicator } from '@/components/SmoothScroll';
import { ScrollToTop } from '@/components/ScrollProgressBar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <ScrollProgressIndicator />
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
      <ScrollToTop />
    </div>
  );
};

export default Index;