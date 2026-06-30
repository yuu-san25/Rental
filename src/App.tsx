/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useRef } from 'react';
import { 
  Car as CarIcon, 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  Star, 
  CheckCircle,
  Clock,
  MapPin,
  Mail,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Modular view components
import HomeView from './components/HomeView';
import CarsView from './components/CarsView';
import AboutView from './components/AboutView';
import LocationsView from './components/LocationsView';
import BlogView from './components/BlogView';
import ContactView from './components/ContactView';
import ServicesView from './components/ServicesView';

import { CAR_FLEET } from './data';
import { BookingState, Car } from './types';

export default function App() {
  // Simple state router: 'home' | 'fleet' | 'about' | 'services' | 'locations' | 'blog' | 'contact'
  const [activePage, setActivePage] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  // Global Booking Simulator State
  const [booking, setBooking] = useState<BookingState>({
    carId: CAR_FLEET[0]?.id || 'corolla',
    startDate: new Date().toISOString().split('T')[0],
    startTime: '10:00',
    endDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0], // 3 days default
    endTime: '10:00',
    destination: 'Rawalpindi',
    customerName: '',
    customerPhone: ''
  });

  const [submittedRequest, setSubmittedRequest] = useState(false);

  // Global Callback form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Helper notification dispatcher
  const triggerNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 4500);
  };

  const selectedCar = useMemo(() => {
    return CAR_FLEET.find(c => c.id === booking.carId) || CAR_FLEET[0];
  }, [booking.carId]);

  const rentalDays = useMemo(() => {
    try {
      const start = new Date(`${booking.startDate}T${booking.startTime}`);
      const end = new Date(`${booking.endDate}T${booking.endTime}`);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1;
    } catch {
      return 1;
    }
  }, [booking.startDate, booking.startTime, booking.endDate, booking.endTime]);

  const totalPrice = useMemo(() => {
    if (!selectedCar) return 0;
    if (!selectedCar.rate) return 0;
    let rateModifier = 1;
    if (booking.destination === 'Outstation') {
      rateModifier = 1.15;
    } else if (booking.destination === 'Northern') {
      rateModifier = 1.30;
    }
    return Math.round(selectedCar.rate * rentalDays * rateModifier);
  }, [selectedCar, rentalDays, booking.destination]);

  // WhatsApp sender trigger
  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!booking.customerName || !booking.customerPhone) {
      triggerNotification('⚠️ Please enter your Name and WhatsApp phone to prepare order.');
      return;
    }

    const costDisplay = selectedCar.rate && totalPrice > 0 ? `PKR ${totalPrice.toLocaleString()}` : 'Quote requested / On request';

    const textMsg = `Hi Transporter Rent a Car!
I would like to request a reservation with chauffeur:
*Vehicle Selected:* ${selectedCar.name}
*Pick-up Date:* ${booking.startDate} at ${booking.startTime}
*Drop-off Date:* ${booking.endDate} at ${booking.endTime}
*Duration scope:* ${rentalDays} Day(s)
*Route scope:* ${booking.destination === 'Rawalpindi' ? 'Local Rawalpindi/Islamabad' : booking.destination === 'Outstation' ? 'Intercity Outstation' : 'Northern Areas tour'}
*Estimated Cost:* ${costDisplay}
*Customer Name:* ${booking.customerName}
*Contact Phone:* ${booking.customerPhone}

Please confirm availability!`;

    window.open(`https://wa.me/923146002635?text=${encodeURIComponent(textMsg)}`, '_blank');
    setSubmittedRequest(true);
    triggerNotification('🎉 Redirecting to WhatsApp with your details...');
  };

  const handleCallbackRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!booking.customerName || !booking.customerPhone) {
      triggerNotification('⚠️ Please specify your Name and Phone to schedule a callback.');
      return;
    }
    setSubmittedRequest(true);
    triggerNotification('📞 Callback request registered! An agent will call you shortly.');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.message || !contactForm.phone) {
      triggerNotification('⚠️ Please complete all required inputs.');
      return;
    }
    setContactSubmitted(true);
    triggerNotification('✉️ Message submitted! Our help desk will connect soon.');
  };

  const handleSelectCarFromFleet = (carId: string) => {
    setBooking(prev => ({ ...prev, carId }));
    setActivePage('home');
    setTimeout(() => {
      const el = document.getElementById('price-calculator');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    const carName = CAR_FLEET.find(c => c.id === carId)?.name || 'Car';
    triggerNotification(`⚡ Loaded ${carName} into booking desk!`);
  };

  const handleNavigate = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased overflow-x-hidden relative selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[800px] right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating active toast message */}
      <AnimatePresence>
        {notification && (
          <motion.div 
            initial={{ opacity: 0, y: -50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -50, x: '-50%' }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-emerald-500 text-slate-950 px-6 py-3.5 rounded-full font-bold shadow-[0_12px_40px_rgba(16,185,129,0.25)] flex items-center gap-2 border border-emerald-300 text-xs sm:text-sm"
          >
            <CheckCircle size={16} />
            {notification}
          </motion.div>
        )}
      </AnimatePresence>

      {/* STICKY MAIN NAVBAR */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-900/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Brand */}
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => handleNavigate('home')}>
              <span className="p-2.5 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl shadow-lg shadow-emerald-500/20 text-slate-950">
                <CarIcon size={22} className="stroke-[2.5]" />
              </span>
              <div>
                <span className="font-display font-black text-xl tracking-wider text-white">TRANSPORTER</span>
                <span className="block text-[9px] tracking-widest text-emerald-400 font-bold uppercase">Premium Chauffeurs</span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6">
              {[
                { id: 'home', label: 'Home' },
                { id: 'fleet', label: 'Our Fleet' },
                { id: 'services', label: 'Services' },
                { id: 'about', label: 'About Us' },
                { id: 'locations', label: 'Locations' },
                { id: 'blog', label: 'Guides & Blog' },
                { id: 'contact', label: 'Contact Us' }
              ].map(link => (
                <button
                  key={link.id}
                  onClick={() => handleNavigate(link.id)}
                  className={`text-xs font-bold tracking-wide transition-colors cursor-pointer ${
                    activePage === link.id ? 'text-emerald-400 font-extrabold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Support hotline & Fast Calculator Access */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+923146002635" className="flex items-center gap-1.5 text-xs font-bold text-slate-300 bg-slate-900 border border-slate-800 py-2.5 px-4 rounded-xl hover:text-emerald-400 hover:border-emerald-500/20 transition-all">
                <Phone size={14} />
                +92 314 6002635
              </a>
              <button 
                onClick={() => {
                  handleNavigate('home');
                  setTimeout(() => {
                    const el = document.getElementById('price-calculator');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                }}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 py-2.5 px-5 rounded-xl font-extrabold text-xs tracking-wider shadow-lg shadow-emerald-500/10 transition-all active:scale-[0.98] cursor-pointer"
              >
                Cost Calculator
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-300 hover:text-emerald-400 transition-colors">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-950 border-b border-slate-900 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'fleet', label: 'Our Fleet' },
                  { id: 'services', label: 'Services' },
                  { id: 'about', label: 'About Us' },
                  { id: 'locations', label: 'Locations' },
                  { id: 'blog', label: 'Guides & Blog' },
                  { id: 'contact', label: 'Contact Us' }
                ].map(link => (
                  <button 
                    key={link.id}
                    onClick={() => handleNavigate(link.id)} 
                    className={`block w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold hover:bg-slate-900 transition-colors ${
                      activePage === link.id ? 'text-emerald-400 bg-slate-900/40' : 'text-slate-300'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                
                <div className="pt-4 border-t border-slate-900 flex flex-col gap-3">
                  <a href="tel:+923146002635" className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 rounded-xl text-xs font-bold border border-slate-800 text-slate-300">
                    <Phone size={14} />
                    Call Hotline: +92 314 6002635
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* MAIN RENDER ENGINE */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-[60vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            {activePage === 'home' && (
              <HomeView 
                booking={booking}
                setBooking={setBooking}
                selectedCar={selectedCar}
                rentalDays={rentalDays}
                totalPrice={totalPrice}
                handleWhatsAppBooking={handleWhatsAppBooking}
                handleCallbackRequest={handleCallbackRequest}
                submittedRequest={submittedRequest}
                setSubmittedRequest={setSubmittedRequest}
                onNavigate={handleNavigate}
                onSelectCar={handleSelectCarFromFleet}
              />
            )}

            {activePage === 'fleet' && (
              <CarsView 
                onSelectCar={handleSelectCarFromFleet}
                bookingCarId={booking.carId}
              />
            )}

            {activePage === 'services' && (
              <ServicesView 
                onNavigate={handleNavigate}
              />
            )}

            {activePage === 'about' && (
              <AboutView />
            )}

            {activePage === 'locations' && (
              <LocationsView 
                onSelectCar={handleSelectCarFromFleet}
              />
            )}

            {activePage === 'blog' && (
              <BlogView />
            )}

            {activePage === 'contact' && (
              <ContactView 
                contactForm={contactForm}
                setContactForm={setContactForm}
                contactSubmitted={contactSubmitted}
                setContactSubmitted={setContactSubmitted}
                onContactSubmit={handleContactSubmit}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* PREMIUM HIGH-CONTRAST FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900/80 pt-16 pb-8 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-900 pb-12">
            
            {/* Column 1: Brand Info */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigate('home')}>
                <span className="p-2 bg-emerald-500 rounded-lg text-slate-950">
                  <CarIcon size={18} className="stroke-[2.5]" />
                </span>
                <span className="font-display font-black text-lg tracking-wider text-white">TRANSPORTER</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Your trusted partner for car rentals with premium chauffeurs in Rawalpindi, Islamabad, and Lahore. We offer customized packages, pristine fleets, and absolute reliability.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span className="text-slate-500 text-[10px] uppercase font-bold">24 Hours Hotline:</span>
                <a href="tel:+923146002635" className="text-emerald-400 font-bold text-xs hover:underline">+92 314 6002635</a>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="md:col-span-3 space-y-3">
              <h5 className="font-display font-extrabold text-white text-xs uppercase tracking-widest text-slate-300">Quick Navigation</h5>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><button onClick={() => handleNavigate('home')} className="hover:text-emerald-400 transition-colors">Home Desktop</button></li>
                <li><button onClick={() => handleNavigate('fleet')} className="hover:text-emerald-400 transition-colors">Our Fleets</button></li>
                <li><button onClick={() => handleNavigate('services')} className="hover:text-emerald-400 transition-colors">Signature Services</button></li>
                <li><button onClick={() => handleNavigate('about')} className="hover:text-emerald-400 transition-colors">Our Legacy</button></li>
                <li><button onClick={() => handleNavigate('locations')} className="hover:text-emerald-400 transition-colors">Active Desks</button></li>
              </ul>
            </div>

            {/* Column 3: Contact Coordinates */}
            <div className="md:col-span-4 space-y-3">
              <h5 className="font-display font-extrabold text-white text-xs uppercase tracking-widest text-slate-300">Operational Office</h5>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-start gap-1.5 text-slate-400">
                  <span className="text-slate-500 font-bold">HQ:</span>
                  <span>SHOP # PD 434, Double Road, Rawalpindi, Pakistan</span>
                </li>
                <li className="flex items-center gap-1.5 text-slate-400">
                  <span className="text-slate-500 font-bold">WhatsApp:</span>
                  <a href="https://wa.me/923146002635" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">+92 314 6002635</a>
                </li>
                <li className="flex items-center gap-1.5 text-slate-400">
                  <span className="text-slate-500 font-bold">Email:</span>
                  <a href="mailto:support@transporter.biz" className="hover:text-emerald-400 transition-colors">support@transporter.biz</a>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright details */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[11px] text-slate-500 gap-4">
            <p>© 2026 TRANSPORTER. All rights reserved. Developed & SEO by Global Rank Web.</p>
            <div className="flex gap-4">
              <button onClick={() => handleNavigate('about')} className="hover:underline">Terms of Service</button>
              <button onClick={() => handleNavigate('contact')} className="hover:underline">Privacy Policy</button>
            </div>
          </div>
        </div>
      </footer>

      {/* FIXED MOBILE FOOTER CALL TO ACTION */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-slate-950/90 backdrop-blur border-t border-slate-900 px-4 py-3.5 flex sm:hidden gap-3 shadow-[0_-8px_30px_rgba(0,0,0,0.5)]">
        <a 
          href="tel:+923146002635"
          className="flex-1 bg-slate-900 border border-slate-800 text-slate-200 font-black text-xs py-3 rounded-xl flex items-center justify-center gap-2"
        >
          <Phone size={14} />
          Call Hotline
        </a>
        <a 
          href="https://wa.me/923146002635"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-500 text-slate-950 font-black text-xs py-3 rounded-xl flex items-center justify-center gap-2"
        >
          <MessageSquare size={14} className="fill-slate-950 stroke-none" />
          WhatsApp
        </a>
      </div>

    </div>
  );
}
