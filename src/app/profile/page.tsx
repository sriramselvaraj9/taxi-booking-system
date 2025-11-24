'use client';

import { useState } from 'react';
import { User, Phone, Mail, MapPin, Calendar, CreditCard, ArrowLeft, Star, Check } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 98765 43210',
    address: '123 MG Road, Bangalore, Karnataka 560001',
    memberSince: '2023-01-15',
    totalRides: 47,
    totalSpent: 18500,
    rating: 4.8
  });

  const recentBookings = [
    {
      id: 1,
      reference: 'QB2024001',
      date: '2024-11-24',
      time: '09:30 AM',
      pickup: 'MG Road Metro Station',
      destination: 'Kempegowda Airport',
      fare: 850,
      status: 'completed',
      driver: 'Ramesh Kumar',
      vehicle: 'Maruti Swift Dzire',
      rating: 5
    },
    {
      id: 2,
      reference: 'QB2024002',
      date: '2024-11-20',
      time: '02:15 PM',
      pickup: 'Koramangala',
      destination: 'Electronic City',
      fare: 420,
      status: 'completed',
      driver: 'Suresh Patel',
      vehicle: 'Honda City',
      rating: 4
    },
    {
      id: 3,
      reference: 'QB2024003',
      date: '2024-11-18',
      time: '07:45 PM',
      pickup: 'Whitefield',
      destination: 'Indiranagar',
      fare: 380,
      status: 'completed',
      driver: 'Amit Singh',
      vehicle: 'Hyundai Verna',
      rating: 5
    }
  ];

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Here you would typically send the updated profile to your backend
    alert('Profile updated successfully!');
  };

  const tabs = [
    { id: 'profile', name: 'My Profile', icon: User },
    { id: 'bookings', name: 'My Bookings', icon: Calendar },
    { id: 'payments', name: 'Payment Methods', icon: CreditCard }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Home</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{userProfile.name}</p>
                <p className="text-xs text-gray-500">Member since {new Date(userProfile.memberSince).toLocaleDateString()}</p>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{userProfile.name}</h2>
                <p className="text-gray-600">{userProfile.email}</p>
                <div className="flex items-center justify-center mt-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{userProfile.rating} Rating</span>
                </div>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.name}</span>
                  </button>
                ))}
              </nav>

              {/* Stats */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{userProfile.totalRides}</p>
                  <p className="text-sm text-gray-600">Total Rides</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">₹{userProfile.totalSpent.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Total Spent</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'profile' && (
              <ProfileTab 
                userProfile={userProfile}
                setUserProfile={setUserProfile}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                handleProfileUpdate={handleProfileUpdate}
              />
            )}
            {activeTab === 'bookings' && (
              <BookingsTab bookings={recentBookings} />
            )}
            {activeTab === 'payments' && (
              <PaymentsTab />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileTab({ userProfile, setUserProfile, isEditing, setIsEditing, handleProfileUpdate }) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Edit Profile
          </button>
        ) : (
          <div className="flex space-x-2">
            <button
              onClick={handleProfileUpdate}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Save Changes
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      <div className="p-6">
        <form onSubmit={handleProfileUpdate} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="h-4 w-4 inline mr-1" />
                Full Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={userProfile.name}
                  onChange={(e) => setUserProfile(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              ) : (
                <p className="py-2 text-gray-900">{userProfile.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="h-4 w-4 inline mr-1" />
                Email Address
              </label>
              {isEditing ? (
                <input
                  type="email"
                  value={userProfile.email}
                  onChange={(e) => setUserProfile(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              ) : (
                <p className="py-2 text-gray-900">{userProfile.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="h-4 w-4 inline mr-1" />
                Phone Number
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  value={userProfile.phone}
                  onChange={(e) => setUserProfile(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              ) : (
                <p className="py-2 text-gray-900">{userProfile.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="h-4 w-4 inline mr-1" />
                Member Since
              </label>
              <p className="py-2 text-gray-900">{new Date(userProfile.memberSince).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="h-4 w-4 inline mr-1" />
              Address
            </label>
            {isEditing ? (
              <textarea
                value={userProfile.address}
                onChange={(e) => setUserProfile(prev => ({ ...prev, address: e.target.value }))}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            ) : (
              <p className="py-2 text-gray-900">{userProfile.address}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

function BookingsTab({ bookings }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Bookings</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {bookings.map((booking) => (
            <div key={booking.id} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-sm font-medium text-blue-600">{booking.reference}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      booking.status === 'completed' ? 'bg-green-100 text-green-800' :
                      booking.status === 'ongoing' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Route</p>
                      <p className="text-sm text-gray-600">{booking.pickup} → {booking.destination}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Date & Time</p>
                      <p className="text-sm text-gray-600">{booking.date} at {booking.time}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Driver & Vehicle</p>
                      <p className="text-sm text-gray-600">{booking.driver} - {booking.vehicle}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Fare</p>
                      <p className="text-sm text-gray-600">₹{booking.fare}</p>
                    </div>
                  </div>

                  {booking.status === 'completed' && (
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">Your Rating:</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= booking.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PaymentsTab() {
  const paymentMethods = [
    {
      id: 1,
      type: 'card',
      name: 'Credit Card',
      details: '•••• •••• •••• 1234',
      brand: 'Visa',
      isDefault: true
    },
    {
      id: 2,
      type: 'upi',
      name: 'UPI',
      details: 'john.doe@paytm',
      brand: 'PayTM',
      isDefault: false
    },
    {
      id: 3,
      type: 'wallet',
      name: 'Wallet',
      details: 'Balance: ₹150',
      brand: 'QuickRide Wallet',
      isDefault: false
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">Payment Methods</h3>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Add Payment Method
          </button>
        </div>
        <div className="divide-y divide-gray-200">
          {paymentMethods.map((method) => (
            <div key={method.id} className="p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                  <CreditCard className="h-4 w-4 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{method.name}</p>
                  <p className="text-sm text-gray-600">{method.details}</p>
                  {method.isDefault && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                      <Check className="h-3 w-3 mr-1" />
                      Default
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {!method.isDefault && (
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    Set as Default
                  </button>
                )}
                <button className="text-sm text-red-600 hover:text-red-800">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h4 className="text-lg font-medium text-gray-900 mb-4">Billing History</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <p className="text-sm font-medium text-gray-900">Booking QB2024001</p>
              <p className="text-sm text-gray-600">Nov 24, 2024</p>
            </div>
            <span className="text-sm font-medium text-gray-900">₹850</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <p className="text-sm font-medium text-gray-900">Booking QB2024002</p>
              <p className="text-sm text-gray-600">Nov 20, 2024</p>
            </div>
            <span className="text-sm font-medium text-gray-900">₹420</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-sm font-medium text-gray-900">Booking QB2024003</p>
              <p className="text-sm text-gray-600">Nov 18, 2024</p>
            </div>
            <span className="text-sm font-medium text-gray-900">₹380</span>
          </div>
        </div>
      </div>
    </div>
  );
}