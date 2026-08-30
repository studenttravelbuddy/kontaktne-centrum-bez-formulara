# Odkazy na aplikácie ISIC aj myEYC pri zľavách

Dnes každá karta zľavy (top karty aj katalóg) ponúka len dva odkazy — App Store a Google Play — a oba vedú na aplikáciu ISIC. Zľavy platné pre EURO<26 / EYCA sa však uplatňujú v aplikácii myEYC, ktorá tam chýba.

## Čo sa zmení

Pri každej zľave sa odkazy rozdelia podľa preukazu:

- Ak zľava platí pre ISIC alebo ITIC → riadok „ISIC aplikácia: App Store / Google Play“ (existujúce odkazy z dát).
- Ak zľava platí pre EURO<26 → pribudne riadok „myEYC aplikácia: App Store / Google Play“.
- Zľavy platné pre oba typy preukazov zobrazia oba riadky pod sebou.

Overené odkazy na myEYC:
- App Store: https://apps.apple.com/app/myeyc-european-youth-card/id6478585702
- Google Play: https://play.google.com/store/apps/details?id=com.eyca.mobileapp

Text nad odkazmi sa zmení z „Zľavu uplatníte v aplikácii:“ na krátke popisky pri každom riadku, aby bolo jasné, ktorá appka patrí ku ktorému preukazu.

## Technické detaily

- `src/lib/discounts.ts`: pridám konštanty `EYC_APP_APPLE_URL` a `EYC_APP_ANDROID_URL`.
- `src/components/site/TopDiscounts.tsx`: komponent `AppLinks` rozšírim tak, aby podľa `discount.cards` vykreslil jeden alebo dva riadky (ISIC / myEYC) s ikonami Apple a Smartphone; použije sa rovnako v `TopCard` aj `CatalogCard`, takže zmena platí pre top zľavy aj celý katalóg.
- Štýly, farby a `target="_blank" rel="noreferrer"` zostávajú rovnaké; na úzkych kartách sa odkazy zalamujú ako doteraz.
