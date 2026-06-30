/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Car, Review, FAQItem } from './types';

export const CAR_FLEET: Car[] = [
  {
    id: 'hondacity',
    name: 'Honda City',
    category: 'Economy',
    rate: 6000,
    description: 'Honda City available for rent in Islamabad, Rawalpindi, and Lahore – clean white sedan parked indoors, ideal for comfortable city travel and business trips.',
    image: 'https://i.ibb.co/HDXy5W1L/Honda-City.webp',
    engine: '1300cc',
    fuel: 'Petrol',
    seats: 4,
    transmission: 'Automatic',
    chauffeur: true,
    popular: true
  },
  {
    id: 'corolla',
    name: 'Toyota GLI',
    category: 'Sedan',
    rate: 6000,
    description: 'Toyota Corolla GLi available for rent in Islamabad, Rawalpindi, and Lahore – white sedan parked on green lawn, perfect for comfortable family trips and daily travel.',
    image: 'https://i.ibb.co/twjx0Q1h/Toyota-GLI.webp',
    engine: '1300cc',
    fuel: 'Petrol',
    seats: 4,
    transmission: 'Automatic',
    chauffeur: true,
    popular: true
  },
  {
    id: 'civic',
    name: 'Honda Civic',
    category: 'Sedan',
    rate: 13000,
    description: 'Honda Civic available for rent in Islamabad, Rawalpindi, and Lahore – stylish white sedan with modern design, ideal for executive travel and comfortable city rides.',
    image: 'https://i.ibb.co/PG7HD3ds/Honda-Civic.webp',
    engine: '1500cc Turbo',
    fuel: 'Petrol',
    seats: 4,
    transmission: 'Automatic',
    chauffeur: true,
    popular: true
  },
  {
    id: 'grande',
    name: 'Toyota Grande',
    category: 'Sedan',
    rate: 8000,
    description: 'Toyota Corolla Grande white color luxury sedan for rent in Islamabad, Rawalpindi, and Lahore with modern features and comfortable drive',
    image: 'https://i.ibb.co/M5RCVn0n/Toyota-Grande.webp',
    engine: '1800cc',
    fuel: 'Petrol',
    seats: 4,
    transmission: 'Automatic',
    chauffeur: true
  },
  {
    id: 'fortuner',
    name: 'Toyota Fortuner',
    category: 'SUV',
    rate: 16000,
    description: 'Toyota Fortuner available for car rental service in Islamabad, Rawalpindi, and Lahore, shown as a stylish and comfortable SUV suitable for city travel and long trips.',
    image: 'https://i.ibb.co/Hf9n4FkC/Toyota-Fortuner.webp',
    engine: '2700cc',
    fuel: 'Petrol',
    seats: 7,
    transmission: 'Automatic',
    chauffeur: true,
    popular: true
  },
  {
    id: 'prado',
    name: 'Toyota Prado',
    category: 'SUV',
    rate: 16000,
    description: 'Toyota Land Cruiser Prado available for premium car rental services in Islamabad, Rawalpindi, and Lahore, featuring a luxurious black exterior ideal for comfortable city rides and long-distance travel.',
    image: 'https://i.ibb.co/21CMqHN4/Toyota-Prado.webp',
    engine: '2700cc',
    fuel: 'Petrol',
    seats: 7,
    transmission: 'Automatic',
    chauffeur: true
  },
  {
    id: 'landcruiser',
    name: 'Toyota Land Cruiser',
    category: 'SUV',
    rate: 25000,
    description: 'Toyota Land Cruiser for rent in Islamabad, Rawalpindi, and Lahore, featuring a luxurious black exterior parked at a modern house, perfect for comfortable city travel and premium rental experience.',
    image: 'https://i.ibb.co/Z18XNLPd/Toyota-land-cruiser-for-rent.webp',
    engine: '4600cc V8',
    fuel: 'Petrol',
    seats: 7,
    transmission: 'Automatic',
    chauffeur: true,
    popular: true
  },
  {
    id: 'sonata',
    name: 'Hyundai Sonata',
    category: 'Sedan',
    description: 'Front view of white Hyundai Sonata luxury sedan for rent in Islamabad, Rawalpindi and Lahore.',
    image: 'https://i.ibb.co/sdjXYbT2/Hyundai-Sonata.webp',
    engine: '2000cc',
    fuel: 'Petrol',
    seats: 4,
    transmission: 'Automatic',
    chauffeur: true
  },
  {
    id: 'audi',
    name: 'Audi',
    category: 'Luxury',
    description: 'Front view of white Audi A6 luxury sedan available for rent in Islamabad Rawalpindi and Lahore.',
    image: 'https://i.ibb.co/3m4FNjXT/Audi-A6.webp',
    engine: '2000cc Turbo',
    fuel: 'Petrol',
    seats: 4,
    transmission: 'Automatic',
    chauffeur: true,
    popular: true
  },
  {
    id: 'panamera',
    name: 'Porsche Panamera',
    category: 'Luxury',
    description: 'White Porsche Panamera luxury car decorated for wedding, available for rent in Islamabad Rawalpindi and Lahore.',
    image: 'https://i.ibb.co/mFX8YJjm/Porsche-Panamera.webp',
    engine: '3000cc Turbo',
    fuel: 'Petrol',
    seats: 4,
    transmission: 'Automatic',
    chauffeur: true
  },
  {
    id: 'maybach',
    name: 'Mercedes Maybach',
    category: 'Luxury',
    description: 'Luxury Mercedes-Maybach S-Class parked on road, premium white and black exterior, ideal for luxury car rental services in Islamabad, Rawalpindi, and Lahore.',
    image: 'https://i.ibb.co/99YfR2hg/Mercedes-S680-Maybach.webp',
    engine: '6000cc V12',
    fuel: 'Petrol',
    seats: 4,
    transmission: 'Automatic',
    chauffeur: true
  },
  {
    id: 'mercedese300',
    name: 'Mercedes E300',
    category: 'Luxury',
    description: 'Black Mercedes-Benz E300 parked in a stylish setting, showcasing premium design and comfort, perfect for luxury car rental services in Islamabad, Rawalpindi, and Lahore.',
    image: 'https://i.ibb.co/BHCLh9WT/Mercedes-E300.webp',
    engine: '2000cc Turbo',
    fuel: 'Petrol',
    seats: 4,
    transmission: 'Automatic',
    chauffeur: true
  },
  {
    id: 'mercedesc180',
    name: 'Mercedes C180',
    category: 'Luxury',
    description: 'White Mercedes-Benz C180 parked outdoors with sleek design and modern headlights, perfect choice for comfortable and stylish car rental services in Islamabad, Rawalpindi, and Lahore.',
    image: 'https://i.ibb.co/Y9pdPLL/Mercedes-C180.webp',
    engine: '1600cc Turbo',
    fuel: 'Petrol',
    seats: 4,
    transmission: 'Automatic',
    chauffeur: true
  },
  {
    id: 'lexus',
    name: 'Lexus LX570',
    category: 'Luxury',
    description: 'Stylish black Lexus LX570 SUV for rent in Islamabad Rawalpindi Lahore with premium features',
    image: 'https://i.ibb.co/0R5MYCNG/Lexus-LX570.webp',
    engine: '5700cc V8',
    fuel: 'Petrol',
    seats: 7,
    transmission: 'Automatic',
    chauffeur: true
  },
  {
    id: 'bmw',
    name: 'BMW',
    category: 'Luxury',
    description: 'Front view of BMW i8 supercar with butterfly doors open for rent in Islamabad, Rawalpindi and Lahore',
    image: 'https://i.ibb.co/5x48csBM/BMW-I8.webp',
    engine: '1500cc Hybrid',
    fuel: 'Hybrid',
    seats: 4,
    transmission: 'Automatic',
    chauffeur: true
  },
  {
    id: 'gwagon',
    name: 'AMG G Wagon',
    category: 'Luxury',
    description: 'AMG G63 G Wagon parked on road for premium car rental services in Islamabad Rawalpindi Lahore',
    image: 'https://i.ibb.co/cSFKgqtb/AMG-63-G-Wagon.webp',
    rate: 45000,
    engine: '4000cc V8',
    fuel: 'Petrol',
    seats: 4,
    transmission: 'Automatic',
    chauffeur: true
  },
  {
    id: 'vogue',
    name: 'Range Rover Vogue',
    category: 'Luxury',
    description: 'White Range Rover Vogue parked outside a hotel, luxury car rental service in Islamabad Rawalpindi and Lahore',
    image: 'https://i.ibb.co/Y4M6JFYd/Range-Rover-Vogue.webp',
    engine: '3000cc TDV6',
    fuel: 'Diesel',
    seats: 7,
    transmission: 'Automatic',
    chauffeur: true
  },
  {
    id: 'rrsport',
    name: 'Range Rover Sport',
    category: 'Luxury',
    description: 'Black Range Rover Sport parked on roadside, luxury car rental service in Islamabad Rawalpindi and Lahore',
    image: 'https://i.ibb.co/Kz5zK75C/Range-Rover-Sport-1.jpg',
    engine: '3000cc V6',
    fuel: 'Petrol',
    seats: 4,
    transmission: 'Automatic',
    chauffeur: true
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Husnain Mirza',
    role: 'Local Resident',
    rating: 5,
    comment: 'Excellent car rental service in Rawalpindi, hired a car for a month it was the best experience. Staff is very cooperative and rates are good compared to others.'
  },
  {
    id: '2',
    name: 'Haider Seikh',
    role: 'Frequent Traveler',
    rating: 5,
    comment: 'Reliable and good service. Prices are very competitive, have very professional drivers and easy to book in advance. I recommend to everyone.'
  },
  {
    id: '3',
    name: 'Muhammad Anns',
    role: 'Business Consultant',
    rating: 5,
    comment: 'Excellent car services provider in Pakistan, It’s really very reasonable and comfortable to travel, Drivers of the company are also very well-mannered and skillful.'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How can I book a car in Rawalpindi with Transporter?',
    answer: 'Booking is very simple. Just call us or send a message on WhatsApp with your location, date, and travel plan. Our team will confirm your booking quickly, and your car will arrive on time.'
  },
  {
    question: 'Do you provide cars with drivers in Rawalpindi?',
    answer: 'Yes, all our cars come with professional drivers. We do not offer self-drive services because we focus on giving you a safe, relaxed, and hassle-free experience.'
  },
  {
    question: 'What types of cars are available for rent?',
    answer: 'We offer a wide range of vehicles, including economy cars, sedans, luxury cars, SUVs, and family vehicles. You can choose what fits your budget and travel needs.'
  },
  {
    question: 'Do you offer airport pickup and drop-off services?',
    answer: 'Yes, we provide reliable airport transfer services. Our drivers are always on time, so you never have to worry about delays.'
  },
  {
    question: 'What are your car rental charges in Rawalpindi?',
    answer: 'Our rates depend on the car type, distance, and duration. We always keep our pricing clear, affordable, and without hidden charges.'
  },
  {
    question: 'Can I book a car for full day or multiple days?',
    answer: 'Yes, you can book for a few hours, full day, or even weekly and monthly plans based on your requirement.'
  },
  {
    question: 'Do you provide cars for weddings and events?',
    answer: 'Yes, we offer luxury and premium cars for weddings, corporate events, and special occasions to make your day more comfortable and memorable.'
  },
  {
    question: 'Can I book a car for outstation trips from Rawalpindi?',
    answer: 'Yes, we provide cars with drivers for trips to Murree, Naran, Kaghan, Lahore, and other cities with complete comfort and safety.'
  },
  {
    question: 'Are your drivers experienced and reliable?',
    answer: 'Yes, our drivers are trained, polite, and experienced. They know the city routes well and always ensure a safe and smooth journey.'
  },
  {
    question: 'Are there any hidden charges in your service?',
    answer: 'No, we believe in honest pricing. Everything is clearly discussed before your trip, so you don’t face any surprises.'
  }
];
