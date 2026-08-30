# Zapracovanie komentárov z preview

Spolu 11 otvorených komentárov. Nižšie je návrh, ako každý vyriešime.

## 1. Zľavy: preč s promovaním dopravného čipu

Komentáre pri kartách „Vlaky a autobusy" a „MHD v mestách" žiadajú nespomínať dopravný čip.

- „Vlaky a autobusy" – text zmeníme na: „Zľavnené cestovné pre žiakov a študentov s platným ISIC preukazom — fyzickým aj virtuálnym v mobile."
- „MHD v mestách" – text: „Zľavy v mestskej doprave s platným ISIC preukazom, fyzickým alebo v mobile."
- Odkazy z týchto kariet už nepôjdu na ubian.sk, ale na náš web (isic.sk – doprava/zľavy).

## 2. Zľavy: všetky prekliky do našej databázy

Komentár v navigácii aj pri partnerských kartách: nechceme posielať ľudí priamo na weby partnerov.

- Každá karta zľavy bude smerovať na náš katalóg zliav na isic.sk (kde je to možné na konkrétnu kategóriu/detail partnera), nie na alza.sk, samsungextra.sk, pantarhei.sk, regiojet.sk, zssk.sk a pod.
- Výnimka ostáva len tam, kde partner je zároveň naša oficiálna landing page (napr. Union poistenie ku kartám CKM SYTS, O2 MAXX) – potvrdíme pri realizácii.

## 3. RegioJet – nie je na všetky preukazy

Zľavy RegioJet neplatia pre všetky typy preukazov. Riešenie: na kartách zliav pridáme malý štítok s platnosťou („ISIC", „ITIC", „EURO<26" alebo kombinácia), aby na jednej podstránke bolo jasné, komu ktorá zľava patrí. RegioJet bude označený a preklik pôjde na isic.sk.

## 4. Bikesharing – zastaraný jarný článok

Preklik dnes vedie na aktualitu o jarnej kampani. Nahradíme ho odkazom na aktuálnu sekciu zliav (doprava) na isic.sk, aby obsah nebol sezónne nesprávny.

## 5. „ISIC aplikácia" – nepromovať overenie platnosti

Karta dnes vedie na časť stránky s overením platnosti preukazu. Túto kartu nahradíme zľavou NAY (elektronika) s preklikom do našej databázy zliav.

## 6. Kampaň Ready for More

Do sekcie kampane doplníme presné pomenovanie: „Kupónová Back to School kampaň" (kicker/nadpis nad textom), zvyšok obsahu ostáva.

## 7. Sekcia Preukazy – text

Text ostáva bez zmeny (komentár berieme ako potvrdenie súčasného znenia).

## 8. Logo EYCA

Komentár je otázka, nie zmena – logá sú v hlavičke aj v pätke presne v dodanej podobe (bez úprav pomerov). Odpovieme v komentári, že aktuálny stav je finálny návrh na odsúhlasenie EYCA; ak príde nová verzia loga, vymeníme súbor.

## Technické detaily

- `src/lib/discounts.ts` – úprava textov (`perk`), `href` na isic.sk, nové voliteľné pole `cards?: ("ISIC"|"ITIC"|"EURO<26")[]` pre štítky platnosti; výmena položky „ISIC aplikácia" za „NAY".
- `src/components/site/TopDiscounts.tsx` – zobrazenie štítkov platnosti na karte.
- `src/components/site/CampaignBanner.tsx` – doplnenie názvu kampane.
- `src/components/site/Hero.tsx` – text sekcie Preukazy.
- Po zmenách overím všetky nové odkazy (HTTP status) a skontrolujem sekciu v prehliadači; do každého vlákna komentárov napíšem odpoveď.
