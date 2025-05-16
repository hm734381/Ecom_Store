import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../components/common/Button';
import ProductCarousel from '../components/product/ProductCarousel';
import CategoryGrid from '../components/product/CategoryGrid';
import SpecialOffer from '../components/product/SpecialOffer';
import Newsletter from '../components/common/Newsletter';
import ImagePlaceholder from '../components/common/ImagePlaceholder';
import { featuredProducts, newArrivals, featuredCategories, onSaleProducts } from '../lib/mockData';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gray-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Welcome to</span>
                  <span className="block text-blue-600">E-Store</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Discover amazing products at unbeatable prices. Shop the latest trends and find everything you need in one place.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href="/products">
                      <Button variant="primary" size="lg">
                        Shop Now
                      </Button>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="/categories">
                      <Button variant="outline" size="lg">
                        Explore Categories
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative">
            <ImagePlaceholder 
              title="Hero Image" 
              bgColor="bg-blue-100" 
              textColor="text-blue-800"
            />
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CategoryGrid
          title="Shop by Category"
          categories={featuredCategories}
          columns={3}
          variant="default"
        />
      </div>

      {/* Featured Products */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ProductCarousel
            title="Featured Products"
            products={featuredProducts}
            viewAllUrl="/products?featured=true"
          />
        </div>
      </div>

      {/* Special Offer Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SpecialOffer
          title="Summer Collection 2023"
          description="Get up to 40% off on our latest summer collection. Limited time offer."
          image="/vercel.svg" // Using a placeholder existing image
          buttonText="Shop Now"
          buttonLink="/products?collection=summer"
          discount="UP TO 40% OFF"
          backgroundColor="bg-yellow-100"
        />
      </div>

      {/* New Arrivals */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ProductCarousel
            title="New Arrivals"
            products={newArrivals}
            viewAllUrl="/products?new=true"
          />
        </div>
      </div>

      {/* On Sale Products */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ProductCarousel
            title="On Sale"
            products={onSaleProducts}
            viewAllUrl="/products?onSale=true"
          />
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Newsletter variant="banner" />
        </div>
      </div>
    </div>
  );
} 