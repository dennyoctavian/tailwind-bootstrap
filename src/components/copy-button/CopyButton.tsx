import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import { Copy, Check } from 'lucide-react';

export interface CopyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  timeout?: number;
  onCopySuccess?: () => void;
  variant?: 'default' | 'outline' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  copiedLabel?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  value,
  timeout = 2000,
  onCopySuccess,
  variant = 'outline',
  size = 'md',
  label = 'Salin',
  copiedLabel = 'Tersalin!',
  className,
  ...props
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = value;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopied(true);
      onCopySuccess?.();
      setTimeout(() => setCopied(false), timeout);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const sizeClasses = {
    sm: 'text-xs px-2.5 py-1 gap-1.5',
    md: 'text-xs sm:text-sm px-3 py-1.5 gap-2',
    lg: 'text-sm sm:text-base px-4 py-2 gap-2.5',
  };

  const variantClasses = {
    default: copied
      ? 'bg-emerald-600 text-white'
      : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100',
    outline: copied
      ? 'border border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-semibold'
      : 'border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-xs',
    subtle: copied
      ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 font-semibold'
      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700',
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        'inline-flex items-center justify-center font-medium rounded-xl transition-all cursor-pointer select-none active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/20',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      title={copied ? copiedLabel : label}
      {...props}
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 stroke-[2.5]" />
      ) : (
        <Copy className="w-3.5 h-3.5 text-slate-400 dark:text-slate-400" />
      )}
      <span>{copied ? copiedLabel : label}</span>
    </button>
  );
};
