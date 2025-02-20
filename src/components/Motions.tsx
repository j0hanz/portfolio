import { FC, ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';

const transition = {
  duration: 0.8,
  delay: 0.1,
  ease: 'easeInOut',
};

interface MotionWrapperProps extends MotionProps {
  children: ReactNode;
  sectionId: keyof typeof motionVariants;
}

const motionVariants = {
  hero: { initial: { opacity: 0 }, whileInView: { opacity: 1 } },
  aboutMe: {
    initial: { opacity: 0, y: 95 },
    whileInView: { opacity: 1, y: 0 },
  },
  education: {
    initial: { opacity: 0, y: 95 },
    whileInView: { opacity: 1, y: 0 },
  },
  skills: { initial: { opacity: 0, y: 95 }, whileInView: { opacity: 1, y: 0 } },
  portfolio: {
    initial: { opacity: 0, y: 95 },
    whileInView: { opacity: 1, y: 0 },
  },
  workExperience: {
    initial: { opacity: 0, y: 95 },
    whileInView: { opacity: 1, y: 0 },
  },
  contact: {
    initial: { opacity: 0, y: 95 },
    whileInView: { opacity: 1, y: 0 },
  },
};

const MotionWrapper: FC<MotionWrapperProps> = ({
  children,
  sectionId,
  ...props
}) => (
  <motion.div
    initial={motionVariants[sectionId].initial}
    whileInView={motionVariants[sectionId].whileInView}
    transition={transition}
    {...props}
  >
    {children}
  </motion.div>
);

export { MotionWrapper };
