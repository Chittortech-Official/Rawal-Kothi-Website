'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { RoyalLotusCrest, JaliArrowLeft, JaliArrowRight, OrnateDivider } from './RoyalIcons';

const heroSlides = [
  {
    image: '/113504.jpg',
    title: 'RAWAL KOTHI',
    subtitle: 'WELCOME TO',
    tagline: 'PANORAMIC ROOFTOP DINING & PALACE STAYS',
    location: 'CHITTORGARH FORT AREA',
  },
  {
    image: '/113503.jpg',
    title: 'RAWAL KOTHI',
    subtitle: 'WELCOME TO',
    tagline: 'ROYAL HERITAGE LIVING WITH MEWAR CHARM',
    location: 'CHITTORGARH FORT AREA',
  },
  {
    image: '/113507.jpg',
    title: 'RAWAL KOTHI',
    subtitle: 'WELCOME TO',
    tagline: 'SUNLIT TERRACE SUITES & VALLEY VISTAS',
    location: 'CHITTORGARH FORT AREA',
  },
  {
    image: '/113505.jpg',
    title: 'RAWAL KOTHI',
    subtitle: 'WELCOME TO',
    tagline: 'ORNATE WOODEN PERGOLA HIGH-TEA & LOUNGE',
    location: 'CHITTORGARH FORT AREA',
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
    <section className="relative w-full h-[88vh] min-h-[560px] sm:min-h-[620px] max-h-[920px] overflow-hidden bg-black select-none">
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

          {/* Crystal Clear Palace Scrim - Keeps photos bright and vibrant */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/40" />
        </div>
      ))}

      {/* Center Royal Crest & Typography - Fully Responsive on Every Screen */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-16 sm:pt-20 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center w-full">
          {/* "WELCOME TO" */}
          <p className="text-[#B99470] tracking-[0.25em] sm:tracking-[0.35em] text-[10px] sm:text-xs md:text-sm uppercase font-sans font-semibold mb-2 sm:mb-3 drop-shadow-md">
            {heroSlides[currentSlide].subtitle}
          </p>

          {/* Royal Lotus Crest */}
          <div className="mb-2 sm:mb-3 transform hover:scale-105 transition-transform">
            <RoyalLotusCrest className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]" />
          </div>

          {/* "RAWAL KOTHI" - Adaptive Font Size & Spacing */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.12em] sm:tracking-[0.18em] text-white uppercase font-light drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] leading-tight my-1 sm:my-2 max-w-full">
            RAWAL KOTHI
          </h1>

          {/* Tagline / Subtitle */}
          <p className="font-serif tracking-[0.16em] sm:tracking-[0.25em] text-xs sm:text-base md:text-lg lg:text-xl text-white/95 uppercase font-normal mt-0.5 sm:mt-1 mb-1 sm:mb-2 max-w-xl px-2">
            HOTEL & ROOFTOP RETREAT • CHITTORGARH FORT
          </p>

          {/* Ornate Divider Flourish */}
          <OrnateDivider color="#B99470" className="my-2.5 sm:my-5 max-w-[200px] sm:max-w-xs" />

          {/* Fast CTA Buttons for Hero - Responsive Stack/Row */}
          <div className="flex flex-row flex-wrap items-center justify-center gap-2.5 sm:gap-4 mt-1 sm:mt-2">
            <button
              onClick={onOpenBooking}
              className="bg-[#B99470] hover:bg-[#9E7B58] text-white px-5 sm:px-8 py-2.5 sm:py-3.5 text-[11px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-2xl hover:scale-105 border border-[#B99470]"
            >
              BOOK YOUR STAY
            </button>
            <a
              href="#dining"
              className="bg-black/30 hover:bg-white/10 text-white px-4 sm:px-7 py-2.5 sm:py-3.5 text-[11px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase font-semibold transition-all duration-300 border border-white/60 hover:border-white backdrop-blur-sm"
            >
              EXPLORE ROOFTOP
            </a>
          </div>
        </div>
      </div>

      {/* Ornate Left Arrow - Hidden on Mobile to Avoid Overlapping Content */}
      <div className="hidden md:block absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30">
        <JaliArrowLeft onClick={prevSlide} />
      </div>

      {/* Ornate Right Arrow - Hidden on Mobile */}
      <div className="hidden md:block absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30">
        <JaliArrowRight onClick={nextSlide} />
      </div>

      {/* Slider Indicator Dots */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              idx === currentSlide
                ? 'w-6 sm:w-8 h-2 sm:h-2.5 bg-[#B99470] shadow-[0_0_8px_#B99470]'
                : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
