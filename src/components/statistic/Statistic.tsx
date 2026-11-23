import React from 'react';
import { cn } from '../../utils/cn';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export interface StatisticProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'prefix'> {
  title?: React.ReactNode;
  value: number | string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  precision?: number;
}

export const Statistic: React.FC<StatisticProps> = ({
  title,
  value,
  prefix,
  suffix,
  trend,
  precision,
  className,
  ...props
}) => {
  const formattedValue =
    typeof value === 'number' && precision !== undefined
      ? value.toFixed(precision)
      : value;

  return (
    <div className={cn('p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm', className)} {...props}>
      {title && (
        <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-1.5 flex items-center justify-between">
          <span>{title}</span>
          {trend && (
            <span
              className={cn(
                'inline-flex items-center text-xs font-bold px-1.5 py-0.5 rounded-full',
                trend === 'up' && 'text-emerald-700 bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-300',
                trend === 'down' && 'text-red-700 bg-red-100 dark:bg-red-950/60 dark:text-red-300',
                trend === 'neutral' && 'text-slate-600 bg-slate-100 dark:bg-slate-800 dark:text-slate-400'
              )}
            >
              {trend === 'up' && <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" />}
              {trend === 'down' && <ArrowDownRight className="w-3.5 h-3.5 mr-0.5" />}
              {trend === 'up' ? '+12.5%' : trend === 'down' ? '-4.2%' : '0%'}
            </span>
          )}
        </div>
      )}

      <div className="flex items-baseline gap-1.5 font-bold tracking-tight text-slate-900 dark:text-white">
        {prefix && <span className="text-lg sm:text-xl font-medium text-slate-500 dark:text-slate-400">{prefix}</span>}
        <span className="text-2xl sm:text-3xl font-extrabold">{formattedValue}</span>
        {suffix && <span className="text-xs sm:text-sm font-semibold text-slate-400 ml-1">{suffix}</span>}
      </div>
    </div>
  );
};
