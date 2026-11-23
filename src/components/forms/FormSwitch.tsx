import React from 'react';
import { cn } from '../../utils/cn';

export interface FormSwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
}

export const FormSwitch = React.forwardRef<HTMLInputElement, FormSwitchProps>(
  ({ label, checked, defaultChecked, id, disabled, onChange, className, ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(defaultChecked || false);
    const controlled = checked !== undefined;
    const active = controlled ? checked : isChecked;

    const inputId = id || (typeof label === 'string' ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!controlled) setIsChecked(e.target.checked);
      if (onChange) onChange(e);
    };

    return (
      <label
        htmlFor={inputId}
        className={cn(
          'inline-flex items-center gap-3 cursor-pointer select-none',
          disabled && 'opacity-60 cursor-not-allowed',
          className
        )}
      >
        <div className="relative inline-flex items-center">
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            checked={active}
            disabled={disabled}
            onChange={handleChange}
            className="sr-only"
            {...props}
          />
          <div
            className={cn(
              'w-11 h-6 rounded-full transition-colors duration-200 ease-in-out',
              active ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-700'
            )}
          />
          <div
            className={cn(
              'absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-200 ease-in-out',
              active && 'translate-x-5'
            )}
          />
        </div>
        {label && <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>}
      </label>
    );
  }
);

FormSwitch.displayName = 'FormSwitch';
