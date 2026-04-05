'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HDuo } from '../ui/HDuo';
import styles from './Sek7Prozess.module.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Sek7Prozess = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(() => {
    if (!wrapperRef.current || !pathRef.current) return;

    const path = pathRef.current;
    const len = path.getTotalLength();
    
    gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
    
    gsap.to(path, {
      strokeDashoffset: 0,
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
        <div className={styles.container}>
          <div className={styles.header}>
            <HDuo 
              hard="Von der Idee" 
              soft="zum fertigen Gebäude." 
              size="section" 
              dark={true} 
            />
          </div>

          <div className={styles.visualArea}>
            <svg className={styles.svg} viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
              <path 
                ref={pathRef}
                className={styles.path}
                d="M 100 500 L 300 500 L 300 400 L 500 400 L 500 300 L 700 300 L 700 200 L 900 200"
                fill="none"
                strokeWidth="4"
              />
              {/* Nodes (Points on the stairs) */}
              <circle cx="100" cy="500" r="8" className={styles.node} />
              <circle cx="300" cy="400" r="8" className={styles.node} />
              <circle cx="500" cy="300" r="8" className={styles.node} />
              <circle cx="700" cy="200" r="8" className={styles.node} />
              <circle cx="900" cy="200" r="8" className={styles.node} />
            </svg>
            
            <div className={styles.labels}>
              <span className={styles.label} style={{ left: '10%', top: '85%' }}>Initiierung</span>
              <span className={styles.label} style={{ left: '30%', top: '68%' }}>Engineering</span>
              <span className={styles.label} style={{ left: '50%', top: '52%' }}>Procurement</span>
              <span className={styles.label} style={{ left: '70%', top: '35%' }}>Construction</span>
              <span className={styles.label} style={{ left: '90%', top: '35%' }}>Handover</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
