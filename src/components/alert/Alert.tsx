import React, { useState } from 'react';
import { cn, type VariantColor } from '../../utils/cn';
import { X, Info, CheckCircle2, AlertTriangle, AlertCircle } from 'lucide-react';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: VariantColor;
  dismissible?: boolean;
  show?: boolean;
  onClose?: () => void;
  icon?: React.ReactNode | boolean;
}

const alertStyles: Record<VariantColor, { wrapper: string; close: string; defaultIcon: React.ReactNode }> = {
  primary: {
    wrapper: 'bg-[#cfe2ff] text-[#084298] border-[#b6d4fe] dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-900',
    close: 'text-[#084298] hover:bg-[#b6d4fe]/50',
    defaultIcon: <Info className="w-5 h-5 shrink-0" />,
  },
  secondary: {
    wrapper: 'bg-[#e2e3e5] text-[#41464b] border-[#d3d6d8] dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700',
    close: 'text-[#41464b] hover:bg-[#d3d6d8]/50',
    defaultIcon: <Info className="w-5 h-5 shrink-0" />,
  },
  success: {
    wrapper: 'bg-[#d1e7dd] text-[#0f5132] border-[#badbcc] dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-900',
    close: 'text-[#0f5132] hover:bg-[#badbcc]/50',
    defaultIcon: <CheckCircle2 className="w-5 h-5 shrink-0" />,
  },
  danger: {
    wrapper: 'bg-[#f8d7da] text-[#842029] border-[#f5c2c7] dark:bg-red-950/50 dark:text-red-300 dark:border-red-900',
    close: 'text-[#842029] hover:bg-[#f5c2c7]/50',
    defaultIcon: <AlertCircle className="w-5 h-5 shrink-0" />,
  },
  warning: {
    wrapper: 'bg-[#fff3cd] text-[#664d03] border-[#ffecb5] dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-900',
    close: 'text-[#664d03] hover:bg-[#ffecb5]/50',
    defaultIcon: <AlertTriangle className="w-5 h-5 shrink-0" />,
  },
  info: {
    wrapper: 'bg-[#cff4fc] text-[#055160] border-[#b6effb] dark:bg-cyan-950/50 dark:text-cyan-300 dark:border-cyan-900',
    close: 'text-[#055160] hover:bg-[#b6effb]/50',
    defaultIcon: <Info className="w-5 h-5 shrink-0" />,
  },
  light: {
    wrapper: 'bg-[#fefefe] text-[#636464] border-[#e2e3e5] dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700',
    close: 'text-[#636464] hover:bg-gray-200',
    defaultIcon: <Info className="w-5 h-5 shrink-0" />,
  },
  dark: {
    wrapper: 'bg-[#d3d3d4] text-[#141619] border-[#bcbebf] dark:bg-slate-900 dark:text-slate-100 dark:border-slate-700',
    close: 'text-[#141619] hover:bg-[#bcbebf]/50',
    defaultIcon: <Info className="w-5 h-5 shrink-0" />,
  },
};

export const AlertHeading: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => (
  <h4 className={cn('text-base sm:text-lg font-semibold mb-1 leading-snug', className)} {...props}>
    {children}
  </h4>
);

export const AlertLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  className,
  children,
  ...props
}) => (
  <a className={cn('font-bold underline underline-offset-2 hover:opacity-80 transition-opacity', className)} {...props}>
    {children}
  </a>
);

export interface AlertComponent extends React.FC<AlertProps> {
  Heading: typeof AlertHeading;
  Link: typeof AlertLink;
}

export const Alert: AlertComponent = ({
  variant = 'primary',
  dismissible = false,
  show = true,
  onClose,
  icon,
  className,
  children,
  ...props
}) => {
  const [internalShow, setInternalShow] = useState(show);

  if (!internalShow) return null;

  const handleDismiss = () => {
    setInternalShow(false);
    if (onClose) onClose();
  };

  const style = alertStyles[variant] || alertStyles.primary;

  const renderIcon = () => {
    if (icon === false) return null;
    if (icon === true || icon === undefined) return style.defaultIcon;
    return icon;
  };

  return (
    <div
      role="alert"
      className={cn(
        'relative flex items-start gap-3 p-4 rounded-lg border text-sm sm:text-base transition-all duration-200 shadow-sm',
        style.wrapper,
        className
      )}
      {...props}
    >
      {renderIcon() && <div className="mt-0.5 shrink-0">{renderIcon()}</div>}
      <div className="flex-1 min-w-0 pr-6">{children}</div>
      {dismissible && (
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Close alert"
          className={cn(
            'absolute top-3.5 right-3 p-1 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1',
            style.close
          )}
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

Alert.Heading = AlertHeading;
Alert.Link = AlertLink;
