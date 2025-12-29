import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface PillContainerProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  variant?: 'default' | 'outlined' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  glowColor?: 'neonGreen' | 'electricPurple' | 'none';
  as?: React.ElementType;
}

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const variantStyles = {
  default: 'bg-card border border-transparent',
  outlined: 'bg-transparent border border-text-secondary',
  filled: 'bg-neon-green text-body border border-transparent',
};

const glowStyles = {
  neonGreen: 'hover:shadow-[0_0_30px_rgba(204,255,0,0.3)]',
  electricPurple: 'hover:shadow-[0_0_30px_rgba(157,78,221,0.3)]',
  none: '',
};

export const PillContainer: React.FC<PillContainerProps> = ({
  children,
  variant = 'default',
  size = 'md',
  glowColor = 'none',
  className = '',
  as: Component = 'div',
  ...props
}) => {
  const baseStyles = 'rounded-4xl transition-shadow duration-300';
  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${glowStyles[glowColor]} ${className}`.trim();

  // Use motion.div for simplicity
  return (
    <motion.div {...props} className={combinedClassName}>
      {children}
    </motion.div>
  );
};

export default PillContainer;
