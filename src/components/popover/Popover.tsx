import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';

export type PopoverPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface PopoverProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'content'> {
  title?: React.ReactNode;
  content: React.ReactNode;
  placement?: PopoverPlacement;
}

const popoverPositions: Record<PopoverPlacement, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2.5',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2.5',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2.5',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2.5',
};

export const Popover: React.FC<PopoverProps> = ({
  title,
  content,
  placement = 'top',
  className,
  children,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative inline-block" {...props}>
      <div onClick={() => setOpen(!open)} className="cursor-pointer inline-block">
        {children}
      </div>

      {open && (
        <div
          role="dialog"
          className={cn(
            'absolute z-50 w-64 max-w-xs bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden animate-in fade-in zoom-in-95 duration-150',
            popoverPositions[placement],
            className
          )}
        >
          {title && (
            <div className="px-3.5 py-2 bg-slate-50 dark:bg-slate-750 border-b border-slate-100 dark:border-slate-700 font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-100">
              {title}
            </div>
          )}
          <div className="p-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};
