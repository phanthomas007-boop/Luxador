'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../ui/Button';
import styles from './Sek6Leistungen.module.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SERVICES = [
  { title: 'Projektentwicklung', text: 'Machbarkeitsstudie, Wirtschaftlichkeitsberechnung und Entwurfsplanung. Wir prüfen Ihr Vorhaben, bevor ein einziger Stein gesetzt wird.', href: '/leistungen' },
  { title: 'Statik & Tragwerksplanung', text: 'Eigene statische Berechnungen für Stahl- und Stahlbetonkonstruktionen. Keine Auslagerung an Ingenieurbüros — alles inhouse.', href: '/leistungen' },
  { title: 'Rohbau & Ausbau', text: 'Vom Fundament bis zum letzten Anstrich. Mauerwerk, Beton, Estrich, Putz, Elektro, Sanitär — koordiniert und ausgeführt von unseren Teams.', href: '/bautraegerschaft' },
  { title: 'Stahl & Metallkonstruktion', text: 'Treppen, Geländer, Vordächer, Balkone, Hallentragwerke. Gefertigt in unserer eigenen Werkstatt mit CNC-Plasma und Roboterschweißen.', href: '/metallbau' },
  { title: 'Internationaler Einkauf', text: 'Direkter Zugang zu Materialquellen in Deutschland, Türkei, Russland und GUS. Preisvorteil durch Einkaufsvolumen und bestehende Lieferantenverträge.', href: '/leistungen' },
  { title: 'Bauleitung & QS', text: 'Permanente Vor-Ort-Präsenz. Tagesberichte, wöchentliche Meilenstein-Prüfung, fotografische Dokumentation jeder Bauphase.', href: '/leistungen' },
];

export const Sek6Leistungen = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
      }
    });

    // 1. Elegant Header Reveal
    tl.fromTo(
      gsap.utils.selector(containerRef.current)('.sectionHeader > *'),
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power3.out' }
    );

    // 2. Premium Card Cascade
    tl.fromTo(
      '.leistung-card', 
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, stagger: 0.1, ease: 'expo.out' },
      "-=0.8" // Start while header is still animating
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className={styles.section}>
      <div className="sectionInner">
        <div className="sectionHeader">
          <span className="sectionLabel">Leistungen im Detail</span>
          <h2 className="sectionHeading onWhite">Was andere aufteilen,<br />machen wir komplett.</h2>
          <p className="sectionIntro onWhite">
            Jedes dieser sechs Felder wird von eigenem Personal ausgeführt.
            Das bedeutet: ein Qualitätsstandard, ein Zeitplan, eine Haftung.
            Keine verlorenen Stunden an Schnittstellen zwischen Fremdfirmen.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((s, i) => (
            <a key={i} href={s.href} className="card leistung-card" style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: '12px', textDecoration: 'none' }} data-cursor-hover>
              <div className={styles.cardTop}>
                <span className="cardIcon">◆</span>
                <span className="cardNum">0{i + 1}</span>
              </div>
              <h3 className="cardTitle">{s.title}</h3>
              <p className="cardText">{s.text}</p>
              <span className="cardArrow">→</span>
            </a>
          ))}
        </div>

        <Button label="Alle Leistungen besprechen" href="/kontakt" center={true} />
      </div>
    </section>
  );
};
