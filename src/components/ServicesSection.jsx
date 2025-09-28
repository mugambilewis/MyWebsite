import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from "@/components/ui/Button";
import { StaggeredReveal } from '@/components/StaggeredReveal';
import { StaggeredItem } from '@/components/StaggeredItem';

export function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState(null); // 👈 track individual card
  const [showAll, setShowAll] = useState(false); // 👈 track visibility of all cards

    const services = [
    {
      title: 'Mechanical Engineering Solutions',
      description: 'I provide precise and innovative engineering services, from concept to functional prototypes, supported by strong technical documentation and visualization.',
      icon: '⚙️',
      features: [
        'Product Design & Prototyping',
        '2D/3D CAD Drafting (SolidWorks, AutoCAD)',
        'Simulation & Motion Analysis',
        'Manufacturing Support & Technical Drawings',
        'Engineering Visualization & Rendering',
      ],
    },
    {
      title: 'Web Development',
      description: 'I design and develop responsive, fast, and SEO-friendly websites that help engineers, businesses, and startups build strong online identities.',
      icon: '🌐',
      features: [
        'Portfolio & Business Websites',
        'Landing Pages & Campaign Sites',
        'API Integration',
        'Performance Optimization',
        'Engineering Dashboards & Data Visualization',
      ],
    },
    {
      title: 'UI/UX & Branding',
      description: 'I craft bold, clean, and memorable visuals that elevate your brand and communicate clearly across digital and technical platforms.',
      icon: '🎨',
      features: [
        'Logo & Brand Identity Design',
        'UI/UX Visual Assets',
        'Social Media Graphics',
        'Engineering Presentation Decks',
        'Ad & Promo Designs',
      ],
    },
    {
      title: 'Digital Content & Visualization',
      description: 'Strategic creation of digital assets and visualizations that make ideas and products stand out.',
      icon: '📱',
      features: [
        '3D Renders & Animations',
        'Product Visualization for Marketing',
        'Social Media Content',
        'Technical Infographics & Carousels',
        'Flyer & Digital Media Design',
      ],
    },
  ];


  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <section id="services" className="py-20 px-8 md:px-16" style={{ backgroundColor: 'hsl(var(--muted)/0.3)' }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">Services</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Comprehensive solutions from concept to completion
          </p>
        </div>

        <StaggeredReveal keyProp={expandedIndex ?? 'collapsed'}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleServices.map((service, index) => {
              const isOpen = expandedIndex === index;

              return (
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

                      {isOpen && (
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
                          onClick={() => setExpandedIndex(isOpen ? null : index)} // 👈 Toggle only this card
                        >
                          {isOpen ? 'Show Less' : 'Learn More →'}
                        </Button>
                      </div>
                    </div>
                  </Card>
                </StaggeredItem>
              );
            })}
          </div>
        </StaggeredReveal>

        {!showAll && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="px-8 py-3 text-lg"
              onClick={() => setShowAll(true)}
            >
              See More Services →
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}