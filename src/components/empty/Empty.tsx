import React from 'react';
import { cn } from '../../utils/cn';
import { PackageOpen } from 'lucide-react';

export interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
}

export const Empty: React.FC<EmptyProps> = ({
  image,
  description = 'Tidak ada data ditemukan',
  action,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center p-8 text-center rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 my-4',
        className
      )}
      {...props}
    >
      <div className="mb-3 text-slate-300 dark:text-slate-600">
        {image || (
          <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
            <PackageOpen className="w-8 h-8 stroke-[1.5]" />
          </div>
        )}
      </div>

      <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4 max-w-sm">
        {description}
      </div>

      {action && <div>{action}</div>}
    </div>
  );
};
