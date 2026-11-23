import React from 'react';
import { cn } from '../../utils/cn';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  icon?: React.ReactNode;
  shape?: 'circle' | 'square';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'busy' | 'away';
}

const sizeClasses = {
  sm: 'w-7 h-7 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
  xl: 'w-16 h-16 text-xl',
};

const statusColors = {
  online: 'bg-emerald-500',
  offline: 'bg-slate-400',
  busy: 'bg-red-500',
  away: 'bg-amber-400',
};

export const AvatarGroup: React.FC<React.HTMLAttributes<HTMLDivElement> & { max?: number }> = ({
  max,
  className,
  children,
  ...props
}) => {
  const childrenArray = React.Children.toArray(children);
  const visible = max ? childrenArray.slice(0, max) : childrenArray;
  const extra = max && childrenArray.length > max ? childrenArray.length - max : 0;

  return (
    <div className={cn('flex items-center -space-x-2.5 overflow-hidden', className)} {...props}>
      {visible.map((child, idx) => (
        <div key={idx} className="ring-2 ring-white dark:ring-slate-900 rounded-full">
          {child}
        </div>
      ))}
      {extra > 0 && (
        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center text-xs font-bold ring-2 ring-white dark:ring-slate-900 z-10">
          +{extra}
        </div>
      )}
    </div>
  );
};

export interface AvatarComponent extends React.FC<AvatarProps> {
  Group: typeof AvatarGroup;
}

export const Avatar: AvatarComponent = ({
  src,
  alt = 'Avatar',
  name,
  icon,
  shape = 'circle',
  size = 'md',
  status,
  className,
  children,
  ...props
}) => {
  const initials = name
    ? name
        .split(' ')
        .filter(Boolean)
        .map((n) => n[0])
        .join('')
        .substring(0, 2)
        .toUpperCase()
    : null;

  return (
    <div className="relative inline-block select-none">
      <div
        className={cn(
          'flex items-center justify-center font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 overflow-hidden shadow-sm',
          shape === 'circle' ? 'rounded-full' : 'rounded-xl',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : icon ? (
          <span className="flex items-center justify-center">{icon}</span>
        ) : initials ? (
          <span>{initials}</span>
        ) : (
          children
        )}
      </div>

      {status && (
        <span
          className={cn(
            'absolute bottom-0 right-0 w-3 h-3 rounded-full ring-2 ring-white dark:ring-slate-900',
            statusColors[status]
          )}
        />
      )}
    </div>
  );
};

Avatar.Group = AvatarGroup;
