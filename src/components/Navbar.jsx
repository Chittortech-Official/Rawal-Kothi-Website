'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Calendar, ChevronRight, MessageCircle, MapPin, Bed, Utensils, Image as ImageIcon, Sparkles } from 'lucide-react';
import { RoyalLotusCrest } from './RoyalIcons';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#', icon: null },
    { name: 'Rooms', href: '#rooms', icon: Bed },
    { name: 'Rooftop Dining', href: '#dining', icon: Utensils },
    { name: 'Heritage', href: '#about', icon: Sparkles },
    { name: 'Gallery', href: '#gallery', icon: ImageIcon },
    { name: 'Location', href: '#location', icon: MapPin },
    { name: 'Offers', href: '#offers', icon: null },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1A1615]/95 backdrop-blur-md shadow-2xl py-2.5 sm:py-3 border-b border-[#B99470]/20'
            : 'bg-gradient-to-b from-black/85 via-black/50 to-transparent py-3 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Royal Crest */}
          <Link href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <RoyalLotusCrest className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 text-[#B99470] group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-xl md:text-2xl text-white tracking-[0.16em] sm:tracking-[0.18em] uppercase font-normal leading-tight">
                RAWAL KOTHI
              </span>
              <span className="text-[8px] sm:text-[9px] md:text-[10px] text-[#B99470] tracking-[0.28em] sm:tracking-[0.35em] uppercase font-sans font-medium">
                CHITTORGARH
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links - Fully Responsive on Laptops (1024px to 1920px) */}
          <nav className="hidden xl:flex items-center space-x-5 2xl:space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap text-xs 2xl:text-[13px] uppercase font-sans tracking-[0.12em] text-white/90 hover:text-[#B99470] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B99470] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Laptop View Links (1024px to 1279px) - Key Essential Links with no line breaks */}
          <nav className="hidden lg:flex xl:hidden items-center space-x-3.5">
            {navLinks.slice(0, 6).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap text-[11px] uppercase font-sans tracking-[0.1em] text-white/90 hover:text-[#B99470] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: BOOK NOW Button & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="bg-[#B99470] hover:bg-[#9E7B58] text-white px-3.5 sm:px-6 py-2 sm:py-2.5 text-[11px] sm:text-xs font-sans tracking-[0.15em] sm:tracking-[0.18em] uppercase font-semibold transition-all duration-300 shadow-md hover:shadow-xl border border-[#B99470] hover:border-[#9E7B58] whitespace-nowrap"
            >
              BOOK NOW
            </button>

            {/* Mobile / Tablet Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-1.5 sm:p-2 text-white hover:text-[#B99470] transition-colors focus:outline-none flex items-center gap-1.5 border border-white/20 hover:border-[#B99470] rounded"
              aria-label="Open Navigation Menu"
            >
              <Menu size={22} className="text-[#B99470]" />
              <span className="hidden xs:inline text-[10px] uppercase tracking-widest text-white/90 font-medium">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-md lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        {/* Drawer Content */}
        <div
          className={`fixed top-0 right-0 w-[85%] max-w-sm h-full bg-[#161312] border-l border-[#B99470]/40 p-5 sm:p-6 flex flex-col justify-between overflow-y-auto transform transition-transform duration-300 ease-out shadow-2xl ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-5 border-b border-[#B99470]/25">
              <div className="flex items-center gap-2.5">
                <RoyalLotusCrest className="w-8 h-8 text-[#B99470]" />
                <div className="flex flex-col">
                  <span className="font-serif text-lg text-white tracking-[0.16em] uppercase">
                    RAWAL KOTHI
                  </span>
                  <span className="text-[9px] text-[#B99470] tracking-[0.25em] uppercase font-sans">
                    CHITTORGARH FORT
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Quick Badge */}
            <div className="mt-4 px-3 py-2 bg-[#B99470]/10 border border-[#B99470]/20 rounded text-[11px] text-[#B99470] flex items-center justify-between">
              <span>Heritage Stay & Rooftop Lounge</span>
              <span className="font-semibold text-white">1.1 km to Fort</span>
            </div>

            {/* Nav list with Clear High-Contrast Links */}
            <nav className="mt-5 flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-sm uppercase tracking-[0.14em] text-white/90 hover:text-[#B99470] hover:bg-white/5 px-3 py-2.5 rounded transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      {IconComponent && <IconComponent size={16} className="text-[#B99470] group-hover:scale-110 transition-transform" />}
                      <span className="font-medium">{link.name}</span>
                    </div>
                    <ChevronRight size={16} className="text-[#B99470]/60 group-hover:translate-x-1 transition-transform" />
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Drawer Footer Actions (Book, Call & WhatsApp) */}
          <div className="pt-5 mt-6 border-t border-[#B99470]/25 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#B99470] hover:bg-[#9E7B58] text-white py-3 text-center uppercase tracking-[0.18em] text-xs font-semibold shadow-lg transition-all rounded"
            >
              Reserve a Room / Table
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://wa.me/918690142444?text=Hello%20Rawal%20Kothi,%20I%20would%20like%20to%20inquire%20about%20booking."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] py-2.5 px-2 rounded text-[11px] font-medium tracking-wider uppercase hover:bg-[#25D366] hover:text-white transition-colors"
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
              <a
                href="tel:+918690142444"
                className="flex items-center justify-center gap-1.5 bg-white/10 border border-white/20 text-white py-2.5 px-2 rounded text-[11px] font-medium tracking-wider uppercase hover:bg-[#B99470] hover:border-[#B99470] transition-colors"
              >
                <Phone size={14} /> Call Us
              </a>
            </div>

            <p className="text-[10px] text-center text-gray-400 font-sans pt-1">
              Chittorgarh Fort Heritage Zone, Rajasthan
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
