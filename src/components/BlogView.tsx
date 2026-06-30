/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  User, 
  ChevronRight, 
  ArrowLeft,
  Star,
  CheckCircle,
  Clock,
  Award
} from 'lucide-react';

export default function BlogView() {
  const [readingPostId, setReadingPostId] = useState<string | null>(null);

  const posts = [
    {
      id: 'mistakes-guide',
      title: '12 Common Mistakes to Avoid When Renting a Car in Pakistan',
      excerpt: 'Renting a car in Pakistan can be tricky if you do not know the local landscape. Learn how to protect your safety, avoid hidden rates, and travel stress-free.',
      date: 'June 18, 2026',
      author: 'Ali Bajwa',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800',
      content: (
        <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
          <p>
            Renting a car in Pakistan—whether for a family wedding, a summer vacation to the breathtaking Northern Areas, or business commuting—should be an enjoyable and simple process. However, many travelers, especially returning overseas Pakistanis, frequently make basic mistakes that turn their travel into a stressful nightmare.
          </p>
          <p>
            Based on our years of management experience at Transporter, we have compiled the ultimate list of the <strong>12 most critical mistakes to avoid</strong> when booking your next car in Pakistan.
          </p>

          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 space-y-4">
            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <span className="text-emerald-400 font-extrabold">1.</span> Choosing Self-Drive Over Chauffeur Service
            </h4>
            <p className="text-xs">
              Navigating Pakistani traffic, bypass roads, and complex mountain curves in Murree or Naran requires highly specialized reflexes. If you are from overseas, driving yourself exposes you to high legal liabilities, accidental damages, and immense navigational stress. Opting for a professional, local chauffeur completely resolves this.
            </p>

            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <span className="text-emerald-400 font-extrabold">2.</span> Believing Suspiciously Low Pricing
            </h4>
            <p className="text-xs">
              If a rental company offers you a sedan for half of the standard market rate, be extremely careful. Low initial quotes usually hide heavy surcharges, forced fuel costs, or drivers who demand daily food/accommodation fees that were never discussed beforehand. Insist on transparent pricing.
            </p>

            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <span className="text-emerald-400 font-extrabold">3.</span> Not Clarifying Driver Boarding and Lodging
            </h4>
            <p className="text-xs">
              When booking intercity outstation or northern area trips, always clarify who is responsible for the driver's meals and hotel lodging. At Transporter, we clearly list boarding policies beforehand so you don't face unexpected bills during your family tour.
            </p>

            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <span className="text-emerald-400 font-extrabold">4.</span> Neglecting the Pre-trip AC Verification
            </h4>
            <p className="text-xs">
              Rawalpindi summers can easily climb past 40°C. Never check out a vehicle without verifying that the air conditioning compressor is fully functional and the air filtration is clean. We test AC performance thoroughly before every dispatch.
            </p>

            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <span className="text-emerald-400 font-extrabold">5.</span> Booking the Wrong Vehicle Tier for Hilly Terrains
            </h4>
            <p className="text-xs">
              Attempting to drive up steep mountain roads in Swat, Kalam, or Hunza in a low-clearance 1000cc sedan is extremely dangerous and slows down travel. For Northern Pakistan, always prioritize robust 4x4 SUVs or specialized high-clearance vehicles like the Toyota Prado or Fortuner.
            </p>

            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <span className="text-emerald-400 font-extrabold">6.</span> Failing to Verify the Spare Tire and Toolkits
            </h4>
            <p className="text-xs">
              Getting a flat tire on the motorway or a quiet mountain pass with no spare wheel, jack, or wrench in the trunk can leave you stranded for hours. Check the boot yourself before departing.
            </p>
          </div>

          <p className="pt-2">
            By keeping these key guidelines in mind, you can protect your family, save money, and experience the rich sights of Pakistan with complete safety. At Transporter, our operations are strictly aligned to prevent these exact failures—so you always enjoy a flawless travel environment.
          </p>
        </div>
      )
    },
    {
      id: 'northern-areas-routes',
      title: 'The Ultimate Guide to Planning a Road Trip to Hunza and Gilgit',
      excerpt: 'Planning to travel from Rawalpindi to Hunza? Discover the best routes, rest stops, optimal seasons, and vehicle requirements for a safe journey.',
      date: 'May 24, 2026',
      author: 'operations desk',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=800',
      content: (
        <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
          <p>
            Traveling to Hunza Valley and Gilgit-Baltistan from Rawalpindi is one of the most rewarding road trip experiences in the world. However, driving through the Karakoram Highway (KKH) requires careful preparation and robust vehicles.
          </p>
          <div className="space-y-2">
            <h4 className="text-white font-bold">1. Best Travel Windows</h4>
            <p className="text-xs">May to October is the ideal season. Hilly passes are clear, and the valleys are vibrant with blossoms and autumn colors. Winter travel is highly prone to snow blocks and landslides.</p>
            
            <h4 className="text-white font-bold">2. Recommended Vehicles</h4>
            <p className="text-xs">While sedans can travel on the main KKH, reaching spectacular spots like Altit, Baltit, or Lake Attabad is best handled using 4x4 SUVs like the Toyota Prado or high-capacity Grand Cabins for family groups.</p>
          </div>
        </div>
      )
    }
  ];

  const selectedPost = posts.find(p => p.id === readingPostId);

  return (
    <div className="space-y-12">
      
      {/* 1. If currently reading a specific blog post */}
      {selectedPost ? (
        <div className="max-w-3xl mx-auto space-y-8">
          <button 
            onClick={() => setReadingPostId(null)}
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 cursor-pointer"
          >
            <ArrowLeft size={16} />
            Back to All Articles
          </button>

          <div className="space-y-4">
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              {selectedPost.title}
            </h1>
            
            <div className="flex items-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1"><Calendar size={12} /> {selectedPost.date}</span>
              <span className="flex items-center gap-1"><User size={12} /> By {selectedPost.author}</span>
              <span className="flex items-center gap-1"><Clock size={12} /> {selectedPost.readTime}</span>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden h-72 bg-slate-950 border border-slate-800">
            <img 
              src={selectedPost.image} 
              alt={selectedPost.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="border-t border-slate-900 pt-6">
            {selectedPost.content}
          </div>

          <div className="pt-6 border-t border-slate-900">
            <button 
              onClick={() => setReadingPostId(null)}
              className="bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs py-3 px-6 rounded-xl border border-slate-800 cursor-pointer"
            >
              Back to Travel Hub
            </button>
          </div>
        </div>
      ) : (
        /* 2. Show post grid lists */
        <div className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Travel guides & advice</span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white">Transporter Travel Hub</h2>
            <p className="text-slate-400 text-sm">
              In-depth local guides, route recommendations, and car rental tips in Pakistan written directly by our operations team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {posts.map(post => (
              <div 
                key={post.id}
                className="bg-slate-900/30 border border-slate-850 rounded-3xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="h-48 overflow-hidden bg-slate-950 relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 bg-slate-900/90 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded">
                    {post.readTime}
                  </span>
                </div>

                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <p className="text-xs text-slate-500">{post.date}</p>
                    <h3 className="font-display font-bold text-white text-lg group-hover:text-emerald-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <button 
                    onClick={() => setReadingPostId(post.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 pt-2 cursor-pointer"
                  >
                    Read Full Article
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
}
