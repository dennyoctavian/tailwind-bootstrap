import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import { Star } from 'lucide-react';

export interface RateProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  count?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (val: number) => void;
  disabled?: boolean;
  allowHalf?: boolean;
  tooltips?: string[];
  character?: React.ReactNode;
}

export const Rate: React.FC<RateProps> = ({
  count = 5,
  value,
  defaultValue = 0,
  onChange,
  disabled = false,
  tooltips,
  character,
  className,
  ...props
}) => {
  const [internalVal, setInternalVal] = useState(defaultValue);
  const [hoverVal, setHoverVal] = useState<number | null>(null);

  const controlled = value !== undefined;
  const currentVal = hoverVal !== null ? hoverVal : controlled ? value : internalVal;

  const handleClick = (starIndex: number) => {
    if (disabled) return;
    if (!controlled) setInternalVal(starIndex);
    if (onChange) onChange(starIndex);
  };

  const stars = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <div
      role="radiogroup"
      aria-label="Rating"
      className={cn('inline-flex items-center gap-1.5 select-none', className)}
      onMouseLeave={() => !disabled && setHoverVal(null)}
      {...props}
    >
      {stars.map((star) => {
        const isActive = star <= currentVal;

        return (
          <button
            key={star}
            type="button"
            disabled={disabled}
            onClick={() => handleClick(star)}
            onMouseEnter={() => !disabled && setHoverVal(star)}
            className={cn(
              'p-0.5 rounded transition-transform duration-100 focus:outline-none',
              !disabled && 'hover:scale-125 cursor-pointer',
              disabled && 'cursor-default'
            )}
            title={tooltips && tooltips[star - 1] ? tooltips[star - 1] : `${star} Bintang`}
          >
            {character ? (
              <span className={cn('text-xl', isActive ? 'text-amber-400' : 'text-slate-300 dark:text-slate-700')}>
                {character}
              </span>
            ) : (
              <Star
                className={cn(
                  'w-5 h-5 transition-colors duration-150',
                  isActive
                    ? 'fill-amber-400 text-amber-400 filter drop-shadow-[0_1px_4px_rgba(251,191,36,0.5)]'
                    : 'fill-transparent text-slate-300 dark:text-slate-600'
                )}
              />
            )}
          </button>
        );
      })}

      {tooltips && currentVal > 0 && (
        <span className="ml-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
          {tooltips[currentVal - 1]}
        </span>
      )}
    </div>
  );
};
