import React from 'react';
import { cn } from '../../utils/cn';

export interface FormCheckProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  type?: 'checkbox' | 'radio';
  inline?: boolean;
}

export const FormCheck = React.forwardRef<HTMLInputElement, FormCheckProps>(
  (
    {
      label,
      type = 'checkbox',
      inline = false,
      id,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const inputId = id || (typeof label === 'string' ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <label
        htmlFor={inputId}
        className={cn(
          'flex items-center gap-2.5 select-none cursor-pointer',
          inline ? 'inline-flex mr-4' : 'flex mb-2 last:mb-0',
          disabled && 'opacity-60 cursor-not-allowed',
          className
        )}
      >
        <input
          ref={ref}
          id={inputId}
          type={type}
          disabled={disabled}
          className={cn(
            'h-4 w-4 border-slate-300 dark:border-slate-600 text-blue-600 transition duration-150 focus:ring-2 focus:ring-blue-500/30 focus:outline-none dark:bg-slate-800',
            type === 'checkbox' ? 'rounded' : 'rounded-full'
          )}
          {...props}
        />
        {label && <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>}
      </label>
    );
  }
);

FormCheck.displayName = 'FormCheck';
