import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MotionWrapperProps {
  children: ReactNode;
}

const MotionWrapper: FC<MotionWrapperProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
