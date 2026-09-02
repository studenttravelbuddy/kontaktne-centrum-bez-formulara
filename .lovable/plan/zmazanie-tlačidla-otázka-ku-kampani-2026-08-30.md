# Zmazanie tlačidla "Otázka ku kampani"

## Cieľ

Odstrániť druhé tlačidlo s textom **"Otázka ku kampani"** z kampanového bannera, aby zostalo len primárne CTA **"Získať kupóny"**.

## Súbor a zmena

- **Súbor:** `src/components/site/CampaignBanner.tsx`
- **Zmena:** Zmazať `<a href="#formular">...</a>` blok (riadky 39–44), ktorý obsahuje text "Otázka ku kampani".
- **Vplyv:** Zostane len jedno CTA tlačidlo vedľa seba vľavo, layout sa automaticky prispôsobí.

## Overenie

- Typecheck prejde bez zmien v importoch (použité komponenty zostanú).
- V náhľade sa v kampanovej sekcii zobrazí iba tlačidlo "Získať kupóny".
