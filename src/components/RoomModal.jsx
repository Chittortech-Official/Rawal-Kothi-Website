'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Check, BedDouble, Users, Maximize, Eye, Sparkles, MessageSquare, Phone } from 'lucide-react';
import { OrnateDivider } from './RoyalIcons';

export default function RoomModal({ room, isOpen, onClose, onBookRoom }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!isOpen || !room) return null;

  const images = room.gallery && room.gallery.length > 0 ? room.gallery : [room.image];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#FAF8F5] border border-[#B99470]/40 shadow-2xl rounded-sm my-8 overflow-hidden text-[#1A1615]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-[#B99470] transition-colors flex items-center justify-center"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Gallery & Main Image */}
          <div className="relative flex flex-col bg-black">
            <div className="relative w-full h-64 sm:h-80 md:h-full min-h-[280px]">
              <Image
                src={images[activeImageIndex]}
                alt={room.name}
                fill
                className="object-cover transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {room.badge && (
                <div className="absolute top-4 left-4 z-10 bg-[#883563] text-white text-[11px] uppercase tracking-[0.2em] px-3 py-1 font-semibold shadow-md">
                  {room.badge}
                </div>
              )}
            </div>

            {/* Thumbnail selector */}
            {images.length > 1 && (
              <div className="flex gap-2 p-3 bg-[#1A1615] overflow-x-auto">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`relative w-16 h-12 flex-shrink-0 border-2 overflow-hidden ${
                      activeImageIndex === i ? 'border-[#B99470]' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt={`${room.name} thumbnail ${i}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Details & Amenities */}
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#B99470] font-semibold mb-1">
                {room.caption || 'ROYAL ACCOMMODATION'}
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1A1615] mb-2">
                {room.name}
              </h3>
              
              <div className="flex items-baseline gap-2 mb-4 pb-4 border-b border-[#B99470]/20">
                <span className="text-xs text-[#5B5E63] uppercase tracking-wider">Starting from</span>
                <span className="font-serif text-2xl font-semibold text-[#883563]">{room.priceStarting}</span>
                <span className="text-xs text-[#5B5E63]">/ Night + Taxes</span>
              </div>

              {/* Key Quick Stats */}
              <div className="grid grid-cols-2 gap-3 mb-6 bg-white p-3.5 border border-[#B99470]/20 text-xs">
                <div className="flex items-center gap-2 text-[#5B5E63]">
                  <Maximize size={15} className="text-[#B99470]" />
                  <span><strong>Size:</strong> {room.size}</span>
                </div>
                <div className="flex items-center gap-2 text-[#5B5E63]">
                  <Users size={15} className="text-[#B99470]" />
                  <span><strong>Occupancy:</strong> {room.occupancy}</span>
                </div>
                <div className="flex items-center gap-2 text-[#5B5E63]">
                  <BedDouble size={15} className="text-[#B99470]" />
                  <span><strong>Bed:</strong> {room.bedType}</span>
                </div>
                <div className="flex items-center gap-2 text-[#5B5E63]">
                  <Eye size={15} className="text-[#B99470]" />
                  <span><strong>View:</strong> {room.view}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-sm text-[#5B5E63] leading-relaxed mb-3">
                  {room.detailedDesc || room.shortDesc}
                </p>
              </div>

              {/* Amenities List */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#1A1615] mb-3 flex items-center gap-1.5">
                  <Sparkles size={14} className="text-[#B99470]" />
                  Royal Room Privileges
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {room.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#2C2725]">
                      <span className="w-4 h-4 rounded-full bg-[#B99470]/15 flex items-center justify-center flex-shrink-0">
                        <Check size={11} className="text-[#B99470]" />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#B99470]/20 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  onBookRoom(room);
                }}
                className="flex-1 bg-[#B99470] hover:bg-[#A8835E] text-white py-3 px-4 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 text-center shadow-md flex items-center justify-center gap-2"
              >
                Book This Suite
              </button>

              <a
                href={`https://wa.me/918690142444?text=${encodeURIComponent(
                  `Hello Rawal Kothi, I am interested in inquiring about the ${room.name} (${room.priceStarting}/night). Please share availability.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-[#25D366] text-[#128C7E] hover:bg-[#25D366] hover:text-white py-3 px-4 text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-300"
              >
                <MessageSquare size={15} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
