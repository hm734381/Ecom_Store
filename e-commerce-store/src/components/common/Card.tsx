import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string | React.ReactNode;
  subtitle?: string;
  footer?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated' | 'interactive';
  fullWidth?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  footer,
  className = '',
  variant = 'default',
  fullWidth = false,
  onClick,
}) => {
  const baseClasses = 'rounded-lg overflow-hidden';
  
  const variantClasses = {
    default: 'bg-white border border-gray-200',
    outlined: 'bg-white border border-gray-300',
    elevated: 'bg-white shadow-md',
    interactive: 'bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer'
  };

  return (
    <div 
      className={`
        ${baseClasses} 
        ${variantClasses[variant]} 
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Card header */}
      {(title || subtitle) && (
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          {title && (
            typeof title === 'string' 
              ? <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
              : title
          )}
          {subtitle && (
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{subtitle}</p>
          )}
        </div>
      )}
      
      {/* Card content */}
      <div className="px-4 py-5 sm:p-6">
        {children}
      </div>
      
      {/* Card footer */}
      {footer && (
        <div className="px-4 py-4 sm:px-6 bg-gray-50 border-t border-gray-200">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card; 