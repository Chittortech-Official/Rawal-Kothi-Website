'use client';

import React, { useEffect } from 'react';

export default function ScrollParallax() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 1. Smooth Scroll Reveal Observer
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          // Once revealed, keep it visible
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    });

    // Observe all sections and cards with .reveal-element
    const revealElements = document.querySelectorAll('.reveal-element');
    revealElements.forEach((el) => observer.observe(el));

    // 2. High-performance RequestAnimationFrame Parallax Driver
    let ticking = false;
    const parallaxElements = document.querySelectorAll('[data-parallax-speed]');

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          parallaxElements.forEach((el) => {
            const speed = parseFloat(el.getAttribute('data-parallax-speed')) || 0.2;
            const parent = el.parentElement;
            if (!parent) return;

            const rect = parent.getBoundingClientRect();
            // Only calculate if parent is within viewport
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              const offset = (rect.top) * speed;
              el.style.transform = `translate3d(0, ${offset}px, 0)`;
            }
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}

