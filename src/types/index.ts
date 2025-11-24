// Common types for the taxi booking system
export interface Vehicle {
  id: number;
  name: string;
  type: string;
  capacity: string;
  features: string[];
  basePrice: number;
  perKm: number;
  image: string;
  rating: number;
  eta: string;
}

export interface BookingData {
  pickup?: string;
  destination?: string;
  date?: string;
  time?: string;
  serviceType?: string;
  selectedVehicle?: Vehicle;
  customerInfo?: CustomerInfo;
  paymentMethod?: string;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  email: string;
}

export interface FareDetails {
  baseFare: number;
  distanceFare: number;
  taxes: number;
  total: number;
  distance: number;
}

export interface Booking {
  id: number;
  reference: string;
  customerName: string;
  pickup: string;
  destination: string;
  fare: number;
  status: 'pending' | 'ongoing' | 'completed';
  date: string;
  time: string;
  driver?: string;
  vehicle?: string;
  rating?: number;
}

export interface Stats {
  todayBookings: number;
  totalBookings: number;
  todayRevenue: number;
  totalRevenue: number;
  activeDrivers: number;
  totalDrivers: number;
  completedRides: number;
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  memberSince: string;
  totalRides: number;
  totalSpent: number;
  rating: number;
}

export interface VehicleFleet {
  id: number;
  name: string;
  type: string;
  licensePlate: string;
  driver: string;
  status: 'available' | 'busy' | 'maintenance';
  rating: number;
  totalRides: number;
}

// Event handler types
export type FormSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => void;
export type InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type TextAreaChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => void;