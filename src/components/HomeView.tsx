/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from 'react';
import { 
  Car as CarIcon, 
  MapPin, 
  Calendar, 
  User, 
  Phone, 
  CheckCircle, 
  Star, 
  MessageSquare, 
  Shield, 
  Compass, 
  Clock, 
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Car, BookingState } from '../types';
import { CAR_FLEET } from '../data';

interface HomeViewProps {
  booking: BookingState;
  setBooking: React.Dispatch<React.SetStateAction<BookingState>>;
  selectedCar: Car;
  rentalDays: number;
  totalPrice: number;
  handleWhatsAppBooking: (e: React.FormEvent) => void;
  handleCallbackRequest: (e: React.FormEvent) => void;
  submittedRequest: boolean;
  setSubmittedRequest: (val: boolean) => void;
  onNavigate: (page: string) => void;
  onSelectCar: (carId: string) => void;
}

export default function HomeView({
  booking,
  setBooking,
  selectedCar,
  rentalDays,
  totalPrice,
  handleWhatsAppBooking,
  handleCallbackRequest,
  submittedRequest,
  setSubmittedRequest,
  onNavigate,
  onSelectCar
}: HomeViewProps) {
  
  // Highlighted popular cars for home page showcase
  const popularCars = useMemo(() => {
    return CAR_FLEET.filter(c => c.popular);
  }, []);

  return (
    <div className="space-y-24">
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 py-1.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider border border-emerald-500/20">
              <Star size={12} className="fill-emerald-400" />
              Rawalpindi's Ultimate Car Rental
            </div>
            
            <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight leading-none">
              Travel Rawalpindi <br />
              With <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300">Premium Chauffeurs</span>
            </h1>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              At <span className="text-white font-semibold">Transporter</span>, we make car rentals beautifully simple. Explore our curated fleet of top-tier, fully air-conditioned vehicles accompanied by professional, highly-trained local drivers who ensure a safe, on-time, and stress-free journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button 
                onClick={() => {
                  const el = document.getElementById('price-calculator');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 py-3.5 px-8 rounded-xl font-bold tracking-wide shadow-xl shadow-emerald-500/10 transition-all transform active:scale-95 cursor-pointer"
              >
                Calculate Trip Cost
              </button>
              <button 
                onClick={() => onNavigate('fleet')}
                className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 py-3.5 px-8 rounded-xl font-bold tracking-wide transition-all transform active:scale-95 cursor-pointer"
              >
                Explore Curated Fleet
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-4 text-slate-400 text-xs">
              <div className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-emerald-400" />
                No Hidden Surcharges
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-emerald-400" />
                Polite Local Drivers
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-emerald-400" />
                Sanitized Airconditioned Fleet
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-3xl border border-slate-800 shadow-2xl">
              <div className="absolute top-3 right-4 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border border-emerald-500/20">
                ⚡ Featured
              </div>
              
              <h4 className="font-display font-extrabold text-white text-lg mb-1">Toyota Land Cruiser V8</h4>
              <p className="text-xs text-slate-400 mb-4">Elite class VIP SUV available for tours & events</p>
              
              <div className="overflow-hidden rounded-2xl h-48 bg-slate-950 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800" 
                  alt="Toyota Land Cruiser V8" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur text-emerald-400 px-3 py-1 rounded-lg text-xs font-black">
                  PKR 28,000 / Day
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                  <p className="text-[10px] uppercase text-zinc-500">Seats</p>
                  <p className="text-xs font-semibold text-zinc-200">7 Seats</p>
                </div>
                <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                  <p className="text-zinc-500 text-[10px] uppercase">Engine</p>
                  <p className="text-zinc-200 font-semibold text-xs">4600cc V8</p>
                </div>
                <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                  <p className="text-[10px] uppercase text-zinc-500">Fuel</p>
                  <p className="text-xs font-semibold text-zinc-200">Petrol</p>
                </div>
              </div>

              <button 
                onClick={() => {
                  onSelectCar('landcruiser');
                }}
                className="w-full mt-4 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl text-xs font-bold transition-all text-center tracking-wide block cursor-pointer"
              >
                Select & Calculate Price
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 2. LIVE PRICE SIMULATOR / BOOKING ENGINE */}
      <section id="price-calculator" className="scroll-mt-24 pt-8">
        <div className="bg-slate-900/50 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl mx-auto text-center mb-8">
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Trip Configurator</span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">Live Cost Estimator & Booking Desk</h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Select any car to see the transparent rental price based on destination types. Chauffeur is included!
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!submittedRequest ? (
              <form onSubmit={handleWhatsAppBooking} className="space-y-6">
                
                {/* Car Selector Dropdown */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <CarIcon size={14} className="text-emerald-400" />
                    1. Select Vehicle Model
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <select 
                      value={booking.carId} 
                      onChange={(e) => setBooking(prev => ({ ...prev, carId: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-100 focus:outline-none focus:border-emerald-500 transition-all cursor-pointer"
                    >
                      {CAR_FLEET.map(car => (
                        <option key={car.id} value={car.id}>
                          {car.name} ({car.category}) {car.rate ? `- PKR ${car.rate.toLocaleString()}/day` : '- Rate on Request'}
                        </option>
                      ))}
                    </select>
                    <div className="bg-slate-950/80 px-4 py-3.5 rounded-xl border border-slate-850 flex items-center justify-between text-xs">
                      <span className="text-slate-500">Engine specs:</span>
                      <span className="text-emerald-400 font-bold">{selectedCar.engine} ({selectedCar.fuel}) • {selectedCar.transmission}</span>
                    </div>
                  </div>
                </div>

                {/* Destination Selector */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <MapPin size={14} className="text-emerald-400" />
                    2. Choose Destination / Route Scope
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'Rawalpindi', title: 'Local Rawalpindi/ISB', desc: 'Base Rate' },
                      { id: 'Outstation', title: 'Intercity Outstation', desc: 'Highway (+15%)' },
                      { id: 'Northern', title: 'Northern Areas', desc: 'Hilly Tour (+30%)' }
                    ].map(dest => (
                      <button
                        key={dest.id}
                        type="button"
                        onClick={() => setBooking(prev => ({ ...prev, destination: dest.id as any }))}
                        className={`p-3 rounded-xl text-left border transition-all flex flex-col justify-between cursor-pointer ${
                          booking.destination === dest.id 
                            ? 'bg-emerald-500/10 border-emerald-500 text-white' 
                            : 'bg-slate-950/40 border-slate-850 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <span className="text-xs font-bold block">{dest.title}</span>
                        <span className="text-[10px] text-slate-500 block mt-1">{dest.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dates Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1">
                      <Calendar size={13} className="text-emerald-400" />
                      Pick-up Date
                    </label>
                    <input 
                      type="date" 
                      value={booking.startDate}
                      onChange={(e) => setBooking(prev => ({ ...prev, startDate: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-emerald-500 text-slate-100"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1">
                      <Calendar size={13} className="text-emerald-400" />
                      Drop-off Date
                    </label>
                    <input 
                      type="date" 
                      value={booking.endDate}
                      onChange={(e) => setBooking(prev => ({ ...prev, endDate: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-emerald-500 text-slate-100"
                    />
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1">
                      <User size={13} className="text-emerald-400" />
                      Your Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. John"
                      value={booking.customerName}
                      onChange={(e) => setBooking(prev => ({ ...prev, customerName: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-emerald-500 placeholder-slate-700 text-slate-100"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1">
                      <Phone size={13} className="text-emerald-400" />
                      WhatsApp Contact *
                    </label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. +92 314 6002635"
                      value={booking.customerPhone}
                      onChange={(e) => setBooking(prev => ({ ...prev, customerPhone: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-emerald-500 placeholder-slate-700 text-slate-100"
                    />
                  </div>
                </div>

                {/* Estimate Cost Card */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-850 space-y-3">
                  <div className="flex justify-between items-center text-xs text-slate-400 border-b border-slate-900 pb-2.5">
                    <span>Base rate per day:</span>
                    <span className="font-bold text-slate-200">
                      {selectedCar.rate ? `PKR ${selectedCar.rate.toLocaleString()}` : 'Rate on Request'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-400 border-b border-slate-900 pb-2.5">
                    <span>Selected Duration:</span>
                    <span className="font-bold text-slate-200">{rentalDays} Day(s)</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-400 border-b border-slate-900 pb-2.5">
                    <span>Premium driver surcharge:</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle size={12} /> Included FREE
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm font-bold text-slate-200">Estimated Total Cost:</span>
                    <span className="text-2xl sm:text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                      {selectedCar.rate && totalPrice > 0 ? `PKR ${totalPrice.toLocaleString()}` : 'Quote on WhatsApp'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="submit"
                    className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-emerald-500/10 cursor-pointer"
                  >
                    <MessageSquare size={18} className="fill-slate-950" />
                    Book Instantly on WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={handleCallbackRequest}
                    className="bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-200 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <Phone size={18} />
                    Request Direct Call-Back
                  </button>
                </div>

              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                  <CheckCircle size={28} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl text-white">Your Request Has Been Prepared</h3>
                  <p className="text-slate-400 text-xs max-w-md mx-auto">
                    We have formatted your rental details. Click below to re-initiate WhatsApp or edit parameters.
                  </p>
                </div>
                <div className="flex justify-center gap-4 pt-2">
                  <button
                    onClick={handleWhatsAppBooking}
                    className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 px-6 rounded-xl text-xs transition-all cursor-pointer"
                  >
                    Send WhatsApp Text
                  </button>
                  <button
                    onClick={() => setSubmittedRequest(false)}
                    className="bg-slate-950 hover:bg-slate-900 text-slate-300 border border-slate-800 py-2.5 px-6 rounded-xl text-xs transition-all cursor-pointer"
                  >
                    Configure Trip Again
                  </button>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 3. POPULAR SHOWN CARS */}
      <section className="space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4">
          <div className="text-center sm:text-left space-y-1">
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Popular Choices</span>
            <h2 className="font-display font-black text-3xl text-white">Most Booked Cars in Rawalpindi</h2>
          </div>
          <button 
            onClick={() => onNavigate('fleet')}
            className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 group cursor-pointer"
          >
            Explore Complete Fleet 
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularCars.slice(0, 3).map(car => (
            <div 
              key={car.id} 
              className="bg-slate-900/30 border border-slate-850 rounded-3xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-48 bg-slate-950 overflow-hidden">
                <span className="absolute top-3 left-3 bg-emerald-500 text-slate-950 text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full z-10 shadow-lg">
                  Popular
                </span>
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-5 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">{car.category}</span>
                    <h4 className="font-display font-bold text-white text-lg mt-0.5">{car.name}</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] block text-slate-500 font-bold uppercase">Per Day</span>
                    <span className="text-base font-black text-emerald-400">
                      {car.rate ? `PKR ${car.rate.toLocaleString()}` : 'On Request'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400">
                  <div className="bg-slate-950/50 p-2 rounded-xl border border-slate-900">
                    Engine: {car.engine}
                  </div>
                  <div className="bg-slate-950/50 p-2 rounded-xl border border-slate-900">
                    Seats: {car.seats} Max
                  </div>
                </div>

                <button 
                  onClick={() => onSelectCar(car.id)}
                  className="w-full bg-slate-950 hover:bg-emerald-500 text-slate-300 hover:text-slate-950 border border-slate-800 hover:border-emerald-500 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <CarIcon size={14} />
                  Book with Chauffeur
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CHAUFFEUR BANNER AD */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-950 rounded-3xl border border-slate-800 p-8 sm:p-12 relative overflow-hidden">
        <div className="absolute top-1/2 right-12 -translate-y-1/2 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-2xl space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 bg-emerald-500/15 text-emerald-400 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border border-emerald-500/25">
            👑 Signature Guarantee
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white">Chauffeur Support Included In Every Rental</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Unlike standard self-drive rentals that involve heavy paperwork, deposit blocks, and high liabilities, we provide professional, licensed chauffeurs. They handle fuel routes and city traffic so you can enjoy standard VIP treatment at no extra charge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center sm:justify-start">
            <button 
              onClick={() => onNavigate('services')}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs py-3 px-6 rounded-xl transition-all cursor-pointer"
            >
              Learn About Service Scope
            </button>
            <a 
              href="tel:+923146002635"
              className="bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-200 font-bold text-xs py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              <Phone size={14} />
              Call Support Desk
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
