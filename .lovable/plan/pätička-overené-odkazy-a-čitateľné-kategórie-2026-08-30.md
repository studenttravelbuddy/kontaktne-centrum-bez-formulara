# Pätička: overené odkazy a čitateľné kategórie

## Výsledok testu odkazov (spravený teraz)

Otestovala som každý odkaz v pätičke HTTP requestom aj v prehliadači (kontrola `href` v DOM):

- 200 OK: Instagram ISIC VŠ, TikTok ISIC VŠ, Facebook + Instagram ZŠ, Facebook + Instagram SŠ, Facebook + Instagram EURO<26, Facebook ITIC, LinkedIn CKM, YouTube CKM, isic.sk, itic.sk, euro26.sk, ubian.sk, objednaj-preukaz.sk
- **404: `https://isic.sk/cookies/`** — jediný nefunkčný odkaz v pätičke.

Všetky sociálne odkazy sú v DOM ako skutočné `<a href>` s `target="_blank"`. V náhľade sa v iframe nové okno niekedy neotvorí — pridám `rel="noopener noreferrer"` a odkazy budú fungovať aj v publikovanej verzii.

## Zmeny

1. **Krátke názvy kategórií**: `ISIC VŠ`, `ISIC SŠ`, `ISIC ZŠ`, `EURO<26`, `ITIC`, `CKM SYTS` — už žiadne orezané dlhé názvy.
2. **Sociálne siete na plnú šírku**: blok sa presunie pod hlavnú mriežku a roztiahne cez celú šírku (2 stĺpce mobil, 3 tablet, 6 desktop), zarovnané doľava, bez `truncate`.
3. **Oprava cookies odkazu**: nahradím 404 odkaz funkčným (napr. `https://isic.sk/ochrana-osobnych-udajov/`), ktorý pred nasadením otestujem; ak nebude fungovať, použijem overenú stránku zo stránok CKM.
4. **Rel atribúty**: každý externý odkaz dostane `target="_blank" rel="noopener noreferrer"`.

## Overenie pred dokončením

- typecheck
- Playwright: kontrola každého `href` v DOM + reálny HTTP test každého odkazu (200), a screenshot pätičky

## Technické detaily

Zmena len v `src/components/site/Footer.tsx`: `SOCIAL_GROUPS.brand` skrátené, sociálny blok mimo `md:grid-cols-3` s `grid-cols-2 sm:grid-cols-3 lg:grid-cols-6`, odstránené `truncate`/`min-w-0`, aktualizovaný cookies odkaz.
