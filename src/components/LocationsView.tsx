/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink, 
  Plane, 
  Map,
  Compass,
  CheckCircle
} from 'lucide-react';

interface LocationsViewProps {
  onSelectCar: (carId: string) => void;
}

export default function LocationsView({ onSelectCar }: LocationsViewProps) {
  const locations = [
    {
      city: 'Rawalpindi (Head Office)',
      address: 'Shop # PD 434, Double Road, Rawalpindi, Pakistan',
      phone: '+92 314 6002635',
      hours: 'Open 24 Hours',
      features: ['Main Fleet Yard', 'Quick Dispatch Desk', 'VIP SUV Specialist', 'Airport Route Center'],
      gmaps: 'https://maps.google.com/?q=SHOP+PD+434+DOUBLE+ROAD+Rawalpindi'
    },
    {
      city: 'Islamabad Branch Desk',
      address: 'F-10 Markaz, Islamabad, Pakistan',
      phone: '+92 333 6255477',
      hours: 'Open 24 Hours',
      features: ['Executive Luxury Sedans', 'Diplomatic Escort Coordination', 'Airport Express desks'],
      gmaps: 'https://maps.google.com/?q=F-10+Markaz+Islamabad'
    },
    {
      city: 'Lahore Branch Desk',
      address: 'Gulberg III, near Liberty Market, Lahore, Pakistan',
      phone: '+92 314 6002635',
      hours: 'Open 24 Hours',
      features: ['Wedding Limousines', 'Intercity Highway Fleet', 'Liberty Market Pickup Hub'],
      gmaps: 'https://maps.google.com/?q=Gulberg+III+Lahore'
    }
  ];

  return (
    <div className="space-y-16">
      
      {/* 1. Header with description */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Coverage & branches</span>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white">Our Operational Coverage Desks</h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          Transporter is strategically situated to serve the twin cities (Rawalpindi & Islamabad) and Lahore. Whether you are landing at the airport or requesting immediate office pickup, we are completely local.
        </p>
      </div>

      {/* 2. Location Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {locations.map((loc, idx) => (
          <div 
            key={idx}
            className="bg-slate-900/30 border border-slate-850 rounded-3xl p-6 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-400">
                <MapPin size={20} />
                <h4 className="font-display font-bold text-lg text-white">{loc.city}</h4>
              </div>

              <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
                <p className="flex items-start gap-1.5">
                  <span className="font-bold text-slate-500">Address:</span>
                  <span>{loc.address}</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <span className="font-bold text-slate-500">Phone:</span>
                  <a href={`tel:${loc.phone.replace(/\s+/g, '')}`} className="text-emerald-400 hover:underline">{loc.phone}</a>
                </p>
                <p className="flex items-center gap-1.5">
                  <span className="font-bold text-slate-500">Hours:</span>
                  <span>{loc.hours}</span>
                </p>
              </div>

              <div className="border-t border-slate-850 pt-4 space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Branch Features:</p>
                <div className="flex flex-wrap gap-1.5">
                  {loc.features.map((feat, fIdx) => (
                    <span 
                      key={fIdx} 
                      className="bg-slate-950 px-2.5 py-1 rounded-lg text-[10px] text-slate-300 border border-slate-900"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <a 
              href={loc.gmaps} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-slate-950 hover:bg-slate-900 text-slate-300 text-xs font-bold py-3 rounded-xl border border-slate-800 text-center flex items-center justify-center gap-1.5"
            >
              <ExternalLink size={14} />
              Open In Google Maps
            </a>
          </div>
        ))}
      </div>

      {/* 3. Airport Transfer Showcase */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 sm:p-12 rounded-3xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border border-emerald-500/20">
            <Plane size={12} />
            Airport pick & drop desk
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white">Landed at Islamabad Airport (IIAP) or Lahore Airport (AIIAP)?</h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            We provide specialized tracking services for international flight arrivals. Simply state your flight number, and our chauffeur will be waiting with your designated car at the arrivals arrival deck—holding a sign with your name. No airport wait, no hassle.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400 pt-2">
            <li className="flex items-center gap-2">
              <CheckCircle size={14} className="text-emerald-400" />
              Flight delay auto-tracking
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={14} className="text-emerald-400" />
              Chauffeur luggage assistance
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={14} className="text-emerald-400" />
              Airconditioned comfortable cabin
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={14} className="text-emerald-400" />
              Toll tax & parking handled by us
            </li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-850 space-y-4 text-center">
            <p className="text-xs text-slate-400">Need airport pickup?</p>
            <p className="font-display font-bold text-lg text-white">Toyota Corolla GLI</p>
            <p className="text-2xl font-black text-emerald-400">PKR 6,000 <span className="text-xs text-slate-400 font-normal">/ day</span></p>
            <button 
              onClick={() => onSelectCar('corolla')}
              className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-xl transition-all cursor-pointer"
            >
              Select Corolla & Estimate Cost
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
