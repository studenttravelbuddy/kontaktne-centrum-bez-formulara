# Doplnenie info o školských (co-brand) a klasik preukazoch + EURO<26

Do sekcie s preukazmi a do sprievodcu „Kto si?" doplníme jasné vysvetlenie dvoch ciest k preukazu a prechodu z ISIC na EURO<26.

## Čo sa zmení

### 1. Dve cesty k preukazu (ISIC a ITIC)
Pri každom výsledku sprievodcu a pri kartách ISIC/ITIC pribudne krátke rozlíšenie:
- **Školský (co-brand) preukaz s čipom** — vydáva ho škola, slúži aj na dopravu, stravu a vstupy. Odkaz na zoznam zapojených škôl:
  - ZŠ/SŠ: https://isic.sk/zoznam-skol-ss-a-zs/
  - VŠ: https://isic.sk/zoznam-vs-kde-vybavis-isic/
  - ITIC ZŠ/SŠ: https://itic.sk/zapojene-stredne-skoly-itic/
  - ITIC VŠ: https://itic.sk/zapojene-vysoke-skoly-itic/
- **Klasik (bez čipu) z nášho e-shopu** — ak škola v zozname nie je alebo klient chce preukaz hneď. Odkaz priamo na e-shop:
  - ISIC klasik: https://objednaj-preukaz.sk/produkt/isic-klasik/
  - ISIC do mobilu: https://objednaj-preukaz.sk/produkt/preukaz-isic-v-mobile/
  - ITIC: https://objednaj-preukaz.sk/kategoria-produktu/som-ucitel/
  Krátka poznámka: klasik nemá čip (nedá sa naň nabiť kredit/električenka), ale je plnohodnotným dokladom o statuse študenta a platia s ním všetky komerčné zľavy.

### 2. EURO<26 pre neštudentov a prechod z ISIC
Pri karte EURO<26 aj vo výsledku sprievodcu doplníme:
- EURO<26 je pre kohokoľvek od 6 do 27 rokov aj bez štúdia (externisti, absolventi, pracujúci).
- Kto skončil štúdium a mal ISIC, môže plynulo prejsť na EURO<26 — nová karta dostane nové číslo a jej platnosť nadväzuje na súčasnú, takže nevzniká medzera v zľavách.
- EURO<26 nemá čip, takže nenahrádza dopravnú funkciu školského preukazu.
- CTA: https://objednaj-preukaz.sk/kategoria-produktu/som-mlady/

### 3. Drobnosť v hero kartách
Karty ISIC/ITIC/EURO<26 dostanú okrem existujúceho odkazu „Zistiť nárok" aj druhý odkaz „Objednať v e-shope" (ISIC klasik / ITIC / EURO<26), aby bol nákup vždy na dosah.

## Technické detaily
- Upraví sa `src/components/site/CardWizard.tsx` (rozšírenie objektu `RESULTS` o polia pre co-brand zoznam škôl, klasik e-shop odkaz a poznámku) a `src/components/site/Hero.tsx` (druhý odkaz v kartách + krátky text).
- Žiadne zmeny v chate, formulári, routingu e-mailov ani v databáze; texty vychádzajú z existujúcej znalostnej bázy.
