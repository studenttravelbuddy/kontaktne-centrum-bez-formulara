# Dátová banka pre AI webchat a FAQ — CKM SYTS (ISIC / ITIC / EURO<26)

Toto je znalostná báza, ktorú CKM SYTS pripravilo pre AI agenta na e-mailový support
(25 tematických článkov + spoločný cenník/fakty + register otvorených otázok). Je to presne ten
istý typ obsahu, aký má načítaný nový webchat na kontaktnej stránke — chat má odpovedať len z
faktov, ktoré sú tu, nikdy si nič nedomýšľať, a keď odpoveď nevie alebo ide o niečo, čo si
vyžaduje pohľad do klientovho účtu, má nasmerovať používateľa na kontaktný formulár nižšie na
stránke (presne toto CKM interne rozhodlo — pozri poznámku na konci dokumentu).

Zdroj: `Znalostná báza pre AI agenta.docx`, verzia z 25. 8. 2026 (CKM SYTS).
Overené proti isic.sk, itic.sk, euro26.sk a ubian.sk k tomuto dátumu.

**Ako to použiť v Lovable:** tento súbor vlož AI chatu ako systémový/knowledge-base kontext
(RAG alebo priamo do system promptu, podľa toho, akú AI integráciu Lovable použije). Sekcia
"Smerovník" na začiatku hovorí chatu, akú tému rozpoznať z otázky klienta. Sekcia "Čo agent
netvrdí" na konci sú fakty, ktoré chat NEMÁ tvrdiť ako isté — pri nich má radšej odpovedať
opatrne alebo odkázať na kontaktný formulár.

---

Znalostná báza pre AI agenta
CKM SYTS — články fázy 1
25 tematických článkov + cenník a register otvorených otázok
Verzia z 25. 8. 2026
Ako pripomienkovať: označte text, ktorý chcete zmeniť, a vložte komentár (Revízia → Nový komentár, alebo ⌘+Alt+A). Ak píšete priamo do textu, zapnite si Sledovanie zmien, nech je vidieť, čo je nové. Otázky, ktoré má CKM rozhodnúť, sú v samostatnom dokumente na vyplnenie — sem ich písať netreba.
Obsah
Smerovník — podľa čoho agent vyberá článok
Toto je zoznam kategórií, z ktorých agent vyberá práve jednu pre každý prichádzajúci e-mail. Ak sedia dve, platí poradie: konkrétnejšia téma pred všeobecnejšou (napr. Nedá sa prihlásiť pred Aplikácia nefunguje).
Články sú len na témy, ktoré sa dajú zodpovedať bez pohľadu do účtu klienta. Všetko ostatné agent nerieši — zbierne pravidlá sú v systémovom prompte.
--TABLE START--
# | kategória | agent ju vyberie, keď klient píše o… | prípadov
0 | Cenník a údaje | nevyberá sa — fakty pre všetky ostatné články | —
1 | Nedá sa prihlásiť do aplikácie | prihlásenie/registrácia v appke zlyháva, „preukaz nie je platný" | ~100
2 | Ako si predĺžim preukaz | predĺženie, obnova na ďalší rok, „končí mi platnosť" | ~25
3 | Zľava sa mi neuplatnila | zľava u partnera nefunguje, kupón, Lidl a podobne | ~40
4 | Preukaz nefunguje v doprave | vlak, autobus, MHD, SMS, čip, Ubian | ~35
5 | Je moja škola zapojená | škola nie je v zozname, čip v jedálni/na vstupe | ~35
6 | Potvrdenie o štúdiu | žiadame doklad o štúdiu/zamestnaní, klient ho posiela | ~23
7 | Aplikácia nefunguje | pád appky, chyba, zrušenie konta — nie prihlásenie | ~18
8 | Nestihol som zaplatiť | po splatnosti, prosba o nové platobné údaje, VS | ~38
9 | Zaplatil som, ale nič sa nedeje | platba neprišla, nespárovala sa, dvojitá platba | ~39
10 | Chcem vrátiť peniaze | žiadosť o refundáciu z akéhokoľvek dôvodu | ~52
11 | Neprišlo mi číslo karty | zaplatené, ale číslo preukazu nedorazilo | ~20
12 | Neviem číslo svojho preukazu | klient číslo stratil alebo ho nikdy nevidel | ~17
13 | Prihlásenie vs. registrácia | klient si mýli založenie konta s prihlásením | ~18
14 | Chcem si zmeniť fotku | fotka v appke aj na plaste, prvé nahranie | ~20
15 | Mám nárok na preukaz? | študent, vek, externé štúdium, viac preukazov naraz | ~14
16 | Mám ako učiteľ nárok na ITIC? | pedagóg, úväzok, MŠ, viac škôl | ~6
17 | Nedá sa mi kúpiť známka | eshop známku neponúka, preukaz sa známkou nepredlžuje | ~17
18 | Zmenilo sa mi meno alebo škola | zmena mena, školy, údajov na preukaze | ~23
19 | Známka — možnosti a doručenie | aká známka, kedy príde, kam sa lepí | ~29
20 | Stratil som preukaz, duplikát | strata, krádež, poškodenie, duplikát | ~12
21 | Zrušenie a oprava objednávky | storno, zle objednaný typ, zlá adresa | ~24
22 | Eshop ma nepustí ďalej | overenie v eshope zlyhá, meno/číslo neprejde | ~15
23 | Operátor mi zrušil paušál | Orange, Yoxo, študentský paušál,O2, O2 MAXX | ~30
24 | Ako nahrám nové číslo do aplikácie | klient má nové číslo karty a nevie s ním do appky | najčastejší návod
25 | Preukaz mi vydala škola | čo rieši škola a čo CKM, školský preukaz bez fotky | ~12
— | „Čo agent netvrdí a čo si vypýta" | nevyberá sa — platí naprieč všetkými článkami | register
--TABLE END--
Kostra článku
1.   Platí pre — pre ktoré produkty článok platí. Ak produkt klienta v rozsahu nie je, hlavná odpoveď sa nepoužije — buď je nižšie vetva pre jeho produkt, alebo sa eskaluje.
0b. Súvisiace — čísla článkov, na ktoré sa tento odkazuje. Aplikácia ich pri retrievale načíta spolu s ním, inak by model odkaz nasledovať nevedel.
2.   Ako sa pýtajú — reálne formulácie klientov z archívu. Podľa nich agent kategóriu rozpozná. Nie sú to odpovede, sú to príznaky.
3.   Odpoveď — hotový text v štýle, akým odpovedá support. Toto agent pošle.
4.   Vetvy — alternatívne odpovede pre situácie, ktoré sa dajú rozlíšiť z toho, čo klient napísal. Nikdy nie z toho, čo by bolo treba pozrieť v systéme.
5.   Kedy eskalovať a s čím — čo agent povie klientovi a čo odovzdá operátorke.
Eskalácia je plnohodnotná odpoveď, nie zlyhanie.
Ceny, odkazy a lehoty sú len v článku 0. Keď sa zmenia, mení sa jeden súbor.
Rozsah a overenie
•    25 tematických článkov + cenník + register otvorených vecí.
•    Pokrývajú 562 prípadov z archívu, ktoré agent zvládne bez prístupu do účtu.
•    Test na 20 náhodných reálnych otázkach z archívu: 18/20 vyhovujúcich odpovedí (prah bol 15/20).
•    Fakty overené proti webom CKM a proti ubian.sk naposledy 25. 8. 2026. Podklad revízie je v ../../_archiv/web_2026-08-25/.
Cenník a údaje — spoločný podklad
Jediné miesto, kde sú ceny, odkazy a lehoty. 
Ceny — čo predáva CKM (objednaj-preukaz.sk)
--TABLE START--
produkt | cena
Digitálny preukaz - do mobilu (ISIC / ITIC / EURO26) | 13,00 €
Plastový / Digitálny preukaz - platba prevodom | 13,00 €
Plastový preukaz na dobierku | 13,00 €
Kuriér pre všetky fyzické  preukazy, duplikáty aj známky | 3,15 € 
Známka (ISIC, ISIC/EURO26, ITIC — všetky druhy) | 13,00 €
Duplikát / doobjednanie plastu k preukazu v mobile | 3,00 €
--TABLE END--
Cena 13 € platí pre všetkých 26 položiek eshopu okrem duplikátov — nový preukaz, preukaz do mobilu aj známka stoja rovnako.

Dobierka (platba do rúk kuriéra): **na eshope táto možnosť nie je** — tam sú len platba kartou
alebo bankovým prevodom, obe za 16,15 € (13 € + 3,15 € kuriér). Dobierka existuje výhradne pri
telefonickom predaji (keď CKM klienta obvoláva) a vtedy je celková suma **18 €** (13 € preukaz +
cca 5 € poštovné/dobierkový poplatok). Agent teda dobierku ako možnosť na eshope neponúka.
Ceny — čo predáva škola / Ubian (nie CKM)
Škola si objednáva cez UBIAN dva rôzne preukazy žiaka a ich cena aj rozsah sa líšia. Preukazy UBIAN majú čip ktorý používajú žiaci v škole a na dopravu a môžu byť doplnené o ISIC/EURO26 licenciu ktorá im pridá výhody/zľavy na Slovensku aj v zahraničí a zároveň je tiež od 1.7.26 v akejkoľvek forme licencia ISIC akceptovaná dopravcami na zľavu v doprave.  Ceny sú z ubian.sk/preukaz-studenta, overené 25. 8. 2026.
--TABLE START--
  | Preukaz žiaka s vizuálom Ubian | Preukaz žiaka s vizuálom ISIC/EURO<26
Nový preukaz | 12,30 € | 25,30 €
Predĺženie platnosti pre dopravu | 3,69 € | 3,69 €
Predĺženie licencie ISIC (známka) | — nemá ju | 13,00 €
Doprava a školské systémy | áno | áno
Komerčné ISIC zľavy, medzinárodná licencia | nie | áno
--TABLE END--
Toto je najčastejšia skrytá príčina „zľava mi nefunguje". Žiak s preukazom vo vizuáli Ubian má funkčnú dopravu aj školské systémy, ale žiadne ISIC zľavy — a známku si naň kúpiť nevie. Ak klient píše, že mu preukaz zo školy funguje v autobuse, ale nie v obchode, opýtaj sa, či má na preukaze logo ISIC.
Preukaz študenta VŠ je zo zákona povinný a vydáva sa na všetkých vysokých školách na Slovensku s licenciou ISIC  — CKM združenie pre mládež, študentov a učiteľov má pritom štandardnú cenu členského poplatku 13 € ktorá zahŕňa aj členskú kartu s licenciu ISIC.Tento poplatok je zahrnutý v celkovej sume ktorú si škola od študentov pri zápise vyžaduje. 
Platobné údaje
Názov príjemcu: CKM SYTS
IBAN: SK07 1111 0000 0018 7848 5012
BIC (SWIFT): UNCRSKBX
Starý účet — nepoužívať: SK21 1100 0000 0026 6308 0127, SWIFT TATRSKBX. Naposledy sa posielal v 10/2025. Ak klient tvrdí, že platil, a platbu nevidíme, oplatí sa overiť, či ju neposlal sem – v takom prípade sa platba vráti späť odosielateľovi a musí uhradiť na správny účet. 
Zopakovanie zlyhanej platby: https://objednaj-preukaz.sk/opakovanie-platby/?REF= + číslo objednávky
Odkazy
--TABLE START--
na čo | odkaz
Známka ISIC / EURO26 | https://objednaj-preukaz.sk/produkt/znamka-isiceuro/
Nová karta EURO26 | https://objednaj-preukaz.sk/kategoria-produktu/som-mlady/
Preukaz pre učiteľa | https://objednaj-preukaz.sk/kategoria-produktu/som-ucitel/
Preukaz pre žiaka | https://objednaj-preukaz.sk/kategoria-produktu/som-ziak/
Duplikáty | https://objednaj-preukaz.sk/kategoria-produktu/duplikaty/
ISIC klasik (plast) | https://objednaj-preukaz.sk/produkt/isic-klasik/
Preukaz ISIC v mobile | https://objednaj-preukaz.sk/produkt/preukaz-isic-v-mobile/
Preukaz ITIC v mobile | https://objednaj-preukaz.sk/produkt/preukaz-itic-v-mobile/
Známka ITIC | https://objednaj-preukaz.sk/produkt/znamka-itic/
Preukaz pre žiaka ZŠ | https://objednaj-preukaz.sk/kategoria-produktu/som-ziak-zs/
Preukaz pre študenta | https://objednaj-preukaz.sk/kategoria-produktu/som-student/
Aktivácia dopravy (SMS + terminál) | https://isic.sk/aktivacia-dopravy-pocas-prazdnin/
Zoznam zapojených ZŠ a SŠ | https://isic.sk/zoznam-skol-ss-a-zs/
Zoznam VŠ vydávajúcich ISIC | https://isic.sk/zoznam-vs-kde-vybavis-isic/
Zoznam ZŠ/SŠ vydávajúcich ITIC | https://itic.sk/zapojene-stredne-skoly-itic/
Zoznam VŠ vydávajúcich ITIC | https://itic.sk/zapojene-vysoke-skoly-itic/
Objednávka čipového preukazu cez školu | https://www.ubian.sk/preukaz-studenta
Doprava  | https://www.ubian.sk/preukaz-studenta#renew
Prolongácia | isic.sk/ako-si-obnovit-platnost-preukazu/
Duplikát a strata (Ubian) | https://www.ubian.sk/preukaz-studenta#strata-preukazu-a-objednavka-duplikatu
Nárok na ISIC | https://isic.sk/narok-na-preukaz-isic/
Nárok na ITIC | https://itic.sk/narok-na-preukaz-itic/
Overenie nároku na ITIC (nárokomat) | https://itic.sk/narokomat/
Akceptácia ISIC v doprave — oficiálne stanovisko | https://isic.sk/akceptacia-isic-vo-verejnej-doprave/
Podmienky členstva | https://isic.sk/elc-eshop-online/
Zľavy na Slovensku | https://isic.sk/zlavy-na-slovensku/
Zľavy v zahraničí | https://www.isic.org/discounts/
Návrh novej zľavy od klienta | https://isic.sk/kontaktny-formular/[DVCS1] 
Aplikácia pre EURO26 | https://euro26.sk/euro-aplikacia/
--TABLE END--
Odkazy, ktoré agent neposiela (overené 25. 8. 2026):
•    objednaj-preukaz.sk/overenie/ — vracia 404. Overenie platnosti je krokom priamo pri každom produkte v eshope („Skontrolovať platnosť preukazu"), samostatná stránka na to neexistuje. Agent klienta odkáže na produkt, ktorý si chce kúpiť.
•    transcard.sk, preukazstudenta.sk, ubian.azet.sk — všetky presmerúvajú na ubian.sk/preukaz-studenta. Posielaj rovno cieľovú adresu. Hranica: UBIAN/TransData rieši dopravnú funkcionalitu preukazov — platnosť a funkčnosť preukazu v doprave a funkčnosť čipu. CKM nemá prístup do systému TransData, a preto nevie klientovi pomôcť určiť, či ide o poškodený čip, či má preukaz predĺženú platnosť na dopravu, alebo prečo preukaz v doprave nefunguje — toto rieši výhradne UBIAN/TransData.
Aplikácie
•    ISIC a ITIC → aplikácia ISIC
•    EURO26 → aplikácia my EYC
Známky
Sú tri druhy a líšia sa aj sezónou, aj spôsobom doručenia:
--TABLE START--
druh | sezóna | doručenie
Známka ISIC/EURO<26 — stredná škola | 09/2027 | vyzdvihnutie na vlastnej strednej škole, alebo kuriér
Vysokoškolskáznámka ISIC | 09/2027 | Elektronicky/kuriér koncom augusta / začiatkom septembra spolu s kupónovou knižkou, alebo vyzdvihnutie u brigádnika na začiatku semestra
Známka ITIC | 12/2027 | Vyzdvihnutie na škole/ kuriér
--TABLE END--
Sezóna 09/2027 je overená priamo v eshope (25. 8. 2026). 
Elektronické predĺženie prebehne ihneď po zakúpení — preukaz je platný na zľavy aj predtým, než príde fyzická známka.
Známkou sa predlžuje iba čipový preukaz vydaný školou. Ostatné typy sa predlžujú kúpou nového preukazu s nadväzujúcou platnosťou.
Stredoškolský preukaz sa známkou nepredĺži, keď klient prestal byť študentom SŠ — pri prechode na vysokú školu treba nový preukaz ISIC.
Nárok na preukaz
ISIC — súčasne musia platiť tri veci (isic.sk/narok-na-preukaz-isic, 25. 8. 2026):
•    denná forma štúdia, minimálne 15 hodín týždenne aspoň počas jedného školského alebo akademického roka,
•    škola akreditovaná Ministerstvom školstva, výskumu, vývoja a mládeže SR (alebo obdobnou štátnou inštitúciou v zahraničí),
•    vek aspoň 6 rokov.
Preukaz ISIC nemá hornú vekovú hranicu — nad 26 rokov ostávajú komerčné zľavy, zaniká len štátom garantovaná zľava na dopravu. Potvrdenie o prijatí nestačí, treba potvrdenie o zápise alebo o štúdiu. Externé a diaľkové štúdium nárok nedáva.
EURO<26 — ktokoľvek od 6 do dovŕšenia 27 rokov, bez ohľadu na štúdium (teda aj externista). Platnosť vyprší deň pred 27. narodeninami. Rovnaké komerčné zľavy ako ISIC, bez dopravy.
ITIC — pedagogický pracovník (učiteľ, majster odbornej výchovy, vychovávateľ, korepetítor, školský tréner, pedagogický asistent, zahraničný lektor, školský špeciálny pedagóg, školský digitálny koordinátor, učiteľ profesijného rozvoja) alebo odborný pracovník (vysokoškolský učiteľ, výskumný a umelecký pracovník, špeciálny a terénny špeciálny pedagóg, kariérový poradca, logopéd a školský logopéd, liečebný pedagóg, sociálny pedagóg, psychológ a školský psychológ).
Zároveň stačí splniť jednu z troch podmienok:
--TABLE START--
  | podmienka
a) | úväzok min. 18 hodín týždenne — úväzky z viacerých škôl sa sčítavajú
b) | dôchodca alebo invalidný dôchodca s úväzkom min. 1 hodina týždenne
c) | materská alebo rodičovská dovolenka, ak pred odchodom spĺňal bod a)
--TABLE END--
Zariadenie musí byť v registri škôl a školských zariadení alebo v registri VŠ Ministerstva školstva. Pedagogické vzdelanie nie je kritérium — rozhoduje úväzok. Nárok si klient overí sám: https://itic.sk/narokomat/
Platnosti
--TABLE START--
preukaz | platnosť
ISIC klasik, fyzický aj digitálny  | 12 mesiacov/365 dní odo dňa objednania (objednaný 3. 1. → do 2. 1.)
ITIC klasik, fyzický aj digitálny | 12 mesiacov/365 dní odo dňa objednania
Karta EURO<26, fyzický aj digitálny | 12 mesiacov/365 dní odo dňa objednania ale najviac do dňa pred dovŕšením 27 rokov. Ak si kúpi preukaz týždeň pred tak mu platí len ten týždeň do 27 rokov.
Čipový ISIC/EURO<26 zo ZŠ/SŠ | do dátumu na preukaze (09/2027), predlžuje sa známkou
Čipový ISIC z VŠ | do dátumu na preukaze (09/2027), predlžuje sa známkou
Čipový ITIC zo školy | do konca kalendárneho roka (12/2027), predlžuje sa známkou
--TABLE END--
Doprava má vlastné lehoty: čipový preukaz platí v autobusovej doprave do 30. 9. nasledujúceho roka, v železničnej do 30. 6. Stredoškolákovi v poslednom ročníku skončí zľavnená doprava najneskôr 30. 6., komerčné zľavy mu bežia do konca septembra.
Doprava
Známka dopravu nerieši. Dopravná časť sa predlžuje zvlášť a má dva kroky:
1.   zaplatenie poplatku 3,69 € cez Ubian.sk alebo SMS TC medzera PRIEZVISKO medzera ČÍSLO ČIPU (priezvisko zadávaj bez diakritiky), SMS pošli na číslo 8844.  Poplatok 3,69 € sa strháva priamo za odoslanie tejto SMS — nejde o ďalší, samostatný poplatok.
2.   priloženie preukazu k UNIterminálu — až tým sa zľava aktivuje.
Bez druhého kroku zľava nefunguje, aj keď je zaplatená. Terminál býva na škole, ale existuje aj sieť verejných UNIterminálov (železničné stanice a predajne dopravcov v Banskej Bystrici, Bratislave, Košiciach, Poprade, Prešove, Trnave, Zvolene, Žiline a ďalších) — zoznam je na ubian.sk/preukaz-studenta. Vysokoškoláci platia poplatok na svojej škole; výnimkou sú UKF Nitra, PU Prešov, PEVŠ, KU Ružomberok a UK Bratislava, kde sa platí cez Ubian.
Elektronická peňaženka, kredit a električenka fungujú len na čipe preukazu vydaného školou. Preukazy Klasik kúpené cez objednaj-preukaz.sk /CKM SYTS alebo Faxcopy — plastové aj do mobilu — čip nemajú, a preto ich ako dopravnú kartu kde sa dá nabiť kredit nie je možné použiť. Avšak ISIC karty akokoľvek vydané, fyzické aj elektronické slúžia ako riadny doklad o statuse študenta a musí byť na základe preukázania platného ISICu a splneného veku do 26 rokov, študentovi poskytnutá študentská tarifa v doprave.
Jednorazové zľavnené cestovné je od 1. 7. 2026 niečo iné. Podľa §23 ods. 4 vyhlášky Ministerstva dopravy SR č. 269/2024 Z. z. je nárok na študentské zľavnené cestovné vo verejnej osobnej doprave možné preukázať platným preukazom ISIC vydaným v členskom štáte EÚ, vo fyzickej aj elektronickej forme, ak držiteľ nedovŕšil 26 rokov. Elektronický ISIC musí byť v mobilnej aplikácii — fotografia, screenshot ani sken nestačia. Oficiálne stanovisko CKM SYTS: isic.sk/akceptacia-isic-vo-verejnej-doprave/
AGENT MUSÍ O TEJTO ZMENE OD 1.7. INFORMOVAŤ nakoľko toto je jediná pravda – ISIC je platný preukaz v akejkoľvek forme pre zľavu na dopravu. 
Výnimky, čipový preukaz neslúži ako dopravná karta (len ako doklad o štúdiu): Integrovaná doprava Banskobystrický kraj, MHD Nitra, MHD Trenčín, MHD Banská Bystrica, MHD Zvolen.
Kontakty CKM SYTS
--TABLE START--
komu / na čo | kanál
Preukazy VŠ, ITIC, EURO<26 | +421 948 827 097 · klientskyservis@ckmsyts.sk
Preukazy SŠ a ZŠ | +421 948 884 304 · klientskyservis@ckmsyts.sk
Eshop | klientskyservis@ckmsyts.sk
ITIC — aplikácia, fotka, zmena mena či školy | klientskyservis@ckmsyts.sk
Dopravca neuznal platný ISIC | klientskyservis@ckmsyts.sk
Adresa | CKM SYTS, Vysoká 32, 811 06 Bratislava
--TABLE END--
Kontakty mimo CKM
Ubian / Transdata — dopravná a čipová časť preukazu ISIC, výroba preukazov a duplikáty čipových preukazov ZŠ a SŠ.
tel. +421 41 399 88 99 · preukazziaka@transdata.sk · www.ubian.sk/preukaz-studenta
Staršie číslo 0905 384 092 sa v archíve prestalo používať v roku 2025 — nepoužívaj ho. Rovnako nepoužívaj +421 905 825 631, ktoré je ešte na starom článku na isic.sk.
Doručovanie
Zásielky odosielame kuriérom GLS. Na poštu ani do Packety neposielame, osobný odber na Vysokej 32 nie je možný. Adresa môže byť ľubovoľná — dôležité je, aby mal kuriér koho kontaktovať.
Vysokoškolské aj stredoškolské známky aj preukazy ISIC a preukazy a známky ITIC sa distribuujú koncom augusta a začiatkom septembra, spolu s kupónovou knižkou. Dajú sa vyzdvihnúť priamo na vlastnej škole.
Lehoty
•    Vrátenie platby: do 10 pracovných dní 
•    Platba prevodom: preukaz vystavený do 1–2 pracovných dní po pripísaní platby na účet.
•    Platba kartou: preukaz býva vystavený prakticky hneď.
•    Zbehnutie do medzinárodnej databázy: približne 2 hodiny, môže trvať dlhšie v najvyššej sezóne september-október. Web to potvrdzuje aj pre my EYC — s registráciou v aplikácii treba počkať aspoň dve hodiny od uvítacieho e-mailu.
•    Doručenie fyzických kariet aj známok z eshopu: najneskôr do 5 pracovných dní od zaplatenia ale digitálne si to už môžu aktivovať a využívať hneď. 
•    Duplikát čipového preukazu cez Ubian: 3–5 pracovných dní, presné info na ubian.sk
•    Vystavenie ITIC, keď sa štatút nedá overiť online: do 2 pracovných dní.
•    Údaje zo školy: prichádzajú k nám do systému až večer a preto musí niekedy študent počkať na aktiváciu. Presný čas neuvádzaj — support ho udáva rôzne.
Fotografia
Preukaz bez fotografie je neplatný a zľavy nemusia byť poskytnuté. Pri plastových preukazoch z eshopu si ju klient nalepí sám a prekryje priloženou fóliou.
--TABLE START--
preukaz | rozmer
ISIC klasik | 26 × 32 mm
Karta EURO<26 | 20 × 33 mm
ITIC klasik | 26 × 32 mm
--TABLE END--
Fotku na čipovom preukaze spravuje škola. Fotku v aplikácii si klient v EYC apke vie zmeniť pri ISIC/ITIC si sám nezmení — musí kontaktovať klientskyservis@ckmsyts.sk 
Zľavy u partnerov
Databáza zliav je spoločná pre isic.sk, itic.sk aj euro26.sk. K 25. 8. 2026 obsahuje 190 partnerov, 229 aktívnych zliav a 1 333 prevádzok na Slovensku. Okrem toho má ISIC ak nadnárodné zľavy ktoré sú na isic.org 
Lidl — 
mrzí nás to, ale spolupráca so spoločnosťou Lidl sa k 31. 7. 2026 skončila a zľava už nie je súčasťou našej ponuky benefitov. Ďakujeme spoločnosti Lidl za doterajšiu skvelú spoluprácu.
Našu ponuku zliav a benefitov priebežne aktualizujeme a neustále pre vás hľadáme nové možnosti, ako výhodne nakupovať a ušetriť. Momentálne máme špeciálnu letnú zľavu na Kosik.sk.
Nedá sa mi prihlásiť ani zaregistrovať do aplikácie
Platí pre: ISIC · ITIC (aplikácia ISIC). Pre EURO<26 platí samostatná vetva nižšie — známkou sa nepredlžuje.
Súvisiace: 07 (aplikácia nefunguje) · 02 (ako predĺžiť) — ak odpoveď vedie sem, načítaj aj tieto.
Objem: 100 prípadov — najčastejšia otázka, ktorú agent zvládne sám.
Ako sa pýtajú
„nejde mi sa prihlásiť do aplikácie" · „nedá sa mi zaregistrovať" · „zadávam číslo preukazu aj meno správne a nejde to" · „ukazuje mi chybu pri prihlásení" · „píše mi, že preukaz nie je platný, pritom platný je" · „skúšam všetky možnosti a vždy mi napíše kontaktujte podporu"
Odpoveď
Zďaleka najčastejšia príčina je chýbajúca známka na aktuálnu sezónu. Aplikácia vyžaduje preukaz platný na zľavy, a bez známky ho za platný nepovažuje.
Dobrý deň prajem,
teší nás, že svoj preukaz chcete aj naďalej používať. Najčastejším dôvodom prihlasovacích problémov je, že preukazu chýba známka na aktuálnu sezónu — hneď ako ju doplníte, budete môcť opäť naplno čerpať všetky zľavy a výhody.
Známku si jednoducho objednáte tu: https://objednaj-preukaz.sk/produkt/znamka-isiceuro/
Hneď po úhrade budete môcť kartu opäť naplno využívať na zľavy a výhody.
Pekný deň prajem.
Vetvy
Klient píše, že známku už má zakúpenú a nalepenú. Vtedy býva problém v tom, že škola prolongáciu ešte nezaevidovala.
Ak známku už máte, treba kontaktovať Vašu školu — študijné oddelenie, či zaevidovali prolongáciu. Údaje k nám zo škôl chodia večer, takže ak sa tak stalo dnes, skúste prihlásenie do aplikácie zopakovať neskôr.
Odkaz objednaj-preukaz.sk/overenie/ už neposielaj — vracia 404 (overené
3.   8. 2026). Samostatná stránka na overenie platnosti neexistuje; overenie je
krokom priamo pri produkte v eshope.
Klient píše o karte EURO<26. Dve veci naraz, obe sa dajú povedať hneď:
Používa inú aplikáciu — my EYC, nie ISIC. A hlavná príčina vyššie (chýbajúca známka) na neho neplatí — EURO<26 sa známkou nepredlžuje, kupuje sa nová karta.
Pre kartu EURO<26 je určená aplikácia my EYC, nie aplikácia ISIC. Stiahnete si ju tu: https://euro26.sk/euro-aplikacia/
Ak Vám medzitým platnosť karty uplynula, novú si zakúpite tu:
https://objednaj-preukaz.sk/kategoria-produktu/som-mlady/
Ak klient tvrdí, že my EYC používa a aj tak sa neprihlási, agent postup neuhádne — eskaluj.
Klient je čerstvo zapísaný študent a preukaz mu vydala škola. Číslo karty ožije až po tom, čo škola dáta odošle — deje sa to večer.
Ak ste boli na zápise v tomto týždni, škola spracuje preukazy večer a Vaše číslo karty bude aktívne až potom. Skúste sa prosím prihlásiť neskôr.
Klient práve zaplatil, ide o minúty až hodiny.
Po zakúpení trvá 1–2 hodiny, kým údaje zbehnú do medzinárodnej databázy. Na účely zliav je preukaz platný, len do aplikácie to môže chvíľu trvať.
Kedy eskalovať
Ak klient tvrdí, že známku [KM2] má a škola prolongáciu zaevidovala, ďalej to agent nevyrieši. Niekedy má študent zakúpenú červenú známku bez ISIC preukazu — vtedy aplikáciu využívať nemôže, hoci sa do nej naďalej snaží prihlásiť. Lebo nemá kúpenú ISIC licenciu.
Preverím to a ozvem sa Vám.
Operátorke odovzdaj: číslo karty a meno klienta, a nech overí, či má preukaz platnú známku na aktuálnu sezónu a či pod jeho menom existuje registrácia v aplikácii — môže byť vytvorená, ale nepotvrdená.
Ako si predĺžim preukaz na ďalší rok
Platí pre: ISIC · ITIC · EURO<26 — postup sa líši podľa produktu, vyber vetvu skôr, než pošleš odkaz.
Súvisiace: 17 (preukaz sa známkou nepredlžuje) · 04 (doprava) — ak odpoveď vedie sem, načítaj aj tieto.
Ako sa pýtajú
„aký je postup na predĺženie" · „chcem si predĺžiť kartu" · „čo mám dokúpiť, aby bol preukaz platný" · „končí mi platnosť, ako ďalej" · „ako si obnovím ISIC"
Najprv urči produkt
Odpoveď sa líši a poslať zlý odkaz je najčastejšia chyba v tejto téme.
--TABLE START--
klient má | predlžuje sa | odkaz
čipový ISIC/EURO<26 od školy | známkou | znamka-isiceuro
ITIC (čipový od školy) | vlastnou známkou ITIC | znamka-itic
nečipový preukaz, preukaz do mobilu, akýkoľvek ITIC alebo EURO<26 bez čipu | kúpou nového preukazu, nie známkou | viď článok 17
--TABLE END--
Ak z e-mailu nevieš, ktorý prípad to je, opýtaj sa: „Aký preukaz máte — čipový od školy, nečipový, alebo do mobilu?"
Odpoveď — čipový ISIC alebo EURO<26 od školy
Dobrý deň,
známku si kúpite tu: https://objednaj-preukaz.sk/produkt/znamka-isiceuro/
Zadáte priezvisko a číslo karty a objednávka je hotová — budete môcť aj naďalej čerpať všetky zľavy.
Verím, že sa Vám to podarilo. Pekný deň prajem.
Odpoveď — ITIC
ITIC má vlastnú známku s vlastnou sezónou. Odkaz na známku ISIC/EURO<26 mu neposielaj.
Dobrý deň,
známku ITIC si zakúpite tu: https://objednaj-preukaz.sk/produkt/znamka-itic/
Do objednávky stačí zadať priezvisko a číslo preukazu v tvare T421… aj s koncovým písmenom.
Pekný deň prajem.
Odpoveď — EURO<26
EURO<26 [KM3] sa nikdy nepredlžuje známkou — vždy sa zakupuje nová virtuálna karta alebo plastová karta domov na adresu, s nadväzujúcou platnosťou.
Dobrý deň,
novú kartu na ďalšie obdobie si zakúpite tu:
https://objednaj-preukaz.sk/kategoria-produktu/som-mlady/
Nová karta dostane nové číslo a jej platnosť nadväzuje na tú súčasnú, takže budete môcť zľavy využívať bez prerušenia — o žiadny deň neprídete.
Pekný deň prajem.
Pozor: platnosť EURO<26 vyprší deň pred 27. narodeninami a ďalej sa nepredlžuje.
Vetvy
Klient chce preukaz do mobilu, nie plast. Objednávku vytvára CKM a posiela platobné údaje — to agent nezvládne, viď eskaláciu.
Klient sa pýta na dopravu. Známka dopravu nerieši, je to samostatná vec — viď článok Preukaz mi nefunguje v doprave.
Klient sa bojí, že predčasným predĺžením stratí zvyšok platnosti.
Do objednávky zadáte svoje priezvisko a číslo súčasnej karty, systém Vás overí. Karta sa vystavuje s nadväzujúcou platnosťou [KM4] — o žiadny deň neprídete.
Preukaz sa nedá predĺžiť známkou. Známkou sa predlžuje len čipový preukaz vydaný školou — viď článok Nedá sa mi kúpiť známka na môj preukaz.
Klient nevie, [KM5] či má čipový preukaz. Čipový vydáva škola a je na ňom čip na dopravu. Preukaz kúpený u CKM — plastový aj do mobilu — čip nemá. Jednoducho to rozoznáte podľa platnosti: ak preukazu končí platnosť k 9/2027 (ISIC) alebo k 12/2027 (ITIC), ide o čipový preukaz — nečipové preukazy majú platnosť rozloženú počas celého roka.
Klientovi platnosť už uplynula.
Poplatok môžete uhradiť aj teraz, platnosť sa tým predĺži.
Klient nevie číslo svojej karty. Bez neho objednávku nedokončí a agent mu ho nezistí — eskalácia.
Klient je externý študent.
Ako externista, žiaľ, nespĺňate podmienky na známku ani na komerčné ISIC zľavy. Školský poplatok s tým nesúvisí. Ak máte do 27 rokov, môžete využívať rovnaké komerčné zľavy s kartou EURO<26: https://objednaj-preukaz.sk/kategoria-produktu/som-mlady/
Kedy eskalovať
Keď klient nevie číslo karty, chce preukaz do mobilu, alebo mu treba vygenerovať platobné údaje.
Pripravím Vám to a pošlem platobné údaje.
Operátorke odovzdaj: meno klienta, aký preukaz chce (do mobilu / plast) a či sa mu zmenila škola. Potrebuje dohľadať číslo karty a vygenerovať variabilný symbol.
Zľava alebo kupón sa mi v aplikácii neuplatnili
Platí pre: ISIC · ITIC (aplikácia ISIC) · EURO<26 (aplikácia my EYC).
Súvisiace: 07 (aplikácia nefunguje) · 05 (typ preukazu zo školy) — ak odpoveď vedie sem, načítaj aj tieto.
Ako sa pýtajú
„nejde mi uplatniť kupón" · „zľava sa neuplatnila" · „kupón mi zmizol" · „v appke mi to nechce dať zľavu" · „nefunguje mi poukaz" · „preukaz zo školy mi funguje v autobuse, ale v obchode zľavu nedajú"
Odpoveď
Najčastejšia príčina nie je chyba aplikácie, ale to, kde v nej klient klikne.
Dobrý deň prajem,
to určite vyriešime, aby ste o zľavu neprišli. Skúste to prosím ešte raz podľa návodu: po otvorení aplikácie ISIC NEKLIKAJTE na kupón v časti „Nové ponuky", ale na dolnej lište kliknite na POUKAZY — tam by kupón mal byť.
Funguje?
Vetvy
Klient má EURO<26 a aplikáciu my EYC. Komerčné zľavy má rovnaké ako ISIC, ale návod vyššie („POUKAZY na dolnej lište") je z aplikácie ISIC — v my EYC ho neuvádzaj.
Aktuálny prehľad zliav nájdete tu: https://isic.sk/zlavy-na-slovensku/ Preverím, prečo sa kupón neuplatnil, a ozvem sa Vám.
Klient sa pýta na zľavu v Lidli. Partner ukončil spoluprácu — zľava už neplatí.
Dobrý deň,
mrzí nás to, ale spolupráca so spoločnosťou Lidl sa k 31. 7. 2026 skončila a zľava už nie je súčasťou našej ponuky benefitov. Ďakujeme spoločnosti Lidl za doterajšiu skvelú spoluprácu.
Našu ponuku zliav a benefitov priebežne aktualizujeme a neustále pre vás hľadáme nové možnosti, ako výhodne nakupovať a ušetriť. Momentálne máme špeciálnu letnú zľavu na Kosik.sk.
Časť klientov ju ešte v aplikácii vidí — na to sa dá odpovedať, že ponuka je neaktuálna.
Klient sa odvoláva na to, že zľavu v Lidli má CKM na webe. Má pravdu — k 25. 8. 2026 ju stále uvádzajú itic.sk/zlava-v-lidl/, euro26.sk/karta-euro/ aj euro26.sk/karta-euro/26-pre-deti/. Nespochybňuj ho.
Máte pravdu, na niektorých našich stránkach je ponuka ešte zobrazená — ide o náš nedostatok, stránky sa aktualizujú. Spolupráca s partnerom je ukončená a zľavu uplatniť, žiaľ, nie je možné. Aktuálne zľavy sú v databáze na https://isic.sk/zlavy-na-slovensku/
Klient má preukaz zo školy a nefungujú mu komerčné zľavy. Skôr než to pošleš ďalej, over typ preukazu — škola vydáva aj preukaz žiaka s vizuálom Ubian, ktorý licenciu ISIC vôbec neobsahuje.
Máte na preukaze logo ISIC? Škola vydáva dva typy preukazu žiaka a ten s vizuálom Ubian slúži na dopravu a školské systémy, ale komerčné ISIC zľavy neobsahuje.
McDonald's a načítanie kódu. Tu QR ani čiarový kód z aplikácie nefungujú a nie je to chyba.
V McDonald's sa zľava neuplatňuje načítaním QR ani čiarového kódu — stačí sa preukázať preukazom priamo pri pokladni.
Kupón sa neodpočítal pri nákupe u partnera s vlastnou aplikáciou. Pri niektorých partneroch si klient musí kupón nahrať aj do ich vlastnej aplikácie, nielen ho zobraziť v ISIC aplikácii — over s ním, či to spravil.
Klient píše, že kupón už použil alebo mu zmizol.
Kupón je nový vždy na nový týždeň, od pondelka do nedele. Skontrolujte prosím, či máte v časti POUKAZY k dispozícii kupón na tento týždeň.
Zľava sa neuplatnila u partnera, nie v aplikácii (napr. Martinus). Najčastejšie klient nebol prihlásený pod svojím menom, alebo sa zľava na daný tovar nevzťahuje — v Martinuse napríklad neplatí na vybrané odborné tituly z práva, histórie a medicíny. Priezvisko v konte sa musí zhodovať s priezviskom na karte.
Klient sa pýta, kde všade preukaz platí.
Prehľad zliav na Slovensku: https://isic.sk/zlavy-na-slovensku/ V zahraničí: https://www.isic.org/discounts/
Kedy eskalovať
Keď postup podľa POUKAZY nepomôže, alebo ide o zľavu u partnera.
Preverím to u kolegov a dám Vám vedieť.
Operátorke odovzdaj: o ktorého partnera alebo kupón ide, čo presne klient urobil a čo mu aplikácia zobrazila. Pri zľave, ktorú partner neuznal na mieste, si vypýtaj aj dátum, čas, konkrétnu prevádzku a doklad o nákupe — bez nich sa to u partnera nedá dohľadať. Pri partnerovi je potrebné overiť, či bol klient prihlásený pod svojím menom a či sa zľava na daný tovar vzťahuje.
Preukaz mi nefunguje v doprave
Platí pre: čipový preukaz vydaný školou (ISIC/EURO<26 zo ZŠ a SŠ, ISIC z VŠ) — ITIC ani karta EURO<26 dopravnú zľavu nemajú; pri nečipovom ISIC-u a ISIC-u v mobile platí od 1. 7. 2026 osobitné pravidlo, viď vetvu Nečipový preukaz a jednorazové cestovné.
Súvisiace: 05 (je moja škola zapojená) · 25 (preukaz vydaný školou) — ak odpoveď vedie sem, načítaj aj tieto.
Ako sa pýtajú
„nefunguje mi preukaz v autobuse" · „dopravca mi ho neuznal" · „ako si predĺžim zľavu na dopravu" · „nejde mi poslať SMS na predĺženie" · „v Ubian mi končí ISIC zľava"
Odpoveď
Kľúčová vec, ktorú si klienti mýlia: známka a doprava sú dve samostatné veci. Zakúpená známka dopravnú zľavu nepredĺži.
Dobrý deň,
radi Vám poradíme — známka slúži na predĺženie platnosti preukazu a na komerčné zľavy, doprava sa však predlžuje samostatne, a sú na to dva kroky:
1. zaplatíte poplatok 3,69 € cez Ubian alebo SMS,
2. priložíte preukaz k UNIterminálu — až tým sa zľava aktivuje.
Postup nájdete tu: https://www.ubian.sk/preukaz-studenta#renew
Pekný deň
Sumu ber z Cenník a údaje — poplatok určuje Ubian, nie CKM, a mení sa nezávisle od cien v eshope.
Druhý krok nikdy nevynechávaj. Klient, ktorý pošle SMS a preukaz nepriloží k terminálu, zaplatí a zľava mu aj tak fungovať nebude — a vráti sa s tým, že mu predĺženie nefunguje. V archíve je to najčastejšia zamlčaná polovica odpovede.
Vetvy
Klient nemá kde priložiť preukaz k terminálu — je cez prázdniny, doštudoval, škola je zatvorená.
Okrem terminálu na škole existuje aj sieť verejných UNIterminálov — sú na hlavných železničných staniciach a v predajniach dopravcov (Bratislava, Banská Bystrica, Košice, Poprad, Prešov, Trnava, Zvolen, Žilina a ďalšie). Zoznam nájdete tu: https://www.ubian.sk/preukaz-studenta
Vysokoškolák sa pýta, kde zaplatiť poplatok za dopravu.
Poplatok sa platí na Vašej vysokej škole. Výnimkou sú UKF v Nitre, Prešovská univerzita, Paneurópska vysoká škola, Katolícka univerzita v Ružomberku a Univerzita Komenského — tam sa platí cez Ubian.
Klient má preukaz zo školy, ale bez loga ISIC. Škola vydáva dva typy preukazu žiaka — s vizuálom Ubian a s vizuálom ISIC/EURO<26. V doprave a v školských systémoch fungujú rovnako, ale preukaz s vizuálom Ubian nemá licenciu ISIC, takže na komerčné zľavy neplatí a známka sa naň kúpiť nedá.
Preukaz žiaka s vizuálom Ubian slúži na dopravu a na systémy školy, licenciu ISIC však neobsahuje — komerčné ISIC zľavy sa s ním uplatniť nedajú a známku naň zakúpiť nie je možné. Pre doplnenie zľavových benefitov si môžete však zakúpiť náš preukaz ISIC klasik https://objednaj-preukaz.sk
Klient má konkrétny problém s dopravnou alebo čipovou časťou. Tú CKM nespravuje.
Dobrý deň,
toto je otázka do spoločnosti Ubian, ktorá má na starosti dopravnú a čipovú časť preukazu ISIC aj duplikáty. Posielam Vám na nich kontakt:
tel. +421 41 399 88 99
preukazziaka@transdata.sk
www.ubian.sk/preukaz-studenta
Pokiaľ máte záujem o doplnenie zľavových benefitov si môžete však zakúpiť náš preukaz ISIC klasik https://objednaj-preukaz.sk
Pekný deň
Nečipový preukaz a jednorazové cestovné. Elektronická peňaženka, kredit a električenka fungujú len na čipe — to je isté. Pri jednorazovom zľavnenom cestovnom platí od 1. 7. 2026 nové pravidlo: podľa §23 ods. 4 vyhlášky MD SR č. 269/2024 Z. z. je platný ISIC v akejkoľvek forme — aj nečipový, aj v mobile — dostatočným dokladom na zľavnené cestovné.
Dobrý deň,
preukaz zakúpený u nás — plastový aj v mobile — čip neobsahuje, takže ho nie je možné použiť ako dopravnú kartu, teda na elektronickú peňaženku, kredit ani na predplatný cestovný lístok (električenku). Na to je potrebný čipový preukaz vydaný školou.
Na jednorazové zľavnené cestovné však stačí aj tento nečipový alebo mobilný preukaz ISIC — od 1. 7. 2026 to výslovne pripúšťa §23 ods. 4 vyhlášky MD SR č. 269/2024 Z. z. Oficiálne stanovisko nájdete tu: https://isic.sk/akceptacia-isic-vo-verejnej-doprave/
Pekný deň
Dopravca odmietol uznať platný ISIC. Od 1. 7. 2026 na to CKM má postup — odovzdaj ho celý, je to plnohodnotná odpoveď.
Dobrý deň,
podľa §23 ods. 4 vyhlášky Ministerstva dopravy SR č. 269/2024 Z. z. je možné nárok na študentské zľavnené cestovné preukazovať platným preukazom ISIC vo fyzickej aj elektronickej forme. Elektronický preukaz musí byť zobrazený v mobilnej aplikácii — fotografia či screenshot uznané byť nemusia.
Ak Vám dopravca preukaz neuznal, vyžiadajte si prosím doklad o doplatku alebo pokute a poznačte si názov dopravcu, dátum a čas, číslo linky alebo spoja, miesto kontroly a údaje osoby, ktorá kontrolu vykonala. S týmto podajte reklamáciu priamo dopravcovi. Ak ju zamietne, napíšte nám na reklamacia@ckmsyts.sk — ako výhradný zástupca ISIC na Slovensku to preveríme.
Pekný deň
Klient má ITIC a pýta sa na dopravu.
Nie, zľava v doprave je určená študentom denného štúdia na Slovensku.
Klient má EURO<26 [KM6] a pýta sa na dopravu. Rovnako nie — dopravnú zľavu nesie čip, a ten má len preukaz vydaný cez školu.
Dopravná zľava je viazaná na čipový preukaz ISIC vydaný školou. Karta EURO<26 čip nemá a v doprave ju použiť nie je možné. Ak ste študentom denného štúdia, môžete si požiadať o preukaz ISIC klasik na www.objednaj-preukaz.sk alebo ak máte záujem o preukaz ISIC s čipom cez UBIAN alebo svoju školu — následne budete môcť využívať aj dopravnú funkcionalitu.
Preukaz funguje inde, ale nie v konkrétnom meste. Existujú výnimky, kde ani čipový preukaz neslúži ako dopravná karta, len ako doklad o štúdiu.
V týchto systémoch preukaz ako dopravnú kartu použiť nemožno — Integrovaná doprava Banskobystrického kraja, MHD Nitra, MHD Trenčín, MHD Banská Bystrica a MHD Zvolen. Slúži tam len ako doklad, že ste žiakom školy.
Klient sa pýta na vlaky.
Vo vlakoch ZSSK cestujú žiaci s aktualizovaným preukazom bezplatne, po registrácii na železničnej stanici — registrácia je zdarma a treba k nej doklad totožnosti. Potom si kupujete lístok za 0 € a vo vlaku ukážete lístok a preukaz.
Prepravný poriadok ZSSK platný od 1. 7. 2026 priznáva 50 % zľavu končiacim ročníkom do 30. septembra, a to aj doktorandom denného štúdia.
Klient chce aj komerčné zľavy aj dopravu. Potrebuje oboje — známku aj poplatok za dopravu s priložením k terminálu. Povedz mu to naraz, inak sa vráti s druhou polovicou.
Klient tvrdí, že SMS poslal a zaplatil, a zľava aj tak nejde. Najprv over druhý krok, než to pošleš ďalej.
Priložili ste už preukaz k UNIterminálu? Zľava sa aktivuje až týmto krokom, samotná úhrada na to nestačí.
Kedy eskalovať
Prakticky nikdy — dopravná časť patrí Ubianu a odovzdanie kontaktu je plnohodnotná odpoveď. Eskaluj len vtedy, keď klient tvrdí, že ho Ubian poslal späť na CKM, alebo keď mu dopravca zamietol reklamáciu neuznaného ISIC-u.
Operátorke odovzdaj: číslo karty a čo mu povedal Ubian. Pri neuznanom ISIC-u aj názov dopravcu, dátum, čas, spoj a doklad o doplatku či pokute.
Je moja škola zapojená? Aký preukaz si mám objednať?
Platí pre: ISIC a čipové preukazy so známkou ISIC/EURO<26. Netýka sa ITIC — školy ho nevydávajú.
Súvisiace: 25 (preukaz vydaný školou) · 04 (doprava) — ak odpoveď vedie sem, načítaj aj tieto.
Ako sa pýtajú
„je naša škola v projekte" · „vydáva naša škola ISIC" · „aký preukaz si mám objednať" · „nemôžem nájsť školu pri objednávke" · „aký je rozdiel medzi čipovým a nečipovým"
Odpoveď
Dobrý deň prajem,
zasielam Vám aktuálny zoznam zapojených škôl — nájdete v ňom, či Vaša škola vydáva čipové preukazy: https://isic.sk/zoznam-skol-ss-a-zs/
V prípade, že sa Vaša škola v zozname nenachádza, môžete si objednať nečipový preukaz ISIC.
Pekný deň prajem
Vetvy
Škola v zozname je — klient chce čipový preukaz.
Čipový preukaz ISIC objednáte a uhradíte podľa inštrukcií na Vašej škole. Objednáva sa cez https://www.ubian.sk/preukaz-studenta — je potrebná registrácia alebo prihlásenie a následne treba zakliknúť „Objednať nový preukaz žiaka".
Podľa nastavenia Vašej školy Vám systém ponúkne úhradu online, alebo Vás vyzve uhradiť ju v hotovosti na škole. Detailné informácie má Vaša škola, spôsobov je viacero.
Objednávku preukazu musí vždy potvrdiť škola, až potom ide preukaz do výroby.
Klient si vyberá medzi dvoma preukazmi zo školy. Škola môže vydávať dva typy preukazu žiaka a rozdiel je podstatný — v doprave a v školských systémoch fungujú rovnako, ale ISIC zľavy má len jeden z nich.
--TABLE START--
  | vizuál Ubian | vizuál ISIC/EURO<26
Doprava a školské systémy | áno | áno
Komerčné ISIC zľavy a známka | nie | áno
Cena | 12,30 / iba doprava a školské systémy | 25,30 / naviac zľavy u stoviek partnerov na Slovensku aj v zahraničí — ceny sú v Cenník a údaje
--TABLE END--
Preukaz žiaka s vizuálom Ubian slúži na dopravu a na systémy školy, ale medzinárodnú licenciu ISIC neobsahuje — komerčné zľavy s ním uplatniť nemožno a známku naň zakúpiť nie je možné. Ak chcete aj ISIC zľavy, potrebujete preukaz s vizuálom ISIC/EURO<26.
To je zároveň najčastejšia skrytá príčina otázky „preukaz zo školy mi funguje v autobuse, ale v obchode nie". Overuje sa jednoducho: je na preukaze logo ISIC?
Škola v zozname nie je. Nečipový preukaz alebo preukaz do mobilu — objednáva sa priamo cez eshop.
Klient chce preukaz na dochádzku, stravu alebo vstupy v škole. Toto nevie žiadny preukaz od CKM — potrebuje čipový zo školy.
Preukaz, ktorý slúži na čipovanie dochádzky, stravu, vstupy do knižnice a ďalšie funkcie školy, je čipový preukaz ISIC — iný typ, než sa objednáva u nás. Ponúkajú ho len niektoré školy. Či je medzi nimi tá Vaša, zistíte v zozname vyššie; objednáva sa a uhrádza podľa inštrukcií školy.
Ktoré funkcie čip má, určuje škola — CKM to za ňu nevie povedať.
Klient kúpil preukaz inde a niečo nesedí (iná suma, iný predajca, IDS BK).
Preukaz ISIC sa cez tohto predajcu neobjednáva. V tomto prípade sa treba informovať priamo tam, kde ste kartu zakupovali.
Klient píše o zľavovej karte Egocard. Tú neposkytuje CKM — je to vernostná karta spoločnosti Egocard s.r.o., ktorú automaticky dostávajú držitelia preukazu žiaka s vizuálom Ubian. So zľavami ISIC nesúvisí.
Kartu Egocard poskytuje spoločnosť Egocard s.r.o., nie my. Otázky k nej treba smerovať na info@egocard.eu.
Kedy eskalovať
Keď klient tvrdí, že jeho škola v zozname je, ale pri objednávke sa nedá vybrať.
Preverím to a ozvem sa Vám.
Operátorke odovzdaj: presný názov a adresu školy a to, čo eshop zobrazil. Treba overiť registráciu školy v projekte. Otázky k zapojeniu ZŠ a SŠ patria na sspreukazy@ckmsyts.sk, k vysokým školám na VSpreukazy@ckmsyts.sk.
Chcete odo mňa potvrdenie o štúdiu
Platí pre: ISIC (potvrdenie o štúdiu) · ITIC (potvrdenie o zamestnaní a úväzku). Netýka sa EURO<26 — ten sa dokladá vekom.
Objem: 17 prípadov. Nie je to otázka klienta — je to výzva, ktorú posiela CKM, a agent na ňu odpovedá, keď sa klient pýta prečo alebo čo má poslať.
Ako sa pýtajú
„prečo odo mňa chcete potvrdenie" · „čo mám poslať" · „posielam potvrdenie o štúdiu" · „stačí takéto potvrdenie" · „kde ho zoženiem"
Odpoveď
Dobrý deň prajem,
ďakujeme, že ste si u nás objednali preukaz ISIC! Aby sme Vám ho mohli čo najskôr vystaviť, potrebujeme potvrdenie o návšteve školy alebo o štúdiu.
Vopred ďakujem krásne za zaslanie. Pekný deň.
Vetvy
Klient sa pýta, čo je platný doklad.
Postačuje potvrdenie o návšteve školy alebo o štúdiu vystavené školou — pokojne aj fotka alebo sken.
Ide o učiteľa a preukaz ITIC. Vtedy sa nedokladá štúdium, ale zamestnanie a úväzok na škole. Podmienky nároku: https://itic.sk/narok-na-preukaz-itic/
Klient práve potvrdenie posiela. Agent ho nevie priložiť k objednávke — eskaluj, ale poďakuj tak, aby vedel, že to došlo.
Ďakujem pekne, posúvam to na spracovanie objednávky.
Klient v septembri končí alebo mení školu. To ovplyvňuje platnosť preukazu a agent to nerozhodne — eskaluj.
Kedy eskalovať
Vždy, keď klient doklad pošle, alebo keď sa pýta, či mu preukaz vydáme aj napriek tomu, že štúdium končí.
Operátorke odovzdaj: priložený doklad, meno klienta a informáciu, či v septembri v štúdiu pokračuje. Treba priradiť doklad k objednávke a objednávku spracovať.
Aplikácia mi nefunguje alebo sa nedá stiahnuť
Platí pre: ISIC · ITIC (aplikácia ISIC) · EURO<26 (aplikácia my EYC).
Súvisiace: 01 (nedá sa prihlásiť) — ak odpoveď vedie sem, načítaj aj tieto.
Ako sa pýtajú
„appka mi padá" · „nedá sa stiahnuť z obchodu" · „nenachádza sa v App Store" · „aplikácia mi nenačíta preukaz" · „mám EURO26 a v ISIC appke to nejde"
Odpoveď
Najprv over najčastejšiu zámenu — či klient nemá otvorenú nesprávnu aplikáciu.
Dobrý deň,
preukaz ISIC a ITIC sa nahráva do aplikácie ISIC, karta EURO<26 do aplikácie my EYC. Aplikáciu pre EURO<26 stiahnete tu: https://euro26.sk/euro-aplikacia/
Ak má klient správnu aplikáciu a nefunguje:
Dobrý deň prajem,
skúsme to spolu vyriešiť — odinštalujte si prosím aplikáciu a znovu ju nainštalujte. Potom sa už len prihláste Vaším emailom a heslom, novú registráciu nezakladajte.
Funguje?
Vetvy
Aplikácia sa nedá nájsť v obchode. Býva to regionálne alebo verziou systému. Agent to nevyrieši — eskaluj a odovzdaj model telefónu a verziu systému, ak ich klient uviedol.
Preukaz sa načíta, ale hlási neplatnosť. To nie je chyba aplikácie — viď článok Nedá sa mi prihlásiť ani zaregistrovať do aplikácie.
Klient chce zmeniť fotku alebo email v profile. Zásah do profilu robí CKM, agent nie — eskaluj.
V aplikácii svieti pri karte EURO<26 platnosť len 60 dní. Známy problém s načítaním platnosti.
Zmažte prosím účet v aplikácii — v časti Profil – Nastavenia účtu – Zmazať účet — a následne sa znovu zaregistrujte s Vaším číslom karty. Platnosť sa načíta nanovo.
Ak to nepomôže, zásah musí spraviť CKM — eskaluj.
Klient chce zrušiť alebo vymazať konto v aplikácii. Zvládne to sám.
Konto si zmažete priamo v aplikácii: Profil – Nastavenia účtu – Zmazať účet. Ak sa chcete prihlásiť znova, zaregistrujete sa potom ako nový užívateľ s číslom svojho preukazu.
Ak klient chce konto zrušiť natrvalo a nie len preregistrovať, zásah robí CKM — eskaluj.
Kedy eskalovať
Keď preinštalovanie nepomôže, alebo ide o zásah do profilu (fotka, email, heslo).
Preverím to a ozvem sa Vám.
Operátorke odovzdaj: číslo karty, email, ktorý klient používa na prihlásenie, model telefónu a verziu systému, ak ich uviedol. Pri zásahu do profilu aj to, čo presne treba zmeniť.
Nestihol som zaplatiť do termínu, platia ešte platobné údaje?
Platí pre: ISIC · ITIC · EURO<26 — rovnaké pre všetky.
Objem: ~38 prípadov naprieč archívom. Jedna z najčastejších otázok a odpoveď je vždy rovnaká.
Ako sa pýtajú
„zabudla som uhradiť, môžem ešte?" · „nestihol som platbu do 15.10." · „platia ešte tie údaje, čo ste mi poslali?" · „mail mi skončil v spame a termín ušiel" · „boli sme na dovolenke a pozabudli sme na to"
Odpoveď
Termín v platobných údajoch je orientačný. Platobné údaje ostávajú platné a klient neprichádza o nič.
Dobrý deň,
samozrejme, žiadny problém — poplatok môžete uhradiť aj teraz podľa zaslaných platobných údajov. Údaje sú aktuálne.
Ďakujem
Ak sa klient bojí, že príde o časť platnosti:
Kedykoľvek poplatok uhradíte, budete mať preukaz vystavený s nadväzujúcou platnosťou — neprídete ani o deň platnosti.
Vetvy
Klient stratil email s platobnými údajmi. Agent mu ich nevygeneruje — eskaluj.
Údaje sú z minulého roka. Vtedy už neplatia a treba nové. Ak klient uvádza dátum staršie než rok, nesľubuj mu, že údaje platia — eskaluj.
Klient spochybňuje údaje v platobnom predpise — najčastejšie variabilný symbol.
Nie, variabilný symbol nepredstavuje Vaše rodné číslo ani dátum narodenia. Je to iba variabilný symbol k platbe a je uvedený správne.
Ak klient tvrdí, že údaje sú z minuloročného e-mailu, platí vetva nižšie — staré údaje neplatia.
Klient sa pýta, či mu medzitým prepadla karta. Platnosť preukazu sa uplynutím termínu splatnosti neruší, len sa nepredĺži, kým nezaplatí.
Kedy eskalovať
Keď klient nemá platobné údaje po ruke alebo sú staršie než rok.
Pripravím Vám aktuálne platobné údaje a pošlem ich.
Operátorke odovzdaj: meno klienta, číslo karty ak ho uviedol, a aký preukaz chce. Treba vygenerovať variabilný symbol.
Zaplatil som, ale objednávka stále čaká na zaplatenie
Platí pre: ISIC · ITIC · EURO<26 — rovnaké pre všetky.
Objem: ~39 prípadov.
Ako sa pýtajú
„suma mi z účtu odišla, ale píše čaká na zaplatenie" · „prišiel mi mail, že platbu neevidujete" · „prečo mi zrušili objednávku, veď som zaplatil" · „platba prebehla, prosím o kontrolu"
Odpoveď
Dobrý deň,
rozumieme, že to môže byť nepríjemné čakanie — platba sa však ešte len spracováva medzi bankami. Keď platba príde, dostanete o tom potvrdzujúci e-mail s číslom preukazu.
Ďakujeme
Ak klient platil prevodom a chce vedieť, ako dlho:
Po prijatí platby na účet Vám bude preukaz vystavený. Môže to trvať 1–2 pracovné dni.
Vetvy
Platba kartou v eshope zlyhala alebo bola zamietnutá. Toto nie je oneskorenie — objednávka sa po dvoch dňoch automaticky zruší. Neposielaj klienta čakať.
Platbu zopakujete tu: https://objednaj-preukaz.sk/opakovanie-platby/?REF=[číslo objednávky]
Skontrolujte si v objednávke, či sú doručovacie údaje a  telefónne číslo v poriadku.
Klient zabudol variabilný symbol. Platba sa dá spárovať ručne, ale treba doklad.
Pošlite mi prosím detail platby, aby sme ju vedeli správne spárovať a vystaviť preukaz.
Platil kartou a chce vedieť, kedy to bude. Pri platbe kartou býva preukaz vystavený prakticky hneď, pri prevode 1–2 pracovné dni.
Objednávka bola zrušená. Rušia sa neuhradené objednávky. Ak klient tvrdí, že zaplatil, ide o nespárovanú platbu — eskaluj.
Kedy eskalovať
Vždy, keď klient tvrdí, že peniaze odišli, a agent to nevie overiť.
Pošlem to na preverenie a dám Vám vedieť.
Operátorke odovzdaj: číslo objednávky, dátum a spôsob platby, sumu a doklad, ak ho klient priložil. Treba spárovať platbu.
Zaplatil som dvakrát, chcem vrátiť peniaze
Platí pre: ISIC · ITIC · EURO<26 — rovnaké pre všetky.
Objem: ~52 prípadov — najväčšia téma po chýbajúcej známke.
Ako sa pýtajú
„omylom som zaplatila dvakrát" · „stiahlo mi dve platby za tú istú objednávku" · „mám ITIC od vás aj zo školy, chcem vrátiť jeden" · „objednal som omylom, prosím o storno a vrátenie"
Odpoveď
Agent nevie vrátiť peniaze, ale vie zozbierať presne to, čo je na to potrebné — a tým celý prípad posunúť o krok ďalej.
Dobrý deň,
to určite napravíme — jednu z platieb Vám radi vrátime. Pošlite mi prosím číslo objednávky a IBAN, kam môžeme vrátiť peniaze. Peniaze vrátime do 10 pracovných dní na účet alebo kartu, z ktorej ste platili.
Ďakujem
Ak klient platil kartou, IBAN netreba:
Ak ste platili kartou, peniaze Vám budú vrátené späť na kartu, z ktorej ste objednávku hradili — IBAN v tom prípade nepotrebujeme.
Vetvy
Klient sa pýta, dokedy peniaze prídu. Lehota nie je jednotná — agent ju neuvádza.
Akonáhle bude platba spracovaná, budeme Vás informovať.
Ide o vrátenie za známku. Poplatok za známku je nevratný.
Poplatok za známku a preukaz je nevratný, súhlasili ste s tým pri jej objednávke.
Klient má preukaz od CKM aj zo školy. Vracia sa alikvotná časť, nie celá suma — rozhoduje o tom CKM, agent to nesľubuje. Okrem čísla objednávky a IBAN si vypýtaj aj fotku znehodnotenej známky na preukaze, ktorý klient nepoužíva — bez nej sa vrátenie nespracuje.
Objednávka je už vyrobená a odoslaná.
Karta už bola vyrobená a odoslaná. Keď Vám príde na adresu, je neaktívna — prosím prestrihnite ju.
Kedy eskalovať
Vždy. Vrátenie platby robí človek.
Odovzdávam to kolegyni, ktorá Vám platbu vráti, a budeme Vás informovať.
Operátorke odovzdaj: číslo objednávky, IBAN alebo informáciu, že sa platilo kartou, a dôvod vrátenia. Treba spustiť refundáciu.
Zaplatil som, ale neprišlo mi číslo karty ani uvítací e-mail
Platí pre: ISIC · ITIC · EURO<26 — rovnaké pre všetky.
Objem: ~20 prípadov.
Ako sa pýtajú
„zaplatila som a uvítací mail neprišiel" · „nemám ako kartu aktivovať" · „neprišiel mi potvrdzujúci email s novým číslom" · „platba odišla, kód žiadny"
Odpoveď
Prvá vec, ktorú treba vylúčiť, je spam — je to zďaleka najčastejšia príčina.
Dobrý deň,
najčastejšie sa stáva, že potvrdzujúci e-mail skončí v spamovom priečinku — mrknite tam, prosím, ešte raz.
Ak tam nie je, dohľadám Vám číslo preukazu a pošlem ho znova.
Vetvy
Platba prebehla nedávno. Preukaz sa vystavuje až po pripísaní platby.
Po prijatí platby na účet Vám bude preukaz vystavený. Môže to trvať 1–2 pracovné dni. Pri platbe kartou to býva prakticky hneď.
Klient si e-mail zmazal. Číslo karty býva aj v pätičke marketingových e-mailov od CKM — oplatí sa mu to pripomenúť, kým čaká.
Klient zadal pri objednávke zlý e-mail. Zmenu robí CKM, agent nie — eskaluj a vypýtaj si správnu adresu.
Kedy eskalovať
Keď e-mail nie je ani v spame, alebo je zadaný nesprávne.
Dohľadám Vám číslo preukazu a pošlem Vám ho na e-mail.
Operátorke odovzdaj: celé meno klienta na preukaze, dátum narodenia a e-mail, na ktorý má číslo prísť. Treba dohľadať číslo karty a preposlať uvítací e-mail.
Neviem číslo svojho preukazu
Platí pre: ISIC (S421…) · ITIC (T421…) · EURO<26 (E421…).
Súvisiace: 18 (zmena mena a školy) — ak odpoveď vedie sem, načítaj aj tieto.
Objem: ~17 prípadov. Bez čísla karty klient nedokončí objednávku, takže táto otázka blokuje predĺženie.
Ako sa pýtajú
„zabudol som číslo karty a nemám od toho papiere" · „vymazala sa mi z aplikácie a neviem sa k číslu dopátrať" · „prosím o znovuzaslanie čísla" · „nevie mi ju systém nájsť"
Odpoveď
Skôr než to pôjde na operátorku, oplatí sa klientovi ukázať, kde si číslo nájde sám.
Dobrý deň,
žiadny problém, číslo preukazu nájdete na troch miestach:
– v uvítacom e-maile, ktorý Vám prišiel pri objednávke
– v aplikácii ISIC alebo my EYC pri zobrazenom preukaze
– v pätičke e-mailov, ktoré Vám od nás chodia
Ak ho nikde nenájdete, dohľadám Vám ho a pošlem.
Vetvy
Klient má len medzinárodné číslo v tvare Y876-D758-…. To eshop neprijme — potrebuje slovenské číslo začínajúce na S, T alebo E.
Do objednávky aj do aplikácie je potrebné zadať slovenské číslo preukazu v tvare S421… / T421… / E421…
Klient si mýli číslo známky s číslom karty. Číslo začínajúce na R je označenie známky, do aplikácie ani do objednávky sa nezadáva.
Číslo v tvare R… je označenie známky, to sa nikam nenahráva. Vaše číslo preukazu je v tvare S421… a počas štúdia sa nemení.
Klient sa vydal a má nové priezvisko. Overenie neprejde, kým sa priezvisko neopraví — viď článok Zmenilo sa mi meno alebo škola.
Kedy eskalovať
Keď si klient číslo nevie nájsť.
Dohľadám Vám ho a pošlem na e-mail.
Operátorke odovzdaj: celé meno a dátum narodenia klienta. Treba dohľadať číslo karty.
Aplikácia píše, že e-mail už existuje, alebo že preukaz nenašla
Platí pre: ISIC · ITIC (aplikácia ISIC). Pre my EYC (EURO<26) postup overený nie je — viď vetvu.
Súvisiace: 01 (nedá sa prihlásiť) — ak odpoveď vedie sem, načítaj aj tieto.
Objem: ~18 prípadov. Najčastejšia zámena: klient sa opakovane registruje, hoci sa má prihlásiť.
Ako sa pýtajú
„hlási mi, že zadaný email už existuje" · „píše mi, že karta neexistuje, aj keď zadávam všetko správne" · „neberie mi to číslo, ktoré mi prišlo do mailu" · „reset hesla hlási neznámy e-mail"
Odpoveď
Číslo karty sa zadáva iba raz, pri prvej registrácii. Potom sa klient už len prihlasuje.
Dobrý deň,
dobrá správa — ak Vám aplikácia hlási, že e-mail už existuje, konto už máte vytvorené! Nezakladajte teda nové, stačí sa prihlásiť e-mailom a heslom. Ak heslo neviete, použite obnovu hesla.
Číslo preukazu sa zadáva iba raz, pri prvej registrácii.
Vetvy
Reset hesla hlási neznámy e-mail. Vtedy konto naopak neexistuje a klient sa má zaregistrovať ako nový užívateľ.
Konto existuje, ale nie je potvrdené. Klient sa nevie prihlásiť a nevie prečo. Aktiváciu robí CKM — eskaluj.
Klient nevie, na aký e-mail je registrovaný. Agent to nezistí — eskaluj.
Klient má školský e-mail, ktorý zanikol. Súkromný e-mail použiť môže, ale zmenu v konte robí CKM.
Preukaz naozaj nie je platný. Ak klient nemá známku, ide o inú tému — viď článok Nedá sa mi prihlásiť ani zaregistrovať do aplikácie.
Klient má EURO<26 a aplikáciu my EYC. Všetko vyššie platí pre aplikáciu ISIC. Ako sa v my EYC rieši existujúce konto, reset hesla a potvrdenie registrácie, v podkladoch nie je — agent to nehádže odhadom.
Pre kartu EURO<26 je určená aplikácia my EYC. Preverím Vaše konto a ozvem sa Vám.
Eskaluj a operátorke uveď, že ide o my EYC.
Kedy eskalovať
Keď treba aktivovať konto, zmeniť e-mail alebo zistiť, na akú adresu je registrácia.
Preverím Vaše konto a ozvem sa Vám.
Operátorke odovzdaj: číslo karty, meno a e-mail, ktorý klient používa. Treba overiť, či registrácia existuje, či je konto aktivované, a prípadne e-mail opraviť.
Chcem si zmeniť fotku v aplikácii
Platí pre: ISIC · ITIC (aplikácia ISIC). Pre my EYC (EURO<26) postup overený nie je — viď vetvu.
Objem: ~20 prípadov.
Ako sa pýtajú
„omylom som nahral zlú fotku" · „nepodobám sa na ňu" · „nahrala som rozmazanú fotku a možnosť zmeny nevidím" · „please remove my profile photo"
Odpoveď
Kľúčová informácia: klient si fotku sám vymeniť nevie. Musí požiadať o odstránenie tej starej a potom si nahrá novú.
Dobrý deň,
fotku Vám odstránim a následne si v profile budete môcť nahrať novú.
Ďakujem
Vetvy
Klient ešte fotku nemá a nevie, kde ju nahrať.
Ak si dole v záložke dáte zobraziť preukaz, aplikácia Vás vyzve na vloženie fotky.
Ide o plastový preukaz. Rozmer sa líši podľa produktu — je uvedený v Cenník a údaje.
Fotografiu si nalepíte na preukaz, keď Vám ho kuriér doručí — do vyznačeného poľa a prekryjete ju priloženou fóliou. Pre preukaz ISIC má rozmer 26 × 32 mm, pre kartu EURO<26 20 × 33 mm.
Bez fotografie je preukaz neplatný a partner nemusí zľavu poskytnúť.
Pri ITIC klasik rozmer je 26 × 32 mm — rovnaký ako pri ISIC.
Ide o čipový preukaz vydaný školou. Fotku tam spravuje škola, nie CKM. Pri čipovom preukaze má fotka rozmer 25 × 25 mm.
Klient má ITIC a chce zmeniť fotku v aplikácii. Toto ide na osobitnú adresu a klient môže fotku poslať rovno.
Fotografiu si v aplikácii sami zmeniť nemôžete. Pošlite nám prosím fotografiu tváre v dokladovom štýle a v dobrom rozlíšení na itic@ckmsyts.sk spolu s číslom Vášho preukazu a my Vám ju vymeníme.
Klient má EURO<26 a aplikáciu my EYC. Postup vyššie („dole záložka → zobraziť preukaz") je z aplikácie ISIC. V aplikácii my EYC sa fotka mení v profile — držiteľ si nahrá fotku z galérie telefónu alebo sa odfotí priamo v aplikácii.
Fotku Vám odstránim a ozvem sa Vám s ďalším postupom.
Eskaluj a operátorke uveď, že ide o my EYC.
Kedy eskalovať
Vždy, keď treba fotku odstrániť — robí to CKM.
Odstránim Vám ju a dám vedieť, keď si budete môcť nahrať novú.
Operátorke odovzdaj: číslo karty a meno klienta. Treba odstrániť fotku z profilu.
Mám vôbec nárok na preukaz?
Platí pre: ISIC · EURO<26. Nárok na ITIC má vlastný článok 16.
Súvisiace: 16 (nárok na ITIC) · 25 (preukaz vydaný školou) — ak odpoveď vedie sem, načítaj aj tieto.
Objem: ~14 prípadov. Pravidlo je jednoduché a agent ho vie povedať celé.
Ako sa pýtajú
„syn už nie je študentom, dá sa to aj tak?" · „nastupujem na externé štúdium" · „od septembra študujem v zahraničí" · „ukončila som školu, môžem si ešte kúpiť ISIC?"
Odpoveď
Základné pravidlo: denné štúdium a potvrdenie o štúdiu = ISIC. Inak EURO<26 do 27 rokov.
Dobrý deň,
na preukaz ISIC má nárok každý denný študent, ktorý vie doložiť potvrdenie o štúdiu.
Ak podmienky nespĺňate a máte do 27 rokov, máte nárok na kartu EURO<26, s ktorou viete využívať tie isté komerčné zľavy — obchody, kiná, paušál od Orange.
Kartu EURO<26 si zakúpite tu: https://objednaj-preukaz.sk/kategoria-produktu/som-mlady/
Presné podmienky nároku sú v Cenník a údaje. Tri veci z nich sa v archíve nevyskytujú a klienti sa na ne pýtajú:
•    denné štúdium znamená minimálne 15 hodín týždenne,
•    preukaz je od 6 rokov a nemá hornú vekovú hranicu,
•    potvrdenie o prijatí nestačí — treba potvrdenie o zápise alebo o štúdiu.
Vetvy
Externé alebo diaľkové štúdium.
Ako externý študent, žiaľ, nespĺňate podmienky na známku ani na komerčné ISIC zľavy. Školský poplatok s tým nesúvisí. Ak máte do 27 rokov, môžete využívať rovnaké komerčné zľavy s kartou EURO<26: https://objednaj-preukaz.sk/kategoria-produktu/som-mlady/
Štúdium v zahraničí.
Nečipový ISIC si zakúpiť môžete, ak študujete denne a máte potvrdenie o štúdiu. Nečipový preukaz však neslúži ako dopravná karta — na elektronickú peňaženku, kredit ani na električenku ho použiť nemožno, na to je potrebný čipový preukaz vydaný slovenskou školou.
ISIC klasik neobsahuje čip, ale čo sa dopravy týka, na základe vizuálne platného preukazu ISIC klasik môžeš využívať jednorazové študentské cestovné podľa taríf dopravcov.
Vetu „zahraničný preukaz na slovenskú dopravu neplatí" už nepoužívaj. Vyhláška MD SR č. 269/2024 Z. z. účinná od 1. 7. 2026 výslovne pripúšťa preukaz ISIC vydaný v ktoromkoľvek členskom štáte EÚ. Dôsledok je rovnaký aj pre jednorazové cestovné: ISIC v akejkoľvek forme — aj nečipový, aj v mobile — oprávňuje naň podľa §23 ods. 4 vyhlášky MD SR č. 269/2024 Z. z.
Klient sa pýta na komerčné zľavy nad 26 rokov.
Preukaz ISIC hornú vekovú hranicu nemá — pokiaľ ste denným študentom, komerčné zľavy Vám platia aj po 26. narodeninách. Štátom garantovaná zľava na dopravu je však viazaná na vek do 26 rokov.
Klient chce ISIC kvôli paušálu v Orange. Orange uznáva len preukazy vydané na Slovensku — zahraničný ISIC nestačí. Ak máte do 27 rokov, môžete si namiesto neho zakúpiť kartu EURO<26 vydanú na Slovensku a s ňou paušál aktivovať: https://objednaj-preukaz.sk/kategoria-produktu/som-mlady/
Preukaz už má a končí štúdium. Doterajší preukaz môže dovyužívať do konca platnosti, predĺžiť si ho už nemôže ale môže si kúpiť EURO26 s navazujucou platnostou. 
Klient má alebo chce viac preukazov naraz — napríklad ISIC aj ITIC, alebo preukaz od CKM aj zo školy.
Áno, môžete mať obe karty — navzájom sa neovplyvňujú a zľavy fungujú s oboma.
Platí to o nároku. Čipový preukaz zo školy a nečipový od CKM sa však nedajú zlúčiť do jedného — viď článok Preukaz mi vydala škola.
Dokedy platí EURO<26.
Platnosť karty máte do dovŕšenia 27 rokov — zanikne deň pred 27. narodeninami.
Kedy eskalovať
Prakticky nikdy. Ak si klient nie je istý, či jeho forma štúdia je denná, odkáž ho na potvrdenie zo školy.
Mám ako učiteľ nárok na preukaz ITIC?
Platí pre: Len ITIC.
Objem: ~6 prípadov, ale otázka je sezónna a odpoveď je jednoznačná.
Ako sa pýtajú
„má nárok učiteľka materskej školy?" · „pracujem ako pedagogická asistentka" · „učím na dvoch ZUŠ" · „mám nárok, keď mám čiastočný úväzok?"
Odpoveď
Klient musí byť pedagogický alebo odborný pracovník a splniť jednu z troch podmienok úväzku. 18 hodín je len tá najbežnejšia z nich.
Dobrý deň,
dobrá správa — na preukaz ITIC máte nárok, ak vykonávate priamu alebo nepriamu pedagogickú činnosť a zároveň platí aspoň jedna z týchto možností:
– Váš týždenný úväzok je minimálne 18 hodín (úväzky z viacerých škôl sa sčítavajú), – ste na dôchodku alebo invalidnom dôchodku a učíte aspoň 1 hodinu týždenne, – ste na materskej alebo rodičovskej dovolenke a pred odchodom ste mali úväzok aspoň 18 hodín.
Pedagogické vzdelanie nie je podmienkou, rozhoduje úväzok. Nárok si viete overiť aj sami tu: https://itic.sk/narokomat/
Úplné podmienky nájdete tu: https://itic.sk/narok-na-preukaz-itic/
Vetvy
Materská škola. Áno, učitelia v MŠ nárok majú — za rovnakých podmienok.
Klient učí na viacerých školách. Úväzky sa sčítavajú.
Ak je Váš úväzok na týchto školách spolu aspoň 18 hodín, je to v poriadku a o preukaz si môžete požiadať.
Klient je na dôchodku a učí pár hodín. Toto je vetva, ktorú support v archíve neriešil — nárok tu vzniká už pri jednej hodine týždenne.
Ak ste na starobnom alebo invalidnom dôchodku a máte pracovný úväzok aspoň 1 hodinu týždenne, nárok na preukaz ITIC máte.
Klientka je na materskej alebo rodičovskej dovolenke.
Ak ste pred odchodom na materskú či rodičovskú dovolenku spĺňali podmienku úväzku aspoň 18 hodín týždenne, nárok na preukaz ITIC Vám ostáva.
Klient nie je učiteľ, ale odborný pracovník. Nárok má aj psychológ, logopéd, špeciálny pedagóg, sociálny a liečebný pedagóg, kariérový poradca, výskumný a umelecký pracovník či školský digitálny koordinátor.
Nárok na ITIC nemajú len učitelia — vzťahuje sa aj na odborných zamestnancov škôl a školských zariadení. Zoznam pozícií nájdete tu: https://itic.sk/narok-na-preukaz-itic/
Klient si nie je istý a chce si to overiť sám.
Nárok si viete overiť tu: https://itic.sk/narokomat/
Klient školu v zozname nenašiel.
Ak školu v zozname nenájdete, vypíšte ju ručne a bude doplnená.
Klient do zamestnania len nastupuje. Rozhoduje platnosť pracovnej zmluvy.
O preukaz si môžete požiadať, keď Vaša pracovná zmluva nadobudne platnosť. Objednávka zbehne prakticky hneď — pri platbe kartou máte číslo preukazu do pár minút a viete ho rovno použiť v aplikácii.
Klient mení zamestnávateľa.
Preukaz si viete zakúpiť aj teraz, ale na súčasné zamestnanie — zamestnávateľa Vám vieme neskôr zmeniť. Ak počkáte do nástupu, kúpite si ho rovno na nového.
Klientovi skončil pracovný pomer. Preukaz, ktorý si kúpil v čase, keď podmienky spĺňal, môže dovyužívať do konca platnosti. Predĺžiť si ho už nemôže.
Kedy eskalovať
Keď klient potrebuje platobné údaje, alebo si nie je istý, či jeho škola spĺňa podmienky.
Overím to a pošlem Vám platobné údaje.
Operátorke odovzdaj: názov školy, kde klient pracuje, a jeho týždenný úväzok. Bez týchto dvoch údajov sa objednávka nedá spracovať.
Nedá sa mi kúpiť známka na môj preukaz
Platí pre: ISIC · ITIC · EURO<26 — článok práve tieto rozdiely vysvetľuje.
Súvisiace: 16 (nárok na ITIC) · 02 (ako predĺžiť) · 05 (typ preukazu zo školy) — ak odpoveď vedie sem, načítaj aj tieto.
Objem: ~17 prípadov. Dôvod nie je chyba eshopu — nie každý preukaz sa predlžuje známkou.
Ako sa pýtajú
„ani na jedno číslo mi predĺženie neprešlo" · „píše, že pre danú kartu to nie je možné" · „ako predĺžim European Youth Card?" · „nefunguje mi zakúpenie známky"
Odpoveď
Známkou sa predlžuje iba čipový preukaz vydaný školou. Všetko ostatné sa predlžuje kúpou nového preukazu s nadväzujúcou platnosťou.
Dobrý deň,
ráda to vysvetlím — známkou sa predlžuje iba čipový preukaz vydaný školou. Nečipový preukaz ISIC/ITIC klasik, preukaz do mobilu aj EURO<26 sa predlžujú tak, že si zakúpite nový preukaz — ten dostane nové číslo a jeho platnosť nadväzuje na súčasnú.
Do objednávky zadáte priezvisko a číslo súčasného preukazu, systém Vás overí a vystaví kartu s nadväzujúcou platnosťou.
Ceny sú v Cenník a údaje: 13 € do mobilu, 16,15 € plast 13 + 3.15 kuriér.
Vetvy
Klient končí strednú školu a ide na vysokú. Toto je sezónne najčastejší omyl — známku si kúpi zbytočne.
Ak už nie je študentom strednej školy, súčasný preukaz nebude možné predĺžiť zakúpením známky na ďalší rok, nakoľko preukaz je stredoškolský. Je potrebné zakúpiť nový preukaz ISIC, ak ide o študenta denného štúdia na VŠ a má potvrdenie o štúdiu.
Klient sa bojí, že predčasným predĺžením stratí zvyšok platnosti.
Karta sa vystavuje s nadväzujúcou platnosťou — o žiadny deň neprídete.
EURO<26.
Novú kartu na ďalší rok si zakúpite tu:
https://objednaj-preukaz.sk/kategoria-produktu/som-mlady/
ITIC. Rovnaké pravidlo, ale support potrebuje školu a úväzok — viď článok Mám ako učiteľ nárok na preukaz ITIC.
Klient má čipový preukaz zo školy a známka mu aj tak neprejde. Skôr než to odpíšeš na chybu overenia, over typ preukazu. Škola vydáva dva preukazy žiaka a ten s vizuálom Ubian licenciu ISIC neobsahuje — známku naň kúpiť nemožno.
Máte na preukaze logo ISIC? Škola vydáva preukaz žiaka s vizuálom Ubian alebo s vizuálom ISIC/EURO<26. Známkou sa predlžuje len ten druhý — preukaz s vizuálom Ubian medzinárodnú licenciu ISIC neobsahuje a známka sa naň nedá zakúpiť. Pre doplnenie zľavových benefitov si môžete však zakúpiť náš preukaz ISIC klasik https://objednaj-preukaz.sk
Podrobnosti sú v článku Je moja škola zapojená.
Klient má čipový preukaz s logom ISIC a známka mu aj tak neprejde. Vtedy je problém v overovaní — viď vetvu nižšie.
Overenie pri objednávke neprejde
Častá príčina, ktorú agent vyrieši úplne sám:
Poďme to spolu vyriešiť. Do kolónky priezvisko zadajte iba priezvisko — nie celé meno, nie rodné priezvisko. Do kolónky číslo preukazu zadajte slovenské číslo v tvare S421… / T421… / E421…, aj s koncovým písmenom a bez medzier.
Kedy eskalovať
Keď ani po správnom zadaní overenie neprejde, alebo klient nevie, aký typ preukazu má.
Preverím, aký preukaz máte, a poradím Vám ďalej.
Operátorke odovzdaj: priezvisko a číslo preukazu klienta. Treba overiť typ preukazu a jeho platnosť.
Zmenilo sa mi meno, škola alebo iné údaje
Platí pre: ISIC · ITIC · EURO<26 — rovnaké pre všetky.
Objem: ~23 prípadov.
Ako sa pýtajú
„vydala som sa a mám nové priezvisko" · „prosím o zmenu názvu školy na karte" · „uviedla som nesprávnu doručovaciu adresu" · „zadal som zlé telefónne číslo" · „v aplikácii mi ukazuje nesprávnu vysokú školu"
Odpoveď
Žiadny z týchto údajov si klient nezmení sám — mení ich CKM na požiadanie. Doklad ako sobášny list sa nevyžaduje.
Dobrý deň,
samozrejme, radi Vám priezvisko zmeníme. Napíšte mi prosím nové priezvisko a číslo Vášho preukazu a upravím to.
Následne si viete zakúpiť novú kartu s nadväzujúcou platnosťou.
Vetvy
Zmena priezviska na už vydanom preukaze.
Preukaz nie je potrebné meniť a môžete ho využívať tak, ako ho máte. Údaj Vám opravíme v systéme, aby prešlo overenie pri ďalšej objednávke.
Pri karte EURO<26 je to vyriešené: karta po zmene priezviska naďalej platí, informácia na euro26.sk bola nesprávna. Držiteľ karty EURO<26 si priezvisko upraví sám priamo v aplikácii.
Priezvisko Vám v systéme opravíme. Pri karte EURO<26 zostáva Vaša karta platná aj po zmene priezviska — nové priezvisko si viete upraviť sami priamo v aplikácii, v časti Profil.
Klient má ITIC a chce zmeniť meno alebo školu. Ide to na osobitnú adresu, klient nemusí čakať na odpoveď a môže poslať údaje rovno.
Pošlite nám prosím nové údaje spolu s číslom Vášho preukazu na itic@ckmsyts.sk a zmeníme Vám ich.
Zmena školy pri digitálnom alebo nečipovom preukaze. Údaj sa dá prepísať — eskaluj s novým názvom školy.
Zmena školy pri čipovom preukaze. Ten sa prepísať nedá.
Súčasný preukaz viete dovyužívať do konca platnosti. Po jej uplynutí si zakúpite nový preukaz na aktuálnu školu. 
Dieťa prestupuje na inú strednú školu.
Pri prestupe na inú školu alebo pri nástupe na strednú školu je potrebné vybaviť si nový preukaz na novej škole[MS7] . Nakoľko ide o prestup a už ste tento rok zaplatili licenciu za preukaz ISIC (známka ISIC), informujte sa, prosím priamo na Vašej škole ako získať nárok na znížené členské.
Klient hlási, že na preukaze je iný názov školy, než čakal. Väčšinou nejde o chybu v údajoch.
Na preukaz sa nezmestí celý názov školy, preto je na ňom predtlačená iba jej skratka. V našej evidencii ste vedený pod plným názvom.
Zmena adresy alebo telefónu pred odoslaním zásielky. Dá sa opraviť, ale musí sa to stihnúť — eskaluj hneď.
Klient sa vydal a neprejde mu overenie v eshope. Najprv treba opraviť priezvisko v systéme, až potom objednávať.
Kedy eskalovať
Vždy — zmenu údajov robí CKM.
Upravím Vám to a dám vedieť.
Operátorke odovzdaj: číslo preukazu, ktorý údaj sa mení a novú hodnotu. Pri adrese aj telefónne číslo pre kuriéra.
Známka — virtuálna či fyzická, kedy príde a kam ju nalepiť
Platí pre: ISIC SŠ/VŠ (známka 09/2027) · ITIC (vlastná známka, sezóna 12/2027). Pri EURO<26 sa známka týka len čipového preukazu ISIC/EURO<26 od školy. Pre kartu EURO<26 známka neexistuje.
Súvisiace: 02 (ako predĺžiť) · 17 (nepredlžuje sa známkou) — ak odpoveď vedie sem, načítaj aj tieto.
Objem: ~29 prípadov dokopy. Väčšina zmätku okolo známky je v tomto jednom článku.
Ako sa pýtajú
„postačuje virtuálna nálepka alebo si ju mám dať doručiť?" · „kedy mi príde známka?" · „dá sa vyzdvihnúť osobne u vás?" · „kam ju mám nalepiť, nemám už miesto" · „objednal som známku dnes, platí preukaz hneď?"
Odpoveď — virtuálna vs. fyzická
Dobrý deň,
skvelé, že si chcete preukaz predĺžiť! Obe známky sú plnohodnotné a predlžujú jeho platnosť rovnako. Ide len o formu:
Virtuálna platí v aplikácii, nedoručuje sa a na preukaz sa nelepí, zobrazuje sa v aplikácii.Fyzická Vám príde kuriérom s kuriérskym poplatkom 3,15€ na adresu, ktorú si zvolíte a nalepíte si ju na preukaz.
Ďakujem
Odpoveď — preukaz je platný hneď
Toto je najdôležitejšia veta celého článku, lebo klienti sa zbytočne boja cestovať.
Preukaz máte predĺžený hneď po úspešnej úhrade — na fyzickú známku netreba čakať. Do príchodu známky sa viete preukázať platným preukazom v ISIC aplikácii, ktorá je dostačujúca.
Vetvy
Klient má ITIC. Známka ITIC je samostatný produkt s vlastnou sezónou 12/2027. Eshop ju predáva v trochvariantoch — vyzdvihnutie u brigádnika ani kupónová knižka pri nej nie sú.
--TABLE START--
variant | odkaz | podmienky
Elektronická známka | /produkt/elektronickaznamkaitic/ | 13 €, bez doručenia, preukaz sa aktivuje v aplikácii ISIC/ITIC
Kuriérom | /produkt/znamka-itic/ | 13 € + 3,15 €
Vyzdvihnutie na škole | /produkt/skola-znamkaitic/ | 13 €, len vybrané ZŠ a SŠ, v júni, septembri a októbri, bez kuriérskeho poplatku
--TABLE END--
Známku ITIC si zakúpite tu: https://objednaj-preukaz.sk/produkt/znamka-itic/ Doručujeme ju kuriérom na Vami zadanú adresu. Ak si vystačíte s preukazom v aplikácii, máte aj lacnejšiu možnosť — elektronickú známku bez poplatku za doručenie: https://objednaj-preukaz.sk/produkt/elektronickaznamkaitic/
Od 1. novembra sa známka ITIC na školu už nedoručuje — vtedy ostáva len kuriér s poplatkom 3,15 €. Ak klient píše v novembri alebo neskôr, možnosť vyzdvihnutia na škole mu neponúkaj. Platí iba doručenie kuriérom na adresu.
Odkaz na známku ISIC/EURO<26 ani informácie o kupónovej knižke učiteľovi neposielaj.
Kedy a kam príde fyzická známka. Platí pre známku ISIC/EURO<26. Závisí od druhu známky a zvolenej možnosti:
Stredoškolská známka — ak ste zvolili vyzdvihnutie na svojej strednej škole, známku tam budete mať pripravenú a vyzdvihnete si ju podľa inštrukcií školy. Neplatíte kuriérsky poplatok.
Vysokoškolská známka — pri doručení kuriérom Vám príde koncom augusta alebo začiatkom septembra spolu s kupónovou knižkou. Pri voľbe vyzdvihnutia u brigádnika si ju vyzdvihnete na začiatku semestra priamo na škole, presné termíny pošleme vopred.
Pri stredoškolskej známke s doručením na školu platia dve obmedzenia, ktoré klienta prekvapia: možnosť ponúkajú len vybrané školy a len v júni, v septembri a októbri. Zásielka ide na školu nasledujúci týždeň po objednaní, najskôr v stredu. Ak škola v zozname nie je, klient si kupuje známku s doručením kuriérom a poplatkom 3,15€ navyše cez e-shop objednaj-preukaz.sk
Osobný odber na Vysokej 32.
Osobné vyzdvihnutie, žiaľ, nie je možné — nemáme tam výdaj známok. Zásielky odosielame iba kuriérom na adresu, prípadne si známku viete vyzdvihnúť na škole podľa inštrukcie.
Klient si zvolil odber u brigádnika a nestihne ho.
Známku za Vás môže prevziať iná osoba, alebo si viete doplatiť poštovné 3,15 € a pošleme Vám ju kuriérom na adresu.
Kam nalepiť.
Známku môžete nalepiť na preukaz na vyznačené miesto (vpredu alebo vzadu). Ak Vám preukaz funguje, nemusíte ho meniť.
Klient stratil známku.
Známku nie je možné objednať znova. Preukaz je predĺžený a platný, preukázať sa viete preukazom v aplikácii alebo si viete objednať duplikát preukazu.
Prišli dve známky a klient nevie, ktorá kam.
Je to v poriadku ak ste objednávali v objednávke dve známky, môžete nalepiť ktorúkoľvek — preukaz je predĺžený.
Zásielky chodia kuriérom GLS, do Packety ani na poštu neposielame. Adresa môže byť ľubovoľná, dôležité je, aby sa kuriér mal s kým skontaktovať.
Kedy eskalovať
Keď známka nedorazila v očakávanom termíne alebo sa zásielka vrátila.
Preverím, kde sa zásielka nachádza, a ozvem sa Vám.
Operátorke odovzdaj: číslo objednávky, doručovaciu adresu a telefónne číslo pre kuriéra. Treba dohľadať zásielku.
Stratil som preukaz, ako získam duplikát
Platí pre: ISIC · ITIC · EURO<26 — postup sa líši podľa toho, kto preukaz vydal, nie podľa produktu.
Objem: ~12 prípadov.
Ako sa pýtajú
„stratila som ISIC, čo mám robiť?" · „ako postupovať pri strate karty?" · „chcel by som k mobilnej karte aj plastovú" · „objednal som duplikát a prišiel mi rovnaký preukaz"
Odpoveď
Postup sa líši podľa toho, kto preukaz vydal.
Dobrý deň,
to vyriešime — postup závisí od toho, kto Vám preukaz vydal. Ak ho vydala škola (čipový), duplikát vybavuje spoločnosť Ubian — tel. +421 41 399 88 99, preukazziaka@transdata.sk, alebo online: https://www.ubian.sk/student-card-duplicate alebo priamo cez študijné oddelenie Vašej školy.
Ak ste si preukaz kúpili u nás, duplikát si objednáte tu:
https://objednaj-preukaz.sk/kategoria-produktu/duplikaty/
Presné rozdelenie, kto duplikát vystavuje:
--TABLE START--
preukaz | kde
ISIC klasik, ITIC klasik, EURO<26 (od CKM) | eshop CKM, 3 €
Čipový ISIC/EURO<26 zo ZŠ alebo SŠ | Ubian 12,30 €
Čipový ISIC z VŠ | len škola — Ubian ho nevystaví, poplatok určuje škola
Čipový ITIC z VŠ | len škola (pracovisko preukazov / personálne oddelenie)
Čipový ITIC zo ZŠ alebo SŠ | Ubian 
--TABLE END--
Duplikát cez Ubian príde do 3–5 pracovných dní, dá sa doručiť domov aj na školu s poplatkom za poštovné 3,57€.
Vetvy
Klient si myslí, že duplikát je nový preukaz. Nie je — je to kópia toho istého.
Duplikát znamená zduplikovanie Vášho pôvodného preukazu, nie nový preukaz s novou platnosťou. Platnosť bude taká ako mal Váš pôvodný (stratený/poškodený)  preukaz. Ak chcete platnosť preukazu predĺžiť, treba zakúpiť známku.
Klient má kartu v mobile a chce aj plastovú.
Preukaz v mobile plnohodnotne nahrádza plastovú kartu. Ak by ste si aj tak chceli objednať fyzickú, zakúpite ju ako duplikát: https://objednaj-preukaz.sk/kategoria-produktu/duplikaty/.
Klient chce spojiť čipový preukaz zo školy s tým od CKM. Nedá sa.
Ide o dva odlišné typy preukazov, ktoré sa nedajú nijako zlúčiť ani spojiť. Čipový preukaz si viete vybaviť podľa inštrukcií na Vašej škole; platnosť digitálneho preukazu dovtedy dobehne.
Klient si objednal duplikát čipového preukazu. Dôležité upozornenie, ktoré sa inak dozvie neskoro:
Po objednaní duplikátu je pôvodný preukaz zablokovaný a nedá sa už používať. Využívať už môžete len duplikát preukazu. 
Klient mal na stratenom preukaze kredit alebo električenku. Peniaze sa neprenesú samé — pri niektorých dopravcoch treba ísť osobne.
Ak ste mali na preukaze aktívnu elektronickú peňaženku dopravcov Dopravný podnik Bratislava, Arriva Mobility Solutions, DPM Žilina alebo SAD Zvolen, na prenos zostatku a prípadného predplatného lístka je potrebné navštíviť kontaktné miesto daného dopravcu alebo kontaktuje priamo spoločnosť TransData (UBIAN), kde Vám poskytnú konkrétne informácie k preneseniu kreditu.
Kedy eskalovať
Keď klient nevie, kto mu preukaz vydal, alebo objednal duplikát a niečo nesedí.
Operátorke odovzdaj: číslo preukazu a informáciu, kto ho vydal — škola alebo CKM.
Chcem zrušiť alebo opraviť objednávku
Platí pre: ISIC · ITIC · EURO<26 — rovnaké pre všetky.
Objem: ~24 prípadov.
Ako sa pýtajú
„objednal som zlý typ preukazu" · „prosím o zrušenie objednávky" · „zle som zadala číslo ISICu" · „objednal som VŠ známku namiesto stredoškolskej" · „omylom som zvolila doručenie e-mailom"
Odpoveď
Storno nie je automatické — CKM sa vždy pýta na dôvod, lebo drobné chyby sa dajú opraviť bez rušenia objednávky.
Dobrý deň,
to spolu určite doriešime — napíšte mi prosím, čo presne v objednávke nesedí a aké je jej číslo. Drobné chyby vieme opraviť priamo, bez rušenia objednávky.
Ďakujem
Vetvy
Drobná chyba — chýbajúce písmeno v čísle karty, zámena stredoškolskej a vysokoškolskej známky, zlý názov školy, preklep v telefónnom čísle alebo adrese. Opravuje sa, objednávka ostáva platná.
Je to v poriadku, opravíme to a objednávka ostáva platná.
Zlý typ produktu — nečipový namiesto známky, ITIC namiesto ISIC. Tu už treba storno a novú objednávku.
Objednávka je uhradená. Nezruší sa automaticky.
Ak je objednávka vytvorená a uhradená, nie je možné ju zrušiť bez posúdenia. Zrušiť a vrátiť peniaze vieme len pri nesprávne zakúpenom duplikáte preukazu, pri omylom kúpenom rovnakom produkte pre jedného držiteľa dvakrát, alebo pri prestupe na inú školu — vtedy sa vracia poplatok za licenciu. Napíšte mi prosím dôvod a pozrieme sa na to.
Preukaz je už vyrobený a odoslaný.
Karta už bola vyrobená a odoslaná. Keď Vám príde na adresu, je neaktívna — prosím prestrihnite ju.
Klient chce zrušiť, lebo nemá potvrdenie o štúdiu. Alternatíva k vráteniu peňazí:
Objednávku Vám môžeme zatiaľ zrušiť a spracovať ju v septembri, keď viete doložiť potvrdenie o návšteve školy/štúdiu.
Kedy eskalovať
Vždy — opravu aj storno robí CKM.
Odovzdám to kolegyni a dáme Vám vedieť.
Operátorke odovzdaj: číslo objednávky, čo presne treba zmeniť alebo prečo klient chce storno, a či je objednávka uhradená.
Eshop ma nepustí ďalej alebo ma neoverí
Platí pre: ISIC · ITIC · EURO<26 — rovnaké pre všetky.
Súvisiace: 12 (neviem číslo preukazu) — ak odpoveď vedie sem, načítaj aj tieto.
Objem: ~15 prípadov. Väčšinu z nich agent vyrieši sám.
Ako sa pýtajú
„nedá sa mi pridať do košíka" · „píše, že som si nevybrala spôsob doručenia" · „nevie mi nájsť kartu" · „vypíše mi uveďte všetky písmená z čísla karty" · „nemôžem nájsť školu v zozname"
Odpoveď — overenie priezviska a čísla
Najčastejšia príčina zo všetkých.
Dobrý deň,
do kolónky priezvisko zadajte iba priezvisko — nie celé meno a nie rodné priezvisko, ani nič iné. Do kolónky číslo preukazu zadajte slovenské číslo v tvare S421… / T421… / E421…, aj s koncovým písmenom a bez medzier.
Podarilo sa?
Vetvy
Košík nepustí k platbe. Príčinou býva miešanie produktov s rôznym spôsobom doručenia.
Skúste si dať do košíka najskôr preukaz a až potom pridať známky, prípadne skúste objednávku cez iný prehliadač. Ak to nepomôže, rozdeľte objednávku — zvlášť preukaz a zvlášť známky.
Škola sa nedá vybrať.
Ak školu v zozname neviete nájsť, vypíšte ju ručne do kolonky a bude doplnená.
Ak je škola súčasťou spojenej školy, hľadá sa pod názvom spojenej školy — pomôže zadať mesto a časť názvu.
Telefónne číslo neprejde. Formulár býva citlivý na formát — over, či klient nezadal číslo s predvoľbou 00421 alebo s medzerami.
Klient má len medzinárodné číslo v tvare Y876-… — potrebuje slovenské, viď článok Neviem číslo svojho preukazu.
Klient má nové priezvisko po svadbe. Najprv treba opraviť údaj u nás v systéme, až potom objednávať.
Kedy eskalovať
Keď ani po správnom zadaní overenie neprejde.
Preverím to a poradím Vám ďalej.
Operátorke odovzdaj: priezvisko, číslo preukazu a čo eshop zobrazil.
Operátor mi zrušil študentský paušál
Platí pre: Najčastejšie ISIC. Pri ITIC a EURO<26 platí to isté pravidlo, ale preukaz sa predlžuje inak — viď vetvu.
Súvisiace: 02 (ako predĺžiť) — ak odpoveď vedie sem, načítaj aj tieto.
Objem: ~30 odpovedí supportu. Sezónna téma — najviac na prelome augusta a septembra.

⛔ KRITICKÉ — časovo podmienené pravidlo o Orangei a O2 (potvrdené CKM 29. 8. 2026, nadraďuje sa
nad všetko nižšie): Spolupráca s Orangeom končí 31. 8. 2026 o 23:59, od 1. 9. 2026 CKM prechádza
na O2. DO 31. 8. 2026 VRÁTANE agent o O2 ani o prechode z Orangeu NESMIE hovoriť vôbec — ani
nepriamo, ani keď sa naň klient priamo spýta. Namiesto toho odpovie neutrálne: „Na paušále sa
z našej strany nič nemení, o prípadných zmenách budeme informovať vopred." a ak treba, eskaluje.
OD 1. 9. 2026 ráno sa už komunikuje voľne (landing page isic.sk/o2, e-maily o O2 idú v ten deň) a
platí obsah nižšie. Ak nie si istá/istý, aký je dnešný dátum, over si ho a týmto pravidlom sa
riaď doslovne — nejde o odporúčanie, je to embargo na komunikáciu.

Ako sa pýtajú
„Orange mi zrušil študentský paušál, lebo ISIC nie je platný" · „nepredĺžilo to Yoxo" · „keď mám kartu aktivovanú, nemusím s Orangeom nič riešiť?" · „chcem prejsť na yoxo paušál, ale karta ukazuje, že nie je overená"
Odpoveď
Operátor kontroluje platnosť preukazu. Ak nie je predĺžený, paušál mu prestane platiť.
Dobrý deň,
to rýchlo napravíme. Preukaz momentálne nie je platný na komerčné zľavy, preto ho Orange neuznáva. Známku si zakúpite tu: https://objednaj-preukaz.sk/produkt/znamka-isiceuro/
Po úhrade bude preukaz platný a bude fungovať aj v Orangei. Odporúčame overiť informáciu u operátora na zákazníckej linke 905.
Ak preukazu medzitým vyprší platnosť, operátor paušál automaticky preradí (downgraduje) na
najnižšiu možnú tarifu; na obnovenie pôvodnej tarify treba po predĺžení preukazu o to u operátora
požiadať — systém následne overí, že už držiteľ má platný preukaz.
Vetvy
[OD 1. 9. 2026] Klient sa pýta na Orange/prechod na O2. Spolupráca s Orangeom sa skončila
31. 8. 2026 o 23:59, CKM od 1. 9. 2026 spolupracuje s O2. Existujúce paušály Orange/Yoxo
doterajším držiteľom dobehnú do konca ich platobného obdobia alebo viazanosti — CKM ich už
nespravuje ani neruší, otázky k nim rieši priamo Orange. Po ich skončení už nie sú prepojené s
preukazmi CKM. Platnosť preukazu ani ostatné benefity sa zmenou partnera nijako nemenia. Novú
ponuku od O2 (O2 Paušál, O2 Maxx, O2 Junior) nájde držiteľ na isic.sk/o2.
Orientačné ceny O2 paušálov so zľavou pre platný preukaz ISIC/ITIC/EURO<26 (bežná cena → cena s
preukazom, platné od 1. 9. 2026): Bezstarostný 44 € → 33 €/mes. (neobmedzené dáta, volania aj
správy, cashback 5 € späť, bonus na zariadenie 168 €), Pohodový 33 € → 28 €/mes. (15 GB dát,
neobmedzené volania a správy, bonus na zariadenie 96 €), Základný 22 € → 18 €/mes. (10 GB dát,
200 minút, neobmedzené správy, bonus na zariadenie 48 €) — všetky tri bez viazanosti. K tomu O2
Maxx 20 €/mes. (100 GB, neobmedzené volania a SMS v EÚ) a O2 Junior 10,25 €/mes., kde bonus za
preukaz nie je v cene, ale v objeme (10 GB namiesto 4 GB, 5 voľných čísel namiesto 3). Tieto
konkrétne ceny agent uvádza až od 1. 9. 2026 a len ako orientačné, s odkazom na isic.sk/o2 pre
záväzné znenie.
Klient má ITIC alebo EURO<26. Pravidlo je rovnaké — operátor uzná len platný preukaz — ale odkaz na známku ISIC/EURO<26 mu neposielaj. ITIC má vlastnú známku, EURO<26 sa predlžuje kúpou novej karty. Postup je v článku Ako si predĺžim preukaz.
Klient predĺžil preukaz a pýta sa, či má niečo hlásiť. Rozhoduje kedy si preukaz obnovil.
Ak ste si platnosť obnovili ešte pred skončením platnosti súčasného preukazu, informácia sa do Orangeu (od 1. 9. 2026: do O2) prenesie automaticky a paušál Vám plynule pokračuje — nikam chodiť nemusíte.
Toto CKM potvrdilo ako záväzné znenie. Podmienku „pred skončením platnosti" nikdy nevynechaj — je to celá pointa odpovede.
Klient dostal nové číslo karty až po tom, čo mu starý preukaz vypršal, alebo ide o duplikát či nový plast mimo obnovy.
V tomto prípade, po vypršaní platnosti, operátor informáciu automaticky nedostane. Treba mu nahlásiť nové číslo preukazu, aby Vám paušál mohol pokračovať.
Klient má zahraničný ISIC.
Orange (od 1. 9. 2026: O2) poskytuje zľavy len na preukazy ISIC, ITIC a EURO<26 vydané na Slovensku. Ak máte do 27 rokov, môžete si zakúpiť kartu EURO<26 vydanú na Slovensku a paušál s ňou aktivovať: https://objednaj-preukaz.sk/kategoria-produktu/som-mlady/
Klient sa pýta, či má na Yoxo nárok, keď nie je študent. Áno — paušál je viazaný na platný preukaz, nie na štatút študenta.
Yoxo paušál si viete aktivovať s ktorýmkoľvek platným preukazom ISIC, ITIC alebo kartou EURO<26 vydaným na Slovensku — študentom byť nemusíte.
Rodič sa pýta, či môže paušál aktivovať dieťaťu. CKM potvrdilo: žiadna veková hranica neplatí — údaj „od 16 rokov" v databáze zliav je nesprávny, rozhoduje len platný preukaz (ISIC od 6 rokov).
Klient sa pýta, čo presne v paušáli je. Detaily určuje operátor, agent ich necituje ako záväzné — odkáž na isic.sk/yoxopausal/ alebo itic.sk/yoxo/ (od 1. 9. 2026: isic.sk/o2).
Klient si mýli číslo známky s číslom karty. Operátorovi sa hlási číslo preukazu v tvare S421…, nie označenie známky začínajúce na R.
Počas štúdia ostáva to isté číslo preukazu S421…, v prípade že ide o čipový preukaz zo školy, a tento údaj používate aj pre operátora. Číslo v tvare R… je len označenie známky a na zľavy, ani na žiadnu inú evidenciu, sa nepoužíva.
Kedy eskalovať
Keď klient tvrdí, že preukaz platný je, a operátor ho aj tak neuznáva; a vždy, keď je dnešný dátum do 31. 8. 2026 vrátane a klient sa priamo pýta na Orange/O2/prechod — eskaluj namiesto podrobnej odpovede.
Preverím platnosť Vášho preukazu a ozvem sa Vám.
Operátorke odovzdaj: číslo preukazu, meno a ktorého operátora sa to týka. Treba overiť platnosť a prípadne nahlásiť predĺženie partnerovi.
Prišlo mi nové číslo karty — ako ho dostanem do aplikácie?
Platí pre: ISIC · ITIC (aplikácia ISIC) · EURO<26 (aplikácia my EYC) — článok má vetvu pre obe aplikácie.
Súvisiace: 12 (neviem číslo preukazu) — ak odpoveď vedie sem, načítaj aj tieto.
Objem: najčastejšie opakovaný návod v celom archíve.
Ako sa pýtajú
„ako sa nahráva nová karta do aplikácie?" · „prišlo mi nové číslo, čo s ním?" · „kúpil som novú kartu a odhlásilo ma z aplikácie" · „v appke mi svieti stará platnosť"
Odpoveď — aplikácia ISIC (ISIC a ITIC)
Dobrý deň prajem,
ráda Vám poradím — nové číslo preukazu jednoducho nahráte v aplikácii ISIC:
1. Ťuknite na tri bodky vpravo dole.
2. Úplne hore vedľa fotografie zvoľte UPRAVIŤ.
3. Zrolujte nižšie a zvoľte NAHRADIŤ PREUKAZ.
4. Vložte nové číslo preukazu.
Pekný deň prajem.
Odpoveď — aplikácia my EYC (EURO<26)
V aplikácii my EYC to zvládnete rovnako jednoducho — posuňte prstom doľava a hore cez znak + vložte nové číslo karty.
Tento postup potvrdzuje aj euro26.sk. Dve veci k nemu, ktoré klienti riešia najčastejšie:
•    Kto mal starú aplikáciu EURO<26, musí sa v novej registrovať ako nový užívateľ — pôvodné prihlásenie nefunguje.
•    S registráciou treba počkať aspoň dve hodiny od uvítacieho e-mailu, kým sa údaje prenesú medzi systémami.
Kedy sa číslo nahráva
Deň pred vypršaním platnosti súčasného preukazu, nie hneď po úhrade. Ak klient nahrá skôr, príde o zvyšok platnosti starého preukazu. Ak ide o nového používateľa, ktorý si registráciu v aplikácii ešte nevytvoril, môže tak urobiť hneď po obdržaní čísla.
Ak preukaz už vypršal, nahradenie nefunguje — treba sa zaregistrovať ako nový užívateľ s novým číslom.
Vetvy
Rozdiel medzi nahradením a pridaním. „Nahradiť preukaz" vymení starý za nový. Postup cez znak + pridáva ďalšiu kartu popri existujúcej. Ak si klient chce nechať oba preukazy, použije pridanie.
Aplikácia hlási, že číslo je neplatné. Po zakúpení trvá približne dve hodiny, kým údaje zbehnú do medzinárodnej databázy.
Na účely zliav je preukaz platný, do aplikácie to môže chvíľu trvať.
Klient má len medzinárodné číslo v tvare Y876-…. Do aplikácie patrí slovenské číslo v tvare S421… / T421… / E421….
Pri EURO<26 je to zvláštny prípad: my EYC medzinárodné číslo (Y123-A123-B123-C123) prijme a kartu zobrazí, ale pre zľavy na Slovensku treba aktivovať aj slovenské číslo v tvare E421 222 333. Obe sú v uvítacom e-maile.
Preukaz sa nedá zaregistrovať a číslo nemá koncové písmeno. Ide o starý formát preukazu, ktorý aplikácia neprijme.
Ak číslo Vášho preukazu nemá na konci písmeno, ide o starší preukaz, ktorý je potrebné vymeniť za nový. S touto žiadosťou sa prosím obráťte na svoju školu.
Staré aj nové číslo môžu platiť súbežne — ak má klient obe, zľavy fungujú s oboma.
Kedy eskalovať
Keď ani po dvoch hodinách číslo neprejde, alebo klient nové číslo vôbec nedostal.
Preverím to a ozvem sa Vám.
Operátorke odovzdaj: staré aj nové číslo karty a e-mail klienta.
Preukaz mi vydala škola — čo rieši škola a čo CKM
Platí pre: ISIC — čipový preukaz vydaný školou.
Súvisiace: 20 (duplikát) · 04 (doprava) — ak odpoveď vedie sem, načítaj aj tieto.
Objem: 12 prípadov. Nie je to otázka na jednu vec, je to smerovacie pravidlo — rozhoduje o tom, či agent vôbec môže odpovedať, alebo klienta posiela inam.
Ako sa pýtajú
„chcem si predĺžiť preukaz z vysokej školy" · „stratil som ISIC, ktorý mi dala škola" · „kde vybavím prolongáciu" · „prišlo mi, že mám neplatný preukaz, pritom mi ho vydala univerzita" · „na koho sa mám obrátiť ohľadom preukazu"
Pravidlo
Kto preukaz vydal, ten ho aj spravuje. Preukaz vydaný školou — typicky čipový, a na vysokých školách takmer vždy — CKM nespravuje a agent v ňom nič nezmení.
Dobrý deň,
rozumieme, že by bolo pohodlnejšie vybaviť všetko na jednom mieste — v tomto prípade sa však, prosím, obráťte na študijné oddelenie Vašej školy. Vysokoškolské preukazy sa riešia týmto spôsobom — my ich nevydávame ani v nich nevieme robiť zmeny.
Pekný deň
Vetvy
Prolongácia preukazu z vysokej školy.
Ohľadom prolongácie preukazu sa musíte obrátiť na študijné oddelenie Vašej vysokej školy.
Duplikát pri strate. Vybavuje sa cez školu, nie cez eshop CKM.
O duplikát požiadate priamo cez Vašu školu — študijné oddelenie.
Podrobnosti a druhá cesta cez Ubian sú v článku Stratil som preukaz, duplikát.
Dopravná a čipová časť. Tú nerieši ani škola, ani CKM — patrí Ubianu. Viď článok Preukaz mi nefunguje v doprave.
Klient si u CKM kúpil nečipový preukaz, hoci mu škola vydáva čipový. Toto je častý a drahý omyl — oplatí sa naň upozorniť skôr, než objednávka prejde.
U nás ste si zakúpili nečipový preukaz ISIC. Ak Vaša škola vydáva čipové preukazy, potrebujete si cez ňu zakúpiť iba známku — chceli ste objednať naozaj toto?
Klient chce spojiť preukaz od CKM s čipovým zo školy. Nedá sa.
Ide o dva odlišné typy preukazov, ktoré sa nedajú nijako zlúčiť ani spojiť. Ak máte záujem o čipový preukaz, vybavíte si ho podľa inštrukcií na Vašej škole a platnosť digitálneho preukazu dovtedy dobehne.
Klient sa pýta, prečo je na preukaze skrátený názov školy.
Na preukaz sa nezmestí celý názov školy, preto je na ňom predtlačená iba jej skratka. Evidovaný ste pod plným názvom.
Preukaz od školy funguje v doprave, ale nie na zľavy. Toto nie je porucha — škola vydáva dva typy preukazu žiaka a jeden z nich licenciu ISIC neobsahuje.
Máte na preukaze logo ISIC? Škola môže vydávať preukaz žiaka s vizuálom Ubian alebo s vizuálom ISIC/EURO<26. V doprave aj v školských systémoch fungujú rovnako, ale preukaz s vizuálom Ubian medzinárodnú licenciu ISIC neobsahuje — komerčné zľavy s ním uplatniť nemožno a známku naň zakúpiť nie je možné.
Ak chcete aj ISIC zľavy, potrebujete preukaz s vizuálom ISIC/EURO<26; vybavíte si ho na svojej škole.
Ceny oboch typov sú v Cenník a údaje — určuje ich Ubian a škola, nie CKM.
Klient sa pýta na prolongáciu preukazu z vysokej školy a jeho škola je jedna z výnimiek. Väčšina vysokoškolákov platí poplatok za dopravu na škole, ale na UKF v Nitre, Prešovskej univerzite, Paneurópskej vysokej škole, Katolíckej univerzite v Ružomberku a Univerzite Komenského sa platí cez Ubian. Známku ISIC si online kupujú študenti UKF Nitra, UJS Komárno a KU Ružomberok — sú to dva rôzne zoznamy, nezamieňaj ich.
Kedy eskalovať
Prakticky nikdy — odovzdanie na študijné oddelenie je plnohodnotná odpoveď. Eskaluj len vtedy, keď klient tvrdí, že ho škola poslala späť na CKM, alebo keď nevie, kto mu preukaz vydal.
Operátorke odovzdaj: číslo preukazu a názov školy. Treba overiť, kto preukaz vydal a či ide o čipový alebo nečipový.
Čo agent netvrdí a čo si musí vypýtať
Dve veci, ktoré nepatria do žiadneho článku:
A. Otvorené otázky — veci, ktoré si archív protirečí alebo na ne odpoveď nemá. Agent ich nikdy netvrdí. Pri každej je napísané, čo povie namiesto toho. Čaká sa na rozhodnutie CKM — otázky sú v priloženom dokumente „Otázky pre CKM".
B. Povinné údaje — bez čoho agent nevie ani odpovedať, ani zmysluplne odovzdať operátorke. Táto časť je trvalá, nevyprší rozhodnutím CKM.
A. Otvorené otázky — čo agent netvrdí
Poradie podľa počtu dotknutých prípadov v archíve. Číslovanie sedí s dokumentom pre CKM, aby sa odpovede dali zapísať bez dohľadávania.
1. Starý bankový účet — je zrušený? (727 prípadov) — doriešené
Do 10/2025 sa posielal SK21 1100 0000 0026 6308 0127 (TATRSKBX), dnes SK07 1111 0000 0018 7848 5012 (UNCRSKBX). Banka raz platbu na starý účet odmietla ako zrušený účet. Agent: posiela vždy len nový účet. Starý účet je zrušený pri prechode na novú banku — platba naň sa vždy vráti odosielateľovi, k nám nepríde. Ak klient tvrdí, že zaplatil na starý účet, agent mu presne toto povie a nasmeruje ho na úhradu správneho účtu. → článok 0, Zaplatil som, ale nič sa nedeje
2. Kedy sa nahráva nové číslo karty do aplikácie (546 prípadov) — doriešené
Archív: „deň pred vypršaním". itic.sk: „v deň, keď končí platnosť starého preukazu". O deň sa to líši a klient môže prísť o zvyšok platnosti. Agent: ak už má klient v aplikácii vytvorenú registráciu, hovorí, nech číslo nového preukazu nahrá deň pred vypršaním platnosti toho starého — nie skôr aby mu platnosť plynule nadviazala.  Ak je to nový používateľ, ktorý číslo práve dostal, registráciu si môže vytvoriť hneď. → článok 24
3. Kto spravuje dopravnú a čipovú časť (118 prípadov) — doriešené
Podľa isic.sk ju poskytujú TransData a UBIAN spoločne. Support odkazuje raz na jedno, raz na druhé; v obehu boli tri adresy a dve telefónne čísla. Overené 25. 8. 2026: transcard.sk, preukazstudenta.sk aj ubian.azet.sk dnes presmerúvajú na ubian.sk/preukaz-studenta — je to jedna a tá istá služba, len pod novou značkou. Agent: používa výhradne kontakt +421 41 399 88 99 a www.ubian.sk/preukaz-studenta. Číslo 0905 384 092, +421 905 825 631 ani transcard.sk nepoužíva. → článok 4
4. Lehota vrátenia platby (87 prípadov) — doriešené
Súbežne 15, 14, 10 pracovných dní aj „2 týždne". Agent: uvádza lehotu 10 pracovných dní — vrátenie platby pri duplicitnej úhrade alebo pri zrušení preukazu prebieha do 10 pracovných dní na účet alebo kartu držiteľa. → článok 10
5. Zľava v Lidli — kedy zmizne z aplikácie a z webov (36 prípadov) — doriešené
Spolupráca skončila 31. 7. a v databáze zliav Lidl naozaj nie je (overené
4.   8. 2026 — 190 partnerov, Lidl medzi nimi nefiguruje). Aplikácia ju však stále
zobrazuje a rovnako aj weby CKM: itic.sk/zlava-v-lidl/ (7 %), euro26.sk/karta-euro/ („ročne ušetríš 180 €") a euro26.sk/karta-euro/26-pre-deti/ („7 % každý týždeň"). Klient sa teda môže odvolať na web a má pravdu, že tam je. Agent: povie, že spoluprácu s Lidlom sme ukončili k 31. 7. a že zľava by už mala byť zo stránok odstránená — ak ju klient ešte niekde vidí, ospravedlní sa, že ide o neaktuálnu verziu stránky. Klienta nespochybňuje. Ako náhradu môže ponúknuť zľavy Kosik.sk, Terno alebo Kraj potraviny. → článok 3
6. Aplikácia my EYC — fotka, prihlásenie, reset hesla (22 prípadov) — doriešené
Všetky návody k aplikácii, ktoré archív obsahuje, sú k aplikácii ISIC. Držitelia EURO<26 používajú my EYC a k tej v archíve nie je ani jeden návod. Agent: v my EYC vie fotku aj heslo vyriešiť sám: fotka sa mení v profile (z galérie alebo priamo odfotením v aplikácii), zabudnuté heslo sa rieši v profile → Zmena hesla alebo na úvodnej obrazovke cez Zabudnuté heslo, obnova príde na registračný e-mail. Pri nepotvrdenej registrácii treba skontrolovať spamový priečinok a potvrdiť ju na zadanom e-maile. Postup nie je rovnaký ako v aplikácii ISIC, kroky z nej sem už nepoužíva. → články 3, 13, 14
7. Má sa najprv overiť evidencia zo školy? (6 prípadov) — doriešené
Support striedavo tvrdí „nemáte platnú známku" aj „v systéme je všetko v poriadku", pričom skutočnou príčinou býva nezaevidovaná prolongácia zo strany školy. Agent: pri tomto príznaku vždy najprv pošle klienta overiť prolongáciu na školu — niektoré školy si známky objednávajú priamo cez Edupage a môže sa stať, že žiakovi známku odovzdajú, ale nezaklikne ju v systéme, takže sa neprejaví u nás v CRM. Najlepšie je, ak klient vie povedať, kde a u koho si známku objednal. Až potom agent eskaluje. → článok 1
8. Faktúra na zamestnávateľa (6 prípadov) — doriešené
V archíve nie je ani jedna odpoveď, ako sa faktúra vystavuje. Agent: potvrdí, že CKM faktúru na zamestnávateľa vystavuje. Vypýta si číslo objednávky, číslo preukazu a fakturačné údaje, na ktoré má byť faktúra vystavená, a odovzdá ich operátorke na vystavenie.
9. Cena pri prechode zo ZŠ na SŠ (5 prípadov) — doriešené
V hre boli 13 €, 26 € a 25,30 € za čipový preukaz cez školu. Cenník na ubian.sk/preukaz-studenta (overené 25. 8. 2026) to vysvetľuje: sú to dva rôzne preukazy žiaka — s vizuálom Ubian za 12,30 € a s vizuálom ISIC/EURO<26 za 25,30 €. Suma 13 € je cena samotnej licencie ISIC, teda známky. Agent: ceny uvádza z článku 0 a vždy povie, ktorý typ preukazu má na mysli. → článok 0, článok 5, článok 25
10. Cena SMS na predĺženie dopravy (4 prípady) — doriešené
V archíve 3,69 € aj 3,79 €, na starom článku isic.sk z roku 2019 dokonca 3 €. Cenník Ubianu, ktorý poplatok určuje, uvádza 3,69 € — „Predĺženie platnosti pre dopravu 3,69 €", rovnako pre oba typy preukazu žiaka (ubian.sk/preukaz-studenta, overené 25. 8. 2026). Agent: uvedie 3,69 € a zároveň druhý krok — priloženie preukazu k UNIterminálu. → článok 4
11. Dá sa zrušiť uhradená objednávka? (3 prípady) — doriešené
Support raz odmietne, inokedy zruší a vráti peniaze. Agent: zrušenie a vrátenie peňazí sľúbi len v troch prípadoch — nesprávne zakúpený duplikát preukazu, ten istý produkt omylom kúpený pre jedného držiteľa dvakrát, alebo prestup držiteľa na inú školu (vtedy sa vracia poplatok za licenciu). Mimo týchto prípadov sa platba nevracia podľa platných členských podmienok ktoré sú zverejnené v našom eshope na objednaj-preukaz.sk . Prijme žiadosť aj je to jeden z tych hore pripadov a eskaluje. → článok 21
12. Preukaz vydaný školou bez fotky (2 prípady) — doriešené, CKM potvrdilo 27. 8. 2026
isic.sk: „Preukaz bez fotografie je neplatný", náhradou je ISIC klasik alebo ISIC v mobile za 13 €. CKM toto potvrdilo ako štandardný postup. Agent: fyzický aj v aplikácii zobrazený preukaz musí mať fotografiu — bez nej sa ISIC v aplikácii nezobrazí. Ako riešenie ponúkne ISIC v mobile alebo klasik; pri čipových preukazoch cez ubian.sk sa fotografia nahráva už online pri objednávke alebo to rieši priamo škola. → článok 25
13. Zľava cez SheerID (Spotify a podobné) (1 prípad) — doriešené
Klientova škola nebola v zozname SheerID, systémová odpoveď v archíve nie je. Agent: potvrdí, že ak škola nie je v zozname SheerID, nárok nie je — ide o medzinárodnú zľavu, ktorej podmienky CKM neurčuje; stredné školy v SheerID väčšinou ani nie sú, zľava je určená najmä vysokoškolákom. Zľava na Spotify je navyše v databáze vedená len pre ISIC a len pre vysokoškolákov — pri ITIC a EURO<26 na ňu nárok nie je.
Nové z revízie webov 25. 8. 2026
Otázky 14–18 nevznikli z archívu, ale z toho, že si weby CKM protirečia navzájom. Sú v rovnakom režime ako vyššie: agent ich netvrdí.
14. Platí nečipový a mobilný ISIC na jednorazové zľavnené cestovné? — doriešené
isic.sk/akceptacia-isic-vo-verejnej-doprave/ a isic.sk/doprava-mhd-vlaky-autobusy-isic-euro26/ uvádzajú, že podľa §23 ods. 4 vyhlášky MD SR č. 269/2024 Z. z. sú od 1. 7. 2026 všetci dopravcovia povinní uznať platný ISIC vo fyzickej aj elektronickej forme (do 26 rokov). Eshop pri produktoch „Preukaz ISIC v mobile" a stránka isic.sk/isic-demo-aplikacia/súčasne tvrdia opak: „ISIC v mobile je akceptovaný na ISIC zľavy, ale nie na štátom poskytované zľavy vo verejnej doprave." Agent: rozpor je vyriešený v prospech isic.sk — od 1. 7. 2026 je platný ISIC v akejkoľvek forme, aj nečipový, aj v mobile, dostatočným dokladom aj na jednorazové zľavnené cestovné. O elektronickej peňaženke, kredite a električenke agent naďalej hovorí jasne, že potrebujú čip. Pri odmietnutí dopravcom podá postup aj s kontaktom na nás ak by u dopravcu nepochodil, reklamacia@ckmsyts.sk. Vetu „karty od CKM v doprave neplatia" už nepoužíva ako celok. → články 4, 15
15. Rozmer fotografie na preukaz ITIC klasik — doriešené
itic.sk/itic-klasik/ uvádza 28 × 34 mm, eshop pri tom istom produkte 25 × 32 mm. (ISIC 26 × 32 mm a EURO<26 20 × 33 mm sú jednotné.) Agent: pri ITIC uvádza rozmer 26 × 32 mm — rovnaký ako pri ISIC; oba pôvodné údaje (28 × 34 aj 25 × 32) boli nesprávne. → článok 14, článok 0
16. Prenesie sa nové číslo preukazu do Orangeu samo? — doriešené
Archív: nové číslo treba nahlásiť vždy. itic.sk/itic-v-mobile-caste-otazky/ aj euro26.sk/karta-euro/26-pre-deti/: ak si klient obnovil platnosť pred skončením platnosti súčasného preukazu, informácia sa prenesie automaticky. Agent: potvrdí, že ak sa preukaz obnoví pred vypršaním platnosti pôvodného, číslo sa do Orangeu prenesie automaticky a paušál pokračuje. Ak preukaz skončí a nový sa kúpi až po vypršaní platnosti, systém ho v Orangei nerozpozná — klient si číslo musí nahlásiť sám. ⚠️ OPRAVA (29. 8. 2026): dátum prechodu na O2 nie je 1. 9. 2027, ale **1. 9. 2026** — a do 31. 8. 2026 vrátane sa o tom nemá hovoriť vôbec. Presné znenie je v opravenom článku 23 a v sekcii "AKTUALIZÁCIA 1" nižšie — tie platia, toto pôvodné dátum je zastaraný preklep. → článok 23
17. Veková hranica pre Yoxo paušál — doriešené
Databáza zliav: „Ponuka platí pre držiteľov platných preukazov … vo veku od 16 rokov." euro26.sk/karta-euro/26-pre-deti/: „Paušál je podmienený platnou kartou EURO<26, nie vekom." Agent: potvrdí, že Yoxo paušál nemá vekovú hranicu — platí pre všetkých držiteľov platného preukazu ISIC, ITIC alebo EURO<26 vydaného na Slovensku, vrátane maloletých. → článok 23
18. Platí karta EURO<26 po zmene priezviska? — doriešené
euro26.sk/caste-otazky-2/: „Ak sa ti zmenilo priezvisko, karta už nie je platná, ale na požiadanie ti vystavíme duplikát s novým priezviskom." Archív pri ISIC-u odpovedá, že preukaz meniť netreba. Agent: pri ISIC a ITIC ostáva pri doterajšej odpovedi; potvrdené — karta EURO<26 po zmene priezviska naďalej platí, informácia na euro26.sk bola nesprávna. Držiteľ karty EURO<26 si priezvisko upraví sám priamo v aplikácii. → článok 18
Vyriešené — už sa nepýtame
Tieto boli otvorené a doriešili sa z webov CKM alebo z ubian.sk. Sú zapracované v článkoch, tu ostávajú len ako záznam, odkiaľ hodnota pochádza.
--TABLE START--
bolo otvorené | rozhodnuté | zdroj
Nárok na ITIC pri úväzku presne 18 h | min. 18 h — nárok je, plus vetvy pre dôchodcov (1 h) a materskú | itic.sk/narok-na-preukaz-itic
Sezóna prolongačnej známky | 09/2027, ITIC 12/2027 | eshop objednaj-preukaz.sk
Je preukaz v mobile rovnocenný s plastom | áno | isic.sk
Podnet na nového zľavového partnera | formulár https://isic.sk/kontaktny-formular/   | isic.sk
(otázka 3) Transcard vs. Ubian | jedna služba — transcard.sk aj preukazstudenta.sk presmerúvajú na ubian.sk | ubian.sk
(otázka 9) Cena čipového preukazu cez školu | 12,30 € vizuál Ubian / 25,30 € vizuál ISIC/EURO<26; 13 € je licencia ISIC | ubian.sk/preukaz-studenta
(otázka 10) Cena predĺženia dopravy | 3,69 € | ubian.sk/preukaz-studenta
Nárok na ISIC — hodiny, vek, doklad | 15 h/týždeň, od 6 rokov, bez hornej hranice, potvrdenie o zápise | isic.sk/narok-na-preukaz-isic
Známka ITIC — len kuriérom? | nie — aj elektronická, aj vyzdvihnutie na škole (jún, sept., okt.) | eshop objednaj-preukaz.sk
Je objednaj-preukaz.sk/overenie/ platný odkaz | nie, 404 — overenie je krokom pri produkte – nemôzeme mat overenie platnosti otvorene na weboch bolo by to prosit gdpr  | objednaj-preukaz.sk
--TABLE END--
Otázky 3, 9 a 10 ostávajú v časti A pod svojimi číslami, aby číslovanie ďalej sedelo s dokumentom pre CKM — sú tam označené ako doriešené. Pri ďalšej revízii priloženom dokumente „Otázky pre CKM" ich vypusti a doplň otázky 14–18.
B. Čo si agent musí vypýtať od klienta
Agent nemá prístup do systému. Bez týchto údajov nevie ani odpovedať, ani zmysluplne eskalovať. Zbiera ich vždy pred odovzdaním operátorke.
B1. Univerzálne minimum
Pri každej eskalácii aspoň jedno z:
•    číslo preukazu v tvare S421… / T421… / E421… aj s koncovým písmenom
•    celé meno na preukaze a dátum narodenia — keď klient číslo nevie
B2. Podľa témy
--TABLE START--
téma | čo si vypýtať
Prihlásenie do aplikácie | číslo karty, meno, e-mail použitý na prihlásenie
Aplikácia nefunguje | číslo karty, e-mail, model telefónu a verzia systému
Nahranie čísla do aplikácie | staré aj nové číslo karty, e-mail
Predĺženie preukazu | aký preukaz chce (do mobilu / plast), či sa mu zmenila škola
Platobné údaje | meno, číslo karty, typ preukazu
Platba sa nespárovala | číslo objednávky, dátum a spôsob platby, suma, doklad o úhrade
Vrátenie peňazí | číslo objednávky, IBAN (pri platbe kartou netreba), dôvod
Faktúra na zamestnávateľa | číslo objednávky a fakturačné údaje zamestnávateľa
Neprišlo číslo karty | celé meno na preukaze, dátum narodenia, e-mail
Zmena údajov | číslo preukazu, ktorý údaj a nová hodnota; pri adrese aj telefón pre kuriéra
Nedoručená známka | číslo objednávky, doručovacia adresa, telefón pre kuriéra
Nárok na ITIC | názov školy a týždenný úväzok — bez toho sa objednávka nespracuje
Zapojenie školy | presný názov a adresa školy, čo zobrazil eshop
Zľava u partnera | ktorý partner, čo klient urobil, čo mu appka zobrazila
Strata a duplikát | číslo preukazu a kto ho vydal — škola alebo CKM
Zrušenie objednávky | číslo objednávky, dôvod, či je uhradená
Eshop neoverí | priezvisko, číslo preukazu, čo eshop zobrazil
Operátor zrušil paušál | číslo preukazu, meno, ktorý operátor
--TABLE END--
B3. Otázky, ktoré rozhodujú o vetve
Nie sú to údaje na eskaláciu, ale otázky, po ktorých agent vie odpovedať sám. Ak z e-mailu nevie určiť vetvu, položí práve jednu z nich — nie všetky naraz.
•    Aký preukaz máte — čipový od školy, nečipový, alebo do mobilu? Rozhoduje o tom, či sa predlžuje známkou alebo novým preukazom.
•    Máte na preukaze zo školy logo ISIC? Škola vydáva aj preukaz žiaka s vizuálom Ubian, ktorý licenciu ISIC neobsahuje — má dopravu a školské systémy, ale žiadne komerčné zľavy a známku naň kúpiť nemožno. Rozhoduje pri „preukaz mi funguje v autobuse, ale v obchode nie". Môže si ale dokúpiť ISIC KLASIK ABY MAL AJ ZĽAVOVÉ BENEFITY
•    Ste ešte študentom tej istej školy? Pri prechode zo strednej na vysokú sa známka kúpiť nedá.
•    Ktorú aplikáciu používate — ISIC alebo my EYC? Najčastejšia zámena pri problémoch s prihlásením.
•    Máte zakúpenú známku na aktuálnu sezónu? Rozhoduje pri väčšine problémov s aplikáciou a so zľavami.
•    Platili ste kartou alebo prevodom? Rozhoduje pri nespárovanej platbe aj pri vrátení peňazí.
Ako s týmto súborom pracovať
Keď CKM niečo z časti A rozhodne, odpoveď sa zapíše do príslušného článku alebo do článku „Cenník a údaje" a položka sa odtiaľto presunie do tabuľky „Vyriešené". Časť A má vyprázdňovať, nie rásť. Časť B je trvalá.
 [DVCS1]akekolvek podnety dostaneme a bot nevie odpovedat idealne vsetko smerovat na vyplnenie tohto formulara https://isic.sk/kontaktny-formular/  ziadny iny uz pouzivat nebudeme
 [KM2]Niekdy má študent zakúpenú červenú známku NO ISIC a vtedy nie je možné využívať aplikáciu ale aj napriek tomu sa tam snaží prihlásiť.
 [KM3]EURO<26 sa nikdy nepredlžuje známkou, vždy sa zakupuje nová virtuálna karta alebo plastová karta domov na adresu. 
 [KM4]Do objednávky zadáte Vaše priezvisko, číslo súčasnej karty, systém Vás overí a vystaví kartu s nadväzujúcou platnosťou.
 [KM5]Ak klient nevie či má čipový preukaz jednoducho to vie rozoznať, či mu končí platnosť  k  9/2027 isic alebo 12/2027 ITIC - tu ide o čipové preukazy, nečipové preukazy končia počas celého roka.
 [KM6]AK ste študentom denného štúdia požiadate si o preukaz ISIC cez UBIAN alebo Vašu VŠ a následne viete využívať aj dopravnú funkcionalitu.
 [MS7]

---

# AKTUALIZÁCIA 1 — finálne rozhodnutia CKM SYTS (dokument "Otázky pre CKM final 27-8-26" +
# komentáre v "Zmeny v článkoch", 27.–29. 8. 2026)

Toto nahrádza všetky staré odkazy na "otvorené otázky" vyššie v tomto súbore — CKM medzičasom na
všetkých 18 pôvodných otvorených otázok odpovedalo. Register "A. Otvorené otázky — čo agent
netvrdí" (niekde vyššie v tomto súbore) je už **neplatný v celom rozsahu** — nižšie sú finálne,
záväzné odpovede. Kde je nižšie uvedená odpoveď v rozpore s vetou vyššie v článkoch, platí VŽDY
odpoveď tu.

## ⛔ Najdôležitejšie — časovo podmienené pravidlo o Orangei/O2 (pozri aj opravený článok 23 vyššie)

Toto je presne to, čo sa nedávno stalo zle v nasadenom chate, tak nech je to úplne jasné:

- **Prechod je 1. 9. 2026, nie 1. 9. 2027.** Spolupráca s Orangeom končí 31. 8. 2026 o 23:59.
- **Do 31. 8. 2026 vrátane agent o O2 ani o prechode z Orangeu nesmie hovoriť vôbec** — ani
  nepriamo, ani na priamu otázku. Odpovedá neutrálne ("na paušále sa z našej strany nič nemení,
  o zmenách budeme informovať vopred") a v prípade potreby eskaluje.
- **Od 1. 9. 2026 ráno** už agent komunikuje voľne — landing page je `isic.sk/o2`, existujúce
  paušály Orange/Yoxo dobehnú do konca platobného obdobia/viazanosti a CKM ich ďalej nespravuje;
  platnosť preukazu sa zmenou partnera nemení. Orientačné ceny O2 ponuky sú priamo v článku 23.
- K 31. 8. 2026 23:59 CKM zároveň vypína Orangeu online overovanie platnosti preukazov.

**Pre webchat, ktorý beží nepretržite, to znamená:** ak má chat aj systémový dátum (nie len tento
súbor), musí si vedieť porovnať dnešný dátum s 31. 8. 2026 a podľa toho prepnúť správanie. Ak taký
mechanizmus Lovable/AI vrstva nevie zaručiť spoľahlivo, bezpečnejšie je **do 1. 9. 2026 ručne
vypnúť v chate akúkoľvek zmienku o Orangei/O2** (napr. dočasne odstrániť príslušnú vetvu z
promptu) a až po 1. 9. 2026 ju vrátiť naspäť s opraveným dátumom.

## Ostatné finálne odpovede CKM (nahrádzajú predchádzajúce "otvorené otázky")

- **Starý bankový účet** (SK21 1100 0000 0026 6308 0127) **je zrušený** — prechod na inú banku.
  Platba naň sa vždy vráti odosielateľovi, nikdy k nám nepríde. Agent posiela vždy len nový účet
  (SK07 1111 0000 0018 7848 5012, UNCRSKBX).
- **Nové číslo preukazu do aplikácie**: ak už má klient v appke registráciu, nahráva nové číslo
  **deň pred vypršaním platnosti** starého (nie skôr, inak príde o zvyšok platnosti). Nový
  používateľ, ktorý číslo práve dostal, sa môže zaregistrovať hneď.
- **Lehota vrátenia platby: 10 pracovných dní** na účet alebo kartu držiteľa — záväzné, ostatné
  lehoty v archíve (14/15 dní, "2 týždne") už neplatia.
- **Zľava v Lidli**: definitívne skončila k 31. 7. 2026, z isic.sk je už odstránená. Ako náhradu
  agent ponúka Kosik.sk, Terno alebo Kraj potraviny.
- **Aplikácia my EYC (EURO<26)** — potvrdený postup: fotka sa mení v profile (nahratie z galérie
  alebo priame odfotenie v appke); zabudnuté heslo cez profil → Zmena hesla, alebo na úvodnej
  obrazovke cez "Zabudnuté heslo" (obnova príde na registračný e‑mail); nepotvrdená registrácia
  sa rieši kontrolou spamu a potvrdením na zadanom e‑maile. **Tento postup je iný než v aplikácii
  ISIC** — kroky z appky ISIC sa do my EYC nepoužívajú. Chat už teda držiteľov EURO<26 pri fotke,
  hesle a registrácii nemusí automaticky eskalovať.
- **Nezaevidovaná prolongácia zo školy**: keď klient tvrdí, že známku má, a systém ju napriek
  tomu nevidí, agent ho má **najprv poslať overiť u školy** (niektoré tzv. hotovostné školy
  objednávajú známky cez Edupage a môžu zabudnúť zakliknúť prolongáciu, čo sa k nám neprenesie).
  Najlepšie je, ak klient vie povedať, kde a u koho si známku objednal — až potom eskalácia.
- **Faktúra na zamestnávateľa**: CKM ju vystavuje na vyžiadanie. Agent si vypýta číslo objednávky,
  číslo preukazu a fakturačné údaje, na ktoré má byť faktúra vystavená, a odovzdá operátorke.
- **Zrušenie uhradenej objednávky** — vracia sa len v troch prípadoch: nesprávne zakúpený duplikát
  preukazu, ten istý produkt omylom kúpený pre jedného držiteľa dvakrát, alebo prestup na inú
  školu (vtedy sa vracia len poplatok za licenciu). Mimo týchto troch sa uhradená objednávka
  nezrušuje.
- **Preukaz vydaný školou bez fotky**: fyzický aj v aplikácii zobrazený preukaz musí mať
  fotografiu, inak sa v appke nezobrazí. Náhrada je ISIC klasik alebo ISIC v mobile za 13 €.
- **Zľava cez SheerID (napr. Spotify)**: platí len pre ISIC a len pre vysokoškolákov — stredné
  školy v SheerID prevažne nie sú, ITIC a EURO<26 na túto zľavu nárok nemajú.
- **Jednorazové zľavnené cestovné s nečipovým/mobilným ISIC**: platí na 100 %, oficiálne
  stanovisko `isic.sk/akceptacia-isic-vo-verejnej-doprave/` je záväzné a úplné.
- **Rozmer fotografie ITIC klasik: 26 × 32 mm** (rovnaký ako ISIC) — záväzne potvrdené.
- **Prenos čísla do Orangeu/O2**: automaticky sa prenesie len vtedy, ak sa preukaz obnoví **pred**
  vypršaním platnosti pôvodného. Ak preukaz najprv vyprší a nový sa kúpi až potom, systém ho
  nerozpozná — číslo treba operátorovi nahlásiť ručne.
- **Yoxo/O2 paušál nemá vekovú hranicu** — údaj "od 16 rokov" v databáze zliav je chybný, platí
  len požiadavka na platný preukaz (ISIC už od 6 rokov).
- **Karta EURO<26 po zmene priezviska naďalej platí** — priezvisko si držiteľ upraví sám v
  aplikácii. Pri ISIC a ITIC klient zmenu nahlási CKM, tá údaje upraví a zmena sa prenesie aj do
  aplikácie. (Stránka `euro26.sk/caste-otazky-2/` toto ešte na webe tvrdí opačne — pozri nižšie.)
- **Duplikát čipového preukazu ISIC/EURO<26 zo ZŠ/SŠ cez Ubian: 12,30 €** — potvrdená finálna
  cena duplikátu (nie cena nového preukazu s vizuálom Ubian, ako bola predtým pochybnosť).
- **Duplikát čipového ITIC zo ZŠ/SŠ vybavuje priamo UBIAN.** Duplikát čipového ITIC z VŠ vybavuje
  daná univerzita, kde pedagóg pracuje — nie UBIAN.
- **`reklamacia@ckmsyts.sk` OSTÁVA samostatná adresa** (na reklamácie u dopravcov) — nezjednocuje
  sa pod `klientskyservis@ckmsyts.sk`. V `2_Smerovanie_dopytov_a_emaily.md` sa teda nič nemení,
  táto adresa ostáva presne tak, ako je.
- **`sspreukazy@` a `VSpreukazy@` ostávajú tiež oddelené** ako interné smerovanie pre otázky o
  zapojení školy — aj tu teda platí pôvodná smerovacia tabuľka bez zmeny.
- **Duplikát preukazu**: vyrába sa s platnosťou pôvodného preukazu (nie s novou). Na vytlačenej
  známke môže byť ešte pôvodný dátum, čo však nemení nič na skutočnej platnosti preukazu — držiteľ
  sa vie preukázať v ISIC aplikácii. Na aktiváciu dopravnej časti treba duplikát priložiť k
  terminálu (rovnako ako pri bežnom predĺžení).
- **Dobierka** (platba do rúk kuriéra) **existuje, ale len pri telefonickom predaji** (keď CKM
  klienta obvoláva) — **na eshope táto možnosť nie je**. Na eshope sú len platba kartou alebo
  bankovým prevodom, obe za 16,15 € (13 € preukaz + 3,15 € kuriér). Pri telefonickom predaji na
  dobierku je cena 13 € + poštovné/dobierkový poplatok cca 5 € = **18 €** spolu.
- **Vyzdvihnutie známky/preukazu na škole**: možné v júni, septembri a októbri (na vybraných
  školách). Preukazy aj známky sa doručujú buď na školu, alebo domov — podľa toho, ako si to škola
  nastaví v portáli UBIAN. Kupónové knižky sa doručujú na školy, kde ich kontaktné osoby odovzdajú
  žiakom spolu so známkou alebo preukazom.
- **Ceny predĺženia dopravy (3,69 €) aj rozdiel Ubian‑vizuál (12,30 €) vs. ISIC/EURO<26‑vizuál
  (25,30 €)** — obe potvrdené ako záväzné, cenu určuje UBIAN/škola, nie CKM.

Toto som dodatočne overila aj priamym načítaním webov (nie len z interných dokumentov CKM). Väčšina
faktov v tejto dátovej banke sedí s tým, čo je aktuálne naživo. Nižšie sú ale konkrétne miesta,
kde sa **živý web ešte líši od toho, čo má AI chat tvrdiť** — chat sa má vždy riadiť touto dátovou
bankou (vyššie), nie tým, čo prípadne "vie" o obsahu týchto stránok, lebo časť z nich je
preukázateľne neaktuálna.

# AKTUALIZÁCIA 2 — overené naživo na isic.sk, itic.sk, euro26.sk a ubian.sk (29. 8. 2026)

## ⚠️ Rozpory medzi živým webom a správnou odpoveďou — chat nemá preberať text z webu

1. **Zľava v Lidli sa na euro26.sk stále aktívne propaguje ako dôvod na kúpu karty**, hoci
   spolupráca skončila 31. 7. 2026. Konkrétne:
   - `euro26.sk/karta-euro/` — "🛍️ Nákup v Lidli: ročne ušetríš 180 €" je stále v hlavnom
     "koľko ušetríš" bloku.
   - `euro26.sk/karta-euro/26-pre-deti/` — "Zľava 7% na nákup v Lidli každý týždeň" a "🛍️ Nákup v
     Lidli: ročne ušetríte min. 350 €" sú tam tiež stále.
   - `itic.sk/zlava-v-lidl/` je už čiastočne opravená — telo stránky je vyprázdnené a má nový
     obrázok s názvom súboru "Lidl-ukoncenie-spoluprace", ale nadpis a meta popis stránky ("Zľava
     ITIC so 7 % zľavou v predajniach Lidl") ešte nie sú prepísané.
   → **Chat nikdy netvrdí, že zľava v Lidli platí**, ani keby to "videl" na euro26.sk. Drží sa
   odpovede v článku 3 (spolupráca skončila 31. 7. 2026, náhrada Kosik.sk/Terno/Kraj potraviny).

2. **`euro26.sk/caste-otazky-2/` stále tvrdí, že karta EURO<26 po zmene priezviska prestáva
   platiť** ("karta už nie je platná, ale na požiadanie ti vystavíme duplikát s novým
   priezviskom"). Toto je presne tá veta, ktorú CKM v internej revízii označilo za nesprávnu —
   podľa oficiálne potvrdenej odpovede karta po zmene priezviska **naďalej platí** a priezvisko si
   držiteľ upraví sám v aplikácii. → Chat používa článok 18, nie text z tejto FAQ stránky.

3. **`isic.sk/isic-demo-aplikacia/` stále obsahuje starú, už neplatnú vetu** o preukaze ISIC v
   mobile: *"je akceptovaný na ISIC zľavy, ale nie na štátom poskytované zľavy vo verejnej
   doprave"*. Od 1. 7. 2026 to neplatí — platný ISIC v akejkoľvek forme (aj nečipový, aj v mobile)
   je dostatočným dokladom aj na jednorazové zľavnené cestovné (potvrdené naživo aj na
   `isic.sk/akceptacia-isic-vo-verejnej-doprave/`, ktorá je už plne v súlade s novým pravidlom).
   → Chat sa riadi článkom 4/15, nie touto staršou vetou.

4. **`isic.sk/ako-si-obnovit-platnost-preukazu/`** — odsek o VŠ ISIC známke stále píše "(aktuálne
   09/2024)", hoci ZŠ/SŠ známka aj ITIC známka na tej istej stránke už majú správne sezóny
   (09/2027, resp. 12/2027) a aj sprievodný obrázok súboru je už pomenovaný "09-2027". Ide o
   preklep/zabudnutú opravu jednej vety. → Chat vysokoškolákovi hovorí sezónu 09/2027, nie 09/2024.

5. **`itic.sk/itic-klasik/`, `itic.sk/univerzitny-itic/` a `itic.sk/stredoskolsky-itic/` stále
   uvádzajú cenu cestovného poistenia "Istotka!" 13,5 €.** CKM už toto potvrdilo ako chybu — **správna
   cena je 44 €** (variant ŠPORT 67 €), presne tak, ako je to v častých otázkach, v eshope a v
   databáze zliav. → Chat pri otázke na cenu poistenia Istotka! uvádza **44 € (ŠPORT 67 €)**, nikdy
   nie 13,5 €, aj keby to tak ešte videl na `itic.sk/itic-klasik/`.

6. **Staré formuláre na návrh zľavy sú stále živé a nesmerujú na nový kontaktný formulár:**
   `isic.sk/navrh-na-zlavu/` aj `euro26.sk/navrh-na-zlavu/` fungujú ako samostatné formuláre.
   Časť menu odkazov na weboch ("Chcem novú zľavu") na ne ešte odkazuje namiesto na
   `isic.sk/kontaktny-formular/` — konkrétne stránka `isic.sk/zlavy-na-slovensku/`,
   `isic.sk/isic-demo-aplikacia/` a celý web euro26.sk stále vedú na starý formulár; stránky
   `isic.sk/narok-na-preukaz-isic/`, `isic.sk/akceptacia-isic-vo-verejnej-doprave/`,
   `isic.sk/ako-si-obnovit-platnost-preukazu/`, `isic.sk/yoxopausal/` a celý itic.sk už správne
   vedú na nový formulár. Toto je vec na opravu na weboch, nie na novej Lovable stránke — chat aj
   nová stránka majú byť dôsledné a vždy smerovať len na `isic.sk/kontaktny-formular/`.

## 🔒 Bezpečnostné zistenie — netýka sa obsahu chatu, treba nahlásiť IT/CKM

CKM vo finálnom dokumente potvrdzuje, že `objednaj-preukaz.sk/overenie/` bola **zámerne odstránená**
z webu (aby overenie platnosti na tomto mieste už nebolo možné, kvôli GDPR) a že vracia 404 — treba
už len opraviť odkazy, ktoré na ňu ešte vedú (navigácia na itic.sk, časté otázky na isic.sk). Pri
mojom vlastnom načítaní tejto adresy 29. 8. 2026 sa mi ale **nezobrazila chyba 404** — stránka sa
načítala aj s pôvodným formulárom na overenie preukazu, ale hneď za ním bol vložený rozsiahly
propagačný text o online kasíne ("Zodiac Casino"), ktorý s ISIC/CKM nijako nesúvisí. To je v
rozpore s tým, čo CKM eviduje (že stránka je mŕtva), a vyzerá to na vložený cudzí/spamový obsah
(napr. kompromitovaný plugin, cache, alebo znovu-oživená zabudnutá URL adresa zneužitá niekým
iným). **Odporúčam dať to čo najskôr priamo skontrolovať niekomu, kto spravuje
objednaj-preukaz.sk** — nezávisle od tejto úlohy s Lovable formulárom, ideálne čo najskôr.

## ⚠️ Čísla, ktoré chat nemá citovať ako isté

CKM vo finálnom dokumente výslovne hovorí, že **počty partnerov a zliav sa na jednotlivých weboch
nezhodujú** (rôzne podstránky uvádzajú 700/1 300/2 100/2 200 miest a 50 000/110 000/150 000 zliav)
a že **agent tieto čísla zámerne necituje**. Jediné číslo, ktoré CKM považuje za spoľahlivé, je
interné: k 25. 8. 2026 databáza zliav obsahuje **190 partnerov, 229 aktívnych zliav a 1 333
prevádzok** (je to už v článku "Zľavy u partnerov" vyššie) — toto chat môže použiť, ale žiadne iné
"okrúhle" marketingové číslo z jednotlivých landing pages (napr. "40 000 držiteľov", "2200+ miest")
nepoužívaj ako fakt, ani na hero sekciu novej stránky.

## Ďalšia vec na opravu na weboch (netýka sa chatu)

Doména `ckmsyts.sk` má podľa CKM nesprávny SSL certifikát (server posiela `*.r2.websupport.sk`) a
nenačíta sa v prehliadači — stojí za nahlásenie IT, nezávisle od tejto úlohy.

## ✅ Fakty, ktoré overenie naživo len potvrdilo (žiadna zmena netreba)

- Ceny 13 € (preukaz/karta/známka) + 3,15 € kuriér — potvrdené priamo v eshope na produkte
  "ISIC klasik" aj na euro26.sk ("13 € na rok + 3,15 € doručenie").
- Doprava — oficiálne stanovisko na `isic.sk/akceptacia-isic-vo-verejnej-doprave/` je už plne
  v súlade s pravidlom platným od 1. 7. 2026 (ISIC v akejkoľvek forme stačí na jednorazové
  zľavnené cestovné); pri neuznaní odkazuje na `reklamacia@ckmsyts.sk`.
- Rozdiel preukazu žiaka s vizuálom Ubian (12,30 €, len doprava a škola) vs. s vizuálom
  ISIC/EURO<26 (25,30 €, aj komerčné zľavy) — potvrdené priamo na `ubian.sk/preukaz-studenta`
  tabuľkou s rovnakými sumami ako v tejto dátovej banke.
- ITIC klasik: fotografia 26×32 mm, cena 13 € — potvrdené na `itic.sk/itic-klasik/` (počet zliav
  na tejto aj ďalších stránkach sa medzi webmi líši — pozri nižšie, prečo ho chat nemá citovať).
- EURO<26 platí v 36 krajinách Európy — táto informácia sa medzi stránkami zhoduje, na rozdiel od
  počtu miest/partnerov a počtu držiteľov, ktoré sa líšia (pozri nižšie).
- Kontakt na zľavy cez preukaz zo školy (Ubian): `sspreukazy@ckmsyts.sk` / `VSpreukazy@ckmsyts.sk`,
  telefóny +421 948 884 304 / +421 948 827 097 — presne sedí s tabuľkou kontaktov v tejto banke.
- Egocard (zľavová karta pre preukaz s vizuálom Ubian): potvrdené, že je automatická,
  viazaná na predĺženie dopravnej zľavy, kontakt `info@egocard.eu` — sedí s článkom v tejto banke.

## Doplnok — verejné UNIterminály (plný zoznam z ubian.sk, k doplneniu do článku 4/19)

Banská Bystrica (Ulica 29. augusta, hlavná ŽST), Bratislava (Hodžovo námestie 1, predajňa DPB;
druhé miesto na Hl. stanici je dočasne zrušené), Košice (Bardejovská 373/6 a Rooseveltova 798/3 —
DPMK; Staničné námestie 1459 — ŽST), Liptovský Mikuláš (Evanjelická spojená škola), Nitra
(Gymnázium Golianova 68), Poprad (Železničná 4423, ŽST), Prešov (Weberova 6967/2 a Masarykova 26 —
DPMP; Zemplínska 9 — OC Opál), Ružomberok (Knižnica Katolíckej univerzity), Trenčín (Trenčianska
univerzita, budovy B a C), Trnava (Kollárova, ŽST), Zvolen (Technická univerzita), Žilina (Hlavná
ŽST).

*Overené priamym načítaním webov 29. 8. 2026. Ak sa niektorá zo stránok medzičasom opraví, táto
sekcia sa dá skrátiť/vymazať — hlavný obsah dátovej banky (články vyššie) zostáva zdrojom pravdy.*
