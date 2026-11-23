import React from 'react';
import { cn } from '../../utils/cn';

export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export const FormGroup: React.FC<FormGroupProps> = ({
  className,
  children,
  as: Component = 'div',
  ...props
}) => {
  return (
    <Component className={cn('mb-4 last:mb-0 w-full', className)} {...props}>
      {children}
    </Component>
  );
};
