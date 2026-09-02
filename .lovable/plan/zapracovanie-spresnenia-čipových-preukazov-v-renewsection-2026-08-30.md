# Zapracovanie spresnenia čipových preukazov v RenewSection

## Cieľ

V sekcii **Ako si obnoviť platnosť preukazu** (#obnovit-preukaz) jasne uviesť, ktoré preukazy môžu byť čipové a ktoré sa predlžujú známkou:

- **ISIC** — pre vysoké školy (VŠ)
- **ISIC / EURO<26** — pre základné a stredné školy (ZŠ a SŠ)
- **ITIC** — môže byť čipový (vlastná známka, vlastná sezóna)

## Súbor

`src/components/site/RenewSection.tsx`

## Zmeny

1. **Nadpis prvej karty** (`title` v TABS[0]) — z aktuálneho „ISIC / EURO<26 alebo ITIC vydaný školou“ na explicitné rozdelenie, napr.:
   „ISIC (VŠ), ISIC / EURO<26 (ZŠ a SŠ) alebo ITIC vydaný školou“

2. **Úvodný text** (`intro`) — doplniť, že čipový preukaz zo školy sa týka ISIC na VŠ, ISIC/EURO<26 na ZŠ/SŠ a ITIC, a že každý typ má vlastnú prolongačnú známku.

3. **Krok 1** (`steps[0]`) — upraviť formuláciu z „Zvoľte správnu známku: ISIC/EURO<26, alebo ITIC.“ na explicitné:
   „Zvoľte správnu známku podľa typu preukazu: ISIC (VŠ), ISIC/EURO<26 (ZŠ a SŠ) alebo ITIC.“

4. **Poznámky** (`notes`) — ponechať existujúce upozornenia o kupónovej knižke, dopravnej zľave a Ubian vizuáli; prípadne upraviť poslednú poznámku tak, aby reflektovala rozdelenie ISIC/EURO<26 podľa typu školy.

5. **Tlačidlo prvej známky** — skontrolovať, či popis „Známka ISIC/EURO<26“ zodpovedá novej formulácii; ponechať, prípadne doplniť do labelu „(ZŠ a SŠ)“ len ak to nebude príliš dlhé.

## Overenie

- `bunx tsc --noEmit` bez chýb.
- Playwright: sekcia #obnovit-preukaz zobrazuje nový nadpis a texty, prepínanie záložiek funguje, konzola bez chýb.
