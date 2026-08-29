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
  teal: "bg-brand-teal-light hover:border-brand-teal",
  yellow: "bg-[color-mix(in_oklab,var(--brand-yellow)_18%,white)] hover:border-brand-yellow",
  pink: "bg-[color-mix(in_oklab,var(--brand-pink)_10%,white)] hover:border-brand-pink",
  orange: "bg-[color-mix(in_oklab,var(--brand-orange)_12%,white)] hover:border-brand-orange",
};

function DiscountCard({ discount }: { discount: Discount }) {
  return (
    <a
      href={discount.href}
      target="_blank"
      rel="noreferrer"
      className={`group flex h-full flex-col rounded-2xl border border-border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-28px_var(--brand-teal-deep)] motion-reduce:hover:translate-y-0 ${TONES[discount.tone]}`}
    >
      <h3 className="font-display text-lg">{discount.name}</h3>
      <p className="mt-1 flex-1 text-sm text-brand-gray">{discount.perk}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-teal-deep">
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
    <section id="zlavy" className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-teal-light blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-16">
        <Reveal>
          <p className="inline-block rounded-full bg-brand-orange px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
            Naj zľavy
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl">Za čo sa preukaz oplatí najviac</h2>
          <p className="mt-2 max-w-2xl text-brand-gray">
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
            className="inline-flex items-center gap-2 rounded-[14px] bg-brand-teal-deep px-5 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
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
            className="inline-flex items-center gap-2 rounded-[14px] border border-brand-teal-deep px-5 py-2.5 text-sm font-medium text-brand-teal-deep transition-colors hover:bg-brand-teal-light"
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
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                      isActive
                        ? "border-brand-teal-deep bg-brand-teal-deep text-white"
                        : "border-border bg-card text-brand-teal-deep hover:border-brand-teal hover:bg-brand-teal-light"
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
