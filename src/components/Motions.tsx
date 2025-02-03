import { FC, ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface MotionWrapperProps extends MotionProps {
  children: ReactNode;
  sectionId: keyof typeof motionVariants;
}

const motionVariants = {
  hero: {
    initial: { opacity: 0, scale: 0.3 },
    whileInView: { opacity: 1, scale: 1 },
  },
  aboutMe: {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
  },
  education: {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
  },
  skills: {
    initial: { opacity: 0, scale: 0.3 },
    whileInView: { opacity: 1, scale: 1 },
  },
  portfolio: {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
  },
  workExperience: {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
  },
  contact: {
    initial: { opacity: 0, scale: 0.3 },
    whileInView: { opacity: 1, scale: 1 },
  },
};

const MotionWrapper: FC<MotionWrapperProps> = ({
  children,
  sectionId,
  ...props
}) => {
  const variants = motionVariants[sectionId];

  return (
    <motion.div
      initial={variants.initial}
      whileInView={variants.whileInView}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
