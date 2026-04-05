'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Sek5WarumLuxodan.module.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Sek5WarumLuxodan = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const leftGateRef = useRef<HTMLDivElement>(null);
  const rightGateRef = useRef<HTMLDivElement>(null);
  const fillTextRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!wrapperRef.current || !leftGateRef.current || !rightGateRef.current || !fillTextRef.current) return;

    gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      }
    })
    .to(leftGateRef.current, { xPercent: -100, ease: 'none' }, 0)
    .to(rightGateRef.current, { xPercent: 100, ease: 'none' }, 0)
    // Delay text fill until gates are mostly open
    .to(fillTextRef.current, { '--fill': '100%', ease: 'none' }, 0.3);

  }, { scope: wrapperRef });

  return (
    <section ref={wrapperRef} className={styles.wrapper}>
      <div className={styles.sticky}>
        
        {/* Background Layer: Das zweite Video hinter dem Tor */}
        <div className={styles.videoContainer}>
          <video className={styles.video} autoPlay muted loop playsInline>
            <source src="/videos/Video_Projekt_Luxusvilla_in_drei_Teilen.mp4" type="video/mp4" />
          </video>
          <div className={styles.videoOverlay} />
        </div>

        {/* Text Layer: Der Scroll-Fill Text */}
        <div className={styles.content}>
          <p ref={fillTextRef} className={styles.scrollFill}>
            Andere Bauträger beauftragen Subunternehmer. Warten auf Lieferanten. 
            Koordinieren zwischen zwölf Gewerken die sich nicht kennen.<br/><br/>
            Bei LUXODAN kommt Bau, Metallbau und Beschaffung aus demselben Haus. 
            Das bedeutet kürzere Bauzeiten. Weniger Schnittstellen. Bessere Materialpreise.<br/><br/>
            Keine Reibungsverluste. Nicht weil wir es versprechen. 
            Sondern weil so unser Unternehmen aufgebaut ist.
          </p>
        </div>

        {/* Foreground Layer: Die Tore */}
        <div ref={leftGateRef} className={styles.gateLeft}>
          <div className={styles.gateInnerLeft}>WARUM</div>
        </div>
        <div ref={rightGateRef} className={styles.gateRight}>
          <div className={styles.gateInnerRight}>LUXODAN</div>
        </div>

      </div>
    </section>
  );
};
