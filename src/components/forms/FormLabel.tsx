import React from 'react';
import { cn } from '../../utils/cn';

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const FormLabel: React.FC<FormLabelProps> = ({
  required = false,
  className,
  children,
  ...props
}) => {
  return (
    <label
      className={cn(
        'block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 select-none',
        className
      )}
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1 font-bold">*</span>}
    </label>
  );
};
