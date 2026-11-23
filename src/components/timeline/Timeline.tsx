import React from 'react';
import { cn } from '../../utils/cn';

export type TimelineItemColor = 'blue' | 'green' | 'red' | 'gray' | 'amber' | 'purple';

export interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: TimelineItemColor;
  dot?: React.ReactNode;
  label?: React.ReactNode;
  pending?: boolean;
}

const colorClasses: Record<TimelineItemColor, { dot: string; ring: string }> = {
  blue: { dot: 'bg-blue-600', ring: 'ring-blue-100 dark:ring-blue-900/40' },
  green: { dot: 'bg-emerald-500', ring: 'ring-emerald-100 dark:ring-emerald-900/40' },
  red: { dot: 'bg-red-500', ring: 'ring-red-100 dark:ring-red-900/40' },
  gray: { dot: 'bg-slate-400', ring: 'ring-slate-100 dark:ring-slate-800' },
  amber: { dot: 'bg-amber-500', ring: 'ring-amber-100 dark:ring-amber-900/40' },
  purple: { dot: 'bg-purple-600', ring: 'ring-purple-100 dark:ring-purple-900/40' },
};

export const TimelineItem: React.FC<TimelineItemProps> = ({
  color = 'blue',
  dot,
  label,
  pending = false,
  className,
  children,
  ...props
}) => {
  const colorStyle = colorClasses[color] || colorClasses.blue;

  return (
    <div className={cn('relative pl-8 sm:pl-9 pb-8 last:pb-0 group', className)} {...props}>
      {/* Connecting vertical line */}
      <div className="absolute left-[11px] sm:left-[13px] top-3 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-700 group-last:hidden" />

      {/* Node Dot / Custom Icon */}
      <div className="absolute left-0 top-1 flex items-center justify-center">
        {dot ? (
          <div className="flex items-center justify-center text-xs bg-white dark:bg-slate-900 z-10">
            {dot}
          </div>
        ) : (
          <div
            className={cn(
              'w-6 h-6 rounded-full flex items-center justify-center ring-4 transition-all z-10',
              colorStyle.ring,
              pending && 'animate-pulse'
            )}
          >
            <div className={cn('w-2.5 h-2.5 rounded-full', colorStyle.dot)} />
          </div>
        )}
      </div>

      {/* Content and optional timestamp label */}
      <div className="text-sm">
        {label && (
          <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 mb-1">
            {label}
          </div>
        )}
        <div className="text-slate-700 dark:text-slate-200 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: 'left' | 'alternate' | 'right';
  pending?: React.ReactNode | boolean;
  reverse?: boolean;
}

export interface TimelineComponent extends React.FC<TimelineProps> {
  Item: typeof TimelineItem;
}

export const Timeline: TimelineComponent = ({
  pending,
  reverse = false,
  className,
  children,
  ...props
}) => {
  const childrenArray = React.Children.toArray(children);
  const items = reverse ? [...childrenArray].reverse() : childrenArray;

  return (
    <div className={cn('relative py-2', className)} {...props}>
      {items}
      {pending && (
        <TimelineItem color="gray" pending>
          {typeof pending === 'boolean' ? 'Memuat langkah berikutnya...' : pending}
        </TimelineItem>
      )}
    </div>
  );
};

Timeline.Item = TimelineItem;
