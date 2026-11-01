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
    size: '1,615 sq. ft. (150 sq. mt.)',
    capacity: 'Up to 3 Guests',
    bed: 'Royal Double Bed',
    price: '₹6,698',
    image: '/113503.jpg',
    desc: 'Our premier signature offering: A grand 1,615 sq. ft. luxury sanctuary showcasing traditional hand-painted peacock frescoes on royal indigo walls, panoramic city vistas, crisp air conditioning, high-speed Wi-Fi, and personalized Mewari hospitality.',
    amenities: ['1,615 Sq. Ft. Luxury Space', 'Authentic Peacock Wall Murals', 'Panoramic City View', 'Air Conditioning', 'Modern Ensuite Bathroom', 'Mineral Water & Refreshments'],
  },
  {
    id: 'padmini-suite',
    name: 'Padmini Royal Suite',
    subtitle: 'Your Highness Called. The Suite’s Ready.',
    size: '650 sq. ft.',
    capacity: '3 Guests',
    bed: 'Royal King Bed',
    price: '₹7,999',
    image: 'https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_550,y_0,w_3900,h_3333,r_0,c_crop/q_80,w_900,dpr_1,f_auto,fl_progressive,c_limit/kesar-bagh-palace-chittorgarh/PADMINI_SUITE_BEDROOM_c43e4857',
    desc: 'This 650 sq. ft. suite doesn’t rush you, it lets you settle in. With cosy corners to lounge, a two-seater jacuzzi to soak in, arched windows, and a vintage fan spinning above, it’s made for three but feels like your own royal hideaway.',
    amenities: ['Two-Seater Jacuzzi', 'Private Balcony', 'Fort View', 'Complimentary Breakfast', 'High-Speed Wi-Fi', '24/7 Butler Service'],
  },
  {
    id: 'chetak-suite',
    name: 'Chetak Heritage Suite',
    subtitle: 'The Suite Life, Royal Edition',
    size: '550 sq. ft.',
    capacity: '3 Guests',
    bed: 'Four-Poster Canopy King',
    price: '₹6,499',
    image: 'https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3197/x_364,y_0,w_4272,h_3197,r_0,c_crop/q_80,w_900,dpr_1,f_auto,fl_progressive,c_limit/kesar-bagh-palace-chittorgarh/Chetak_Suite_1_17f6eb22',
    desc: 'Some stays offer more than space, they set the mood. This 550 sq. ft. suite comes with a breezy living room, vintage fan, opulent royal textiles, and a jacuzzi that practically insists you slow down.',
    amenities: ['In-Room Jacuzzi', 'Separate Living Room', 'Vintage Teak Furniture', 'Mini Bar', 'Smart TV', 'Luxury Toiletries'],
  },
  {
    id: 'meera-suite',
    name: 'Meera Palace Suite',
    subtitle: 'Your Soft Landing Spot',
    size: '650 sq. ft.',
    capacity: '3 Guests',
    bed: 'Palace Double King',
    price: '₹6,999',
    image: 'https://assets.simplotel.com/simplotel/image/upload/x_245,y_0,w_3510,h_3000,r_0,c_crop/q_80,w_900,dpr_1,f_auto,fl_progressive,c_limit/kesar-bagh-palace-chittorgarh/MEERA_SUITE_BEDROOM_1_(1)_f7015b8e',
    desc: 'Some spaces have a way of making you feel instantly at ease. This 650 sq. ft. suite offers a separate living room, hand-painted Mewari frescoes, a vintage fan quietly spinning above, and plenty of space for three to relax.',
    amenities: ['Separate Living Area', 'Garden & Hill View', 'Bathtub & Shower', 'Work Desk', 'Tea/Coffee Maker', 'Complimentary High Tea'],
  },
  {
    id: 'rawal-premiere',
    name: 'Rawal Premiere Room',
    subtitle: 'Maharaja’s Mini Break',
    size: '450 sq. ft.',
    capacity: '3 Guests',
    bed: 'Handcrafted King Bed',
    price: '₹5,299',
    image: 'https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3294/x_300,y_0,w_4400,h_3294,r_0,c_crop/q_80,w_900,dpr_1,f_auto,fl_progressive,c_limit/kesar-bagh-palace-chittorgarh/KESAR_BAGH_PREMIERE_ROOM_0df9f214',
    desc: 'Some rooms just feel made for you. This 450 sq. ft. gem, with a vintage fan, private sit-out balcony, and two-seater jacuzzi, is perfect for three and brimming with old-world charm.',
    amenities: ['Private Balcony', 'Vintage Ceiling Fan', 'Valley View', 'Wi-Fi & OTT', '24h Room Service', 'Bathrobe & Slippers'],
  },
  {
    id: 'super-deluxe',
    name: 'Super Deluxe Heritage Room',
    subtitle: 'Rest Your Case: Where Dreams Check In',
    size: '260 sq. ft.',
    capacity: '2-3 Guests',
    bed: 'Luxury Queen / Twin',
    price: '₹4,199',
    image: 'https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3294/x_573,y_0,w_3854,h_3294,r_0,c_crop/q_80,w_900,dpr_1,f_auto,fl_progressive,c_limit/kesar-bagh-palace-chittorgarh/KESAR_BAGH_PREMIERE_ROOM_479b0842',
    desc: 'More than a room, this 260 sq. ft. space tells a palace story. With arched windows and classic touches, it offers calm luxury and comfort for travellers exploring historic Chittorgarh.',
    amenities: ['Arched Heritage Windows', 'En-suite Marble Bathroom', 'Air Conditioning', 'High Speed Wi-Fi', 'Complimentary Water & Tea', 'Daily Housekeeping'],
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
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 text-xs uppercase tracking-widest transition-all ${
                activeTab === 'all'
                  ? 'bg-[#B99470] text-white shadow-md'
                  : 'bg-white text-[#5B5E63] border border-[#B99470]/30 hover:border-[#B99470]'
              }`}
            >
              All Accommodations
            </button>
            <button
              onClick={() => setActiveTab('suites')}
              className={`px-5 py-2 text-xs uppercase tracking-widest transition-all ${
                activeTab === 'suites'
                  ? 'bg-[#B99470] text-white shadow-md'
                  : 'bg-white text-[#5B5E63] border border-[#B99470]/30 hover:border-[#B99470]'
              }`}
            >
              Royal Suites
            </button>
            <button
              onClick={() => setActiveTab('deluxe')}
              className={`px-5 py-2 text-xs uppercase tracking-widest transition-all ${
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
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="group bg-white rounded-none border border-[#B99470]/30 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Image & Price Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 bg-[#1A1615]/90 backdrop-blur-sm text-white px-3 py-1.5 text-xs font-serif border border-[#B99470]/40">
                    <span className="text-[#B99470] font-bold text-sm">{room.price}</span>
                    <span className="text-[10px] text-gray-300 ml-1">/ Night</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#934379] font-bold mb-1">
                    {room.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl text-[#1A1615] group-hover:text-[#B99470] transition-colors mb-3">
                    {room.name}
                  </h3>
                  <p className="text-xs text-[#5B5E63] leading-relaxed line-clamp-3 mb-5 font-sans">
                    {room.desc}
                  </p>

                  {/* Room Specs Bar */}
                  <div className="flex items-center justify-between py-3 border-y border-[#E8DFD3] text-xs text-[#2C2725] mb-5">
                    <span className="flex items-center gap-1.5">
                      <Maximize size={14} className="text-[#B99470]" />
                      {room.size}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users size={14} className="text-[#B99470]" />
                      {room.capacity}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Bed size={14} className="text-[#B99470]" />
                      {room.bed}
                    </span>
                  </div>

                  {/* Key Amenities */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {room.amenities.slice(0, 4).map((amenity, idx) => (
                      <span key={idx} className="flex items-center gap-1.5 text-[11px] text-[#5B5E63]">
                        <Check size={12} className="text-[#B99470] flex-shrink-0" />
                        <span className="truncate">{amenity}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-3">
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
