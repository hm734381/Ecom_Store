import { Product, Category } from '../types/product';

// Mock Categories
export const categories: Category[] = [
  {
    id: 'cat-1',
    name: 'Electronics',
    description: 'Latest gadgets and electronic devices',
    image: '/vercel.svg',
    slug: 'electronics',
    featured: true,
    productCount: 15,
  },
  {
    id: 'cat-2',
    name: 'Clothing',
    description: 'Fashion and apparel for all seasons',
    image: '/vercel.svg',
    slug: 'clothing',
    featured: true,
    productCount: 28,
  },
  {
    id: 'cat-3',
    name: 'Home & Kitchen',
    description: 'Everything for your home',
    image: '/vercel.svg',
    slug: 'home-kitchen',
    featured: true,
    productCount: 22,
  },
  {
    id: 'cat-4',
    name: 'Books',
    description: 'Books for all ages and interests',
    image: '/vercel.svg',
    slug: 'books',
    featured: false,
    productCount: 34,
  },
  {
    id: 'cat-5',
    name: 'Sports & Outdoors',
    description: 'Gear up for your active lifestyle',
    image: '/vercel.svg',
    slug: 'sports-outdoors',
    featured: true,
    productCount: 19,
  },
  {
    id: 'cat-6',
    name: 'Toys & Games',
    description: 'Fun for the whole family',
    image: '/vercel.svg',
    slug: 'toys-games',
    featured: false,
    productCount: 12,
  },
];

// Mock Products
export const products: Product[] = [
  {
    id: 'prod-1',
    name: 'Wireless Bluetooth Earbuds',
    description: 'Premium sound quality with noise cancellation and long battery life.',
    price: 79.99,
    compareAtPrice: 99.99,
    images: ['/vercel.svg', '/next.svg'],
    category: 'Electronics',
    categoryId: 'cat-1',
    tags: ['wireless', 'audio', 'bluetooth'],
    colors: ['black', 'white', 'blue'],
    rating: 4.5,
    reviewCount: 128,
    stock: 45,
    isNew: true,
    isFeatured: true,
    isOnSale: true,
    slug: 'wireless-bluetooth-earbuds',
    createdAt: '2023-06-15T10:00:00Z',
    updatedAt: '2023-06-15T10:00:00Z',
  },
  {
    id: 'prod-2',
    name: 'Smart Fitness Tracker',
    description: 'Track your activity, sleep, and heart rate with this water-resistant fitness band.',
    price: 49.99,
    images: ['/vercel.svg', '/next.svg'],
    category: 'Electronics',
    categoryId: 'cat-1',
    tags: ['fitness', 'wearable', 'health'],
    colors: ['black', 'red', 'green'],
    rating: 4.2,
    reviewCount: 86,
    stock: 32,
    isFeatured: true,
    slug: 'smart-fitness-tracker',
    createdAt: '2023-05-10T10:00:00Z',
    updatedAt: '2023-05-10T10:00:00Z',
  },
  {
    id: 'prod-3',
    name: 'Men\'s Casual Shirt',
    description: 'Comfortable cotton casual shirt, perfect for everyday wear.',
    price: 34.99,
    compareAtPrice: 45.99,
    images: ['/vercel.svg', '/next.svg'],
    category: 'Clothing',
    categoryId: 'cat-2',
    tags: ['men', 'casual', 'cotton'],
    colors: ['blue', 'gray', 'white'],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.0,
    reviewCount: 62,
    stock: 75,
    isOnSale: true,
    slug: 'mens-casual-shirt',
    createdAt: '2023-04-12T10:00:00Z',
    updatedAt: '2023-04-12T10:00:00Z',
  },
  {
    id: 'prod-4',
    name: 'Women\'s Running Shoes',
    description: 'Lightweight and comfortable running shoes with excellent support.',
    price: 89.99,
    images: ['/vercel.svg', '/next.svg'],
    category: 'Clothing',
    categoryId: 'cat-2',
    tags: ['women', 'running', 'sports'],
    colors: ['pink', 'black', 'blue'],
    sizes: ['6', '7', '8', '9', '10'],
    rating: 4.8,
    reviewCount: 153,
    stock: 23,
    isNew: true,
    isFeatured: true,
    slug: 'womens-running-shoes',
    createdAt: '2023-07-01T10:00:00Z',
    updatedAt: '2023-07-01T10:00:00Z',
  },
  {
    id: 'prod-5',
    name: 'Non-Stick Cookware Set',
    description: '10-piece non-stick cookware set, perfect for any kitchen.',
    price: 129.99,
    compareAtPrice: 159.99,
    images: ['/vercel.svg', '/next.svg'],
    category: 'Home & Kitchen',
    categoryId: 'cat-3',
    tags: ['kitchen', 'cooking', 'non-stick'],
    rating: 4.6,
    reviewCount: 97,
    stock: 15,
    isOnSale: true,
    slug: 'non-stick-cookware-set',
    createdAt: '2023-03-25T10:00:00Z',
    updatedAt: '2023-03-25T10:00:00Z',
  },
  {
    id: 'prod-6',
    name: 'Bestselling Novel',
    description: 'The latest bestselling novel from a renowned author.',
    price: 14.99,
    images: ['/vercel.svg', '/next.svg'],
    category: 'Books',
    categoryId: 'cat-4',
    tags: ['fiction', 'bestseller', 'hardcover'],
    rating: 4.9,
    reviewCount: 215,
    stock: 50,
    isFeatured: true,
    slug: 'bestselling-novel',
    createdAt: '2023-05-05T10:00:00Z',
    updatedAt: '2023-05-05T10:00:00Z',
  },
  {
    id: 'prod-7',
    name: 'Yoga Mat',
    description: 'Extra thick, non-slip yoga mat for comfortable practice.',
    price: 29.99,
    images: ['/vercel.svg', '/next.svg'],
    category: 'Sports & Outdoors',
    categoryId: 'cat-5',
    tags: ['yoga', 'fitness', 'exercise'],
    colors: ['purple', 'blue', 'green'],
    rating: 4.4,
    reviewCount: 74,
    stock: 28,
    isNew: true,
    slug: 'yoga-mat',
    createdAt: '2023-06-20T10:00:00Z',
    updatedAt: '2023-06-20T10:00:00Z',
  },
  {
    id: 'prod-8',
    name: 'Board Game Set',
    description: 'Family board game set with 5 classic games.',
    price: 24.99,
    compareAtPrice: 34.99,
    images: ['/vercel.svg', '/next.svg'],
    category: 'Toys & Games',
    categoryId: 'cat-6',
    tags: ['games', 'family', 'board games'],
    rating: 4.7,
    reviewCount: 112,
    stock: 40,
    isOnSale: true,
    slug: 'board-game-set',
    createdAt: '2023-02-18T10:00:00Z',
    updatedAt: '2023-02-18T10:00:00Z',
  },
];

// Featured Products
export const featuredProducts = products.filter(product => product.isFeatured);

// New Arrivals
export const newArrivals = products.filter(product => product.isNew);

// On Sale Products
export const onSaleProducts = products.filter(product => product.isOnSale);

// Featured Categories
export const featuredCategories = categories.filter(category => category.featured);

// Get Products by Category
export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.categoryId === categoryId);
};

// Get Product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// Get Product by Slug
export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

// Get Category by ID
export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};

// Get Category by Slug
export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
}; 