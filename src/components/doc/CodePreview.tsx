import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import { Copy, Check, Code2 } from 'lucide-react';

export interface CodePreviewProps {
  title?: string;
  description?: React.ReactNode;
  children: React.ReactNode;
  code: string;
  className?: string;
}

export const CodePreview: React.FC<CodePreviewProps> = ({
  title,
  description,
  children,
  code,
  className,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(code.trim());
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = code.trim();
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  return (
    <div className={cn('mb-8 last:mb-0', className)}>
      {title && (
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
          {title}
        </h3>
      )}
      {description && (
        <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">
          {description}
        </div>
      )}

      {/* Bootstrap Docs style preview + code box */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        {/* Live interactive preview container */}
        <div className="p-4 sm:p-6 bg-white dark:bg-slate-900 overflow-x-auto custom-scrollbar">
          {children}
        </div>

        {/* Code header bar with Copy button */}
        <div className="flex items-center justify-between px-4 py-2 bg-slate-800 text-slate-300 border-t border-slate-700/80 text-xs">
          <span className="font-mono flex items-center gap-1.5 text-slate-400">
            <Code2 className="w-3.5 h-3.5 text-blue-400" />
            JSX
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className={cn(
              'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500',
              copied
                ? 'bg-emerald-600 text-white font-bold'
                : 'bg-slate-700 hover:bg-slate-600 text-slate-200 hover:text-white'
            )}
            title="Salin kode ke clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-white" />
                <span>Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-300" />
                <span>Salin Kode</span>
              </>
            )}
          </button>
        </div>

        {/* Code snippet display */}
        <div className="bg-slate-950 p-4 overflow-x-auto custom-scrollbar">
          <pre className="font-mono text-xs text-slate-200 leading-relaxed m-0 whitespace-pre">
            <code>{code.trim()}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};
