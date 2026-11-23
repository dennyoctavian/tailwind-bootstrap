import React from 'react';
import { cn } from '../../utils/cn';

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  striped?: boolean;
  bordered?: boolean;
  hover?: boolean;
  compact?: boolean;
  dark?: boolean;
  responsive?: boolean | 'sm' | 'md' | 'lg' | 'xl';
}

const responsiveClasses = {
  sm: 'overflow-x-auto sm:overflow-x-visible',
  md: 'overflow-x-auto md:overflow-x-visible',
  lg: 'overflow-x-auto lg:overflow-x-visible',
  xl: 'overflow-x-auto xl:overflow-x-visible',
};

export const Table: React.FC<TableProps> = ({
  striped = false,
  bordered = false,
  hover = false,
  compact = false,
  dark = false,
  responsive = true,
  className,
  children,
  ...props
}) => {
  const tableContent = (
    <table
      className={cn(
        'w-full text-left border-collapse text-sm',
        dark ? 'text-slate-200 bg-slate-900' : 'text-slate-700 dark:text-slate-200',
        striped && (dark ? '[&_tbody_tr:nth-child(odd)]:bg-slate-800/50' : '[&_tbody_tr:nth-child(odd)]:bg-slate-50 dark:[&_tbody_tr:nth-child(odd)]:bg-slate-800/40'),
        hover && (dark ? '[&_tbody_tr]:hover:bg-slate-800 transition-colors' : '[&_tbody_tr]:hover:bg-blue-50/40 dark:[&_tbody_tr]:hover:bg-slate-800/70 transition-colors'),
        bordered && (dark ? 'border border-slate-700 [&_th]:border [&_th]:border-slate-700 [&_td]:border [&_td]:border-slate-700' : 'border border-slate-200 dark:border-slate-700 [&_th]:border [&_th]:border-slate-200 dark:[&_th]:border-slate-700 [&_td]:border [&_td]:border-slate-200 dark:[&_td]:border-slate-700'),
        compact ? '[&_th]:py-2 [&_th]:px-3 [&_td]:py-2 [&_td]:px-3' : '[&_th]:py-3.5 [&_th]:px-4 [&_td]:py-3.5 [&_td]:px-4',
        '[&_thead]:border-b-2 [&_thead]:border-slate-200 dark:[&_thead]:border-slate-700 [&_th]:font-semibold [&_th]:text-slate-900 dark:[&_th]:text-white',
        '[&_tbody_tr]:border-b [&_tbody_tr]:border-slate-100 dark:[&_tbody_tr]:border-slate-800',
        className
      )}
      {...props}
    >
      {children}
    </table>
  );

  if (responsive) {
    const wrapClass = typeof responsive === 'string' ? responsiveClasses[responsive] : 'overflow-x-auto';
    return (
      <div className={cn('w-full custom-scrollbar rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-900', wrapClass)}>
        {tableContent}
      </div>
    );
  }

  return tableContent;
};
