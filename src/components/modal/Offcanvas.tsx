import React, { useEffect } from 'react';
import { cn } from '../../utils/cn';
import { X } from 'lucide-react';

export type OffcanvasPlacement = 'start' | 'end' | 'top' | 'bottom';

export interface OffcanvasProps extends React.HTMLAttributes<HTMLDivElement> {
  show: boolean;
  onClose: () => void;
  placement?: OffcanvasPlacement;
  backdrop?: boolean;
}

const placementClasses: Record<OffcanvasPlacement, { panel: string; transform: string }> = {
  start: {
    panel: 'top-0 bottom-0 left-0 w-80 max-w-[85vw] border-r',
    transform: 'translate-x-0',
  },
  end: {
    panel: 'top-0 bottom-0 right-0 w-80 max-w-[85vw] border-l',
    transform: 'translate-x-0',
  },
  top: {
    panel: 'top-0 left-0 right-0 max-h-[50vh] border-b',
    transform: 'translate-y-0',
  },
  bottom: {
    panel: 'bottom-0 left-0 right-0 max-h-[50vh] border-t rounded-t-2xl',
    transform: 'translate-y-0',
  },
};

export const OffcanvasHeader: React.FC<React.HTMLAttributes<HTMLDivElement> & { onClose?: () => void }> = ({
  onClose,
  className,
  children,
  ...props
}) => (
  <div
    className={cn(
      'flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800',
      className
    )}
    {...props}
  >
    <div className="flex-1 pr-4">{children}</div>
    {onClose && (
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors focus:outline-none"
      >
        <X className="w-5 h-5" />
      </button>
    )}
  </div>
);

export const OffcanvasTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => (
  <h5 className={cn('text-lg font-semibold text-slate-900 dark:text-white', className)} {...props}>
    {children}
  </h5>
);

export const OffcanvasBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn('p-5 flex-1 overflow-y-auto custom-scrollbar text-slate-600 dark:text-slate-300', className)} {...props}>
    {children}
  </div>
);

export interface OffcanvasComponent extends React.FC<OffcanvasProps> {
  Header: typeof OffcanvasHeader;
  Title: typeof OffcanvasTitle;
  Body: typeof OffcanvasBody;
}

export const Offcanvas: OffcanvasComponent = ({
  show,
  onClose,
  placement = 'start',
  backdrop = true,
  className,
  children,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && show) {
        onClose();
      }
    };

    if (show) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {backdrop && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300"
        />
      )}
      <div
        className={cn(
          'fixed z-50 flex flex-col bg-white dark:bg-slate-850 border-slate-200 dark:border-slate-700 shadow-2xl transition-transform duration-300 ease-in-out',
          placementClasses[placement].panel,
          placementClasses[placement].transform,
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

Offcanvas.Header = OffcanvasHeader;
Offcanvas.Title = OffcanvasTitle;
Offcanvas.Body = OffcanvasBody;
