'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Sek7TorReveal.module.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Sek7TorReveal = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const leftGateRef = useRef<HTMLDivElement>(null);
  const rightGateRef = useRef<HTMLDivElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!wrapperRef.current || !leftGateRef.current || !rightGateRef.current || !contentRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top top',
        end: '+=200%',
        scrub: 1.5,
        pin: true,
      }
    });
    
    tl.to(leftGateRef.current, { xPercent: -100, ease: 'none' }, 0)
      .to(rightGateRef.current, { xPercent: 100, ease: 'none' }, 0)
      // The text fades in after the gate is halfway open
      .fromTo(contentRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: 'power2.out' }, 0.4);
  }, { scope: wrapperRef });

  return (
    <section ref={wrapperRef} className={styles.wrapper}>
      <div className={styles.videoContainer}>
        <video className={styles.video} autoPlay muted loop playsInline>
          <source src="/videos/vorhang.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay} />
      </div>

      <div ref={contentRef} className={styles.content}>
        <h2 className={styles.contentHeading}>Präzision in jeder Dimension</h2>
        <p className={styles.contentText}>Vom virtuellen Entwurf bis zur schlüsselfertigen Übergabe.</p>
      </div>

      <div ref={leftGateRef} className={styles.gateLeft}>
        <span className={styles.gateText}>LUXO</span>
      </div>
      <div ref={rightGateRef} className={styles.gateRight}>
        <span className={styles.gateText}>DAN</span>
      </div>
    </section>
  );
};
