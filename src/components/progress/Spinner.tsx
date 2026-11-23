import React from 'react';
import { cn, type VariantColor } from '../../utils/cn';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  animation?: 'border' | 'grow';
  variant?: VariantColor | 'current';
  size?: 'sm' | 'md' | 'lg';
}

const variantStyles: Record<string, string> = {
  primary: 'text-blue-600',
  secondary: 'text-slate-500',
  success: 'text-emerald-600',
  danger: 'text-red-600',
  warning: 'text-amber-500',
  info: 'text-cyan-500',
  light: 'text-slate-200',
  dark: 'text-slate-900 dark:text-slate-100',
  current: 'text-current',
};

const sizeClasses = {
  border: {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  },
  grow: {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  },
};

export const Spinner: React.FC<SpinnerProps> = ({
  animation = 'border',
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  if (animation === 'grow') {
    return (
      <div
        role="status"
        aria-label="Loading"
        className={cn(
          'inline-block rounded-full bg-current opacity-0 animate-ping',
          variantStyles[variant],
          sizeClasses.grow[size],
          className
        )}
        {...props}
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        'inline-block rounded-full border-solid border-current border-r-transparent animate-spin align-[-0.125em]',
        variantStyles[variant],
        sizeClasses.border[size],
        className
      )}
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
