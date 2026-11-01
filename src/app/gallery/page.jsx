'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWidgets from '../../components/FloatingWidgets';
import BookingModal from '../../components/BookingModal';
import RoyalCursor from '../../components/RoyalCursor';
import GallerySection from '../../components/GallerySection';
import { RoyalLotusCrest, OrnateDivider } from '../../components/RoyalIcons';
import { Camera, Eye, Sparkles, Image as ImageIcon, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function GalleryPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] selection:bg-[#B99470] selection:text-white w-full max-w-full overflow-x-hidden">
      <RoyalCursor />
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero with High-Res Evening Photo Background - Clean Dark Vignette, No White Fog */}
      <section className="relative pt-36 pb-24 sm:pt-44 sm:pb-28 bg-[#1A1615] text-white overflow-hidden text-center border-b-2 border-[#B99470]">
        <div className="absolute inset-0">
          <Image
            src="/113506.jpg"
            alt="Rawal Kothi Evening Splendour"
            fill
            priority
            className="object-cover opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-[#1A1615]" />
          <div className="absolute inset-0 bg-jali-pattern opacity-10 pointer-events-none" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <RoyalLotusCrest className="w-12 h-12 text-[#B99470] mx-auto mb-3" />
          <nav className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#B99470] font-sans mb-3 flex items-center justify-center gap-2 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>•</span>
            <span className="text-white">Visual Photo Gallery</span>
          </nav>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight mb-3 tracking-wide">
            Through the Lens of Royalty
          </h1>
          <OrnateDivider color="#B99470" className="my-2.5" />
          <p className="text-gray-200 font-sans text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Every snapshot captures a treasured moment—from twilight gazing over the city from our rooftop terrace to the serene quiet of our hand-painted fresco suites.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#gallery"
              className="bg-[#B99470] hover:bg-[#9E7B58] text-white px-8 py-3 text-xs uppercase tracking-[0.18em] font-semibold transition-all shadow-lg hover:scale-105"
            >
              Browse Photo Collections
            </a>
            <button
              onClick={handleOpenBooking}
              className="bg-transparent hover:bg-white/10 text-white border border-[#B99470]/60 hover:border-[#B99470] px-6 py-3 text-xs uppercase tracking-[0.16em] transition-colors"
            >
              Book Your Visit
            </button>
          </div>
        </div>
      </section>

      {/* Visual Collections Quick Bar */}
      <section className="bg-white border-b border-[#E8DFD3] py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-[#5B5E63] font-sans">
          <span className="flex items-center gap-2 font-medium text-[#1A1615]">
            <Camera size={16} className="text-[#B99470]" />
            100% Authentic Rawal Kothi Photographs
          </span>
          <span className="flex items-center gap-2">
            <Eye size={16} className="text-[#B99470]" />
            Full-Screen High-Resolution Lightbox
          </span>
          <span className="flex items-center gap-2">
            <Sparkles size={16} className="text-[#B99470]" />
            Mewari Heritage & Rooftop Vistas
          </span>
        </div>
      </section>

      {/* Main Interactive Gallery Showcase with Lightbox */}
      <GallerySection />

      {/* Photography & Pre-Wedding Shoot Notice Card */}
      <section className="py-16 bg-[#FAF7F2] border-t border-[#E8DFD3]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#934379] font-bold block mb-1">
            CREATIVE SESSIONS
          </span>
          <h3 className="font-serif text-2xl text-[#1A1615] mb-3">
            Pre-Wedding Shoots & Private Photography
          </h3>
          <p className="text-xs sm:text-sm text-[#5B5E63] font-sans leading-relaxed max-w-xl mx-auto mb-6">
            With hand-painted floral pillars, vibrant stained-glass staircases, and 360-degree fort sunset decks, Rawal Kothi is a dream setting for bridal and anniversary photography.
          </p>
          <a
            href="https://wa.me/918058877878?text=Hello%20Rawal%20Kothi,%20I%20would%20like%20to%20inquire%20about%20a%20pre-wedding%20or%20photography%20session."
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#1A1615] hover:bg-[#B99470] text-white px-8 py-3 text-xs uppercase tracking-[0.18em] font-semibold transition-colors"
          >
            Inquire for Photography Sessions →
          </a>
        </div>
      </section>

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
