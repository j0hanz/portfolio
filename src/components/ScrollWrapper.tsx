import { FC, useEffect, useRef, ReactNode } from 'react';
import scrollReveal from 'scrollreveal';

interface ScrollRevealWrapperProps {
  children: ReactNode;
  config?: Partial<scrollReveal.ScrollRevealObject>;
}

const ScrollRevealWrapper: FC<ScrollRevealWrapperProps> = ({ children, config }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sr = scrollReveal({
      origin: 'bottom',
      distance: '20px',
      duration: 1500,
      delay: 100,
      reset: true,
      ...config,
    });

    if (sectionRef.current) {
      sr.reveal(sectionRef.current);
    }
  }, [config]);

  return <div ref={sectionRef}>{children}</div>;
};

export default ScrollRevealWrapper;
