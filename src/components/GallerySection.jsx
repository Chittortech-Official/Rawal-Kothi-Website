'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { OrnateDivider } from './RoyalIcons';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const galleryItems = [
  {
    category: 'rooftop',
    title: 'Sunset Skyline Terrace',
    image: '/113504.jpg',
  },
  {
    category: 'architecture',
    title: 'Grand Palace Lobby & Stained Glass',
    image: '/113503.jpg',
  },
  {
    category: 'rooftop',
    title: 'Starlit Evening Dining Deck',
    image: '/113506.jpg',
  },
  {
    category: 'dining',
    title: 'Royal Hara Bhara Platter',
    image: '/113510.jpg',
  },
  {
    category: 'rooftop',
    title: 'Open-Air Wooden Gazebo',
    image: '/113505.jpg',
  },
  {
    category: 'suites',
    title: 'Padmini Royal Suite with Jacuzzi',
    image: 'https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_550,y_0,w_3900,h_3333,r_0,c_crop/q_80,w_900,dpr_1,f_auto,fl_progressive,c_limit/kesar-bagh-palace-chittorgarh/PADMINI_SUITE_BEDROOM_c43e4857',
  },
  {
    category: 'dining',
    title: 'Gourmet Sandwiches & Brand Engraved Box',
    image: '/113508.jpg',
  },
  {
    category: 'dining',
    title: 'Artisan Shakes Overlooking Valley',
    image: '/113509.jpg',
  },
  {
    category: 'dining',
    title: 'Crispy Heritage Masala Dosa',
    image: '/113511.jpg',
  },
  {
    category: 'suites',
    title: 'Chetak Canopy Suite Living Room',
    image: 'https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3197/x_364,y_0,w_4272,h_3197,r_0,c_crop/q_80,w_900,dpr_1,f_auto,fl_progressive,c_limit/kesar-bagh-palace-chittorgarh/Chetak_Suite_1_17f6eb22',
  },
  {
    category: 'rooftop',
    title: 'Daylight Panoramic Chittorgarh View',
    image: '/113507.jpg',
  },
  {
    category: 'architecture',
    title: 'Royal Courtyard & Arches',
    image: 'https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_394,y_0,w_4212,h_3333,r_0,c_crop/q_80,w_900,dpr_1,f_auto,fl_progressive,c_limit/kesar-bagh-palace-chittorgarh/BLOCK_COURTYARD_2b59e8a0',
  },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const nextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#B99470] tracking-[0.3em] text-xs sm:text-sm uppercase font-sans font-semibold mb-2">
            VISUAL SPLENDOUR
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1615] font-normal">
            Our Gallery: A Glimpse into the Good Life
          </h2>
          <OrnateDivider />
          <p className="mt-4 text-[#5B5E63] font-sans text-sm sm:text-base leading-relaxed">
            Immerse yourself in the visual rhythm of Rawal Kothi—from sun-kissed rooftop lounges to royal chandeliers and bespoke culinary presentations.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'rooftop', label: 'Rooftop & Vistas' },
              { id: 'dining', label: 'Food & Dining' },
              { id: 'architecture', label: 'Palace & Lobby' },
              { id: 'suites', label: 'Suites & Rooms' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 sm:px-5 py-2 text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === tab.id
                    ? 'bg-[#B99470] text-white shadow-md'
                    : 'bg-white text-[#5B5E63] border border-[#B99470]/30 hover:border-[#B99470]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-14">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative aspect-square overflow-hidden bg-gray-200 cursor-pointer border border-[#B99470]/20 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <Eye size={24} className="text-[#B99470] mb-2" />
                <span className="font-serif text-sm text-white">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-50 focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X size={32} />
          </button>

          {/* Left Arrow */}
          <button
            onClick={prevLightbox}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 z-50 focus:outline-none"
            aria-label="Previous Image"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Main Lightbox Image */}
          <div className="relative max-w-5xl max-h-[85vh] w-full h-[75vh] flex flex-col items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-4 font-serif text-lg text-white tracking-wide text-center">
              {filteredItems[lightboxIndex].title}
            </p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextLightbox}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 z-50 focus:outline-none"
            aria-label="Next Image"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </section>
  );
}
