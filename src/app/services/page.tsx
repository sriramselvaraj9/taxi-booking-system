'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Star, Car, Navigation, Shield, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      name: 'City Rides',
      description: 'Quick and comfortable rides within the city',
      features: ['Available 24/7', 'GPS Tracking', 'Multiple Payment Options'],
      icon: <Car className="h-8 w-8" />,
      pricing: 'Starting from ₹15/km',
      vehicles: ['Economy Sedan', 'Premium Hatchback'],
      estimatedTime: '5-10 minutes'
    },
    {
      id: 2,
      name: 'Airport Transfer',
      description: 'Reliable airport pickup and drop services',
      features: ['Flight Tracking', 'Meet & Greet', 'Luggage Assistance'],
      icon: <Navigation className="h-8 w-8" />,
      pricing: 'Fixed rates from ₹499',
      vehicles: ['Premium Sedan', 'SUV'],
      estimatedTime: '15-20 minutes'
    },
    {
      id: 3,
      name: 'Outstation',
      description: 'Long distance travel with professional drivers',
      features: ['Experienced Drivers', 'Well-maintained Vehicles', 'Flexible Packages'],
      icon: <MapPin className="h-8 w-8" />,
      pricing: 'Starting from ₹12/km',
      vehicles: ['Premium Sedan', 'SUV', 'Luxury Cars'],
      estimatedTime: 'On-demand'
    },
    {
      id: 4,
      name: 'Corporate Services',
      description: 'Business travel solutions with dedicated support',
      features: ['Priority Booking', 'Corporate Billing', '24/7 Support'],
      icon: <Shield className="h-8 w-8" />,
      pricing: 'Custom packages available',
      vehicles: ['Premium Fleet', 'Executive Cars'],
      estimatedTime: 'Guaranteed availability'
    }
  ];

  const faqs = [
    {
      question: 'How do I book a ride?',
      answer: 'You can book a ride through our website by clicking "Book Now" or by calling our customer service. Simply enter your pickup and destination locations, select your preferred vehicle type, and confirm your booking.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including cash, credit/debit cards, UPI payments, and digital wallets like Paytm, PhonePe, and Google Pay.'
    },
    {
      question: 'Can I cancel my booking?',
      answer: 'Yes, you can cancel your booking up to 5 minutes before the scheduled pickup time without any charges. Cancellations made after that may incur a small fee.'
    },
    {
      question: 'Are your drivers verified?',
      answer: 'Yes, all our drivers undergo thorough background verification, have valid driving licenses, and receive regular training to ensure your safety and comfort.'
    },
    {
      question: 'Do you provide 24/7 service?',
      answer: 'Yes, our services are available 24 hours a day, 7 days a week. However, availability may vary during peak hours and in certain areas.'
    },
    {
      question: 'Can I schedule a ride in advance?',
      answer: 'Absolutely! You can schedule rides up to 7 days in advance. This is particularly useful for airport transfers and important appointments.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">QuickRide</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link href="/services" className="text-blue-600 font-medium">Services</Link>
              <Link href="/book" className="text-gray-700 hover:text-blue-600">Book Now</Link>
              <Link href="/profile" className="text-gray-700 hover:text-blue-600">Profile</Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            From quick city rides to long-distance travel, we've got you covered with our comprehensive range of taxi services.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            <Car className="h-5 w-5 mr-2" />
            Book Your Ride Now
          </Link>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Pricing:</span>
                    <span className="font-semibold text-blue-600">{service.pricing}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Estimated Wait:</span>
                    <span className="font-semibold text-gray-900">{service.estimatedTime}</span>
                  </div>

                  <div>
                    <span className="text-sm text-gray-600 block mb-2">Key Features:</span>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-sm text-gray-600 block mb-2">Available Vehicles:</span>
                    <div className="flex flex-wrap gap-2">
                      {service.vehicles.map((vehicle, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {vehicle}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    href="/book"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Car className="h-4 w-4 mr-2" />
                    Book {service.name}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose QuickRide?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing safe, reliable, and comfortable transportation services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600">All drivers are verified and vehicles are regularly inspected for your safety.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Available</h3>
              <p className="text-gray-600">Round-the-clock service to meet all your transportation needs.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Top Rated</h3>
              <p className="text-gray-600">Consistently high ratings from satisfied customers across all services.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CreditCard className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Payment</h3>
              <p className="text-gray-600">Multiple payment options including cash, cards, and digital wallets.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Need More Information?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our customer service team is available 24/7 to help you with any questions or concerns.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="h-6 w-6" />
              <span className="text-lg">+91 98765 43210</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-6 w-6" />
              <span className="text-lg">support@quickride.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="h-6 w-6" />
              <span className="text-lg">24/7 Support</span>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/book"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              <Car className="h-5 w-5 mr-2" />
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}