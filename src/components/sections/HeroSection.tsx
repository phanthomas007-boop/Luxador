'use client';

import React, { useRef, useEffect } from 'react';
import styles from './HeroSection.module.css';
import { Button } from '../ui/Button';

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.7;
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.videoBg}>
        <video ref={videoRef} className={styles.video} autoPlay muted loop playsInline>
          <source src="/videos/Video_Fortsetzung_Bei_Sekunde_Acht.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <p className={styles.label}>Generalunternehmer seit 1984</p>
        <h1 className={styles.headline}>
          Hochbau, Metallbau und<br />Beschaffung — aus einer Hand.
        </h1>
        <p className={styles.sub}>
          Andere koordinieren. Wir bauen. Mit eigener Werkstatt, eigenem
          Personal und direktem Materialzugriff weltweit.
        </p>
        <div className={styles.actions}>
          <Button label="Was wir leisten" href="/leistungen" variant="filled" dark />
          <Button label="Projekt besprechen" href="/kontakt" variant="outline" dark />
        </div>
      </div>
    </section>
  );
};
