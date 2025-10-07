import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/Button";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Engineering Manager',
      company: 'TechCorp Industries',
      image: '👩‍💼',
      text: 'Outstanding mechanical design work on our automation project. The SolidWorks models were precise and the Ansys simulations helped us avoid costly errors. A true professional.',
      rating: 5,
    },
    {
      name: 'Marcus Johnson',
      role: 'Product Director',
      company: 'InnovateLabs',
      image: '👨‍💻',
      text: 'Transformed our outdated web presence into a modern, responsive platform. The React and TypeScript implementation was clean, efficient, and exceeded expectations.',
      rating: 5,
    },
    {
      name: 'Emily Chen',
      role: 'Creative Director',
      company: 'BrandForge Studio',
      image: '👩‍🎨',
      text: 'Exceptional design sensibility combined with technical expertise. The Figma prototypes translated perfectly into the final product. A rare blend of creativity and engineering.',
      rating: 5,
    },
    {
      name: 'David Rodriguez',
      role: 'CTO',
      company: 'StartupX',
      image: '👨‍💼',
      text: 'Delivered a full-stack solution that scaled beautifully. The Node.js backend was robust and the UI design was intuitive. Highly recommend for complex projects.',
      rating: 5,
    },
    {
      name: 'Lisa Thompson',
      role: 'Operations Lead',
      company: 'Manufacturing Plus',
      image: '👩‍🔧',
      text: 'The AutoCAD drawings and Proteus circuit designs were flawless. Communication was excellent throughout the project and deadlines were consistently met.',
      rating: 5,
    },
    {
      name: 'James Park',
      role: 'Marketing Director',
      company: 'Growth Dynamics',
      image: '👨‍💼',
      text: 'Outstanding brand strategy and visual design work. The Adobe Creative Suite skills really shone through in the final deliverables. Our brand has never looked better.',
      rating: 5,
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 px-8 md:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">Client Testimonials</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Hear from clients and collaborators who've experienced the quality and dedication I bring to every project.
          </p>
        </div>

        <div className="relative">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="group p-6 bg-background/60 backdrop-blur-sm rounded-xl border border-border/40 hover:shadow-lg transition-all duration-300 hover:scale-105"
                style={{
                  animation: 'slideIn 0.5s ease-out',
                }}
              >
                {/* Rating Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground/80 text-center mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex flex-col items-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {testimonial.image}
                  </div>
                  <h4 className="font-space font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-foreground/60">{testimonial.role}</p>
                  <p className="text-xs text-foreground/50">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={handlePrev}
              variant="outline"
              className="px-6 py-2 rounded-xl border-2 border-border/40 bg-background/60 backdrop-blur-sm hover:bg-accent/80 transition-all duration-300"
            >
              ← Previous
            </Button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 w-8'
                      : 'bg-muted hover:bg-foreground/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={handleNext}
              variant="outline"
              className="px-6 py-2 rounded-xl border-2 border-border/40 bg-background/60 backdrop-blur-sm hover:bg-accent/80 transition-all duration-300"
            >
              Next →
            </Button>
          </div>

          {/* Auto-play toggle */}
          <div className="text-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-foreground/60 hover:text-foreground/90 transition-colors duration-300"
            >
              {isAutoPlaying ? '⏸ Pause' : '▶ Auto-play'}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}