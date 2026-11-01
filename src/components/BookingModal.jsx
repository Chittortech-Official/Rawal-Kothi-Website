'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, Bed, CheckCircle2, Phone, MessageSquare, Utensils, Clock, Sparkles } from 'lucide-react';
import { RoyalLotusCrest, OrnateDivider } from './RoyalIcons';

export default function BookingModal({ isOpen, onClose, initialData }) {
  const [activeTab, setActiveTab] = useState('room'); // 'room' | 'table'

  // Room Form State
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

  // Table Reservation State
  const [tableData, setTableData] = useState({
    name: '',
    phone: '',
    date: '',
    timeSlot: 'Sunset Hours (5:00 PM – 7:00 PM)',
    seatingPreference: 'Golden Sunset Terrace (Panoramic Valley View)',
    guests: '2 Guests (Romantic Sunset)',
    specialNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitType, setSubmitType] = useState('room');

  useEffect(() => {
    if (initialData) {
      if (initialData.bookingType === 'table' || initialData.type === 'table') {
        setActiveTab('table');
      } else {
        setActiveTab('room');
      }

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

  // WhatsApp Room Booking
  const handleWhatsAppRoomBooking = (e) => {
    e.preventDefault();
    const msg = `*New Room Reservation Request - Rawal Kothi Fort*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Room:* ${formData.room}%0A*Check-In:* ${formData.checkIn}%0A*Check-Out:* ${formData.checkOut}%0A*Guests:* ${formData.guests}%0A*Special Request:* ${formData.specialRequest || 'None'}`;
    window.open(`https://wa.me/918058877878?text=${msg}`, '_blank');
    setSubmitType('room');
    setSubmitted(true);
  };

  // WhatsApp Table Reservation
  const handleWhatsAppTableBooking = (e) => {
    e.preventDefault();
    const msg = `*New Rooftop Table Reservation - Rawal Kothi*%0A%0A*Name:* ${tableData.name}%0A*Phone:* ${tableData.phone}%0A*Date:* ${tableData.date}%0A*Time Slot:* ${tableData.timeSlot}%0A*Seating:* ${tableData.seatingPreference}%0A*Guests:* ${tableData.guests}%0A*Special Notes:* ${tableData.specialNotes || 'None'}`;
    window.open(`https://wa.me/918058877878?text=${msg}`, '_blank');
    setSubmitType('table');
    setSubmitted(true);
  };

  const handleDirectSubmit = (e) => {
    e.preventDefault();
    setSubmitType(activeTab);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-start sm:items-center justify-center p-3 sm:p-4 py-6 sm:py-8 overflow-y-auto">
      <div
        className="relative bg-[#FAF7F2] max-w-lg w-full border border-[#B99470]/40 shadow-2xl p-4 sm:p-7 my-auto text-[#1A1615]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 text-gray-500 hover:text-black p-1.5 focus:outline-none transition-colors z-10"
          aria-label="Close Reservation Dialog"
        >
          <X size={22} />
        </button>

        {submitted ? (
          <div className="text-center py-6 sm:py-8">
            <CheckCircle2 size={48} className="text-[#B99470] mx-auto mb-3" />
            <RoyalLotusCrest className="w-10 h-10 text-[#B99470] mx-auto mb-2" />
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1615] mb-2">
              Khamma Ghani! Reservation Received
            </h3>
            <p className="text-xs sm:text-sm text-[#5B5E63] font-sans max-w-md mx-auto mb-5 leading-relaxed">
              {submitType === 'table' ? (
                <>
                  Thank you, <strong>{tableData.name || 'esteemed guest'}</strong>. Your rooftop table reservation request for <strong>{tableData.seatingPreference}</strong> on <strong>{tableData.date || 'your selected date'}</strong> has been received. Our concierge will confirm your table shortly.
                </>
              ) : (
                <>
                  Thank you, <strong>{formData.name || 'esteemed guest'}</strong>. Our royal reservations desk has received your request for <strong>{formData.room}</strong>. We will contact you at <strong>{formData.phone}</strong> shortly with your confirmation voucher.
                </>
              )}
            </p>
            <div className="bg-white p-3.5 border border-[#B99470]/30 text-xs text-gray-600 mb-6 space-y-1">
              <p>Inquiry Reference: <strong>RK-{Math.floor(100000 + Math.random() * 900000)}</strong></p>
              <p>Direct Concierge Line: <strong>+91 80588 77878</strong></p>
            </div>
            <button
              onClick={onClose}
              className="w-full sm:w-auto bg-[#B99470] text-white px-8 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-[#9E7B58] transition-colors"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="text-center mb-4 sm:mb-5">
              <RoyalLotusCrest className="w-8 h-8 sm:w-9 sm:h-9 text-[#B99470] mx-auto mb-1.5" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#B99470] font-bold block">
                ROYAL RESERVATION
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1A1615]">
                {activeTab === 'table' ? 'Reserve a Rooftop Table' : 'Book Your Stay at Rawal Kothi'}
              </h3>
              <OrnateDivider color="#B99470" className="my-1.5" />
            </div>

            {/* Toggle Tabs: Room / Suite vs Rooftop Table */}
            <div className="grid grid-cols-2 gap-2 mb-4 p-1 bg-white border border-[#E8DFD3]">
              <button
                type="button"
                onClick={() => setActiveTab('room')}
                className={`py-2 px-2 text-center text-xs font-medium uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'room'
                    ? 'bg-[#B99470] text-white shadow-sm font-semibold'
                    : 'text-[#5B5E63] hover:text-[#1A1615]'
                }`}
              >
                <Bed size={14} /> Room / Suite
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('table')}
                className={`py-2 px-2 text-center text-xs font-medium uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'table'
                    ? 'bg-[#B99470] text-white shadow-sm font-semibold'
                    : 'text-[#5B5E63] hover:text-[#1A1615]'
                }`}
              >
                <Utensils size={14} /> Reserve a Table
              </button>
            </div>

            {/* Form 1: Rooftop Table Reservation */}
            {activeTab === 'table' ? (
              <form onSubmit={handleDirectSubmit} className="space-y-3 sm:space-y-3.5">
                {/* Seating Preference */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-gray-600 font-semibold block mb-1">
                    Select Rooftop Ambience / Seating
                  </label>
                  <select
                    value={tableData.seatingPreference}
                    onChange={(e) => setTableData({ ...tableData, seatingPreference: e.target.value })}
                    className="w-full bg-white border border-[#E8DFD3] focus:border-[#B99470] px-3 py-2 text-xs text-[#1A1615] outline-none"
                  >
                    <option value="Golden Sunset Terrace (Panoramic Valley View)">Golden Sunset Terrace (Panoramic Valley View)</option>
                    <option value="Starlit Evening Lounge (Romantic Lanterns)">Starlit Evening Lounge (Romantic Lanterns)</option>
                    <option value="Ornate Wooden Gazebo (All-Day Cafe)">Ornate Wooden Gazebo (All-Day Cafe)</option>
                    <option value="Panoramic Day Deck (Open Skies)">Panoramic Day Deck (Open Skies)</option>
                  </select>
                </div>

                {/* Date & Time Slot in Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-gray-600 font-semibold block mb-1">
                      Reservation Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={tableData.date}
                      onChange={(e) => setTableData({ ...tableData, date: e.target.value })}
                      className="w-full bg-white border border-[#E8DFD3] focus:border-[#B99470] px-3 py-2 text-xs text-[#1A1615] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-gray-600 font-semibold block mb-1">
                      Time Slot
                    </label>
                    <select
                      value={tableData.timeSlot}
                      onChange={(e) => setTableData({ ...tableData, timeSlot: e.target.value })}
                      className="w-full bg-white border border-[#E8DFD3] focus:border-[#B99470] px-3 py-2 text-xs text-[#1A1615] outline-none"
                    >
                      <option value="Sunset Hours (5:00 PM – 7:00 PM)">Sunset Hours (5:00 PM – 7:00 PM)</option>
                      <option value="Dinner Prime (7:00 PM – 9:30 PM)">Dinner Prime (7:00 PM – 9:30 PM)</option>
                      <option value="Late Night Starlight (9:30 PM – 11:30 PM)">Late Night Starlight (9:30 PM – 11:30 PM)</option>
                      <option value="Lunch / High-Tea (12:30 PM – 4:30 PM)">Lunch / High-Tea (12:30 PM – 4:30 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-gray-600 font-semibold block mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={tableData.guests}
                    onChange={(e) => setTableData({ ...tableData, guests: e.target.value })}
                    className="w-full bg-white border border-[#E8DFD3] focus:border-[#B99470] px-3 py-2 text-xs text-[#1A1615] outline-none"
                  >
                    <option value="2 Guests (Romantic Sunset)">2 Guests (Romantic Sunset)</option>
                    <option value="3-4 Guests (Family Dining)">3-4 Guests (Family Dining)</option>
                    <option value="5-8 Guests (Celebration Table)">5-8 Guests (Celebration Table)</option>
                    <option value="8+ Guests (Group Gathering)">8+ Guests (Group Gathering)</option>
                  </select>
                </div>

                {/* Guest Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-gray-600 font-semibold block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Singh"
                      value={tableData.name}
                      onChange={(e) => setTableData({ ...tableData, name: e.target.value })}
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
                      value={tableData.phone}
                      onChange={(e) => setTableData({ ...tableData, phone: e.target.value })}
                      className="w-full bg-white border border-[#E8DFD3] focus:border-[#B99470] px-3 py-2 text-xs text-[#1A1615] outline-none"
                    />
                  </div>
                </div>

                {/* Special Food / Seating Requests */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-gray-600 font-semibold block mb-1">
                    Special Occasion / Dietary Notes (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Anniversary candlelight, Jain food preference, etc."
                    value={tableData.specialNotes}
                    onChange={(e) => setTableData({ ...tableData, specialNotes: e.target.value })}
                    className="w-full bg-white border border-[#E8DFD3] focus:border-[#B99470] px-3 py-2 text-xs text-[#1A1615] outline-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 sm:pt-3 space-y-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppTableBooking}
                    className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 text-xs uppercase tracking-[0.16em] font-semibold flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    <MessageSquare size={16} /> Instant Confirm via WhatsApp
                  </button>
                  <button
                    type="submit"
                    className="w-full bg-[#B99470] hover:bg-[#9E7B58] text-white py-3 px-4 text-xs uppercase tracking-[0.16em] font-semibold transition-colors shadow-md"
                  >
                    Confirm Table Reservation
                  </button>
                </div>
              </form>
            ) : (
              /* Form 2: Room & Suite Reservation */
              <form onSubmit={handleDirectSubmit} className="space-y-3 sm:space-y-3.5">
                {/* Room Selection */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-gray-600 font-semibold block mb-1">
                    Select Suite / Room Type
                  </label>
                  <select
                    value={formData.room}
                    onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                    className="w-full bg-white border border-[#E8DFD3] focus:border-[#B99470] px-3 py-2 text-xs text-[#1A1615] outline-none"
                  >
                    <option value="City View Kothi Suite (₹6,698/night)">City View Kothi Suite (₹6,698/night)</option>
                    <option value="Padmini Royal Suite (₹7,999/night)">Padmini Royal Suite (₹7,999/night)</option>
                    <option value="Chetak Heritage Suite (₹6,499/night)">Chetak Heritage Suite (₹6,499/night)</option>
                    <option value="Meera Palace Suite (₹6,999/night)">Meera Palace Suite (₹6,999/night)</option>
                    <option value="Rawal Premiere Room (₹5,299/night)">Rawal Premiere Room (₹5,299/night)</option>
                    <option value="Super Deluxe Heritage Room (₹4,199/night)">Super Deluxe Heritage Room (₹4,199/night)</option>
                  </select>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-gray-600 font-semibold block mb-1">
                      Check-In Date *
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
                      Check-Out Date *
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
                    className="w-full bg-white border border-[#E8DFD3] focus:border-[#B99470] px-3 py-2 text-xs text-[#1A1615] outline-none"
                  >
                    <option value="1 Adult, 1 Room">1 Adult, 1 Room</option>
                    <option value="2 Adults, 1 Room">2 Adults, 1 Room</option>
                    <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
                    <option value="3 Adults, 1 Suite">3 Adults, 1 Suite</option>
                    <option value="4+ Family Stay">Family Suite (4+ Guests)</option>
                  </select>
                </div>

                {/* Guest Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
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
                <div className="pt-2 sm:pt-3 space-y-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppRoomBooking}
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
            )}
          </div>
        )}
      </div>
    </div>
  );
}
