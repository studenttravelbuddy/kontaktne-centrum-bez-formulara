# Pätička: funkčné odkazy a čitateľné kategórie

## Problém
- Názvy skupín sú dlhé ("ISIC / EURO<26 — ZŠ") a v úzkom stĺpci sa orezávajú, takže kategórie nie sú vidieť.
- Tlačidlá odkazov sú stlačené v treťom stĺpci, text sa oreže a odkazy pôsobia nefunkčne.

## Riešenie
1. **Krátke názvy kategórií**: `ISIC VŠ`, `ISIC SŠ`, `ISIC ZŠ`, `EURO<26`, `ITIC`, `CKM SYTS` — bez lomiek a pomlčiek, bez orezávania.
2. **Sociálne siete na plnú šírku**: sekcia sa presunie pod trojstĺpcovú mriežku a roztiahne sa cez celú šírku pätičky (2 stĺpce mobil, 3 tablet, 6 desktop), zarovnané doľava.
3. **Funkčné odkazy**: odstráni sa `truncate` a `min-w-0` orezávanie, každé tlačidlo zostane celý klikateľný `<a>` s `target="_blank"`, `rel="noreferrer"`, `aria-label` a `title`. Overím reálne `href` v prehliadači kliknutím.

## Odkazy (nemenia sa)
- ISIC VŠ — Instagram, TikTok
- ISIC SŠ — Facebook, Instagram
- ISIC ZŠ — Facebook, Instagram
- EURO<26 — Facebook, Instagram
- ITIC — Facebook
- CKM SYTS — LinkedIn, YouTube

## Technické detaily
Zmena len v `src/components/site/Footer.tsx`: úprava `SOCIAL_GROUPS.brand`, presun bloku sociálnych sietí mimo `md:grid-cols-3` do samostatného riadku, `grid-cols-2 sm:grid-cols-3 lg:grid-cols-6`. Overenie: typecheck + Playwright kontrola, že každý odkaz má správne `href` a je klikateľný.
