'use client';

import React, { useRef, useState, useCallback } from 'react';
import styles from './BeforeAfterSlider.module.css';

interface Props {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider = ({ beforeSrc, afterSrc, beforeLabel = 'Rohbau', afterLabel = 'Fertig' }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(2, Math.min(98, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onPointerUp = () => setIsDragging(false);

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      data-cursor-hover
    >
      {/* After (full background) */}
      <img src={afterSrc} alt={afterLabel} className={styles.img} draggable={false} />

      {/* Before (clipped) */}
      <div className={styles.before} style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <img src={beforeSrc} alt={beforeLabel} className={styles.img} draggable={false} />
      </div>

      {/* Slider handle */}
      <div className={styles.slider} style={{ left: `${position}%` }}>
        <div className={styles.line} />
        <div className={styles.handle}>
          <span className={styles.arrow}>◂</span>
          <span className={styles.arrow}>▸</span>
        </div>
        <div className={styles.line} />
      </div>

      {/* Labels */}
      <span className={styles.labelLeft}>{beforeLabel}</span>
      <span className={styles.labelRight}>{afterLabel}</span>
    </div>
  );
};
