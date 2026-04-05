'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Sek3Zahlen.module.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Sek3Zahlen = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Select all elements with the 'data-count' attribute
    const counters = gsap.utils.toArray<HTMLElement>('.count-number');
    
    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-count') || '0');
      
      gsap.from(counter, {
        textContent: 0,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        }
      });
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          <div className={styles.item}>
            <div className={styles.numberRow}>
              <span className="count-number" data-count="40">40</span>
              <span className={styles.suffix}>+</span>
            </div>
            <div className={styles.label}>JAHRE ERFAHRUNG</div>
          </div>

          <div className={styles.item}>
            <div className={styles.numberRow}>
              <span className="count-number" data-count="100">100</span>
              <span className={styles.suffix}>+</span>
            </div>
            <div className={styles.label}>PROJEKTE</div>
          </div>

          <div className={styles.item}>
            <div className={styles.numberRow}>
              <span className="count-number" data-count="4">4</span>
            </div>
            <div className={styles.label}>LÄNDER</div>
          </div>

          <div className={styles.item}>
            <div className={styles.numberRow}>
              <span className="count-number" data-count="100">100</span>
              <span className={styles.suffix}>%</span>
            </div>
            <div className={styles.label}>SCHLÜSSELFERTIG</div>
          </div>

        </div>
      </div>
    </section>
  );
};
