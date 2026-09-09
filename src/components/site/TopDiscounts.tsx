import { useMemo, useState } from "react";
import {
  Apple,
  ArrowUpRight,
  Bus,
  ChevronDown,
  Briefcase,
  Coffee,
  Dumbbell,
  GraduationCap,
  Heart,
  Plane,
  Search,
  Smartphone,
  ShoppingBag,
  Ticket,
} from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import {
  ALL_DISCOUNTS_URL,
  EYC_APP_APPLE_URL,
  EYC_APP_ANDROID_URL,
  ITIC_DISCOUNTS_URL,
  EURO26_DISCOUNTS_URL,
  CARD_FILTERS,
  CATEGORY_COUNTS,
  DISCOUNTS,
  DISCOUNT_CATEGORIES,
  TOP_DISCOUNTS,
  TRANSPORT_INFO_URL,
  type CardType,
  type Discount,
} from "@/lib/discounts";

const TONES: Record<Discount["tone"], string> = {
  teal: "bg-brand-teal text-foreground",
  yellow: "bg-brand-yellow text-foreground",
  pink: "bg-brand-pink text-primary-foreground",
  orange: "bg-brand-orange text-primary-foreground",
};

const CATEGORY_ICONS: Record<string, typeof Bus> = {
  Doprava: Bus,
  "Tech a mobil": Smartphone,
  Nákupy: ShoppingBag,
  Cestovanie: Plane,
  "Kultúra a zábava": Ticket,
  Šport: Dumbbell,
  Vzdelávanie: GraduationCap,
  "Zdravie a krása": Heart,
  "Jedlo a káva": Coffee,
  Služby: Briefcase,
};

const PAGE_SIZE = 24;

function AppRow({
  label,
  appleUrl,
  androidUrl,
  base,
}: {
  label: string;
  appleUrl: string;
  androidUrl: string;
  base: string;
}) {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-2">
      <span className="text-xs font-bold opacity-80">{label}</span>
      <a
        href={appleUrl}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${base}`}
      >
        <Apple className="h-3.5 w-3.5" aria-hidden="true" />
        App Store
      </a>
      <a
        href={androidUrl}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${base}`}
      >
        <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
        Google Play
      </a>

    </div>
  );
}

function AppLinks({ discount, subtle }: { discount: Discount; subtle?: boolean }) {
  const base = subtle
    ? "bg-card text-foreground hover:bg-brand-yellow"
    : "bg-background/85 text-foreground hover:bg-background";
  const hasIsic = discount.cards.includes("ISIC") || discount.cards.includes("ITIC");
  const hasEyc = discount.cards.includes("EURO<26");
  return (
    <div className="mt-2">
      {hasIsic || !hasEyc ? (
        <AppRow
          label="ISIC appka:"
          appleUrl={discount.appleUrl}
          androidUrl={discount.androidUrl}
          base={base}
        />
      ) : null}
      {hasEyc ? (
        <AppRow
          label="myEYC appka:"
          appleUrl={EYC_APP_APPLE_URL}
          androidUrl={EYC_APP_ANDROID_URL}
          base={base}
        />
      ) : null}
    </div>
  );
}

function CardBadges({ cards, className = "" }: { cards: CardType[]; className?: string }) {
  if (cards.length === 0) return null;
  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {cards.map((card) => (
        <span
          key={card}
          className="rounded-full bg-background/80 px-2.5 py-1 text-[11px] font-bold text-foreground"
        >
          {card}
        </span>
      ))}
    </div>
  );
}

function TopCard({ discount }: { discount: Discount }) {
  const Icon = CATEGORY_ICONS[discount.category] ?? Ticket;
  return (
    <div
      className={`flex h-full flex-col rounded-3xl p-5 transition-transform duration-200 hover:-translate-y-1 motion-reduce:hover:translate-y-0 sm:p-7 ${TONES[discount.tone]}`}
    >
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide opacity-90">
        <Icon className="h-4 w-4" aria-hidden="true" />
        {discount.category}
      </div>
      <h3 className="mt-3 font-display text-xl leading-tight font-black uppercase [color:inherit] sm:text-2xl">
        {discount.partner}
      </h3>

      <p className="mt-2 flex-1 text-sm opacity-90">{discount.name}</p>
      <CardBadges cards={discount.cards} className="mt-4" />
      <p className="mt-4 text-xs opacity-80">Zľavu uplatníte v aplikácii:</p>

      <AppLinks discount={discount} />
    </div>
  );
}

function CatalogCard({ discount }: { discount: Discount }) {
  return (
    <div className="flex h-full flex-col rounded-3xl bg-card p-6">
      <p className="text-xs font-bold uppercase tracking-wide text-brand-pink">
        {discount.category}
      </p>
      <h3 className="mt-2 font-display text-xl leading-tight uppercase">{discount.partner}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{discount.name}</p>
      <CardBadges cards={discount.cards} className="mt-4" />
      <AppLinks discount={discount} subtle />
      {discount.partnerUrl ? (
        <a
          href={discount.partnerUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground underline underline-offset-2"
        >
          web partnera
          <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}

export function TopDiscounts() {
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState<string>("all");
  const [card, setCard] = useState<CardType | "all">("all");
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(PAGE_SIZE);

  const fullList = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DISCOUNTS.filter((d) => {
      if (active !== "all" && d.category !== active) return false;
      if (card !== "all" && !d.cards.includes(card)) return false;
      if (q && !`${d.partner} ${d.name}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [active, card, query]);

  const resetLimit = () => setLimit(PAGE_SIZE);

  return (
    <section id="zlavy" className="relative overflow-hidden bg-brand-teal-light">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-14 h-24 w-24 rounded-full border-[14px] border-brand-pink opacity-60 sm:h-36 sm:w-36 sm:border-[22px] sm:opacity-100"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-24">
        <Reveal>
          <p className="kicker text-brand-pink">NAŠE ZĽAVY</p>
          <h2 className="text-balance-tight mt-3 font-display text-3xl sm:text-5xl">
            Zľava z každej kategórie
          </h2>

          <p className="mt-4 max-w-2xl text-muted-foreground">
            Výhody pre držiteľov ISIC, ITIC a EURO&lt;26 — jedna z každej kategórie. Zľavy uplatníte
            cez naše aplikácie, kompletný katalóg si rozbalíte nižšie.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOP_DISCOUNTS.map((discount, index) => (
            <Reveal key={discount.partner + discount.category} delay={index * 40}>
              <TopCard discount={discount} />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-teal px-7 text-sm font-bold text-foreground transition-colors hover:bg-brand-yellow sm:w-auto"
          >
            {showAll ? "Skryť katalóg zliav" : `Zobraziť katalóg zliav (${DISCOUNTS.length})`}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
          {[
            { href: TRANSPORT_INFO_URL, label: "Zľavy v doprave s ISIC" },
            { href: ALL_DISCOUNTS_URL, label: "Katalóg na isic.sk" },
            { href: ITIC_DISCOUNTS_URL, label: "Katalóg na itic.sk" },
            { href: EURO26_DISCOUNTS_URL, label: "Katalóg na euro26.sk" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-background px-7 text-sm font-bold text-foreground transition-colors hover:bg-brand-yellow sm:w-auto"
            >
              {link.label}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>


        {showAll ? (
          <div className="mt-10">
            <h3 className="font-display text-3xl uppercase">Katalóg zliav</h3>

            <div className="mt-5 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => {
                  setActive("all");
                  resetLimit();
                }}
                aria-pressed={active === "all"}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                  active === "all"
                    ? "bg-brand-yellow text-foreground"
                    : "bg-card text-foreground hover:bg-brand-teal"
                }`}
              >
                Všetko ({DISCOUNTS.length})
              </button>
              {DISCOUNT_CATEGORIES.map((category) => {
                const isActive = active === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setActive(category);
                      resetLimit();
                    }}
                    aria-pressed={isActive}
                    className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                      isActive
                        ? "bg-brand-yellow text-foreground"
                        : "bg-card text-foreground hover:bg-brand-teal"
                    }`}
                  >
                    {category} ({CATEGORY_COUNTS[category]})
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <label className="relative flex-1 min-w-[240px]">
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    resetLimit();
                  }}
                  placeholder="Hľadať partnera alebo zľavu"
                  aria-label="Hľadať v katalógu zliav"
                  className="h-12 w-full rounded-full bg-card pl-11 pr-4 text-sm outline-none focus:ring-2 focus:ring-brand-pink"
                />
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setCard("all");
                    resetLimit();
                  }}
                  aria-pressed={card === "all"}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                    card === "all"
                      ? "bg-brand-pink text-primary-foreground"
                      : "bg-card text-foreground hover:bg-brand-teal"
                  }`}
                >
                  Všetky preukazy
                </button>
                {CARD_FILTERS.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => {
                      setCard(type);
                      resetLimit();
                    }}
                    aria-pressed={card === type}
                    className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                      card === type
                        ? "bg-brand-pink text-primary-foreground"
                        : "bg-card text-foreground hover:bg-brand-teal"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Zobrazujeme {Math.min(limit, fullList.length)} z {fullList.length} zliav.
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {fullList.slice(0, limit).map((discount, index) => (
                <CatalogCard
                  key={`${discount.partner}-${discount.category}-${index}`}
                  discount={discount}
                />
              ))}
            </div>

            {limit < fullList.length ? (
              <button
                type="button"
                onClick={() => setLimit((v) => v + PAGE_SIZE)}
                className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-background px-7 text-sm font-bold text-foreground transition-colors hover:bg-brand-yellow"
              >
                Zobraziť ďalšie zľavy
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
