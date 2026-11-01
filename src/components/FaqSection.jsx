'use client';

import React, { useState } from 'react';
import { OrnateDivider } from './RoyalIcons';
import { ChevronDown, HelpCircle, MapPin, Clock, Star, ShieldCheck } from 'lucide-react';

const faqs = [
  {
    q: 'What are the check-in and check-out timings at Rawal Kothi?',
    a: 'Check-in starts at 12:00 PM and check-out is at 12:00 PM. For early check-in or late check-out, please contact our 24-hour front desk directly.',
    icon: Clock,
  },
  {
    q: 'How far is Rawal Kothi from Chittorgarh Fort and railway station?',
    a: 'Rawal Kothi is situated just 1.1 km from the iconic Chittorgarh Fort (UNESCO World Heritage Site), and approximately 5.7 km from Chittaurgarh Junction Railway Station.',
    icon: MapPin,
  },
  {
    q: 'What room categories are available at Rawal Kothi?',
    a: 'Our signature stay is the City View Kothi Suite (1,615 sq. ft. / 150 sq. mt.) featuring authentic hand-painted peacock frescoes on royal blue walls, air conditioning, panoramic city view, ensuite modern bathroom, and mineral water. Heritage Deluxe and Royal Suites are also available.',
    icon: Star,
  },
  {
    q: 'Is rooftop dining open to non-resident guests?',
    a: 'Yes, our open-air cliffside rooftop restaurant is open daily for breakfast, golden sunset high-tea, and starlit dinners with panoramic 360-degree views of Chittorgarh city and fort ramparts.',
    icon: Star,
  },
  {
    q: 'What popular amenities and safety features are provided?',
    a: 'Popular amenities include powerful air conditioning, high-speed Wi-Fi, 24-hour room service, luggage assistance, CCTV surveillance, 24-hour reception desk, and complimentary parking.',
    icon: ShieldCheck,
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 sm:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[#B99470] tracking-[0.3em] text-xs sm:text-sm uppercase font-sans font-semibold mb-2">
            ESSENTIAL GUEST INFORMATION
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1615] font-normal">
            Frequently Asked Questions
          </h2>
          <OrnateDivider />
          <p className="mt-3 text-[#5B5E63] text-xs sm:text-sm">
            Everything you need to know about your stay, dining, and heritage experience at Rawal Kothi Chittorgarh.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const Icon = faq.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#B99470]/30 shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#B99470]/30 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-[#B99470]" />
                    </div>
                    <span className="font-serif text-base sm:text-lg text-[#1A1615] font-medium">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-[#B99470] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#5B5E63] leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

