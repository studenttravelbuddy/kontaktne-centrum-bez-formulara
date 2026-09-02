# Oficiálne logá, nové ikonky a kompletný prehľad zliav

## 1. Oficiálne logá preukazov

- Nahrané logá ISIC, ITIC a EYCA (European Youth Card) nahráme na CDN a použijeme:
  - v hlavičke namiesto dnešného textového „ISIC | ITIC | EURO<26“,
  - na kartách preukazov v hero sekcii (namiesto emoji 🎓 🍎 🛹),
  - v pätičke pri skupinách sociálnych sietí.
- Logá sa zobrazia s jednotnou výškou, dostatočným ochranným priestorom a alt textom.
- Poznámka: nahrané EYCA logo je značka European Youth Card; na slovenský preukaz EURO<26 ho použijeme len ak s tým súhlasíte — inak k EURO<26 nechám typografické riešenie v brand farbách. Ak máte oficiálne EURO<26 logo, pošlite ho a vymením.

## 2. Ikonky sociálnych sietí v pätičke

- Namiesto dnešných textových odkazov („Facebook“, „Instagram“…) budú okrúhle ikonkové tlačidlá so značkovými ikonami (Facebook, Instagram, TikTok, LinkedIn) — čisté, monochromatické, s hover efektom v brand farbách.
- Pätička sa preusporiada: pri každej značke (ISIC, ISIC/EURO<26 ZŠ a SŠ, EURO<26, ITIC, CKM SYTS) bude riadok ikoniek s tooltipom/aria-label namiesto dlhého zoznamu textov.

## 3. Kompletný prehľad zliav

- Zľavy stiahnem priamo z katalógu na isic.sk (výpis je načítaný cez JavaScript, takže ho prejdem automatizovaným prehliadačom cez všetky stránky a kategórie) a uložím do dátového súboru v projekte: názov partnera, benefit, kategória, odkaz.
- Ak sa niektoré položky nepodarí načítať (ochrana proti botom), doplním ich ručne z kategórií na webe a napíšem Vám, čo chýbalo.

### Zobrazenie

- **V prehľade (preview) 6 TOP zliav** — vybrané tak, aby dávali zmysel pre študentov a učiteľov, bez fastfoodu v popredí. Jedna z nich bude **O2 MAXX** (nahradí YOXO paušál).
- Pod nimi tlačidlo **„Zobraziť všetky zľavy“**, ktoré rozbalí kompletný prehľad usporiadaný podľa kategórií (Doprava, Vzdelávanie a knihy, Tech a mobil, Šport a zdravie, Kultúra a zábava, Cestovanie, Nákupy, Jedlo a káva…).
- Filtrovacie čipy podľa kategórií zostávajú a budú fungovať aj nad kompletným zoznamom; fastfood ostáva dostupný v kategórii Jedlo, ale nie medzi TOP šiestimi.

## Technické detaily

- Logá: `lovable-assets` pointery v `src/assets/*.asset.json`, použité v `Header.tsx`, `Hero.tsx`, `Footer.tsx`. Favicon nastavíme z ISIC loga (štvorcová kópia v `public/`).
- `src/lib/discounts.ts` prepíšeme na kompletný katalóg + pole `top: true` pre šesticu do prehľadu; O2 MAXX pridáme, YOXO odstránime z TOP.
- `TopDiscounts.tsx`: režim „TOP 6“ vs. „všetko podľa kategórií“, zachované filtračné čipy a animácie.
- `Footer.tsx`: ikonky z `lucide-react` (Facebook, Instagram, Linkedin) + vlastná TikTok ikona ako inline SVG.
- Bez zmien v routingu e-mailov, formulári a chate.
