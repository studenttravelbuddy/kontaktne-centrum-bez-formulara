# Prehľad komentárov a návrh dokončenia

Máme 11 otvorených vlákien. Väčšina už je v kóde zapracovaná (odpovedané, len neuzavreté), tri veci reálne chýbajú.

## Už zapracované (stačí uzavrieť)

- Dopravný čip sa nikde v UI nepromuje — texty hovoria o platnom ISIC preukaze (fyzickom aj v mobile).
- Odkaz na UBIAN je z UI odstránený; doprava smeruje na `isic.sk/akceptacia-isic-vo-verejnej-doprave/`.
- Top karty už nemajú prekliky na partnerov ani na sezónny (jarný) príspevok — majú len odkazy na appky.
- Kampaň je pomenovaná „Kupónová Back to School kampaň“, CTA vedie na `isic.sk/readyformore`.
- Katalógové tlačidlá vedú do našich databáz: isic.sk, itic.sk, euro26.sk.
- Overenie platnosti preukazu sa nepromuje ako partnerská zľava.

## Čo ešte treba upraviť

1. **Prekliky v katalógu zliav** (komentáre „Nedávajme preklik na stránku partnera, ale k nám do databázy“ a RegioJet)
   V rozbalenom katalógu je pri každej zľave odkaz „web partnera“ smerujúci napr. na `regiojet.sk`.
   Návrh: tento odkaz nahradiť odkazom „detail zľavy“ do našej databázy — podľa typu preukazu na isic.sk / itic.sk / euro26.sk katalóg (s predvyplneným hľadaním partnera, ak sa dá), takže používateľ nikdy neodchádza na web partnera.

2. **Znenie v sekcii Preukazy** (komentár Michala)
   Perex zjednotiť presne na: „Preukazy vydáva združenie CKM SYTS. Fungujú ako medzinárodne uznávaný doklad o štatúte denného študenta (ISIC), mladého človeka (EURO<26) a učiteľa na hlavný úväzok (ITIC).“ (dnes je tam voľnejšia formulácia bez spresnení „denného“ a „na hlavný úväzok“).

3. **Logo EYCA/EURO<26 v hlavičke** (komentár Michala)
   Otvorená otázka — či logo ostáva v aktuálnej podobe, alebo čakáme na finálnu verziu z EYCA. Bez rozhodnutia to nechávam tak, ako je.

## Technické detaily

- `src/components/site/TopDiscounts.tsx` — `CatalogCard`: nahradiť blok `discount.partnerUrl` odkazom do našej databázy podľa `discount.cards` (ISIC/ITIC → isic.sk resp. itic.sk, EURO<26 → euro26.sk), s `target="_blank" rel="noreferrer"`.
- `src/lib/discounts.ts` — pomocná funkcia `catalogUrlFor(discount)`; `partnerUrl` sa v UI prestane používať.
- `src/components/site/Hero.tsx` — úprava perexu v sekcii `#preukazy`.
- Po zmenách odpoveď a uzavretie príslušných vlákien.
