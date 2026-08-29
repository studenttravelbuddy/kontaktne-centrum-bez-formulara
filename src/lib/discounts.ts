export type DiscountCategory =
  | "doprava"
  | "tech"
  | "nakupy"
  | "cestovanie"
  | "kultura"
  | "sport"
  | "vzdelavanie"
  | "zdravie"
  | "jedlo";

export interface Discount {
  name: string;
  perk: string;
  category: DiscountCategory;
  href: string;
  /** Zobrazuje sa v úvodnom výbere TOP zliav. */
  top?: boolean;
  /** Trieda pozadia dlaždice (dizajnové tokeny). */
  tone: "teal" | "yellow" | "pink" | "orange";
}

export const DISCOUNT_CATEGORIES: { id: DiscountCategory; label: string }[] = [
  { id: "doprava", label: "Doprava" },
  { id: "tech", label: "Tech a mobil" },
  { id: "nakupy", label: "Nákupy" },
  { id: "cestovanie", label: "Cestovanie" },
  { id: "kultura", label: "Kultúra a zábava" },
  { id: "sport", label: "Šport" },
  { id: "vzdelavanie", label: "Vzdelávanie" },
  { id: "zdravie", label: "Zdravie a krása" },
  { id: "jedlo", label: "Jedlo a káva" },
];

export const DISCOUNTS: Discount[] = [
  // TOP výber
  {
    name: "O2 MAXX",
    perk: "Výhodný mobilný paušál pre držiteľov preukazu — dáta, volania a bonusy navyše",
    category: "tech",
    href: "https://www.o2.sk/ponuka/mobilne-sluzby/novy-o2-pausal",
    tone: "teal",
    top: true,
  },
  {
    name: "Vlaky a autobusy",
    perk: "Zľavnené cestovné pre žiakov a študentov s dopravným čipom na preukaze",
    category: "doprava",
    href: "https://www.ubian.sk/preukaz-studenta",
    tone: "yellow",
    top: true,
  },
  {
    name: "Poistenie Union",
    perk: "Cestovné poistenie za zvýhodnené ceny k preukazom CKM SYTS",
    category: "cestovanie",
    href: "https://www.union.sk/poistenie-k-studentskym-kartam-ckm-syts/",
    tone: "pink",
    top: true,
  },
  {
    name: "Panta Rhei",
    perk: "Zľavy na knihy, papiernictvo a školské potreby",
    category: "nakupy",
    href: "https://www.pantarhei.sk/",
    tone: "orange",
    top: true,
  },
  {
    name: "Samsung Extra",
    perk: "Študentské ceny na mobily, tablety a elektroniku",
    category: "tech",
    href: "https://www.samsungextra.sk/",
    tone: "teal",
    top: true,
  },
  {
    name: "Zľavy v zahraničí",
    perk: "Vyše 150 000 zliav v 130 krajinách sveta s preukazom ISIC",
    category: "cestovanie",
    href: "https://www.isic.org/discounts/",
    tone: "yellow",
    top: true,
  },

  // Doprava
  {
    name: "MHD v mestách",
    perk: "Preukaz s dopravným čipom slúži ako nosič mestských dopravných kariet",
    category: "doprava",
    href: "https://www.ubian.sk/preukaz-studenta",
    tone: "teal",
  },
  {
    name: "ZSSK — vlaky",
    perk: "Preukaz potvrdzuje nárok na zľavnené a bezplatné cestovné vlakom",
    category: "doprava",
    href: "https://www.zssk.sk/",
    tone: "orange",
  },
  {
    name: "RegioJet",
    perk: "Študentské cestovné na autobusových a vlakových linkách",
    category: "doprava",
    href: "https://regiojet.sk/",
    tone: "pink",
  },
  {
    name: "Bikesharing",
    perk: "Zvýhodnené jazdy so zdieľanými bicyklami pre držiteľov ISIC a ITIC",
    category: "doprava",
    href: "https://isic.sk/aktuality/bikesharing-isic-itic/",
    tone: "yellow",
  },

  // Tech a mobil
  {
    name: "ISIC aplikácia",
    perk: "Preukaz, zľavy a novinky vždy poruke v mobile",
    category: "tech",
    href: "https://isic.sk/isic-demo-aplikacia/",
    tone: "pink",
  },
  {
    name: "Alza",
    perk: "Zvýhodnené ceny elektroniky pre študentov",
    category: "tech",
    href: "https://www.alza.sk/",
    tone: "orange",
  },
  {
    name: "Microsoft 365",
    perk: "Študentské a učiteľské licencie kancelárskeho balíka",
    category: "tech",
    href: "https://www.microsoft.com/sk-sk/education/products/microsoft-365",
    tone: "teal",
  },

  // Nákupy
  {
    name: "101 Drogéria",
    perk: "Zľava na nákup drogérie a kozmetiky",
    category: "nakupy",
    href: "https://101drogerie.sk/mas-to-za-5",
    tone: "yellow",
  },
  {
    name: "Martinus",
    perk: "Zľavy na knihy a darčeky",
    category: "nakupy",
    href: "https://www.martinus.sk/",
    tone: "teal",
  },
  {
    name: "ISICgram",
    perk: "Súťaže, bonusy a darčeky pre držiteľov preukazu",
    category: "nakupy",
    href: "https://isic.sk/isicgram/",
    tone: "pink",
  },

  // Cestovanie
  {
    name: "EURO<26 v Európe",
    perk: "Zľavy v 36 krajinách Európy s kartou mladých",
    category: "cestovanie",
    href: "https://euro26.sk/",
    tone: "orange",
  },
  {
    name: "Ubytovanie a hostely",
    perk: "Zvýhodnené ubytovanie pre mladých doma aj v zahraničí",
    category: "cestovanie",
    href: "https://isic.sk/zlavy-na-slovensku/",
    tone: "teal",
  },

  // Kultúra a zábava
  {
    name: "Kiná a divadlá",
    perk: "Študentské vstupné do kín, divadiel a na festivaly",
    category: "kultura",
    href: "https://isic.sk/zlavy-na-slovensku/",
    tone: "pink",
  },
  {
    name: "Múzeá a galérie",
    perk: "Zľavnené alebo bezplatné vstupné pre študentov a učiteľov",
    category: "kultura",
    href: "https://isic.sk/zlavy-na-slovensku/",
    tone: "yellow",
  },

  // Šport
  {
    name: "Fitness a bazény",
    perk: "Študentské vstupy do fitness centier, bazénov a na klziská",
    category: "sport",
    href: "https://isic.sk/zlavy-na-slovensku/",
    tone: "teal",
  },
  {
    name: "Lyžiarske strediská",
    perk: "Zvýhodnené skipasy pre držiteľov preukazu",
    category: "sport",
    href: "https://isic.sk/zlavy-na-slovensku/",
    tone: "orange",
  },

  // Vzdelávanie
  {
    name: "Jazykové kurzy",
    perk: "Zľavy na jazykové školy a online kurzy",
    category: "vzdelavanie",
    href: "https://isic.sk/zlavy-na-slovensku/",
    tone: "yellow",
  },
  {
    name: "ITIC pre učiteľov",
    perk: "Vyše 700 zliav na Slovensku a medzinárodné potvrdenie statusu učiteľa",
    category: "vzdelavanie",
    href: "https://itic.sk/",
    tone: "orange",
  },

  // Zdravie a krása
  {
    name: "Optiky a očné centrá",
    perk: "Zľavy na okuliare, šošovky a vyšetrenia",
    category: "zdravie",
    href: "https://isic.sk/zlavy-na-slovensku/",
    tone: "pink",
  },
  {
    name: "Kaderníctva a kozmetika",
    perk: "Zvýhodnené ceny služieb pre držiteľov preukazu",
    category: "zdravie",
    href: "https://isic.sk/zlavy-na-slovensku/",
    tone: "teal",
  },

  // Jedlo a káva
  {
    name: "Kaviarne a bistrá",
    perk: "Zľavy na kávu a menu v partnerských prevádzkach",
    category: "jedlo",
    href: "https://isic.sk/zlavy-na-slovensku/",
    tone: "yellow",
  },
  {
    name: "Reštaurácie a rozvoz",
    perk: "Zvýhodnené ceny jedla pre študentov a učiteľov",
    category: "jedlo",
    href: "https://isic.sk/zlavy-na-slovensku/",
    tone: "orange",
  },
];

export const TOP_DISCOUNTS = DISCOUNTS.filter((d) => d.top);

export const ALL_DISCOUNTS_URL = "https://isic.sk/zlavy-na-slovensku/";
export const CAMPAIGN_URL = "https://www.isic.sk/readyformore";
