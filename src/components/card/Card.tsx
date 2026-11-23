import React from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  border?: 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'none';
  horizontal?: boolean | 'sm' | 'md' | 'lg';
}

const borderColors = {
  default: 'border-slate-200 dark:border-slate-700',
  primary: 'border-blue-500',
  success: 'border-emerald-500',
  danger: 'border-red-500',
  warning: 'border-amber-500',
  info: 'border-cyan-500',
  none: 'border-transparent',
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn(
      'px-4 py-3 sm:px-6 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 font-medium text-slate-800 dark:text-slate-200 flex items-center justify-between',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn('p-4 sm:p-6 flex-1 text-slate-600 dark:text-slate-300', className)} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => (
  <h3 className={cn('text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2 leading-tight', className)} {...props}>
    {children}
  </h3>
);

export const CardSubtitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => (
  <h6 className={cn('text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-3', className)} {...props}>
    {children}
  </h6>
);

export const CardText: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  children,
  ...props
}) => (
  <p className={cn('text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 last:mb-0 leading-relaxed', className)} {...props}>
    {children}
  </p>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn(
      'px-4 py-3 sm:px-6 border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-center justify-between',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export interface CardImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  position?: 'top' | 'bottom' | 'middle';
}

export const CardImg: React.FC<CardImgProps> = ({
  position = 'top',
  className,
  alt = '',
  ...props
}) => {
  const positionClass =
    position === 'top'
      ? 'rounded-t-xl'
      : position === 'bottom'
      ? 'rounded-b-xl'
      : 'rounded-none';

  return (
    <img
      className={cn('w-full object-cover max-h-60', positionClass, className)}
      alt={alt}
      {...props}
    />
  );
};

export interface CardComponent extends React.FC<CardProps> {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Title: typeof CardTitle;
  Subtitle: typeof CardSubtitle;
  Text: typeof CardText;
  Footer: typeof CardFooter;
  Img: typeof CardImg;
}

export const Card: CardComponent = ({
  hoverable = false,
  border = 'default',
  horizontal = false,
  className,
  children,
  ...props
}) => {
  const getHorizontalClasses = () => {
    if (horizontal === true) return 'flex flex-col md:flex-row';
    if (horizontal === 'sm') return 'flex flex-col sm:flex-row';
    if (horizontal === 'md') return 'flex flex-col md:flex-row';
    if (horizontal === 'lg') return 'flex flex-col lg:flex-row';
    return 'flex flex-col';
  };

  return (
    <div
      className={cn(
        'rounded-xl border bg-white dark:bg-slate-850 shadow-sm transition-all duration-200 overflow-hidden',
        borderColors[border],
        hoverable && 'hover:shadow-md hover:-translate-y-0.5',
        getHorizontalClasses(),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Text = CardText;
Card.Footer = CardFooter;
Card.Img = CardImg;
