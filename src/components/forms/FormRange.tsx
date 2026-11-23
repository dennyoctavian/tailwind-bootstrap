import React from 'react';
import { cn } from '../../utils/cn';

export interface FormRangeProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  showValue?: boolean;
}

export const FormRange: React.FC<FormRangeProps> = ({
  label,
  showValue = false,
  value,
  defaultValue = 50,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  disabled,
  className,
  ...props
}) => {
  const [internalVal, setInternalVal] = React.useState(defaultValue);
  const controlled = value !== undefined;
  const currentVal = controlled ? value : internalVal;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!controlled) setInternalVal(e.target.value);
    if (onChange) onChange(e);
  };

  return (
    <div className={cn('w-full', className)}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
          {label && <span>{label}</span>}
          {showValue && <span className="text-xs font-mono text-slate-500">{currentVal}</span>}
        </div>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={currentVal}
        disabled={disabled}
        onChange={handleChange}
        className={cn(
          'w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
        {...props}
      />
    </div>
  );
};
