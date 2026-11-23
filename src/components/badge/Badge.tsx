import React from 'react';
import { cn, type VariantColor } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: VariantColor;
  pill?: boolean;
  dot?: boolean;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

const badgeVariants: Record<VariantColor, string> = {
  primary: 'bg-[#0d6efd] text-white',
  secondary: 'bg-[#6c757d] text-white',
  success: 'bg-[#198754] text-white',
  danger: 'bg-[#dc3545] text-white',
  warning: 'bg-[#ffc107] text-gray-900',
  info: 'bg-[#0dcaf0] text-gray-900',
  light: 'bg-[#f8f9fa] text-gray-800 border border-gray-200 dark:bg-slate-700 dark:text-slate-100 dark:border-slate-600',
  dark: 'bg-[#212529] text-white',
};

const badgeSizes = {
  sm: 'text-[10px] px-1.5 py-0.5 gap-1',
  md: 'text-xs px-2.5 py-1 gap-1.5',
  lg: 'text-sm px-3 py-1.5 gap-2',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  pill = false,
  dot = false,
  size = 'md',
  icon,
  className,
  children,
  ...props
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center font-semibold tracking-wide leading-none transition-colors align-baseline whitespace-nowrap',
        pill ? 'rounded-full' : 'rounded',
        badgeVariants[variant],
        badgeSizes[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            'inline-block rounded-full',
            size === 'sm' ? 'w-1.5 h-1.5' : 'w-2 h-2',
            variant === 'warning' || variant === 'info' || variant === 'light'
              ? 'bg-current opacity-80'
              : 'bg-white opacity-90'
          )}
        />
      )}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
