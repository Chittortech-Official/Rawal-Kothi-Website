'use client';

import React from 'react';
import Image from 'next/image';
import { OrnateDivider } from './RoyalIcons';
import { offeringsData } from '../data/resortData';
import { 
  Flower2, 
  UtensilsCrossed, 
  Sparkles, 
  Waves, 
  Bike, 
  Smile, 
  Car, 
  Music,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  Flower2: Flower2,
  UtensilsCrossed: UtensilsCrossed,
  Sparkles: Sparkles,
  Waves: Waves,
  Bike: Bike,
  Smile: Smile,
  Car: Car,
  Music: Music,
};

export default function OfferingsSection({ onOpenBooking }) {
  return (
    <section id="facilities" className="py-20 sm:py-28 bg-[#F4EFEA] relative overflow-hidden">
      {/* Decorative radial glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B99470]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#883563]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#B99470] tracking-[0.3em] text-xs sm:text-sm uppercase font-sans font-semibold mb-2">
            RESORT FACILITIES & PURSUITS
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1615] font-normal leading-tight">
            Offerings: Crafted for Regal Leisure
          </h2>
          <OrnateDivider />
          <p className="mt-4 text-[#5B5E63] font-sans text-sm sm:text-base leading-relaxed">
            From leisurely morning walks across ten acres of manicured emerald lawns to starlit cultural performances and silent buggy rides through palace courtyards, every facility at Rawal Kothi is curated to offer regal serenity.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offeringsData.map((item) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.id}
                className="group bg-white rounded-none border border-[#B99470]/30 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#B99470] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-black">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Floating icon badge */}
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[#1A1615]/80 backdrop-blur-sm border border-[#B99470]/40 flex items-center justify-center text-[#B99470] group-hover:bg-[#B99470] group-hover:text-white transition-colors">
                    <IconComponent size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-[#1A1615] mb-2 group-hover:text-[#B99470] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5B5E63] font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#B99470]/20 flex items-center justify-between">
                    <button
                      onClick={() => onOpenBooking({ inquiryType: item.title })}
                      className="text-[11px] font-semibold text-[#883563] tracking-[0.15em] uppercase group-hover:text-[#B99470] flex items-center gap-1 transition-colors"
                    >
                      <span>EXPLORE</span>
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <span className="text-[10px] uppercase tracking-wider text-[#5B5E63]">INCLUDED</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Weddings & Events Highlight Banner */}
        <div id="weddings" className="mt-16 bg-[#1A1615] border border-[#B99470]/40 p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-[#B99470]/20 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-[#D4B999] tracking-[0.25em] text-xs uppercase font-semibold block mb-2">
                FOUR REGAL EVENT VENUES & CHITRANG BANQUET HALL
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-tight mb-4">
                Grand Royal Destination Weddings & Celebrations
              </h3>
              <p className="text-sm text-[#FAF7F2]/80 leading-relaxed font-sans">
                Exchange vows amidst shimmering fountains, sprawling lawns capable of hosting over 1,000 guests, and the Chitrang Banquet Hall with crimson seating, grand crystal chandeliers, and handcrafted Mewari catering.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <button
                onClick={() => onOpenBooking({ inquiryType: 'Royal Destination Wedding / Banquet' })}
                className="bg-[#B99470] hover:bg-[#A8835E] text-white py-3.5 px-7 text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-lg text-center"
              >
                Plan Your Celebration
              </button>
              <a
                href="tel:+918058877878"
                className="border border-[#B99470] text-[#D4B999] hover:bg-[#B99470] hover:text-white py-3.5 px-7 text-xs uppercase tracking-[0.2em] font-semibold transition-all text-center"
              >
                Call Events Desk: +91 80588 77878
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
