import React, { useState, useRef, useEffect, createContext, useContext } from 'react';
import { cn } from '../../utils/cn';
import { ChevronDown } from 'lucide-react';

interface DropdownContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownContext = createContext<DropdownContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'end';
}

export const DropdownToggle: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...props
}) => {
  const { isOpen, setIsOpen } = useContext(DropdownContext);

  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      aria-expanded={isOpen}
      className={cn(
        'inline-flex items-center justify-between gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-colors',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className={cn('w-4 h-4 transition-transform duration-150', isOpen && 'rotate-180')} />
    </button>
  );
};

export const DropdownMenu: React.FC<React.HTMLAttributes<HTMLDivElement> & { align?: 'start' | 'end' }> = ({
  align = 'start',
  className,
  children,
  ...props
}) => {
  const { isOpen } = useContext(DropdownContext);

  if (!isOpen) return null;

  return (
    <div
      role="menu"
      className={cn(
        'absolute z-50 mt-2 min-w-[12rem] py-1.5 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 animate-in fade-in zoom-in-95 duration-100',
        align === 'end' ? 'right-0' : 'left-0',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const DropdownItem: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean; disabled?: boolean }> = ({
  active = false,
  disabled = false,
  onClick,
  className,
  children,
  ...props
}) => {
  const { setIsOpen } = useContext(DropdownContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    setIsOpen(false);
    if (onClick) onClick(e);
  };

  return (
    <button
      type="button"
      role="menuitem"
      disabled={disabled}
      onClick={handleClick}
      className={cn(
        'w-full text-left px-4 py-2 text-sm flex items-center gap-2.5 transition-colors',
        disabled ? 'text-slate-400 dark:text-slate-600 pointer-events-none' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-750',
        active && 'bg-blue-600 text-white hover:bg-blue-700 font-medium',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const DropdownDivider: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn('my-1.5 border-t border-slate-100 dark:border-slate-700', className)} {...props} />
);

export const DropdownHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={cn('px-4 py-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider', className)} {...props}>
    {children}
  </div>
);

export interface DropdownComponent extends React.FC<DropdownProps> {
  Toggle: typeof DropdownToggle;
  Menu: typeof DropdownMenu;
  Item: typeof DropdownItem;
  Divider: typeof DropdownDivider;
  Header: typeof DropdownHeader;
}

export const Dropdown: DropdownComponent = ({ className, children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <div ref={containerRef} className={cn('relative inline-block text-left', className)} {...props}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
Dropdown.Divider = DropdownDivider;
Dropdown.Header = DropdownHeader;
