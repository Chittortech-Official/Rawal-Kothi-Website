'use client';

import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

export default function FloatingWidgets() {
  return (
    <>
      {/* Floating WhatsApp and Call Action Buttons */}
      <div className="fixed right-3.5 sm:right-6 bottom-6 sm:bottom-8 z-40 flex flex-col gap-2.5 sm:gap-3">
        {/* WhatsApp Floating Circle Button */}
        <a
          href="https://wa.me/918058877878?text=Hello%20Rawal%20Kothi,%20I%20would%20like%20to%20inquire%20about%20room%20booking%20and%20rooftop%20dining."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 sm:w-13 sm:h-13 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group relative border-2 border-white/90"
        >
          <MessageCircle size={24} className="fill-current" />
          <span className="hidden md:block absolute right-full mr-3 bg-black/85 text-white text-[11px] px-2.5 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
            Chat on WhatsApp
          </span>
        </a>

        {/* Phone Floating Circle Button */}
        <a
          href="tel:+918058877878"
          aria-label="Call Rawal Kothi"
          className="w-12 h-12 sm:w-13 sm:h-13 bg-[#B99470] hover:bg-[#9E7B58] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group relative border-2 border-white/90"
        >
          <Phone size={22} className="fill-current" />
          <span className="hidden md:block absolute right-full mr-3 bg-black/85 text-white text-[11px] px-2.5 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
            Call Reservations
          </span>
        </a>
      </div>
    </>
  );
}
