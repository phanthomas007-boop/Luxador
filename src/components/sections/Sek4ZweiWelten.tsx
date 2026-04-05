'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HDuo } from '../ui/HDuo';
import styles from './Sek4ZweiWelten.module.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Sek4ZweiWelten = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current || !wrapperRef.current) return;

    gsap.to(trackRef.current, {
      x: () => -(trackRef.current!.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      }
    });
  }, { scope: wrapperRef });

  return (
    <section ref={wrapperRef} className={styles.wrapper}>
      <div className={styles.sticky}>
        <div ref={trackRef} className={styles.track}>
          
          {/* Raum 1: Bauträgerschaft */}
          <div className={styles.room}>
            <div className={styles.roomImage}>
              <div className={styles.imagePlaceholder} />
            </div>
            <div className={styles.roomContent}>
              <HDuo 
                hard="Bauträgerschaft" 
                soft="Vom Fundament bis zur Übergabe" 
                size="section" 
                dark={false}
              />
              <p className={styles.text}>
                Wohnbau. Gewerbe. Industrie. Schlüsselfertig. Ein Ansprechpartner.
              </p>
              <Link href="/bautraegerschaft" className={styles.cta}>
                Bauträgerschaft ansehen →
              </Link>
            </div>
          </div>

          {/* Raum 2: Metallbau */}
          <div className={styles.room}>
            <div className={styles.roomImage}>
              <div className={styles.imagePlaceholder} />
            </div>
            <div className={styles.roomContent}>
              <HDuo 
                hard="Metallbau" 
                soft="Präzision in Stahl" 
                size="section" 
                dark={false}
              />
              <p className={styles.text}>
                Treppen. Geländer. Balkone. Hallen. 3D-Planung. Lasertechnik. Robotik.
              </p>
              <Link href="/metallbau" className={styles.cta}>
                Metalldimensionen prüfen →
              </Link>
            </div>
          </div>

          {/* Raum 3: Services */}
          <div className={styles.room}>
            <div className={styles.roomImage}>
              <div className={styles.imagePlaceholder} />
            </div>
            <div className={styles.roomContent}>
              <HDuo 
                hard="Services" 
                soft="Beschaffung. Personal. Beratung." 
                size="section" 
                dark={false}
              />
              <p className={styles.text}>
                Internationaler Materialeinkauf. Fachkräfte. Bauleitung.
              </p>
              <Link href="/leistungen" className={styles.cta}>
                Procurement anfragen →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
