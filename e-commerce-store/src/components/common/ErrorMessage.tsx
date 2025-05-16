import React from 'react';
import Button from './Button';

interface ErrorMessageProps {
  title?: string;
  message: string;
  icon?: React.ReactNode;
  retryText?: string;
  onRetry?: () => void;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  title = 'An error occurred',
  message,
  icon,
  retryText = 'Try Again',
  onRetry,
  className = '',
}) => {
  const defaultIcon = (
    <svg className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  );

  return (
    <div className={`p-4 rounded-md bg-red-50 ${className}`}>
      <div className="flex">
        <div className="flex-shrink-0">{icon || defaultIcon}</div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">{title}</h3>
          <div className="mt-2 text-sm text-red-700">
            <p>{message}</p>
          </div>
          {onRetry && (
            <div className="mt-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={onRetry}
                className="text-red-700 bg-red-50 border-red-200 hover:bg-red-100"
              >
                {retryText}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage; 