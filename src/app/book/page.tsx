'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, MapPin, Calendar, Clock, Car, Users, Star, CreditCard } from 'lucide-react';
import Link from 'next/link';

function BookPageContent() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [bookingData, setBookingData] = useState({
    pickup: searchParams.get('pickup') || '',
    destination: searchParams.get('destination') || '',
    date: searchParams.get('date') || '',
    time: searchParams.get('time') || '',
    serviceType: 'One-Way',
    selectedVehicle: null,
    customerInfo: {
      name: '',
      phone: '',
      email: ''
    },
    paymentMethod: 'cash'
  });
  
  const [fareDetails, setFareDetails] = useState(null);

  const steps = [
    { id: 1, name: 'Trip Details', description: 'Pickup, destination & timing' },
    { id: 2, name: 'Vehicle Selection', description: 'Choose your ride' },
    { id: 3, name: 'Customer Details', description: 'Contact information' },
    { id: 4, name: 'Payment', description: 'Payment method' },
    { id: 5, name: 'Confirmation', description: 'Review & confirm' }
  ];

  const vehicles = [
    {
      id: 1,
      name: 'Economy Sedan',
      type: 'Sedan',
      capacity: '4 passengers',
      features: ['AC', 'Music System'],
      basePrice: 199,
      perKm: 12,
      image: '🚗',
      rating: 4.2,
      eta: '5-8 min'
    },
    {
      id: 2,
      name: 'Premium SUV',
      type: 'SUV',
      capacity: '6 passengers',
      features: ['AC', 'Music System', 'Extra Space'],
      basePrice: 299,
      perKm: 18,
      image: '🚙',
      rating: 4.5,
      eta: '8-12 min'
    },
    {
      id: 3,
      name: 'Luxury Sedan',
      type: 'Premium',
      capacity: '4 passengers',
      features: ['AC', 'Premium Interior', 'WiFi'],
      basePrice: 399,
      perKm: 25,
      image: '🚘',
      rating: 4.8,
      eta: '10-15 min'
    }
  ];

  const calculateFare = (vehicle, distance = 15) => {
    const baseFare = vehicle.basePrice;
    const distanceFare = distance * vehicle.perKm;
    const subtotal = baseFare + distanceFare;
    const taxes = subtotal * 0.18; // 18% GST
    const total = subtotal + taxes;
    
    return {
      baseFare,
      distanceFare,
      distance,
      subtotal,
      taxes,
      total: Math.round(total)
    };
  };

  const handleStepSubmit = (stepData) => {
    setBookingData(prev => ({ ...prev, ...stepData }));
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBookingConfirm = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate booking reference
    const bookingRef = 'QB' + Date.now().toString(36).toUpperCase();
    setBookingData(prev => ({ ...prev, bookingReference: bookingRef }));
    setCurrentStep(6); // Success step
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Book Your Ride</h1>
              <p className="text-gray-600">Step {currentStep} of {steps.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    step.id <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step.id}
                  </div>
                  <div className="ml-3">
                    <div className={`text-sm font-medium ${
                      step.id <= currentStep ? 'text-blue-600' : 'text-gray-500'
                    }`}>
                      {step.name}
                    </div>
                    <div className="text-xs text-gray-500">{step.description}</div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`hidden md:block w-16 h-0.5 ml-4 ${
                    step.id < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          {currentStep === 1 && (
            <TripDetailsStep 
              data={bookingData} 
              onSubmit={handleStepSubmit}
            />
          )}
          {currentStep === 2 && (
            <VehicleSelectionStep 
              vehicles={vehicles}
              data={bookingData}
              onSubmit={handleStepSubmit}
              calculateFare={calculateFare}
              setFareDetails={setFareDetails}
            />
          )}
          {currentStep === 3 && (
            <CustomerDetailsStep 
              data={bookingData}
              onSubmit={handleStepSubmit}
            />
          )}
          {currentStep === 4 && (
            <PaymentStep 
              data={bookingData}
              onSubmit={handleStepSubmit}
            />
          )}
          {currentStep === 5 && (
            <ConfirmationStep 
              data={bookingData}
              fareDetails={fareDetails}
              onConfirm={handleBookingConfirm}
              loading={loading}
            />
          )}
          {currentStep === 6 && (
            <SuccessStep 
              bookingData={bookingData}
            />
          )}
        </div>

        {/* Back Button */}
        {currentStep > 1 && currentStep < 6 && (
          <div className="mt-6">
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous Step
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function TripDetailsStep({ data, onSubmit }) {
  const [formData, setFormData] = useState({
    pickup: data.pickup,
    destination: data.destination,
    date: data.date,
    time: data.time,
    serviceType: data.serviceType
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Trip Details</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {['One-Way', 'Round Trip'].map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, serviceType: type }))}
            className={`p-4 rounded-lg border-2 transition-all ${
              formData.serviceType === type
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Pickup Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={formData.pickup}
              onChange={(e) => setFormData(prev => ({ ...prev, pickup: e.target.value }))}
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter pickup location"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Destination
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={formData.destination}
              onChange={(e) => setFormData(prev => ({ ...prev, destination: e.target.value }))}
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter destination"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
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
                value={formData.time}
                onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Continue to Vehicle Selection
      </button>
    </form>
  );
}

function VehicleSelectionStep({ vehicles, data, onSubmit, calculateFare, setFareDetails }) {
  const [selectedVehicle, setSelectedVehicle] = useState(data.selectedVehicle);

  const handleVehicleSelect = (vehicle) => {
    setSelectedVehicle(vehicle);
    const fare = calculateFare(vehicle);
    setFareDetails(fare);
  };

  const handleSubmit = () => {
    if (selectedVehicle) {
      onSubmit({ selectedVehicle });
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Choose Your Vehicle</h2>
      
      <div className="space-y-4">
        {vehicles.map((vehicle) => {
          const fare = calculateFare(vehicle);
          const isSelected = selectedVehicle?.id === vehicle.id;
          
          return (
            <div
              key={vehicle.id}
              onClick={() => handleVehicleSelect(vehicle)}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                isSelected 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{vehicle.image}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{vehicle.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {vehicle.capacity}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-current text-yellow-400" />
                        {vehicle.rating}
                      </span>
                      <span>{vehicle.eta}</span>
                    </div>
                    <div className="flex gap-2 mt-1">
                      {vehicle.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-gray-900">₹{fare.total}</div>
                  <div className="text-sm text-gray-600">Estimated fare</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedVehicle && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Fare Breakdown</h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Base fare</span>
              <span>₹{calculateFare(selectedVehicle).baseFare}</span>
            </div>
            <div className="flex justify-between">
              <span>Distance (15 km)</span>
              <span>₹{calculateFare(selectedVehicle).distanceFare}</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes & fees</span>
              <span>₹{Math.round(calculateFare(selectedVehicle).taxes)}</span>
            </div>
            <div className="flex justify-between font-semibold pt-1 border-t">
              <span>Total</span>
              <span>₹{calculateFare(selectedVehicle).total}</span>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={!selectedVehicle}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Continue to Customer Details
      </button>
    </div>
  );
}

function CustomerDetailsStep({ data, onSubmit }) {
  const [customerInfo, setCustomerInfo] = useState(data.customerInfo);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ customerInfo });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={customerInfo.name}
            onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={customerInfo.phone}
            onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="+91 98765 43210"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={customerInfo.email}
            onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="your.email@example.com"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Continue to Payment
      </button>
    </form>
  );
}

function PaymentStep({ data, onSubmit }) {
  const [paymentMethod, setPaymentMethod] = useState(data.paymentMethod);

  const paymentOptions = [
    { id: 'cash', name: 'Cash Payment', description: 'Pay with cash to the driver', icon: '💵' },
    { id: 'card', name: 'Credit/Debit Card', description: 'Pay securely with your card', icon: '💳' },
    { id: 'upi', name: 'UPI Payment', description: 'Pay with UPI apps like GPay, PhonePe', icon: '📱' }
  ];

  const handleSubmit = () => {
    onSubmit({ paymentMethod });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Payment Method</h2>
      
      <div className="space-y-3">
        {paymentOptions.map((option) => (
          <div
            key={option.id}
            onClick={() => setPaymentMethod(option.id)}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              paymentMethod === option.id 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{option.icon}</span>
              <div>
                <h4 className="font-medium text-gray-900">{option.name}</h4>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Continue to Confirmation
      </button>
    </div>
  );
}

function ConfirmationStep({ data, fareDetails, onConfirm, loading }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Booking Confirmation</h2>
      
      {/* Trip Summary */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium text-gray-900 mb-3">Trip Details</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Service Type:</span>
            <span>{data.serviceType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">From:</span>
            <span>{data.pickup}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">To:</span>
            <span>{data.destination}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Date & Time:</span>
            <span>{data.date} at {data.time}</span>
          </div>
        </div>
      </div>

      {/* Vehicle & Fare */}
      {data.selectedVehicle && fareDetails && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-3">Vehicle & Fare</h3>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">{data.selectedVehicle.image}</span>
            <div>
              <div className="font-medium">{data.selectedVehicle.name}</div>
              <div className="text-sm text-gray-600">{data.selectedVehicle.capacity}</div>
            </div>
          </div>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Base fare:</span>
              <span>₹{fareDetails.baseFare}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Distance fare:</span>
              <span>₹{fareDetails.distanceFare}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Taxes & fees:</span>
              <span>₹{Math.round(fareDetails.taxes)}</span>
            </div>
            <div className="flex justify-between font-semibold pt-1 border-t">
              <span>Total:</span>
              <span>₹{fareDetails.total}</span>
            </div>
          </div>
        </div>
      )}

      {/* Customer Info */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium text-gray-900 mb-3">Contact Information</h3>
        <div className="space-y-1 text-sm">
          <div>Name: {data.customerInfo.name}</div>
          <div>Phone: {data.customerInfo.phone}</div>
          <div>Email: {data.customerInfo.email}</div>
        </div>
      </div>

      <button
        onClick={onConfirm}
        disabled={loading}
        className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Confirming Booking...' : 'Confirm Booking'}
      </button>
    </div>
  );
}

function SuccessStep({ bookingData }) {
  return (
    <div className="text-center space-y-6">
      <div className="text-6xl">✅</div>
      <div>
        <h2 className="text-2xl font-bold text-green-600 mb-2">Booking Confirmed!</h2>
        <p className="text-gray-600">Your taxi has been successfully booked</p>
      </div>
      
      <div className="bg-green-50 p-6 rounded-lg">
        <div className="text-sm text-gray-600 mb-1">Booking Reference</div>
        <div className="text-2xl font-bold text-green-600">{bookingData.bookingReference}</div>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Driver will arrive in:</span>
          <span className="font-medium">5-8 minutes</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Driver contact:</span>
          <span className="font-medium">+91 98765 43210</span>
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          href="/"
          className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center"
        >
          Back to Home
        </Link>
        <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Track Ride
        </button>
      </div>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <BookPageContent />
    </Suspense>
  );
}