'use client';

import React from 'react';
import Image from 'next/image';
import { OrnateDivider } from './RoyalIcons';
import { Percent, Sparkles, Coffee, Gift } from 'lucide-react';

const offers = [
  {
    badge: 'SUNSET SPECIAL',
    title: 'Romantic Rooftop Dinner & Stay',
    discount: '20% OFF',
    desc: 'Indulge in a luxury suite stay with a candlelit 4-course dinner at our panoramic rooftop restaurant overlooking the illuminated city.',
    perks: ['Complimentary bottle of sparkling beverage', 'Guaranteed late check-out at 2:00 PM', 'Chef’s special dessert on the house'],
    code: 'ROMANCE20',
  },
  {
    badge: 'HERITAGE EXPEDITION',
    title: 'Chittorgarh Fort Explorer Package',
    discount: 'SPECIAL PERKS',
    desc: 'A complete Mewari cultural immersion with a private guided tour of the UNESCO World Heritage Chittorgarh Fort and evening royal high tea.',
    perks: ['Chauffeur transfer to Chittorgarh Fort', 'Complimentary royal afternoon high tea', 'Traditional welcome with garland & tikka'],
    code: 'FORTMEWAR',
  },
  {
    badge: 'EXTENDED LEISURE',
    title: 'The Royal Sovereign Staycation',
    discount: 'STAY 3, PAY 2',
    desc: 'Unwind without rush in the heart of Rajasthan. Enjoy three nights of opulence while paying for only two nights.',
    perks: ['Complimentary Jacuzzi suite upgrade', 'Daily lavish breakfast buffet', '25% discount on food & beverages'],
    code: 'SOVEREIGN',
  },
];

export default function SpecialOffersSection({ onOpenBooking }) {
  return (
    <section id="offers" className="py-24 sm:py-32 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#B99470] tracking-[0.3em] text-xs sm:text-sm uppercase font-sans font-semibold mb-2">
            EXCLUSIVE EXPERIENCES
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1615] font-normal">
            Special Offers to Enhance Your Stay
          </h2>
          <OrnateDivider />
          <p className="mt-4 text-[#5B5E63] font-sans text-sm sm:text-base leading-relaxed">
            Enjoy exciting discounts and curated royal inclusions during your stay, making your time in Chittorgarh even more memorable.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#B99470]/30 p-8 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative group hover:border-[#B99470]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-widest font-bold bg-[#FAF7F2] text-[#934379] px-3 py-1 border border-[#934379]/20">
                    {offer.badge}
                  </span>
                  <span className="text-sm font-serif font-bold text-[#B99470]">
                    {offer.discount}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#1A1615] group-hover:text-[#B99470] transition-colors mb-3">
                  {offer.title}
                </h3>
                <p className="text-xs text-[#5B5E63] font-sans leading-relaxed mb-6">
                  {offer.desc}
                </p>

                <div className="space-y-2.5 border-t border-[#E8DFD3] pt-5 mb-6">
                  {offer.perks.map((perk, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-[#2C2725]">
                      <Sparkles size={14} className="text-[#B99470] flex-shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between bg-[#FAF7F2] p-3 border border-dashed border-[#B99470]/50 mb-4">
                  <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Promo Code</span>
                  <span className="text-xs font-mono font-bold text-[#1A1615] tracking-widest">{offer.code}</span>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-[#1A1615] group-hover:bg-[#B99470] text-white py-3 text-center text-xs uppercase tracking-[0.2em] font-semibold transition-colors shadow-sm"
                >
                  Claim Offer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
