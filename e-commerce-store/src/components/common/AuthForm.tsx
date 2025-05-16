import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../lib/hooks/useAuth';
import { LoginCredentials, RegisterCredentials } from '../../types/auth';

interface AuthFormProps {
  type: 'login' | 'register';
}

export default function AuthForm({ type }: AuthFormProps) {
  const router = useRouter();
  const { login, register, state } = useAuth();
  const [formData, setFormData] = useState<LoginCredentials | RegisterCredentials>({
    email: '',
    password: '',
    ...(type === 'register' ? { name: '', confirmPassword: '' } : {})
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let success = false;

      if (type === 'login') {
        success = await login(formData as LoginCredentials);
      } else {
        success = await register(formData as RegisterCredentials);
      }

      if (success) {
        router.push('/'); // Redirect to home page on success
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
      <div className="text-center">
        <h1 className="text-2xl font-bold">
          {type === 'login' ? 'Sign In' : 'Create Account'}
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          {type === 'login' 
            ? "Enter your credentials to access your account" 
            : "Fill out the form to create your account"}
        </p>
      </div>

      {state.error && (
        <div className="p-3 text-sm text-white bg-red-500 rounded-md">
          {state.error}
        </div>
      )}

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        {type === 'register' && (
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={(formData as RegisterCredentials).name || ''}
              onChange={handleChange}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="John Doe"
            />
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="••••••••"
          />
        </div>

        {type === 'register' && (
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={(formData as RegisterCredentials).confirmPassword || ''}
              onChange={handleChange}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
            />
          </div>
        )}

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70"
          >
            {isSubmitting ? (
              <span>Loading...</span>
            ) : (
              <span>{type === 'login' ? 'Sign In' : 'Create Account'}</span>
            )}
          </button>
        </div>
      </form>

      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          {type === 'login' ? "Don't have an account?" : "Already have an account?"}
          {' '}
          <Link 
            href={type === 'login' ? '/register' : '/login'} 
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            {type === 'login' ? 'Sign up' : 'Sign in'}
          </Link>
        </p>
      </div>
    </div>
  );
} 