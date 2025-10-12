import { useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

// Smooth scroll behavior setup
export function SmoothScrollProvider({ children }) {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add custom scroll behavior for better performance
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Custom scroll handling can be added here
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return <>{children}</>;
}

// Scroll progress indicator with gradient
export function ScrollProgressIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
      style={{ scaleX, opacity }}
    >
      <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
    </motion.div>
  );
}

// Scroll-triggered navigation highlight
export function ScrollNavigation({ sections = [] }) {
  const { scrollYProgress } = useScroll();
  
  // This can be used to highlight navigation items based on scroll position
  // Implementation would depend on your navigation structure
  
  return null; // Placeholder for now
}

// Parallax container for sections
export function ParallaxSection({ 
  children, 
  speed = 0.5, 
  className = '',
  offset = ["start end", "end start"]
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Scroll-triggered reveal with multiple effects
export function AdvancedReveal({ 
  children, 
  effect = 'fadeUp',
  delay = 0,
  duration = 0.8,
  className = '',
  triggerOnce = true,
  threshold = 0.1
}) {
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  });

  const effects = {
    fadeUp: {
      hidden: { opacity: 0, y: 60, scale: 0.95 },
      visible: { opacity: 1, y: 0, scale: 1 }
    },
    fadeDown: {
      hidden: { opacity: 0, y: -60, scale: 0.95 },
      visible: { opacity: 1, y: 0, scale: 1 }
    },
    fadeLeft: {
      hidden: { opacity: 0, x: 60, scale: 0.95 },
      visible: { opacity: 1, x: 0, scale: 1 }
    },
    fadeRight: {
      hidden: { opacity: 0, x: -60, scale: 0.95 },
      visible: { opacity: 1, x: 0, scale: 1 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8, rotate: -5 },
      visible: { opacity: 1, scale: 1, rotate: 0 }
    },
    slideUp: {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0 }
    },
    slideDown: {
      hidden: { opacity: 0, y: -100 },
      visible: { opacity: 1, y: 0 }
    },
    blur: {
      hidden: { opacity: 0, filter: 'blur(10px)', y: 30 },
      visible: { opacity: 1, filter: 'blur(0px)', y: 0 }
    }
  };

  const variants = effects[effect] || effects.fadeUp;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Import required dependencies
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';


