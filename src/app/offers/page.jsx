'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWidgets from '../../components/FloatingWidgets';
import BookingModal from '../../components/BookingModal';
import RoyalCursor from '../../components/RoyalCursor';
import SpecialOffersSection from '../../components/SpecialOffersSection';
import FaqSection from '../../components/FaqSection';
import { RoyalLotusCrest, OrnateDivider } from '../../components/RoyalIcons';
import { Tag, Sparkles, Gift, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function OffersPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedOfferData, setSelectedOfferData] = useState(null);

  const handleOpenBooking = (data = null) => {
    setSelectedOfferData(data);
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
            <span className="text-white">Royal Offers & Packages</span>
          </nav>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal mb-4">
            Exclusive Stay & Dining Packages
          </h1>
          <OrnateDivider color="#B99470" className="my-3" />
          <p className="text-gray-300 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Direct booking benefits, seasonal staycation discounts, royal rooftop dining vouchers, and authentic Mewari heritage experiences curated for you.
          </p>
        </div>
      </section>

      {/* Perks Banner */}
      <section className="bg-[#FAF7F2] border-b border-[#B99470]/30 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-[#2C2725] font-sans">
          <span className="flex items-center gap-2">
            <Tag size={16} className="text-[#B99470]" />
            Best Rate Guarantee on Direct Bookings
          </span>
          <span className="flex items-center gap-2">
            <Gift size={16} className="text-[#B99470]" />
            Complimentary Rooftop Sunset High-Tea
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#B99470]" />
            100% Flexible Date Rescheduling
          </span>
        </div>
      </section>

      {/* Interactive Special Offers Section */}
      <SpecialOffersSection onOpenBooking={handleOpenBooking} />

      {/* FAQs */}
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingWidgets onOpenBooking={handleOpenBooking} />

      {/* Reservation Dialog */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={selectedOfferData}
      />
    </main>
  );
}
