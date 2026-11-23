import React from 'react';
import { cn } from '../../utils/cn';

export interface FormControlProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  as?: 'input' | 'textarea';
  rows?: number;
  isValid?: boolean;
  isInvalid?: boolean;
  sizeVariant?: 'sm' | 'md' | 'lg';
  helperText?: string;
  errorMessage?: string;
  successMessage?: string;
}

const sizeClasses = {
  sm: 'px-2.5 py-1.5 text-xs rounded-md',
  md: 'px-3.5 py-2 text-sm rounded-lg',
  lg: 'px-4 py-2.5 text-base rounded-lg',
};

export const FormControl = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, FormControlProps>(
  (
    {
      as = 'input',
      rows = 3,
      isValid,
      isInvalid,
      sizeVariant = 'md',
      helperText,
      errorMessage,
      successMessage,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const Component = as as any;

    const validationBorder = isInvalid
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20 text-red-900 placeholder:text-red-300'
      : isValid
      ? 'border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20 text-emerald-900'
      : 'border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500/20';

    return (
      <div className="w-full">
        <Component
          ref={ref}
          rows={as === 'textarea' ? rows : undefined}
          disabled={disabled}
          className={cn(
            'w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border shadow-sm transition-colors duration-150',
            'focus:outline-none focus:ring-4 placeholder:text-slate-400 dark:placeholder:text-slate-500',
            'disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed dark:disabled:bg-slate-850',
            sizeClasses[sizeVariant],
            validationBorder,
            className
          )}
          {...(props as any)}
        />
        {isInvalid && errorMessage && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400 font-medium">{errorMessage}</p>
        )}
        {isValid && successMessage && (
          <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium">{successMessage}</p>
        )}
        {!isInvalid && !isValid && helperText && (
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{helperText}</p>
        )}
      </div>
    );
  }
);

FormControl.displayName = 'FormControl';
