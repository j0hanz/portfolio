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

const defaultVariant = {
  initial: { opacity: 0, y: 95 },
  whileInView: { opacity: 1, y: 0 },
};

const motionVariants = {
  hero: { initial: { opacity: 0 }, whileInView: { opacity: 1 } },
  aboutMe: defaultVariant,
  education: defaultVariant,
  skills: defaultVariant,
  portfolio: defaultVariant,
  workExperience: defaultVariant,
  contact: defaultVariant,
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

export { MotionWrapper, motionVariants };
