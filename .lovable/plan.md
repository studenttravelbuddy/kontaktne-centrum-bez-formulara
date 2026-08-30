# Zapracovanie aktualizovaných podkladov (verzia z 29. 8. 2026)

Porovnala som nahrané súbory s tým, čo je v projekte. Zmenili sa tri veci: znalostná báza chatu, pravidlá pre chat (najmä embargo na tému Orange/O2) a telefonické kontakty na stránke. Súbor so sociálnymi sieťami je bez zmeny.

## 1. Aktualizovaná znalostná báza chatu

Nahradím `src/content/knowledge-base.md` novou verziou. Hlavné nové fakty:

- Dobierka na eshope neexistuje — len karta alebo prevod (16,15 €); dobierka je len pri telefonickom predaji (18 €).
- Článok 23 (operátor): spolupráca s Orangeom končí **31. 8. 2026 o 23:59**, od **1. 9. 2026** platí O2 (predtým bol v báze nesprávne rok 2027).
- Orientačné ceny O2 paušálov (Bezstarostný, Pohodový, Základný, O2 Maxx, O2 Junior) a odkaz na `isic.sk/o2`.
- Potvrdené znenia namiesto „otvorených otázok" (obnova platnosti, vek pri paušále).

## 2. Embargo Orange → O2 riešené dátumom v kóde (nie v texte promptu)

Toto je najdôležitejšia zmena. V serverovom handleri chatu sa pri **každej požiadavke** zistí aktuálny dátum a podľa neho sa do systémového promptu vloží jeden z dvoch blokov:

```text
dnes <= 31. 8. 2026  →  BLOK EMBARGO
   chat o O2 ani o zmene operátora nehovorí vôbec, ani na priamu otázku;
   odpovie neutrálne („na paušále sa z našej strany nič nemení...")
   a ponúkne formulár / telefón

dnes >= 1. 9. 2026   →  BLOK VOĽNE
   chat môže hovoriť o prechode na O2 a uviesť orientačné ceny
   s odkazom na isic.sk/o2
```

Do promptu sa vloží aj dnešný dátum ako text, aby model vedel, v akom režime je. Prepnutie je teda automatické, nikto nemusí 1. 9. nič ručne meniť. Dátum sa počíta v slovenskom čase (Europe/Bratislava), nie v UTC, aby sa embargo skončilo naozaj o polnoci u nás.

## 3. Prísnejšie pravidlá rozsahu chatu

Do systémového promptu doplním: odpovedať len keď otázka jasne sedí na jednu z 25 tém; neskladať odpoveď z viacerých článkov; pri nejednoznačnej otázke položiť jednu spresňujúcu otázku; nikdy sám od seba nepridávať neopýtané informácie (najmä nie o zmene operátora).

## 4. Telefonické kontakty na stránke

- Nový blok **„Radšej zavolať?"** nad kontaktným formulárom s tromi klikateľnými `tel:` číslami:
  - Preukazy VŠ, ITIC, EURO<26 — +421 948 827 097
  - Preukazy SŠ a ZŠ — +421 948 884 304
  - Všeobecná linka — 02 2211 9963
- V pätke FAQ doplním klikateľný telefón: „…vyplňte formulár nižšie, alebo nám rovno zavolajte na 02 2211 9963." (dnes je tam len text „zavolajte nám" bez odkazu).
- Chat pri odovzdaní ďalej ponúkne formulár aj telefón spolu; ak nevie typ preukazu, uvedie všeobecnú linku aj obe priame čísla.

## 5. Smerovanie e-mailov

Podľa aktualizovaného podkladu je otázka zjednotenia adries uzavretá — `reklamacia@`, `sspreukazy@` aj `vspreukazy@` ostávajú oddelené. Súčasná tabuľka v `src/lib/inquiry-routing.ts` už zodpovedá finálnemu stavu, takže tam len upravím zavádzajúci komentár o možnom zjednotení pod `klientskyservis@`.

## Technické detaily

- `src/content/knowledge-base.md` — nahradenie obsahom z `1_Datova_banka_AI_chat_a_FAQ-2.md`.
- `src/routes/api/chat.ts` — funkcia `buildSystemPrompt()` s dátumovou podmienkou (hranica `2026-09-01`, zóna Europe/Bratislava), embargo/voľný blok, pravidlá rozsahu, telefónne kontakty.
- `src/components/site/ContactForm.tsx` — blok „Radšej zavolať?" v brandových tokenoch nad formulárom.
- `src/components/site/Faq.tsx` — `tel:` odkaz v závere.
- `src/lib/inquiry-routing.ts` — len komentár, žiadna zmena adries.
- Overenie: typecheck a test chatu v oboch režimoch (embargo dnes, voľný režim s posunutým dátumom), plus vizuálna kontrola formulára a FAQ.

## Mimo rozsahu

- Vizuálny štýl stránky, zľavy, footer a sociálne siete — bez zmeny.
- Doručovanie e-mailov cez Resend stále čaká na `RESEND_API_KEY`.
