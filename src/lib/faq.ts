export interface FaqItem {
  question: string;
  answer: string;
}

/** Skrátené odpovede podľa dátovej banky CKM SYTS (verzia 25. 8. 2026). */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Nedá sa mi prihlásiť do aplikácie, píše že preukaz nie je platný",
    answer:
      "Najčastejšia príčina je chýbajúca známka na aktuálnu sezónu — aplikácia pustí dnu len platný preukaz. Skontrolujte, či máte uhradené predĺženie na tento školský rok a či ste zadali číslo preukazu presne tak, ako je vytlačené na karte. Ak platba prebehla a preukaz je stále neplatný, vyplňte prosím formulár nižšie, potrebujeme sa pozrieť do Vášho účtu.",
  },
  {
    question: "Ako si predĺžim preukaz na ďalší rok?",
    answer:
      "Preukaz ISIC zo školy predlžuje škola alebo si známku objednáte cez eshop, ISIC/ITIC a kartu EURO<26 z eshopu predĺžite objednávkou známky na objednaj-preukaz.sk. Známka aj karta stoja 13 €, doručenie kuriérom 3,15 €. Po zaplatení sa platnosť prejaví v aplikácii, dopravnú zľavu treba navyše priložiť k terminálu.",
  },
  {
    question: "Zaplatil som, ale nič sa nedeje",
    answer:
      "Platba medzi bankami sa spracováva zvyčajne 1 až 2 pracovné dni, pri víkende dlhšie. Kým sa neprihlási na náš účet, systém o nej nevie a preukaz sa netvári ako predĺžený. Ak od úhrady prešlo viac ako pár pracovných dní, pošlite nám cez formulár nižšie potvrdenie o úhrade.",
  },
  {
    question: "Nestihol som zaplatiť do termínu, platia ešte platobné údaje?",
    answer:
      "Áno. Variabilný symbol aj číslo účtu ostávajú platné aj po termíne — platbu môžete uhradiť neskôr a spáruje sa. Spracovanie po termíne však môže trvať dlhšie.",
  },
  {
    question: "Preukaz mi nefunguje v doprave",
    answer:
      "Predĺženie dopravnej zľavy má dva kroky: uhradiť poplatok a potom priložiť preukaz k terminálu (UNIterminál alebo označovač dopravcu), aby sa nahral na čip. Kým preukaz nepriložíte, čip stále nesie starú platnosť. Zoznam verejných UNIterminálov nájdete na ubian.sk.",
  },
  {
    question: "Je moja škola zapojená a aký preukaz si mám objednať?",
    answer:
      "Ak škola preukazy vydáva, dostanete čipový preukaz cez školu — používa sa aj na dochádzku, stravu a dopravu. Ak škola zapojená nie je, objednáte si nečipový preukaz cez eshop objednaj-preukaz.sk; ten platí na zľavy, no nie na školské a čipové funkcie.",
  },
  {
    question: "Zľava alebo kupón sa mi neuplatnili",
    answer:
      "Kupóny nájdete priamo v aplikácii pri konkrétnej zľave — treba ich zobraziť alebo aktivovať pred platbou, po zaplatení sa zľava spätne doplniť nedá. Podmienky zliav sa menia, preto vždy platí aktuálne znenie v aplikácii. Ak Vám zľavu neuznali napriek platnému preukazu, vyplňte formulár nižšie a priložte bloček.",
  },
  {
    question: "Stratil som preukaz, ako získam duplikát?",
    answer:
      "Postup závisí od toho, kto preukaz vydal. Preukaz zo školy rieši škola, preukaz z eshopu si objednáte znova na objednaj-preukaz.sk. Stratu odporúčame nahlásiť, aby sa pôvodný preukaz nedal zneužiť.",
  },
  {
    question: "Mám vôbec nárok na preukaz?",
    answer:
      "ISIC je pre študentov denného štúdia (ZŠ, SŠ, VŠ), ITIC pre učiteľov a pedagogických či odborných zamestnancov škôl, EURO<26 pre kohokoľvek od 6 do 27 rokov bez ohľadu na štúdium. Nárok si viete overiť na isic.sk/narok-na-preukaz-isic/ alebo itic.sk/narokomat/.",
  },
  {
    question: "Mám ako učiteľ nárok na ITIC?",
    answer:
      "ITIC je určený pedagogickým a odborným zamestnancom škôl so zodpovedajúcim úväzkom na škole zaradenej v sieti škôl. Presné podmienky a nárokomat nájdete na itic.sk/narok-na-preukaz-itic/.",
  },
  {
    question: "Neviem číslo svojho preukazu",
    answer:
      "Číslo je vytlačené priamo na preukaze a začína sa písmenom S (ISIC), T (ITIC) alebo E (EURO<26) a číslicami 421. Nájdete ho aj v aplikácii pri zobrazení preukazu alebo v potvrdzujúcom e-maile z objednávky.",
  },
  {
    question: "Operátor mi zrušil študentský paušál",
    answer:
      "Na študentský paušál treba mať platný preukaz a nahlásený u operátora — po skončení platnosti alebo bez nahlásenia ho operátor zruší. Po predĺžení preukazu nárok operátorovi opäť preukážte podľa jeho postupu.",
  },
];
