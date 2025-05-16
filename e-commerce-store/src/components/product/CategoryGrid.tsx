import React from 'react';
import { Category } from '../../types/product';
import CategoryCard from './CategoryCard';

interface CategoryGridProps {
  title: string;
  categories: Category[];
  columns?: 2 | 3 | 4 | 6;
  variant?: 'default' | 'compact';
  className?: string;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({
  title,
  categories,
  columns = 3,
  variant = 'default',
  className = '',
}) => {
  const columnClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    6: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6',
  };
  
  return (
    <div className={className}>
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      )}
      
      <div className={`grid ${columnClasses[columns]} gap-4`}>
        {categories.map((category) => (
          <CategoryCard 
            key={category.id} 
            category={category} 
            variant={variant}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid; 