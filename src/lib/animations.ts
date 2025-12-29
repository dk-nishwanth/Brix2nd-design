import { Variants, Transition } from 'framer-motion';

// Theme colors for glow effects - Light theme
export const themeColors = {
  neonGreen: '#6366f1',
  electricPurple: '#9D4EDD',
} as const;

// Hover lift animation configuration
export const hoverLiftAnimation = {
  y: -5,
  transition: {
    type: 'spring',
    stiffness: 300,
    damping: 20,
  } as Transition,
};

// Glow effect configurations - Light theme
export const glowEffects = {
  neonGreen: {
    boxShadow: `0 0 30px rgba(99, 102, 241, 0.3)`,
  },
  electricPurple: {
    boxShadow: `0 0 30px rgba(157, 78, 221, 0.3)`,
  },
  none: {
    boxShadow: 'none',
  },
} as const;

// Combined hover animation with lift and glow
export const hoverLiftWithGlow = (glowColor: keyof typeof glowEffects = 'neonGreen') => ({
  y: -5,
  ...glowEffects[glowColor],
  transition: {
    type: 'spring',
    stiffness: 300,
    damping: 20,
  } as Transition,
});

// Card hover variants
export const cardVariants: Variants = {
  initial: {
    y: 0,
    boxShadow: 'none',
  },
  hover: {
    y: -5,
    boxShadow: `0 0 30px rgba(99, 102, 241, 0.3)`,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
};

// Entrance animation variants
export const fadeInVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const slideUpVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export const slideInVariants: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
};

export const scaleVariants: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
};

// Map of entrance animations for easy access
export const entranceVariants = {
  fadeIn: fadeInVariants,
  slideUp: slideUpVariants,
  slideIn: slideInVariants,
  scale: scaleVariants,
} as const;

// Default entrance transition
export const entranceTransition: Transition = {
  duration: 0.6,
  ease: 'easeOut',
};

// Stagger children animation
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animation configuration type exports
export type GlowColor = keyof typeof glowEffects;
export type EntranceAnimation = keyof typeof entranceVariants;
