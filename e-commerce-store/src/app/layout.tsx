import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Layout from '../components/layout/Layout';
import ToastProvider from '../components/common/ToastProvider';
import { AuthProvider } from '../lib/hooks/useAuth';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'E-Store',
  description: 'Your one-stop shop for all your needs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ToastProvider>
          <AuthProvider>
            <Layout>{children}</Layout>
          </AuthProvider>
        </ToastProvider>
      </body>
    </html>
  );
} 