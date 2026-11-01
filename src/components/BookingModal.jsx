'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, Bed, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import { RoyalLotusCrest, OrnateDivider } from './RoyalIcons';

export default function BookingModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    room: 'City View Kothi Suite (₹6,698/night)',
    checkIn: '',
    checkOut: '',
    guests: '2 Adults',
    specialRequest: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        room: initialData.name ? `${initialData.name} (${initialData.price}/night)` : prev.room,
        checkIn: initialData.checkIn || prev.checkIn,
        checkOut: initialData.checkOut || prev.checkOut,
        guests: initialData.guests || prev.guests,
      }));
    }
    if (isOpen) {
      setSubmitted(false);
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    const msg = `*New Reservation Request - Rawal Kothi Chittorgarh*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Room:* ${formData.room}%0A*Check-In:* ${formData.checkIn}%0A*Check-Out:* ${formData.checkOut}%0A*Guests:* ${formData.guests}%0A*Special Request:* ${formData.specialRequest || 'None'}`;
    window.open(`https://wa.me/918058877878?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  const handleDirectSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div
        className="relative bg-[#FAF7F2] max-w-xl w-full border border-[#B99470]/40 shadow-2xl p-6 sm:p-8 my-8 text-[#1A1615]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-black p-1 focus:outline-none transition-colors"
          aria-label="Close Booking Dialog"
        >
          <X size={24} />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle2 size={54} className="text-[#B99470] mx-auto mb-4" />
            <RoyalLotusCrest className="w-10 h-10 text-[#B99470] mx-auto mb-2" />
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1615] mb-2">
              Khamma Ghani! Reservation Received
            </h3>
            <p className="text-xs sm:text-sm text-[#5B5E63] font-sans max-w-md mx-auto mb-6">
              Thank you, {formData.name || 'esteemed guest'}. Our royal reservations desk has received your request for <strong>{formData.room}</strong>. We will contact you at <strong>{formData.phone}</strong> shortly with your booking voucher and payment link.
            </p>
            <div className="bg-white p-4 border border-[#B99470]/30 text-xs text-gray-600 mb-6 space-y-1">
              <p>Booking Inquiry Ref: <strong>RK-{Math.floor(100000 + Math.random() * 900000)}</strong></p>
              <p>Direct Assistance: <strong>+91 86 9014 2444</strong></p>
            </div>
            <button
              onClick={onClose}
              className="bg-[#B99470] text-white px-8 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-[#9E7B58] transition-colors"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="text-center mb-6">
              <RoyalLotusCrest className="w-10 h-10 text-[#B99470] mx-auto mb-2" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#B99470] font-bold block">
                ROYAL RESERVATION
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1615]">
                Book Your Stay at Rawal Kothi
              </h3>
              <OrnateDivider color="#B99470" className="my-2" />
            </div>

            <form onSubmit={handleDirectSubmit} className="space-y-4">
              {/* Room Selection */}
              <div>
                <label className="text-[11px] uppercase tracking-wider text-gray-600 font-semibold block mb-1">
                  Select Suite / Room Type
                </label>
                <select
                  value={formData.room}
                  onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                  className="w-full bg-white border border-[#E8DFD3] focus:border-[#B99470] px-3 py-2.5 text-xs text-[#1A1615] outline-none"
                >
                  <option value="Padmini Royal Suite (₹7,999/night)">Padmini Royal Suite (₹7,999/night)</option>
                  <option value="Chetak Heritage Suite (₹6,499/night)">Chetak Heritage Suite (₹6,499/night)</option>
                  <option value="Meera Palace Suite (₹6,999/night)">Meera Palace Suite (₹6,999/night)</option>
                  <option value="Rawal Premiere Room (₹5,299/night)">Rawal Premiere Room (₹5,299/night)</option>
                  <option value="Super Deluxe Heritage Room (₹4,199/night)">Super Deluxe Heritage Room (₹4,199/night)</option>
                </select>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-gray-600 font-semibold block mb-1">
                    Check-In Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="w-full bg-white border border-[#E8DFD3] focus:border-[#B99470] px-3 py-2 text-xs text-[#1A1615] outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-gray-600 font-semibold block mb-1">
                    Check-Out Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="w-full bg-white border border-[#E8DFD3] focus:border-[#B99470] px-3 py-2 text-xs text-[#1A1615] outline-none"
                  />
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="text-[11px] uppercase tracking-wider text-gray-600 font-semibold block mb-1">
                  Guests & Occupancy
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-white border border-[#E8DFD3] focus:border-[#B99470] px-3 py-2.5 text-xs text-[#1A1615] outline-none"
                >
                  <option value="1 Adult, 1 Room">1 Adult, 1 Room</option>
                  <option value="2 Adults, 1 Room">2 Adults, 1 Room</option>
                  <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
                  <option value="3 Adults, 1 Suite">3 Adults, 1 Suite</option>
                  <option value="4+ Family Stay">Family Suite (4+ Guests)</option>
                </select>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-gray-600 font-semibold block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikramaditya Singh"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-[#E8DFD3] focus:border-[#B99470] px-3 py-2 text-xs text-[#1A1615] outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-gray-600 font-semibold block mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-[#E8DFD3] focus:border-[#B99470] px-3 py-2 text-xs text-[#1A1615] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-gray-600 font-semibold block mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="yourname@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-[#E8DFD3] focus:border-[#B99470] px-3 py-2 text-xs text-[#1A1615] outline-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 space-y-2">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 text-xs uppercase tracking-[0.16em] font-semibold flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageSquare size={16} /> Instant Confirm via WhatsApp
                </button>
                <button
                  type="submit"
                  className="w-full bg-[#B99470] hover:bg-[#9E7B58] text-white py-3 px-4 text-xs uppercase tracking-[0.16em] font-semibold transition-colors shadow-md"
                >
                  Submit Booking Request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
