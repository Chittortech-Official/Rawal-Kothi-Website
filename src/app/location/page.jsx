'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWidgets from '../../components/FloatingWidgets';
import BookingModal from '../../components/BookingModal';
import RoyalCursor from '../../components/RoyalCursor';
import LocationSection from '../../components/LocationSection';
import { RoyalLotusCrest, OrnateDivider } from '../../components/RoyalIcons';
import { 
  MapPin, Navigation, Compass, Phone, Car, Train, Plane, 
  Clock, CheckCircle, ExternalLink, ShieldCheck 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const fortMonuments = [
  {
    name: 'Kalika Mata Temple',
    distance: '350 meters',
    time: '4 Mins Walk',
    desc: 'Ancient 8th-century sun temple dedicated to Goddess Bhadrakali, right within the fort village.',
  },
  {
    name: 'Chittorgarh Fort Gate (Padan Pol)',
    distance: '1.1 km',
    time: '3 Mins Drive',
    desc: 'The historic first gateway defending the hilltop fortress with memorial chhatris.',
  },
  {
    name: 'Vijay Stambha (Tower of Victory)',
    distance: '1.8 km',
    time: '5 Mins Drive',
    desc: 'Maharana Kumbha’s 9-storeyed masterpiece of Mewari sculpture and triumphal architecture.',
  },
  {
    name: 'Kirti Stambha (Tower of Fame)',
    distance: '1.4 km',
    time: '4 Mins Drive',
    desc: '12th-century Jain tower dedicated to Adinatha, adorned with intricate Tirthankara carvings.',
  },
  {
    name: 'Padmini’s Palace & Water Pavilion',
    distance: '2.5 km',
    time: '7 Mins Drive',
    desc: 'The legendary water palace associated with Queen Padmini, set amidst lotus-filled moats.',
  },
  {
    name: 'Gaumukh Reservoir (Sacred Springs)',
    distance: '1.9 km',
    time: '6 Mins Drive',
    desc: 'Natural rock spring carved into a cow mouth feeding sacred waters on the fort cliff.',
  },
];

export default function LocationPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] selection:bg-[#B99470] selection:text-white w-full max-w-full overflow-x-hidden">
      <RoyalCursor />
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero with High-Res Hilltop Photo Background - Clean Dark Vignette, No White Fog */}
      <section className="relative pt-36 pb-24 sm:pt-44 sm:pb-28 bg-[#1A1615] text-white overflow-hidden text-center border-b-2 border-[#B99470]">
        <div className="absolute inset-0">
          <Image
            src="/113504.jpg"
            alt="Chittorgarh Fort Ramparts & Valley"
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
            <span className="text-white">Location & Proximity</span>
          </nav>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight mb-3 tracking-wide">
            Inside the Historic Fort Village
          </h1>
          <OrnateDivider color="#B99470" className="my-2.5" />
          <p className="text-gray-200 font-sans text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Stay where history happened. Perched inside the peaceful Chittorgarh Fort village on Chittorgarh Fort Road, avoiding tourist bottlenecks and placing you minutes from India’s greatest living heritage monuments.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://maps.google.com/?q=Hotel+Rawal+Kothi+Fort+Chittorgarh"
              target="_blank"
              rel="noreferrer"
              className="bg-[#B99470] hover:bg-[#9E7B58] text-white px-8 py-3 text-xs uppercase tracking-[0.18em] font-semibold transition-all shadow-lg hover:scale-105 flex items-center gap-2"
            >
              <Navigation size={14} /> Open in Google Maps
            </a>
            <a
              href="tel:+918058877878"
              className="bg-transparent hover:bg-white/10 text-white border border-[#B99470]/60 hover:border-[#B99470] px-6 py-3 text-xs uppercase tracking-[0.16em] transition-colors"
            >
              Travel Desk: +91 80588 77878
            </a>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Effortless Connectivity */}
      <section className="bg-white border-b border-[#E8DFD3] py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs font-sans">
          <div className="p-4 border-r border-[#E8DFD3] last:border-r-0">
            <MapPin size={22} className="text-[#B99470] mx-auto mb-2" />
            <span className="block text-gray-500 text-[10px] uppercase tracking-wider mb-0.5">Walk to Kalika Temple</span>
            <span className="text-sm font-semibold text-[#1A1615]">4 Minutes (350m)</span>
          </div>
          <div className="p-4 border-r border-[#E8DFD3] last:border-r-0">
            <Car size={22} className="text-[#B99470] mx-auto mb-2" />
            <span className="block text-gray-500 text-[10px] uppercase tracking-wider mb-0.5">Chittorgarh Fort Gate</span>
            <span className="text-sm font-semibold text-[#1A1615]">1.1 km (3 Mins Drive)</span>
          </div>
          <div className="p-4 border-r border-[#E8DFD3] last:border-r-0">
            <Train size={22} className="text-[#B99470] mx-auto mb-2" />
            <span className="block text-gray-500 text-[10px] uppercase tracking-wider mb-0.5">Railway Junction</span>
            <span className="text-sm font-semibold text-[#1A1615]">4.8 km (12 Mins)</span>
          </div>
          <div className="p-4">
            <Plane size={22} className="text-[#B99470] mx-auto mb-2" />
            <span className="block text-gray-500 text-[10px] uppercase tracking-wider mb-0.5">Udaipur Airport (UDR)</span>
            <span className="text-sm font-semibold text-[#1A1615]">90 km (75 Mins Drive)</span>
          </div>
        </div>
      </section>

      {/* Fort Monuments Walking & Driving Guide */}
      <section className="py-20 sm:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#934379] font-bold block mb-1">
              CHITTORGARH FORT SIGHTSEEING
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1A1615]">
              Monuments at Your Doorstep
            </h2>
            <OrnateDivider className="my-2" />
            <p className="text-xs sm:text-sm text-[#5B5E63] font-sans">
              Because Rawal Kothi is already inside the fort boundaries, you can start exploring without waiting in vehicle checkpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fortMonuments.map((monument, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 border border-[#B99470]/30 shadow-xs hover:border-[#B99470] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#934379] font-bold">
                      {monument.time}
                    </span>
                    <span className="text-xs font-semibold text-[#B99470]">
                      {monument.distance}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-[#1A1615] mb-2">
                    {monument.name}
                  </h3>
                  <p className="text-xs text-[#5B5E63] font-sans leading-relaxed">
                    {monument.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#E8DFD3]/60 flex items-center justify-between text-[11px] text-[#B99470]">
                  <span>Ask Front Desk for Guide</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Location & Guest Reviews Showcase */}
      <LocationSection />

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
