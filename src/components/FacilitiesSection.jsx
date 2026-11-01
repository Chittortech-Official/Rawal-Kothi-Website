'use client';

import React from 'react';
import { OrnateDivider } from './RoyalIcons';
import {
  Compass,
  UtensilsCrossed,
  PartyPopper,
  Waves,
  Car,
  Gamepad2,
  Clock,
  Wifi,
} from 'lucide-react';

const facilities = [
  {
    icon: <UtensilsCrossed className="w-7 h-7 text-[#B99470]" />,
    title: 'Skyline Multi-Cuisine Restaurant',
    desc: 'Dine amidst teakwood, raw stone, and chandeliers, where every meal feels like a royal affair.',
  },
  {
    icon: <Compass className="w-7 h-7 text-[#B99470]" />,
    title: 'Panoramic Rooftop & Lawns',
    desc: 'Lush open decks and sunset terraces that invite unhurried walks and heartfelt gatherings under the sky.',
  },
  {
    icon: <PartyPopper className="w-7 h-7 text-[#B99470]" />,
    title: 'Royal Celebration Venues',
    desc: 'Host grand weddings and celebrations in regal spaces echoing with true Mewari heritage.',
  },
  {
    icon: <Waves className="w-7 h-7 text-[#B99470]" />,
    title: 'Swimming Pool Oasis',
    desc: 'Take a refreshing plunge with serene palace architecture and peaceful surroundings.',
  },
  {
    icon: <Car className="w-7 h-7 text-[#B99470]" />,
    title: 'Chauffeur & Valet Service',
    desc: 'Glide through your arrival with effortless comfort, airport transfers, and private parking.',
  },
  {
    icon: <Gamepad2 className="w-7 h-7 text-[#B99470]" />,
    title: 'Family & Children’s Recreation',
    desc: 'A joyful and safe haven where young imaginations run free with leisure games.',
  },
  {
    icon: <Clock className="w-7 h-7 text-[#B99470]" />,
    title: '24-Hour Palace Concierge',
    desc: 'Round-the-clock royal butler service, itinerary planning, and personalized assistance.',
  },
  {
    icon: <Wifi className="w-7 h-7 text-[#B99470]" />,
    title: 'High-Speed Fiber Wi-Fi',
    desc: 'Stay seamlessly connected across all suites, open decks, banquet lawns, and cafes.',
  },
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="py-24 sm:py-32 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#B99470] tracking-[0.3em] text-xs sm:text-sm uppercase font-sans font-semibold mb-2">
            OFFERINGS & HOSPITALITY
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1615] font-normal">
            Royal Facilities to Pamper Your Senses
          </h2>
          <OrnateDivider />
          <p className="mt-4 text-[#5B5E63] font-sans text-sm sm:text-base leading-relaxed">
            Every amenity at Rawal Kothi is curated to ensure that your stay is relaxing, luxurious, and enriched with royal Rajasthani warmth.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {facilities.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white p-7 border border-[#B99470]/30 shadow-sm hover:shadow-xl hover:border-[#B99470] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-full bg-[#FAF7F2] flex items-center justify-center mb-5 group-hover:bg-[#B99470]/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl text-[#1A1615] group-hover:text-[#B99470] transition-colors mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5B5E63] font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 w-6 h-[2px] bg-[#B99470]/30 group-hover:w-12 group-hover:bg-[#B99470] transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
