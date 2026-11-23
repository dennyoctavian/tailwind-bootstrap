import React from 'react';
import { cn } from '../../utils/cn';
import { Loader2 } from 'lucide-react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link'
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-success'
  | 'outline-danger'
  | 'outline-warning'
  | 'outline-info'
  | 'outline-light'
  | 'outline-dark';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  pill?: boolean;
  block?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-[#0d6efd] text-white hover:bg-[#0b5ed7] focus:ring-4 focus:ring-blue-300 border border-[#0d6efd] active:bg-[#0a58ca]',
  secondary: 'bg-[#6c757d] text-white hover:bg-[#5c636a] focus:ring-4 focus:ring-gray-300 border border-[#6c757d] active:bg-[#565e64]',
  success: 'bg-[#198754] text-white hover:bg-[#157347] focus:ring-4 focus:ring-green-300 border border-[#198754] active:bg-[#146c43]',
  danger: 'bg-[#dc3545] text-white hover:bg-[#bb2d3b] focus:ring-4 focus:ring-red-300 border border-[#dc3545] active:bg-[#b02a37]',
  warning: 'bg-[#ffc107] text-gray-900 hover:bg-[#ffca2c] focus:ring-4 focus:ring-yellow-300 border border-[#ffc107] active:bg-[#ffc720]',
  info: 'bg-[#0dcaf0] text-gray-900 hover:bg-[#31d2f2] focus:ring-4 focus:ring-cyan-300 border border-[#0dcaf0] active:bg-[#25cff2]',
  light: 'bg-[#f8f9fa] text-gray-900 hover:bg-[#e2e6ea] focus:ring-4 focus:ring-gray-200 border border-[#dee2e6] active:bg-[#dae0e5] dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 dark:hover:bg-slate-700',
  dark: 'bg-[#212529] text-white hover:bg-[#1c1f23] focus:ring-4 focus:ring-gray-400 border border-[#212529] active:bg-[#1a1e21]',
  link: 'text-[#0d6efd] underline-offset-4 hover:underline bg-transparent border-transparent focus:ring-0 p-0',

  // Outline variants
  'outline-primary': 'text-[#0d6efd] border border-[#0d6efd] hover:bg-[#0d6efd] hover:text-white focus:ring-4 focus:ring-blue-200 active:bg-[#0b5ed7]',
  'outline-secondary': 'text-[#6c757d] border border-[#6c757d] hover:bg-[#6c757d] hover:text-white focus:ring-4 focus:ring-gray-200 active:bg-[#5c636a]',
  'outline-success': 'text-[#198754] border border-[#198754] hover:bg-[#198754] hover:text-white focus:ring-4 focus:ring-green-200 active:bg-[#157347]',
  'outline-danger': 'text-[#dc3545] border border-[#dc3545] hover:bg-[#dc3545] hover:text-white focus:ring-4 focus:ring-red-200 active:bg-[#bb2d3b]',
  'outline-warning': 'text-[#ffc107] border border-[#ffc107] hover:bg-[#ffc107] hover:text-gray-900 focus:ring-4 focus:ring-yellow-200 active:bg-[#ffca2c]',
  'outline-info': 'text-[#0dcaf0] border border-[#0dcaf0] hover:bg-[#0dcaf0] hover:text-gray-900 focus:ring-4 focus:ring-cyan-200 active:bg-[#31d2f2]',
  'outline-light': 'text-[#f8f9fa] border border-[#f8f9fa] hover:bg-[#f8f9fa] hover:text-gray-900 focus:ring-4 focus:ring-gray-200 active:bg-[#e2e6ea]',
  'outline-dark': 'text-[#212529] border border-[#212529] hover:bg-[#212529] hover:text-white focus:ring-4 focus:ring-gray-300 active:bg-[#1c1f23] dark:text-slate-200 dark:border-slate-500 dark:hover:bg-slate-700',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'text-xs px-2.5 py-1.5 min-h-[32px] gap-1.5',
  md: 'text-sm px-4 py-2 min-h-[38px] gap-2',
  lg: 'text-base px-5 py-2.5 min-h-[46px] gap-2.5',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      pill = false,
      block = false,
      isLoading = false,
      icon,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-150 select-none shadow-sm',
          'focus:outline-none disabled:opacity-65 disabled:pointer-events-none active:scale-[0.98]',
          pill ? 'rounded-full' : 'rounded-md',
          block ? 'w-full flex' : '',
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {isLoading && (
          <Loader2 className={cn('animate-spin', size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4')} />
        )}
        {!isLoading && icon && <span className="inline-flex shrink-0">{icon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
