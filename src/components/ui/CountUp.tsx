'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Props {
  value: number;
  suffix?: string;
  prefix?: string;
}

export const CountUp = ({ value, suffix = '', prefix = '' }: Props) => {
  const numRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!numRef.current) return;
    
    // We start at 0 and animate to 'value'
    gsap.fromTo(numRef.current, 
      { innerHTML: 0 },
      {
        innerHTML: value,
        duration: 2.5,
        ease: 'power3.out',
        snap: { innerHTML: 1 }, // ensure whole numbers
        scrollTrigger: {
          trigger: numRef.current,
          start: 'top 85%',
        },
        onUpdate: function() {
          if (numRef.current) {
            // Apply prefix and suffix during update to format it correctly
            const val = Math.ceil(this.targets()[0].innerHTML);
            // Format number to local string if needed (e.g. 5.000 instead of 5000), but simple ceiling works for our needs
            const formatted = new Intl.NumberFormat('de-DE').format(val);
            numRef.current.innerHTML = `${prefix}${formatted}${suffix}`;
          }
        }
      }
    );
  }, [value]);

  return <span ref={numRef} className="statValue">{prefix}0{suffix}</span>;
};
