'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWidgets from '../../components/FloatingWidgets';
import BookingModal from '../../components/BookingModal';
import RoyalCursor from '../../components/RoyalCursor';
import RoomsSection from '../../components/RoomsSection';
import FaqSection from '../../components/FaqSection';
import { RoyalLotusCrest, OrnateDivider } from '../../components/RoyalIcons';
import { Bed, ShieldCheck, Sparkles, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function RoomsPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoomData, setSelectedRoomData] = useState(null);

  const handleOpenBooking = () => {
    setSelectedRoomData(null);
    setBookingModalOpen(true);
  };

  const handleSelectRoom = (room) => {
    setSelectedRoomData(room);
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
            <span className="text-white">Accommodations</span>
          </nav>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal mb-4">
            Suites & Heritage Rooms
          </h1>
          <OrnateDivider color="#B99470" className="my-3" />
          <p className="text-gray-300 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Discover our signature 1,615 sq. ft. peacock fresco suites, private jacuzzi retreats, and authentic Mewari royal chambers perched inside Chittorgarh Fort Village.
          </p>
        </div>
      </section>

      {/* Direct Booking Assurance Bar */}
      <section className="bg-[#FAF7F2] border-b border-[#B99470]/30 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-[#2C2725] font-sans">
          <span className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#B99470]" />
            Best Direct Price Guarantee
          </span>
          <span className="flex items-center gap-2">
            <Sparkles size={16} className="text-[#B99470]" />
            Complimentary Royal Rooftop High-Tea
          </span>
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-[#B99470]" />
            Flexible Check-In / Check-Out
          </span>
        </div>
      </section>

      {/* Interactive Rooms & Filter Showcase */}
      <RoomsSection onSelectRoom={handleSelectRoom} />

      {/* Accommodations FAQ */}
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingWidgets onOpenBooking={handleOpenBooking} />

      {/* Reservation Dialog */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={selectedRoomData}
      />
    </main>
  );
}
