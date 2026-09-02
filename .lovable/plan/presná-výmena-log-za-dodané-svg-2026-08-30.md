# Presná výmena log za dodané SVG

## Čo upravím

1. Znovu nahradím všetky tri logo assety presne dodanými súbormi, bez editácie ich obsahu, farieb, viewBoxu alebo formátu:
   - `isic-logo-3.svg` — ISIC, pôvodný rozmer 420.41333 × 167.34666
   - `itic-logo-3.svg` — ITIC, pôvodný rozmer 420.95999 × 167.34666
   - `EYCA_EURO26_RGB-3.svg` — European Youth Card, viewBox 420.41 × 167.34
2. Zachovám všade poradie **ISIC → ITIC → EYC**.
3. Upravím všetky tri miesta použitia — hlavičku, karty v hlavnej sekcii a pätičku.
4. Odstránim súčasné pevné boxy a vnútorné odsadenia, ktoré logá tlačia do rozmerov 96×48 alebo 112×64. Obrázky budú používať svoj presný natívny pomer strán; na menších obrazovkách sa môžu iba proporcionálne zmenšiť, nikdy orezať, roztiahnuť ani deformovať.
5. Logá nebudem vkladať do bielych kartičiek ani ich vizuálne upravovať. Zostanú presne také, ako sú v dodaných SVG.

## Overenie

- Porovnám použité assety s tromi uploadmi podľa veľkosti a kontrolného súčtu.
- V prehliadači skontrolujem hlavičku, hlavnú sekciu aj pätičku na desktopovej aj mobilnej šírke.
- Overím, že každý obrázok zobrazuje celý SVG, má správny pomer strán a nikde nie je orezaný alebo deformovaný.
