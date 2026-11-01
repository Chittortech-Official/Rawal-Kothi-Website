'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { RoyalLotusCrest, JaliArrowLeft, JaliArrowRight, OrnateDivider } from './RoyalIcons';

const heroSlides = [
  {
    image: 'https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3227/x_344,y_0,w_4312,h_3227,r_0,c_crop/q_80,w_1800,dpr_1,f_auto,fl_progressive,c_limit/kesar-bagh-palace-chittorgarh/MAIN_LOBBY_1_52f3d9ad',
    title: 'RAWAL KOTHI',
    subtitle: 'WELCOME TO',
    tagline: 'HERITAGE PALACE & PANORAMIC ROOFTOP',
    location: 'CHITTORGARH, RAJASTHAN',
  },
  {
    image: '/113504.jpg',
    title: 'RAWAL KOTHI',
    subtitle: 'WELCOME TO',
    tagline: 'SUNSET ROOFTOP DINING WITH FORT VISTAS',
    location: 'CHITTORGARH, RAJASTHAN',
  },
  {
    image: '/113503.jpg',
    title: 'RAWAL KOTHI',
    subtitle: 'WELCOME TO',
    tagline: 'ROYAL LIVING WITH AUTHENTIC MEWAR CHARM',
    location: 'CHITTORGARH, RAJASTHAN',
  },
  {
    image: '/113506.jpg',
    title: 'RAWAL KOTHI',
    subtitle: 'WELCOME TO',
    tagline: 'STARLIT DINNERS ABOVE THE HISTORIC VALLEY',
    location: 'CHITTORGARH, RAJASTHAN',
  },
];

export default function HeroSlider({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section className="relative w-full h-screen min-h-[640px] max-h-[1050px] overflow-hidden bg-black select-none">
      {/* Background Slides */}
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {/* Zooming Image */}
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={slide.image}
              alt={slide.tagline}
              fill
              priority={idx === 0}
              className={`object-cover object-center ${
                idx === currentSlide ? 'animate-kenburns scale-105' : 'scale-100'
              } transition-transform duration-1000`}
              sizes="100vw"
            />
          </div>

          {/* Luxury Palace Vignette & Dark Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/70" />
        </div>
      ))}

      {/* Center Royal Crest & Typography (Matches Kesar Bagh Hero Exactly) */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* "WELCOME TO" */}
          <p className="text-[#B99470] tracking-[0.35em] text-xs sm:text-sm uppercase font-sans font-semibold mb-3 drop-shadow-md">
            {heroSlides[currentSlide].subtitle}
          </p>

          {/* Royal Lotus Crest */}
          <div className="mb-3 transform hover:scale-105 transition-transform">
            <RoyalLotusCrest className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]" />
          </div>

          {/* "RAWAL KOTHI" */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[0.18em] text-white uppercase font-light drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] leading-none my-2">
            RAWAL KOTHI
          </h1>

          {/* Tagline / Subtitle */}
          <p className="font-serif tracking-[0.25em] text-sm sm:text-lg md:text-xl text-white/95 uppercase font-normal mt-1 mb-2">
            PALACE & ROOFTOP RETREAT
          </p>

          {/* Location */}
          <p className="text-[#B99470] tracking-[0.4em] text-xs sm:text-sm uppercase font-sans font-medium mt-1">
            CHITTORGARH
          </p>

          {/* Ornate Divider Flourish */}
          <OrnateDivider color="#B99470" className="my-4 sm:my-6" />

          {/* Fast CTA Button for Hero */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <button
              onClick={onOpenBooking}
              className="bg-[#B99470] hover:bg-[#9E7B58] text-white px-8 py-3.5 text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-2xl hover:scale-105 border border-[#B99470]"
            >
              BOOK YOUR STAY
            </button>
            <a
              href="#dining"
              className="bg-transparent hover:bg-white/10 text-white px-7 py-3.5 text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold transition-all duration-300 border border-white/60 hover:border-white"
            >
              EXPLORE ROOFTOP
            </a>
          </div>
        </div>
      </div>

      {/* Ornate Left Arrow */}
      <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30">
        <JaliArrowLeft onClick={prevSlide} />
      </div>

      {/* Ornate Right Arrow */}
      <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30">
        <JaliArrowRight onClick={nextSlide} />
      </div>

      {/* Slider Indicator Dots */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              idx === currentSlide
                ? 'w-8 h-2.5 bg-[#B99470] shadow-[0_0_8px_#B99470]'
                : 'w-2.5 h-2.5 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
