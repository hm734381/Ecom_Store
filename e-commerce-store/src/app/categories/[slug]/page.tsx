import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  getCategoryBySlug, 
  getProductsByCategory, 
  categories 
} from '../../../lib/mockData';
import ProductCard from '../../../components/product/ProductCard';
import Button from '../../../components/common/Button';
import ImagePlaceholder from '../../../components/common/ImagePlaceholder';

export default function CategoryPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const category = getCategoryBySlug(params.slug);
  
  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Category Not Found</h1>
          <p className="mt-4 text-lg text-gray-500">
            The category you are looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6">
            <Link href="/categories">
              <Button variant="primary">View All Categories</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  const products = getProductsByCategory(category.id);
  const relatedCategories = categories.filter(cat => 
    cat.id !== category.id
  ).slice(0, 3);
  
  return (
    <div className="bg-white">
      {/* Category hero */}
      <div className="relative">
        <div className="h-64 sm:h-80 w-full">
          {category.image ? (
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <ImagePlaceholder 
              title={category.name}
              bgColor="bg-gray-200"
            />
          )}
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
                {category.name}
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-white">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Products grid */}
        {products.length > 0 ? (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Products ({products.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium text-gray-900">
              No products found in this category
            </h2>
            <p className="mt-2 text-gray-500">
              Check back later or browse other categories.
            </p>
          </div>
        )}
        
        {/* Related categories */}
        {relatedCategories.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedCategories.map((relatedCategory) => (
                <Link 
                  key={relatedCategory.id}
                  href={`/categories/${relatedCategory.slug}`}
                  className="block group"
                >
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    {relatedCategory.image ? (
                      <Image
                        src={relatedCategory.image}
                        alt={relatedCategory.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    ) : (
                      <ImagePlaceholder 
                        title={relatedCategory.name}
                        bgColor="bg-gray-200"
                      />
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-xl font-bold text-white">
                        {relatedCategory.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 