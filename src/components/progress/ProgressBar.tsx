import React from 'react';
import { cn, type VariantColor } from '../../utils/cn';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  min?: number;
  max?: number;
  variant?: VariantColor;
  striped?: boolean;
  animated?: boolean;
  label?: string | boolean;
  height?: number | string;
}

const variantStyles: Record<VariantColor, string> = {
  primary: 'bg-blue-600',
  secondary: 'bg-slate-600',
  success: 'bg-emerald-600',
  danger: 'bg-red-600',
  warning: 'bg-amber-500',
  info: 'bg-cyan-500',
  light: 'bg-slate-200 text-slate-800',
  dark: 'bg-slate-900 text-white',
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  min = 0,
  max = 100,
  variant = 'primary',
  striped = false,
  animated = false,
  label = false,
  height = '1rem',
  className,
  ...props
}) => {
  const clampedValue = Math.min(Math.max(value, min), max);
  const percentage = Math.round(((clampedValue - min) / (max - min)) * 100);

  const displayLabel = typeof label === 'string' ? label : label ? `${percentage}%` : null;

  return (
    <div
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={min}
      aria-valuemax={max}
      style={{ height }}
      className={cn(
        'w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-750 shadow-inner',
        className
      )}
      {...props}
    >
      <div
        style={{ width: `${percentage}%` }}
        className={cn(
          'h-full flex items-center justify-center text-[11px] font-bold text-white transition-all duration-300 ease-out select-none',
          variantStyles[variant],
          striped && 'bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]',
          animated && 'animate-[progress-bar-stripes_1s_linear_infinite]'
        )}
      >
        {displayLabel}
      </div>
    </div>
  );
};
