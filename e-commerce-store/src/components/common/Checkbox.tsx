import React, { forwardRef } from 'react';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  helperText?: string;
  error?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, helperText, error, className = '', id, ...props }, ref) => {
    const checkboxId = id || label?.toLowerCase().replace(/\s+/g, '-');
    
    return (
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            className={`
              h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500
              ${error ? 'border-red-300' : ''}
              ${className}
            `}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error 
                ? `${checkboxId}-error` 
                : helperText 
                  ? `${checkboxId}-description` 
                  : undefined
            }
            {...props}
          />
        </div>
        <div className="ml-3 text-sm">
          {label && (
            <label htmlFor={checkboxId} className="font-medium text-gray-700">
              {label}
            </label>
          )}
          
          {error ? (
            <p className="text-red-600" id={`${checkboxId}-error`}>
              {error}
            </p>
          ) : helperText ? (
            <p className="text-gray-500" id={`${checkboxId}-description`}>
              {helperText}
            </p>
          ) : null}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox; 