import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface GlowButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  glowIntensity?: 'subtle' | 'medium' | 'strong';
  href?: string;
  className?: string;
}

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const variantStyles = {
  primary: 'bg-[#6366f1] text-white font-semibold',
  secondary: 'bg-transparent border border-[#6366f1] text-[#6366f1]',
};

const glowIntensityStyles = {
  subtle: {
    boxShadow: '0 0 15px rgba(99, 102, 241, 0.2)',
  },
  medium: {
    boxShadow: '0 0 25px rgba(99, 102, 241, 0.3)',
  },
  strong: {
    boxShadow: '0 0 40px rgba(99, 102, 241, 0.4)',
  },
};

export const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  glowIntensity = 'medium',
  href,
  className = '',
  onClick,
  ...props
}) => {
  const baseStyles = 'rounded-4xl transition-all duration-300 cursor-pointer inline-block';
  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`.trim();

  const hoverAnimation = {
    scale: 1.02,
    ...glowIntensityStyles[glowIntensity],
  };

  // If href is provided, render as a link
  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        whileHover={hoverAnimation}
        whileTap={{ scale: 0.98 }}
        {...(props as any)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combinedClassName}
      whileHover={hoverAnimation}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default GlowButton;
