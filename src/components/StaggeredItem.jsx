// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export function StaggeredItem({ children }) {
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={item}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      layout // ✅ Helps with dynamic content
    >
      {children}
    </motion.div>
  );
}
