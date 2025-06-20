
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export function SkillsSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const skillCategories = [
    {
      category: 'Engineering Tools',
      skills: [
        { name: 'AutoCAD', level: 90, icon: '📐' },
        { name: 'SolidWorks', level: 85, icon: '🔧' },
        { name: 'MATLAB', level: 80, icon: '📊' },
        { name: 'Ansys', level: 75, icon: '🧮' },
      ],
    },
    {
      category: 'Programming & Frameworks',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'TypeScript', level: 90, icon: '📝' },
        { name: 'Tailwind CSS', level: 95, icon: '🎨' },
        { name: 'Node.js', level: 85, icon: '🟢' },
      ],
    },
    {
      category: 'Design & Branding',
      skills: [
        { name: 'Figma', level: 90, icon: '🎨' },
        { name: 'Adobe Creative Suite', level: 85, icon: '🎭' },
        { name: 'UI/UX Design', level: 88, icon: '✨' },
        { name: 'Brand Strategy', level: 82, icon: '🎯' },
      ],
    },
  ];

  const previewSkills = skillCategories.flatMap(cat => cat.skills).slice(0, 8);

  return (
    <section id="skills" className="py-20 px-8 md:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A diverse toolkit spanning engineering, development, and design
          </p>
        </div>

        {!isExpanded ? (
          /* Preview Grid */
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {previewSkills.map((skill, index) => (
              <div
                key={index}
                className="group p-6 bg-background/60 backdrop-blur-sm rounded-xl border border-border/40 hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-space font-semibold text-sm mb-2">{skill.name}</h3>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-xs text-foreground/60 mt-1 block">{skill.level}%</span>
              </div>
            ))}
          </div>
        ) : (
          /* Full Skills Display */
          <div className="space-y-12 animate-fade-in">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-space font-bold mb-6 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group p-6 bg-background/60 backdrop-blur-sm rounded-xl border border-border/40 hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
                    >
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <h4 className="font-space font-semibold mb-3">{skill.name}</h4>
                      
                      {/* Circular Progress */}
                      <div className="relative w-16 h-16 mx-auto mb-2">
                        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                            className="text-muted"
                          />
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="url(#gradient)"
                            strokeWidth="4"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={`${(skill.level / 100) * 175.929} 175.929`}
                            className="transition-all duration-1000 ease-out"
                          />
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#3B82F6" />
                              <stop offset="100%" stopColor="#8B5CF6" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-semibold">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Toggle Button */}
        <div className="text-center mt-8">
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="outline"
            className="px-8 py-3 rounded-xl border-2 border-border/40 bg-background/60 backdrop-blur-sm hover:bg-accent/80 transition-all duration-300"
          >
            {isExpanded ? 'Show Less' : 'See All Skills'}
          </Button>
        </div>
      </div>
    </section>
  );
}