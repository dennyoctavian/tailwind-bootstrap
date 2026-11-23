import React, { createContext, useContext, useState } from 'react';
import { cn } from '../../utils/cn';

// Toggle Props
export interface ToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  value?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  pressed: controlledPressed,
  defaultPressed = false,
  onPressedChange,
  variant = 'default',
  size = 'md',
  disabled,
  className,
  children,
  onClick,
  ...props
}) => {
  const [internalPressed, setInternalPressed] = useState(defaultPressed);
  const isControlled = controlledPressed !== undefined;
  const isPressed = isControlled ? controlledPressed : internalPressed;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    const next = !isPressed;
    if (!isControlled) setInternalPressed(next);
    onPressedChange?.(next);
    onClick?.(e);
  };

  const sizeClasses = {
    sm: 'h-8 px-2 text-xs gap-1',
    md: 'h-9 px-2.5 sm:px-3 text-sm gap-1.5',
    lg: 'h-10 px-3.5 text-base gap-2',
  };

  const variantClasses = {
    default: isPressed
      ? 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white shadow-inner font-semibold'
      : 'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300',
    outline: isPressed
      ? 'border border-blue-600 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
      : 'border border-slate-200 dark:border-slate-700 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300',
  };

  return (
    <button
      type="button"
      aria-pressed={isPressed}
      disabled={disabled}
      onClick={handleClick}
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none select-none',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// ToggleGroup
interface ToggleGroupContextType {
  value: string | string[];
  onItemClick: (itemValue: string) => void;
  type: 'single' | 'multiple';
  variant: 'default' | 'outline';
  size: 'sm' | 'md' | 'lg';
}

const ToggleGroupContext = createContext<ToggleGroupContextType | null>(null);

export interface ToggleGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'onChange'> {
  type?: 'single' | 'multiple';
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (val: any) => void;
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export interface ToggleGroupComponent extends React.FC<ToggleGroupProps> {
  Item: typeof ToggleGroupItem;
}

export const ToggleGroupItem: React.FC<Omit<ToggleProps, 'variant' | 'size'> & { value: string }> = ({
  value,
  className,
  children,
  ...props
}) => {
  const context = useContext(ToggleGroupContext);
  if (!context) return null;

  const isPressed = Array.isArray(context.value)
    ? context.value.includes(value)
    : context.value === value;

  return (
    <Toggle
      pressed={isPressed}
      onPressedChange={() => context.onItemClick(value)}
      variant={context.variant}
      size={context.size}
      className={className}
      {...props}
    >
      {children}
    </Toggle>
  );
};

export const ToggleGroup: ToggleGroupComponent = ({
  type = 'single',
  value: controlledValue,
  defaultValue,
  onValueChange,
  variant = 'default',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState<string | string[]>(
    defaultValue || (type === 'multiple' ? [] : '')
  );

  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const handleItemClick = (itemValue: string) => {
    let nextValue: string | string[];
    if (type === 'single') {
      nextValue = currentValue === itemValue ? '' : itemValue;
    } else {
      const arr = Array.isArray(currentValue) ? [...currentValue] : [];
      if (arr.includes(itemValue)) {
        nextValue = arr.filter((v) => v !== itemValue);
      } else {
        nextValue = [...arr, itemValue];
      }
    }

    if (!isControlled) setInternalValue(nextValue);
    onValueChange?.(nextValue);
  };

  return (
    <ToggleGroupContext.Provider
      value={{
        value: currentValue,
        onItemClick: handleItemClick,
        type,
        variant,
        size,
      }}
    >
      <div className={cn('inline-flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800', className)} {...props}>
        {children}
      </div>
    </ToggleGroupContext.Provider>
  );
};

ToggleGroup.Item = ToggleGroupItem;
