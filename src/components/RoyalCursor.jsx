'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function RoyalCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer
    if (typeof window === 'undefined') return;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Smooth lerp trailing ring
    const render = () => {
      // Lerp smoothing factor
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    // Event listeners for interactive hover targets
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('.group') ||
        target.closest('[role="button"]') ||
        target.tagName === 'IMG'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Central Sharp Gold Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#E5C185] pointer-events-none z-[9999] transition-opacity duration-300 shadow-[0_0_8px_#D4AF37] ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isHovered ? 'scale-150 bg-[#D4AF37]' : 'scale-100'}`}
        style={{ willChange: 'transform' }}
      />

      {/* Trailing Luxury Translucent Gold Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full transition-[width,height,margin,border-color,background-color,transform] duration-200 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isHovered
            ? 'w-14 h-14 -ml-7 -mt-7 border-2 border-[#D4AF37] bg-[#B99470]/20 shadow-[0_0_20px_rgba(212,175,55,0.4)] backdrop-blur-[1px]'
            : isClicked
            ? 'w-7 h-7 -ml-3.5 -mt-3.5 border border-[#E5C185] bg-[#B99470]/30'
            : 'w-10 h-10 -ml-5 -mt-5 border border-[#B99470]/70 bg-[#B99470]/5 shadow-[0_0_12px_rgba(185,148,112,0.25)]'
        }`}
        style={{ willChange: 'transform' }}
      />
    </>
  );
}

