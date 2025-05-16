export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface Address {
  id?: string;
  fullName: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault?: boolean;
}

export interface UserProfile extends User {
  addresses: Address[];
  phone?: string;
  avatarUrl?: string;
} 