import { KATEGORIE, ZLAVY, type Zlava } from "@/data/zlavy";

export type { Zlava };

export type CardType = "ISIC" | "ITIC" | "EURO<26";

export interface Discount {
  partner: string;
  name: string;
  category: string;
  /** Preukazy, pre ktoré zľava platí. */
  cards: CardType[];
  appleUrl: string;
  androidUrl: string;
  partnerUrl: string;
  top: boolean;
  tone: "teal" | "yellow" | "pink" | "orange";
}

const TONES: Discount["tone"][] = ["teal", "yellow", "pink", "orange"];

function parseCards(preukazy: string): CardType[] {
  const raw = preukazy
    .split("|")
    .map((v) => v.trim().toUpperCase())
    .filter(Boolean);

  const cards: CardType[] = [];
  for (const value of raw) {
    if (value.includes("ISIC") && !cards.includes("ISIC")) cards.push("ISIC");
    else if (value.includes("ITIC") && !cards.includes("ITIC")) cards.push("ITIC");
    else if (
      (value.includes("EYCA") || value.includes("EURO")) &&
      !cards.includes("EURO<26")
    ) {
      cards.push("EURO<26");
    }
  }
  return cards;
}

function toDiscount(zlava: Zlava, index: number): Discount {
  return {
    partner: zlava.partner,
    name: zlava.nazov.replace(/\s+/g, " ").trim(),
    category: zlava.kategoria,
    cards: parseCards(zlava.preukazy),
    appleUrl: zlava.ctaApple,
    androidUrl: zlava.ctaAndroid,
    partnerUrl: zlava.partnerUrl.startsWith("http") ? zlava.partnerUrl : "",
    top: zlava.top,
    tone: TONES[index % TONES.length]!,
  };
}

export const DISCOUNT_CATEGORIES: string[] = KATEGORIE;

export const DISCOUNTS: Discount[] = ZLAVY.map(toDiscount);

/** Jeden top pick z každej z 9 kategórií, v poradí kategórií. */
export const TOP_DISCOUNTS: Discount[] = DISCOUNT_CATEGORIES.map((category) =>
  DISCOUNTS.find((d) => d.top && d.category === category),
).filter((d): d is Discount => Boolean(d));

export const CATEGORY_COUNTS: Record<string, number> = DISCOUNT_CATEGORIES.reduce(
  (acc, category) => {
    acc[category] = DISCOUNTS.filter((d) => d.category === category).length;
    return acc;
  },
  {} as Record<string, number>,
);

export const CARD_FILTERS: CardType[] = ["ISIC", "ITIC", "EURO<26"];

export const ALL_DISCOUNTS_URL = "https://isic.sk/zlavy-na-slovensku/";
export const ITIC_DISCOUNTS_URL = "https://itic.sk/vsetky-zlavy/";
export const EURO26_DISCOUNTS_URL = "https://euro26.sk/zlavy-na-slovensku/";
export const TRANSPORT_INFO_URL = "https://isic.sk/akceptacia-isic-vo-verejnej-doprave/";
export const CAMPAIGN_URL = "https://www.isic.sk/readyformore";
