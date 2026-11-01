'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { OrnateDivider } from './RoyalIcons';
import { Maximize, Users, Bed, Bath, Wifi, Check, ChevronRight } from 'lucide-react';

const roomsData = [
  {
    id: 'city-view-kothi',
    name: 'City View Kothi Suite',
    subtitle: 'Signature Fresco Haven with Expansive City Vistas',
    size: '1,615 sq. ft.',
    capacity: '3 Guests',
    bed: 'Royal Double',
    price: '₹6,698',
    image: '/chetak-suite.jpg',
    desc: 'Our premier signature offering: A grand 1,615 sq. ft. luxury sanctuary showcasing traditional hand-painted peacock frescoes on royal indigo walls, panoramic city vistas, crisp air conditioning, high-speed Wi-Fi, and personalized Mewari hospitality.',
    amenities: ['1,615 Sq. Ft. Suite', 'Peacock Wall Murals', 'Panoramic City View', 'Air Conditioning', 'Modern Ensuite Bathroom', 'Mineral Water & Refreshments'],
  },
  {
    id: 'padmini-suite',
    name: 'Padmini Royal Suite',
    subtitle: 'Your Highness Called. The Suite’s Ready.',
    size: '650 sq. ft.',
    capacity: '3 Guests',
    bed: 'Royal King',
    price: '₹7,999',
    image: '/padmini-suite.jpg',
    desc: 'This 650 sq. ft. suite doesn’t rush you, it lets you settle in. With cosy corners to lounge, a two-seater jacuzzi to soak in, arched windows, and a vintage fan spinning above, it’s made for three but feels like your own royal hideaway.',
    amenities: ['Two-Seater Jacuzzi', 'Private Balcony', 'Fort & Garden View', 'Royal Breakfast', 'High-Speed Wi-Fi', '24/7 Butler Service'],
  },
  {
    id: 'chetak-suite',
    name: 'Chetak Heritage Suite',
    subtitle: 'The Suite Life, Royal Edition',
    size: '550 sq. ft.',
    capacity: '3 Guests',
    bed: 'Canopy King',
    price: '₹6,499',
    image: '/meera-suite.jpg',
    desc: 'Some stays offer more than space, they set the mood. This 550 sq. ft. suite comes with a breezy living room, vintage fan, opulent royal textiles, and a jacuzzi that practically insists you slow down.',
    amenities: ['In-Room Jacuzzi', 'Separate Living Room', 'Canopy Teak Bed', 'Smart TV & Wi-Fi', 'Mini Bar', 'Luxury Toiletries'],
  },
  {
    id: 'meera-suite',
    name: 'Meera Palace Suite',
    subtitle: 'Your Soft Landing Spot',
    size: '650 sq. ft.',
    capacity: '3 Guests',
    bed: 'Double King',
    price: '₹6,999',
    image: '/meera-suite.jpg',
    desc: 'Some spaces have a way of making you feel instantly at ease. This 650 sq. ft. suite offers a separate living room, hand-painted Mewari frescoes, a vintage fan quietly spinning above, and plenty of space for three to relax.',
    amenities: ['Private Living Room', 'Garden & Hill View', 'Bathtub & Shower', 'Royal High Tea', 'Work Desk', 'Tea/Coffee Maker'],
  },
  {
    id: 'rawal-premiere',
    name: 'Rawal Premiere Room',
    subtitle: 'Maharaja’s Mini Break',
    size: '450 sq. ft.',
    capacity: '3 Guests',
    bed: 'Heritage King',
    price: '₹5,299',
    image: '/rawal-premiere.jpg',
    desc: 'Some rooms just feel made for you. This 450 sq. ft. gem, with a vintage fan, private sit-out balcony, and two-seater jacuzzi, is perfect for three and brimming with old-world charm.',
    amenities: ['Private Balcony', 'Vintage Ceiling Fan', 'Valley View', 'Bathrobe & Slippers', 'Wi-Fi & OTT', '24h Room Service'],
  },
  {
    id: 'super-deluxe',
    name: 'Super Deluxe Heritage Room',
    subtitle: 'Rest Your Case: Where Dreams Check In',
    size: '260 sq. ft.',
    capacity: '2-3 Guests',
    bed: 'Queen / Twin',
    price: '₹4,199',
    image: '/super-deluxe.jpg',
    desc: 'More than a room, this 260 sq. ft. space tells a palace story. With arched windows and classic touches, it offers calm luxury and comfort for travellers exploring historic Chittorgarh.',
    amenities: ['Arched Windows', 'Ensuite Bathroom', 'Air Conditioning', 'High Speed Wi-Fi', 'Complimentary Water', 'Daily Housekeeping'],
  },
];

export default function RoomsSection({ onSelectRoom }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredRooms = activeTab === 'all' 
    ? roomsData 
    : activeTab === 'suites' 
    ? roomsData.filter(r => r.name.includes('Suite'))
    : roomsData.filter(r => !r.name.includes('Suite'));

  return (
    <section id="rooms" className="py-24 sm:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#B99470] tracking-[0.3em] text-xs sm:text-sm uppercase font-sans font-semibold mb-2">
            ROYAL RETREATS & SUITES
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1615] font-normal">
            Accommodations That Tell a Tale of Royal Grandeur
          </h2>
          <OrnateDivider />
          <p className="mt-4 text-[#5B5E63] font-sans text-sm sm:text-base leading-relaxed">
            Conceived straight from the lavish daydreams of a Maharaja, full of heritage charm and regal flair, this is where old-world opulence meets modern-day comfort.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8 px-2 max-w-full">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 text-[11px] sm:text-xs uppercase tracking-[0.12em] font-semibold transition-all whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-[#B99470] text-white shadow-md'
                  : 'bg-white text-[#5B5E63] border border-[#B99470]/30 hover:border-[#B99470]'
              }`}
            >
              All Rooms
            </button>
            <button
              onClick={() => setActiveTab('suites')}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 text-[11px] sm:text-xs uppercase tracking-[0.12em] font-semibold transition-all whitespace-nowrap ${
                activeTab === 'suites'
                  ? 'bg-[#B99470] text-white shadow-md'
                  : 'bg-white text-[#5B5E63] border border-[#B99470]/30 hover:border-[#B99470]'
              }`}
            >
              Royal Suites
            </button>
            <button
              onClick={() => setActiveTab('deluxe')}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 text-[11px] sm:text-xs uppercase tracking-[0.12em] font-semibold transition-all whitespace-nowrap ${
                activeTab === 'deluxe'
                  ? 'bg-[#B99470] text-white shadow-md'
                  : 'bg-white text-[#5B5E63] border border-[#B99470]/30 hover:border-[#B99470]'
              }`}
            >
              Deluxe Rooms
            </button>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {filteredRooms.map((room, idx) => (
            <div
              key={room.id}
              className={`group bg-white rounded-none border border-[#B99470]/30 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between reveal-element reveal-delay-${(idx % 3) + 1}`}
            >
              <div>
                {/* Image & Price Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 bg-[#1A1615]/90 backdrop-blur-sm text-white px-3 py-1.5 text-xs font-serif border border-[#B99470]/40">
                    <span className="text-[#B99470] font-bold text-sm">{room.price}</span>
                    <span className="text-[10px] text-gray-300 ml-1">/ Night</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#934379] font-bold mb-1">
                    {room.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl text-[#1A1615] group-hover:text-[#B99470] transition-colors mb-3">
                    {room.name}
                  </h3>
                  <p className="text-xs text-[#5B5E63] leading-relaxed line-clamp-3 mb-4 font-sans">
                    {room.desc}
                  </p>

                  {/* Room Specs Bar - 3 Equal Balanced Columns */}
                  <div className="grid grid-cols-3 divide-x divide-[#E8DFD3] py-2.5 my-4 border-y border-[#E8DFD3] bg-[#FAF7F2]/60">
                    <div className="flex flex-col items-center justify-center text-center px-1">
                      <div className="flex items-center gap-1 text-[#B99470] mb-0.5">
                        <Maximize size={13} className="flex-shrink-0" />
                        <span className="text-[10px] uppercase tracking-wider text-[#8A8580] font-sans">Area</span>
                      </div>
                      <span className="text-[11px] sm:text-xs font-medium text-[#1A1615] leading-tight font-sans">
                        {room.size}
                      </span>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center px-1">
                      <div className="flex items-center gap-1 text-[#B99470] mb-0.5">
                        <Users size={13} className="flex-shrink-0" />
                        <span className="text-[10px] uppercase tracking-wider text-[#8A8580] font-sans">Guests</span>
                      </div>
                      <span className="text-[11px] sm:text-xs font-medium text-[#1A1615] leading-tight font-sans">
                        {room.capacity}
                      </span>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center px-1">
                      <div className="flex items-center gap-1 text-[#B99470] mb-0.5">
                        <Bed size={13} className="flex-shrink-0" />
                        <span className="text-[10px] uppercase tracking-wider text-[#8A8580] font-sans">Bed</span>
                      </div>
                      <span className="text-[11px] sm:text-xs font-medium text-[#1A1615] leading-tight font-sans">
                        {room.bed}
                      </span>
                    </div>
                  </div>

                  {/* Key Amenities */}
                  <div className="grid grid-cols-2 gap-x-2 sm:gap-x-3 gap-y-2 mb-5">
                    {room.amenities.slice(0, 4).map((amenity, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-[#5B5E63] leading-snug">
                        <Check size={12} className="text-[#B99470] flex-shrink-0 mt-0.5" />
                        <span className="font-sans break-words">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 sm:p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => onSelectRoom(room)}
                  className="flex-1 bg-[#B99470] hover:bg-[#9E7B58] text-white py-3 text-center text-xs uppercase tracking-[0.18em] font-semibold transition-colors shadow-sm hover:shadow"
                >
                  Book This Room
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
