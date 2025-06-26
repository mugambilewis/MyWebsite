import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StaggeredReveal } from '@/components/StaggeredReveal';
import { StaggeredItem } from '@/components/StaggeredItem';
import { Link } from 'react-router-dom';

export function ProjectsSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with React, TypeScript, and Stripe integration',
      tags: ['Web', 'React', 'TypeScript', 'Stripe'],
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
    },
    {
      title: 'Mechanical Component Design',
      description: 'CAD design and simulation of industrial machinery components',
      tags: ['Engineering', 'CAD', 'Simulation', 'AutoCAD'],
      category: 'Engineering',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    },
    {
      title: 'Brand Identity System',
      description: 'Complete visual identity and branding package for tech startup',
      tags: ['Design', 'Branding', 'Figma', 'Identity'],
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800&h=600&fit=crop',
    },
    {
      title: 'HealthTracker',
      description: 'Track health goals, habits, and progress with seamless modern UI.',
      tags: ['Web', 'React', 'Tailwind', 'Animation'],
      category: 'Web',
      image: 'https://res.cloudinary.com/drq4idzdj/image/upload/v1750895103/HealthTackerhub_cbjhcw.png',
      link: 'https://www.healthawarehub.com', // ← ✅ Add this
    },
    {
      title: 'Portable Solar Charger for E-Rickshaw',
      description: 'Engineered a compact, off-grid solar charging system for electric rickshaws. Focused on portability, energy efficiency, and clean power delivery using Proteus simulation and real-world prototyping.',
      tags: ['Engineering', 'Solar Energy', 'Solidworks', 'Proteus', 'Hardware Design'],
      category: 'Engineering',
      image: 'https://res.cloudinary.com/drq4idzdj/image/upload/v1750896880/pexels-kindelmedia-9799700_wycvfj.jpg',
      link: 'https://www.productprototype.com', // ← ✅ Add this
    },
    {
      title: 'Mobile App UI',
      description: 'Modern mobile application interface with seamless user experience',
      tags: ['Design', 'Mobile', 'UI/UX', 'Figma'],
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      route: '/projects/GraphicsShowcase', // ← ✅ Add this
    },
  ];

  const filters = ['All', 'Web', 'Engineering', 'Design'];
  const previewProjects = projects.slice(0, 3);

  const filteredProjects = isExpanded
    ? filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter)
    : previewProjects;

  return (
    <section id="projects" className="py-20 px-8 md:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A showcase of my latest work across engineering, development, and design
          </p>
        </div>

        {/* Filter Buttons */}
        {isExpanded && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filterItem) => (
              <Button
                key={filterItem}
                onClick={() => setFilter(filterItem)}
                variant={filter === filterItem ? 'default' : 'outline'}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === filterItem
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'border-border/40 bg-background/60 backdrop-blur-sm hover:bg-accent/80'
                }`}
              >
                {filterItem}
              </Button>
            ))}
          </div>
        )}

        {/* ✅ Fix: Pass dynamic keyProp to StaggeredReveal */}
        <StaggeredReveal keyProp={`${isExpanded}-${filter}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <StaggeredItem key={index}>
                <Card className="group overflow-hidden bg-background/60 backdrop-blur-sm border-border/40 hover:shadow-xl transition-all duration-500 hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.link ? (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      size="sm"
      className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
    >
      View Project →
    </Button>
  </a>
) : project.route ? (
  <Link to={project.route}>
    <Button
      size="sm"
      className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
    >
      View Project →
    </Button>
  </Link>
) : (
  <Button
    size="sm"
    disabled
    className="bg-white/10 border border-white/20 text-white cursor-not-allowed"
  >
    View Project →
  </Button>
)}


                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-space font-bold mb-3">{project.title}</h3>
                    <p className="text-foreground/70 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs bg-gradient-to-r from-blue-500/10 to-purple-600/10 text-blue-600 dark:text-blue-400 rounded-full border border-blue-500/20"
                        >
                          {tag}
                        </span>
                      ))}
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
            {isExpanded ? 'Show Featured Only' : 'View All Projects'}
          </Button>
        </div>
      </div>
    </section>
  );
}
