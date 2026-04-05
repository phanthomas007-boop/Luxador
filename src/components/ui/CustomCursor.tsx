'use client';

import React, { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.css';

export const CustomCursor = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    if ('ontouchstart' in window) return;

    const onMouse = (e: MouseEvent) => {
      ring.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const setCursorHover = (isHovering: boolean, isDark: boolean) => {
      if (isHovering) {
        ring.classList.add(styles.hover);
        dot.classList.add(styles.hover);
        if (isDark) {
          ring.classList.add(styles.dark);
          dot.classList.add(styles.dark);
        }
      } else {
        ring.classList.remove(styles.hover);
        dot.classList.remove(styles.hover);
        ring.classList.remove(styles.dark);
        dot.classList.remove(styles.dark);
      }
    };

    const handleInteract = (e: MouseEvent, isEnter: boolean) => {
      const target = e.target as Element;
      if (!target || !target.closest) return;
      
      const clickable = target.closest('a, button, [data-cursor-hover], [data-cursor="dark"]');
      
      if (clickable) {
        // Safe check for explicitly marked dark elements (like our buttons)
        const isDarkTarget = target.closest('[data-cursor="dark"]');
        setCursorHover(isEnter, Boolean(isDarkTarget));
      } else {
        setCursorHover(false, false);
      }
    };

    const onOver = (e: MouseEvent) => handleInteract(e, true);
    const onOut = (e: MouseEvent) => handleInteract(e, false);

    document.addEventListener('mousemove', onMouse);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      document.removeEventListener('mousemove', onMouse);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className={styles.ring} />
      <div ref={dotRef} className={styles.dot} />
    </>
  );
};
