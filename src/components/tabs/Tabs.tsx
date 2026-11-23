import React, { useState } from 'react';
import { cn } from '../../utils/cn';

export interface TabProps {
  eventKey: string;
  title: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  children: React.ReactNode;
}

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  defaultActiveKey?: string;
  activeKey?: string;
  onSelect?: (key: string) => void;
  variant?: 'tabs' | 'pills' | 'underline';
  fill?: boolean;
  justified?: boolean;
}

export interface TabsComponent extends React.FC<TabsProps> {
  Tab: typeof Tab;
}

export const Tabs: TabsComponent = ({
  defaultActiveKey,
  activeKey: controlledActiveKey,
  onSelect,
  variant = 'tabs',
  fill = false,
  justified = false,
  className,
  children,
  ...props
}) => {
  const tabs = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<TabProps> => React.isValidElement(child)
  );

  const [uncontrolledKey, setUncontrolledKey] = useState<string>(() => {
    return defaultActiveKey || tabs[0]?.props.eventKey || '';
  });

  const currentKey = controlledActiveKey !== undefined ? controlledActiveKey : uncontrolledKey;

  const handleSelect = (key: string, disabled?: boolean) => {
    if (disabled) return;
    if (controlledActiveKey === undefined) {
      setUncontrolledKey(key);
    }
    if (onSelect) onSelect(key);
  };

  const activeTabContent = tabs.find((t) => t.props.eventKey === currentKey)?.props.children;

  const getVariantNavClasses = () => {
    switch (variant) {
      case 'pills':
        return 'gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl';
      case 'underline':
        return 'gap-6 border-b border-slate-200 dark:border-slate-700';
      case 'tabs':
      default:
        return 'gap-2 border-b border-slate-200 dark:border-slate-700';
    }
  };

  const getTabButtonClass = (key: string, disabled?: boolean) => {
    const isActive = currentKey === key;

    if (disabled) {
      return 'opacity-40 cursor-not-allowed pointer-events-none text-slate-400';
    }

    switch (variant) {
      case 'pills':
        return isActive
          ? 'bg-blue-600 text-white shadow-sm font-semibold'
          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50';
      case 'underline':
        return isActive
          ? 'text-blue-600 dark:text-blue-400 font-bold border-b-2 border-blue-600 dark:border-blue-400 pb-3 -mb-px'
          : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white pb-3 -mb-px border-b-2 border-transparent';
      case 'tabs':
      default:
        return isActive
          ? 'bg-white dark:bg-slate-850 text-blue-600 dark:text-blue-400 font-semibold border-t border-x border-slate-200 dark:border-slate-700 rounded-t-lg -mb-px'
          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-t border-x border-transparent rounded-t-lg';
    }
  };

  return (
    <div className={cn('w-full flex flex-col', className)} {...props}>
      {/* Scrollable nav header for mobile responsiveness */}
      <div className="overflow-x-auto custom-scrollbar pb-1">
        <div
          role="tablist"
          className={cn(
            'flex items-center min-w-full w-max sm:w-auto',
            getVariantNavClasses(),
            fill && '[&>*]:flex-auto',
            justified && '[&>*]:flex-1'
          )}
        >
          {tabs.map((tab) => {
            const { eventKey, title, icon, disabled } = tab.props;
            return (
              <button
                key={eventKey}
                type="button"
                role="tab"
                aria-selected={currentKey === eventKey}
                disabled={disabled}
                onClick={() => handleSelect(eventKey, disabled)}
                className={cn(
                  'px-4 py-2 text-sm font-medium transition-all duration-150 inline-flex items-center justify-center gap-2 whitespace-nowrap select-none rounded-lg focus:outline-none',
                  getTabButtonClass(eventKey, disabled)
                )}
              >
                {icon && <span className="w-4 h-4 shrink-0">{icon}</span>}
                {title}
              </button>
            );
          })}
        </div>
      </div>

      <div role="tabpanel" className="py-4 animate-in fade-in-50 duration-200">
        {activeTabContent}
      </div>
    </div>
  );
};

Tabs.Tab = Tab;
