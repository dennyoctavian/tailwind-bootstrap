import React from 'react';
import { cn } from '../../utils/cn';

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number; // e.g. 16 / 9, 4 / 3, 1 / 1, 21 / 9
}

export const AspectRatio: React.FC<AspectRatioProps> = ({
  ratio = 16 / 9,
  className,
  children,
  style,
  ...props
}) => {
  return (
    <div
      className={cn('relative w-full overflow-hidden rounded-xl', className)}
      style={{
        paddingBottom: `${(1 / ratio) * 100}%`,
        ...style,
      }}
      {...props}
    >
      <div className="absolute inset-0 w-full h-full [&>img]:w-full [&>img]:h-full [&>img]:object-cover [&>video]:w-full [&>video]:h-full [&>video]:object-cover">
        {children}
      </div>
    </div>
  );
};
