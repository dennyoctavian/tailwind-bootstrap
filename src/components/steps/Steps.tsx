import React from 'react';
import { cn } from '../../utils/cn';
import { Check, AlertCircle } from 'lucide-react';

export type StepStatus = 'wait' | 'process' | 'finish' | 'error';

export interface StepItem {
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  status?: StepStatus;
  disabled?: boolean;
}

export interface StepsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  current?: number;
  items: StepItem[];
  onChange?: (current: number) => void;
  direction?: 'horizontal' | 'vertical';
  responsive?: boolean;
}

export const Steps: React.FC<StepsProps> = ({
  current = 0,
  items,
  onChange,
  direction = 'horizontal',
  responsive = true,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'w-full flex',
        direction === 'vertical' ? 'flex-col space-y-6' : responsive ? 'flex-col sm:flex-row gap-4 sm:gap-0' : 'flex-row',
        className
      )}
      {...props}
    >
      {items.map((item, index) => {
        const isClickable = Boolean(onChange && !item.disabled);
        const calculatedStatus: StepStatus =
          item.status ||
          (index < current ? 'finish' : index === current ? 'process' : 'wait');

        const isLast = index === items.length - 1;

        return (
          <div
            key={index}
            onClick={() => isClickable && onChange && onChange(index)}
            className={cn(
              'flex-1 flex sm:items-center relative group',
              direction === 'vertical' ? 'items-start' : '',
              isClickable && 'cursor-pointer'
            )}
          >
            {/* Step Icon / Number Container */}
            <div className="flex items-center">
              <div
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-200 z-10 shrink-0 select-none',
                  calculatedStatus === 'finish' && 'bg-blue-600 text-white shadow-sm',
                  calculatedStatus === 'process' && 'border-2 border-blue-600 bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 font-extrabold ring-4 ring-blue-100 dark:ring-blue-900/30',
                  calculatedStatus === 'wait' && 'border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400',
                  calculatedStatus === 'error' && 'border-2 border-red-500 bg-red-50 text-red-600 dark:bg-red-950/40 ring-4 ring-red-100 dark:ring-red-900/30'
                )}
              >
                {item.icon ? (
                  item.icon
                ) : calculatedStatus === 'finish' ? (
                  <Check className="w-4 h-4 stroke-[3]" />
                ) : calculatedStatus === 'error' ? (
                  <AlertCircle className="w-4 h-4" />
                ) : (
                  index + 1
                )}
              </div>
            </div>

            {/* Step Label (Title & Description) */}
            <div className="ml-3 sm:mr-3 min-w-0">
              <div
                className={cn(
                  'text-xs sm:text-sm font-semibold truncate transition-colors leading-tight',
                  calculatedStatus === 'process' && 'text-blue-600 dark:text-blue-400',
                  calculatedStatus === 'finish' && 'text-slate-800 dark:text-slate-100',
                  calculatedStatus === 'wait' && 'text-slate-400 dark:text-slate-500',
                  calculatedStatus === 'error' && 'text-red-600 dark:text-red-400'
                )}
              >
                {item.title}
              </div>
              {item.description && (
                <div className="text-[11px] sm:text-xs text-slate-400 dark:text-slate-500 mt-0.5 line-clamp-1">
                  {item.description}
                </div>
              )}
            </div>

            {/* Connecting Line between steps */}
            {!isLast && direction !== 'vertical' && (
              <div
                className={cn(
                  'hidden sm:block flex-1 h-[2px] mx-3 transition-colors duration-300',
                  index < current ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-700'
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
