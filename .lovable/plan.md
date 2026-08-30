# Sekcia „Ako si obnoviť platnosť preukazu“ priamo na stránku

## Cieľ
Nahradiť externý odkaz v hornej lište (`isic.sk/ako-si-obnovit-platnost-preukazu`) vlastnou sekciou na kontaktnej stránke, ktorá vysvetlí obnovu/preďženie platnosti preukazov ISIC, ITIC a EURO<26.

## Čo sa vybuduje

1. Nový komponent `src/components/site/RenewSection.tsx`
   - Sekcia s ID `obnovit-preukaz`.
   - Nadpis „Ako si obnoviť platnosť preukazu".
   - Karty/taby podľa typu preukazu a spôsobu vydania:
     - ISIC/ITIC vydaný školou (čipový) – predlžuje sa prolongačnou známkou (13 €), nie novým preukazom. Známka ISIC/EURO<26: `https://objednaj-preukaz.sk/produkt/znamka-isiceuro/`, známka ITIC (vlastná sezóna, platnosť do 12/2027): `https://objednaj-preukaz.sk/produkt/znamka-itic/`. Elektronické predĺženie platí ihneď po zakúpení, fyzická známka sa distribuuje koncom augusta / začiatkom septembra spolu s kupónovou knižkou alebo sa vyzdvihne na škole. Upozornenie: známka predlžuje len komerčné zľavy — zľava v doprave sa predlžuje samostatne cez `https://www.ubian.sk/preukaz-studenta`; na preukaz žiaka s vizuálom Ubian (bez loga ISIC) sa známka kúpiť nedá.
     - ISIC/ITIC klasik z eshopu – predĺženie online v `objednaj-preukaz.sk`.
     - EURO<26 – predĺženie/plynulý prechod z ISIC.
   - Klikateľné CTA na `objednaj-preukaz.sk` a prípadne na konkrétne podstránky predĺženia.
   - Vizuálne zladené so zvyškom stránky (tyrkysová, žltá, ružová, zaoblené karty, kickery).

2. Zaradenie sekcie do `src/routes/index.tsx`
   - Umiestnenie medzi `Hero` a `TopDiscounts`, aby bola hneď viditeľná po kliknutí z banneru.

3. Zmena banneru v `src/components/site/Header.tsx`
   - Odkaz `https://isic.sk/ako-si-obnovit-platnost-preukazu/` nahradí interným `href="#obnovit-preukaz"`.
   - Text bannera zostane: „Končí Vám platnosť preukazu? Pozrite si, ako si ju obnoviť".

## Zdroje obsahu
- Článok #2 „Ako si predĺžim preukaz" zo `src/content/knowledge-base.md`.
- Verejný článok `https://isic.sk/ako-si-obnovit-platnost-preukazu/` – pre doplnenie krokov a formulácií.

## Technické detaily
- Použiť existujúce farby a komponenty (`Reveal`, `CardWizard` pattern, Tailwind tokeny).
- Nepridávať nové závislosti.
- Zachovať responzivitu a `prefers-reduced-motion`.
- Po implementácii overiť typecheck a funkčnosť interného odkazu (scroll na sekciu).
