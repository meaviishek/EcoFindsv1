'use client';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '@/store/features/authSlice';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import DashboardCard from '@/components/DashboardCard';

export default function DashboardPage() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
    
    if (user) {
      setFormData({
        username: user.username || '',
        email: user.email || '',
      });
    }
  }, [user, isAuthenticated, router]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(formData));
    setIsEditing(false);
    setMessage('Profile updated successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">User Dashboard</h1>
          <p className="text-gray-600">Manage your profile and account settings</p>
        </div>

        {message && (
          <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6">
            {message}
          </div>
        )}

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Profile Information</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Save Changes
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <DashboardCard
                title="Username"
                value={user.username || 'Not set'}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                }
              />
              <DashboardCard
                title="Email"
                value={user.email || 'Not set'}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
              />
              <DashboardCard
                title="Member Since"
                value={new Date().getFullYear() === new Date(user.createdAt || Date.now()).getFullYear() 
                  ? "Joined this year"
                  : `Joined ${new Date(user.createdAt || Date.now()).getFullYear()}`
                }
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                }
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}