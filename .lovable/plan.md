# Plán: Dve možnosti v EURO<26 výsledku CardWizard

## Cieľ
V sekcii „Kto si?“ po výbere „Mám do 27 rokov a neštudujem“ zobraziť v EURO<26 výsledkovej karte dve samostatné možnosti vedľa seba:
1. **Plynulý prechod** — pre držiteľov ISIC, ktorým končí platnosť.
2. **Nový držiteľ s nárokom na preukaz** — pre osoby 6–27 rokov, ktoré zatiaľ ISIC nemali.

## Technické detaily
- Upraviť `src/components/site/CardWizard.tsx`.
- Rozšíriť dátovú štruktúru `RESULTS.euro26` tak, aby namiesto jedného `shop` boxu obsahovala pole `options` s dvoma položkami.
- Každá možnosť bude mať vlastný nadpis, popis, CTA label a odkaz.
- Vykresliť obe možnosti vedľa seba v responzívnej mriežke (`sm:grid-cols-2`), podobne ako súčasné `school`/`shop` boxy.
- Zachovať existujcu poznámku o tom, že EURO<26 nemá čip.
- Odkazy:
  - Plynulý prechod → `https://objednaj-preukaz.sk/kategoria-produktu/som-mlady/` (súčasná kategória).
  - Nový držiteľ → `https://objednaj-preukaz.sk/kategoria-produktu/som-mlady/` (rovnaká kategória, iný popis).

## Kroky
1. Upraviť `ResultInfo` interface o voliteľné pole `options`.
2. Upraviť `RESULTS.euro26` — nahradiť `shop` za `options` s dvoma položkami.
3. Upraviť renderovaciu logiku tak, aby vykresľovala `options` ako dva boxy vedľa seba.
4. Skontrolovať typecheck a vizuál v preview.
