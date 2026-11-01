'use client';

import React from 'react';
import Link from 'next/link';
import { RoyalLotusCrest, OrnateDivider } from './RoyalIcons';
import { MapPin, Phone, Mail, ArrowUp, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1615] text-white pt-20 pb-12 border-t-2 border-[#B99470] relative overflow-hidden">
      {/* Background Jali Watermark */}
      <div className="absolute inset-0 bg-jali-pattern opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Centered Brand Crest */}
        <div className="flex flex-col items-center text-center pb-12 border-b border-white/10">
          <RoyalLotusCrest className="w-14 h-14 text-[#B99470] mb-3" />
          <span className="font-serif text-2xl sm:text-3xl text-white tracking-[0.2em] uppercase font-light">
            RAWAL KOTHI
          </span>
          <span className="text-[10px] text-[#B99470] tracking-[0.4em] uppercase font-sans mt-1">
            HERITAGE PALACE & ROOFTOP RETREAT • CHITTORGARH
          </span>
        </div>

        {/* 4 Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-white/10">
          {/* Column 1: Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-[#B99470] tracking-wider uppercase">
              Royal Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
              <p className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#B99470] flex-shrink-0 mt-1" />
                <span>Rawal Kothi, Near Maharana Medicor Sansthan, Kidwai Nagar, Chittorgarh - 312001 (1.1 km to Chittorgarh Fort)</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#B99470] flex-shrink-0" />
                <a href="tel:+918690142444" className="hover:text-[#B99470] transition-colors">+91 86 9014 2444</a>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#B99470] flex-shrink-0" />
                <a href="tel:+919145858110" className="hover:text-[#B99470] transition-colors">+91 91 4585 8110</a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#B99470] flex-shrink-0" />
                <a href="mailto:reservations@rawalkothi.com" className="hover:text-[#B99470] transition-colors">reservations@rawalkothi.com</a>
              </p>
            </div>
          </div>

          {/* Column 2: Accommodations & Dining */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-[#B99470] tracking-wider uppercase">
              Stays & Dining
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 font-sans">
              <li><a href="#rooms" className="hover:text-[#B99470] transition-colors">Padmini Royal Suite</a></li>
              <li><a href="#rooms" className="hover:text-[#B99470] transition-colors">Chetak Heritage Suite</a></li>
              <li><a href="#rooms" className="hover:text-[#B99470] transition-colors">Meera Palace Suite</a></li>
              <li><a href="#rooms" className="hover:text-[#B99470] transition-colors">Rawal Premiere Room</a></li>
              <li><a href="#dining" className="hover:text-[#B99470] transition-colors">Skyline Rooftop Restaurant</a></li>
              <li><a href="#dining" className="hover:text-[#B99470] transition-colors">Sunset Gazebo Cafe</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-[#B99470] tracking-wider uppercase">
              Explore Rawal Kothi
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 font-sans">
              <li><a href="#about" className="hover:text-[#B99470] transition-colors">About Our Heritage</a></li>
              <li><a href="#facilities" className="hover:text-[#B99470] transition-colors">Palace Amenities</a></li>
              <li><a href="#gallery" className="hover:text-[#B99470] transition-colors">Visual Photo Gallery</a></li>
              <li><a href="#offers" className="hover:text-[#B99470] transition-colors">Special Stay Packages</a></li>
              <li><a href="#location" className="hover:text-[#B99470] transition-colors">Location & Proximity</a></li>
              <li><a href="https://maps.google.com/?q=Chittorgarh+Rajasthan" target="_blank" rel="noreferrer" className="hover:text-[#B99470] transition-colors">Directions & Map</a></li>
            </ul>
          </div>

          {/* Column 4: Royal Newsletter */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-[#B99470] tracking-wider uppercase">
              Palace Gazette
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed font-sans">
              Subscribe to receive exclusive royal invitations, seasonal staycation packages, and festive discounts.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to Rawal Kothi Palace Gazette!'); }} className="space-y-2">
              <input
                type="email"
                placeholder="YOUR EMAIL ADDRESS"
                required
                className="w-full bg-white/5 border border-white/20 focus:border-[#B99470] px-3.5 py-2.5 text-xs text-white placeholder-gray-400 outline-none uppercase font-sans transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-[#B99470] hover:bg-[#9E7B58] text-[#1A1615] hover:text-white py-2.5 text-xs uppercase tracking-[0.2em] font-semibold transition-colors shadow-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Rawal Kothi, Chittorgarh. All Rights Reserved. Crafted with royal elegance.</p>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/918690142444"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#B99470] hover:text-[#1A1615] flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={15} />
            </a>
            <a
              href="tel:+918690142444"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#B99470] hover:text-[#1A1615] flex items-center justify-center transition-colors"
              aria-label="Phone"
            >
              <Phone size={14} />
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#B99470] hover:text-white transition-colors ml-2"
            >
              <span>Back To Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
