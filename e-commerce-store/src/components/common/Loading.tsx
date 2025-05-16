import React from 'react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'dots' | 'pulse';
  fullScreen?: boolean;
  text?: string;
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  variant = 'spinner',
  fullScreen = false,
  text,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  const renderSpinner = () => (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        className="animate-spin text-blue-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );

  const renderDots = () => (
    <div className={`flex space-x-1 ${className}`}>
      <div
        className={`${size === 'sm' ? 'h-1.5 w-1.5' : size === 'md' ? 'h-2.5 w-2.5' : 'h-3.5 w-3.5'} 
          bg-blue-600 rounded-full animate-bounce`}
        style={{ animationDelay: '0ms' }}
      ></div>
      <div
        className={`${size === 'sm' ? 'h-1.5 w-1.5' : size === 'md' ? 'h-2.5 w-2.5' : 'h-3.5 w-3.5'} 
          bg-blue-600 rounded-full animate-bounce`}
        style={{ animationDelay: '150ms' }}
      ></div>
      <div
        className={`${size === 'sm' ? 'h-1.5 w-1.5' : size === 'md' ? 'h-2.5 w-2.5' : 'h-3.5 w-3.5'} 
          bg-blue-600 rounded-full animate-bounce`}
        style={{ animationDelay: '300ms' }}
      ></div>
    </div>
  );

  const renderPulse = () => (
    <div className={`${sizeClasses[size]} ${className} animate-pulse bg-blue-400 rounded-full`}></div>
  );

  const renderLoader = () => {
    switch (variant) {
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'spinner':
      default:
        return renderSpinner();
    }
  };

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-80 z-50">
        {renderLoader()}
        {text && <p className="mt-4 text-gray-700">{text}</p>}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {renderLoader()}
      {text && <p className="mt-2 text-sm text-gray-600">{text}</p>}
    </div>
  );
};

export default Loading; 