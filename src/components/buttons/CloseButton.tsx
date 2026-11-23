import React from 'react';
import { cn } from '../../utils/cn';
import { X } from 'lucide-react';

export interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'white' | 'default';
}

export const CloseButton: React.FC<CloseButtonProps> = ({
  variant = 'default',
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      aria-label="Close"
      className={cn(
        'p-1.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1',
        variant === 'white'
          ? 'text-white hover:bg-white/20 focus:ring-white'
          : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:ring-slate-400',
        className
      )}
      {...props}
    >
      <X className="w-4 h-4" />
    </button>
  );
};
