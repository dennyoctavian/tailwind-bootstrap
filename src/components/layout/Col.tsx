import React from 'react';
import { cn } from '../../utils/cn';

export type ColSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto' | 'full';

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  xs?: ColSpan;
  sm?: ColSpan;
  md?: ColSpan;
  lg?: ColSpan;
  xl?: ColSpan;
  offsetXs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  offsetSm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  offsetMd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  offsetLg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  offsetXl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
}

const spanMap: Record<string, string> = {
  1: 'w-1/12',
  2: 'w-2/12',
  3: 'w-3/12',
  4: 'w-4/12',
  5: 'w-5/12',
  6: 'w-6/12',
  7: 'w-7/12',
  8: 'w-8/12',
  9: 'w-9/12',
  10: 'w-10/12',
  11: 'w-11/12',
  12: 'w-full',
  full: 'w-full',
  auto: 'w-auto flex-1',
};

const smSpanMap: Record<string, string> = {
  1: 'sm:w-1/12',
  2: 'sm:w-2/12',
  3: 'sm:w-3/12',
  4: 'sm:w-4/12',
  5: 'sm:w-5/12',
  6: 'sm:w-6/12',
  7: 'sm:w-7/12',
  8: 'sm:w-8/12',
  9: 'sm:w-9/12',
  10: 'sm:w-10/12',
  11: 'sm:w-11/12',
  12: 'sm:w-full',
  full: 'sm:w-full',
  auto: 'sm:w-auto sm:flex-1',
};

const mdSpanMap: Record<string, string> = {
  1: 'md:w-1/12',
  2: 'md:w-2/12',
  3: 'md:w-3/12',
  4: 'md:w-4/12',
  5: 'md:w-5/12',
  6: 'md:w-6/12',
  7: 'md:w-7/12',
  8: 'md:w-8/12',
  9: 'md:w-9/12',
  10: 'md:w-10/12',
  11: 'md:w-11/12',
  12: 'md:w-full',
  full: 'md:w-full',
  auto: 'md:w-auto md:flex-1',
};

const lgSpanMap: Record<string, string> = {
  1: 'lg:w-1/12',
  2: 'lg:w-2/12',
  3: 'lg:w-3/12',
  4: 'lg:w-4/12',
  5: 'lg:w-5/12',
  6: 'lg:w-6/12',
  7: 'lg:w-7/12',
  8: 'lg:w-8/12',
  9: 'lg:w-9/12',
  10: 'lg:w-10/12',
  11: 'lg:w-11/12',
  12: 'lg:w-full',
  full: 'lg:w-full',
  auto: 'lg:w-auto lg:flex-1',
};

const xlSpanMap: Record<string, string> = {
  1: 'xl:w-1/12',
  2: 'xl:w-2/12',
  3: 'xl:w-3/12',
  4: 'xl:w-4/12',
  5: 'xl:w-5/12',
  6: 'xl:w-6/12',
  7: 'xl:w-7/12',
  8: 'xl:w-8/12',
  9: 'xl:w-9/12',
  10: 'xl:w-10/12',
  11: 'xl:w-11/12',
  12: 'xl:w-full',
  full: 'xl:w-full',
  auto: 'xl:w-auto xl:flex-1',
};

export const Col: React.FC<ColProps> = ({
  xs,
  sm,
  md,
  lg,
  xl,
  offsetXs,
  offsetSm,
  offsetMd,
  offsetLg,
  offsetXl,
  className,
  children,
  ...props
}) => {
  const getColClasses = () => {
    const classes: string[] = ['px-2 sm:px-3 flex-shrink-0 max-w-full min-w-0 box-border']; // Bootstrap standard padding gutters
    
    // Default to w-full if no xs specified or auto flex-1 if nothing provided at all
    if (!xs && !sm && !md && !lg && !xl) {
      classes.push('flex-1 w-full');
    } else {
      if (xs !== undefined) classes.push(spanMap[String(xs)] || 'w-full');
      else classes.push('w-full'); // Mobile-first default to full width unless overridden
      
      if (sm !== undefined) classes.push(smSpanMap[String(sm)] || '');
      if (md !== undefined) classes.push(mdSpanMap[String(md)] || '');
      if (lg !== undefined) classes.push(lgSpanMap[String(lg)] || '');
      if (xl !== undefined) classes.push(xlSpanMap[String(xl)] || '');
    }

    if (offsetXs) classes.push(`ml-[${(offsetXs / 12) * 100}%]`);
    if (offsetSm) classes.push(`sm:ml-[${(offsetSm / 12) * 100}%]`);
    if (offsetMd) classes.push(`md:ml-[${(offsetMd / 12) * 100}%]`);
    if (offsetLg) classes.push(`lg:ml-[${(offsetLg / 12) * 100}%]`);
    if (offsetXl) classes.push(`xl:ml-[${(offsetXl / 12) * 100}%]`);

    return classes.join(' ');
  };

  return (
    <div className={cn(getColClasses(), className)} {...props}>
      {children}
    </div>
  );
};
