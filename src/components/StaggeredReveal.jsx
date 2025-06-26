// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export function StaggeredReveal({ children, stagger = 0.15, keyProp }) {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  return (
    <motion.div
      key={keyProp} // 👈 Forces remount when key changes (e.g., isExpanded state)
      variants={container}
      initial="hidden"
      animate="visible"
      layout
    >
      {children}
    </motion.div>
  );
}
