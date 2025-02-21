import { FC, ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';

const transition = {
  duration: 0.8,
  delay: 0.2,
  ease: 'easeInOut',
};

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
  slideFromLeft: {
    initial: { opacity: 0, x: -95 },
    whileInView: { opacity: 1, x: 0 },
  },
  slideFromRight: {
    initial: { opacity: 0, x: 95 },
    whileInView: { opacity: 1, x: 0 },
  },
  slideFromLeftAndRight: {
    initial: { opacity: 0, x: -95 },
    whileInView: { opacity: 1, x: 95 },
  },
};

interface MotionWrapperProps extends MotionProps {
  children: ReactNode;
  sectionId: keyof typeof motionVariants;
}

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

interface SlideFromSideProps extends MotionProps {
  children: ReactNode;
  from: 'left' | 'right';
}

const SlideFromSide: FC<SlideFromSideProps> = ({
  children,
  from,
  ...props
}) => {
  const initialX = from === 'left' ? -100 : 100;
  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export { MotionWrapper, SlideFromSide, motionVariants };
