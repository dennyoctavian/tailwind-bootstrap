import React from 'react';
import { cn } from '../../utils/cn';
import { X } from 'lucide-react';

export type TagColor =
  | 'blue'
  | 'purple'
  | 'cyan'
  | 'green'
  | 'magenta'
  | 'pink'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'volcano'
  | 'geekblue'
  | 'gold'
  | 'lime';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: TagColor;
  closable?: boolean;
  onClose?: () => void;
  checkable?: boolean;
  checked?: boolean;
  icon?: React.ReactNode;
  bordered?: boolean;
}

const colorStyles: Record<TagColor, { bg: string; text: string; border: string }> = {
  blue: { bg: 'bg-blue-50 dark:bg-blue-950/60', text: 'text-blue-700 dark:text-blue-300', border: 'border-blue-200 dark:border-blue-800' },
  purple: { bg: 'bg-purple-50 dark:bg-purple-950/60', text: 'text-purple-700 dark:text-purple-300', border: 'border-purple-200 dark:border-purple-800' },
  cyan: { bg: 'bg-cyan-50 dark:bg-cyan-950/60', text: 'text-cyan-700 dark:text-cyan-300', border: 'border-cyan-200 dark:border-cyan-800' },
  green: { bg: 'bg-emerald-50 dark:bg-emerald-950/60', text: 'text-emerald-700 dark:text-emerald-300', border: 'border-emerald-200 dark:border-emerald-800' },
  magenta: { bg: 'bg-fuchsia-50 dark:bg-fuchsia-950/60', text: 'text-fuchsia-700 dark:text-fuchsia-300', border: 'border-fuchsia-200 dark:border-fuchsia-800' },
  pink: { bg: 'bg-pink-50 dark:bg-pink-950/60', text: 'text-pink-700 dark:text-pink-300', border: 'border-pink-200 dark:border-pink-800' },
  red: { bg: 'bg-red-50 dark:bg-red-950/60', text: 'text-red-700 dark:text-red-300', border: 'border-red-200 dark:border-red-800' },
  orange: { bg: 'bg-orange-50 dark:bg-orange-950/60', text: 'text-orange-700 dark:text-orange-300', border: 'border-orange-200 dark:border-orange-800' },
  yellow: { bg: 'bg-amber-50 dark:bg-amber-950/60', text: 'text-amber-700 dark:text-amber-300', border: 'border-amber-200 dark:border-amber-800' },
  volcano: { bg: 'bg-rose-50 dark:bg-rose-950/60', text: 'text-rose-700 dark:text-rose-300', border: 'border-rose-200 dark:border-rose-800' },
  geekblue: { bg: 'bg-indigo-50 dark:bg-indigo-950/60', text: 'text-indigo-700 dark:text-indigo-300', border: 'border-indigo-200 dark:border-indigo-800' },
  gold: { bg: 'bg-yellow-50 dark:bg-yellow-950/60', text: 'text-yellow-700 dark:text-yellow-300', border: 'border-yellow-200 dark:border-yellow-800' },
  lime: { bg: 'bg-lime-50 dark:bg-lime-950/60', text: 'text-lime-700 dark:text-lime-300', border: 'border-lime-200 dark:border-lime-800' },
};

export const Tag: React.FC<TagProps> = ({
  color = 'blue',
  closable = false,
  onClose,
  checkable = false,
  checked = false,
  icon,
  bordered = true,
  className,
  children,
  ...props
}) => {
  const [visible, setVisible] = React.useState(true);
  const colorStyle = colorStyles[color] || colorStyles.blue;

  if (!visible) return null;

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setVisible(false);
    if (onClose) onClose();
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium select-none transition-all align-middle',
        colorStyle.bg,
        colorStyle.text,
        bordered && `border ${colorStyle.border}`,
        checkable && 'cursor-pointer hover:opacity-80 active:scale-95',
        checkable && checked && 'ring-2 ring-blue-500 font-bold',
        className
      )}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {closable && (
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close tag"
          className="ml-0.5 p-0.5 rounded-full hover:bg-black/10 dark:hover:bg-white/20 transition-colors focus:outline-none"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </span>
  );
};
