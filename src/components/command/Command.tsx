import React, { createContext, useContext, useState, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { Search, X } from 'lucide-react';

interface CommandContextType {
  search: string;
  setSearch: (val: string) => void;
  filteredCount: number;
  registerItem: (id: string, text: string) => void;
  unregisterItem: (id: string) => void;
  isItemVisible: (text: string) => boolean;
}

const CommandContext = createContext<CommandContextType | null>(null);

export interface CommandProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CommandRoot: React.FC<CommandProps> = ({
  className,
  children,
  ...props
}) => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState<Record<string, string>>({});

  const registerItem = (id: string, text: string) => {
    setItems((prev) => ({ ...prev, [id]: text.toLowerCase() }));
  };

  const unregisterItem = (id: string) => {
    setItems((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const isItemVisible = (text: string) => {
    if (!search.trim()) return true;
    return text.toLowerCase().includes(search.toLowerCase().trim());
  };

  const filteredCount = Object.values(items).filter((text) => isItemVisible(text)).length;

  return (
    <CommandContext.Provider
      value={{
        search,
        setSearch,
        filteredCount,
        registerItem,
        unregisterItem,
        isItemVisible,
      }}
    >
      <div
        className={cn(
          'flex flex-col w-full h-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 overflow-hidden shadow-lg',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </CommandContext.Provider>
  );
};

// Command.Input
export interface CommandInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value?: string;
  onValueChange?: (val: string) => void;
}

export const CommandInput: React.FC<CommandInputProps> = ({
  className,
  placeholder = 'Ketik perintah atau cari fitur...',
  value,
  onValueChange,
  ...props
}) => {
  const context = useContext(CommandContext);
  const currentVal = value !== undefined ? value : context?.search || '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    context?.setSearch(val);
    onValueChange?.(val);
  };

  const handleClear = () => {
    context?.setSearch('');
    onValueChange?.('');
  };

  return (
    <div className="flex items-center px-3.5 border-b border-slate-200 dark:border-slate-800">
      <Search className="w-4 h-4 mr-2.5 text-slate-400 shrink-0" />
      <input
        type="text"
        value={currentVal}
        onChange={handleChange}
        placeholder={placeholder}
        className={cn(
          'w-full py-3 bg-transparent text-sm placeholder:text-slate-400 focus:outline-none text-slate-800 dark:text-slate-100',
          className
        )}
        {...props}
      />
      {currentVal && (
        <button
          type="button"
          onClick={handleClear}
          className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};

// Command.List
export const CommandList: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn('max-h-[300px] overflow-y-auto p-2 space-y-1 custom-scrollbar', className)}
      {...props}
    >
      {children}
    </div>
  );
};

// Command.Empty
export const CommandEmpty: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children = 'Tidak ada hasil perintah ditemukan.',
  ...props
}) => {
  const context = useContext(CommandContext);
  if (!context || context.filteredCount > 0) return null;

  return (
    <div
      className={cn('py-8 text-center text-xs sm:text-sm text-slate-400 dark:text-slate-500', className)}
      {...props}
    >
      {children}
    </div>
  );
};

// Command.Group
export interface CommandGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: React.ReactNode;
}

export const CommandGroup: React.FC<CommandGroupProps> = ({
  heading,
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn('py-1.5', className)} {...props}>
      <div className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 select-none">
        {heading}
      </div>
      <div className="space-y-0.5">{children}</div>
    </div>
  );
};

// Command.Item
export interface CommandItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  disabled?: boolean;
  onSelect?: () => void;
}

export const CommandItem: React.FC<CommandItemProps> = ({
  value,
  disabled = false,
  onSelect,
  className,
  children,
  ...props
}) => {
  const context = useContext(CommandContext);
  const id = React.useId();
  const textValue = value || (typeof children === 'string' ? children : String(id));

  useEffect(() => {
    context?.registerItem(id, textValue);
    return () => context?.unregisterItem(id);
  }, [id, textValue]);

  const isVisible = context ? context.isItemVisible(textValue) : true;
  if (!isVisible) return null;

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      onClick={() => !disabled && onSelect?.()}
      onKeyDown={(e) => {
        if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onSelect?.();
        }
      }}
      className={cn(
        'flex items-center justify-between px-2.5 py-2 rounded-xl text-xs sm:text-sm transition-colors cursor-pointer select-none',
        disabled
          ? 'opacity-40 cursor-not-allowed'
          : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 active:bg-blue-50 dark:active:bg-blue-950/40',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Command.Shortcut
export const CommandShortcut: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <span
      className={cn(
        'ml-auto text-[10px] sm:text-xs tracking-widest text-slate-400 dark:text-slate-500 font-mono inline-flex items-center gap-1',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

// Command.Separator
export const CommandSeparator: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn('h-px bg-slate-200 dark:bg-slate-800 my-1 mx-2', className)}
      {...props}
    />
  );
};

// Command.Dialog (Modal Dialog with Backdrop and Cmd+K listener)
export interface CommandDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export const CommandDialog: React.FC<CommandDialogProps> = ({
  open,
  onOpenChange,
  children,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === 'Escape' && open) {
        onOpenChange(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="fixed inset-0"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-lg z-10 shadow-2xl">
        {children}
      </div>
    </div>
  );
};

// Main Command Namespace Compound
export interface CommandComponent extends React.FC<CommandProps> {
  Input: typeof CommandInput;
  List: typeof CommandList;
  Empty: typeof CommandEmpty;
  Group: typeof CommandGroup;
  Item: typeof CommandItem;
  Shortcut: typeof CommandShortcut;
  Separator: typeof CommandSeparator;
  Dialog: typeof CommandDialog;
}

export const Command = CommandRoot as CommandComponent;
Command.Input = CommandInput;
Command.List = CommandList;
Command.Empty = CommandEmpty;
Command.Group = CommandGroup;
Command.Item = CommandItem;
Command.Shortcut = CommandShortcut;
Command.Separator = CommandSeparator;
Command.Dialog = CommandDialog;
