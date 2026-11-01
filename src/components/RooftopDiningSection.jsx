'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { OrnateDivider } from './RoyalIcons';
import { Sun, Moon, Utensils, Clock, MapPin, Sparkles, Phone } from 'lucide-react';

const rooftopViews = [
  {
    id: 'sunset',
    title: 'Golden Sunset Terrace',
    time: 'Sunset Hours: 5:00 PM – 7:00 PM',
    image: '/113504.jpg',
    desc: 'Unmatched 360-degree views of Chittorgarh city and the Aravali hills as the sun dips below the horizon, painting the sky in fiery amber and gold.',
  },
  {
    id: 'night',
    title: 'Starlit Evening Lounge',
    time: 'Dinner: 7:00 PM – 11:30 PM',
    image: '/113506.jpg',
    desc: 'Dine under hanging blossoms and lanterns with thousands of sparkling city night lights creating an unforgettable romantic atmosphere.',
  },
  {
    id: 'gazebo',
    title: 'Ornate Wooden Gazebo',
    time: 'All-Day Dining & Cafe',
    image: '/113505.jpg',
    desc: 'Carved wooden valence, floral columns, and fresh green planters provide a royal retreat for relaxed high-tea and conversations.',
  },
  {
    id: 'day',
    title: 'Panoramic Day Deck',
    time: 'Breakfast & Lunch',
    image: '/113507.jpg',
    desc: 'Bask in clean fresh breezes and expansive vistas of the historic Mewari plains under open skies.',
  },
];

const foodShowcase = [
  {
    name: 'Gourmet Club Platters',
    tag: 'CAFE & FAST BITES',
    image: '/113508.jpg',
    desc: 'Multi-layered gourmet sandwiches with golden fries and handcrafted condiments in our signature Rawal Kothi wooden box.',
  },
  {
    name: 'Skyline Shakes & Snacks',
    tag: 'SUNSET SPECIALS',
    image: '/113509.jpg',
    desc: 'Thick artisan chocolate shakes paired with crisp seasoned fries while gazing over the panoramic city panorama.',
  },
  {
    name: 'Royal Hara Bhara Kebabs',
    tag: 'CHEF’S STARTER SPECIAL',
    image: '/113510.jpg',
    desc: 'Crispy sesame-crusted kebabs crowned with roasted cashews, fresh mint chutney, and culinary tomato flower garnish.',
  },
  {
    name: 'Crispy Heritage Dosa',
    tag: 'SOUTH INDIAN & BREAKFAST',
    image: '/113511.jpg',
    desc: 'Golden crisp masala dosa served with hot aromatic sambar, coconut chutney, and spicy tomato dip.',
  },
];

export default function RooftopDiningSection({ onOpenBooking }) {
  const [selectedView, setSelectedView] = useState(0);

  return (
    <section id="dining" className="py-24 sm:py-32 bg-[#1A1615] text-white relative overflow-hidden">
      {/* Decorative Jali Silhouette */}
      <div className="absolute inset-0 bg-jali-pattern opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#B99470] tracking-[0.35em] text-xs sm:text-sm uppercase font-sans font-semibold mb-2">
            CHITTORGARH'S HIGHEST OPEN-AIR ROOFTOP
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-tight">
            Skyline Dining at Rawal Kothi
          </h2>
          <OrnateDivider color="#B99470" />
          <p className="mt-4 text-gray-300 font-sans text-sm sm:text-base leading-relaxed">
            Feast in style overlooking the historic city of Chittorgarh. From glorious golden sunsets to candlelit starlight evenings, our panoramic rooftop lounge elevates every meal into a royal celebration.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-12 mb-8">
          {rooftopViews.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setSelectedView(idx)}
              className={`px-4 sm:px-6 py-2.5 text-xs sm:text-sm uppercase tracking-wider font-medium transition-all duration-300 border ${
                selectedView === idx
                  ? 'bg-[#B99470] text-[#1A1615] border-[#B99470] shadow-lg font-semibold scale-105'
                  : 'bg-black/40 text-gray-300 border-white/20 hover:border-[#B99470]'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Big Rooftop Feature Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black/40 border border-[#B99470]/30 p-6 sm:p-8 rounded-none">
          {/* Main Visual */}
          <div className="lg:col-span-8 relative aspect-[16/10] overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src={rooftopViews[selectedView].image}
              alt={rooftopViews[selectedView].title}
              fill
              className="object-cover transition-all duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
            <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1.5 text-xs text-[#B99470] border border-[#B99470]/40 flex items-center gap-2">
              <Clock size={13} />
              <span>{rooftopViews[selectedView].time}</span>
            </div>
          </div>

          {/* Description & Reservation Info */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B99470] font-semibold block mb-2">
                ROOFTOP EXPERIENCE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white mb-4">
                {rooftopViews[selectedView].title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-sans mb-6">
                {rooftopViews[selectedView].desc}
              </p>

              <div className="space-y-3 border-t border-white/10 pt-4 text-xs text-gray-300">
                <div className="flex items-center gap-2.5">
                  <Sparkles size={14} className="text-[#B99470]" />
                  <span>Panoramic 360° Fort & City Horizon</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Utensils size={14} className="text-[#B99470]" />
                  <span>North Indian, Mewari, Chinese & Continental Delicacies</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin size={14} className="text-[#B99470]" />
                  <span>Live Mocktails & Artisan Coffee Bar</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href="https://wa.me/918058877878?text=Hello%20Rawal%20Kothi,%20I%20would%20like%20to%20reserve%20a%20table%20at%20the%20Rooftop%20Restaurant."
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#B99470] hover:bg-[#9E7B58] text-[#1A1615] hover:text-white py-3.5 px-4 text-center text-xs uppercase tracking-[0.2em] font-semibold block transition-colors shadow-lg"
              >
                Reserve Rooftop Table
              </a>
              <a
                href="tel:+918058877878"
                className="w-full bg-transparent hover:bg-white/10 text-white border border-white/30 py-3 px-4 text-center text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-2 transition-colors"
              >
                <Phone size={14} className="text-[#B99470]" /> Call Table Concierge
              </a>
            </div>
          </div>
        </div>

        {/* Culinary Delights Showcase */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B99470] font-semibold block mb-2">
              CULINARY CRAFTSMANSHIP
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-white font-normal">
              Signature Creations from Our Royal Kitchen
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {foodShowcase.map((item, idx) => (
              <div
                key={idx}
                className="group bg-black/40 border border-[#B99470]/30 overflow-hidden hover:border-[#B99470] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 left-3 bg-[#1A1615]/80 backdrop-blur-sm px-2.5 py-1 text-[10px] tracking-widest text-[#B99470] uppercase font-bold border border-[#B99470]/30">
                      {item.tag}
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-serif text-lg text-white group-hover:text-[#B99470] transition-colors mb-2">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-5">
                  <div className="w-full h-[1px] bg-white/10 group-hover:bg-[#B99470]/40 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
