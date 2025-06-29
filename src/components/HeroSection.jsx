
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/Button";

import { Mail, Phone, Star, Users, Code  } from 'lucide-react';



const FloatingParticle = ({ delay = 0 }) => {
  return (
    <div 
      className="particle w-2 h-2 opacity-60"
      style={{
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );
};

const AnimatedCounter = ({ end, label, icon: Icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center group hover:scale-105 transition-transform duration-300">
      <div className="flex items-center justify-center mb-2">
        {Icon && <Icon className="w-8 h-8 text-primary mr-2" />}
        <span className="text-3xl font-bold gradient-text">{count}+</span>
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex   px-8 md:px-16 items-center relative overflow-hidden lg:pt-16 pt-22 ">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

      <div className="max-w-[1440px] mx-auto ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up  order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">
                  Mugambi Lewis
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Building the Future with{' '}
                <span className="text-primary font-semibold">Engineering</span>,{' '}
                <span className="text-primary font-semibold">Code</span> &{' '}
                <span className="text-primary font-semibold">Design</span>
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>mugambilewis001@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+254 794 644395</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="glow-effect">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <AnimatedCounter end={20} label="Projects" icon={Code} />
              <AnimatedCounter end={10} label="Happy Clients" icon={Users} />
              <AnimatedCounter end={3} label="Years Experience" icon={Star} />
            </div>
          </div>

          {/* Right Content - Avatar & Graphics */}
          <div className="relative flex justify-center animate-slide-in-right order-1 lg:order-2">
            <div className="relative">
              {/* Main Avatar Container */}
              <div className="w-72 h-72 lg:w-90 lg:h-90 relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-xl animate-glow-pulse" />
                
                {/* Avatar Image */}
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/30">
                  <img
                    src="https://res.cloudinary.com/drq4idzdj/image/upload/v1751158402/_e7303a7f-2d68-4eee-935c-1fed60f32136_tqhnqf.jpg"
                    alt="Mugambi Lewis"
                    className="w-72 h-72 lg:w-82 lg:h-82 rounded-full object-cover"
                  />
                </div>

                {/* Floating Icons */}
   <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-bounce">
  <Code className="w-6 h-6 text-primary" />
</div>
<div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center animate-pulse">
  <Star className="w-6 h-6 text-accent" />
</div>
<div className="absolute top-1/2 -right-8 w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center animate-spin">
  <Users className="w-5 h-5 text-secondary" />
</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;