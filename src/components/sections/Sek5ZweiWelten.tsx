'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import styles from './Sek5ZweiWelten.module.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ROOMS = [
  {
    num: '01',
    title: 'Hochbau',
    subtitle: 'Von der Bodenplatte bis zum Dach.',
    body: 'Während andere nach dem Rohbau übergeben, bleiben wir bis zur letzten Steckdose. Wir planen statisch, organisieren alle Gewerke und übergeben ein fertiges Gebäude — kein Halbprodukt.',
    cta: 'Bauträgerschaft erkunden',
    href: '/bautraegerschaft',
    bgImage: '/images/scroll_01.jpg'
  },
  {
    num: '02',
    title: 'Metallbau',
    subtitle: 'Eigene Werkstatt. Eigene Maschinen.',
    body: 'Unsere Stahlkonstruktionen entstehen nicht beim Zulieferer, sondern in unserer eigenen Fertigung. 3D-Planung, Roboterschweißen, Lasertechnik. Von der Wendeltreppe bis zur Industriehalle — Millimeter-genau.',
    cta: 'Metallbau ansehen',
    href: '/metallbau',
    bgImage: '/images/scroll_02.jpg'
  },
  {
    num: '03',
    title: 'Beschaffung',
    subtitle: 'Globaler Einkauf. Lokale Baustelle.',
    body: 'Stahl aus der Türkei, Spezialkomponenten aus Russland, Standardmaterial aus Deutschland. Unser internationales Netzwerk verschafft Ihnen Zugang zu Materialien, die lokal entweder nicht verfügbar oder nicht wettbewerbsfähig sind.',
    cta: 'Leistungen im Detail',
    href: '/leistungen',
    bgImage: '/images/scroll_03.jpg'
  },
];

export const Sek5ZweiWelten = () => {
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
        // Die Scroll-Distanz wird deutlich verlängert. 
        // Nutzer müssen weiter runterscrollen, wodurch die Bewegung nach rechts viel langsamer und kontrollierter abläuft.
        end: () => '+=' + (trackRef.current!.scrollWidth * 1.5),
        scrub: 1.5,
        pin: true,
        invalidateOnRefresh: true,
      }
    });

  }, { scope: wrapperRef });

  return (
    <section ref={wrapperRef} className={styles.wrapper}>
      <div ref={trackRef} className={styles.track}>
        {ROOMS.map((room, i) => (
          <div key={i} className={styles.room}>
            <div className={styles.roomVisual}>
              <Image 
                src={room.bgImage} 
                alt={room.title} 
                fill 
                className={styles.visualImage} 
                sizes="50vw"
              />
              <div className={styles.visualOverlay} />
              <span className={styles.roomNumber}>{room.num}</span>
            </div>
            <div className={styles.roomContent}>
              <span className={styles.roomLabel}>Geschäftsfeld {room.num}</span>
              <h3 className={styles.roomTitle}>{room.title}</h3>
              <p className={styles.roomSubtitle}>{room.subtitle}</p>
              <p className={styles.roomBody}>{room.body}</p>
              <Link href={room.href} className={styles.roomCta} data-cursor-hover>
                {room.cta} <span className={styles.arrow}>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
