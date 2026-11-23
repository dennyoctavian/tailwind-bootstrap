import React, { useRef, useState, useEffect } from 'react';
import { cn } from '../../utils/cn';

export interface PinInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  length?: number;
  value?: string;
  defaultValue?: string;
  onChange?: (val: string) => void;
  onComplete?: (val: string) => void;
  type?: 'number' | 'alphanumeric';
  mask?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  autoFocus?: boolean;
}

const sizeClasses = {
  sm: 'w-8 h-9 text-base',
  md: 'w-10 h-12 text-lg sm:w-12 sm:h-14 sm:text-xl',
  lg: 'w-12 h-14 text-xl sm:w-14 sm:h-16 sm:text-2xl',
};

export const PinInput: React.FC<PinInputProps> = ({
  length = 6,
  value: controlledValue,
  defaultValue = '',
  onChange,
  onComplete,
  type = 'number',
  mask = false,
  disabled = false,
  size = 'md',
  autoFocus = false,
  className,
  ...props
}) => {
  const [internalVal, setInternalVal] = useState<string[]>(() => {
    const initial = controlledValue !== undefined ? controlledValue : defaultValue;
    return Array.from({ length }, (_, i) => initial[i] || '');
  });

  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (controlledValue !== undefined) {
      setInternalVal(Array.from({ length }, (_, i) => controlledValue[i] || ''));
    }
  }, [controlledValue, length]);

  useEffect(() => {
    if (autoFocus && inputsRef.current[0]) {
      inputsRef.current[0].focus();
    }
  }, [autoFocus]);

  const triggerChange = (newDigits: string[]) => {
    const full = newDigits.join('');
    if (controlledValue === undefined) {
      setInternalVal(newDigits);
    }
    onChange?.(full);
    if (full.length === length && !newDigits.includes('')) {
      onComplete?.(full);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    let char = e.target.value;
    if (!char) return;

    // Filter by type
    if (type === 'number' && !/^\d+$/.test(char)) return;

    // Take the last entered character if multiple characters were typed
    char = char.slice(-1);

    const next = [...internalVal];
    next[index] = char;
    triggerChange(next);

    // Auto-focus next input
    if (index < length - 1 && char) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      if (!internalVal[index] && index > 0) {
        // Move to previous and clear it
        const next = [...internalVal];
        next[index - 1] = '';
        triggerChange(next);
        inputsRef.current[index - 1]?.focus();
      } else {
        const next = [...internalVal];
        next[index] = '';
        triggerChange(next);
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputsRef.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').trim();
    if (!pastedData) return;

    let chars = pastedData.split('');
    if (type === 'number') {
      chars = chars.filter((c) => /^\d$/.test(c));
    }

    const next = [...internalVal];
    for (let i = 0; i < length; i++) {
      if (chars[i]) {
        next[i] = chars[i];
      }
    }

    triggerChange(next);

    const nextFocusIndex = Math.min(chars.length, length - 1);
    inputsRef.current[nextFocusIndex]?.focus();
  };

  return (
    <div
      role="group"
      aria-label="PIN Code Input"
      className={cn('inline-flex items-center gap-2 sm:gap-2.5 select-none', className)}
      {...props}
    >
      {Array.from({ length }, (_, i) => (
        <input
          key={i}
          ref={(el) => (inputsRef.current[i] = el)}
          type={mask ? 'password' : 'text'}
          inputMode={type === 'number' ? 'numeric' : 'text'}
          pattern={type === 'number' ? '[0-9]*' : undefined}
          maxLength={1}
          value={internalVal[i] || ''}
          disabled={disabled}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          onPaste={handlePaste}
          className={cn(
            'text-center font-bold rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs transition-all outline-none',
            'focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20',
            disabled && 'opacity-50 cursor-not-allowed bg-slate-100 dark:bg-slate-800',
            sizeClasses[size]
          )}
        />
      ))}
    </div>
  );
};
