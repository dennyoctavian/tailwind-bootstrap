import React from 'react';
import { cn } from '../../utils/cn';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  separator?: React.ReactNode;
}

export interface BreadcrumbItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  active?: boolean;
  href?: string;
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  active = false,
  href,
  className,
  children,
  ...props
}) => {
  return (
    <li
      className={cn(
        'inline-flex items-center text-xs sm:text-sm font-medium',
        active ? 'text-slate-800 dark:text-slate-200 font-semibold' : 'text-slate-500 dark:text-slate-400',
        className
      )}
      {...props}
    >
      {href && !active ? (
        <a href={href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          {children}
        </a>
      ) : (
        <span>{children}</span>
      )}
    </li>
  );
};

export interface BreadcrumbComponent extends React.FC<BreadcrumbProps> {
  Item: typeof BreadcrumbItem;
}

export const Breadcrumb: BreadcrumbComponent = ({
  separator = <ChevronRight className="w-3.5 h-3.5 text-slate-400 mx-1.5 shrink-0" />,
  className,
  children,
  ...props
}) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <nav aria-label="breadcrumb" className={cn('flex py-2 px-1', className)} {...props}>
      <ol className="inline-flex items-center flex-wrap gap-1 list-none p-0 m-0">
        {childrenArray.map((child, index) => (
          <React.Fragment key={index}>
            {child}
            {index < childrenArray.length - 1 && separator}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumb.Item = BreadcrumbItem;
