# Oprava myEYC Android odkazu

## Cieľ
Nahradiť všetky výskyty myEYC Android odkazu v projekte za správnu URL:
`https://play.google.com/store/apps/details?id=com.eyca.mobileapp&hl=en`

## Zmeny

1. `src/lib/discounts.ts` riadok 78
   - Stará hodnota: `https://play.google.com/store/apps/details?id=com.eyca.mobileapp`
   - Nová hodnota: `https://play.google.com/store/apps/details?id=com.eyca.mobileapp&hl=en`

2. `src/data/zlavy.ts` riadok 2393
   - Stará hodnota: `https://play.google.com/store/apps/details?id=com.eyca.mobileapp`
   - Nová hodnota: `https://play.google.com/store/apps/details?id=com.eyca.mobileapp&hl=en`

3. `src/data/zlavy.ts` riadok 2415
   - Stará hodnota: `https://play.google.com/store/apps/details?id=com.eyca.mobileapp`
   - Nová hodnota: `https://play.google.com/store/apps/details?id=com.eyca.mobileapp&hl=en`

## Overenie
- Po úprave spustiť typecheck.
- Skontrolovať náhľad, že tlačidlo Google Play pri EURO<26/EYCA zľavách smeruje na novú URL.
