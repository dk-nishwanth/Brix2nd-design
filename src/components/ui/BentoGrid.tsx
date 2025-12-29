import React from 'react';

export interface BentoGridProps {
  children: React.ReactNode;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

const gapStyles = {
  sm: 'gap-6 md:gap-8',
  md: 'gap-8 md:gap-10',
  lg: 'gap-10 md:gap-12',
};

export const BentoGrid: React.FC<BentoGridProps> = ({
  children,
  gap = 'md',
  className = '',
}) => {
  // Base grid: 12 columns on desktop, stacks to 1 column on mobile
  const baseStyles = 'grid grid-cols-1 md:grid-cols-12';
  const combinedClassName = `${baseStyles} ${gapStyles[gap]} ${className}`.trim();

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
};

// Export configuration for testing
export const bentoGridConfig = {
  columns: 12,
  gapSizes: gapStyles,
};

export default BentoGrid;
