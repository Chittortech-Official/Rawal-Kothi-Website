'use client';

import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

export default function FloatingWidgets({ onOpenBooking }) {
  return (
    <>
      {/* Desktop & Mobile Floating Right Buttons */}
      <div className="fixed right-3 sm:right-6 bottom-20 sm:bottom-24 z-40 flex flex-col gap-2.5 sm:gap-3">
        {/* WhatsApp Floating Circle Button */}
        <a
          href="https://wa.me/918690142444?text=Hello%20Rawal%20Kothi,%20I%20would%20like%20to%20inquire%20about%20room%20booking%20and%20rooftop%20dining."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-11 h-11 sm:w-13 sm:h-13 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 group relative border-2 border-white/90"
        >
          <MessageCircle size={22} className="fill-current sm:scale-125" />
          <span className="hidden md:block absolute right-full mr-3 bg-black/85 text-white text-[11px] px-2.5 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
            Chat on WhatsApp
          </span>
        </a>

        {/* Phone Floating Circle Button */}
        <a
          href="tel:+918690142444"
          aria-label="Call Rawal Kothi"
          className="w-11 h-11 sm:w-13 sm:h-13 bg-[#B99470] hover:bg-[#9E7B58] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 group relative border-2 border-white/90"
        >
          <Phone size={20} className="fill-current sm:scale-125" />
          <span className="hidden md:block absolute right-full mr-3 bg-black/85 text-white text-[11px] px-2.5 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
            Call Reservations
          </span>
        </a>
      </div>

      {/* Pinned Bottom Mobile Booking Bar (visible only on mobile) */}
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-[#161312]/95 backdrop-blur-md border-t border-[#B99470]/30 px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase text-[#B99470] font-bold tracking-wider">
            RAWAL KOTHI FORT
          </span>
          <span className="text-xs text-white font-medium">
            From ₹6,698 <span className="text-[10px] text-gray-400 font-normal">/ night</span>
          </span>
        </div>
        <button
          onClick={onOpenBooking}
          className="bg-[#B99470] hover:bg-[#9E7B58] text-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] shadow-md rounded"
        >
          BOOK NOW
        </button>
      </div>
    </>
  );
}
