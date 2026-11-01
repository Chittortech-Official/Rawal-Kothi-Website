'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWidgets from '../../components/FloatingWidgets';
import BookingModal from '../../components/BookingModal';
import RoyalCursor from '../../components/RoyalCursor';
import AboutSection from '../../components/AboutSection';
import FacilitiesSection from '../../components/FacilitiesSection';
import { RoyalLotusCrest, OrnateDivider } from '../../components/RoyalIcons';
import { 
  Sparkles, MapPin, Shield, Heart, Compass, Clock, Bed, 
  Utensils, Users, CheckCircle, ArrowRight 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const architecturalTreasures = [
  {
    title: 'Hand-Painted Floral Pillars',
    desc: 'Each column in the reception and hallways was painted freehand by local generational artisans depicting traditional Mewari lotus blossoms and royal peacocks using natural mineral pigments.',
    image: '/113503.jpg',
    tag: 'GRAND FOYER',
  },
  {
    title: 'Stained-Glass Staircase',
    desc: 'Bespoke hand-cut stained glass panels catch the golden Rajasthan sunlight, cascading kaleidoscopic patterns of ruby red, amber, and cobalt blue across our teakwood balustrades.',
    image: '/113503.jpg',
    tag: 'HERITAGE STAIRWAY',
  },
  {
    title: 'Carved Jharokha Windows',
    desc: 'Classic stone-carved overhang balconies engineered to capture the mountain cross-breeze, framing majestic views of the historic fort ramparts and village courtyards.',
    image: '/chetak-suite.jpg',
    tag: 'SUITE BALCONIES',
  },
  {
    title: 'Cliffside Rooftop Overlook',
    desc: 'Perched high inside Chittorgarh Fort village, offering an unmatched 360-degree vantage of both the sacred fort monuments and the sprawling valley below.',
    image: '/113504.jpg',
    tag: 'SKYLINE TERRACE',
  },
];

const dailyPalaceRituals = [
  {
    time: '07:30 AM',
    title: 'Morning Kalika Mata Temple Walk',
    desc: 'A serene 4-minute walking stroll to the historic 8th-century temple before tourist hours begin, accompanied by temple bells and morning breezes.',
  },
  {
    time: '04:30 PM',
    title: 'Sunset Sundowner High-Tea',
    desc: 'Fresh ginger cardamom chai served in clay kulhads with warm mathris and cookies as the sun sinks behind the Chittorgarh fortress walls.',
  },
  {
    time: '08:00 PM',
    title: 'Lanternlit Starlight Lounge',
    desc: 'Candlelight dinners on the cliffside deck with heritage acoustic melodies and panoramic city night views.',
  },
];

export default function HeritagePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] selection:bg-[#B99470] selection:text-white w-full max-w-full overflow-x-hidden">
      <RoyalCursor />
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero with High-Res Lobby Photo Background */}
      <section className="relative pt-40 pb-28 sm:pt-48 sm:pb-36 bg-[#1A1615] text-white overflow-hidden text-center">
        <div className="absolute inset-0">
          <Image
            src="/113503.jpg"
            alt="Rawal Kothi Stained Glass Grand Lobby"
            fill
            priority
            className="object-cover opacity-30 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-black/60 to-black/85" />
          <div className="absolute inset-0 bg-jali-pattern opacity-10 pointer-events-none" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <RoyalLotusCrest className="w-14 h-14 text-[#B99470] mx-auto mb-3 animate-pulse" />
          <nav className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#B99470] font-sans mb-3 flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>•</span>
            <span className="text-[#B99470]">Living Heritage</span>
          </nav>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight mb-4 tracking-wide">
            Where Walls Whisper of Valour
          </h1>
          <OrnateDivider color="#B99470" className="my-3" />
          <p className="text-gray-300 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Rooted in the timeless soul of Chittorgarh, Hotel Rawal Kothi Fort weaves together royal Mewari lineage, handcrafted stone latticework, and the warm hospitality of legendary Rajasthan.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleOpenBooking}
              className="bg-[#B99470] hover:bg-[#9E7B58] text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-xl hover:scale-105"
            >
              Plan Your Regal Stay
            </button>
            <a
              href="tel:+918058877878"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3.5 text-xs uppercase tracking-[0.16em] transition-colors"
            >
              Heritage Desk: +91 80588 77878
            </a>
          </div>
        </div>
      </section>

      {/* Grand Architectural Treasures Showcase */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E8DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#934379] font-bold block mb-1">
              AUTHENTIC MEWARI CRAFTSMANSHIP
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1A1615]">
              Architectural Splendours of Rawal Kothi
            </h2>
            <OrnateDivider className="my-2" />
            <p className="text-xs sm:text-sm text-[#5B5E63] font-sans">
              Every arch, pillar, and stained glass pane reflects centuries of Rajasthani artistry preserved with royal devotion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architecturalTreasures.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#FAF7F2] border border-[#B99470]/30 overflow-hidden group hover:border-[#B99470] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#1A1615]/85 px-2 py-1 text-[9px] text-[#B99470] uppercase font-bold tracking-wider">
                      {item.tag}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg text-[#1A1615] group-hover:text-[#B99470] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5B5E63] font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <div className="w-full h-[1px] bg-[#B99470]/20 group-hover:bg-[#B99470] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Palace Living Rituals */}
      <section className="py-20 bg-[#FAF7F2] border-b border-[#E8DFD3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B99470] font-bold block mb-1">
              IMMERSIVE EXPERIENCES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1615]">
              A Day in the Life at Rawal Kothi
            </h2>
            <OrnateDivider className="my-2" />
          </div>

          <div className="space-y-4">
            {dailyPalaceRituals.map((ritual, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#B99470]/30 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-xs hover:border-[#B99470] transition-colors"
              >
                <div className="flex items-center gap-2 text-[#B99470] font-serif text-lg font-bold shrink-0 sm:w-28 border-b sm:border-b-0 sm:border-r border-[#B99470]/30 pb-2 sm:pb-0 sm:pr-4">
                  <Clock size={16} />
                  <span>{ritual.time}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-base text-[#1A1615] font-medium mb-1">
                    {ritual.title}
                  </h3>
                  <p className="text-xs text-[#5B5E63] font-sans leading-relaxed">
                    {ritual.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Heritage Narrative & Facilities */}
      <AboutSection onOpenBooking={handleOpenBooking} />
      <FacilitiesSection />

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
