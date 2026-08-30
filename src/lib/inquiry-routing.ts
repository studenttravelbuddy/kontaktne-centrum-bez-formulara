// ---------------------------------------------------------------------------
// Smerovanie dopytov z kontaktného formulára.
// E-mailové adresy sú finálne podľa interného dokumentu CKM SYTS z 29. 8. 2026:
// reklamacia@, sspreukazy@ a vspreukazy@ zostávajú samostatné; neprebieha žiadne
// zjednotenie pod klientskyservis@ckmsyts.sk. Všetky adresy sú tu na jednom mieste
// pre jednoduchú budúcu údržbu.
// ---------------------------------------------------------------------------

export const EMAILS = {
  gdpr: "gdpr@ckmsyts.sk",
  marketing: "marketing@ckmsyts.sk",
  zsPreukazy: "zspreukazy@ckmsyts.sk",
  ssPreukazy: "sspreukazy@ckmsyts.sk",
  vsPreukazy: "vspreukazy@ckmsyts.sk",
  isic: "isic@ckmsyts.sk",
  itic: "itic@ckmsyts.sk",
  euro26: "euro26@ckmsyts.sk",
  eshopIsic: "eshop-isic@ckmsyts.sk",
  eshopEuro26: "eshop-euro26@ckmsyts.sk",
  eshopItic: "eshop-itic@ckmsyts.sk",
  recepcia: "recepcia@ckmsyts.sk",
  zlavy: "zlavy@ckmsyts.sk",
  b2b: "zmajdanova@ckmsyts.sk",
  financie: "financie@ckmsyts.sk",
  reklamacia: "reklamacia@ckmsyts.sk",
} as const;

export type CardType = "isic-zs" | "isic-ss" | "isic-vs" | "euro26" | "itic";

export const CARD_TYPES: { id: CardType; label: string }[] = [
  { id: "isic-zs", label: "Preukaz ISIC žiaka ZŠ" },
  { id: "isic-ss", label: "Preukaz ISIC žiaka SŠ" },
  { id: "isic-vs", label: "Preukaz ISIC študenta VŠ" },
  { id: "euro26", label: "Karta mladých EURO<26" },
  { id: "itic", label: "Preukaz učiteľa ITIC" },
];

export type Requirement = "required" | "optional" | "hidden";

export interface TopicFields {
  cardNumber: Requirement;
  message: Requirement;
  attachment: Requirement;
  attachmentLabel?: string;
  organizationName?: Requirement;
  organizationAddress?: Requirement;
  website?: Requirement;
  interestConfirmation?: boolean;
}

export interface Topic {
  id: string;
  label: string;
  group: string;
  /** Typy preukazu, ktoré sa pri tejto oblasti ponúkajú. Prázdne pole = krok sa nezobrazí. */
  cardTypes: CardType[];
  recipients: (cardType?: CardType) => string[];
  fields: TopicFields;
}

const ZS_SS = [EMAILS.zsPreukazy, EMAILS.ssPreukazy];
const VS_TRIO = [EMAILS.vsPreukazy, EMAILS.euro26, EMAILS.itic];
const APP_TRIO = [EMAILS.isic, EMAILS.itic, EMAILS.euro26];
const ESHOP_TRIO = [EMAILS.eshopIsic, EMAILS.eshopEuro26, EMAILS.eshopItic];
const ALL_CARDS: CardType[] = ["isic-zs", "isic-ss", "isic-vs", "euro26", "itic"];

const isSchoolCard = (c?: CardType) => c === "isic-zs" || c === "isic-ss";

export const TOPIC_GROUPS = [
  "Preukaz a platba",
  "Zľavy",
  "Škola a vydávanie preukazov",
  "Financie a faktúry",
  "GDPR a e-maily",
  "Iné",
] as const;

export const TOPICS: Topic[] = [
  {
    id: "platba",
    label: "Problém s platbou (vrátenie, omeškaná či nespárovaná platba, zmena školy)",
    group: "Preukaz a platba",
    cardTypes: ALL_CARDS,
    recipients: (c) => (isSchoolCard(c) ? ZS_SS : VS_TRIO),
    fields: {
      cardNumber: "required",
      message: "required",
      attachment: "required",
      attachmentLabel: "Potvrdenie o úhrade",
    },
  },
  {
    id: "mobil",
    label: "Nefunguje mi preukaz v mobilnej aplikácii",
    group: "Preukaz a platba",
    cardTypes: ALL_CARDS,
    recipients: (c) => (isSchoolCard(c) ? ZS_SS : APP_TRIO),
    fields: {
      cardNumber: "required",
      message: "required",
      attachment: "optional",
      attachmentLabel: "Screenshot problému",
    },
  },
  {
    id: "doprava",
    label: "Nefunguje mi preukaz v doprave",
    group: "Preukaz a platba",
    cardTypes: ALL_CARDS,
    recipients: (c) => (isSchoolCard(c) ? ZS_SS : VS_TRIO),
    fields: {
      cardNumber: "required",
      message: "required",
      attachment: "optional",
      attachmentLabel: "Screenshot problému",
    },
  },
  {
    id: "inde",
    label: "Nefunguje mi preukaz niekde inde (dochádzkový alebo stravovací systém)",
    group: "Preukaz a platba",
    cardTypes: ALL_CARDS,
    recipients: (c) => (isSchoolCard(c) ? ZS_SS : VS_TRIO),
    fields: {
      cardNumber: "required",
      message: "required",
      attachment: "optional",
      attachmentLabel: "Screenshot problému",
    },
  },
  {
    id: "nedorucene",
    label: "Preukaz alebo známka mi nebol doručený vôbec alebo načas",
    group: "Preukaz a platba",
    cardTypes: ALL_CARDS,
    recipients: (c) =>
      c === "isic-ss" ? [EMAILS.ssPreukazy] : c === "isic-vs" ? [EMAILS.vsPreukazy] : ESHOP_TRIO,
    fields: {
      cardNumber: "optional",
      message: "required",
      attachment: "required",
      attachmentLabel: "Potvrdenie o úhrade",
    },
  },
  {
    id: "vybavit",
    label: "Chcem si niečo vybaviť na preukaze (predĺženie, zmena údajov, strata, objednávka)",
    group: "Preukaz a platba",
    cardTypes: ALL_CARDS,
    recipients: (c) =>
      c === "isic-ss" ? [EMAILS.ssPreukazy] : c === "isic-vs" ? [EMAILS.vsPreukazy] : ESHOP_TRIO,
    fields: {
      cardNumber: "optional",
      message: "required",
      attachment: "required",
      attachmentLabel: "Potvrdenie o úhrade",
    },
  },
  {
    id: "ine-preukaz",
    label: "Čokoľvek iné, čo súvisí s preukazom",
    group: "Preukaz a platba",
    cardTypes: ALL_CARDS,
    recipients: (c) => (isSchoolCard(c) ? ZS_SS : VS_TRIO),
    fields: {
      cardNumber: "optional",
      message: "required",
      attachment: "optional",
      attachmentLabel: "Príloha",
    },
  },
  {
    id: "zlava-nefunguje",
    label: "Nefunguje mi preukaz na zľavy (mimo dopravy)",
    group: "Zľavy",
    cardTypes: ALL_CARDS,
    recipients: (c) => (isSchoolCard(c) ? ZS_SS : VS_TRIO),
    fields: {
      cardNumber: "required",
      message: "required",
      attachment: "required",
      attachmentLabel: "Kópia bločku s nákupom",
    },
  },
  {
    id: "reklamacia-zlava",
    label: "Neuznali mi zľavu — reklamácia",
    group: "Zľavy",
    cardTypes: [],
    recipients: () => [EMAILS.reklamacia],
    fields: {
      cardNumber: "required",
      message: "required",
      attachment: "required",
      attachmentLabel: "Kópia bločku s nákupom",
    },
  },
  {
    id: "navrh-zlavy",
    label: "Chcem navrhnúť zľavu (nápad od držiteľa preukazu)",
    group: "Zľavy",
    cardTypes: [],
    recipients: () => [EMAILS.zlavy],
    fields: {
      cardNumber: "required",
      message: "required",
      attachment: "optional",
      attachmentLabel: "Príloha",
    },
  },
  {
    id: "partner-zlavy",
    label: "Radi by sme poskytovali zľavy pre držiteľov preukazov (partner alebo firma)",
    group: "Zľavy",
    cardTypes: [],
    recipients: () => [EMAILS.zlavy],
    fields: {
      cardNumber: "hidden",
      message: "optional",
      attachment: "optional",
      attachmentLabel: "Príloha",
      organizationName: "required",
      organizationAddress: "required",
      website: "optional",
    },
  },
  {
    id: "b2b-vydavanie",
    label: "Radi by sme vydávali preukazy žiakom alebo učiteľom našej školy",
    group: "Škola a vydávanie preukazov",
    cardTypes: [],
    recipients: () => [EMAILS.b2b],
    fields: {
      cardNumber: "hidden",
      message: "optional",
      attachment: "optional",
      attachmentLabel: "Príloha",
      organizationName: "required",
      organizationAddress: "required",
      website: "optional",
      interestConfirmation: true,
    },
  },
  {
    id: "faktura",
    label: "Mám otázku ohľadne prijatej alebo odoslanej faktúry",
    group: "Financie a faktúry",
    cardTypes: [],
    recipients: () => [EMAILS.financie],
    fields: {
      cardNumber: "hidden",
      message: "required",
      attachment: "required",
      attachmentLabel: "Faktúra",
    },
  },
  {
    id: "gdpr-vymaz",
    label: "Žiadosť o výmaz osobných údajov",
    group: "GDPR a e-maily",
    cardTypes: [],
    recipients: () => [EMAILS.gdpr],
    fields: { cardNumber: "required", message: "optional", attachment: "hidden" },
  },
  {
    id: "odhlasenie-emailov",
    label: "Zrušiť zasielanie e-mailov",
    group: "GDPR a e-maily",
    cardTypes: [],
    recipients: () => [EMAILS.marketing],
    fields: { cardNumber: "required", message: "optional", attachment: "hidden" },
  },
  {
    id: "ine",
    label: "Čokoľvek iné (netýka sa konkrétneho preukazu)",
    group: "Iné",
    cardTypes: [],
    recipients: () => [EMAILS.recepcia],
    fields: {
      cardNumber: "hidden",
      message: "required",
      attachment: "optional",
      attachmentLabel: "Príloha",
    },
  },
];

export function getTopic(id: string): Topic | undefined {
  return TOPICS.find((t) => t.id === id);
}

export function getCardTypeLabel(id?: string | null): string | undefined {
  return CARD_TYPES.find((c) => c.id === id)?.label;
}

export function resolveRecipients(topicId: string, cardType?: CardType): string[] {
  const topic = getTopic(topicId);
  if (!topic) return [EMAILS.recepcia];
  const list = topic.recipients(cardType);
  return Array.from(new Set(list));
}

export const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "application/pdf"];
export const MAX_FILE_SIZE = 5 * 1024 * 1024;

/** Informatívna (neblokujúca) kontrola formátu čísla preukazu. */
export function looksLikeCardNumber(value: string): boolean {
  return /^[STE]421\S*$/i.test(value.trim());
}
