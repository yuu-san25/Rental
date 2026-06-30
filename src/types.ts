/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CarCategory = 'Economy' | 'Sedan' | 'SUV' | 'Luxury' | 'Van' | 'Pickup';

export interface Car {
  id: string;
  name: string;
  category: CarCategory;
  rate?: number; // in PKR, optional
  description: string; // custom description for search and display
  image: string;
  engine: string; // e.g. "660cc", "1500cc"
  fuel: string; // e.g. "Petrol", "Diesel", "Hybrid"
  seats: number;
  transmission: 'Automatic' | 'Manual';
  chauffeur: boolean; // true if driver is always included/mandated
  popular?: boolean;
}

export interface BookingState {
  carId: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  destination: 'Rawalpindi' | 'Outstation' | 'Northern';
  customerName: string;
  customerPhone: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
