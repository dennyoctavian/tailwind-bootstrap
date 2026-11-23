import React, { useState } from 'react';
import { cn } from '../../utils/cn';

export interface SegmentedOption {
  label: React.ReactNode;
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface SegmentedProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: (string | SegmentedOption)[];
  value?: string;
  defaultValue?: string;
  onChange?: (val: string) => void;
  block?: boolean;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const sizeClasses = {
  sm: 'text-xs p-0.5',
  md: 'text-xs sm:text-sm p-1',
  lg: 'text-sm sm:text-base p-1.5',
};

const itemPadding = {
  sm: 'px-2.5 py-1',
  md: 'px-3.5 py-1.5',
  lg: 'px-5 py-2',
};

export const Segmented: React.FC<SegmentedProps> = ({
  options,
  value,
  defaultValue,
  onChange,
  block = false,
  size = 'md',
  disabled = false,
  className,
  ...props
}) => {
  const normalizedOptions: SegmentedOption[] = options.map((opt) =>
    typeof opt === 'string' ? { label: opt, value: opt } : opt
  );

  const [internalVal, setInternalVal] = useState<string>(
    defaultValue || normalizedOptions[0]?.value || ''
  );

  const controlled = value !== undefined;
  const currentVal = controlled ? value : internalVal;

  const handleSelect = (val: string, isDisabled?: boolean) => {
    if (disabled || isDisabled) return;
    if (!controlled) setInternalVal(val);
    if (onChange) onChange(val);
  };

  return (
    <div
      role="radiogroup"
      className={cn(
        'inline-flex items-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 select-none shadow-inner',
        block ? 'w-full flex' : '',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {normalizedOptions.map((opt) => {
        const isSelected = opt.value === currentVal;
        const isDisabled = disabled || opt.disabled;

        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            disabled={isDisabled}
            onClick={() => handleSelect(opt.value, isDisabled)}
            className={cn(
              'inline-flex items-center justify-center gap-1.5 font-medium rounded-lg transition-all duration-200 focus:outline-none',
              block ? 'flex-1' : '',
              itemPadding[size],
              isSelected
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm font-semibold'
                : 'hover:text-slate-900 dark:hover:text-white',
              isDisabled && 'opacity-40 cursor-not-allowed pointer-events-none'
            )}
          >
            {opt.icon && <span className="w-4 h-4 shrink-0">{opt.icon}</span>}
            <span>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
};
