# Oprava Android odkazu na ISIC aplikáciu

- V zdrojovom datasete `src/data/zlavy.ts` nahradiť všetkých 232 výskytov starého Google Play odkazu novým presným odkazom:
  `https://play.google.com/store/apps/details?id=nl.jool.isic&hl=en`
- Tým sa odkaz opraví vo všetkých TOP kartách aj v celom rozbalenom katalógu, pretože komponent číta `ctaAndroid` priamo z datasetu cez `src/lib/discounts.ts`.
- Overiť, že starý odkaz už v projekte nie je a všetky tlačidlá „Google Play“ pre ISIC používajú nový odkaz.
