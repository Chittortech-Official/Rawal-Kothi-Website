'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import BookingBar from '../components/BookingBar';
import AboutSection from '../components/AboutSection';
import RoomsSection from '../components/RoomsSection';
import RooftopDiningSection from '../components/RooftopDiningSection';
import FacilitiesSection from '../components/FacilitiesSection';
import GallerySection from '../components/GallerySection';
import SpecialOffersSection from '../components/SpecialOffersSection';
import LocationSection from '../components/LocationSection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';
import FloatingWidgets from '../components/FloatingWidgets';
import BookingModal from '../components/BookingModal';

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoomData, setSelectedRoomData] = useState(null);

  const handleOpenBooking = () => {
    setSelectedRoomData(null);
    setBookingModalOpen(true);
  };

  const handleSelectRoom = (room) => {
    setSelectedRoomData(room);
    setBookingModalOpen(true);
  };

  const handleCheckAvailability = (searchCriteria) => {
    setSelectedRoomData(searchCriteria);
    setBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] selection:bg-[#B99470] selection:text-white w-full max-w-full overflow-x-hidden">
      {/* Fixed Luxury Palace Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Fullscreen Hero Slider with Ornate Rajasthani Arrows & Centered Royal Crest */}
      <HeroSlider onOpenBooking={handleOpenBooking} />

      {/* Regal Floating Booking Bar */}
      <BookingBar onCheckAvailability={handleCheckAvailability} />

      {/* About Section: Chittorgarh's Ode to Regal Living */}
      <AboutSection onOpenBooking={handleOpenBooking} />

      {/* Accommodations / Suites & Rooms Showcase */}
      <RoomsSection onSelectRoom={handleSelectRoom} />

      {/* Rooftop Dining & Lounge (Featuring Rawal Kothi's Actual Photos) */}
      <RooftopDiningSection onOpenBooking={handleOpenBooking} />

      {/* Palace Facilities & Royal Offerings */}
      <FacilitiesSection />

      {/* Visual Photo Gallery with Lightbox */}
      <GallerySection />

      {/* Special Offers & Packages */}
      <SpecialOffersSection onOpenBooking={handleOpenBooking} />

      {/* Location, Fort Proximity & Guest Reviews */}
      <LocationSection />

      {/* Frequently Asked Questions based on authentic Goibibo details */}
      <FaqSection />

      {/* Grand Palace Footer */}
      <Footer />

      {/* Floating WhatsApp & Call Buttons */}
      <FloatingWidgets />

      {/* Interactive Reservation Dialog */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={selectedRoomData}
      />
    </main>
  );
}
