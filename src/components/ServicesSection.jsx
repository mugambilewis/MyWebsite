import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StaggeredReveal } from '@/components/StaggeredReveal';
import { StaggeredItem } from '@/components/StaggeredItem';

export function ServicesSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const services = [
    {
      title: 'Web Development',
      description: 'I design and develop responsive, fast, and SEO-friendly websites that help businesses, creatives, and startups build strong online identities.',
      icon: '🌐',
      features: ['Portfolio & Business Websites', 'Landing Pages & Campaign Sites', 'API Integration', 'Performance Optimization'],
    },
    {
      title: 'UI/UX & Branding',
      description: 'I craft bold, clean, and memorable visuals that elevate your brand and communicate clearly across digital platforms.',
      icon: '🎨',
      features: ['Logo & Brand Identity Design', 'Social Media Graphics', 'Ad & Promo Designs', 'UI/UX Visual Assets'],
    },
    {
      title: 'Mechanical Engineering Solutions',
      description: 'From technical designs to sustainable systems, I provide engineering services that are precise, efficient, and built for real-world performance.',
      icon: '⚙️',
      features: ['Product Design & Prototyping', 'Solar & Energy System Concepts', '2D/3D CAD Drafting & Simulations', 'Technical Documentation'],
    },
    {
      title: 'Digital Content',
      description: 'Strategic creation and digital presence optimization.',
      icon: '📱',
      features: ['Beautiful Carousels', 'Social Media', 'Digital Media', 'Flyer Design'],
    },
  ];

  const previewServices = services.slice(0, 3);

  return (
    <section id="services" className="py-20 px-8 md:px-16" style={{ backgroundColor: 'hsl(var(--muted)/0.3)' }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">Services</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Comprehensive solutions from concept to completion
          </p>
        </div>

        {/* ✅ Fix: Add keyProp to re-trigger animation on toggle */}
        <StaggeredReveal keyProp={isExpanded ? 'expanded' : 'collapsed'}>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${!isExpanded ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
            {(isExpanded ? services : previewServices).map((service, index) => (
              <StaggeredItem key={index}>
                <Card className="group p-8 bg-background/60 backdrop-blur-sm border-border/40 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  <div className="text-center">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-space font-bold mb-4">{service.title}</h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {isExpanded && (
                      <div className="space-y-3 animate-fade-in">
                        <h4 className="font-semibold text-left mb-3">What's Included:</h4>
                        <ul className="space-y-2 text-left">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                              <span className="text-sm text-foreground/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-6 pt-6 border-t border-border/40">
                      <Button
                        variant="ghost"
                        className="text-blue-500 hover:text-blue-600 font-medium"
                      >
                        Learn More →
                      </Button>
                    </div>
                  </div>
                </Card>
              </StaggeredItem>
            ))}
          </div>
        </StaggeredReveal>

        {/* Toggle Button */}
        <div className="text-center mt-12">
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="outline"
            className="px-8 py-3 rounded-xl border-2 border-border/40 bg-background/60 backdrop-blur-sm hover:bg-accent/80 transition-all duration-300"
          >
            {isExpanded ? 'Show Less' : 'See All Services'}
          </Button>
        </div>
      </div>
    </section>
  );
}
