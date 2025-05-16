import React, { createContext, useContext, useState, useCallback } from 'react';
import Toast, { ToastType } from './Toast';

export interface ToastData {
  id: string | number;
  type: ToastType;
  title?: string;
  message: string;
  duration?: number;
}

interface ToastContextProps {
  addToast: (toast: Omit<ToastData, 'id'>) => void;
  removeToast: (id: string | number) => void;
  removeAllToasts: () => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);
  
  const addToast = useCallback((toast: Omit<ToastData, 'id'>) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { ...toast, id }]);
  }, []);
  
  const removeToast = useCallback((id: string | number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);
  
  const removeAllToasts = useCallback(() => {
    setToasts([]);
  }, []);
  
  const value = {
    addToast,
    removeToast,
    removeAllToasts,
  };
  
  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed bottom-0 right-0 p-4 z-50 space-y-4">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            type={toast.type}
            title={toast.title}
            message={toast.message}
            duration={toast.duration}
            onClose={removeToast}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider; 