import React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  vertical?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  vertical = false,
  className,
  children,
  ...props
}) => {
  return (
    <div
      role="group"
      className={cn(
        'inline-flex flex-wrap shadow-sm rounded-md',
        vertical ? 'flex-col [&>*]:rounded-none [&>*:first-child]:rounded-t-md [&>*:last-child]:rounded-b-md [&>*:not(:first-child)]:-mt-px' : 'flex-row [&>*]:rounded-none [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md [&>*:not(:first-child)]:-ml-px',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
