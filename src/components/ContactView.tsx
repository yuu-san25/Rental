/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  MessageSquare,
  Send,
  Compass
} from 'lucide-react';

interface ContactViewProps {
  contactForm: { name: string; email: string; phone: string; message: string };
  setContactForm: React.Dispatch<React.SetStateAction<{ name: string; email: string; phone: string; message: string }>>;
  contactSubmitted: boolean;
  setContactSubmitted: (val: boolean) => void;
  onContactSubmit: (e: React.FormEvent) => void;
}

export default function ContactView({
  contactForm,
  setContactForm,
  contactSubmitted,
  setContactSubmitted,
  onContactSubmit
}: ContactViewProps) {
  return (
    <div className="space-y-16">
      
      {/* Header section with description */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Support desk</span>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white">Let's Connect Anytime</h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          Have an upcoming wedding, corporate meeting, or Northern Pakistan tour? Contact our operations desk directly via call, WhatsApp, or through the secure contact channel below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
        
        {/* Left Side: Contact coordinates */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="space-y-4">
            <h3 className="font-display font-black text-2xl text-white">Our Head Office</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              We operate out of our premium fleet yard and head office located at Double Road in Rawalpindi. Stop by or contact us beforehand to lock your reservation.
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-start gap-3 bg-slate-900/30 p-4 rounded-2xl border border-slate-850">
              <MapPin className="text-emerald-400 flex-shrink-0" size={20} />
              <div>
                <p className="font-bold text-white mb-0.5">Physical Address</p>
                <p className="text-slate-400 text-xs">SHOP # PD 434, DOUBLE ROAD, Rawalpindi, Pakistan</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-900/30 p-4 rounded-2xl border border-slate-850">
              <Phone className="text-emerald-400 flex-shrink-0" size={20} />
              <div>
                <p className="font-bold text-white mb-0.5">Primary Hotline (24 Hours)</p>
                <p className="text-slate-400 text-xs">+92 314 6002635</p>
                <p className="text-slate-400 text-xs">+92 333 6255477</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-900/30 p-4 rounded-2xl border border-slate-850">
              <Mail className="text-emerald-400 flex-shrink-0" size={20} />
              <div>
                <p className="font-bold text-white mb-0.5">Corporate Email</p>
                <p className="text-slate-400 text-xs">support@transporter.biz</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-900/30 p-4 rounded-2xl border border-slate-850">
              <Clock className="text-emerald-400 flex-shrink-0" size={20} />
              <div>
                <p className="font-bold text-white mb-0.5">Business Hours</p>
                <p className="text-slate-400 text-xs">Open 24 Hours / 7 Days a week</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Interactive Support form */}
        <div className="lg:col-span-7 bg-slate-900/50 p-8 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
          
          {!contactSubmitted ? (
            <form onSubmit={onContactSubmit} className="space-y-6">
              <div className="space-y-1">
                <h4 className="font-display font-extrabold text-white text-lg">Send Us a Direct Message</h4>
                <p className="text-slate-400 text-xs">We typically reply within 15 minutes of receipt during business hours.</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Name *</label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. John"
                    value={contactForm.name}
                    onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-slate-950 border border-slate-850 focus:border-emerald-500 rounded-xl px-4 py-3.5 text-xs text-slate-100 placeholder-slate-700 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp Phone *</label>
                    <input 
                      type="tel"
                      required
                      placeholder="e.g. +92 314 6002635"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-850 focus:border-emerald-500 rounded-xl px-4 py-3.5 text-xs text-slate-100 placeholder-slate-700 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email"
                      placeholder="e.g. john@example.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-850 focus:border-emerald-500 rounded-xl px-4 py-3.5 text-xs text-slate-100 placeholder-slate-700 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Message / Travel plan *</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Describe which vehicle you are looking for, the travel duration, or wedding specific specifications..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full bg-slate-950 border border-slate-850 focus:border-emerald-500 rounded-xl px-4 py-3.5 text-xs text-slate-100 placeholder-slate-700 focus:outline-none resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3.5 px-6 rounded-xl text-xs tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md shadow-emerald-500/10 cursor-pointer"
              >
                <Send size={14} />
                Send Secure Message
              </button>

            </form>
          ) : (
            <div className="text-center py-12 space-y-4">
              <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                <CheckCircle size={28} />
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-xl text-white">Your Message Has Been Transmitted</h3>
                <p className="text-slate-400 text-xs max-w-sm mx-auto">
                  Thank you for connecting with us! One of our operations managers will reach out to you on WhatsApp or call within 15 minutes.
                </p>
              </div>
              <button 
                onClick={() => setContactSubmitted(false)}
                className="mt-4 bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 py-2.5 px-6 rounded-xl text-xs transition-all cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          )}

        </div>

      </div>

      {/* 4. Maps Integration Iframe Widget */}
      <section className="space-y-4">
        <h4 className="font-display font-extrabold text-white text-xl text-center">Locate Us On The Map</h4>
        <div className="rounded-3xl overflow-hidden h-96 bg-slate-950 border border-slate-800 shadow-2xl relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.2646164121225!2d73.07180731164608!3d33.650304773199565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95db2101430f%3A0x5665a6d124efcf6a!2sRent%20a%20car%20Rawalpindi%20by%20TRANSPORTER!5e0!3m2!1sen!2s!4v1769259064550!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
        </div>
      </section>

    </div>
  );
}
