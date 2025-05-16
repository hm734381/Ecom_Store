import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';

interface NewsletterProps {
  title?: string;
  description?: string;
  className?: string;
  variant?: 'default' | 'card' | 'banner';
}

const Newsletter: React.FC<NewsletterProps> = ({
  title = 'Subscribe to our newsletter',
  description = 'Stay updated with the latest products, exclusive offers, and news.',
  className = '',
  variant = 'default',
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    // Simulating API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setEmail('');
    }, 1000);
  };

  if (variant === 'card') {
    return (
      <div className={`bg-white rounded-lg shadow p-6 ${className}`}>
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>

        {success ? (
          <div className="bg-green-50 p-4 rounded-md">
            <p className="text-center text-green-700">Thank you for subscribing!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={error}
                fullWidth
              />
            </div>
            <Button type="submit" variant="primary" fullWidth isLoading={isSubmitting}>
              Subscribe
            </Button>
          </form>
        )}
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div className={`bg-blue-600 py-8 px-4 sm:px-6 ${className}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="mt-2 text-blue-100">{description}</p>
          </div>

          {success ? (
            <div className="bg-white bg-opacity-10 p-4 rounded-md max-w-md mx-auto">
              <p className="text-center text-white">Thank you for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={error}
                    fullWidth
                    className="bg-white"
                  />
                </div>
                <Button type="submit" variant="secondary" isLoading={isSubmitting}>
                  Subscribe
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`py-8 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">{description}</p>
      </div>

      {success ? (
        <div className="bg-green-50 p-4 rounded-md max-w-md mx-auto">
          <p className="text-center text-green-700">Thank you for subscribing!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={error}
                fullWidth
              />
            </div>
            <Button type="submit" variant="primary" isLoading={isSubmitting}>
              Subscribe
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Newsletter; 