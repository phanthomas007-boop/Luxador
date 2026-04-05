'use client';

import React from 'react';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';
import styles from './SekVorherNachher.module.css';

export const SekVorherNachher = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className="sectionHeader">
            <span className="sectionLabel">Von der Planung zur Übergabe</span>
            <h2 className="sectionHeading onBlack">Vom Rohbau<br />zum Einzug.</h2>
            <p className="sectionIntro onBlack">
              Andere zeigen Ihnen Renderings. Wir zeigen Ihnen den Unterschied
              zwischen Tag eins und dem fertigen Gebäude. Dieses Projekt haben
              wir komplett selbst geplant, gebaut und übergeben.
            </p>
          </div>
          <p className="bodyText onBlack">
            Eigene Statik, eigener Rohbau, eigener Metallbau.
            Vom ersten Betonkern bis zur letzten Balkonbrüstung —
            kein Subunternehmer, kein Qualitätsbruch.
          </p>
          <p className="bodyText onBlack" style={{ fontSize: 'var(--small-size)', marginTop: '8px' }}>
            ← Ziehen Sie den Slider, um den Vorher/Nachher-Vergleich zu sehen.
          </p>
        </div>

        <div className={styles.right}>
          <BeforeAfterSlider
            beforeSrc="/images/Rohbau.jpg"
            afterSrc="/images/Schluesselfertig.jpg"
            beforeLabel="Rohbau"
            afterLabel="Schlüsselfertig"
          />
        </div>
      </div>
    </section>
  );
};
