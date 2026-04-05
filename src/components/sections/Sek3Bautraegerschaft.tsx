'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../ui/Button';
import styles from './Sek3Bautraegerschaft.module.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Sek3Bautraegerschaft = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    const tl = gsap.timeline({
      scrollTrigger: { trigger: containerRef.current, start: 'top 90%' }
    });

    tl.fromTo(
      gsap.utils.selector(containerRef.current)('.sectionHeader > *, .bodyText, .bodyBold, a'),
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power3.out' }
    );

    tl.fromTo(
      '.sek3-card', 
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, stagger: 0.15, ease: 'expo.out' },
      "-=0.8"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className={styles.section}>
      <div className="sectionInner">
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className="sectionHeader">
              <span className="sectionLabel">Das Problem</span>
              <h2 className="sectionHeading onWhite">Zu viele Beteiligte.<br />Zu wenig Verantwortung.</h2>
              <p className="sectionIntro onWhite">
                Ein typisches Bauprojekt involviert 15 bis 25 Firmen. Architekt,
                Statiker, Rohbauer, Dachdecker, Haustechniker, Elektriker — alle
                mit eigenen Verträgen, Zeitplänen und Schuldzuweisungen bei Verzögerungen.
              </p>
            </div>
            <p className="bodyText onWhite">
              Das Ergebnis: Zeitverlust an jeder Schnittstelle. Kostensteigerungen
              durch Koordinationsfehler. Und ein Auftraggeber, der zum Projektmanager
              seiner eigenen Baustelle wird.
            </p>
            <p className="bodyBold onWhite">
              LUXODAN löst dieses Problem, indem wir die gesamte Wertschöpfungskette
              selbst abbilden — Planung, Bau, Stahl und Materialeinkauf.
            </p>
            <Button label="Wie wir das lösen" href="/bautraegerschaft" />
          </div>

          <div className={styles.right}>
            <div className="card sek3-card" style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span className="statValue">100%</span>
              <span className="statLabel">Inhouse-Umsetzung</span>
              <span className="statDesc">Planung, Statik, Rohbau und Stahlbau aus einer Hand. Keine Abhängigkeit von Subunternehmern.</span>
            </div>
            <div className="card sek3-card" style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span className="statValue">1</span>
              <span className="statLabel">Zentraler Ansprechpartner</span>
              <span className="statDesc">Statt 20 verschiedenen Gewerken kommunizieren Sie nur mit uns. Wir koordinieren den Rest.</span>
            </div>
            <div className="card sek3-card" style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span className="statValue">FIX</span>
              <span className="statLabel">Kosten- & Termingarantie</span>
              <span className="statDesc">Weil wir die Kette kontrollieren, können wir verbindliche Übergabetermine garantieren.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
