'use client';

import React from 'react';
import Image from 'next/image';
import { OrnateDivider } from './RoyalIcons';
import { Bed, UtensilsCrossed, Sparkles } from 'lucide-react';

export default function AboutSection({ onOpenBooking }) {
  const highlights = [
    {
      icon: <Bed className="w-8 h-8 text-[#B99470]" />,
      title: 'Thoughtfully Designed Stays',
      desc: 'Heritage-styled suites and rooms that blend imperial Mewari charm with ultra-modern luxury.',
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8 text-[#B99470]" />,
      title: 'Feast Above the City',
      desc: 'Dine amidst carved wood, open skies, and lanterns at our signature panoramic rooftop restaurant.',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#B99470]" />,
      title: 'Regal Celebrations',
      desc: 'Versatile banquet terraces and picturesque event spaces for weddings and memorable milestones.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FDFBF7] relative overflow-hidden">
      {/* Subtle Jali Background Watermark */}
      <div className="absolute inset-0 bg-jali-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto reveal-element">
          <p className="text-[#B99470] tracking-[0.3em] text-xs sm:text-sm uppercase font-sans font-semibold mb-2">
            HERITAGE PALACE & ROOFTOP RETREAT
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1615] font-normal leading-tight">
            Hotel Rawal Kothi Fort: Ode to Regal Living
          </h2>
          <OrnateDivider />
          <p className="mt-4 text-[#5B5E63] font-sans text-sm sm:text-base leading-relaxed">
            Perched inside the historic <strong className="text-[#1A1615] font-semibold">Chittorgarh Fort Village</strong> and just a short walk to Kalika Mata Temple, Hotel Rawal Kothi Fort welcomes you into an authentic world of Mewari heritage. Featuring 1,615 sq. ft. peacock fresco suites, hand-painted floral pillars, and our celebrated cliffside rooftop restaurant overlooking the sparkling city valley.
          </p>
        </div>

        {/* 3 Regal Highlight Cards with Staggered Parallax Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className={`group bg-white p-8 rounded-none border border-[#B99470]/30 shadow-md hover:shadow-xl hover:border-[#B99470] transition-all duration-300 flex flex-col items-center text-center relative reveal-element reveal-delay-${idx + 1}`}
            >
              <div className="w-16 h-16 rounded-full bg-[#FAF7F2] flex items-center justify-center mb-5 group-hover:bg-[#B99470]/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1A1615] mb-3 group-hover:text-[#B99470] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[#5B5E63] leading-relaxed font-sans">
                {item.desc}
              </p>
              <div className="mt-6 w-8 h-[2px] bg-[#B99470]/40 group-hover:w-16 group-hover:bg-[#B99470] transition-all" />
            </div>
          ))}
        </div>

        {/* Feature Split Showcase (Palace Lobby & Story) */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Image with ornate frame */}
          <div className="lg:col-span-7 relative reveal-element">
            <div className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl border-4 border-white group">
              <Image
                src="/113503.jpg"
                alt="Grand Lobby & Stained Glass Staircase at Rawal Kothi"
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-1000"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 text-white">
                <span className="text-[#B99470] text-xs uppercase tracking-widest font-semibold block mb-1">
                  GRAND RECEPTION & LOBBY
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-light">
                  Hand-Painted Floral Pillars & Stained Glass Heritage
                </h4>
              </div>
            </div>
          </div>

          {/* Right: Rich Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-5 lg:pl-6 reveal-element reveal-delay-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#934379] font-bold">
              HERITAGE ARCHITECTURE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1615] font-normal leading-snug">
              Every Corner Tells a Tale of Chittor’s Valour & Beauty
            </h3>
            <p className="text-sm sm:text-base text-[#5B5E63] leading-relaxed">
              Step through our arched entryway into spaces bathed in natural sunlight and vibrant stained glass reflections. From the intricate floral patterns on our grand pillars to the bespoke wooden stairways and antique furniture, Rawal Kothi invites you to slow down and relish royalty.
            </p>
            <p className="text-sm sm:text-base text-[#5B5E63] leading-relaxed">
              Whether you are relaxing in our private suites, savoring high-tea with valley views, or taking a stroll through our courtyards, our warm hospitality ensures every moment feels truly regal.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-block bg-[#1A1615] hover:bg-[#B99470] text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300"
              >
                Plan Your Regal Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
