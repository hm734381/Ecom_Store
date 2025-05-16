import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Category } from '../../types/product';
import ImagePlaceholder from '../common/ImagePlaceholder';

interface CategoryCardProps {
  category: Category;
  variant?: 'default' | 'compact';
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  variant = 'default',
  className = '',
}) => {
  const { name, description, image, productCount, slug } = category;

  if (variant === 'compact') {
    return (
      <Link
        href={`/categories/${slug}`}
        className={`block group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${className}`}
      >
        <div className="relative aspect-square w-full overflow-hidden">
          {image ? (
            <Image
              src={image}
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
        </div>
        <div className="p-3 text-center">
          <h3 className="text-sm font-medium text-gray-900">{name}</h3>
        </div>
      </Link>
    );
  }

  // Default variant
  return (
    <Link
      href={`/categories/${slug}`}
      className={`block group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow ${className}`}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        {image ? (
          <Image
            src={image}
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-white/80 mt-1">{productCount} products</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard; 