'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/hooks/useAuth';
import Loading from './Loading';

interface ProtectedRouteProps {
  children: React.ReactNode;
  adminOnly?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  adminOnly = false 
}) => {
  const router = useRouter();
  const { state } = useAuth();
  const { isAuthenticated, isLoading, user } = state;

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    } else if (!isLoading && adminOnly && user?.role !== 'admin') {
      router.push('/');
    }
  }, [isLoading, isAuthenticated, adminOnly, user, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading variant="spinner" text="Loading..." />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }

  if (adminOnly && user?.role !== 'admin') {
    return null; // Will redirect in useEffect
  }

  return <>{children}</>;
};

export default ProtectedRoute; 