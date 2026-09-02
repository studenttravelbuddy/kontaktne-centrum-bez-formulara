# Klikateľné kroky „Zavolajte nám" a „Napíšte nám"

V sekcii „Dva jednoduché kroky" sú obe karty dnes len text — nedá sa na ne kliknúť.

## Čo sa zmení

1. Karta **01 Zavolajte nám** sa stane odkazom na `tel:+421222119963` (s `target="_top"`, aby to fungovalo aj v prehliadači v rámci náhľadu). Kliknutie rovno vytočí číslo na mobile.
2. Karta **02 Napíšte nám cez formulár** sa stane odkazom na kontaktný formulár `https://isic.sk/kontaktny-formular/2` (nové okno) — teda priamo na vyplnenie formulára.
3. Do oboch kariet sa pridá viditeľná výzva na akciu na spodku („02 2211 9963" / „Otvoriť formulár") v rovnakom štýle ako v sekcii Kontaktný formulár, aby bolo jasné, že sú klikateľné. Zachová sa existujúci hover efekt.

## Technické detaily

- Upraví sa iba `src/components/site/Steps.tsx`: v poli `STEPS` doplniť `href`, `linkLabel` a príznak externého odkazu; `article` obaliť do `a` (alebo zmeniť na `a` s rovnakými triedami) a pridať `rel="noopener noreferrer"` pre externý odkaz.
- Žiadne zmeny v dátach ani inej logike.
