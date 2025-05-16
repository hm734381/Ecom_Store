import React from 'react';

interface FormGroupProps {
  id?: string;
  label?: string;
  htmlFor?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

const FormGroup: React.FC<FormGroupProps> = ({
  id,
  label,
  htmlFor,
  helperText,
  error,
  required = false,
  children,
  className = '',
}) => {
  const inputId = htmlFor || id;
  
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label 
          htmlFor={inputId} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}
      
      {children}
      
      {error ? (
        <p className="mt-1 text-sm text-red-600" id={`${inputId}-error`}>
          {error}
        </p>
      ) : helperText ? (
        <p className="mt-1 text-sm text-gray-500" id={`${inputId}-description`}>
          {helperText}
        </p>
      ) : null}
    </div>
  );
};

export default FormGroup; 