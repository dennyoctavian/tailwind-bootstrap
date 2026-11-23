import React from 'react';
import { cn } from '../../utils/cn';

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'text-[10px] min-w-[18px] h-4 px-1',
  md: 'text-xs min-w-[22px] h-5 px-1.5',
  lg: 'text-sm min-w-[26px] h-6 px-2',
};

export const Kbd: React.FC<KbdProps> = ({
  size = 'md',
  className,
  children,
  ...props
}) => {
  return (
    <kbd
      className={cn(
        'inline-flex items-center justify-center font-mono font-medium rounded border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-b-2 shadow-xs select-none',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  );
};
