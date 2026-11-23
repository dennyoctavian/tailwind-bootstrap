import React from 'react';
import { cn } from '../../utils/cn';

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  gutter?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  gx?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  gy?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  colsSm?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  colsMd?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  colsLg?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  colsXl?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
}

const gutterMap: Record<number, string> = {
  0: 'gap-0',
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-4',
  4: 'gap-6',
  5: 'gap-8',
  6: 'gap-12',
};

const gxMap: Record<number, string> = {
  0: 'gap-x-0',
  1: 'gap-x-1',
  2: 'gap-x-2',
  3: 'gap-x-4',
  4: 'gap-x-6',
  5: 'gap-x-8',
  6: 'gap-x-12',
};

const gyMap: Record<number, string> = {
  0: 'gap-y-0',
  1: 'gap-y-1',
  2: 'gap-y-2',
  3: 'gap-y-4',
  4: 'gap-y-6',
  5: 'gap-y-8',
  6: 'gap-y-12',
};

const alignMap = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
};

const justifyMap = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

export const Row: React.FC<RowProps> = ({
  gutter = 4,
  gx,
  gy,
  cols,
  colsSm,
  colsMd,
  colsLg,
  colsXl,
  align,
  justify,
  className,
  children,
  ...props
}) => {
  const getGutterClasses = () => {
    if (gx !== undefined || gy !== undefined) {
      return cn(
        gx !== undefined ? gxMap[gx] : '',
        gy !== undefined ? gyMap[gy] : ''
      );
    }
    return gutterMap[gutter] || 'gap-4';
  };

  const getColsClasses = () => {
    const list: string[] = [];
    if (cols) list.push(`grid-cols-${cols}`);
    if (colsSm) list.push(`sm:grid-cols-${colsSm}`);
    if (colsMd) list.push(`md:grid-cols-${colsMd}`);
    if (colsLg) list.push(`lg:grid-cols-${colsLg}`);
    if (colsXl) list.push(`xl:grid-cols-${colsXl}`);
    return list.join(' ');
  };

  // If cols is specified, we use CSS Grid row-cols style; otherwise flex-wrap grid system
  const isRowCols = Boolean(cols || colsSm || colsMd || colsLg || colsXl);

  return (
    <div
      className={cn(
        isRowCols ? 'grid' : 'flex flex-wrap -mx-2 sm:-mx-3',
        isRowCols ? getGutterClasses() : '',
        align && alignMap[align],
        justify && justifyMap[justify],
        isRowCols && getColsClasses(),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
