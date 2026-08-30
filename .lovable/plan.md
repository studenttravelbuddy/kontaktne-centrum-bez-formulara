# Smerovanie nákupu preukazov do eshopu objednaj-preukaz.sk

Cieľ: všetky hlavné CTA tlačidlá, ktoré dnes vedú na informačné stránky isic.sk / itic.sk, upraviť tak, aby používateľov primárne smerovali do nášho eshopu `objednaj-preukaz.sk`. Informačné stránky o nároku zostanú dostupné v znalostnej báze chatu a vo footeri, ale hlavné nákupné cesty povedú do eshopu.

## 1. Hero sekcia — tri karty preukazov

V `src/components/site/Hero.tsx` zmením odkazy a texty tlačidiel v poli `CARDS`:

| Karta | Teraz | Nové |
|---|---|---|
| ISIC | „Zistiť nárok na ISIC“ → `isic.sk/narok-na-preukaz-isic/` | „Objednať ISIC“ → `objednaj-preukaz.sk/kategoria-produktu/som-student/` |
| ITIC | „Zistiť nárok na ITIC“ → `itic.sk/narok-na-preukaz-itic/` | „Objednať ITIC“ → `objednaj-preukaz.sk/kategoria-produktu/som-ucitel/` |
| EURO<26 | „Objednať EURO<26“ → `objednaj-preukaz.sk/kategoria-produktu/som-mlady/` | zostáva rovnaké (už vedie do eshopu) |

Poznámka: ISIC karta v hero zastrepuje ZŠ, SŠ aj VŠ. Pre jednotnú nákupnú cestu použijem kategóriu „som študent", ktorá je hlavným vstupom do ISIC ponuky v eshope.

## 2. Sprievodca „Kto si?" — výsledkové karty

V `src/components/site/CardWizard.tsx` zmením `href` vo výsledkovom objekte `RESULTS`:

| Výsledok | Teraz | Nové |
|---|---|---|
| ISIC žiak ZŠ/SŠ | `isic.sk/preukaz-ziaka-ss-a-zs-isic-euro/` | `objednaj-preukaz.sk/kategoria-produktu/som-ziak/` |
| ISIC študent VŠ | `isic.sk/univerzitny-vysokoskolsky-preukaz-studenta-isic/` | `objednaj-preukaz.sk/kategoria-produktu/som-student/` |
| ITIC učiteľ | `itic.sk/narok-na-preukaz-itic/` | `objednaj-preukaz.sk/kategoria-produktu/som-ucitel/` |
| EURO<26 | `objednaj-preukaz.sk/kategoria-produktu/som-mlady/` | zostáva rovnaké |

Text tlačidiel „Ako ho získať“ / „Zistiť nárok“ zmením na „Objednať preukaz" pre ISIC, ITIC a EURO<26, aby to zodpovedalo novej cieľovej stránke.

## 3. Čo sa nemení

- Footer odkazy na `isic.sk`, `itic.sk`, `euro26.sk` a `objednaj-preukaz.sk` zostávajú — sú to sekundárne informačné odkazy.
- Header top-bar odkaz na obnovu platnosti (`isic.sk/ako-si-obnovit-platnost-preukazu/`) zostáva, lebo nejde o nákup nového preukazu.
- Znalostná báza chatu si ponecháva všetky informačné odkazy; chat naďalej môže vysvetliť nárok a až potom ponúknuť eshop.
- Vizuálny štýl, farby, logá a rozloženie zostávajú.

## Technické detaily

- Upravím iba `src/components/site/Hero.tsx` (pole `CARDS`) a `src/components/site/CardWizard.tsx` (pole `RESULTS`).
- Overenie: typecheck, klikateľnosť nových odkazov v prehliadači a kontrola, že žiadny nákupný CTA nevedie mimo eshop.
