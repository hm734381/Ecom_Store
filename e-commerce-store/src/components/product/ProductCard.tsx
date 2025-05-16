import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../../types/product';
import Button from '../common/Button';
import ImagePlaceholder from '../common/ImagePlaceholder';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'compact' | 'horizontal';
  showAddToCart?: boolean;
  onAddToCart?: (product: Product) => void;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  variant = 'default',
  showAddToCart = true,
  onAddToCart,
  className = '',
}) => {
  const {
    id,
    name,
    price,
    compareAtPrice,
    images,
    rating,
    reviewCount,
    isNew,
    isOnSale,
    slug,
  } = product;

  const discount = compareAtPrice ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100) : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  if (variant === 'compact') {
    return (
      <div className={`group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow ${className}`}>
        <Link href={`/products/${slug}`} className="block">
          <div className="relative aspect-square w-full overflow-hidden">
            {images[0] ? (
              <Image
                src={images[0]}
                alt={name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="absolute inset-0">
                <ImagePlaceholder title={name} />
              </div>
            )}
            {isOnSale && (
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                {discount}% OFF
              </div>
            )}
            {isNew && (
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </div>
            )}
          </div>
          <div className="p-3">
            <h3 className="text-sm font-medium text-gray-900 truncate">{name}</h3>
            <div className="mt-1 flex items-center">
              {compareAtPrice ? (
                <>
                  <span className="text-sm font-medium text-gray-900">${price.toFixed(2)}</span>
                  <span className="ml-1 text-xs text-gray-500 line-through">${compareAtPrice.toFixed(2)}</span>
                </>
              ) : (
                <span className="text-sm font-medium text-gray-900">${price.toFixed(2)}</span>
              )}
            </div>
          </div>
        </Link>
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow ${className}`}>
        <Link href={`/products/${slug}`} className="block flex-shrink-0 relative w-24 h-24 sm:w-32 sm:h-32">
          {images[0] ? (
            <Image
              src={images[0]}
              alt={name}
              fill
              sizes="(max-width: 768px) 100px, 128px"
              className="object-cover object-center"
            />
          ) : (
            <div className="absolute inset-0">
              <ImagePlaceholder title={name} />
            </div>
          )}
          {isOnSale && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {discount}% OFF
            </div>
          )}
        </Link>
        <div className="flex-1 p-3">
          <Link href={`/products/${slug}`} className="block">
            <h3 className="text-sm font-medium text-gray-900">{name}</h3>
            <div className="mt-1 flex items-center">
              {compareAtPrice ? (
                <>
                  <span className="text-sm font-medium text-gray-900">${price.toFixed(2)}</span>
                  <span className="ml-1 text-xs text-gray-500 line-through">${compareAtPrice.toFixed(2)}</span>
                </>
              ) : (
                <span className="text-sm font-medium text-gray-900">${price.toFixed(2)}</span>
              )}
            </div>
            <div className="mt-1 flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`h-3 w-3 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.84-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-1 text-xs text-gray-500">({reviewCount})</span>
            </div>
          </Link>
          {showAddToCart && (
            <div className="mt-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleAddToCart}
                className="w-full text-xs"
              >
                Add to Cart
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow ${className}`}>
      <Link href={`/products/${slug}`} className="block">
        <div className="relative aspect-square w-full overflow-hidden">
          {images[0] ? (
            <Image
              src={images[0]}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">No image</span>
            </div>
          )}
          {isOnSale && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {discount}% OFF
            </div>
          )}
          {isNew && (
            <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-900 truncate">{name}</h3>
          <div className="mt-1 flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.84-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-1 text-xs text-gray-500">({reviewCount})</span>
          </div>
          <div className="mt-1">
            {compareAtPrice ? (
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-900">${price.toFixed(2)}</span>
                <span className="ml-1 text-xs text-gray-500 line-through">${compareAtPrice.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-sm font-medium text-gray-900">${price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </Link>
      {showAddToCart && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform">
          <Button 
            variant="primary" 
            size="sm"
            onClick={handleAddToCart}
            className="w-full"
          >
            Add to Cart
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductCard; 