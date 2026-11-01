'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWidgets from '../../components/FloatingWidgets';
import BookingModal from '../../components/BookingModal';
import RoyalCursor from '../../components/RoyalCursor';
import { RoyalLotusCrest, OrnateDivider } from '../../components/RoyalIcons';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*New Contact Inquiry - Rawal Kothi*%0A%0A*Name:* ${contactForm.name}%0A*Phone:* ${contactForm.phone}%0A*Email:* ${contactForm.email}%0A*Subject:* ${contactForm.subject}%0A*Message:* ${contactForm.message}`;
    window.open(`https://wa.me/918058877878?text=${msg}`, '_blank');
    setSubmitted(true);
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
            <span className="text-white">Royal Contact</span>
          </nav>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal mb-4">
            Connect with Rawal Kothi
          </h1>
          <OrnateDivider color="#B99470" className="my-3" />
          <p className="text-gray-300 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Our 24/7 palace concierge and reservation desk are here to arrange your stay, rooftop table, private celebrations, and fort tours.
          </p>
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
                Warm Mewari Hospitality Awaits You
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
                    Hotel Rawal Kothi Fort, Chittorgarh Fort Road, Near Bhandar Ke Ganesh Ji, Kidwai Nagar, Chittorgarh - 312001, Rajasthan
                  </p>
                  <p className="text-[11px] text-[#B99470] font-semibold mt-1">4 Mins Walk to Kalika Mata Temple</p>
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
                    <p>Reservations: <a href="tel:+918690142444" className="text-[#1A1615] font-bold hover:text-[#B99470]">+91 86 9014 2444</a></p>
                  </div>
                </div>
              </div>

              {/* Card 3: WhatsApp & Email */}
              <div className="bg-white border border-[#B99470]/30 p-5 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-[#FAF7F2] text-[#B99470] rounded-sm shrink-0">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#1A1615] font-medium mb-1">Digital Assistance</h4>
                  <div className="space-y-1 text-xs text-gray-600">
                    <p>WhatsApp Desk: <a href="https://wa.me/918058877878" target="_blank" rel="noreferrer" className="text-[#25D366] font-semibold hover:underline">+91 80588 77878 (Instant)</a></p>
                    <p>Email: <a href="mailto:reservations@rawalkothi.com" className="hover:text-[#B99470]">reservations@rawalkothi.com</a></p>
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
              Fill out your details below and our team will get in touch with you immediately.
            </p>

            {submitted ? (
              <div className="text-center py-10 bg-[#FAF7F2] border border-[#B99470]/30 p-6">
                <CheckCircle2 size={44} className="text-[#B99470] mx-auto mb-3" />
                <h4 className="font-serif text-xl text-[#1A1615] mb-2">Thank You, Khamma Ghani!</h4>
                <p className="text-xs text-[#5B5E63] font-sans max-w-sm mx-auto mb-4">
                  Your message has been delivered to our front desk. We look forward to welcoming you to Rawal Kothi.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#B99470] text-white px-6 py-2.5 text-xs uppercase tracking-widest font-semibold"
                >
                  Send Another Message
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
                      <option value="Destination Wedding / Banquet">Destination Wedding / Banquet</option>
                      <option value="Travel Directions / Fort Proximity">Travel Directions / Fort Proximity</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="uppercase tracking-wider text-gray-600 font-semibold block mb-1">
                    Your Message / Special Requests *
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
