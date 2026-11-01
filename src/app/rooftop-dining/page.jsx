'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWidgets from '../../components/FloatingWidgets';
import BookingModal from '../../components/BookingModal';
import RoyalCursor from '../../components/RoyalCursor';
import RooftopDiningSection from '../../components/RooftopDiningSection';
import { RoyalLotusCrest, OrnateDivider } from '../../components/RoyalIcons';
import { 
  Utensils, Clock, Sparkles, MapPin, Coffee, Wine, Moon, Sun, 
  Calendar, Users, MessageSquare, Phone, ChevronRight, Check 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const culinarySpecialties = [
  {
    name: 'Royal Mewari Thali',
    category: 'CHEF’S HERITAGE SIGNATURE',
    price: '₹ 450',
    desc: 'Traditional Baati dipped in pure desi ghee, Panchmel dal, spicy churma, gatte ki sabzi, ker sangri, and fresh mint chaas.',
    veg: true,
  },
  {
    name: 'Sesame-Crusted Hara Bhara Kebabs',
    category: 'STARTER DELICACY',
    price: '₹ 280',
    desc: 'Golden crisp patties of spinach, green peas, and fresh cottage cheese studded with roasted cashews and served with culinary tomato flower.',
    veg: true,
  },
  {
    name: 'Skyline Gourmet Club Box',
    category: 'ROOFTOP CAFE BITES',
    price: '₹ 320',
    desc: 'Triple-layered toasted club sandwich with grilled veggies, melted cheese, golden fries, and dips served in our custom Rawal Kothi wooden box.',
    veg: true,
  },
  {
    name: 'Crispy Butter Masala Dosa',
    category: 'BREAKFAST & HIGH-TEA',
    price: '₹ 220',
    desc: 'Golden thin fermented rice-lentil crepe filled with spiced potato masala, served with bubbling vegetable sambar and coconut-tomato chutneys.',
    veg: true,
  },
  {
    name: 'Thick Belgian Chocolate Shake',
    category: 'SUNSET ARTISAN BEVERAGE',
    price: '₹ 210',
    desc: 'Blended rich cocoa with vanilla cream, drizzled with dark chocolate ganache, best enjoyed while gazing at the sunset over the Aravali horizon.',
    veg: true,
  },
  {
    name: 'Charcoal Kulhad Masala Chai',
    category: 'ROYAL HIGH-TEA SPECIAL',
    price: '₹ 90',
    desc: 'Slow-brewed aromatic tea with fresh ginger, green cardamom, and cinnamon, served in earthen clay cups on the breezy terrace.',
    veg: true,
  },
];

export default function RooftopDiningPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [initialModalData, setInitialModalData] = useState({ bookingType: 'table' });

  const handleOpenBooking = (data = { bookingType: 'table' }) => {
    setInitialModalData(data || { bookingType: 'table' });
    setBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#141110] text-white selection:bg-[#B99470] selection:text-white w-full max-w-full overflow-x-hidden">
      <RoyalCursor />
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero: Sunset Rooftop with High-Res Photo Background */}
      <section className="relative pt-40 pb-28 sm:pt-48 sm:pb-36 bg-[#1A1615] text-white overflow-hidden text-center">
        <div className="absolute inset-0">
          <Image
            src="/113504.jpg"
            alt="Rawal Kothi Rooftop Sunset Horizon"
            fill
            priority
            className="object-cover opacity-35 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141110] via-black/50 to-black/80" />
          <div className="absolute inset-0 bg-jali-pattern opacity-10 pointer-events-none" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <RoyalLotusCrest className="w-14 h-14 text-[#B99470] mx-auto mb-3 animate-pulse" />
          <nav className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#B99470] font-sans mb-3 flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>•</span>
            <span className="text-white">Rooftop Dining & Lounge</span>
          </nav>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight mb-4 tracking-wide">
            Feast Above Chittorgarh
          </h1>
          <OrnateDivider color="#B99470" className="my-3" />
          <p className="text-gray-300 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Chittorgarh’s highest open-air rooftop retreat. Where golden sunsets kiss the ancient Aravali ridges, starlight illuminates carved wooden gazebos, and every aroma carries the regal heritage of Mewar.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleOpenBooking({ bookingType: 'table' })}
              className="bg-[#B99470] hover:bg-[#9E7B58] text-[#1A1615] hover:text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-xl hover:scale-105"
            >
              Reserve a Rooftop Table
            </button>
            <a
              href="https://wa.me/918058877878?text=Hello%20Rawal%20Kothi,%20I%20would%20like%20to%20reserve%20a%20table%20at%20the%20Rooftop%20Restaurant."
              target="_blank"
              rel="noreferrer"
              className="bg-transparent hover:bg-white/10 text-white border border-[#B99470]/50 hover:border-[#B99470] px-6 py-3.5 text-xs uppercase tracking-[0.16em] transition-colors flex items-center gap-2"
            >
              <MessageSquare size={14} className="text-[#25D366]" /> Instant WhatsApp Booking
            </a>
          </div>
        </div>
      </section>

      {/* 4 Iconic Ambiances Grid */}
      <section className="py-20 bg-[#1A1615] border-y border-[#B99470]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B99470] font-bold block mb-1">
              ATMOSPHERIC DINING
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white">
              Choose Your Dining Ambiance
            </h2>
            <OrnateDivider color="#B99470" className="my-2" />
            <p className="text-xs sm:text-sm text-gray-300 font-sans">
              From open-sky romantic candlelights to sheltered floral gazebos, every seat offers a breathtaking vantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Deck 1: Golden Sunset Terrace */}
            <div className="bg-black/40 border border-[#B99470]/30 overflow-hidden group hover:border-[#B99470] transition-colors flex flex-col justify-between">
              <div>
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src="/113504.jpg"
                    alt="Golden Sunset Terrace"
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/80 px-2 py-1 text-[9px] text-[#B99470] uppercase font-bold tracking-wider">
                    5:00 PM – 7:00 PM
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-white group-hover:text-[#B99470] transition-colors mb-2">
                    Golden Sunset Terrace
                  </h3>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    Watch the skies turn to liquid gold across the Mewari valley with artisan shakes and hot kulhad chai.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <span className="text-[10px] text-[#B99470] uppercase tracking-wider font-semibold">Best for Sundowners & Couples</span>
              </div>
            </div>

            {/* Deck 2: Starlit Lantern Lounge */}
            <div className="bg-black/40 border border-[#B99470]/30 overflow-hidden group hover:border-[#B99470] transition-colors flex flex-col justify-between">
              <div>
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src="/113506.jpg"
                    alt="Starlit Evening Lounge"
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/80 px-2 py-1 text-[9px] text-[#B99470] uppercase font-bold tracking-wider">
                    7:00 PM – 11:30 PM
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-white group-hover:text-[#B99470] transition-colors mb-2">
                    Starlit Evening Lounge
                  </h3>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    Hanging blossoms, glowing lanterns, and thousands of twinkling city lights under cool night breezes.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <span className="text-[10px] text-[#B99470] uppercase tracking-wider font-semibold">Best for Candlelight Dinners</span>
              </div>
            </div>

            {/* Deck 3: Ornate Wooden Gazebo */}
            <div className="bg-black/40 border border-[#B99470]/30 overflow-hidden group hover:border-[#B99470] transition-colors flex flex-col justify-between">
              <div>
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src="/113505.jpg"
                    alt="Ornate Wooden Gazebo"
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/80 px-2 py-1 text-[9px] text-[#B99470] uppercase font-bold tracking-wider">
                    All-Day Dining
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-white group-hover:text-[#B99470] transition-colors mb-2">
                    Ornate Wooden Gazebo
                  </h3>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    Carved teakwood valence, lush planters, and comfortable private seating for families and long chats.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <span className="text-[10px] text-[#B99470] uppercase tracking-wider font-semibold">Best for Family Platters & Groups</span>
              </div>
            </div>

            {/* Deck 4: Panoramic Day Deck */}
            <div className="bg-black/40 border border-[#B99470]/30 overflow-hidden group hover:border-[#B99470] transition-colors flex flex-col justify-between">
              <div>
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src="/113507.jpg"
                    alt="Panoramic Day Deck"
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/80 px-2 py-1 text-[9px] text-[#B99470] uppercase font-bold tracking-wider">
                    8:00 AM – 3:30 PM
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-white group-hover:text-[#B99470] transition-colors mb-2">
                    Panoramic Day Deck
                  </h3>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    Crisp mountain air and clear vistas of Chittorgarh Fort ramparts as you savor fresh morning dosas and juices.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <span className="text-[10px] text-[#B99470] uppercase tracking-wider font-semibold">Best for Royal Breakfast & Lunch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes & Culinary Crafts Menu */}
      <section className="py-20 sm:py-24 bg-[#141110]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B99470] font-bold block mb-1">
              CHEF’S RECOMMENDATIONS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white">
              Signature Creations from the Royal Kitchen
            </h2>
            <OrnateDivider color="#B99470" className="my-2" />
            <p className="text-xs sm:text-sm text-gray-400 font-sans">
              Hand-ground aromatic spices, fresh local ingredients, and heritage recipes celebrating Mewar’s royal court traditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {culinarySpecialties.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#1A1615] border border-white/10 hover:border-[#B99470]/50 p-6 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.2em] text-[#B99470] font-bold block mb-0.5">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-lg text-white group-hover:text-[#B99470] transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    <span className="font-serif text-lg text-[#B99470] font-semibold shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    Pure Vegetarian / Freshly Prepared
                  </span>
                  <button
                    onClick={() => handleOpenBooking({ bookingType: 'table' })}
                    className="text-[#B99470] hover:underline"
                  >
                    Order on Table →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-gray-400 font-sans mb-4">
              Jain food preparation, pure ghee sweets, and custom candle decoration packages available upon advance request.
            </p>
            <button
              onClick={() => handleOpenBooking({ bookingType: 'table' })}
              className="bg-[#B99470] hover:bg-[#9E7B58] text-[#1A1615] hover:text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-lg"
            >
              Book an Evening Table Now
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Rooftop Dining Showcase Section */}
      <RooftopDiningSection onOpenBooking={handleOpenBooking} />

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingWidgets onOpenBooking={handleOpenBooking} />

      {/* Reservation Dialog */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={initialModalData}
      />
    </main>
  );
}
