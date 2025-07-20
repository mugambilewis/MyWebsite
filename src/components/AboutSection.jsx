import React, { useState } from 'react';
import { Button } from "@/components/ui/Button";

import { Card } from '@/components/ui/Card';


export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const expertiseAreas = [
    {
      title: 'Mechanical Engineering',
      description: "I bring hands-on experience in energy systems, prototyping, and real-world problem solving. I’m ready to contribute to engineering teams working on practical, innovative solutions.",
      icon: '⚙️',
    },
    {
      title: 'Web Development',
      description: "I build responsive, fast, and user-centered websites using modern tools like React, JavaScript, and Tailwind. My code is clean. My designs are built to convert.",
      icon: '💻',
    },
    {
      title: 'Visual Design',
      description: "I create sharp, intentional visuals — from brand identities to social media graphics. I design to connect, communicate, and leave a lasting impression. If you're building a product, launching a campaign, or just need a designer who understands structure and impact — I’m your guy.",
      icon: '🎨',
    },
  ];

  return (
    <section id="about" className="py-20 px-8 md:px-16" style={{ backgroundColor: 'hsl(var(--muted)/0.3)' }}>
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">About Me</h2>
          
          
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              I’m Mugambi Lewis — a Mechanical Engineer with a creative edge in Web Development and Graphic Design. I solve real-world problems through engineering precision and digital innovation.
            </p>
          
        </div>

        {/* Expandable Section */}
        <div className={`transition-all duration-500 ${isExpanded ? 'max-h-none' : 'max-h-96 overflow-hidden'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Avatar & Intro */}
            
              <div className="text-center lg:text-left">
                <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center mb-6">
                  <img className="w-40 h-40 rounded-full flex items-center justify-center object-cover" 
                    src="https://res.cloudinary.com/drq4idzdj/image/upload/v1751158413/_0167f670-210e-435f-9b1c-2a852f8eb6b8_uhszec.jpg"
                    alt="Mugambi Lewis"
                  />
                   
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I'm a versatile creator at the intersection of Engineering, Design, and Technology. <br /><br />
                  I’ve designed energy systems like solar EV chargers, developed modern websites with React and Tailwind, and built strong brand visuals for individuals and businesses.
                  <br /><br />
                  I’m open to working with engineering firms, startups, and clients who need reliable, impactful solutions — whether physical or digital. Let’s build something that works.
                  I believe in solutions that perform — whether they run on code, energy, or ideas.
                </p>
              </div>
            

            {/* Expertise Cards */}
            <div className="space-y-6">
              {expertiseAreas.map((area) => (
               
                  <Card className="p-6 bg-background/60 backdrop-blur-sm border-border/40 hover:shadow-lg transition-all duration-300 hover:scale-105">
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
              

              
                <div className="flex items-center space-x-6 p-6 bg-background/60 backdrop-blur-sm rounded-xl border border-border/40">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    🎓
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Bachelor of Mechanical Engineering</h4>
                    <p className="text-foreground/70">Murang'a University of Technology • 2021–2025</p>
                  </div>
                </div>
             

              
                <div className="flex items-center space-x-6 p-6 bg-background/60 backdrop-blur-sm rounded-xl border border-border/40">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    🏆
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Full Stack Web Development</h4>
                    <p className="text-foreground/70">FreeCodeCamp • 2023–Present</p>
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
// This code defines an AboutSection component that displays information about Mugambi Lewis, including his expertise in Mechanical Engineering, Web Development, and Visual Design. It features an expandable section for more details, animated fade-in effects, and a toggle button to show or hide additional content.