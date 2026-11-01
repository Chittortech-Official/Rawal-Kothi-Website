'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWidgets from '../../components/FloatingWidgets';
import BookingModal from '../../components/BookingModal';
import RoyalCursor from '../../components/RoyalCursor';
import AboutSection from '../../components/AboutSection';
import FacilitiesSection from '../../components/FacilitiesSection';
import { RoyalLotusCrest, OrnateDivider } from '../../components/RoyalIcons';
import { Sparkles, MapPin, Shield, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeritagePage() {
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
            <span className="text-white">Our Heritage</span>
          </nav>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal mb-4">
            The Living Heritage of Rawal Kothi
          </h1>
          <OrnateDivider color="#B99470" className="my-3" />
          <p className="text-gray-300 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Perched inside the historic Chittorgarh Fort Village, where hand-painted floral pillars, vibrant stained-glass staircases, and legendary Mewari valour come alive.
          </p>
        </div>
      </section>

      {/* About Section - Grand Living Heritage */}
      <AboutSection onOpenBooking={handleOpenBooking} />

      {/* Facilities & Palace Amenities */}
      <FacilitiesSection />

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
