import React from 'react';
import { cn } from '../../utils/cn';
import { Check } from 'lucide-react';

export interface ColorSwatchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  selected?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-6 h-6 text-xs',
  md: 'w-8 h-8 text-sm',
  lg: 'w-10 h-10 text-base',
};

export const ColorSwatch: React.FC<ColorSwatchProps> = ({
  color,
  selected = false,
  size = 'md',
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ backgroundColor: color }}
      className={cn(
        'relative inline-flex items-center justify-center rounded-full transition-transform active:scale-95 cursor-pointer ring-2 ring-offset-2 ring-offset-white dark:ring-offset-slate-900 focus:outline-none select-none shadow-xs',
        selected ? 'ring-blue-600 scale-105' : 'ring-transparent hover:scale-105',
        sizeClasses[size],
        className
      )}
      aria-label={`Pilih warna ${color}`}
      {...props}
    >
      {selected && (
        <Check className="w-4 h-4 text-white drop-shadow-md stroke-[3]" />
      )}
    </button>
  );
};

export interface ColorSwatchGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  colors: string[];
  value?: string;
  onChange?: (color: string) => void;
  size?: 'sm' | 'md' | 'lg';
}

export const ColorSwatchGroup: React.FC<ColorSwatchGroupProps> = ({
  colors,
  value,
  onChange,
  size = 'md',
  className,
  ...props
}) => {
  return (
    <div className={cn('inline-flex flex-wrap items-center gap-2.5', className)} {...props}>
      {colors.map((c) => (
        <ColorSwatch
          key={c}
          color={c}
          size={size}
          selected={value === c}
          onClick={() => onChange?.(c)}
        />
      ))}
    </div>
  );
};
