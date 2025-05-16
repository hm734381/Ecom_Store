import React, { useState, useRef } from 'react';
import { Product } from '../../types/product';
import ProductCard from './ProductCard';
import Button from '../common/Button';

interface ProductCarouselProps {
  title: string;
  products: Product[];
  viewAllUrl?: string;
  className?: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  title,
  products,
  viewAllUrl,
  className = '',
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = 320; // Approximate card width + gap
    const newScrollPosition = direction === 'left'
      ? Math.max(scrollPosition - scrollAmount, 0)
      : Math.min(scrollPosition + scrollAmount, container.scrollWidth - container.clientWidth);
    
    container.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth',
    });
    
    setScrollPosition(newScrollPosition);
  };
  
  // Check if we can scroll in either direction
  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = scrollContainerRef.current
    ? scrollPosition < scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth
    : false;
  
  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {viewAllUrl && (
          <a href={viewAllUrl} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View All
          </a>
        )}
      </div>
      
      <div className="relative">
        {canScrollLeft && (
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg focus:outline-none"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-[280px]">
              <ProductCard product={product} variant="default" />
            </div>
          ))}
        </div>
        
        {canScrollRight && (
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg focus:outline-none"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCarousel; 