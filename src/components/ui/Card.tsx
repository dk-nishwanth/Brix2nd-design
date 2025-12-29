import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { hoverLiftAnimation, glowEffects, GlowColor } from '../../lib/animations';

export type ColSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type RowSpan = 1 | 2 | 3;

export interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  colSpan?: ColSpan;
  rowSpan?: RowSpan;
  variant?: 'default' | 'featured' | 'minimal';
  hoverGlow?: boolean;
  glowColor?: GlowColor;
  className?: string;
}

const colSpanClasses: Record<ColSpan, string> = {
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-4',
  5: 'col-span-5',
  6: 'col-span-6',
  7: 'col-span-7',
  8: 'col-span-8',
  9: 'col-span-9',
  10: 'col-span-10',
  11: 'col-span-11',
  12: 'col-span-12',
};

const rowSpanClasses: Record<RowSpan, string> = {
  1: 'row-span-1',
  2: 'row-span-2',
  3: 'row-span-3',
};

const variantStyles = {
  default: 'bg-card rounded-4xl p-12',
  featured: 'bg-card rounded-4xl p-14 border border-neon-green/20',
  minimal: 'bg-transparent rounded-4xl p-10',
};

export const Card: React.FC<CardProps> = ({
  children,
  colSpan = 4,
  rowSpan = 1,
  variant = 'default',
  hoverGlow = false,
  glowColor = 'neonGreen',
  className = '',
  ...props
}) => {
  const baseStyles = variantStyles[variant];
  const spanStyles = `${colSpanClasses[colSpan]} ${rowSpanClasses[rowSpan]}`;
  const combinedClassName = `${baseStyles} ${spanStyles} ${className}`.trim();

  // Build hover animation based on props
  const hoverAnimation = hoverGlow
    ? {
        ...hoverLiftAnimation,
        ...glowEffects[glowColor],
      }
    : hoverLiftAnimation;

  return (
    <motion.div
      className={combinedClassName}
      initial={{ y: 0, boxShadow: 'none' }}
      whileHover={hoverAnimation}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Export animation config for testing
export const cardHoverConfig = {
  liftAmount: -5,
  glowEffects,
};

export default Card;
