'use client';

import React from 'react';
import { Button } from '../ui/Button';
import styles from './Sek10Projekte.module.css';

export const Sek10Projekte = () => {
  return (
    <section className={styles.section}>
      <div className="sectionInner">
        <div className="sectionHeader">
          <span className="sectionLabel">Referenzen</span>
          <h2 className="sectionHeading onBlack">Unsere Projekte.<br />Ihre Orientierung.</h2>
          <p className="sectionIntro onBlack">
            Eine Auswahl fertiggestellter Projekte aus 40 Jahren Bautätigkeit
            in Deutschland, der Schweiz und GUS-Staaten.
          </p>
        </div>

        <div className={styles.grid}>
          {[1, 2, 3].map(i => (
            <div key={i} className="card" style={{ aspectRatio: '4/3', position: 'relative', overflow: 'hidden', background: '#111111' }}>
              <div className={styles.cellOverlay}>
                <span className="cardTitle">Projekt {i}</span>
                <span className="cardArrow">→</span>
              </div>
            </div>
          ))}
        </div>

        <Button label="Alle Projekte ansehen" href="/projekte" dark center={true} />
      </div>
    </section>
  );
};
