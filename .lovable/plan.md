# Zapracovanie komentárov z preview

Spolu 11 otvorených komentárov. Nižšie je návrh, ako každý vyriešime, aj s presnými (overenými, HTTP 200) odkazmi.

## Cieľové odkazy, ktoré použijeme

- Katalóg zliav na Slovensku: https://isic.sk/zlavy-na-slovensku/
- Zľavy v zahraničí: https://isic.sk/zlavy-v-zahranici/
- Doprava (MHD, vlaky, autobusy): https://isic.sk/doprava-mhd-vlaky-autobusy-isic-euro26/
- Cestovanie s ISIC: https://isic.sk/cestovanie-s-isic/
- ISIC v mobile / appka: https://isic.sk/cestujsappkou/ a https://isic.sk/isic-demo-aplikacia/
- Ponechané oficiálne landing pages: https://www.o2.sk/ponuka/mobilne-sluzby/novy-o2-pausal a https://www.union.sk/poistenie-k-studentskym-kartam-ckm-syts/
- ISICgram: https://isic.sk/isicgram/

Katalóg zliav na isic.sk nemá verejné URL pre jednotlivých partnerov (je to dynamický widget), preto partnerské karty smerujeme na katalóg, resp. na tematickú podstránku vyššie.

## 1. Zľavy: preč s promovaním dopravného čipu

Komentáre pri kartách „Vlaky a autobusy" a „MHD v mestách" žiadajú nespomínať dopravný čip.

- „Vlaky a autobusy" – text: „Zľavnené cestovné pre žiakov a študentov s platným ISIC preukazom — fyzickým aj virtuálnym v mobile." Odkaz: https://isic.sk/doprava-mhd-vlaky-autobusy-isic-euro26/
- „MHD v mestách" – text: „Zľavy v mestskej doprave s platným ISIC preukazom, fyzickým alebo v mobile." Odkaz: https://isic.sk/doprava-mhd-vlaky-autobusy-isic-euro26/
- Odkazy na ubian.sk odstránime úplne (aj z TOP karty).

## 2. Zľavy: všetky prekliky do našej databázy

Komentár v navigácii aj pri partnerských kartách: nechceme posielať ľudí priamo na weby partnerov.

- Alza, Samsung Extra, Panta Rhei, Martinus, 101 drogérie, Microsoft 365, ZSSK, RegioJet a ostatné partnerské karty → https://isic.sk/zlavy-na-slovensku/
- Cestovanie → https://isic.sk/cestovanie-s-isic/, medzinárodné zľavy → https://isic.sk/zlavy-v-zahranici/
- Výnimky (oficiálne kampaňové landing pages): O2 MAXX → https://www.o2.sk/ponuka/mobilne-sluzby/novy-o2-pausal, Union → https://www.union.sk/poistenie-k-studentskym-kartam-ckm-syts/

## 3. RegioJet – nie je na všetky preukazy

Zľavy RegioJet neplatia pre všetky typy preukazov. Riešenie: na kartách zliav pridáme malý štítok s platnosťou („ISIC", „ITIC", „EURO<26" alebo kombinácia), aby na jednej podstránke bolo jasné, komu ktorá zľava patrí. RegioJet dostane štítok „ISIC" a preklik na https://isic.sk/zlavy-na-slovensku/

## 4. Bikesharing – zastaraný jarný článok

Preklik dnes vedie na aktualitu o jarnej kampani (https://isic.sk/aktuality/bikesharing-isic-itic/). Nahradíme ho odkazom https://isic.sk/zlavy-na-slovensku/, aby obsah nebol sezónne nesprávny.

## 5. „ISIC aplikácia" – nepromovať overenie platnosti

Karta dnes vedie na časť stránky s overením platnosti preukazu. Nahradíme ju kartou „NAY" (elektronika a spotrebiče) s preklikom na https://isic.sk/zlavy-na-slovensku/


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
- `src/components/site/Hero.tsx` – bez zmeny textu sekcie Preukazy.
- Po zmenách overím všetky nové odkazy (HTTP status) a skontrolujem sekciu v prehliadači; do každého vlákna komentárov napíšem odpoveď.
