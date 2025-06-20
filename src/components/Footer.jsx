import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold font-space text-gradient">
            Mugambi Lewis
          </div>
          <p className="text-muted-foreground">
            Building the future with code, design & engineering
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <a href="mailto:contact@mugambilewis.com" className="hover:text-primary transition-colors">
              contact@mugambilewis.com
            </a>
            <span>•</span>
            <a href="tel:+1234567890" className="hover:text-primary transition-colors">
              +1 (234) 567-8900
            </a>
          </div>
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2024 Mugambi Lewis. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;