'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Calendar, ChevronRight } from 'lucide-react';
import { RoyalLotusCrest } from './RoyalIcons';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Dining', href: '#dining' },
    { name: 'Weddings', href: '#weddings' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Special Offers', href: '#offers' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1A1615]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#B99470]/20'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Royal Crest */}
          <Link href="#" className="flex items-center gap-3 group">
            <RoyalLotusCrest className="w-10 h-10 sm:w-12 sm:h-12 text-[#B99470] group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-2xl text-white tracking-[0.18em] uppercase font-normal leading-tight">
                RAWAL KOTHI
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#B99470] tracking-[0.35em] uppercase font-sans font-medium">
                CHITTORGARH
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] uppercase font-sans tracking-[0.12em] text-white/90 hover:text-[#B99470] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B99470] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: BOOK NOW Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="bg-white text-[#1A1615] hover:bg-[#B99470] hover:text-white px-5 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-sans tracking-[0.18em] uppercase font-semibold transition-all duration-300 shadow-md hover:shadow-xl rounded-none border border-white hover:border-[#B99470]"
            >
              BOOK NOW
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#B99470] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 w-[80%] max-w-sm h-full bg-[#1A1615] border-l border-[#B99470]/30 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {/* Top drawer header */}
            <div className="flex items-center justify-between pb-6 border-b border-[#B99470]/20">
              <div className="flex items-center gap-2">
                <RoyalLotusCrest className="w-8 h-8 text-[#B99470]" />
                <span className="font-serif text-lg text-white tracking-[0.15em]">
                  RAWAL KOTHI
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/70 hover:text-white p-1"
              >
                <X size={24} />
              </button>
            </div>

            {/* Nav list */}
            <nav className="mt-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm uppercase tracking-[0.14em] text-white/85 hover:text-[#B99470] py-2 border-b border-white/5 transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight size={16} className="text-[#B99470]/60" />
                </a>
              ))}
            </nav>
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-6 border-t border-[#B99470]/20 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#B99470] hover:bg-[#9E7B58] text-white py-3 text-center uppercase tracking-[0.18em] text-xs font-semibold shadow-lg transition-colors"
            >
              Check Availability
            </button>
            <a
              href="tel:+918690142444"
              className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#B99470] py-2"
            >
              <Phone size={14} /> +91 86 9014 2444
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
