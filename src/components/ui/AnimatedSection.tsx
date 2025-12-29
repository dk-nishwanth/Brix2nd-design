import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { entranceVariants, entranceTransition, EntranceAnimation } from '../../lib/animations';

export interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: EntranceAnimation;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.6,
  className = '',
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  const variants: Variants = entranceVariants[animation];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
      variants={variants}
      transition={{
        ...entranceTransition,
        duration,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
