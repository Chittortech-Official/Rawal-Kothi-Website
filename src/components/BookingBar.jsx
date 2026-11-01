'use client';

import React, { useState } from 'react';
import { Calendar, Users, BedDouble, Tag, CheckCircle } from 'lucide-react';

export default function BookingBar({ onCheckAvailability }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Adults');
  const [roomType, setRoomType] = useState('All Suites & Rooms');
  const [promoCode, setPromoCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckAvailability({
      checkIn,
      checkOut,
      guests,
      roomType,
      promoCode,
    });
  };

  return (
    <div className="relative z-30 mt-2 sm:-mt-10 md:-mt-12 max-w-6xl mx-auto px-3 sm:px-6">
      <div className="bg-[#FAF7F2]/95 backdrop-blur-md rounded-lg shadow-2xl border border-[#B99470]/40 p-4 sm:p-6 lg:p-7">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 items-end">
          {/* Check-In */}
          <div className="flex flex-col col-span-1 min-w-0">
            <label className="text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-[#5B5E63] font-semibold mb-1 flex items-center gap-1 truncate">
              <Calendar size={12} className="text-[#B99470] shrink-0" />
              Check-In
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="bg-transparent border-b border-[#2C2725]/40 focus:border-[#B99470] py-1.5 sm:py-2 text-[11px] sm:text-sm text-[#1A1615] font-medium outline-none transition-colors w-full min-w-0"
              required
            />
          </div>

          {/* Check-Out */}
          <div className="flex flex-col col-span-1 min-w-0">
            <label className="text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-[#5B5E63] font-semibold mb-1 flex items-center gap-1 truncate">
              <Calendar size={12} className="text-[#B99470] shrink-0" />
              Check-Out
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="bg-transparent border-b border-[#2C2725]/40 focus:border-[#B99470] py-1.5 sm:py-2 text-[11px] sm:text-sm text-[#1A1615] font-medium outline-none transition-colors w-full min-w-0"
              required
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col col-span-2 sm:col-span-1 min-w-0">
            <label className="text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-[#5B5E63] font-semibold mb-1 flex items-center gap-1 truncate">
              <Users size={12} className="text-[#B99470] shrink-0" />
              Guests & Rooms
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="bg-transparent border-b border-[#2C2725]/40 focus:border-[#B99470] py-1.5 sm:py-2 text-xs sm:text-sm text-[#1A1615] font-medium outline-none transition-colors cursor-pointer w-full min-w-0"
            >
              <option value="1 Adult, 1 Room">1 Adult, 1 Room</option>
              <option value="2 Adults, 1 Room">2 Adults, 1 Room</option>
              <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
              <option value="3 Adults, 1 Suite">3 Adults, 1 Suite</option>
              <option value="4+ Family Stay">Family Suite (4+ Guests)</option>
            </select>
          </div>

          {/* Promo Code */}
          <div className="flex flex-col col-span-2 sm:col-span-1 min-w-0">
            <label className="text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-[#5B5E63] font-semibold mb-1 flex items-center gap-1 truncate">
              <Tag size={12} className="text-[#B99470] shrink-0" />
              Promo Code
            </label>
            <input
              type="text"
              placeholder="OPTIONAL"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="bg-transparent border-b border-[#2C2725]/40 focus:border-[#B99470] py-1.5 sm:py-2 text-xs sm:text-sm text-[#1A1615] placeholder-gray-400 font-medium outline-none transition-colors uppercase w-full min-w-0"
            />
          </div>

          {/* Submit CTA */}
          <div className="col-span-2 lg:col-span-1">
            <button
              type="submit"
              className="w-full bg-[#B99470] hover:bg-[#9E7B58] text-white py-2.5 sm:py-3.5 px-4 text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.01] rounded sm:rounded-none"
            >
              Check Availability
            </button>
          </div>
        </form>

        {/* Regal Direct Booking Benefits Bar */}
        <div className="mt-4 pt-3 border-t border-[#B99470]/20 flex flex-wrap items-center justify-between text-[11px] sm:text-xs text-[#5B5E63] gap-2">
          <span className="flex items-center gap-1.5 text-[#1A1615] font-medium">
            <CheckCircle size={13} className="text-[#B99470]" />
            Best Rate Guaranteed Direct Booking
          </span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle size={13} className="text-[#B99470]" />
            Complimentary Royal Rooftop High-Tea
          </span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle size={13} className="text-[#B99470]" />
            Flexible Cancellation & Priority Check-In
          </span>
        </div>
      </div>
    </div>
  );
}
