import React from 'react';
import { cn } from '../../utils/cn';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  fluid?: boolean | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const Container: React.FC<ContainerProps> = ({
  fluid = false,
  className,
  children,
  ...props
}) => {
  const getFluidClass = () => {
    if (fluid === true) return 'w-full px-4 sm:px-6 lg:px-8';
    if (fluid === 'sm') return 'w-full px-4 sm:max-w-screen-sm sm:px-6 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl';
    if (fluid === 'md') return 'w-full px-4 md:max-w-screen-md md:px-6 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl';
    if (fluid === 'lg') return 'w-full px-4 lg:max-w-screen-lg lg:px-8 xl:max-w-screen-xl 2xl:max-w-screen-2xl';
    if (fluid === 'xl') return 'w-full px-4 xl:max-w-screen-xl 2xl:max-w-screen-2xl';
    if (fluid === '2xl') return 'w-full px-4 2xl:max-w-screen-2xl';
    // Default container matching Bootstrap breakpoints
    return 'w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl';
  };

  return (
    <div
      className={cn(getFluidClass(), 'mx-auto transition-all duration-200', className)}
      {...props}
    >
      {children}
    </div>
  );
};
