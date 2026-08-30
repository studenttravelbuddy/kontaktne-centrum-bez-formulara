# Zľavy podľa nového datasetu + zapracovanie komentárov z preview

Spájame dve veci naraz: nový dataset 235 zliav (`zlavy.ts`) so zadaním z `LOVABLE_PROMPT.md` a 11 otvorených komentárov z preview.

## 1. Nový dátový zdroj

- Nahraný `zlavy.ts` (235 zliav, 9 kategórií, polia `top`, `partner`, `nazov`, `kategoria`, `preukazy`, `ctaApple`, `ctaAndroid`, `partnerUrl`) uložíme ako `src/data/zlavy.ts`.
- Nahradí doterajší ručný zoznam v `src/lib/discounts.ts` (ten sa zmení na tenkú vrstvu nad novými dátami, aby ostatné komponenty nespadli).
- Kategórie: Doprava (11), Tech a mobil (17), Nákupy (29), Cestovanie (8), Kultúra a zábava (103), Šport (28), Vzdelávanie (3), Zdravie a krása (8), Jedlo a káva (28). Po nasadení počty overím v preview.

## 2. Orange → O2

Vo všetkých textoch a odkazoch na webe (nielen v katalógu) nahradíme Orange za O2. V dátach je 5 O2 ponúk kampane „Ready for more?" (Maxx, Základný, Pohodový, Bezstarostný, Junior). Ich `partnerUrl` je zatiaľ `TBD` — dovtedy pri nich zobrazíme len CTA na aplikáciu a odkaz na kampaňovú sekciu na našom webe. Reálnu URL kampaňovej stránky doplníme až po spustení stránky 1. 9. 2026.

## 3. „Naj zľavy" = 9 top pickov podľa kategórií

Sekciu prerobíme na 9 kariet (grid 3×3) — jedna z každej kategórie, presne riadky s `top: true`:

RegioJet (Doprava), iStores (Tech a mobil), Panta Rhei (Nákupy), UNION (Cestovanie), Spotify (Kultúra a zábava), Golem Club (Šport), Skillmea (Vzdelávanie), FAnn parfumérie (Zdravie a krása), Starbucks (Jedlo a káva).

Každá karta: ikona kategórie, partner, krátky popis zľavy, štítky preukazov a CTA (bod 5).

## 4. Kompletný katalóg zliav

Pod „Naj zľavy" bude katalóg všetkých 235 zliav v 9 taboch podľa kategórie, s vyhľadávaním a stránkovaním (kategória Kultúra a zábava má 103 položiek). Karta obsahuje partnera, názov zľavy, štítky preukazov (ISIC / ITIC / EURO<26 / EYCA) a CTA.

## 5. Prelinkovanie: do našej appky, nie na web partnera

Rieši komentáre „prekliky potrebujeme do našej databázy" a „nedávajme preklik na stránku partnera".

- CTA „Zistiť viac" nevedie na web partnera ani na generický katalóg isic.sk, ale na stiahnutie appky, cez ktorú sa zľava uplatňuje — dve badge tlačidlá App Store / Google Play z polí `ctaApple` a `ctaAndroid`.
- ISIC/ITIC zľavy → ISIC aplikácia; zľavy len pre EYCA (EURO<26) → myEYC aplikácia (v dátach je to už predpočítané).
- `partnerUrl` ostáva len ako doplnková, menej výrazná informácia (drobný odkaz „web partnera"), nie hlavné CTA.
- Tým padá aj komentár „RegioJet nie je na všetky preukazy" pri prekliku — pozri bod 6.

## 6. Štítky platnosti preukazov (RegioJet)

Každá karta dostane štítky z poľa `preukazy` (napr. RegioJet = len ISIC), takže na jednej podstránke bude jasné, komu ktorá zľava patrí. V katalógu pridáme aj rýchly filter podľa preukazu.

## 7. Preč s promovaním dopravného čipu

- Zmiznú karty s formuláciou „s dopravným čipom" — v novom datasete sa nahrádzajú reálnymi dopravnými zľavami; kde je potrebný vlastný text, použijeme „s platným ISIC preukazom — fyzickým aj virtuálnym v mobile".
- Odkazy na ubian.sk odstránime; informačný odkaz na dopravu vedie na https://isic.sk/akceptacia-isic-vo-verejnej-doprave/
- Zrušíme aj kartu s preklikom na overenie platnosti preukazu a starý jarný bikesharing článok — nahradia ich položky z nového datasetu.

## 8. Kampaň Ready for More

V sekcii kampane doplníme presné pomenovanie „Kupónová Back to School kampaň" (kicker nad textom), zvyšok obsahu ostáva.

## 9. Sekcia Preukazy a logo EYCA

- Text sekcie Preukazy ostáva bez zmeny.
- Logá sú v hlavičke aj pätke v dodanej podobe bez úprav pomerov — v komentári odpovieme, že aktuálny stav je návrh na odsúhlasenie EYCA; pri novej verzii loga vymeníme súbor.

## Technické detaily

- `src/data/zlavy.ts` – nový dataset (kopírovaný 1:1 z uploadu).
- `src/lib/discounts.ts` – prepis na odvodenie kategórií, TOP výberu a typov z `ZLAVY`; zachovanie exportov, ktoré používajú existujúce komponenty.
- `src/components/site/TopDiscounts.tsx` – 9 top kariet, taby s 9 kategóriami, vyhľadávanie + „zobraziť ďalšie", štítky preukazov, dvojité app CTA.
- `src/components/site/CampaignBanner.tsx` – názov kampane.
- Prehľadanie celého projektu na „Orange", „dopravný čip", „ubian" a ich úprava (vrátane `src/content/knowledge-base.md`, ak sa tam vyskytujú).
- Po zmenách: typecheck, kontrola počtov v kategóriách v preview, overenie app odkazov a odpoveď do každého z 11 komentárových vlákien.
