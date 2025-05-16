import React from 'react';

interface ImagePlaceholderProps {
  title?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  bgColor?: string;
  textColor?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  title,
  width = '100%',
  height = '100%',
  className = '',
  bgColor = 'bg-gray-200',
  textColor = 'text-gray-500',
}) => {
  return (
    <div 
      className={`flex items-center justify-center ${bgColor} ${className}`}
      style={{ width, height }}
    >
      <div className={`text-center ${textColor}`}>
        {title ? (
          <span className="font-medium">{title}</span>
        ) : (
          <svg 
            className="w-12 h-12 opacity-50" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default ImagePlaceholder; 