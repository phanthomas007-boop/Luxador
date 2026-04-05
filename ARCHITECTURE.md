# ARCHITEKTUR – LUXODAN STARTSEITE

Lies zuerst: DESIGN.md, DONT.md, ANIMATIONS.md, COMPONENTS.md, TONE.md

## Seitenrhythmus

```
SEK  NAME                      TYP           HINTERGRUND         ANIMATION
1    Hero                      ★ WOW         Stahl-Tore/Video    Split-Reveal (ANIMATIONS.md #1)
2    Positionierung            Ruhig         Beton-dunkel        Mask-Reveal (ANIMATIONS.md #5)
3    Zahlen                    Ruhig         Beton-dunkel        CountUp (ANIMATIONS.md #6)
4    Die zwei Welten           ★ WOW         Beton-hell          Horizontal-Scroll (ANIMATIONS.md #2)
5    Warum LUXODAN             ★ WOW         Beton-dunkel        Scroll-Fill (ANIMATIONS.md #3)
6    Leistungen                Ruhig         Beton-hell          Stagger-Grid (ANIMATIONS.md #7)
7    Prozess                   ★ WOW         Beton-dunkel        Path-Draw (ANIMATIONS.md #4)
8    Team                      Ruhig         Beton-dunkel        Desaturation → Color
9    Projekte                  Ruhig         Putz-weiß           Stagger-Grid
10   CTA                       Ruhig         Beton-dunkel        Mask-Reveal
```

4 Wow-Momente. 6 ruhige Sektionen. Dunkel-Dunkel-Dunkel-Hell-Dunkel-Hell-Dunkel-Dunkel-Hell-Dunkel.

---

## SEK 1 – HERO (Split-Reveal)

Scrollhöhe: 300vh. Sticky 100vh.
Zwei Stahltore (textures/stahl-gebürstet.jpg) fahren beim Scrollen auseinander.
Dahinter: Fullscreen-Video (videos/hero-zeitraffer.mp4). Autoplay, muted, loop.
Mittig: "LUXODAN" — Space Grotesk 700, clamp(48px,10vw,140px), --text-primary.
Statisch. Keine Animation auf dem Text. Er steht. Wie ein Gebäude.
Unten: Scroll-Indikator, 1px Linie, --text-accent, pulsiert (CSS animation).
Video-Fallback: Statisches Bild mit 20s Ken-Burns CSS-Zoom.

## SEK 2 – POSITIONIERUNG

Min-height: 100vh. Flex center.
```
Hard: "Schlüsselfertiger Bau."    / "Turnkey Construction."    / "Строительство под ключ."
Soft: "International. Aus einer Hand." / "International. All-inclusive." / "Международно. Всё из одних рук."
Label: "WOHNBAU · GEWERBEBAU · INDUSTRIEBAU" (in jeweiliger Sprache)
```

## SEK 3 – ZAHLEN

Min-height: 60vh. Grid 4 Spalten (Mobile: 2).
```
40+   JAHRE ERFAHRUNG    / YEARS EXPERIENCE    / ЛЕТ ОПЫТА
100+  PROJEKTE            / PROJECTS            / ПРОЕКТОВ
4     LÄNDER              / COUNTRIES           / СТРАНЫ
100%  SCHLÜSSELFERTIG     / TURNKEY             / ПОД КЛЮЧ
```
Zahlen: Space Grotesk 900, clamp(48px,7vw,96px). Labels: Satoshi 500, 12px, 0.12em spacing, uppercase.

## SEK 4 – DIE ZWEI WELTEN (Horizontal Scroll)

Scrollhöhe: 400vw. Sticky 100vh. Track: flex, max-content.
3 Räume, jeder 100vw breit. Layout pro Raum: Links 50% Bild/Video, Rechts 50% Text.

```
RAUM 1: Bauträgerschaft
  Hard: "Bauträgerschaft"              / "Development"            / "Застройка"
  Soft: "Vom Fundament bis zur Übergabe" / "Foundation to handover" / "От фундамента до сдачи"
  Text: "Wohnbau. Gewerbe. Industrie. Schlüsselfertig. Ein Ansprechpartner."
  → /bautraegerschaft

RAUM 2: Metallbau
  Hard: "Metallbau"                    / "Steel Engineering"      / "Металлоконструкции"
  Soft: "Präzision in Stahl"           / "Precision in steel"     / "Точность в стали"
  Text: "Treppen. Geländer. Balkone. Hallen. 3D-Planung. Lasertechnik. Robotik."
  → /metallbau

RAUM 3: Services
  Hard: "Services"                     / "Services"               / "Услуги"
  Soft: "Beschaffung. Personal. Beratung." / "Sourcing. Staffing. Advisory." / "Снабжение. Персонал. Консалтинг."
  Text: "Internationaler Materialeinkauf. Fachkräfte. Bauleitung."
  → /leistungen
```

## SEK 5 – WARUM LUXODAN (Scroll-Fill)

Scrollhöhe: 300vh. Sticky 100vh. Zentrierter Text, max-width:800px.
Font: Cormorant Garamond 400, clamp(24px,3.5vw,42px).
Text füllt sich beim Scrollen von grau (rgba 0.15) zu --text-primary.

```
DE: "Andere Bauträger beauftragen Subunternehmer. Warten auf Lieferanten.
Koordinieren zwischen zwölf Gewerken die sich nicht kennen.
Bei LUXODAN kommt Bau, Metallbau und Beschaffung aus demselben Haus.
Das bedeutet kürzere Bauzeiten. Weniger Schnittstellen. Bessere Materialpreise.
Keine Reibungsverluste. Nicht weil wir es versprechen.
Sondern weil so unser Unternehmen aufgebaut ist."

EN: "Other developers hire subcontractors. Wait for suppliers.
Coordinate between twelve trades that have never met.
At LUXODAN, construction, steel engineering and procurement come from the same house.
That means shorter build times. Fewer interfaces. Better material prices.
Zero friction. Not because we promise it. Because that is how our company is built."

RU: "Другие застройщики нанимают субподрядчиков. Ждут поставщиков.
Координируют двенадцать подрядов, которые друг друга не знают.
В LUXODAN строительство, металлоконструкции и снабжение — из одного дома.
Это значит: сжатые сроки. Меньше стыков. Лучшие цены на материалы.
Ноль потерь. Не потому что мы обещаем. А потому что так устроена наша компания."
```

## SEK 6 – LEISTUNGEN

Grid 3x2 (Tablet: 2x3, Mobile: 1x6). Hintergrund: Beton-hell.
```
Headline Hard: "Was wir tun." / "What we do." / "Что мы делаем."
```
6 Kacheln (siehe BAUANLEITUNG_v3.md Sektion 6 für alle Texte in 3 Sprachen).
CTA unter Grid: "Alle Leistungen →" → /leistungen

## SEK 7 – PROZESS (Treppen-Timeline)

Scrollhöhe: 400vh. Sticky 100vh. SVG-Pfad: aufsteigende Treppe, 5 Stufen.
```
Headline Hard: "Von der Idee"        / "From idea"          / "От идеи"
         Soft: "zum fertigen Gebäude." / "to finished building." / "до готового здания."
```
5 Stufen mit Texten (siehe BAUANLEITUNG_v3.md Sektion 7).
Pfad-Farbe: var(--text-accent). Aktive Punkte: var(--text-primary).

## SEK 8 – TEAM

3er Grid, max-width: 900px.
Portraits: aspect-ratio 3:4, filter:saturate(0.3), hover:saturate(1).
```
Hans Schindler    — "Bau. 40 Jahre."           / "Construction. 40 years."       / "Строительство. 40 лет."
Thomas Schindler  — "Bau. Nächste Generation." / "Construction. Next generation." / "Строительство. Новое поколение."
Eduard Kutepow    — "Metall. Einkauf. Technik." / "Steel. Sourcing. Technology."  / "Металл. Снабжение. Технологии."
```
CTA: "Mehr über das Team →" → /ueber-uns/team

## SEK 9 – PROJEKTE

Hintergrund: Putz-weiß.
```
Headline Hard: "Projekte." / "Projects." / "Проекты."
```
Solange keine Projekte:
"Unsere ersten Projekte unter LUXODAN befinden sich in der Realisierung.
Die Erfahrung dahinter: über 100 fertiggestellte Projekte in 4 Ländern."
CTA: "Ihr Projekt könnte das nächste sein →" → /kontakt

## SEK 10 – CTA

```
Hard: "Sprechen wir"       / "Let's discuss"     / "Обсудим"
Soft: "über Ihr Projekt."  / "your project."      / "ваш проект."
```
Button → /kontakt
Darunter: info@luxodan.com | +49 (0) XXX XXX XX XX

---

## MOBILE-VERHALTEN

```
Split-Reveal (Sek1): Gleiche Technik, funktioniert auf Touch.
Horizontal-Scroll (Sek4): Gleiche Technik, Touch-Scrollen wird 1:1 übersetzt.
Scroll-Fill (Sek5): Gleiche Technik, keine Anpassung nötig.
Treppen-Timeline (Sek7): SVG skaliert mit viewBox, Text wird kleiner.
Navigation: Burger-Menü, Fullscreen-Overlay, stagger-Animation.
Grids: 3-spaltig → 2-spaltig (Tablet) → 1-spaltig (Mobile).
Content-Padding: 48px → 24px auf Mobile.
```

---

## SEITEN-NAVIGATION (Unterseiten)

Jede Unterseite hat: Hero (dunkel, Bild/Video, HDuo headline), 3-5 Inhaltssektionen
(Wechsel dunkel/hell), CTA am Ende. Gleiche Komponenten wie Startseite.
Keine neuen Wow-Momente auf Unterseiten – nur Mask-Reveals und Stagger-Grids.
Die Startseite ist das Erlebnis. Unterseiten sind Information.

Detaillierte Unterseiten-Spezifikation: siehe BAUANLEITUNG_v3.md Teil 4.
