# Nová kontaktná stránka ISIC / ITIC / EURO<26

Jednostránková náhrada za `isic.sk/kontaktny-formular/` v dizajne CKM SYTS („Ambassador Connect"). Svetlý režim, slovenčina, mobil ako primárny prípad.

## Farebné a typografické tokeny (presne podľa referencie)

| Token                                                   | Hodnota               | Použitie                               |
| ------------------------------------------------------- | --------------------- | -------------------------------------- |
| `--primary` / `--brand-teal-deep` / `--brand-teal-dark` | `#006666`             | nadpisy, hlavný text, primárne prvky   |
| `--brand-teal` (accent, ring)                           | `#40b8b8`             | akcenty, focus ring                    |
| `--brand-teal-light` / `--secondary`                    | `#e8f5f5`             | pozadie sekcií a kariet                |
| `--muted`                                               | `#f2f9f9`             | jemné plochy                           |
| `--border`                                              | `#d5e9e9`             | orámovanie                             |
| `--brand-yellow`                                        | `#ffc805`             | hlavné CTA („Odoslať", „Poslať dopyt") |
| `--brand-pink` / `--brand-pink-dark`                    | `#ec0578` / `#a80355` | badge, label                           |
| `--brand-orange` / `--brand-orange-dark`                | `#ff7314` / `#8c2f0d` | doplnkový akcent                       |
| `--brand-gray`                                          | `#6e6e6e`             | sekundárny text                        |
| pozadie stránky                                         | `#ffffff`             | karty biele alebo `#e8f5f5`            |

- Nadpisy H1–H3: `Roboto Slab`, váha 900, farba `#006666`.
- Text, formulár, navigácia: `Roboto`.
- Tlačidlá `border-radius: 14px`, karty/kontajnery `16px`.
- Žiadny dark mode.

Na referenčný preview link sa nedostanem (je za prihlásením), takže tokeny beriem 1:1 z hlavného promptu. Ak sa niektorá farba na tvojej stránke medzitým zmenila, pošli screenshot alebo hex a prepíšem tabuľku.

## Čo postavím

**1. Hlavička**
Top-bar oznam, logo priestor ISIC / ITIC / EURO<26, odkazy na sesterské weby, klikateľný telefón `02 2211 9963`.

**2. Hero + vysvetlenie preukazov**
Nadpis, krátky úvod, 3 karty (ISIC / ITIC / EURO<26) s odkazmi na nárokomaty a eshop, riadok s cenníkom (13 € preukaz/známka, +3,15 € kuriér) a odkazom na FAQ nižšie.

**3. Ako to funguje**
Krokové karty KROK 01/02/03 (opýtaj sa chatu → nenašiel si odpoveď → vyplň formulár).

**4. AI webchat (plávajúca bublina vpravo dole)**

- Odpovedá výhradne zo znalostnej bázy z prílohy A (25 článkov + cenník), nikdy si nedomýšľa.
- Rešpektuje sekciu „čo agent netvrdí" a opravy z „AKTUALIZÁCIA — overené naživo" (napr. Lidl, zmena priezviska pri EURO<26).
- Nepýta sa na osobné údaje; pri čomkoľvek, čo si vyžaduje pohľad do účtu, ponúkne tlačidlo „Prejsť na formulár", ktoré scrolluje na formulár a predvyplní Oblasť dopytu, ak ju vie odhadnúť.
- Úvodné chips s návrhmi otázok, ženský rod v odpovediach, streamované odpovede.

**5. Kontaktný formulár (presne podľa prílohy B)**

- Krok 1 Vaše údaje: meno (M), zastupujem organizáciu Áno/Nie (M) → názov organizácie (M), e-mail (M), telefón (M).
- Krok 2 Oblasť dopytu (M) — všetky oblasti zoskupené: Preukaz a platba / Zľavy / Škola a vydávanie / Financie / GDPR a e-maily / Iné.
- Krok 3 Typ preukazu (dynamicky len tam, kde ho oblasť vyžaduje): ISIC ZŠ, ISIC SŠ, ISIC VŠ, EURO<26, ITIC.
- Krok 4 Podmienené polia: číslo preukazu (info validácia S421…/T421…/E421…, neblokujúca), ďalšie informácie, správna príloha (potvrdenie o úhrade / screenshot / bloček / faktúra) s M/O presne podľa tabuľky. Nahrávanie jpg/png/pdf, max 5 MB.
- GDPR súhlas (povinný) pred odoslaním, potom potvrdzujúca obrazovka „Ďakujeme, ozveme sa vám čo najskôr."

**6. FAQ akordeón** „Pýtaš sa? Odpovedáme." — 12 tém z prílohy A, odpovede skrátené na 2–4 vety, na konci veta s prelinkom na chat aj formulár.

**7. Footer** — sociálne siete zoskupené podľa značky (ISIC, ISIC/EURO<26 ZŠ+SŠ, EURO<26, ITIC, CKM SYTS), sesterské weby, telefón a adresa Vysoká 32, 811 06 Bratislava, copyright a Cookies policy. Chýbajúce odkazy (Campsite bio, YouTube, IG ITIC) vynechám, kým ich nedoplníš.

## Technické detaily

- Zapnem Lovable Cloud (databáza + serverové funkcie + tajné kľúče).
- Chat: server function volajúca Lovable AI Gateway (Gemini), znalostná báza uložená ako `src/lib/knowledge-base.ts` (obsah prílohy A) vkladaná do systémového promptu; streamovaná odpoveď.
- Formulár: server function s validáciou (Zod), uloží dopyt + prílohy do Cloudu (storage bucket) a odošle e-mail cez Resend. Mapovanie oblasť × typ preukazu → príjemcovia a povinné polia je jedna tabuľka v `src/lib/inquiry-routing.ts`, aby sa dala kedykoľvek prepnúť na `klientskyservis@ckmsyts.sk`.
- Na odosielanie e-mailov budem potrebovať `RESEND_API_KEY` a overenú doménu odosielateľa — vypýtam si ho počas implementácie; do tej doby sa dopyty ukladajú do databázy, takže sa nič nestratí.
- Dizajnové tokeny do `src/styles.css` (oklch), fonty Roboto + Roboto Slab cez `<link>` v `__root.tsx`, SEO head na indexovej route.
