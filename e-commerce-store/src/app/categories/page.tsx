import React from 'react';
import { categories } from '../../lib/mockData';
import CategoryCard from '../../components/product/CategoryCard';

export default function CategoriesPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Browse Categories
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Explore our wide range of products across various categories. 
            Whatever you're looking for, we've got you covered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              variant="default"
            />
          ))}
        </div>
      </div>
    </div>
  );
} 