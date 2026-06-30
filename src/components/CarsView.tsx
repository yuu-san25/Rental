/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Car as CarIcon, 
  User, 
  Shield, 
  Compass, 
  Clock, 
  X, 
  CheckCircle,
  TrendingUp,
  SlidersHorizontal,
  Phone,
  MessageSquare
} from 'lucide-react';
import { CAR_FLEET } from '../data';
import { Car, CarCategory } from '../types';

interface CarsViewProps {
  onSelectCar: (carId: string) => void;
  bookingCarId: string;
}

export default function CarsView({ onSelectCar, bookingCarId }: CarsViewProps) {
  const [activeCategory, setActiveCategory] = useState<CarCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [transmissionFilter, setTransmissionFilter] = useState<'All' | 'Automatic' | 'Manual'>('All');

  // Filtered cars list
  const filteredCars = useMemo(() => {
    return CAR_FLEET.filter(car => {
      const matchesCategory = activeCategory === 'All' || car.category === activeCategory;
      const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            car.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            car.engine.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTransmission = transmissionFilter === 'All' || car.transmission === transmissionFilter;
      return matchesCategory && matchesSearch && matchesTransmission;
    });
  }, [activeCategory, searchQuery, transmissionFilter]);

  return (
    <div className="space-y-12">
      
      {/* Header section with description */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Verified Transporter Fleet</span>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white">Explore Our High-Performance Fleets</h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          From practical compact hatchbacks for busy downtown streets to luxurious VIP sedans and robust off-road SUVs. We offer clean, rigorously inspected cars that guarantee comfortable travel.
        </p>
      </div>

      {/* Control panel / Filters Bar */}
      <div className="bg-slate-900/40 p-6 rounded-3xl border border-slate-800 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          
          {/* Live Search bar */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="Search make or model (e.g. Civic, Prado, Sonata)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-850 focus:border-emerald-500 rounded-xl pl-12 pr-4 py-3.5 text-sm focus:outline-none text-slate-100 placeholder-slate-600 transition-all"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">
                <X size={16} />
              </button>
            )}
          </div>

          {/* Additional Quick Filter toggles */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <SlidersHorizontal size={14} className="text-slate-500 hidden sm:inline" />
            <span className="text-xs text-slate-400 hidden sm:inline font-bold">Transmission:</span>
            <div className="bg-slate-950 p-1.5 rounded-xl border border-slate-850 flex gap-1 w-full sm:w-auto">
              {(['All', 'Automatic', 'Manual'] as const).map(trans => (
                <button
                  key={trans}
                  onClick={() => setTransmissionFilter(trans)}
                  className={`text-[10px] sm:text-xs font-bold py-1.5 px-3 rounded-lg transition-all cursor-pointer ${
                    transmissionFilter === trans 
                      ? 'bg-emerald-500 text-slate-950' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {trans}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Category filtering tags */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-850">
          {(['All', 'Economy', 'Sedan', 'SUV', 'Luxury', 'Van', 'Pickup'] as const).map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`py-2 px-4 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer ${
                activeCategory === category 
                  ? 'bg-emerald-500/10 border border-emerald-500 text-emerald-400' 
                  : 'bg-slate-950/40 border border-slate-850 text-slate-400 hover:border-slate-700'
              }`}
            >
              {category} {category !== 'All' ? `(${CAR_FLEET.filter(c => c.category === category).length})` : `(${CAR_FLEET.length})`}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCars.map(car => (
          <div 
            key={car.id}
            className={`bg-slate-900/30 border rounded-3xl overflow-hidden hover:border-slate-600 transition-all duration-300 flex flex-col justify-between group ${
              bookingCarId === car.id ? 'border-emerald-500/50 shadow-[0_4px_20px_rgba(16,185,129,0.05)]' : 'border-slate-850'
            }`}
          >
            {/* Aspect card image */}
            <div className="relative h-56 bg-slate-950 overflow-hidden">
              {car.popular && (
                <span className="absolute top-3 left-3 bg-emerald-500 text-slate-950 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full z-10 shadow-lg">
                  Most Booked
                </span>
              )}
              <img 
                src={car.image} 
                alt={car.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
            </div>

            {/* Spec details content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                {/* Description */}
                <p className="text-slate-400 text-xs italic leading-relaxed min-h-[40px]">
                  {car.description}
                </p>

                {/* Car name and standard condition subtitle */}
                <div>
                  <h4 className="font-display font-black text-white text-xl">{car.name}</h4>
                  <p className="text-emerald-400 text-xs font-semibold mt-0.5">All models in best condition.</p>
                </div>

                {/* Bullet Specifications List */}
                <ul className="space-y-1.5 pt-3 border-t border-slate-850 text-xs text-slate-300 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400 font-black">•</span>
                    <span>{car.seats}-seater</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400 font-black">•</span>
                    <span>With Driver</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400 font-black">•</span>
                    <span>Without Fuel</span>
                  </li>
                  {car.rate ? (
                    <li className="flex items-center gap-2 text-emerald-400 font-bold">
                      <span className="text-emerald-400 font-black">•</span>
                      <span>From {car.rate.toLocaleString()}/day</span>
                    </li>
                  ) : null}
                </ul>
              </div>

              {/* Action Buttons: Call & WhatsApp */}
              <div className="space-y-2 pt-2">
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href="tel:+923146002635"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 font-bold text-xs tracking-wider transition-all cursor-pointer"
                  >
                    <Phone size={14} className="text-emerald-400" />
                    Call
                  </a>
                  <a 
                    href={`https://wa.me/923146002635?text=${encodeURIComponent(`Hi Transporter Rent a Car! I'm interested in renting the ${car.name}. Can you please confirm its availability?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs tracking-wider transition-all cursor-pointer shadow-lg shadow-emerald-500/10"
                  >
                    <MessageSquare size={14} />
                    WhatsApp
                  </a>
                </div>

                {/* Interactive booking select button */}
                <button
                  onClick={() => onSelectCar(car.id)}
                  className={`w-full font-bold py-2.5 rounded-xl text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer border ${
                    bookingCarId === car.id 
                      ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400' 
                      : 'bg-transparent border-slate-850 hover:border-slate-700 text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <CarIcon size={12} />
                  {bookingCarId === car.id ? 'Selected for Online Booking' : 'Select for Booking Form'}
                </button>
              </div>
            </div>

          </div>
        ))}

        {filteredCars.length === 0 && (
          <div className="col-span-full py-16 text-center bg-slate-900/10 rounded-3xl border border-slate-800">
            <p className="text-slate-400 text-sm">No vehicles match your refined query filters. Please try search terms like "Honda" or "Toyota".</p>
          </div>
        )}
      </div>

    </div>
  );
}
