import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import { Minus, Plus } from 'lucide-react';

export interface NumberInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: number;
  defaultValue?: number;
  onChange?: (val: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'h-8 text-xs',
  md: 'h-10 text-sm',
  lg: 'h-12 text-base',
};

const btnSizeClasses = {
  sm: 'w-7 h-full text-xs',
  md: 'w-9 h-full text-sm',
  lg: 'w-11 h-full text-base',
};

export const NumberInput: React.FC<NumberInputProps> = ({
  value: controlledValue,
  defaultValue = 1,
  onChange,
  min = 0,
  max = Infinity,
  step = 1,
  disabled = false,
  size = 'md',
  className,
  ...props
}) => {
  const [internalVal, setInternalVal] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const currentVal = isControlled ? controlledValue : internalVal;

  const triggerChange = (next: number) => {
    const clamped = Math.min(Math.max(next, min), max);
    if (!isControlled) setInternalVal(clamped);
    onChange?.(clamped);
  };

  const handleDecrement = () => {
    if (disabled || currentVal <= min) return;
    triggerChange(currentVal - step);
  };

  const handleIncrement = () => {
    if (disabled || currentVal >= max) return;
    triggerChange(currentVal + step);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseInt(e.target.value, 10);
    if (isNaN(num)) {
      triggerChange(min);
    } else {
      triggerChange(num);
    }
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs overflow-hidden select-none',
        disabled && 'opacity-50 pointer-events-none',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <button
        type="button"
        disabled={disabled || currentVal <= min}
        onClick={handleDecrement}
        className={cn(
          'flex items-center justify-center border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed',
          btnSizeClasses[size]
        )}
        aria-label="Kurangi nilai"
      >
        <Minus className="w-3.5 h-3.5" />
      </button>

      <input
        type="number"
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        value={currentVal}
        onChange={handleInputChange}
        className="w-14 sm:w-16 h-full text-center font-bold bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
      />

      <button
        type="button"
        disabled={disabled || currentVal >= max}
        onClick={handleIncrement}
        className={cn(
          'flex items-center justify-center border-l border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed',
          btnSizeClasses[size]
        )}
        aria-label="Tambah nilai"
      >
        <Plus className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
