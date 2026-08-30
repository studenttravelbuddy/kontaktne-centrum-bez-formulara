# Pridanie CTA „Známka ISIC“

## Čo sa zmení
V sekcii „Obnoviť preukaz“ (záložka Preukaz zo školy) pribudne nové tlačidlo **Známka ISIC** s odkazom na `https://objednaj-preukaz.sk/produkt/znamka-isic/`.

Poradie tlačidiel:
1. Známka ISIC (nové)
2. Známka ISIC/EURO<26
3. Známka ITIC
4. Predĺženie čipu (Ubian)

## Technické detaily
- Súbor: `src/components/site/RenewSection.tsx`, pole `ctas` v tabe `skola`.
- Vzhľad tlačidiel sa nemení (prvé je žlté, ostatné svetlo-tyrkysové).
- Po úprave: typecheck + overenie odkazu v náhľade.
