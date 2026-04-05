'use client';

import React from 'react';
import { Button } from '../ui/Button';
import styles from './Sek11CTA.module.css';

export const Sek11CTA = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className="sectionLabel">Nächster Schritt</span>
        <h2 className="sectionHeading onBlack" style={{ textAlign: 'center' }}>
          Sie haben ein Projekt.<br />Wir haben die Infrastruktur.
        </h2>
        <p className="sectionIntro onBlack" style={{ textAlign: 'center', maxWidth: '480px' }}>
          Eigene Werkstatt, eigenes Personal, internationale Lieferketten.
          Hans Schindler oder Thomas Schindler beraten Sie persönlich — in
          einem ersten, unverbindlichen Gespräch.
        </p>
        <div className={styles.actions}>
          <Button label="Gespräch vereinbaren" href="/kontakt" variant="filled" dark />
          <Button label="Referenzprojekte" href="/projekte" variant="outline" dark />
        </div>
      </div>
    </section>
  );
};
