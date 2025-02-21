import { FC, ReactNode, memo } from 'react';
import { MotionWrapper, motionVariants } from '@/components/Motions';

interface SectionWrapperProps {
  sectionId: keyof typeof motionVariants;
  children: ReactNode;
}

const SectionWrapper: FC<SectionWrapperProps> = ({ sectionId, children }) => (
  <MotionWrapper sectionId={sectionId}>{children}</MotionWrapper>
);

export default memo(SectionWrapper);
