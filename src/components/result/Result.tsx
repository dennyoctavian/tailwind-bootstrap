import React from 'react';
import { cn } from '../../utils/cn';
import { CheckCircle2, AlertTriangle, XCircle, Info, FileQuestion } from 'lucide-react';

export type ResultStatus = 'success' | 'error' | 'info' | 'warning' | '404' | '403' | '500';

export interface ResultProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  status?: ResultStatus;
  title: React.ReactNode;
  subTitle?: React.ReactNode;
  extra?: React.ReactNode;
  icon?: React.ReactNode;
}

const statusConfig: Record<ResultStatus, { icon: React.ReactNode; color: string }> = {
  success: {
    icon: <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />,
    color: 'text-emerald-600',
  },
  error: {
    icon: <XCircle className="w-16 h-16 text-red-500 mx-auto" />,
    color: 'text-red-600',
  },
  warning: {
    icon: <AlertTriangle className="w-16 h-16 text-amber-500 mx-auto" />,
    color: 'text-amber-600',
  },
  info: {
    icon: <Info className="w-16 h-16 text-blue-500 mx-auto" />,
    color: 'text-blue-600',
  },
  '404': {
    icon: <FileQuestion className="w-16 h-16 text-slate-400 mx-auto" />,
    color: 'text-slate-700',
  },
  '403': {
    icon: <AlertTriangle className="w-16 h-16 text-amber-500 mx-auto" />,
    color: 'text-amber-700',
  },
  '500': {
    icon: <XCircle className="w-16 h-16 text-red-500 mx-auto" />,
    color: 'text-red-700',
  },
};

export const Result: React.FC<ResultProps> = ({
  status = 'info',
  title,
  subTitle,
  extra,
  icon,
  className,
  ...props
}) => {
  const currentStatus = statusConfig[status] || statusConfig.info;

  return (
    <div
      className={cn(
        'text-center py-10 px-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm max-w-xl mx-auto my-6',
        className
      )}
      {...props}
    >
      <div className="mb-4">
        {icon || currentStatus.icon}
      </div>

      <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-2 leading-tight">
        {title}
      </h2>

      {subTitle && (
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto leading-relaxed">
          {subTitle}
        </p>
      )}

      {extra && (
        <div className="flex flex-wrap items-center justify-center gap-3">
          {extra}
        </div>
      )}
    </div>
  );
};
