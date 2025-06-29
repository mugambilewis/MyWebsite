

import { Button } from "@/components/ui/Button";

import { ArrowUp, Linkedin, Github, Mail, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mugambi-lewis-64051332b/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/mugambilewis', label: 'GitHub' },
    { icon: Mail, href: 'mailto:mugambilewis001@gmail.com', label: 'Email' },
    { icon: Facebook, href: 'https://www.facebook.com/mugambi.lewis.7', label: 'Facebook' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 px-8 md:px-16 bg-background/60 backdrop-blur-sm border-t border-border/40">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-space font-bold text-white">
                ML
              </div>
              <span className="text-xl font-space font-bold">Mugambi Lewis</span>
            </div>
            <div className="space-y-1 text-foreground/70">
              <p>© {currentYear} Mugambi Lewis</p>
              <p>Designed & Built with Passion</p>
            </div>
          </div>

          {/* Center Column - Navigation */}
          <div className="md:text-center">
            <h4 className="font-space font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground/70 hover:text-foreground transition-colors duration-200 text-left md:text-center"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Social Links */}
          <div className="md:text-right">
            <h4 className="font-space font-semibold mb-4">Connect</h4>
            <div className="flex md:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-background/60 backdrop-blur-sm border border-border/40 rounded-full flex items-center justify-center hover:bg-accent/80 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm mb-4 md:mb-0">
              Built with React, TypeScript & Tailwind CSS
            </p>
            
            {/* Scroll to Top Button */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="group border-border/40 bg-background/60 backdrop-blur-sm hover:bg-accent/80 transition-all duration-300 hover:scale-110"
            >
              <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
