import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';

// Advanced scroll-triggered animations
export function ScrollReveal({ 
  children, 
  direction = 'up', 
  distance = 50, 
  duration = 0.6, 
  delay = 0,
  triggerOnce = true,
  threshold = 0.1,
  className = ''
}) {
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  });

  const directionVariants = {
    up: { y: distance, opacity: 0 },
    down: { y: -distance, opacity: 0 },
    left: { x: distance, opacity: 0 },
    right: { x: -distance, opacity: 0 },
    scale: { scale: 0.8, opacity: 0 },
    rotate: { rotate: -10, opacity: 0 },
  };

  const variants = {
    hidden: directionVariants[direction],
    visible: { 
      x: 0, 
      y: 0, 
      scale: 1, 
      rotate: 0, 
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Parallax scrolling effect
export function ParallaxScroll({ children, speed = 0.5, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
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

// Staggered reveal with advanced timing
export function StaggeredReveal({ 
  children, 
  stagger = 0.1, 
  direction = 'up',
  distance = 30,
  className = '',
  triggerOnce = true 
}) {
  const [ref, inView] = useInView({
    triggerOnce,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? distance : -distance,
      scale: 0.95,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={itemVariants}>{children}</motion.div>
      }
    </motion.div>
  );
}

// Text reveal with typewriter effect
export function TextReveal({ 
  text, 
  className = '',
  delay = 0,
  duration = 0.05,
  triggerOnce = true 
}) {
  const [ref, inView] = useInView({
    triggerOnce,
    threshold: 0.5,
  });

  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [currentIndex, inView, text, duration]);

  useEffect(() => {
    if (inView && currentIndex === 0) {
      const initialDelay = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayedText('');
      }, delay * 1000);
      return () => clearTimeout(initialDelay);
    }
  }, [inView, delay]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </motion.span>
  );
}

// Scroll progress indicator
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
      style={{ scaleX }}
    />
  );
}

// Floating elements with scroll-based movement
export function FloatingElement({ 
  children, 
  intensity = 1,
  speed = 1,
  className = '' 
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50 * intensity]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360 * speed]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Magnetic hover effect
export function MagneticHover({ children, intensity = 0.3, className = '' }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    element.style.transform = `translate(${x * intensity}px, ${y * intensity}px)`;
  };

  const handleMouseLeave = () => {
    const element = ref.current;
    if (!element) return;
    element.style.transform = 'translate(0px, 0px)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  );
}

// Morphing background shapes
export function MorphingShapes({ className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div
      ref={ref}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <motion.div
        style={{ rotate }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
      />
      <motion.div
        style={{ 
          rotate: useTransform(scrollYProgress, [0, 1], [360, 0]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8])
        }}
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-xl"
      />
    </motion.div>
  );
}

// Scroll-triggered counter animation
export function AnimatedCounter({ 
  end, 
  duration = 2, 
  suffix = '', 
  prefix = '',
  className = '' 
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime;
    const startCount = 0;
    const endCount = end;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startCount + (endCount - startCount) * easeOutQuart);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [inView, end, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
}

// Import useState for TextReveal and AnimatedCounter
import { useState } from 'react';
