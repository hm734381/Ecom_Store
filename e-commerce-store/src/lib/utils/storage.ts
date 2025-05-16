// Storage keys
export const STORAGE_KEYS = {
  CART: 'ecommerce_cart',
  USER: 'ecommerce_user',
  WISHLIST: 'ecommerce_wishlist',
  RECENT_SEARCHES: 'ecommerce_searches',
  AUTH_TOKEN: 'ecommerce_token'
};

// Storage utility functions
export const getStorageItem = <T>(key: string): T | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error getting item ${key} from localStorage:`, error);
    return null;
  }
};

export const setStorageItem = <T>(key: string, value: T): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting item ${key} in localStorage:`, error);
  }
};

export const removeStorageItem = (key: string): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing item ${key} from localStorage:`, error);
  }
};

export const clearStorage = (): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.clear();
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
}; 