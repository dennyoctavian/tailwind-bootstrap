import React from 'react';
import { cn } from '../../utils/cn';

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

export const InputGroupText: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  children,
  ...props
}) => (
  <span
    className={cn(
      'inline-flex items-center px-3.5 text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-750 border border-slate-300 dark:border-slate-600 select-none',
      className
    )}
    {...props}
  >
    {children}
  </span>
);

export interface InputGroupComponent extends React.FC<InputGroupProps> {
  Text: typeof InputGroupText;
}

export const InputGroup: InputGroupComponent = ({
  size = 'md',
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex w-full items-stretch shadow-sm',
        '[&>*:first-child]:rounded-l-lg [&>*:last-child]:rounded-r-lg',
        '[&>*:not(:first-child)]:-ml-px',
        '[&>input]:rounded-none [&>button]:rounded-none [&>select]:rounded-none',
        '[&>*:first-child]:rounded-l-lg [&>*:last-child]:rounded-r-lg',
        size === 'sm' && '[&>span]:text-xs [&>span]:px-2.5',
        size === 'lg' && '[&>span]:text-base [&>span]:px-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

InputGroup.Text = InputGroupText;
