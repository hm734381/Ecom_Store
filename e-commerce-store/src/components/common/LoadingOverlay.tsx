import React from 'react';
import Loading from './Loading';

interface LoadingOverlayProps {
  isLoading: boolean;
  children: React.ReactNode;
  text?: string;
  variant?: 'spinner' | 'dots' | 'pulse';
  className?: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isLoading,
  children,
  text,
  variant = 'spinner',
  className = '',
}) => {
  return (
    <div className={`relative ${className}`}>
      {children}
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 z-10">
          <Loading variant={variant} text={text} />
        </div>
      )}
    </div>
  );
};

export default LoadingOverlay; 