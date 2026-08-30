# Návrat hero sekcie a zladenie farieb v „Kto si?“

## 1. Hero späť do pôvodného Ambassador štýlu

Vrátim hero do podoby spred poslednej úpravy štýlu (zjednotenie s O2 kampaňovou stránkou):

- tyrkysové hero pole s veľkým dvojfarebným serifovým nadpisom (žltá + tmavá tyrkysová),
- sparkle label „Kontaktné centrum“ nad nadpisom,
- žlté pill CTA „Spýtať sa chatu“ a podčiarknuté odkazy „Napísať nám“ / „Naj zľavy“,
- žltý kruhový akcent vpravo hore a ružový naklonený štvorec vľavo,
- pod hero ostáva „Kto si?“ wizard, tri karty ISIC / ITIC / EURO<26 a žltý cenový blok.

Text nadpisu ostáva „Ready to help“ (bez otáznika) podľa poslednej úpravy.

## 2. Farby sekcie „Kto si?“ zladené s kartami

Štyri odpovede dostanú farby preukazov tak, aby vedľa seba pôsobili vyvážene (teplé odtiene v strede, tyrkysová na kraji):

```text
[ ZŠ / SŠ ]   [ VŠ ]    [ Učiteľ ]   [ Do 27 rokov ]
 tyrkysová     žltá      oranžová      magenta/ružová
   ISIC        ISIC        ITIC         EURO<26
```

- ZŠ/SŠ — ISIC tyrkysová, tmavý text
- VŠ — ISIC žltá, tmavý text
- Učiteľ — ITIC oranžová, svetlý text
- Do 27 rokov — EURO<26 magenta/ružová, svetlý text

Aby to spolu vyzeralo dobre: rovnaké zaoblenie a veľkosť kariet, jednotná hrúbka ikon, kontrast textu prispôsobený každej farbe (tmavý na tyrkysovej a žltej, svetlý na oranžovej a magente) a rovnaký hover posun. Panel wizardu ostane svetlý tyrkysový, takže farebné karty naň sadnú bez zbytočného šumu.

## 3. Technické detaily

- `src/components/site/Hero.tsx` — návrat pôvodnej Ambassador štruktúry a tried.
- `src/components/site/CardWizard.tsx` — úprava mapy `ANSWER_TONES` na brandové tokeny preukazov a zladenie kontrastu textu/ikon.
- Bez zásahu do obsahu, odkazov, formulára, chatu, FAQ, zliav a backendu.
- Overenie: typecheck a vizuálna kontrola hero + sekcie „Kto si?“ v prehliadači vrátane mobilnej šírky.
