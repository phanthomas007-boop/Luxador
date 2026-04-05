# DESIGN SYSTEM – LUXODAN

## Materialien (Hintergründe, KEINE flachen Farben)

```
textures/beton-dunkel.jpg   → Dunkle Sektionen    → Fallback: #111111
textures/beton-hell.jpg     → Helle Sektionen      → Fallback: #C8C4BC
textures/holz-eiche.jpg     → Akzent-Linien        → Fallback: #8B6F47
textures/stahl-gebürstet.jpg → Tore, Nav bei Scroll → Fallback: #2A2A2A
textures/weiss-putz.jpg     → Finale Sektionen     → Fallback: #F2F0EC
```

## CSS Variables

```css
:root {
  --text-primary: #F0EDE8;
  --text-secondary: #8A8580;
  --text-dark: #1A1917;
  --text-dark-secondary: #5A5650;
  --text-accent: #C8C4BC;
  --border-subtle: rgba(240,237,232,0.08);
  --border-medium: rgba(240,237,232,0.15);
  --accent-hover: rgba(200,196,188,0.15);
  --space-xs:8px; --space-sm:16px; --space-md:24px; --space-lg:32px;
  --space-xl:48px; --space-2xl:64px; --space-3xl:96px; --space-4xl:128px;
  --content-max: 1200px;
  --content-padding: 48px;
  --ease-smooth: cubic-bezier(0.25,0.1,0.25,1.0);
}
```

## Fonts

```
Display (Headlines Z1): 'Space Grotesk' — weight:700/900, line-height:0.92, letter-spacing:-0.03em
Serif (Headlines Z2):   'Cormorant Garamond' italic — weight:300, line-height:1.0, letter-spacing:-0.01em
Body:                   'Satoshi' — weight:400, size:17px, line-height:1.7, letter-spacing:0.01em
Labels:                 'Satoshi' — weight:500, size:12px, letter-spacing:0.12em, uppercase
Kyrillisch-Fallback:    'Golos Text', 'PT Sans'
```

## Headline-Muster (h-duo) — JEDE Headline, KEINE Ausnahme

```
Zeile 1: Space Grotesk, fett, groß, --text-primary (dunkel) oder --text-dark (hell)
Zeile 2: Cormorant Garamond, italic, dünn, kleiner, --text-accent (dunkel) oder --text-dark-secondary (hell)
Gap zwischen Zeilen: 0.1em
```

## Größen

```
Hero:    Z1 clamp(48px,8vw,120px)   Z2 clamp(24px,3vw,42px)
Section: Z1 clamp(36px,5vw,72px)    Z2 clamp(20px,2.5vw,32px)
Card:    Z1 clamp(20px,2vw,28px)    Z2 clamp(14px,1.5vw,18px)
```

## Button

```css
border: 1px solid var(--text-accent);
background: transparent;
color: var(--text-primary);
font: 500 14px/1 'Satoshi', sans-serif;
letter-spacing: 0.08em;
text-transform: uppercase;
padding: 16px 48px;
transition: all 0.3s var(--ease-smooth);
/* Hover: */ background: var(--text-accent); color: #111111;
```

## Navigation

```
Fixed, 72px hoch, transparent → bei Scroll: rgba(17,17,17,0.9) + backdrop-blur(10px)
Logo links: Space Grotesk 700 20px
Items rechts: Satoshi 500 13px uppercase, letter-spacing:0.06em
Sprachwechsel: DE · EN · RU
```
