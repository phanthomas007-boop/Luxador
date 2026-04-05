'use client';

import React from 'react';
import styles from './Sek8Prozess.module.css';

const STEPS = [
  { num: '01', label: 'Initiierung', desc: 'Standortanalyse, Machbarkeitsprüfung und Budgetrahmen. Bevor gebaut wird, wird gerechnet.' },
  { num: '02', label: 'Engineering', desc: 'Statik, Entwurfsplanung und Baugenehmigung. Alles inhouse, keine externen Ingenieurbüros.' },
  { num: '03', label: 'Beschaffung', desc: 'Stahl, Beton, Spezialkomponenten. International beschafft, lokal geliefert.' },
  { num: '04', label: 'Realisierung', desc: 'Rohbau, Ausbau, Metallbau. Eigene Teams, tägliche Baustellenberichte.' },
  { num: '05', label: 'Übergabe', desc: 'Abnahme, Dokumentation, Gewährleistung. Schlüsselfertig und protokolliert.' },
];

export const Sek8Prozess = () => {
  return (
    <section className={styles.section}>
      <div className="sectionInner">
        <div className="sectionHeader">
          <span className="sectionLabel">Unser Prozess</span>
          <h2 className="sectionHeading onWhite">Fünf Phasen.<br />Null Überraschungen.</h2>
          <p className="sectionIntro onWhite">
            Jede Phase hat definierte Meilensteine und Freigaben.
            Sie wissen jederzeit, wo Ihr Projekt steht.
          </p>
        </div>

        <div className={styles.grid}>
          {STEPS.map((step, i) => (
            <div key={i} className="card" style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span className={styles.num}>{step.num}</span>
              <h3 className="cardTitle">{step.label}</h3>
              <p className="cardText">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
