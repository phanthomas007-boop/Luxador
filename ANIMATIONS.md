# ANIMATIONEN – LUXODAN

Alle Scroll-Animationen: GSAP + ScrollTrigger. Immer scrub:1 (1s Momentum).
Alle Transforms: GPU-basiert (x, y, xPercent, yPercent, scale, rotation). 
NIEMALS width, height, top, left animieren.

## 1. Split-Reveal (Tore öffnen sich)

```javascript
// Wrapper: height:300vh, position:relative
// Sticky: position:sticky, top:0, height:100vh, overflow:hidden
// Zwei Hälften: position:absolute, width:50%, height:100%

gsap.timeline({
  scrollTrigger: {
    trigger: '#split-wrapper',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    pin: false
  }
})
.to('.split-left',  { xPercent: -100, ease: 'none' }, 0)
.to('.split-right', { xPercent: 100,  ease: 'none' }, 0)
.to('.split-bg',    { scale: 1.05,    ease: 'none' }, 0);
```

## 2. Horizontal Scroll (Seitliche Kamerafahrt)

```javascript
// Wrapper: height:400vw
// Sticky: position:sticky, top:0, height:100vh, overflow:hidden
// Track: display:flex, width:max-content

const track = document.querySelector('#hz-track');
gsap.to(track, {
  x: -(track.scrollWidth - window.innerWidth),
  ease: 'none',
  scrollTrigger: {
    trigger: '#hz-wrapper',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    pin: false,
    invalidateOnRefresh: true
  }
});
```

## 3. Scroll-Fill (Text füllt sich mit Farbe)

```css
.scroll-fill {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    to right,
    var(--text-primary) var(--fill, 0%),
    rgba(240,237,232,0.15) var(--fill, 0%)
  );
}
```

```javascript
// Wrapper: height:300vh
// Sticky: position:sticky, top:0, height:100vh

gsap.to('.scroll-fill', {
  '--fill': '100%',
  ease: 'none',
  scrollTrigger: {
    trigger: '#fill-wrapper',
    start: 'top top',
    end: 'bottom top',
    scrub: 1
  }
});
```

## 4. SVG Path-Draw (Linie zeichnet sich)

```javascript
const path = document.querySelector('.draw-path');
const len = path.getTotalLength();
gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
gsap.to(path, {
  strokeDashoffset: 0,
  ease: 'none',
  scrollTrigger: {
    trigger: '#path-wrapper',
    start: 'top top',
    end: 'bottom top',
    scrub: 1
  }
});
```

## 5. Mask-Reveal (Text wird aufgedeckt)

```javascript
// Einmal abspielen, KEIN scrub
gsap.from('.reveal-element', {
  clipPath: 'inset(100% 0 0 0)',
  duration: 0.8,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.reveal-element',
    start: 'top 70%',
    toggleActions: 'play none none none'
  }
});
```

## 6. CountUp (Zahlen hochzählen)

```javascript
gsap.from('.count', {
  textContent: 0,
  duration: 2,
  ease: 'power2.out',
  snap: { textContent: 1 },
  stagger: 0.1,
  scrollTrigger: {
    trigger: '.count-section',
    start: 'top 60%',
    toggleActions: 'play none none none'
  }
});
```

## 7. Stagger Grid (Kacheln erscheinen nacheinander)

```javascript
gsap.from('.grid-item', {
  opacity: 0,
  y: 40,
  duration: 0.5,
  stagger: 0.1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.grid-section',
    start: 'top 65%',
    toggleActions: 'play none none none'
  }
});
```

## 8. Seitenübergang

```javascript
// Beim Klick auf internen Link:
// 1. Content fade out (0.3s)
// 2. Kupfer-Linie fährt horizontal (0.4s)
// 3. Neuer Content fade in (0.3s)
// Implementierung via Next.js App Router + Framer Motion AnimatePresence
```

## Regeln

- scrub:1 bei ALLEN scroll-gesteuerten Animationen (das Momentum)
- ease:'none' bei horizontal-scroll und split-reveal (1:1 mit Scroll)
- ease:'power3.out' bei Mask-Reveals
- ease:'power2.out' bei CountUp und Stagger
- toggleActions:'play none none none' bei einmaligen Animationen
- invalidateOnRefresh:true bei allem was Dimensionen berechnet
