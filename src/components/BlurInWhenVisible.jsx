// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export function BlurInWhenVisible({ children, delay = 0 }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // enable scroll up/down re-activation
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}