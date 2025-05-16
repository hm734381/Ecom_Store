import React from 'react';
import { products, categories } from '../../lib/mockData';
import ProductCard from '../../components/product/ProductCard';
import Checkbox from '../../components/common/Checkbox';
import Select from '../../components/common/Select';
import { SelectOption } from '../../components/common/Select';

export default function ProductsPage() {
  // In a real app, we would use server components or client-side state
  // to handle filtering and sorting
  
  const sortOptions: SelectOption[] = [
    { value: 'newest', label: 'Newest' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'popularity', label: 'Most Popular' },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Products</h1>
        
        <div className="pt-6 pb-12">
          <div className="lg:grid lg:grid-cols-4 lg:gap-x-8">
            {/* Filters */}
            <div className="hidden lg:block">
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-lg font-medium text-gray-900">Categories</h2>
                <div className="mt-4 space-y-2">
                  {categories.map((category) => (
                    <Checkbox 
                      key={category.id}
                      label={`${category.name} (${category.productCount})`}
                      id={`category-${category.id}`}
                    />
                  ))}
                </div>
              </div>

              <div className="border-b border-gray-200 py-6">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <div className="mt-4 space-y-4">
                  <div>
                    <Checkbox 
                      label="On Sale"
                      id="filter-on-sale"
                    />
                  </div>
                  <div>
                    <Checkbox 
                      label="New Arrivals"
                      id="filter-new-arrivals"
                    />
                  </div>
                  <div>
                    <Checkbox 
                      label="In Stock"
                      id="filter-in-stock"
                    />
                  </div>
                </div>
              </div>

              <div className="py-6">
                <h2 className="text-lg font-medium text-gray-900">Price Range</h2>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <input
                      type="range"
                      className="w-full"
                      min="0"
                      max="1000"
                      step="10"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">$0</div>
                    <div className="text-sm text-gray-500">$1000+</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product grid */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center">
                  <p className="text-sm text-gray-500">
                    Showing <span className="font-medium">{products.length}</span> products
                  </p>
                </div>
                <div className="w-48">
                  <Select
                    options={sortOptions}
                    label="Sort by"
                    defaultValue="newest"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 