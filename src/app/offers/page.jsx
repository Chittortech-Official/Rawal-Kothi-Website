'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWidgets from '../../components/FloatingWidgets';
import BookingModal from '../../components/BookingModal';
import RoyalCursor from '../../components/RoyalCursor';
import SpecialOffersSection from '../../components/SpecialOffersSection';
import FaqSection from '../../components/FaqSection';
import { RoyalLotusCrest, OrnateDivider } from '../../components/RoyalIcons';
import { 
  Tag, Sparkles, Gift, ShieldCheck, Heart, Compass, Coffee, 
  CheckCircle, ArrowRight, MessageSquare 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const royalPackages = [
  {
    title: 'The Royal Honeymoon & Romance',
    badge: 'COUPLES FAVOURITE',
    discount: 'SAVE 25%',
    stay: '2 Nights / 3 Days',
    price: '₹ 15,999',
    original: '₹ 21,500',
    desc: 'An unforgettable celebration of love in our private jacuzzi suite with candlelit starlight dining overlooking Chittorgarh Fort.',
    inclusions: [
      'Upgrade to Padmini Royal Jacuzzi Suite (subject to availability)',
      'Candlelight 4-Course Dinner on the Private Sunset Terrace',
      'Daily Royal Breakfast in bed & Sunset High-Tea',
      'Aromatic Rose Petal Bed Turn-Down Service',
      'Late Check-Out until 3:00 PM',
    ],
    code: 'HONEYMOON25',
  },
  {
    title: 'The Fort Explorer Heritage Escape',
    badge: 'MOST POPULAR',
    discount: 'SAVE 20%',
    stay: '2 Nights / 3 Days',
    price: '₹ 12,499',
    original: '₹ 16,000',
    desc: 'Designed for history enthusiasts and family travellers wanting to explore India’s greatest living fort at a relaxed pace.',
    inclusions: [
      'Stay in City View Kothi Suite with hand-painted peacock frescoes',
      'Daily Royal Breakfast & Evening Sunset Kulhad Chai with savouries',
      'Complimentary Walking Tour to 8th-century Kalika Mata Temple',
      'Complimentary Pickup / Drop from Chittorgarh Railway Station',
      '15% Privilege Discount on all Rooftop Dining orders',
    ],
    code: 'FORTEXPLORER',
  },
  {
    title: 'Weekend Mewari Gourmet Retreat',
    badge: 'WEEKEND SPECIAL',
    discount: 'FLAT 15% OFF',
    stay: '1 Night / 2 Days',
    price: '₹ 6,999',
    original: '₹ 8,500',
    desc: 'A quick regal refresh featuring authentic Mewari Dal Baati Churma, rooftop sunset views, and pure relaxation.',
    inclusions: [
      'Heritage Suite accommodation with valley horizon view',
      'Authentic Mewari Thali Dinner for two at the Skyline Rooftop',
      'Evening Sundowner High-Tea with artisan cookies',
      'High-Speed Wi-Fi & Priority Room Check-In',
    ],
    code: 'WEEKEND15',
  },
];

export default function OffersPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedOfferData, setSelectedOfferData] = useState(null);

  const handleOpenBooking = (data = null) => {
    setSelectedOfferData(data);
    setBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] selection:bg-[#B99470] selection:text-white w-full max-w-full overflow-x-hidden">
      <RoyalCursor />
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero with High-Res Background - Clean Dark Vignette, No White Fog */}
      <section className="relative pt-36 pb-24 sm:pt-44 sm:pb-28 bg-[#1A1615] text-white overflow-hidden text-center border-b-2 border-[#B99470]">
        <div className="absolute inset-0">
          <Image
            src="/chetak-suite.jpg"
            alt="Royal Packages at Rawal Kothi"
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
            <span className="text-white">Offers & Stay Packages</span>
          </nav>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight mb-3 tracking-wide">
            Royal Packages & Privileges
          </h1>
          <OrnateDivider color="#B99470" className="my-2.5" />
          <p className="text-gray-200 font-sans text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Indulge in curated staycation packages with exclusive perks—complimentary rooftop candlelight dinners, high-tea sunsets, temple walking tours, and direct booking price assurances.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#packages"
              className="bg-[#B99470] hover:bg-[#9E7B58] text-white px-8 py-3 text-xs uppercase tracking-[0.18em] font-semibold transition-all shadow-lg hover:scale-105"
            >
              Explore Stay Packages
            </a>
            <button
              onClick={() => handleOpenBooking()}
              className="bg-transparent hover:bg-white/10 text-white border border-[#B99470]/60 hover:border-[#B99470] px-6 py-3 text-xs uppercase tracking-[0.16em] transition-colors"
            >
              Inquire Directly
            </button>
          </div>
        </div>
      </section>

      {/* Curated Royal Packages Grid */}
      <section id="packages" className="py-20 sm:py-24 bg-white border-b border-[#E8DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#934379] font-bold block mb-1">
              CURATED STAYCATIONS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1A1615]">
              Handcrafted Palace Packages
            </h2>
            <OrnateDivider className="my-2" />
            <p className="text-xs sm:text-sm text-[#5B5E63] font-sans">
              Book directly with us to enjoy best rate guarantees and tailor-made personal arrangements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {royalPackages.map((pkg, idx) => (
              <div 
                key={idx}
                className="bg-[#FAF7F2] border border-[#B99470]/30 shadow-md p-7 flex flex-col justify-between hover:border-[#B99470] transition-colors group relative"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="bg-[#1A1615] text-[#B99470] px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold">
                      {pkg.badge}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1">
                      {pkg.discount}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#1A1615] group-hover:text-[#B99470] transition-colors mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-[11px] text-[#934379] font-bold uppercase tracking-wider mb-3">
                    {pkg.stay}
                  </p>
                  <p className="text-xs text-[#5B5E63] font-sans leading-relaxed mb-6">
                    {pkg.desc}
                  </p>

                  <div className="space-y-2.5 border-t border-[#E8DFD3] pt-4 mb-6">
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold block">
                      PACKAGE INCLUSIONS:
                    </span>
                    {pkg.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#2C2725] font-sans">
                        <CheckCircle size={14} className="text-[#B99470] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#E8DFD3] pt-5">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-xs text-gray-400 line-through mr-2">{pkg.original}</span>
                      <span className="font-serif text-2xl font-bold text-[#1A1615]">{pkg.price}</span>
                    </div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider">All Taxes Included</span>
                  </div>

                  <button
                    onClick={() => handleOpenBooking({ room: pkg.title, promoCode: pkg.code })}
                    className="w-full bg-[#B99470] hover:bg-[#9E7B58] text-white py-3 text-xs uppercase tracking-[0.18em] font-semibold transition-colors shadow-sm text-center block"
                  >
                    Claim Package (Use {pkg.code})
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section from Homepage */}
      <SpecialOffersSection onOpenBooking={handleOpenBooking} />

      {/* FAQs */}
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingWidgets onOpenBooking={handleOpenBooking} />

      {/* Reservation Dialog */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={selectedOfferData}
      />
    </main>
  );
}
