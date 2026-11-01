'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWidgets from '../../components/FloatingWidgets';
import BookingModal from '../../components/BookingModal';
import RoyalCursor from '../../components/RoyalCursor';
import RooftopDiningSection from '../../components/RooftopDiningSection';
import { RoyalLotusCrest, OrnateDivider } from '../../components/RoyalIcons';
import { Utensils, Clock, Sparkles, MapPin, Coffee, Wine } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function RooftopDiningPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [initialModalData, setInitialModalData] = useState({ bookingType: 'table' });

  const handleOpenBooking = (data = { bookingType: 'table' }) => {
    setInitialModalData(data || { bookingType: 'table' });
    setBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#1A1615] text-white selection:bg-[#B99470] selection:text-white w-full max-w-full overflow-x-hidden">
      <RoyalCursor />
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Subpage Royal Banner */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-24 bg-[#141110] text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-jali-pattern opacity-15 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1615] via-transparent to-black/70" />
        <div className="relative max-w-4xl mx-auto px-4">
          <RoyalLotusCrest className="w-12 h-12 text-[#B99470] mx-auto mb-3" />
          <nav className="text-[11px] uppercase tracking-[0.25em] text-[#B99470] font-sans mb-3 flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Rooftop Dining</span>
          </nav>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal mb-4">
            Skyline Rooftop Dining & Lounge
          </h1>
          <OrnateDivider color="#B99470" className="my-3" />
          <p className="text-gray-300 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Feast above the city of Chittorgarh with unmatched 360° panoramic fort vistas, romantic golden sunset gazebos, and bespoke royal Mewari gastronomy.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleOpenBooking({ bookingType: 'table' })}
              className="bg-[#B99470] hover:bg-[#9E7B58] text-[#1A1615] hover:text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-lg"
            >
              Reserve a Table
            </button>
            <a
              href="tel:+918058877878"
              className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-6 py-3.5 text-xs uppercase tracking-[0.16em] transition-colors"
            >
              Call Concierge: +91 80588 77878
            </a>
          </div>
        </div>
      </section>

      {/* Dining Timings & Quick Stats */}
      <section className="bg-black/50 border-y border-[#B99470]/20 py-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center text-xs font-sans">
          <div className="p-3">
            <Clock size={18} className="text-[#B99470] mx-auto mb-1.5" />
            <span className="block text-gray-400 text-[10px] uppercase tracking-wider">Breakfast & Lunch</span>
            <span className="text-white font-medium">8:00 AM – 3:30 PM</span>
          </div>
          <div className="p-3">
            <Coffee size={18} className="text-[#B99470] mx-auto mb-1.5" />
            <span className="block text-gray-400 text-[10px] uppercase tracking-wider">Golden Sunset High-Tea</span>
            <span className="text-white font-medium">4:30 PM – 7:00 PM</span>
          </div>
          <div className="p-3">
            <Sparkles size={18} className="text-[#B99470] mx-auto mb-1.5" />
            <span className="block text-gray-400 text-[10px] uppercase tracking-wider">Starlit Candlelight Dinner</span>
            <span className="text-white font-medium">7:00 PM – 11:30 PM</span>
          </div>
          <div className="p-3">
            <Utensils size={18} className="text-[#B99470] mx-auto mb-1.5" />
            <span className="block text-gray-400 text-[10px] uppercase tracking-wider">Cuisines Served</span>
            <span className="text-white font-medium">Mewari, North Indian, Chinese</span>
          </div>
        </div>
      </section>

      {/* Dedicated Interactive Rooftop Showcase */}
      <RooftopDiningSection onOpenBooking={handleOpenBooking} />

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingWidgets onOpenBooking={handleOpenBooking} />

      {/* Reservation Dialog */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={initialModalData}
      />
    </main>
  );
}
