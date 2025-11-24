// @ts-nocheck
'use client';

import { useState } from 'react';
import { Car, Users, Calendar, Settings, LogOut, Plus, Search, Filter, MoreHorizontal, Edit, Trash2, Eye, TrendingUp, DollarSign, Clock, CheckCircle } from 'lucide-react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.email === 'admin@taxibooking.com' && loginData.password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials! Use admin@taxibooking.com / admin123');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="bg-blue-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Car className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
            <p className="text-gray-600">Access QuickRide Admin Panel</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="admin@taxibooking.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Login to Admin Panel
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>Demo Credentials:</p>
            <p>Email: admin@taxibooking.com</p>
            <p>Password: admin123</p>
          </div>
        </div>
      </div>
    );
  }

  return <AdminDashboard onLogout={() => setIsAuthenticated(false)} />;
}

function AdminDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(false);

  // Mock data
  const stats = {
    todayBookings: 24,
    totalBookings: 1247,
    todayRevenue: 12480,
    totalRevenue: 245600,
    activeDrivers: 18,
    totalDrivers: 45,
    completedRides: 1180
  };

  const recentBookings = [
    {
      id: 1,
      bookingReference: 'QB2024001',
      customerName: 'John Doe',
      pickup: 'Airport',
      destination: 'Downtown',
      fare: 450,
      status: 'completed',
      date: '2024-11-24',
      time: '09:30'
    },
    {
      id: 2,
      bookingReference: 'QB2024002',
      customerName: 'Jane Smith',
      pickup: 'Mall Road',
      destination: 'Business District',
      fare: 320,
      status: 'ongoing',
      date: '2024-11-24',
      time: '10:15'
    },
    {
      id: 3,
      bookingReference: 'QB2024003',
      customerName: 'Mike Johnson',
      pickup: 'Hotel Plaza',
      destination: 'Railway Station',
      fare: 280,
      status: 'pending',
      date: '2024-11-24',
      time: '11:00'
    }
  ];

  const vehicles = [
    {
      id: 1,
      name: 'Economy Sedan',
      type: 'Sedan',
      licensePlate: 'MH01AB1234',
      driver: 'Ramesh Kumar',
      status: 'available',
      rating: 4.5,
      totalRides: 245
    },
    {
      id: 2,
      name: 'Premium SUV',
      type: 'SUV',
      licensePlate: 'MH02CD5678',
      driver: 'Suresh Patel',
      status: 'busy',
      rating: 4.7,
      totalRides: 189
    },
    {
      id: 3,
      name: 'Luxury Sedan',
      type: 'Premium',
      licensePlate: 'MH03EF9012',
      driver: 'Amit Shah',
      status: 'maintenance',
      rating: 4.9,
      totalRides: 156
    }
  ];

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: TrendingUp },
    { id: 'bookings', name: 'Bookings', icon: Calendar },
    { id: 'vehicles', name: 'Vehicles', icon: Car },
    { id: 'drivers', name: 'Drivers', icon: Users },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">QuickRide Admin</h1>
                <p className="text-sm text-gray-500">Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">admin@taxibooking.com</p>
              </div>
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm">
          <nav className="p-6">
            <ul className="space-y-2">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span className="font-medium">{tab.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'dashboard' && (
            <DashboardTab stats={stats} recentBookings={recentBookings} />
          )}
          {activeTab === 'bookings' && (
            <BookingsTab bookings={recentBookings} />
          )}
          {activeTab === 'vehicles' && (
            <VehiclesTab vehicles={vehicles} />
          )}
          {activeTab === 'drivers' && (
            <DriversTab />
          )}
          {activeTab === 'settings' && (
            <SettingsTab />
          )}
        </main>
      </div>
    </div>
  );
}

function DashboardTab({ stats, recentBookings }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="bg-blue-500 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Today's Bookings</p>
              <p className="text-2xl font-bold text-gray-900">{stats.todayBookings}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="bg-green-500 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Today's Revenue</p>
              <p className="text-2xl font-bold text-gray-900">₹{stats.todayRevenue.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="bg-purple-500 p-3 rounded-full">
              <Car className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Drivers</p>
              <p className="text-2xl font-bold text-gray-900">{stats.activeDrivers}/{stats.totalDrivers}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="bg-orange-500 p-3 rounded-full">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Completed Rides</p>
              <p className="text-2xl font-bold text-gray-900">{stats.completedRides}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Bookings</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Booking
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Route
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fare
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{booking.bookingReference}</div>
                      <div className="text-sm text-gray-500">{booking.date} at {booking.time}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {booking.customerName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{booking.pickup} → {booking.destination}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      booking.status === 'completed' ? 'bg-green-100 text-green-800' :
                      booking.status === 'ongoing' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ₹{booking.fare}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function BookingsTab({ bookings }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Bookings Management</h2>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus className="h-4 w-4" />
            <span>Export Data</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search bookings..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
          <input
            type="date"
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Booking Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Route
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fare
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{booking.bookingReference}</div>
                    <div className="text-sm text-gray-500">{booking.date} at {booking.time}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {booking.customerName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{booking.pickup}</div>
                  <div className="text-sm text-gray-500">to {booking.destination}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    booking.status === 'completed' ? 'bg-green-100 text-green-800' :
                    booking.status === 'ongoing' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {booking.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ₹{booking.fare}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-900">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function VehiclesTab({ vehicles }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Vehicle Management</h2>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          <span>Add Vehicle</span>
        </button>
      </div>

      <div className="grid gap-6">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">🚗</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{vehicle.name}</h3>
                  <p className="text-sm text-gray-600">License: {vehicle.licensePlate}</p>
                  <p className="text-sm text-gray-600">Driver: {vehicle.driver}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  vehicle.status === 'available' ? 'bg-green-100 text-green-800' :
                  vehicle.status === 'busy' ? 'bg-blue-100 text-blue-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {vehicle.status}
                </span>
                <div className="mt-2 text-sm text-gray-600">
                  Rating: {vehicle.rating} ⭐ ({vehicle.totalRides} rides)
                </div>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded text-sm hover:bg-blue-200">
                Edit
              </button>
              <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded text-sm hover:bg-gray-200">
                View Details
              </button>
              <button className="px-3 py-1 bg-red-100 text-red-600 rounded text-sm hover:bg-red-200">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DriversTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Driver Management</h2>
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Driver Management</h3>
        <p className="text-gray-500">Driver management features coming soon...</p>
      </div>
    </div>
  );
}

function SettingsTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <Settings className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Settings Panel</h3>
        <p className="text-gray-500">Configuration settings coming soon...</p>
      </div>
    </div>
  );
}