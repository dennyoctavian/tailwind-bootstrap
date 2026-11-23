import React, { useEffect } from 'react';
import { cn, type VariantColor } from '../../utils/cn';
import { X, CheckCircle2, AlertTriangle, AlertCircle, Info } from 'lucide-react';

export interface ToastProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  show?: boolean;
  onClose?: () => void;
  autohide?: boolean;
  delay?: number;
  variant?: VariantColor;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
}

const toastIcons: Record<string, React.ReactNode> = {
  primary: <Info className="w-4 h-4 text-blue-500" />,
  success: <CheckCircle2 className="w-4 h-4 text-emerald-500" />,
  danger: <AlertCircle className="w-4 h-4 text-red-500" />,
  warning: <AlertTriangle className="w-4 h-4 text-amber-500" />,
  info: <Info className="w-4 h-4 text-cyan-500" />,
  secondary: <Info className="w-4 h-4 text-slate-500" />,
  light: <Info className="w-4 h-4 text-slate-400" />,
  dark: <Info className="w-4 h-4 text-slate-300" />,
};

export const Toast: React.FC<ToastProps> = ({
  show = true,
  onClose,
  autohide = true,
  delay = 5000,
  variant,
  title,
  subtitle,
  className,
  children,
  ...props
}) => {
  useEffect(() => {
    if (!show || !autohide || !onClose) return;

    const timer = setTimeout(() => {
      onClose();
    }, delay);

    return () => clearTimeout(timer);
  }, [show, autohide, delay, onClose]);

  if (!show) return null;

  return (
    <div
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      className={cn(
        'w-full max-w-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200',
        className
      )}
      {...props}
    >
      {(title || onClose) && (
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50/80 dark:bg-slate-800/80 border-b border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2">
            {variant && toastIcons[variant]}
            {title && <span className="font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-100">{title}</span>}
          </div>
          <div className="flex items-center gap-2">
            {subtitle && <span className="text-[11px] text-slate-400">{subtitle}</span>}
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5 rounded transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}
      <div className="p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export type ToastPosition =
  | 'top-start'
  | 'top-center'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-center'
  | 'bottom-end';

const positionClasses: Record<ToastPosition, string> = {
  'top-start': 'top-4 left-4 items-start',
  'top-center': 'top-4 left-1/2 -translate-x-1/2 items-center',
  'top-end': 'top-4 right-4 items-end',
  'bottom-start': 'bottom-4 left-4 items-start',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2 items-center',
  'bottom-end': 'bottom-4 right-4 items-end',
};

export interface ToastContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: ToastPosition;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  position = 'top-end',
  className,
  children,
  ...props
}) => {
  return (
    <div
      aria-live="polite"
      className={cn(
        'fixed z-50 flex flex-col gap-2.5 p-3 pointer-events-none [&>*]:pointer-events-auto max-w-[calc(100vw-2rem)]',
        positionClasses[position],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
