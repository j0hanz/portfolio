import { FC, ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface MotionWrapperProps extends MotionProps {
  children: ReactNode;
  sectionId: keyof typeof motionVariants;
}

const motionVariants = {
  hero: {
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
  },
  aboutMe: {
    initial: { opacity: 0, y: -90 },
    whileInView: { opacity: 1, y: 0 },
  },
  education: {
    initial: { opacity: 0, y: 90 },
    whileInView: { opacity: 1, y: 0 },
  },
  skills: {
    initial: { opacity: 0, y: -90 },
    whileInView: { opacity: 1, y: 0 },
  },
  portfolio: {
    initial: { opacity: 0, y: 90 },
    whileInView: { opacity: 1, y: 0 },
  },
  workExperience: {
    initial: { opacity: 0, y: -90 },
    whileInView: { opacity: 1, y: 0 },
  },
  contact: {
    initial: { opacity: 0, y: 90 },
    whileInView: { opacity: 1, y: 0 },
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
      whileInView={variants.whileInView || {}}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface ObjectSideEffectMotionProps extends MotionProps {
  children: ReactNode;
  direction?: 'left' | 'right';
}

const ObjectSideEffect = {
  left: {
    initial: { opacity: 0, x: -90 },
    whileInView: { opacity: 1, x: 0 },
  },
  right: {
    initial: { opacity: 0, x: 90 },
    whileInView: { opacity: 1, x: 0 },
  },
};

const ObjectSideEffectMotion: FC<ObjectSideEffectMotionProps> = ({
  children,
  direction = 'left',
  ...props
}) => {
  const variants = ObjectSideEffect[direction];

  return (
    <motion.div
      initial={variants.initial}
      whileInView={variants.whileInView}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface ObjectScaleEffectMotionProps extends MotionProps {
  children: ReactNode;
}

const ObjectScaleEffect = {
  initial: { opacity: 0, scale: 0.7 },
  whileInView: { opacity: 1, scale: 1 },
};

const ObjectScaleEffectMotion: FC<ObjectScaleEffectMotionProps> = ({
  children,
  ...props
}) => {
  return (
    <motion.div
      initial={ObjectScaleEffect.initial}
      whileInView={ObjectScaleEffect.whileInView}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export { MotionWrapper, ObjectSideEffectMotion, ObjectScaleEffectMotion };
