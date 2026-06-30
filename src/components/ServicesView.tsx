/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Plane, 
  Shield, 
  Heart, 
  Compass, 
  Navigation, 
  Calendar,
  CheckCircle,
  Clock,
  Phone,
  MessageSquare
} from 'lucide-react';

interface ServicesViewProps {
  onNavigate: (page: string) => void;
}

export default function ServicesView({ onNavigate }: ServicesViewProps) {
  const serviceList = [
    {
      icon: <Plane className="text-emerald-400" size={28} />,
      title: 'Airport Pick & Drop / Transfers',
      desc: 'Professional transfer services to and from Islamabad International Airport (IIAP) and Lahore Airport. We track flight delays automatically so your chauffeur is always exactly on time.',
      points: ['Flight schedule tracking', 'Comfortable luggage handling', 'Airconditioned clean interior', 'All motorway tolls included']
    },
    {
      icon: <Shield className="text-emerald-400" size={28} />,
      title: 'Corporate Travel Management',
      desc: 'Seamless transit packages for companies, delegates, and VIP executives. Maintain high standards of professional integrity with our neat executive sedans and SUVs.',
      points: ['Uniformed, silent drivers', 'Priority dispatch coordination', 'No advance deposits required', 'Consistent pricing structures']
    },
    {
      icon: <Heart className="text-emerald-400" size={28} />,
      title: 'Wedding & Special Event Car Rental',
      desc: 'Make your big day extraordinarily elegant with our premium wedding fleets. Arrive in style with a beautifully decorated Audi or Mercedes Benz accompanied by a polite, formal chauffeur.',
      points: ['Complimentary visual ribbon styling', 'Backup replacement guarantee', 'Flexible multi-day packages', 'Polite, helpful driver support']
    },
    {
      icon: <Compass className="text-emerald-400" size={28} />,
      title: 'Intercity Outstation Long Trips',
      desc: 'Planning long distance travel from Rawalpindi to Lahore, Multan, Faisalabad, Peshawar, or other major cities? Our heavy-duty sedans and SUVs are perfect for motorway travel.',
      points: ['Well-maintained engine cooling', 'Motorway licensed chauffeurs', 'Flexible one-way & round trips', 'No sudden fuel/mileage caps']
    },
    {
      icon: <Navigation className="text-emerald-400" size={28} />,
      title: 'Northern Areas Guided Expeditions',
      desc: 'Explore the spectacular scenery of Murree, Hunza, Skardu, Swat, and Naran Kaghan. Our drivers are seasoned mountain specialists who understand altitude curves and local terrains.',
      points: ['Robust Prado/Fortuner selections', 'Altitude-checked vehicles', 'Custom route guides', 'Tourist security protocols']
    },
    {
      icon: <Calendar className="text-emerald-400" size={28} />,
      title: 'Flexible Leasing Options',
      desc: 'Whether you require a dedicated premium SUV for a month or an economy hatchback for weekly office runs, we can structure custom rental programs that match your expectations.',
      points: ['Custom monthly discount structures', 'Priority scheduling access', 'Interchangeable fleet options', 'Corporate billing options']
    }
  ];

  return (
    <div className="space-y-16">
      
      {/* 1. Header with description */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Our capabilities</span>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white">High-Quality Rental Services</h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          At Transporter, we focus on providing customized, hassle-free rental experiences. All services include our certified uniformed chauffeurs to remove your driving stress.
        </p>
      </div>

      {/* 2. Grid of Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceList.map((service, index) => (
          <div 
            key={index}
            className="bg-slate-900/40 border border-slate-850 p-6 rounded-3xl space-y-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="w-12 h-14 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center border border-emerald-500/20">
                {service.icon}
              </div>
              
              <div className="space-y-2">
                <h4 className="font-display font-bold text-white text-lg">{service.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{service.desc}</p>
              </div>
            </div>

            <div className="border-t border-slate-850 pt-4 space-y-2">
              {service.points.map((point, pIdx) => (
                <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle size={12} className="text-emerald-400 flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* 3. Call to Action panel */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl border border-slate-800 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white">Need a Customized Service Plan?</h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Have specialized parameters for a film shoot, corporate delegate fleet setup, or tourist itinerary? Tell us your exact specifications and we will build a tailored discount package for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs py-3 px-6 rounded-xl transition-all cursor-pointer"
            >
              Get Custom Quotation
            </button>
            <a 
              href="https://wa.me/923146002635"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-950 hover:bg-slate-900 border border-slate-800 text-emerald-400 font-bold text-xs py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              <MessageSquare size={14} className="fill-emerald-400 stroke-none" />
              Discuss on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
