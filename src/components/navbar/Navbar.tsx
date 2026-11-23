import React, { useState, createContext, useContext } from 'react';
import { cn } from '../../utils/cn';
import { Menu, X } from 'lucide-react';

interface NavbarContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  expand: 'sm' | 'md' | 'lg' | 'xl' | 'always' | 'never';
}

const NavbarContext = createContext<NavbarContextType>({
  isOpen: false,
  setIsOpen: () => {},
  expand: 'md',
});

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  expand?: 'sm' | 'md' | 'lg' | 'xl' | 'always' | 'never';
  theme?: 'light' | 'dark';
  sticky?: 'top' | 'bottom';
  fixed?: 'top' | 'bottom';
}

const expandClasses = {
  sm: 'sm:flex-row sm:items-center',
  md: 'md:flex-row md:items-center',
  lg: 'lg:flex-row lg:items-center',
  xl: 'xl:flex-row xl:items-center',
  always: 'flex-row items-center',
  never: 'flex-col',
};

const toggleVisibility = {
  sm: 'sm:hidden',
  md: 'md:hidden',
  lg: 'lg:hidden',
  xl: 'xl:hidden',
  always: 'hidden',
  never: 'block',
};

const collapseVisibility = {
  sm: 'sm:!flex sm:basis-auto sm:flex-row',
  md: 'md:!flex md:basis-auto md:flex-row',
  lg: 'lg:!flex lg:basis-auto lg:flex-row',
  xl: 'xl:!flex xl:basis-auto xl:flex-row',
  always: '!flex basis-auto flex-row',
  never: '',
};

export const NavbarBrand: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  className,
  children,
  ...props
}) => (
  <a
    className={cn(
      'text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2 mr-4 py-1 select-none',
      className
    )}
    {...props}
  >
    {children}
  </a>
);

export const NavbarToggle: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...props
}) => {
  const { isOpen, setIsOpen, expand } = useContext(NavbarContext);

  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle navigation"
      className={cn(
        'p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors',
        toggleVisibility[expand],
        className
      )}
      {...props}
    >
      {children || (isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />)}
    </button>
  );
};

export const NavbarCollapse: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  const { isOpen, expand } = useContext(NavbarContext);

  return (
    <div
      className={cn(
        'w-full basis-full items-center justify-between transition-all duration-300 ease-in-out',
        collapseVisibility[expand],
        isOpen ? 'flex flex-col mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 lg:border-0 lg:mt-0 lg:pt-0' : 'hidden',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export interface NavbarComponent extends React.FC<NavbarProps> {
  Brand: typeof NavbarBrand;
  Toggle: typeof NavbarToggle;
  Collapse: typeof NavbarCollapse;
}

export const Navbar: NavbarComponent = ({
  expand = 'md',
  theme = 'light',
  sticky,
  fixed,
  className,
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const stickyClass =
    sticky === 'top'
      ? 'sticky top-0 z-40'
      : sticky === 'bottom'
      ? 'sticky bottom-0 z-40'
      : fixed === 'top'
      ? 'fixed top-0 left-0 right-0 z-40'
      : fixed === 'bottom'
      ? 'fixed bottom-0 left-0 right-0 z-40'
      : 'relative';

  const themeClass =
    theme === 'dark'
      ? 'bg-slate-900 text-white border-b border-slate-800 shadow-md'
      : 'bg-white/95 backdrop-blur-md text-slate-900 border-b border-slate-200/80 dark:bg-slate-900/95 dark:border-slate-800 shadow-sm';

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen, expand }}>
      <nav
        className={cn(
          'w-full px-4 py-3 sm:px-6 transition-colors duration-200',
          stickyClass,
          themeClass,
          className
        )}
        {...props}
      >
        <div className={cn('mx-auto max-w-7xl flex flex-wrap items-center justify-between', expandClasses[expand])}>
          {children}
        </div>
      </nav>
    </NavbarContext.Provider>
  );
};

Navbar.Brand = NavbarBrand;
Navbar.Toggle = NavbarToggle;
Navbar.Collapse = NavbarCollapse;
