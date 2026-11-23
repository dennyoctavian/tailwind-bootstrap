import React from 'react';
import { cn } from '../../utils/cn';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  dashed?: boolean;
  orientation?: 'left' | 'center' | 'right';
  plain?: boolean;
}

export const Divider: React.FC<DividerProps> = ({
  dashed = false,
  orientation = 'center',
  plain = false,
  className,
  children,
  ...props
}) => {
  if (!children) {
    return (
      <hr
        className={cn(
          'my-6 border-slate-200 dark:border-slate-800',
          dashed ? 'border-dashed' : 'border-solid',
          className
        )}
        {...(props as any)}
      />
    );
  }

  return (
    <div
      role="separator"
      className={cn('my-6 flex items-center text-xs font-medium text-slate-500 dark:text-slate-400 select-none', className)}
      {...props}
    >
      <div
        className={cn(
          'border-slate-200 dark:border-slate-800',
          dashed ? 'border-dashed' : 'border-solid',
          orientation === 'left' ? 'w-6' : 'flex-grow border-t'
        )}
      />
      <span
        className={cn(
          'px-3 whitespace-nowrap',
          plain ? 'font-normal' : 'font-semibold text-slate-700 dark:text-slate-300'
        )}
      >
        {children}
      </span>
      <div
        className={cn(
          'border-slate-200 dark:border-slate-800',
          dashed ? 'border-dashed' : 'border-solid',
          orientation === 'right' ? 'w-6' : 'flex-grow border-t'
        )}
      />
    </div>
  );
};
