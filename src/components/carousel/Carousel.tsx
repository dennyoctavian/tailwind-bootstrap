import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../../utils/cn';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CarouselItem {
  id: string | number;
  image: string;
  alt?: string;
  title?: React.ReactNode;
  caption?: React.ReactNode;
}

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
  indicators?: boolean;
  controls?: boolean;
  pauseOnHover?: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = true,
  interval = 4000,
  indicators = true,
  controls = true,
  pauseOnHover = true,
  className,
  ...props
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!autoPlay || (pauseOnHover && isHovered) || items.length <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, isHovered, items.length]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  if (!items || items.length === 0) return null;

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-2xl shadow-lg select-none bg-slate-900 group',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      {...props}
    >
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-500 ease-out h-64 sm:h-80 md:h-96"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={item.id || index} className="w-full flex-shrink-0 relative h-full">
            <img
              src={item.image}
              alt={item.alt || `Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark Gradient Overlay for Caption readability */}
            {(item.title || item.caption) && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                {item.title && (
                  <h3 className="text-lg sm:text-2xl font-bold mb-1 leading-snug">
                    {item.title}
                  </h3>
                )}
                {item.caption && (
                  <p className="text-xs sm:text-sm text-slate-200 max-w-xl line-clamp-2">
                    {item.caption}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Controls (Prev/Next) */}
      {controls && items.length > 1 && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/50 opacity-90 sm:opacity-0 sm:group-hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/50 opacity-90 sm:opacity-0 sm:group-hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </>
      )}

      {/* Indicators (Dots) */}
      {indicators && items.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={cn(
                'h-2 rounded-full transition-all duration-300 focus:outline-none',
                activeIndex === idx
                  ? 'w-7 bg-white'
                  : 'w-2 bg-white/50 hover:bg-white/80'
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};
