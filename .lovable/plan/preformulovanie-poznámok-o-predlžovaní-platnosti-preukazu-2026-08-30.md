# Preformulovanie poznámok o predlžovaní platnosti preukazu

## Cieľ

V sekcii **Ako si obnoviť platnosť preukazu** (záložka „Preukaz zo školy (čipový)“) preformulovať 3 poznámky tak, aby zodpovedali aktuálnemu procesu a nezavádzali používateľov ohľadom čipu a Ubian vizuálu.

## Súčasný stav

Súbor `src/components/site/RenewSection.tsx`, riadky 33–37, obsahuje pole `notes` pre záložku `skola`:

1. "V čase kupónovej kampane dostanete pri predĺžení aj kupónovú knižku — fyzicky alebo elektronicky."
2. "Zľavu v doprave máte ako držiteľ ISIC zo zákona. Známka nepredlžuje dopravu, ale funkciu čipu — tú si predĺžite samostatne na ubian.sk."
3. "Žiacke preukazy ISIC/EURO<26 na ZŠ a SŠ s vizuálom Ubian (bez loga ISIC) známku zakúpiť nevedia. Zľavy doplníte preukazom ISIC klasik z nášho e-shopu."

## Požadovaná zmena

Nahradiť poznámky novým znením:

1. Ponechať informáciu o kupónovej kampani (bez zmeny).
2. "Známka predlžuje platnosť licencie, na ktorú máte zľavu v doprave. Známka nepredlžuje platnosť čipu — tú si predĺžite samostatne na ubian.sk."
3. "Na preukazy s vizuálom Ubian a bez vizuálu ISIC nie je možné pridať ISIC známku. Je však možné dokúpiť si ISIC klasik — digitálny alebo fyzický — z nášho e-shopu."

## Technické kroky

1. Upraviť pole `notes` v objekte `skola` v `src/components/site/RenewSection.tsx`.
2. Skontrolovať, či sa rovnaké tvrdenia nenachádzajú v `src/content/knowledge-base.md` alebo v chat odpovediach, a prípadne ich zjednotiť.
3. Spustiť typecheck a overiť náhľad.