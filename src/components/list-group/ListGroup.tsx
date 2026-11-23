import React from 'react';
import { cn, type VariantColor } from '../../utils/cn';

export interface ListGroupProps extends React.HTMLAttributes<HTMLUListElement> {
  flush?: boolean;
  horizontal?: boolean | 'sm' | 'md' | 'lg';
  numbered?: boolean;
}

export interface ListGroupItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  active?: boolean;
  disabled?: boolean;
  action?: boolean;
  variant?: VariantColor;
}

const itemVariantClasses: Record<string, string> = {
  primary: 'bg-blue-50 text-blue-900 dark:bg-blue-950/40 dark:text-blue-300',
  secondary: 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-200',
  success: 'bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300',
  danger: 'bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-300',
  warning: 'bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-300',
  info: 'bg-cyan-50 text-cyan-900 dark:bg-cyan-950/40 dark:text-cyan-300',
  light: 'bg-slate-50 text-slate-800 dark:bg-slate-800 dark:text-slate-200',
  dark: 'bg-slate-800 text-white dark:bg-slate-900 dark:text-white',
};

export const ListGroupItem: React.FC<ListGroupItemProps> = ({
  active = false,
  disabled = false,
  action = false,
  variant,
  className,
  children,
  ...props
}) => {
  return (
    <li
      className={cn(
        'relative px-4 py-3 text-sm flex items-center justify-between border-b last:border-b-0 border-slate-200 dark:border-slate-700 transition-colors',
        active
          ? 'bg-blue-600 text-white font-medium border-blue-600'
          : disabled
          ? 'text-slate-400 dark:text-slate-600 pointer-events-none bg-slate-50 dark:bg-slate-850'
          : action
          ? 'cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200'
          : 'text-slate-700 dark:text-slate-200',
        variant && !active && itemVariantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
};

export interface ListGroupComponent extends React.FC<ListGroupProps> {
  Item: typeof ListGroupItem;
}

export const ListGroup: ListGroupComponent = ({
  flush = false,
  horizontal = false,
  numbered = false,
  className,
  children,
  ...props
}) => {
  const getHorizontalClasses = () => {
    if (horizontal === true) return 'flex-row [&>li]:border-b-0 [&>li]:border-r [&>li:last-child]:border-r-0';
    if (horizontal === 'sm') return 'sm:flex-row sm:[&>li]:border-b-0 sm:[&>li]:border-r sm:[&>li:last-child]:border-r-0';
    if (horizontal === 'md') return 'md:flex-row md:[&>li]:border-b-0 md:[&>li]:border-r md:[&>li:last-child]:border-r-0';
    if (horizontal === 'lg') return 'lg:flex-row lg:[&>li]:border-b-0 lg:[&>li]:border-r lg:[&>li:last-child]:border-r-0';
    return 'flex-col';
  };

  const Component = numbered ? 'ol' : 'ul';

  return (
    <Component
      className={cn(
        'flex list-none p-0 overflow-hidden',
        getHorizontalClasses(),
        flush
          ? 'rounded-none border-x-0 border-t-0'
          : 'rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-850',
        numbered && 'list-decimal list-inside',
        className
      )}
      {...(props as any)}
    >
      {children}
    </Component>
  );
};

ListGroup.Item = ListGroupItem;
