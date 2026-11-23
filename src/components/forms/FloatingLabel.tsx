import React, { useState } from 'react';
import { cn } from '../../utils/cn';

export interface FloatingLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  type?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export const FloatingLabel: React.FC<FloatingLabelProps> = ({
  label,
  type = 'text',
  value,
  defaultValue = '',
  placeholder,
  onChange,
  disabled = false,
  className,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const controlled = value !== undefined;
  const currentVal = controlled ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!controlled) setInternalValue(e.target.value);
    if (onChange) onChange(e);
  };

  const hasValue = Boolean(currentVal && String(currentVal).length > 0);

  return (
    <div className={cn('relative w-full', className)} {...props}>
      <input
        type={type}
        value={controlled ? value : internalValue}
        disabled={disabled}
        onChange={handleChange}
        placeholder={placeholder || ' '}
        className={cn(
          'peer w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3.5 pt-5 pb-2 text-sm text-slate-900 dark:text-slate-100 placeholder-transparent',
          'focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all',
          'disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed dark:disabled:bg-slate-850'
        )}
      />
      <label
        className={cn(
          'pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-slate-500 dark:text-slate-400 transition-all duration-150',
          'peer-focus:top-3 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-400',
          hasValue && 'top-3 text-xs'
        )}
      >
        {label}
      </label>
    </div>
  );
};
