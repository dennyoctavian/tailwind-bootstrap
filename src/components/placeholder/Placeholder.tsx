import React from 'react';
import { cn } from '../../utils/cn';

export interface PlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  animation?: 'glow' | 'wave';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  col?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const sizeClasses = {
  xs: 'h-2',
  sm: 'h-3',
  md: 'h-4',
  lg: 'h-6',
};

const colClasses: Record<number, string> = {
  1: 'w-1/12',
  2: 'w-2/12',
  3: 'w-3/12',
  4: 'w-4/12',
  5: 'w-5/12',
  6: 'w-6/12',
  7: 'w-7/12',
  8: 'w-8/12',
  9: 'w-9/12',
  10: 'w-10/12',
  11: 'w-11/12',
  12: 'w-full',
};

export const Placeholder: React.FC<PlaceholderProps> = ({
  animation = 'glow',
  size = 'md',
  col = 12,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'rounded bg-slate-200 dark:bg-slate-700 inline-block align-middle',
        sizeClasses[size],
        colClasses[col],
        animation === 'glow' ? 'animate-pulse' : 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
        className
      )}
      {...props}
    />
  );
};
