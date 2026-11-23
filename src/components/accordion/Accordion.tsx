import React, { useState, createContext, useContext } from 'react';
import { cn } from '../../utils/cn';
import { ChevronDown } from 'lucide-react';

interface AccordionContextType {
  activeKeys: string[];
  toggleItem: (key: string) => void;
  flush?: boolean;
}

const AccordionContext = createContext<AccordionContextType>({
  activeKeys: [],
  toggleItem: () => {},
  flush: false,
});

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  alwaysOpen?: boolean;
  defaultActiveKey?: string | string[];
  flush?: boolean;
}

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  eventKey: string;
}

const ItemContext = createContext<{ eventKey: string }>({ eventKey: '' });

export const AccordionItem: React.FC<AccordionItemProps> = ({
  eventKey,
  className,
  children,
  ...props
}) => {
  const { flush } = useContext(AccordionContext);

  return (
    <ItemContext.Provider value={{ eventKey }}>
      <div
        className={cn(
          'transition-colors',
          flush ? 'border-b border-slate-200 dark:border-slate-700' : 'border border-slate-200 dark:border-slate-700 rounded-xl mb-2.5 overflow-hidden shadow-sm',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </ItemContext.Provider>
  );
};

export const AccordionHeader: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...props
}) => {
  const { activeKeys, toggleItem } = useContext(AccordionContext);
  const { eventKey } = useContext(ItemContext);
  const isOpen = activeKeys.includes(eventKey);

  return (
    <button
      type="button"
      onClick={() => toggleItem(eventKey)}
      aria-expanded={isOpen}
      className={cn(
        'w-full flex items-center justify-between px-5 py-4 text-left font-medium text-slate-800 dark:text-slate-100 transition-colors focus:outline-none focus:bg-slate-50 dark:focus:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60',
        isOpen && 'bg-blue-50/50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 font-semibold',
        className
      )}
      {...props}
    >
      <span className="flex-1 pr-3">{children}</span>
      <ChevronDown
        className={cn(
          'w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0',
          isOpen && 'transform rotate-180 text-blue-600 dark:text-blue-400'
        )}
      />
    </button>
  );
};

export const AccordionBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  const { activeKeys } = useContext(AccordionContext);
  const { eventKey } = useContext(ItemContext);
  const isOpen = activeKeys.includes(eventKey);

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        'px-5 py-4 border-t border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-850 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed animate-in fade-in-50 duration-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export interface AccordionComponent extends React.FC<AccordionProps> {
  Item: typeof AccordionItem;
  Header: typeof AccordionHeader;
  Body: typeof AccordionBody;
}

export const Accordion: AccordionComponent = ({
  alwaysOpen = false,
  defaultActiveKey,
  flush = false,
  className,
  children,
  ...props
}) => {
  const [activeKeys, setActiveKeys] = useState<string[]>(() => {
    if (!defaultActiveKey) return [];
    return Array.isArray(defaultActiveKey) ? defaultActiveKey : [defaultActiveKey];
  });

  const toggleItem = (key: string) => {
    if (alwaysOpen) {
      setActiveKeys((prev) =>
        prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
      );
    } else {
      setActiveKeys((prev) => (prev.includes(key) ? [] : [key]));
    }
  };

  return (
    <AccordionContext.Provider value={{ activeKeys, toggleItem, flush }}>
      <div className={cn('w-full', className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;
