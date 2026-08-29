import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import {
  ALL_DISCOUNTS_URL,
  DISCOUNTS,
  DISCOUNT_CATEGORIES,
  TOP_DISCOUNTS,
  type Discount,
  type DiscountCategory,
} from "@/lib/discounts";

const TONES: Record<Discount["tone"], string> = {
  teal: "bg-brand-teal-light shadow-[8px_8px_0_var(--brand-teal)]",
  yellow: "bg-brand-yellow shadow-[8px_8px_0_var(--brand-teal)]",
  pink: "bg-card shadow-[8px_8px_0_var(--brand-pink)]",
  orange: "bg-card shadow-[8px_8px_0_var(--brand-orange)]",
};

function DiscountCard({ discount }: { discount: Discount }) {
  return (
    <a
      href={discount.href}
      target="_blank"
      rel="noreferrer"
      className={`group flex h-full flex-col rounded-lg border border-brand-teal/25 p-6 transition-transform duration-200 hover:-translate-y-1 motion-reduce:hover:translate-y-0 ${TONES[discount.tone]}`}
    >
      <h3 className="font-display text-lg">{discount.name}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{discount.perk}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-4">
        Zistiť viac
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  );
}

export function TopDiscounts() {
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState<DiscountCategory | "all">("all");

  const fullList = DISCOUNTS.filter((d) => active === "all" || d.category === active);

  return (
    <section id="zlavy" className="relative overflow-hidden border-b border-brand-teal/25 bg-brand-teal-light">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-14 h-36 w-36 rounded-full border-[22px] border-brand-pink"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal>
          <p className="text-sm font-black tracking-wider text-brand-pink uppercase">
            Naj zľavy
          </p>
          <h2 className="text-balance-tight mt-3 text-4xl sm:text-5xl">Za čo sa preukaz oplatí najviac</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Šesť najzaujímavejších výhod pre držiteľov ISIC, ITIC a EURO&lt;26. Kompletný prehľad
            podľa kategórií si rozbalíte nižšie.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOP_DISCOUNTS.map((discount, index) => (
            <Reveal key={discount.name} delay={index * 40}>
              <DiscountCard discount={discount} />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            className="inline-flex h-12 items-center gap-2 rounded-lg bg-brand-teal px-7 text-sm font-bold text-foreground transition-colors hover:bg-brand-yellow"
          >
            {showAll ? "Skryť kompletný prehľad" : "Zobraziť všetky zľavy podľa kategórií"}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
          <a
            href={ALL_DISCOUNTS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-lg border border-brand-teal/25 bg-background px-7 text-sm font-bold text-foreground transition-colors hover:bg-brand-yellow"
          >
            Katalóg zliav na isic.sk
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {showAll ? (
          <div className="mt-8">
            <div className="flex flex-wrap gap-2">
              {[{ id: "all" as const, label: "Všetko" }, ...DISCOUNT_CATEGORIES].map((chip) => {
                const isActive = active === chip.id;
                return (
                  <button
                    key={chip.id}
                    type="button"
                    onClick={() => setActive(chip.id)}
                    aria-pressed={isActive}
                    className={`rounded-full border border-brand-teal/25 px-4 py-2 text-sm font-bold transition-colors ${
                      isActive
                        ? "bg-brand-yellow text-foreground"
                        : "bg-card text-foreground hover:bg-brand-teal"
                    }`}
                  >
                    {chip.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {fullList.map((discount) => (
                <DiscountCard key={discount.name + discount.category} discount={discount} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
