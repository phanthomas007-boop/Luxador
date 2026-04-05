'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const SmoothScroll = () => {
  useEffect(() => {
    // Registriere ScrollTrigger (nur zur Sicherheit)
    gsap.registerPlugin(ScrollTrigger);
    
    // Zwingt das Handy, alle GSAP Animationen über den Grafikchip laufen zu lassen. 
    // Das eliminiert das Mikro-Zittern ("Hängen") der normalen Animationen.
    gsap.config({ force3D: true });

    // CRITICAL MOBILE FIX: Verhindert Ruckeln und weiße Balken, 
    // wenn die Adresszeile am Handy ein- oder ausklappt.
    ScrollTrigger.config({
      ignoreMobileResize: true,
    });

    // Zwingt Touch-Geräte in einen synchronen Scroll-Thread (Behebt Apple/Android Asynchronität)
    if (typeof window !== 'undefined' && ScrollTrigger.isTouch === 1) {
      ScrollTrigger.normalizeScroll(true);
    }

    const lenis = new Lenis({
      duration: 1.2, // Die Länge/Geschwindigkeit des Smooth-Scrolls (1.2 ist Standard hochwertig)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-like easing
      autoRaf: false, // GSAP handles RAF
      touchMultiplier: 2, // Smooths out micro-jitters from the user's thumb
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
