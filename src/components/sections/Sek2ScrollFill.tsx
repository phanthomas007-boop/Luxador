'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Sek2ScrollFill.module.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Sek2ScrollFill = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!wrapperRef.current || !line1Ref.current || !line2Ref.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top top',
        end: '+=250%',
        scrub: 1,
        pin: true,
      }
    });

    // Fill line 1, then line 2
    tl.to(line1Ref.current, { '--fill': '100%', ease: 'none', duration: 1 })
      .to(line2Ref.current, { '--fill': '100%', ease: 'none', duration: 1 }, 0.5);
  }, { scope: wrapperRef });

  return (
    <section ref={wrapperRef} className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.label}>Unser Prinzip</span>
        <h2 className={styles.heading}>
          <span ref={line1Ref} className={styles.fillLine}>Wer alles selbst macht,</span>
          <span ref={line2Ref} className={styles.fillLine}>muss sich auf niemanden verlassen.</span>
        </h2>
      </div>
    </section>
  );
};
