import React from 'react';
import { cn } from '../../utils/cn';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  size?: 'sm' | 'md' | 'lg';
  maxVisible?: number;
}

const sizeClasses = {
  sm: 'w-7 h-7 text-xs',
  md: 'w-9 h-9 text-sm',
  lg: 'w-11 h-11 text-base',
};

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  size = 'md',
  maxVisible = 5,
  className,
  ...props
}) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      const half = Math.floor(maxVisible / 2);
      let start = Math.max(1, currentPage - half);
      let end = Math.min(totalPages, start + maxVisible - 1);

      if (end - start + 1 < maxVisible) {
        start = Math.max(1, end - maxVisible + 1);
      }

      if (start > 1) {
        pages.push(1);
        if (start > 2) pages.push('...');
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages) {
        if (end < totalPages - 1) pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav aria-label="Pagination" className={cn('flex items-center justify-center gap-1', className)} {...props}>
      <button
        type="button"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={cn(
          'inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none shadow-sm',
          sizeClasses[size]
        )}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {pages.map((p, idx) =>
        p === '...' ? (
          <span
            key={`ellipsis-${idx}`}
            className={cn('inline-flex items-center justify-center text-slate-400 font-semibold', sizeClasses[size])}
          >
            ...
          </span>
        ) : (
          <button
            key={`page-${p}`}
            type="button"
            onClick={() => onPageChange(p as number)}
            className={cn(
              'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-150 shadow-sm',
              sizeClasses[size],
              currentPage === p
                ? 'bg-blue-600 text-white font-bold shadow-blue-500/20'
                : 'border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
            )}
          >
            {p}
          </button>
        )
      )}

      <button
        type="button"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={cn(
          'inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none shadow-sm',
          sizeClasses[size]
        )}
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
};
