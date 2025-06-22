import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const expertiseAreas = [
    {
      title: 'Mechanical Engineering',
      description: 'CAD Design, Simulations, and Product Development',
      icon: '⚙️',
    },
    {
      title: 'Web Development',
      description: 'Full-stack applications with modern technologies',
      icon: '💻',
    },
    {
      title: 'Content Creation',
      description: 'Branding, Strategy, and Digital Presence',
      icon: '🎨',
    },
  ];

  return (
    <section id="about" className="py-20 px-8 md:px-16 " style={{backgroundColor: 'hsl(var(--muted)/0.3)'}}>
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">About Me</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            I'm a passionate engineer and designer who loves creating innovative solutions
            that bridge the gap between technical excellence and user experience.
          </p>
        </div>

        {/* Expandable Section */}
        <div className={`transition-all duration-500 ${isExpanded ? 'max-h-none' : 'max-h-96 overflow-hidden'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Avatar & Intro */}
            <div className="text-center lg:text-left">
              <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center mb-6">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-space font-bold">
                  ML
                </div>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                With a unique blend of mechanical engineering expertise and modern web development skills,
                I bring an analytical mindset to every project. My journey spans from designing complex
                mechanical systems to crafting elegant digital experiences.
              </p>
            </div>

            {/* Expertise Cards */}
            <div className="space-y-6">
              {expertiseAreas.map((area, index) => (
                <Card
                  key={index}
                  className="p-6 bg-background/60 backdrop-blur-sm border-border/40 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{area.icon}</div>
                    <div>
                      <h3 className="text-xl font-space font-semibold mb-2">{area.title}</h3>
                      <p className="text-foreground/70">{area.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Expanded Timeline */}
          {isExpanded && (
            <div className="space-y-12 animate-fade-in">
              <h3 className="text-2xl font-space font-bold mb-8 text-center">Education & Certifications</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-6 p-6 bg-background/60 backdrop-blur-sm rounded-xl border border-border/40">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    🎓
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Bachelor of Mechanical Engineering</h4>
                    <p className="text-foreground/70">University Name • 2018–2022</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 p-6 bg-background/60 backdrop-blur-sm rounded-xl border border-border/40">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    🏆
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Full Stack Web Development</h4>
                    <p className="text-foreground/70">Various Certifications • 2020–Present</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Toggle Button */}
        <div className="text-center mt-8">
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="outline"
            className="px-8 py-3 rounded-xl border-2 border-border/40 bg-background/60 backdrop-blur-sm hover:bg-accent/80 transition-all duration-300"
          >
            {isExpanded ? 'Show Less' : 'See More'}
          </Button>
        </div>
      </div>
    </section>
  );
}
