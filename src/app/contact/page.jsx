'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWidgets from '../../components/FloatingWidgets';
import BookingModal from '../../components/BookingModal';
import RoyalCursor from '../../components/RoyalCursor';
import { RoyalLotusCrest, OrnateDivider } from '../../components/RoyalIcons';
import { 
  MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, 
  ShieldCheck, Car, Calendar, Navigation, HelpCircle 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Room / Suite Reservation',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*New Royal Contact Inquiry - Rawal Kothi*%0A%0A*Name:* ${contactForm.name}%0A*Phone:* ${contactForm.phone}%0A*Email:* ${contactForm.email}%0A*Subject:* ${contactForm.subject}%0A*Message:* ${contactForm.message}`;
    window.open(`https://wa.me/918058877878?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] selection:bg-[#B99470] selection:text-white w-full max-w-full overflow-x-hidden">
      <RoyalCursor />
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero with High-Res Concierge Lobby Background - Clean Dark Vignette, No White Fog */}
      <section className="relative pt-36 pb-24 sm:pt-44 sm:pb-28 bg-[#1A1615] text-white overflow-hidden text-center border-b-2 border-[#B99470]">
        <div className="absolute inset-0">
          <Image
            src="/113503.jpg"
            alt="Rawal Kothi Royal Concierge Desk"
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
            <span className="text-white">Royal Contact & Concierge</span>
          </nav>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight mb-3 tracking-wide">
            At Your Royal Service
          </h1>
          <OrnateDivider color="#B99470" className="my-2.5" />
          <p className="text-gray-200 font-sans text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Our 24-hour concierge desk is ready to assist with reservations, custom rooftop dining arrangements, fort temple walks, and comfortable arrival directions.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+918058877878"
              className="bg-[#B99470] hover:bg-[#9E7B58] text-white px-8 py-3 text-xs uppercase tracking-[0.18em] font-semibold transition-all shadow-lg hover:scale-105 flex items-center gap-2"
            >
              <Phone size={14} /> Call Primary Desk: +91 80588 77878
            </a>
            <a
              href="https://wa.me/918058877878"
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 text-xs uppercase tracking-[0.16em] font-semibold transition-colors flex items-center gap-2"
            >
              <MessageSquare size={14} /> WhatsApp Concierge
            </a>
          </div>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Royal Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#934379] font-bold block mb-2">
                REACH OUR CONCIERGE
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1615]">
                Warm Mewari Hospitality Awaits
              </h2>
              <OrnateDivider />
              <p className="mt-3 text-sm text-[#5B5E63] font-sans leading-relaxed">
                Whether you need driving directions up Chittorgarh Fort, an anniversary rooftop candlelight reservation, or customized suite arrangements, reach out to us directly.
              </p>
            </div>

            <div className="space-y-4 pt-2 font-sans">
              {/* Card 1: Address */}
              <div className="bg-white border border-[#B99470]/30 p-5 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-[#FAF7F2] text-[#B99470] rounded-sm shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#1A1615] font-medium mb-1">Palace Address</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Hotel Rawal Kothi Fort and Restaurant, Near City View Point, Chittorgarh Fort Village, Chittorgarh - 312001 (Rajasthan) India
                  </p>
                  <p className="text-[11px] text-[#B99470] font-semibold mt-1">Inside Fort Village • Near City View Point</p>
                </div>
              </div>

              {/* Card 2: Phone Lines */}
              <div className="bg-white border border-[#B99470]/30 p-5 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-[#FAF7F2] text-[#B99470] rounded-sm shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#1A1615] font-medium mb-1">Direct Phone Lines</h4>
                  <div className="space-y-1 text-xs text-gray-600">
                    <p>Primary Desk: <a href="tel:+918058877878" className="text-[#1A1615] font-bold hover:text-[#B99470]">+91 80588 77878</a></p>
                    <p>Alternate Line: <a href="tel:+918739996636" className="text-[#1A1615] font-bold hover:text-[#B99470]">+91 87399 96636</a></p>
                  </div>
                </div>
              </div>

              {/* Card 3: Digital Assistance */}
              <div className="bg-white border border-[#B99470]/30 p-5 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-[#FAF7F2] text-[#B99470] rounded-sm shrink-0">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#1A1615] font-medium mb-1">Digital Assistance</h4>
                  <div className="space-y-1 text-xs text-gray-600">
                    <p>WhatsApp Desk: <a href="https://wa.me/918058877878" target="_blank" rel="noreferrer" className="text-[#25D366] font-semibold hover:underline">+91 80588 77878 (Instant)</a></p>
                    <p>Official Email: <a href="mailto:info@hotelRawalkothiFort.in" className="hover:text-[#B99470]">info@hotelRawalkothiFort.in</a></p>
                  </div>
                </div>
              </div>

              {/* Card 4: Timings & Check-In */}
              <div className="bg-white border border-[#B99470]/30 p-5 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-[#FAF7F2] text-[#B99470] rounded-sm shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#1A1615] font-medium mb-1">Front Desk Hours & Check-In</h4>
                  <div className="space-y-1 text-xs text-gray-600">
                    <p>Front Desk: <strong>24 Hours Open (Always Available)</strong></p>
                    <p>Check-In: <strong>12:00 PM</strong> | Check-Out: <strong>10:00 AM</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-[#B99470]/30 p-6 sm:p-10 shadow-lg relative">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B99470] font-bold block mb-1">
              SEND A ROYAL MESSAGE
            </span>
            <h3 className="font-serif text-2xl text-[#1A1615] mb-2">
              How May We Serve You?
            </h3>
            <p className="text-xs text-[#5B5E63] font-sans mb-6">
              Fill out your details below and our concierge team will respond immediately via WhatsApp or phone call.
            </p>

            {submitted ? (
              <div className="text-center py-10 bg-[#FAF7F2] border border-[#B99470]/30 p-6">
                <CheckCircle2 size={48} className="text-[#B99470] mx-auto mb-3" />
                <h4 className="font-serif text-xl text-[#1A1615] mb-2">Khamma Ghani! Message Delivered</h4>
                <p className="text-xs text-[#5B5E63] font-sans max-w-sm mx-auto mb-4">
                  Your inquiry has been routed to our front desk. We look forward to welcoming you to Rawal Kothi.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#B99470] text-white px-6 py-2.5 text-xs uppercase tracking-widest font-semibold"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="uppercase tracking-wider text-gray-600 font-semibold block mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Singh"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#E8DFD3] focus:border-[#B99470] px-3.5 py-2.5 text-[#1A1615] outline-none"
                    />
                  </div>
                  <div>
                    <label className="uppercase tracking-wider text-gray-600 font-semibold block mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#E8DFD3] focus:border-[#B99470] px-3.5 py-2.5 text-[#1A1615] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="uppercase tracking-wider text-gray-600 font-semibold block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="yourname@gmail.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#E8DFD3] focus:border-[#B99470] px-3.5 py-2.5 text-[#1A1615] outline-none"
                    />
                  </div>
                  <div>
                    <label className="uppercase tracking-wider text-gray-600 font-semibold block mb-1">
                      Inquiry Type
                    </label>
                    <select
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#E8DFD3] focus:border-[#B99470] px-3.5 py-2.5 text-[#1A1615] outline-none"
                    >
                      <option value="Room / Suite Reservation">Room / Suite Reservation</option>
                      <option value="Rooftop Dining Table Booking">Rooftop Dining Table Booking</option>
                      <option value="Destination Wedding / Private Terrace">Destination Wedding / Private Terrace</option>
                      <option value="Travel Directions / Station Pickup">Travel Directions / Station Pickup</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="uppercase tracking-wider text-gray-600 font-semibold block mb-1">
                    Your Message / Special Arrangements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your planned arrival date, number of guests, or special arrangements..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#E8DFD3] focus:border-[#B99470] px-3.5 py-2.5 text-[#1A1615] outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#B99470] hover:bg-[#9E7B58] text-white py-3.5 px-6 uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    <Send size={15} /> Send Royal Inquiry via WhatsApp
                  </button>
                </div>
              </form>
            )}
          </div>
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
