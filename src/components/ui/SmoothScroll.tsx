'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const SmoothScroll = () => {
  useEffect(() => {
    // Registriere ScrollTrigger (nur zur Sicherheit)
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2, // Die Länge/Geschwindigkeit des Smooth-Scrolls (1.2 ist Standard hochwertig)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-like easing
      autoRaf: false, // GSAP handles RAF
    });

    // Synchronisiere Lenis Scroll in Echtzeit mit GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return null;
};
