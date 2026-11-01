'use client';

import React from 'react';
import { OrnateDivider } from './RoyalIcons';
import { MapPin, Navigation, Compass, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Vikramaditya & Ananya Rathore',
    location: 'Jaipur, Rajasthan',
    rating: 5,
    quote: 'The rooftop sunset view is simply out of this world! Dining with Chittorgarh lit up below us felt like a regal dream. The kebabs and service were royal in every sense.',
  },
  {
    name: 'Dr. Siddharth & Meenakshi',
    location: 'New Delhi',
    rating: 5,
    quote: 'Rawal Kothi captures the genuine royal Mewari heritage. The stained-glass staircase, spacious jacuzzi suite, and warm staff made our anniversary truly unforgettable.',
  },
  {
    name: 'Pooja Kashyap',
    location: 'Mumbai',
    rating: 5,
    quote: 'Without doubt the finest place in Chittorgarh. Delicious food, polite staff, and an open-air cafe ambiance that rivals top palace hotels.',
  },
];

const landmarks = [
  { name: 'Kalika Mata Temple (Historic Shrine)', dist: '4 Minutes Walk (Just 300m)' },
  { name: 'Chittorgarh Fort Village & Access', dist: '1.1 km (3 mins drive / walk)' },
  { name: 'Padmini Palace & Gaumukh Kund', dist: '2.0 km (5 mins drive)' },
  { name: 'Vijay Stambha & Kirti Stambha', dist: '2.5 km (7 mins drive)' },
  { name: 'Chittaurgarh Junction Railway Station', dist: '5.7 km (12 mins drive)' },
  { name: 'Maharana Pratap Airport Udaipur (UDR)', dist: '90 km (1.5 hrs via NH 27)' },
];

export default function LocationSection() {
  return (
    <section id="location" className="py-24 sm:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Block */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[#B99470] tracking-[0.3em] text-xs sm:text-sm uppercase font-sans font-semibold mb-2">
              ROYAL TESTIMONIALS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1615] font-normal">
              Words of Delight from Our Esteemed Guests
            </h2>
            <OrnateDivider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 border border-[#B99470]/30 shadow-md relative flex flex-col justify-between"
              >
                <div>
                  <Quote size={28} className="text-[#B99470]/40 mb-4" />
                  <div className="flex items-center gap-1 mb-4 text-[#D99A26]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#5B5E63] italic leading-relaxed mb-6 font-sans">
                    "{item.quote}"
                  </p>
                </div>
                <div className="border-t border-[#E8DFD3] pt-4">
                  <h4 className="font-serif text-base text-[#1A1615] font-semibold">
                    {item.name}
                  </h4>
                  <span className="text-[11px] text-[#B99470] uppercase tracking-wider block">
                    {item.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Proximity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-[#B99470]/20">
          {/* Proximity Information */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-[#B99470] tracking-[0.25em] text-xs uppercase font-sans font-semibold mb-2">
                HOW TO REACH
              </p>
              <h3 className="font-serif text-2xl sm:text-4xl text-[#1A1615] font-normal">
                In the Regal Heart of Chittorgarh
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#5B5E63] leading-relaxed">
                Rawal Kothi is centrally situated with immediate accessibility to Chittorgarh Fort, the railway junction, and scenic heritage sites.
              </p>
            </div>

            <div className="space-y-3.5 bg-white p-6 border border-[#B99470]/30 shadow-sm">
              <span className="text-xs uppercase tracking-widest font-bold text-[#1A1615] block mb-2">
                Proximity to Key Landmarks
              </span>
              {landmarks.map((landmark, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs py-1.5 border-b border-gray-100 last:border-none">
                  <span className="flex items-center gap-2 text-[#2C2725] font-medium">
                    <MapPin size={13} className="text-[#B99470]" />
                    {landmark.name}
                  </span>
                  <span className="text-gray-500 text-[11px] font-sans whitespace-nowrap pl-2">
                    {landmark.dist}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://maps.google.com/?q=Chittorgarh+Rajasthan"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#B99470] hover:bg-[#9E7B58] text-white py-3.5 px-6 text-xs uppercase tracking-[0.18em] font-semibold transition-colors shadow-md"
            >
              <Navigation size={14} /> Open in Google Maps
            </a>
          </div>

          {/* Interactive Map Visual */}
          <div className="lg:col-span-7 h-[380px] sm:h-[420px] relative border-4 border-white shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57929.56382103309!2d74.58882069792612!3d24.88874636672322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968a05c3171120f%3A0xc3f837367e9f3b55!2sChittorgarh%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rawal Kothi Location in Chittorgarh"
              className="w-full h-full grayscale-[25%] contrast-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
