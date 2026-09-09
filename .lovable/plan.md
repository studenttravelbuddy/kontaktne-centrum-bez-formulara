# Optimalizácia stránky pre mobil

Stránka sa na mobile (393 px) nikde nerozbíja do strán, ale je zbytočne „naťahaná" a horná lišta zaberá takmer tretinu obrazovky. Návrh sa venuje iba zobrazeniu na malých displejoch — texty, odkazy ani funkcie sa nemenia.

## Čo je overené na mobile 393×838

- Horná lišta je vysoká 238 px, teda 28 % obrazovky: tri logá vedľa seba, päť odkazov zalomených do troch riadkov a pod nimi tlačidlo s telefónom.
- Žltý dekoračný kruh v hlavičke prekrýva nadpis „Preukazy ISIC…" — časť slova nie je čitateľná.
- 74 klikacích prvkov je nižších ako 40 px, takže sa na dotyk trafia ťažko (filtre zliav, malé odkazy na appky, „web partnera").
- Celková dĺžka stránky je takmer 15 000 px, hlavne kvôli veľkým odsadeniam sekcií.

## Čo sa zmení

**Horná lišta**
- Na mobile ostanú viditeľné logá (menšie) a tlačidlo na telefonát; odkazy sa skryjú pod tlačidlo s ikonou menu, ktoré rozbalí zvislý zoznam. Od tabletu vyššie ostáva lišta presne ako dnes.
- Oznam „Končí Vám platnosť preukazu?" sa skrátí na jeden riadok s odkazom.
- Cieľ: lišta pod ~110 px na mobile.

**Úvodná sekcia**
- Dekoračné kruhy a štvorce dostanú na mobile menší rozmer a posunú sa tak, aby neprekrývali nadpis.
- Menšie odsadenia (py-20 → py-12), nadpis o stupeň nižšie, tlačidlá „Napísať nám" / odkazy na celú šírku pod sebou s dostatočnou výškou.

**Karty preukazov a „Kto si?"**
- Vnútorné odsadenia a rohy sa na mobile zmenšia, aby sa do obrazovky zmestilo viac obsahu.
- Odpovede vo „Kto si?" budú na mobile kompaktnejšie (nižší nadpis v karte).

**Zľavy**
- Riadok tlačidiel pod kartami (5 odkazov na katalógy) sa na mobile zobrazí ako zvislý zoznam s plnou šírkou namiesto lámania na polovice.
- Filtre kategórií a preukazov dostanú vodorovné posúvanie s minimálnou výškou 44 px, aby sa dali pohodlne ťukať a nezaberali päť riadkov.
- Odkazy na aplikácie a „web partnera" dostanú väčšiu dotykovú plochu.

**Obnovenie platnosti, FAQ, kampaň, formulár, pätička**
- Zjednotenie odsadení na mobile, tlačidlá v záložkách na minimálne 44 px výšky.
- Kampaňový obrázok a logá v pätičke sa na najmenších šírkach zmenšia tak, aby zostali celé a vedľa seba.
- Všetky tlačidlá a odkazy s telefónom/formulárom si zachovajú súčasné cieľové adresy.

## Technické detaily

- Zmeny sú výhradne v Tailwind triedach existujúcich komponentov: `Header.tsx`, `Hero.tsx`, `CardWizard.tsx`, `TopDiscounts.tsx`, `RenewSection.tsx`, `Faq.tsx`, `Steps.tsx`, `ContactForm.tsx`, `CampaignBanner.tsx`, `Footer.tsx`.
- Mobilné menu v `Header.tsx`: lokálny `useState`, `aria-expanded`, `aria-controls`, zatvorenie po kliknutí na odkaz; `sm:hidden` / `hidden sm:flex` prepínanie, žiadna nová závislosť.
- Prístup mobile-first: základné triedy pre mobil, `sm:` / `md:` varianty vrátia dnešný vzhľad na väčších displejoch.
- Dotykové cíle: `min-h-11` (44 px) na filtroch a malých odkazoch.
- Overenie v Playwright pri 393×838 a 768×1024: výška hlavičky, žiadny vodorovný presah, počet nízkych dotykových cieľov, screenshoty kľúčových sekcií.
