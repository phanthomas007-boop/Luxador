'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CountUp } from '../ui/CountUp';
import styles from './Sek4Zahlen.module.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STATS = [
  { value: 40, suffix: '+', label: 'Jahre Baupraxis', desc: 'Seit 1984. Erfahrung baut Vertrauen.' },
  { value: 120, label: 'Großprojekte', desc: 'Erfolgreich realisierter Wohn- und Gewerbebau.' },
  { value: 6500, suffix: 't', label: 'Stahl verbaut', desc: 'Aus der eigenen Metallbau-Fertigung.' },
  { value: 100, suffix: '%', label: 'Termintreue', desc: 'Verbindliche Übergabe bei jedem Bauvorhaben.' },
];

export const Sek4Zahlen = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    // Subtle entrance animation: fade up each card staggered
    gsap.fromTo('.stat-item', 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className={styles.section}>
      <div className="sectionInner">
        <div className={styles.grid}>
          {STATS.map((s, i) => (
            <div key={i} className={`stat-item ${styles.item}`}>
              <CountUp value={s.value} suffix={s.suffix} />
              <span className="statLabel">{s.label}</span>
              <span className="statDesc">{s.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
