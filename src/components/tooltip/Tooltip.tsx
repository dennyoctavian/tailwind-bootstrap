import React, { useState } from 'react';
import { cn } from '../../utils/cn';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  content: React.ReactNode;
  placement?: TooltipPlacement;
  delay?: number;
}

const positionClasses: Record<TooltipPlacement, { tooltip: string; arrow: string }> = {
  top: {
    tooltip: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    arrow: 'top-full left-1/2 -translate-x-1/2 border-t-slate-900 border-x-transparent border-b-transparent',
  },
  bottom: {
    tooltip: 'top-full left-1/2 -translate-x-1/2 mt-2',
    arrow: 'bottom-full left-1/2 -translate-x-1/2 border-b-slate-900 border-x-transparent border-t-transparent',
  },
  left: {
    tooltip: 'right-full top-1/2 -translate-y-1/2 mr-2',
    arrow: 'left-full top-1/2 -translate-y-1/2 border-left-slate-900 border-y-transparent border-r-transparent',
  },
  right: {
    tooltip: 'left-full top-1/2 -translate-y-1/2 ml-2',
    arrow: 'right-full top-1/2 -translate-y-1/2 border-r-slate-900 border-y-transparent border-l-transparent',
  },
};

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  placement = 'top',
  delay = 100,
  className,
  children,
  ...props
}) => {
  const [visible, setVisible] = useState(false);
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  const showTooltip = () => {
    const t = setTimeout(() => setVisible(true), delay);
    setTimer(t);
  };

  const hideTooltip = () => {
    if (timer) clearTimeout(timer);
    setVisible(false);
  };

  return (
    <div
      className="relative inline-flex items-center"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      {...props}
    >
      {children}
      {visible && (
        <div
          role="tooltip"
          className={cn(
            'absolute z-50 px-2.5 py-1 text-xs font-medium text-white bg-slate-900 rounded-md shadow-md whitespace-nowrap pointer-events-none transition-all duration-150 animate-in fade-in zoom-in-95',
            positionClasses[placement].tooltip,
            className
          )}
        >
          {content}
          <div
            className={cn('absolute border-4', positionClasses[placement].arrow)}
          />
        </div>
      )}
    </div>
  );
};
