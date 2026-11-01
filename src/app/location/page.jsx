'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWidgets from '../../components/FloatingWidgets';
import BookingModal from '../../components/BookingModal';
import RoyalCursor from '../../components/RoyalCursor';
import LocationSection from '../../components/LocationSection';
import { RoyalLotusCrest, OrnateDivider } from '../../components/RoyalIcons';
import { MapPin, Navigation, Compass, Phone } from 'lucide-react';
import Link from 'next/link';

export default function LocationPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] selection:bg-[#B99470] selection:text-white w-full max-w-full overflow-x-hidden">
      <RoyalCursor />
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Subpage Royal Banner */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-24 bg-[#1A1615] text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-jali-pattern opacity-15 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1615] via-transparent to-black/60" />
        <div className="relative max-w-4xl mx-auto px-4">
          <RoyalLotusCrest className="w-12 h-12 text-[#B99470] mx-auto mb-3" />
          <nav className="text-[11px] uppercase tracking-[0.25em] text-[#B99470] font-sans mb-3 flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Location & Proximity</span>
          </nav>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal mb-4">
            Fort Proximity & Directions
          </h1>
          <OrnateDivider color="#B99470" className="my-3" />
          <p className="text-gray-300 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Ideally situated inside Chittorgarh Fort Village on Chittorgarh Fort Road, just a short 4-minute walk to Kalika Mata Temple and 1.1 km to the main fort entrance.
          </p>
        </div>
      </section>

      {/* Distance Highlights */}
      <section className="bg-[#FAF7F2] border-b border-[#B99470]/30 py-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center text-xs font-sans">
          <div className="p-3">
            <MapPin size={18} className="text-[#B99470] mx-auto mb-1.5" />
            <span className="block text-gray-500 text-[10px] uppercase tracking-wider">Kalika Mata Temple</span>
            <span className="text-[#1A1615] font-semibold">4 Minutes Walk (350m)</span>
          </div>
          <div className="p-3">
            <Compass size={18} className="text-[#B99470] mx-auto mb-1.5" />
            <span className="block text-gray-500 text-[10px] uppercase tracking-wider">Chittorgarh Fort Gate</span>
            <span className="text-[#1A1615] font-semibold">1.1 km (3 Mins Drive)</span>
          </div>
          <div className="p-3">
            <Navigation size={18} className="text-[#B99470] mx-auto mb-1.5" />
            <span className="block text-gray-500 text-[10px] uppercase tracking-wider">Chittorgarh Railway Station</span>
            <span className="text-[#1A1615] font-semibold">4.8 km (12 Mins Drive)</span>
          </div>
          <div className="p-3">
            <Phone size={18} className="text-[#B99470] mx-auto mb-1.5" />
            <span className="block text-gray-500 text-[10px] uppercase tracking-wider">Direct Travel Desk</span>
            <span className="text-[#1A1615] font-semibold">+91 80588 77878</span>
          </div>
        </div>
      </section>

      {/* Interactive Map & Proximity Section */}
      <LocationSection />

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingWidgets onOpenBooking={handleOpenBooking} />

      {/* Reservation Dialog */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </main>
  );
}
