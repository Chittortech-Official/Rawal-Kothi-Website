import React from 'react';

// Royal Lotus Crest matching the authentic Rajasthani palace emblem
export function RoyalLotusCrest({ className = "w-16 h-16 text-white" }) {
  return (
    <svg viewBox="0 0 100 80" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Central Majestic Lotus Petal */}
      <path d="M50 4 C47 22, 38 35, 50 62 C62 35, 53 22, 50 4 Z" />
      {/* Inner Left Petal */}
      <path d="M47 16 C38 28, 25 40, 42 63 C33 46, 38 30, 47 16 Z" />
      {/* Inner Right Petal */}
      <path d="M53 16 C62 28, 75 40, 58 63 C67 46, 62 30, 53 16 Z" />
      {/* Middle Left Petal */}
      <path d="M38 28 C26 38, 12 50, 34 65 C22 51, 28 38, 38 28 Z" />
      {/* Middle Right Petal */}
      <path d="M62 28 C74 38, 88 50, 66 65 C78 51, 72 38, 62 28 Z" />
      {/* Outer Left Outspread Petal */}
      <path d="M28 42 C14 50, 4 62, 26 68 C12 60, 18 48, 28 42 Z" />
      {/* Outer Right Outspread Petal */}
      <path d="M72 42 C86 50, 96 62, 74 68 C88 60, 82 48, 72 42 Z" />
      {/* Ornate Royal Base Pedestal */}
      <path d="M30 68 Q50 63 70 68 Q50 73 30 68 Z" />
      <circle cx="50" cy="74" r="3" />
      <circle cx="38" cy="73" r="2" />
      <circle cx="62" cy="73" r="2" />
    </svg>
  );
}

// Ornate Rajasthani Jali Circle Arrow (Left)
export function JaliArrowLeft({ onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      aria-label="Previous Slide"
      className={`group relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm border border-white/40 hover:border-[#B99470] hover:bg-[#B99470] transition-all duration-300 shadow-xl ${className}`}
    >
      {/* Delicate Ornate Filigree Ring SVG */}
      <svg className="absolute inset-0 w-full h-full text-white/50 group-hover:text-white transition-colors p-1" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="44" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="40" strokeWidth="0.8" opacity="0.6" />
        {/* Cardinal lotus buds */}
        <path d="M50 4 Q48 10 50 14 Q52 10 50 4 Z" fill="currentColor" />
        <path d="M50 96 Q48 90 50 86 Q52 90 50 96 Z" fill="currentColor" />
        <path d="M4 50 Q10 48 14 50 Q10 52 4 50 Z" fill="currentColor" />
        <path d="M96 50 Q90 48 86 50 Q90 52 96 50 Z" fill="currentColor" />
      </svg>
      {/* Chevron Arrow */}
      <svg className="w-5 h-5 md:w-6 md:h-6 text-white transform group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}

// Ornate Rajasthani Jali Circle Arrow (Right)
export function JaliArrowRight({ onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      aria-label="Next Slide"
      className={`group relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm border border-white/40 hover:border-[#B99470] hover:bg-[#B99470] transition-all duration-300 shadow-xl ${className}`}
    >
      <svg className="absolute inset-0 w-full h-full text-white/50 group-hover:text-white transition-colors p-1" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="44" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="40" strokeWidth="0.8" opacity="0.6" />
        <path d="M50 4 Q48 10 50 14 Q52 10 50 4 Z" fill="currentColor" />
        <path d="M50 96 Q48 90 50 86 Q52 90 50 96 Z" fill="currentColor" />
        <path d="M4 50 Q10 48 14 50 Q10 52 4 50 Z" fill="currentColor" />
        <path d="M96 50 Q90 48 86 50 Q90 52 96 50 Z" fill="currentColor" />
      </svg>
      <svg className="w-5 h-5 md:w-6 md:h-6 text-white transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}

// Ornate Section Separator Divider
export function OrnateDivider({ color = "#B99470", className = "my-6" }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-[#B99470]" />
      <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" opacity="0.8" />
        <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
      </svg>
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-[#B99470]" />
    </div>
  );
}
