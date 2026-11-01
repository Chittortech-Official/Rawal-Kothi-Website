'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWidgets from '../../components/FloatingWidgets';
import BookingModal from '../../components/BookingModal';
import RoyalCursor from '../../components/RoyalCursor';
import RoomsSection from '../../components/RoomsSection';
import { RoyalLotusCrest, OrnateDivider } from '../../components/RoyalIcons';
import { 
  Bed, ShieldCheck, Sparkles, Clock, CheckCircle, Maximize, Users, 
  Bath, Coffee, Wifi, Star, Check, ArrowRight, Compass 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const suiteComparison = [
  {
    name: 'City View Kothi Suite',
    size: '1,615 sq. ft.',
    capacity: '3 Guests',
    bed: 'Royal Double Bed',
    view: 'Panoramic City & Fort Valley',
    jacuzzi: 'Modern Ensuite Bath',
    price: '₹6,698',
    highlight: 'Authentic Hand-Painted Peacock Murals',
    popular: true,
  },
  {
    name: 'Padmini Royal Suite',
    size: '650 sq. ft.',
    capacity: '3 Guests',
    bed: 'Carved Teakwood King',
    view: 'Garden & Sunset Horizon',
    jacuzzi: 'Two-Seater Luxury Jacuzzi',
    price: '₹7,999',
    highlight: 'Private Jharokha Windows & Balcony',
    popular: false,
  },
  {
    name: 'Chetak Heritage Suite',
    size: '550 sq. ft.',
    capacity: '3 Guests',
    bed: 'Four-Poster Canopy King',
    view: 'Palace Courtyard & Pool',
    jacuzzi: 'In-Suite Jacuzzi Tub',
    price: '₹6,499',
    highlight: 'Separate Living Drawing Salon',
    popular: false,
  },
  {
    name: 'Meera Palace Suite',
    size: '650 sq. ft.',
    capacity: '3 Guests',
    bed: 'Plush Heritage Emperor Bed',
    view: 'Rose Garden & Courtyard',
    jacuzzi: 'Deep Soak Bathtub',
    price: '₹6,999',
    highlight: 'Quiet Library Corner & High-Tea Service',
    popular: false,
  },
  {
    name: 'Rawal Premiere Room',
    size: '450 sq. ft.',
    capacity: '3 Guests',
    bed: 'Handcrafted Heritage King',
    view: 'Fountain Courtyard',
    jacuzzi: 'Two-Seater Jacuzzi',
    price: '₹5,299',
    highlight: 'Private Sit-Out Balcony',
    popular: false,
  },
  {
    name: 'Super Deluxe Heritage',
    size: '260 sq. ft.',
    capacity: '2-3 Guests',
    bed: 'Plush King or Twin Beds',
    view: 'Aravalli Hills & Resort Grounds',
    jacuzzi: 'Ensuite Marble Rain Shower',
    price: '₹4,199',
    highlight: 'Arched Jharokha Windows',
    popular: false,
  },
];

export default function RoomsPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoomData, setSelectedRoomData] = useState(null);

  const handleOpenBooking = () => {
    setSelectedRoomData(null);
    setBookingModalOpen(true);
  };

  const handleSelectRoom = (room) => {
    setSelectedRoomData(room);
    setBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] selection:bg-[#B99470] selection:text-white w-full max-w-full overflow-x-hidden">
      <RoyalCursor />
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Atmospheric Cinematic Banner with High-Res Suite Background */}
      <section className="relative pt-40 pb-28 sm:pt-48 sm:pb-36 bg-[#1A1615] text-white overflow-hidden text-center">
        <div className="absolute inset-0">
          <Image
            src="/chetak-suite.jpg"
            alt="Rawal Kothi Royal Fresco Suite"
            fill
            priority
            className="object-cover opacity-25 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1615] via-black/60 to-black/85" />
          <div className="absolute inset-0 bg-jali-pattern opacity-10 pointer-events-none" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <RoyalLotusCrest className="w-14 h-14 text-[#B99470] mx-auto mb-3 animate-pulse" />
          <nav className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#B99470] font-sans mb-3 flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>•</span>
            <span className="text-white">Royal Accommodations</span>
          </nav>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight mb-4 tracking-wide">
            Sanctuaries of Imperial Mewar
          </h1>
          <OrnateDivider color="#B99470" className="my-3" />
          <p className="text-gray-300 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Each suite at Rawal Kothi is a masterwork of architectural devotion—hand-painted peacock frescoes, four-poster canopy beds, private jacuzzi sanctuaries, and expansive views over historic Chittorgarh Fort.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleOpenBooking}
              className="bg-[#B99470] hover:bg-[#9E7B58] text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Check Availability & Rates
            </button>
            <a
              href="https://wa.me/918058877878?text=Hello%20Rawal%20Kothi,%20I%20would%20like%20to%20inquire%20about%20suite%20availability."
              target="_blank"
              rel="noreferrer"
              className="bg-transparent hover:bg-white/10 text-white border border-[#B99470]/50 hover:border-[#B99470] px-6 py-3.5 text-xs uppercase tracking-[0.16em] transition-colors"
            >
              WhatsApp Concierge
            </a>
          </div>
        </div>
      </section>

      {/* 3 Pillars of Mewari Luxury Living */}
      <section className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#B99470]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#934379] font-bold block mb-1">
              THE ART OF REGAL LIVING
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1615]">
              Handcrafted Details in Every Suite
            </h2>
            <OrnateDivider className="my-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 border border-[#B99470]/30 shadow-sm text-center group hover:border-[#B99470] transition-colors">
              <div className="w-14 h-14 mx-auto mb-4 bg-[#FAF7F2] rounded-full flex items-center justify-center text-[#B99470] group-hover:scale-110 transition-transform">
                <Sparkles size={24} />
              </div>
              <h3 className="font-serif text-lg text-[#1A1615] mb-2">Authentic Indigo Frescoes</h3>
              <p className="text-xs text-[#5B5E63] font-sans leading-relaxed">
                Hand-painted by generational Mewari artisans using natural lime plaster and mineral pigments portraying royal peacocks and floral creepers.
              </p>
            </div>

            <div className="bg-white p-7 border border-[#B99470]/30 shadow-sm text-center group hover:border-[#B99470] transition-colors">
              <div className="w-14 h-14 mx-auto mb-4 bg-[#FAF7F2] rounded-full flex items-center justify-center text-[#B99470] group-hover:scale-110 transition-transform">
                <Bath size={24} />
              </div>
              <h3 className="font-serif text-lg text-[#1A1615] mb-2">Jacuzzi & Soaking Tubs</h3>
              <p className="text-xs text-[#5B5E63] font-sans leading-relaxed">
                Rejuvenate after a day exploring the vast fort with heated private jacuzzi tubs, Italian marble rain showers, and herbal Ayurvedic amenities.
              </p>
            </div>

            <div className="bg-white p-7 border border-[#B99470]/30 shadow-sm text-center group hover:border-[#B99470] transition-colors">
              <div className="w-14 h-14 mx-auto mb-4 bg-[#FAF7F2] rounded-full flex items-center justify-center text-[#B99470] group-hover:scale-110 transition-transform">
                <Coffee size={24} />
              </div>
              <h3 className="font-serif text-lg text-[#1A1615] mb-2">Dedicated Butler Touch</h3>
              <p className="text-xs text-[#5B5E63] font-sans leading-relaxed">
                From morning bed-tea served in fine brassware to evening turn-down service and luggage assistance up the historic fort village path.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Filtered Rooms Grid Showcase */}
      <RoomsSection onSelectRoom={handleSelectRoom} />

      {/* Suite Comparison Matrix Table */}
      <section className="py-20 sm:py-24 bg-white border-t border-[#E8DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B99470] font-bold block mb-1">
              SIDE-BY-SIDE OVERVIEW
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1A1615]">
              Compare Rawal Kothi Accommodations
            </h2>
            <OrnateDivider className="my-2" />
            <p className="text-xs sm:text-sm text-[#5B5E63] font-sans">
              Choose the suite or room that best suits your holiday, romantic celebration, or family staycation.
            </p>
          </div>

          {/* Responsive Comparison Table Container */}
          <div className="overflow-x-auto border border-[#B99470]/30 shadow-sm">
            <table className="w-full text-left border-collapse text-xs font-sans">
              <thead>
                <tr className="bg-[#1A1615] text-white border-b border-[#B99470]/30">
                  <th className="p-4 font-serif text-sm font-normal tracking-wider">Suite / Room</th>
                  <th className="p-4 font-serif text-sm font-normal tracking-wider">Floor Area</th>
                  <th className="p-4 font-serif text-sm font-normal tracking-wider">Bed Type</th>
                  <th className="p-4 font-serif text-sm font-normal tracking-wider">Bath Feature</th>
                  <th className="p-4 font-serif text-sm font-normal tracking-wider">View</th>
                  <th className="p-4 font-serif text-sm font-normal tracking-wider">Starting Price</th>
                  <th className="p-4 font-serif text-sm font-normal tracking-wider text-right">Reserve</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8DFD3]">
                {suiteComparison.map((suite, idx) => (
                  <tr key={idx} className={`hover:bg-[#FAF7F2] transition-colors ${suite.popular ? 'bg-[#FAF7F2]/60' : 'bg-white'}`}>
                    <td className="p-4 font-medium text-[#1A1615]">
                      <div className="font-serif text-sm text-[#1A1615]">{suite.name}</div>
                      <span className="text-[10px] text-[#934379] font-semibold">{suite.highlight}</span>
                    </td>
                    <td className="p-4 text-[#5B5E63]">{suite.size}</td>
                    <td className="p-4 text-[#5B5E63]">{suite.bed}</td>
                    <td className="p-4 text-[#5B5E63]">
                      <span className="inline-flex items-center gap-1 text-[#2C2725]">
                        <Check size={12} className="text-[#B99470]" />
                        {suite.jacuzzi}
                      </span>
                    </td>
                    <td className="p-4 text-[#5B5E63]">{suite.view}</td>
                    <td className="p-4 font-bold text-[#1A1615] text-sm">{suite.price} <span className="text-[10px] font-normal text-gray-500">/nt</span></td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => handleSelectRoom(suite)}
                        className="bg-[#B99470] hover:bg-[#9E7B58] text-white px-3.5 py-1.5 text-[10px] uppercase tracking-wider font-semibold transition-colors"
                      >
                        Book
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Included Guest Perks */}
      <section className="py-16 bg-[#FAF7F2] border-t border-[#E8DFD3]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="font-serif text-xl sm:text-2xl text-[#1A1615] mb-6">Every Stay Includes Our Regal Hospitality</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-[#5B5E63] font-sans">
            <div className="p-4 bg-white border border-[#B99470]/20 shadow-xs flex flex-col items-center">
              <CheckCircle size={20} className="text-[#B99470] mb-2" />
              <span className="font-semibold text-[#1A1615]">Complimentary High-Tea</span>
              <span className="text-[11px] text-gray-500 mt-0.5">Every sunset on the rooftop</span>
            </div>
            <div className="p-4 bg-white border border-[#B99470]/20 shadow-xs flex flex-col items-center">
              <Wifi size={20} className="text-[#B99470] mb-2" />
              <span className="font-semibold text-[#1A1615]">Fiber Wi-Fi</span>
              <span className="text-[11px] text-gray-500 mt-0.5">Seamless in all suites & terraces</span>
            </div>
            <div className="p-4 bg-white border border-[#B99470]/20 shadow-xs flex flex-col items-center">
              <Compass size={20} className="text-[#B99470] mb-2" />
              <span className="font-semibold text-[#1A1615]">Fort Walking Guide</span>
              <span className="text-[11px] text-gray-500 mt-0.5">4 mins to Kalika Mata Temple</span>
            </div>
            <div className="p-4 bg-white border border-[#B99470]/20 shadow-xs flex flex-col items-center">
              <ShieldCheck size={20} className="text-[#B99470] mb-2" />
              <span className="font-semibold text-[#1A1615]">Luggage Assistance</span>
              <span className="text-[11px] text-gray-500 mt-0.5">Direct palace vehicle parking</span>
            </div>
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
        initialData={selectedRoomData}
      />
    </main>
  );
}
