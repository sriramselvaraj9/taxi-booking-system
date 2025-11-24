'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Car, MapPin, Calendar, Clock, Phone, Menu, X } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <HeroSection />
      <ServiceSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}

function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 min-h-screen">
      {/* Navigation */}
      <nav className="relative z-50 px-4 py-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-yellow-400 p-2 rounded-full">
                <Car className="h-6 w-6 text-blue-900" />
              </div>
              <span className="text-xl font-bold text-white">QuickRide</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-yellow-300 transition-all duration-300 hover:scale-105 relative group px-3 py-2 rounded-lg">
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
              </Link>
              <Link href="/services" className="text-white hover:text-yellow-300 transition-all duration-300 hover:scale-105 relative group px-3 py-2 rounded-lg">
                <span className="relative z-10">Services</span>
                <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
              </Link>
              <Link href="/book" className="text-white hover:text-yellow-300 transition-all duration-300 hover:scale-105 relative group px-3 py-2 rounded-lg">
                <span className="relative z-10">Book Now</span>
                <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
              </Link>
              <Link href="/profile" className="text-white hover:text-yellow-300 transition-all duration-300 hover:scale-105 relative group px-3 py-2 rounded-lg">
                <span className="relative z-10">Profile</span>
                <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
              </Link>
              <Link 
                href="/admin" 
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-6 py-3 rounded-full font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Admin Panel
                  <div className="w-2 h-2 bg-blue-900 rounded-full animate-pulse"></div>
                </span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white hover:text-yellow-300 transition-all duration-300 p-3 rounded-lg hover:bg-white/10 transform hover:scale-110 active:scale-95 relative group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative z-10">
                {isMenuOpen ? (
                  <X className="h-6 w-6 transform rotate-0 transition-transform duration-300" />
                ) : (
                  <Menu className="h-6 w-6 transform rotate-0 transition-transform duration-300 group-hover:rotate-12" />
                )}
              </div>
              <div className="absolute inset-0 bg-yellow-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100"></div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-blue-700 animate-fadeIn">
              <div className="space-y-2">
                <Link 
                  href="/" 
                  className="block text-white hover:text-yellow-300 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/10 transform hover:translate-x-2 relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    Home
                  </span>
                </Link>
                <Link 
                  href="/services" 
                  className="block text-white hover:text-yellow-300 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/10 transform hover:translate-x-2 relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    Services
                  </span>
                </Link>
                <Link 
                  href="/about" 
                  className="block text-white hover:text-yellow-300 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/10 transform hover:translate-x-2 relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    About
                  </span>
                </Link>
                <Link 
                  href="/contact" 
                  className="block text-white hover:text-yellow-300 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/10 transform hover:translate-x-2 relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    Contact
                  </span>
                </Link>
                <Link 
                  href="/admin" 
                  className="block bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-6 py-4 rounded-full font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 text-center mt-6 transform hover:scale-105 hover:shadow-xl shadow-lg relative overflow-hidden group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Admin Panel
                    <div className="w-2 h-2 bg-blue-900 rounded-full animate-pulse"></div>
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 px-4 lg:px-8 pt-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Hero Text */}
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Reliable{' '}
                <span className="text-yellow-400">Taxi Service</span>{' '}
                for Every Journey
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Book premium taxi rides with professional drivers. Safe, comfortable, 
                and affordable transportation for all your travel needs.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">1000+</div>
                  <div className="text-sm text-blue-200">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">24/7</div>
                  <div className="text-sm text-blue-200">Service Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">50+</div>
                  <div className="text-sm text-blue-200">Professional Drivers</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/book" 
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
                >
                  Book a Ride Now
                </Link>
                <a 
                  href="tel:+1234567890" 
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Right side - Booking Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Book Your Ride
              </h2>
              
              <BookingForm />
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
    </section>
  );
}

function BookingForm() {
  const [serviceType, setServiceType] = useState('One-Way');
  const [formData, setFormData] = useState({
    pickup: '',
    destination: '',
    date: '',
    time: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', { serviceType, ...formData });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Service Type Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Service Type
        </label>
        <div className="grid grid-cols-2 gap-3">
          {['One-Way', 'Round Trip'].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setServiceType(type)}
              className={`px-4 py-3 rounded-lg border-2 transition-all ${
                serviceType === type
                  ? 'border-blue-500 bg-blue-50 text-blue-700 font-medium'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Pickup Location */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Pickup Location
        </label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            name="pickup"
            value={formData.pickup}
            onChange={handleInputChange}
            placeholder="Enter pickup address"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      {/* Destination */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Destination
        </label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
            placeholder="Enter destination"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      {/* Date and Time */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Time
          </label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
      >
        Search Available Rides
      </button>

      {/* Quick Info */}
      <div className="text-center text-sm text-gray-500">
        <p>🚗 Professional drivers • 🛡️ Safe & secure • 💳 Multiple payment options</p>
      </div>
    </form>
  );
}

function ServiceSection() {
  const services = [
    {
      title: "One-Way Trips",
      description: "Perfect for single destination rides",
      icon: "🚗",
      price: "Starting from ₹199"
    },
    {
      title: "Round Trip",
      description: "Complete round trip with waiting",
      icon: "🔄",
      price: "Starting from ₹399"
    },
    {
      title: "Airport Transfer",
      description: "Reliable airport pickup & drop",
      icon: "✈️",
      price: "Starting from ₹499"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Choose from our range of professional taxi services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-blue-600 font-semibold">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: "24/7 Availability",
      description: "Round-the-clock service for your convenience",
      icon: "🕐"
    },
    {
      title: "Professional Drivers",
      description: "Experienced and licensed drivers",
      icon: "👨‍✈️"
    },
    {
      title: "Safe & Secure",
      description: "GPS tracking and safety measures",
      icon: "🛡️"
    },
    {
      title: "Affordable Pricing",
      description: "Transparent and competitive rates",
      icon: "💰"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600">
            Experience the difference with our premium taxi service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-yellow-400 p-2 rounded-full">
                <Car className="h-6 w-6 text-blue-900" />
              </div>
              <span className="text-xl font-bold">QuickRide</span>
            </div>
            <p className="text-gray-300">
              Your trusted taxi booking platform for safe and comfortable rides.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>One-Way Trips</li>
              <li>Round Trip</li>
              <li>Airport Transfer</li>
              <li>Corporate Booking</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Safety</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📞 +91 98765 43210</li>
              <li>✉️ support@quickride.com</li>
              <li>📍 Mumbai, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 QuickRide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
