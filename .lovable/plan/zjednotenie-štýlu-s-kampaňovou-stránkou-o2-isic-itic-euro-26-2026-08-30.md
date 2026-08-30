# Zjednotenie štýlu s kampaňovou stránkou O2 × ISIC/ITIC/EURO<26

Cieľ: kontaktné centrum bude vizuálne vyzerať ako referenčná kampaňová stránka — rovnaká farebná logika, typografia, tvary kariet a rytmus sekcií. Obsah, formulár, chat, FAQ a zľavy zostávajú funkčne rovnaké.

## Čo prevezmeme z referencie

- **Hero**: plná tyrkysová plocha cez celú šírku, malý veľký-písmenový kicker (napr. „KONTAKTNÉ CENTRUM“), obrovský tmavo-teal serifový nadpis, popisný odstavec s jednou žltou zvýraznenou vetou, žlté pill CTA + podčiarknutý textový odkaz vedľa, žltý kruhový obrys vpravo a ružový naklonený tvar vľavo.
- **Hlavička**: tri biele „pill“ dlaždice s logami ISIC / ITIC / European Youth Card vľavo hore, vpravo jemný sekundárny prvok — bez tmavých ohraničení.
- **Sekcie**: každá začína malým farebným kickerom (ružový/teal) a veľkým serifovým nadpisom vľavo, pod ním obsah.
- **Karty**: plné farebné bloky (teal, oranžová, ružová, žltá) s veľkým verzálkovým serifovým nadpisom, malým štítkom kategórie a pill chipmi ako odkazmi — namiesto dnešných obrysových kariet.
- **Pozadie stránky**: striedanie bielej a tyrkysovej/žltej plochy pre rytmus; žiadne čierne linky.

## Zásahy po komponentoch

- `Hero.tsx` — prepracovať na presné rozloženie referencie (kicker, nadpis, odstavec so žltým highlightom, dvojica CTA, dekoratívne tvary).
- `Header.tsx` — logá do bielych pill dlaždíc, transparentné na tyrkysovom hero, sticky verzia biela.
- `CardWizard.tsx` — štyri plnofarebné karty (ISIC teal, ITIC oranžová, EURO<26 ružová, Junior žltá) s chip odkazmi.
- `TopDiscounts.tsx`, `Steps.tsx`, `Faq.tsx`, `CampaignBanner.tsx`, `ContactForm.tsx`, `ChatWidget.tsx` — zjednotiť kickery, nadpisy, chipy, tlačidlá a odstrániť čierne/tmavé obrysy.
- `Footer.tsx` — ponechať obsah a odkazy, len zosúladiť typografiu a chipy so zvyškom.
- `styles.css` — doladiť tokeny (kicker, chip, pill tlačidlo, plnofarebné karty), bez zmeny značkových farieb.

## Technické poznámky

Ide o čisto prezentačnú zmenu: žiadne úpravy backendu, routingu dopytov, AI chatu ani dátových modulov (`discounts.ts`, `faq.ts`, `inquiry-routing.ts`). Všetky farby ostávajú semantické tokeny z `src/styles.css`. Po úpravách overím typecheck a vizuál v prehliadači (desktop + mobil) a skontrolujem, že footer odkazy naďalej fungujú.
