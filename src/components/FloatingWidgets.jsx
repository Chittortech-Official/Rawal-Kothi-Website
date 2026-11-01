'use client';

import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

export default function FloatingWidgets({ onOpenBooking }) {
  return (
    <>
      {/* Desktop & Tablet Floating Right Buttons (Matches Kesar Bagh Screenshot Exactly) */}
      <div className="fixed right-4 sm:right-6 bottom-20 sm:bottom-24 z-40 flex flex-col gap-3">
        {/* WhatsApp Floating Circle Button (Green) */}
        <a
          href="https://wa.me/918690142444?text=Hello%20Rawal%20Kothi,%20I%20would%20like%20to%20inquire%20about%20room%20booking%20and%20rooftop%20dining."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group relative border-2 border-white"
        >
          <MessageCircle size={28} className="fill-current" />
          <span className="absolute right-full mr-3 bg-black/80 text-white text-[11px] px-2.5 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>

        {/* Phone Floating Circle Button (Sandstone Gold) */}
        <a
          href="tel:+918690142444"
          aria-label="Call Rawal Kothi"
          className="w-12 h-12 sm:w-14 sm:h-14 bg-[#B99470] hover:bg-[#9E7B58] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group relative border-2 border-white"
        >
          <Phone size={24} className="fill-current" />
          <span className="absolute right-full mr-3 bg-black/80 text-white text-[11px] px-2.5 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Call Reservations
          </span>
        </a>
      </div>

      {/* Pinned Bottom Mobile Booking Bar (visible only on mobile) */}
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-[#1A1615] border-t border-[#B99470]/30 p-3 flex items-center justify-between gap-3 shadow-2xl">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase text-[#B99470] font-bold tracking-wider">
            RAWAL KOTHI
          </span>
          <span className="text-xs text-white font-medium">
            Starting from ₹4,199
          </span>
        </div>
        <button
          onClick={onOpenBooking}
          className="bg-[#B99470] hover:bg-[#9E7B58] text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] shadow-md"
        >
          BOOK NOW
        </button>
      </div>
    </>
  );
}
