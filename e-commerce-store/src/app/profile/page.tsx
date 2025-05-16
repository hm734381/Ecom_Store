'use client';
//hi there
import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/hooks/useAuth';
import ProtectedRoute from '@/components/common/ProtectedRoute';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import FormGroup from '@/components/common/FormGroup';
import { Address } from '@/types/auth';

export default function ProfilePage() {
  const { state } = useAuth();
  const { user } = state;
  const [activeTab, setActiveTab] = useState<'profile' | 'addresses' | 'orders'>('profile');
  
  // Mock addresses and orders for UI development
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: '1',
      fullName: user?.name || '',
      streetAddress: '123 Main St',
      city: 'New York',
      state: 'NY',
      postalCode: '10001',
      country: 'USA',
      isDefault: true
    }
  ]);
  
  const [orders] = useState([
    { id: 'ORD-1001', date: '2023-06-15', total: 129.99, status: 'Delivered' },
    { id: 'ORD-1002', date: '2023-07-22', total: 79.50, status: 'Processing' },
  ]);

  return (
    <ProtectedRoute>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Account</h1>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="space-y-1">
                  <button
                    className={`w-full text-left px-3 py-2 rounded-md ${
                      activeTab === 'profile' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('profile')}
                  >
                    Profile Information
                  </button>
                  <button
                    className={`w-full text-left px-3 py-2 rounded-md ${
                      activeTab === 'addresses' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('addresses')}
                  >
                    Addresses
                  </button>
                  <button
                    className={`w-full text-left px-3 py-2 rounded-md ${
                      activeTab === 'orders' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('orders')}
                  >
                    Order History
                  </button>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
              {activeTab === 'profile' && (
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Profile Information</h2>
                  <div className="space-y-4">
                    <FormGroup label="Full Name">
                      <Input 
                        type="text" 
                        value={user?.name || ''} 
                        disabled
                      />
                    </FormGroup>
                    <FormGroup label="Email Address">
                      <Input 
                        type="email" 
                        value={user?.email || ''} 
                        disabled
                      />
                    </FormGroup>
                    <FormGroup label="Account Type">
                      <Input 
                        type="text" 
                        value={user?.role === 'admin' ? 'Administrator' : 'Customer'} 
                        disabled
                      />
                    </FormGroup>
                    <div className="pt-4">
                      <Button variant="outline">
                        Change Password
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'addresses' && (
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">Your Addresses</h2>
                    <Button variant="primary" size="sm">
                      Add New Address
                    </Button>
                  </div>
                  
                  {addresses.length > 0 ? (
                    <div className="space-y-4">
                      {addresses.map((address) => (
                        <div key={address.id} className="border rounded-lg p-4">
                          <div className="flex justify-between">
                            <div>
                              <p className="font-medium">{address.fullName}</p>
                              <p className="text-sm text-gray-500">{address.streetAddress}</p>
                              <p className="text-sm text-gray-500">
                                {address.city}, {address.state} {address.postalCode}
                              </p>
                              <p className="text-sm text-gray-500">{address.country}</p>
                              {address.isDefault && (
                                <span className="inline-flex items-center mt-1 px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                                  Default
                                </span>
                              )}
                            </div>
                            <div className="space-y-2">
                              <Button variant="outline" size="sm">
                                Edit
                              </Button>
                              <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50">
                                Delete
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">You haven't added any addresses yet.</p>
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'orders' && (
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <h2 className="text-xl font-semibold text-gray-900 p-6 pb-4">Order History</h2>
                  
                  {orders.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Order #
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Date
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Total
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {orders.map((order) => (
                            <tr key={order.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {order.id}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {order.date}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                ${order.total.toFixed(2)}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                  ${order.status === 'Delivered' 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-yellow-100 text-yellow-800'}`}
                                >
                                  {order.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                                <Link href={`/orders/${order.id}`} className="text-blue-600 hover:text-blue-900">
                                  View
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">You haven't placed any orders yet.</p>
                      <div className="mt-2">
                        <Link href="/products">
                          <Button variant="primary">Start Shopping</Button>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
} 