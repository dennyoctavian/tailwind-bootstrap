import React from 'react';
import { cn } from '../../utils/cn';
import { ChevronDown } from 'lucide-react';

export interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  isValid?: boolean;
  isInvalid?: boolean;
  sizeVariant?: 'sm' | 'md' | 'lg';
  helperText?: string;
  errorMessage?: string;
}

const sizeClasses = {
  sm: 'px-2.5 py-1.5 text-xs rounded-md pr-8',
  md: 'px-3.5 py-2 text-sm rounded-lg pr-9',
  lg: 'px-4 py-2.5 text-base rounded-lg pr-10',
};

export const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(
  (
    {
      isValid,
      isInvalid,
      sizeVariant = 'md',
      helperText,
      errorMessage,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const validationBorder = isInvalid
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20 text-red-900'
      : isValid
      ? 'border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20 text-emerald-900'
      : 'border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500/20';

    return (
      <div className="relative w-full">
        <select
          ref={ref}
          disabled={disabled}
          className={cn(
            'w-full appearance-none bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border shadow-sm transition-colors duration-150',
            'focus:outline-none focus:ring-4',
            'disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed dark:disabled:bg-slate-850',
            sizeClasses[sizeVariant],
            validationBorder,
            className
          )}
          {...props}
        >
          {children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-500 dark:text-slate-400">
          <ChevronDown className="w-4 h-4" />
        </div>
        {isInvalid && errorMessage && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400 font-medium">{errorMessage}</p>
        )}
        {!isInvalid && helperText && (
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{helperText}</p>
        )}
      </div>
    );
  }
);

FormSelect.displayName = 'FormSelect';
