import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  User,
  AuthState,
  LoginCredentials,
  RegisterCredentials
} from '../../types/auth';
import { STORAGE_KEYS, getStorageItem, setStorageItem, removeStorageItem } from '../utils/storage';

// Mock user data for development
const MOCK_USERS = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    role: 'user' as const
  },
  {
    id: '2',
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin' as const
  }
];

// Initial state
const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
  error: null
};

// Create context
const AuthContext = createContext<{
  state: AuthState;
  login: (credentials: LoginCredentials) => Promise<boolean>;
  register: (credentials: RegisterCredentials) => Promise<boolean>;
  logout: () => void;
}>({
  state: initialState,
  login: async () => false,
  register: async () => false,
  logout: () => {}
});

// Auth provider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AuthState>(initialState);

  // Check if user is already logged in
  useEffect(() => {
    const initializeAuth = () => {
      const token = getStorageItem<string>(STORAGE_KEYS.AUTH_TOKEN);
      const user = getStorageItem<User>(STORAGE_KEYS.USER);

      if (token && user) {
        setState({
          user,
          token,
          isAuthenticated: true,
          isLoading: false,
          error: null
        });
      } else {
        setState(prevState => ({ ...prevState, isLoading: false }));
      }
    };

    initializeAuth();
  }, []);

  // Login
  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    try {
      // In real app, this would be an API call
      const user = MOCK_USERS.find(
        user => 
          user.email === credentials.email && 
          user.password === credentials.password
      );

      if (!user) {
        setState(prevState => ({
          ...prevState,
          error: 'Invalid email or password',
          isLoading: false
        }));
        return false;
      }

      // Generate a mock token
      const token = `mock-token-${user.id}-${Date.now()}`;
      
      // Save to state and localStorage
      const userData: User = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      };

      setState({
        user: userData,
        token,
        isAuthenticated: true,
        isLoading: false,
        error: null
      });

      setStorageItem(STORAGE_KEYS.AUTH_TOKEN, token);
      setStorageItem(STORAGE_KEYS.USER, userData);

      return true;
    } catch (error) {
      setState(prevState => ({
        ...prevState,
        error: 'Login failed',
        isLoading: false
      }));
      return false;
    }
  };

  // Register
  const register = async (credentials: RegisterCredentials): Promise<boolean> => {
    try {
      // Validate password match
      if (credentials.password !== credentials.confirmPassword) {
        setState(prevState => ({
          ...prevState,
          error: 'Passwords do not match',
          isLoading: false
        }));
        return false;
      }

      // Check if email already exists
      const existingUser = MOCK_USERS.find(user => user.email === credentials.email);
      if (existingUser) {
        setState(prevState => ({
          ...prevState,
          error: 'Email already in use',
          isLoading: false
        }));
        return false;
      }

      // In a real app, this would create a new user in the database
      // For mock purposes, we'll just simulate a successful registration
      const newUser: User = {
        id: `user-${Date.now()}`,
        name: credentials.name,
        email: credentials.email,
        role: 'user'
      };

      const token = `mock-token-${newUser.id}-${Date.now()}`;

      setState({
        user: newUser,
        token,
        isAuthenticated: true,
        isLoading: false,
        error: null
      });

      setStorageItem(STORAGE_KEYS.AUTH_TOKEN, token);
      setStorageItem(STORAGE_KEYS.USER, newUser);

      return true;
    } catch (error) {
      setState(prevState => ({
        ...prevState,
        error: 'Registration failed',
        isLoading: false
      }));
      return false;
    }
  };

  // Logout
  const logout = () => {
    setState({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null
    });

    removeStorageItem(STORAGE_KEYS.AUTH_TOKEN);
    removeStorageItem(STORAGE_KEYS.USER);
  };

  return (
    <AuthContext.Provider value={{ state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 