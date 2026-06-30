/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  MapPin, 
  Award, 
  Star, 
  Clock, 
  CheckCircle, 
  Heart,
  TrendingUp,
  UserCheck
} from 'lucide-react';

export default function AboutView() {
  return (
    <div className="space-y-20">
      
      {/* 1. Header Hero Story */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">The Transporter Legacy</span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Redefining Comfortable Travel Across Pakistan
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Founded with a clear, humble vision: to address the severe lack of reliable, deposit-safe, and professional car rental services in northern Pakistan. Transporter has grown from a single sedan to a comprehensive fleet of over 150 vehicles based out of our Rawalpindi head office.
          </p>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            We believe that a premium car rental is more than just keys and steel. It is about absolute safety, meticulous timing, and outstanding hospitality. Crucially, by mandating certified local drivers, we completely remove the legal liabilities and security worries associated with driving in unfamiliar traffic networks.
          </p>

          <div className="border-l-2 border-emerald-500 pl-4 py-1.5 italic text-slate-300 text-xs sm:text-sm">
            "Your safety is our benchmark, your comfort is our commitment. Every trip we configure is treated as a VIP layout."
            <span className="block mt-1 font-bold text-xs text-slate-500 uppercase not-italic">— Operations Management, Transporter</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-80 border border-slate-800">
            <img 
              src="https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=800" 
              alt="Transporter Chauffeur Service" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* 2. Core Pillars & Values */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Our Pillars</span>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white">How We Operate Every Single Day</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/40 p-6 rounded-3xl border border-slate-850 space-y-4">
            <div className="w-12 h-14 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center border border-emerald-500/20">
              <ShieldCheck size={24} />
            </div>
            <h4 className="font-display font-bold text-lg text-white">1. Meticulous Vehicle Audits</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We never assume general vehicle fitness. Every car goes through a physical multi-point inspection immediately before keys are handed to the chauffeur. Air-conditioning, tires, and mechanical systems are verified.
            </p>
          </div>

          <div className="bg-slate-900/40 p-6 rounded-3xl border border-slate-850 space-y-4">
            <div className="w-12 h-14 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center border border-emerald-500/20">
              <UserCheck size={24} />
            </div>
            <h4 className="font-display font-bold text-lg text-white">2. Chauffeur Standards</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              All Transporter chauffeurs are highly vetted local road veterans. They go through specialized background audits and route testing to guarantee that your journeys are silent, smooth, and incredibly safe.
            </p>
          </div>

          <div className="bg-slate-900/40 p-6 rounded-3xl border border-slate-850 space-y-4">
            <div className="w-12 h-14 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center border border-emerald-500/20">
              <Clock size={24} />
            </div>
            <h4 className="font-display font-bold text-lg text-white">3. Absolute Promptness</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Timings are critical for flights, meetings, and tourist excursions. We guarantee that your driver will be waiting at your pickup destination at least 15 minutes before the requested schedule.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Stat Milestones */}
      <section className="bg-slate-900/20 p-8 sm:p-12 rounded-3xl border border-slate-850 text-center space-y-6">
        <h4 className="font-display font-black text-xl sm:text-2xl text-white">A Trusted Partner for Local Residents & Overseas Pakistanis</h4>
        <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto">
          Over 65% of our bookings are received from overseas Pakistanis returning to Rawalpindi, Islamabad, and Abbottabad who require dependable, VIP airport transfer services and long-term wedding car leases.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
          <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-900">
            <p className="text-2xl font-black text-emerald-400">100%</p>
            <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold">Driver Backed</p>
          </div>
          <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-900">
            <p className="text-2xl font-black text-emerald-400">24 Hours</p>
            <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold">Always Operational</p>
          </div>
          <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-900">
            <p className="text-2xl font-black text-emerald-400">Zero</p>
            <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold">Advance Credit Required</p>
          </div>
          <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-900">
            <p className="text-2xl font-black text-emerald-400">98%</p>
            <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold">User Return Rate</p>
          </div>
        </div>
      </section>

    </div>
  );
}
