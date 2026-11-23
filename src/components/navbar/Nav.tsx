import React from 'react';
import { cn } from '../../utils/cn';

export interface NavProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'pills' | 'tabs' | 'underline';
  fill?: boolean;
  justified?: boolean;
  scrollable?: boolean;
  navbar?: boolean;
}

export const NavLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement> & { active?: boolean; disabled?: boolean; inNavbar?: boolean }> = ({
  active = false,
  disabled = false,
  inNavbar = false,
  className,
  children,
  ...props
}) => {
  return (
    <a
      className={cn(
        'px-3.5 py-2 text-sm font-medium transition-all duration-150 inline-flex items-center gap-2 rounded-md select-none',
        inNavbar && 'w-full lg:w-auto justify-start lg:justify-center py-2.5',
        disabled ? 'text-slate-400 dark:text-slate-600 pointer-events-none' : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400',
        active && 'text-blue-600 font-semibold dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/40',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export const NavItem: React.FC<React.LiHTMLAttributes<HTMLLIElement>> = ({
  className,
  children,
  ...props
}) => (
  <li className={cn('inline-block w-full lg:w-auto', className)} {...props}>
    {children}
  </li>
);

export interface NavComponent extends React.FC<NavProps> {
  Link: typeof NavLink;
  Item: typeof NavItem;
}

export const Nav: NavComponent = ({
  variant = 'default',
  fill = false,
  justified = false,
  scrollable = true,
  navbar = false,
  className,
  children,
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'pills':
        return '[&_a]:rounded-lg [&_a.active]:bg-blue-600 [&_a.active]:text-white [&_a.active]:shadow-sm';
      case 'tabs':
        return 'border-b border-slate-200 dark:border-slate-700 [&_a]:rounded-t-lg [&_a]:border-b-2 [&_a]:border-transparent [&_a.active]:border-blue-600 [&_a.active]:text-blue-600 dark:[&_a.active]:text-blue-400';
      case 'underline':
        return 'border-b border-slate-200 dark:border-slate-700 [&_a]:border-b-2 [&_a]:border-transparent [&_a.active]:border-blue-600 [&_a.active]:text-blue-600 [&_a]:rounded-none';
      default:
        return '';
    }
  };

  return (
    <nav
      className={cn(
        navbar ? 'w-full lg:w-auto flex flex-col lg:flex-row items-stretch lg:items-center gap-1 sm:gap-2' : 'flex items-center gap-1 sm:gap-2',
        !navbar && scrollable && 'overflow-x-auto custom-scrollbar pb-1 sm:pb-0 max-w-full',
        fill && '[&>*]:flex-auto [&_a]:justify-center text-center',
        justified && '[&>*]:flex-1 [&_a]:justify-center text-center',
        getVariantClasses(),
        className
      )}
      {...props}
    >
      <ul className={cn(
        'list-none p-0 m-0 w-full flex gap-1 sm:gap-2',
        navbar ? 'flex-col lg:flex-row items-stretch lg:items-center' : 'flex-row items-center'
      )}>
        {children}
      </ul>
    </nav>
  );
};

Nav.Link = NavLink;
Nav.Item = NavItem;
