export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  category: string;
  categoryId: string;
  tags: string[];
  colors?: string[];
  sizes?: string[];
  rating: number;
  reviewCount: number;
  stock: number;
  isNew?: boolean;
  isFeatured?: boolean;
  isOnSale?: boolean;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
  parentId?: string;
  featured?: boolean;
  productCount: number;
}

export interface ProductFilter {
  categories?: string[];
  priceRange?: {
    min: number;
    max: number;
  };
  colors?: string[];
  sizes?: string[];
  tags?: string[];
  onSale?: boolean;
  inStock?: boolean;
  sortBy?: 'price-asc' | 'price-desc' | 'newest' | 'rating' | 'popularity';
  searchQuery?: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  currentPage: number;
  totalPages: number;
}

export interface CartItem extends Pick<Product, 'id' | 'name' | 'price' | 'images'> {
  quantity: number;
  size?: string;
  color?: string;
} 