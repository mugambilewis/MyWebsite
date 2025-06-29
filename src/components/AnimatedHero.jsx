// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
    },
  },
};

export default function AnimatedHero({ children }) {
  return (
    <motion.div
      className="relative overflow-hidden"
      variants={heroContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={heroItemVariants}>
              {child}
            </motion.div>
          ))
        : (
            <motion.div variants={heroItemVariants}>{children}</motion.div>
          )}
    </motion.div>
  );
}
