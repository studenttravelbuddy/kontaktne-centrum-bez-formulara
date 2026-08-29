export type DiscountCategory = "doprava" | "jedlo" | "tech" | "nakupy" | "cestovanie";

export interface Discount {
  name: string;
  perk: string;
  category: DiscountCategory;
  href: string;
  emoji: string;
  /** Trieda pozadia dlaždice (dizajnové tokeny). */
  tone: "teal" | "yellow" | "pink" | "orange";
}

export const DISCOUNT_CATEGORIES: { id: DiscountCategory; label: string }[] = [
  { id: "doprava", label: "Doprava" },
  { id: "jedlo", label: "Jedlo a káva" },
  { id: "tech", label: "Tech a mobil" },
  { id: "nakupy", label: "Nákupy" },
  { id: "cestovanie", label: "Cestovanie" },
];

export const DISCOUNTS: Discount[] = [
  {
    name: "Vlaky a autobusy",
    perk: "Zľavnené cestovné pre žiakov a študentov s ISIC/EURO<26 čipom",
    category: "doprava",
    href: "https://www.ubian.sk/preukaz-studenta",
    emoji: "🚆",
    tone: "teal",
  },
  {
    name: "YOXO paušál",
    perk: "Študentský mobilný paušál od Orangeu s bonusom pre držiteľov preukazu",
    category: "tech",
    href: "https://www.orange.sk/yoxo-pausal",
    emoji: "📱",
    tone: "orange",
  },
  {
    name: "McDonald's",
    perk: "Zľavy na obľúbené menu pre ISIC a ITIC",
    category: "jedlo",
    href: "https://www.mcdonalds.sk/o-nas/isic-a-itic/",
    emoji: "🍟",
    tone: "yellow",
  },
  {
    name: "Burger King",
    perk: "15 % zľava na nákup s preukazom",
    category: "jedlo",
    href: "https://isic.sk/zlavy-na-slovensku/burger-king/7750/",
    emoji: "🍔",
    tone: "pink",
  },
  {
    name: "Starbucks",
    perk: "Zľava na kávu a nápoje",
    category: "jedlo",
    href: "https://isic.sk/zlavy-na-slovensku/starbucks/6943/",
    emoji: "☕",
    tone: "teal",
  },
  {
    name: "Panta Rhei",
    perk: "Zľavy na knihy, papiernictvo a školské potreby",
    category: "nakupy",
    href: "https://isic.sk/zlavy-na-slovensku/panta-rhei/3129/",
    emoji: "📚",
    tone: "orange",
  },
  {
    name: "Samsung Extra",
    perk: "Študentské ceny na elektroniku a mobily",
    category: "tech",
    href: "https://www.samsungextra.sk/",
    emoji: "💻",
    tone: "pink",
  },
  {
    name: "101 Drogéria",
    perk: "5 % zľava na nákup drogérie",
    category: "nakupy",
    href: "https://101drogerie.sk/mas-to-za-5",
    emoji: "🧴",
    tone: "yellow",
  },
  {
    name: "Poistenie Union",
    perk: "Výhodné cestovné poistenie k preukazom CKM SYTS",
    category: "cestovanie",
    href: "https://www.union.sk/poistenie-k-studentskym-kartam-ckm-syts/",
    emoji: "🧳",
    tone: "teal",
  },
  {
    name: "Zľavy v zahraničí",
    perk: "Vyše 150 000 zliav v 130 krajinách s ISIC",
    category: "cestovanie",
    href: "https://www.isic.org/discounts/",
    emoji: "🌍",
    tone: "orange",
  },
  {
    name: "ISICgram",
    perk: "Súťaže a bonusy pre držiteľov preukazu",
    category: "nakupy",
    href: "https://isic.sk/isicgram/",
    emoji: "🎁",
    tone: "pink",
  },
  {
    name: "ISIC aplikácia",
    perk: "Preukaz a zľavy vždy po ruke v mobile",
    category: "tech",
    href: "https://isic.sk/isic-demo-aplikacia/",
    emoji: "✨",
    tone: "yellow",
  },
];

export const ALL_DISCOUNTS_URL = "https://isic.sk/zlavy-na-slovensku/";
export const CAMPAIGN_URL = "https://www.isic.sk/readyformore";
