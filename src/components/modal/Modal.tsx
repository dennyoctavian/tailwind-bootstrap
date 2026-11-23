import React, { useEffect } from 'react';
import { cn } from '../../utils/cn';
import { X } from 'lucide-react';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  show: boolean;
  onClose: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';
  fullscreenSmDown?: boolean;
  centered?: boolean;
  scrollable?: boolean;
  backdrop?: boolean | 'static';
}

const modalSizes = {
  sm: 'max-w-sm',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  fullscreen: 'max-w-full m-0 h-full rounded-none',
};

export const ModalHeader: React.FC<React.HTMLAttributes<HTMLDivElement> & { closeButton?: boolean; onClose?: () => void }> = ({
  closeButton = true,
  onClose,
  className,
  children,
  ...props
}) => (
  <div
    className={cn(
      'flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-t-xl',
      className
    )}
    {...props}
  >
    <div className="flex-1 pr-4">{children}</div>
    {closeButton && (
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

export const ModalTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => (
  <h5 className={cn('text-lg sm:text-xl font-semibold text-slate-900 dark:text-white', className)} {...props}>
    {children}
  </h5>
);

export const ModalBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn('p-5 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base', className)} {...props}>
    {children}
  </div>
);

export const ModalFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn(
      'flex items-center justify-end gap-2.5 px-5 py-3.5 border-t border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 rounded-b-xl',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export interface ModalComponent extends React.FC<ModalProps> {
  Header: typeof ModalHeader;
  Title: typeof ModalTitle;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
}

export const Modal: ModalComponent = ({
  show,
  onClose,
  size = 'md',
  fullscreenSmDown = false,
  centered = true,
  scrollable = false,
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

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && backdrop !== 'static') {
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        className={cn(
          'relative w-full bg-white dark:bg-slate-850 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col transition-all transform scale-100 animate-in zoom-in-95 duration-150',
          fullscreenSmDown ? 'max-w-full h-full sm:h-auto sm:max-w-lg rounded-none sm:rounded-xl' : modalSizes[size],
          centered ? 'my-auto' : 'mt-12 mb-auto',
          scrollable && 'max-h-[calc(100vh-4rem)] [&>div:nth-child(2)]:overflow-y-auto custom-scrollbar',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
