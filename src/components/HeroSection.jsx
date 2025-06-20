import React from 'react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-8 md:px-16 pt-16">
      <div className="max-w-[1440px] w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-space font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Mugambi Lewis
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 font-inter max-w-2xl">
                Building the Future with Engineering, Code & Design
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-foreground/60">
              <p className="font-inter">📧 mugambilewis001@gmail.com</p>
              <p className="font-inter">📱 +254 794 644-395</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('#projects')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                🚀 View My Work
              </Button>
              <Button
                onClick={() => scrollToSection('#contact')}
                variant="outline"
                className="border-2 border-border/40 bg-background/60 backdrop-blur-sm hover:bg-accent/80 px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
              >
                📩 Contact Me
              </Button>
            </div>
          </div>

          {/* Right Column - Avatar */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center animate-glow">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-space font-bold">
                  ML
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-float" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in">
          <div className="space-y-2">
            <div className="text-3xl font-space font-bold text-blue-500">20+</div>
            <div className="text-foreground/70">Projects Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-space font-bold text-purple-500">10+</div>
            <div className="text-foreground/70">Happy Clients</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-space font-bold text-blue-500">3+</div>
            <div className="text-foreground/70">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
