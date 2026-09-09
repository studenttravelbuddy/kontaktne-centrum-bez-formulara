# Oprava odkazov na kontaktný formulár + kontrola webu

## Čo som našla

Overila som odkazy priamo cez volanie na isic.sk:

- `https://isic.sk/kontaktny-formular-2/` → funguje (200)
- `https://isic.sk/kontaktny-formular/2` → **404, nefunguje**
- `https://isic.sk/kontaktny-formular/` → funguje (200)

Na stránke je práve teraz použitá tá nefunkčná verzia (`/kontaktny-formular/2`) na 7 miestach: v úvodnej sekcii, v kartách „Napíšte nám“, v kontaktnej sekcii, vo výsledkoch výberu preukazu a 3× v častých otázkach.

Zároveň som prešla aktuálne publikovanú verziu webu (kontakt.ckmsyts.sk) — obsah sekcií (Kto si?, obnovenie platnosti, naše zľavy, odkazy na e-shop, appky ISIC a myEYC) zodpovedá tomu, čo je v projekte, takže žiadny nový obsah nechýba. Jediný rozdiel je práve ten nesprávny odkaz na formulár.

## Čo navrhujem urobiť

1. Všetkých 7 odkazov na kontaktný formulár prepísať na `https://isic.sk/kontaktny-formular-2/`.
2. V internej dátovej banke (podklady pre odpovede) zjednotiť odkaz na formulár na tú istú adresu, aby sa nikde neobjavovala stará verzia.
3. Po zmene znovu preklikať všetky externé odkazy na stránke (partneri, e-shop, appky, doprava) a nahlásiť, ak niektorý nevracia funkčnú stránku — vrátane prípadných presmerovaní.

## Technické detaily

Súbory na úpravu: `src/components/site/Hero.tsx`, `Steps.tsx`, `ContactForm.tsx`, `CardWizard.tsx`, `Faq.tsx` (3 výskyty) a `src/content/knowledge-base.md`. Kontrola odkazov cez hromadný HTTP audit ako naposledy (status + redirect target), následne kontrola typov a stavu stránky.
