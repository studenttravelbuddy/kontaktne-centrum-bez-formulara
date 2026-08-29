import { ArrowUpRight, Ticket } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { CAMPAIGN_URL } from "@/lib/discounts";

export function CampaignBanner() {
  return (
    <section id="kampan" className="bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <Reveal>
          <div className="coupon relative overflow-hidden bg-gradient-to-br from-brand-teal-deep via-brand-teal-deep to-brand-teal p-7 text-white md:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-10 h-56 w-56 rounded-full bg-brand-yellow/25 blur-2xl"
            />
            <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold tracking-wide text-brand-teal-deep uppercase">
                  <Ticket className="h-3.5 w-3.5" aria-hidden="true" />
                  Kampaň
                </p>
                <h2 className="mt-4 text-2xl text-white md:text-4xl">Ready for More</h2>
                <p className="mt-3 max-w-xl text-white/85">
                  Kupónová kampaň pre držiteľov preukazov ISIC, ITIC a EURO&lt;26. Odomknite si
                  ďalšie kupóny a bonusy od partnerov — stačí mať platný preukaz.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={CAMPAIGN_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-[14px] bg-brand-yellow px-5 py-3 font-medium text-brand-teal-deep transition-transform hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
                  >
                    Získať kupóny
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="#formular"
                    className="inline-flex items-center gap-2 rounded-[14px] border border-white/50 px-5 py-3 font-medium text-white transition-colors hover:bg-white/10"
                  >
                    Otázka ku kampani
                  </a>
                </div>
              </div>

              <div className="relative rounded-2xl border border-dashed border-white/50 bg-white/10 p-6 text-center backdrop-blur">
                <p className="font-display text-5xl text-brand-yellow">MORE</p>
                <p className="mt-2 text-sm text-white/85">
                  Kupóny platia s platným preukazom ISIC / ITIC / EURO&lt;26.
                </p>
                <p className="mt-4 text-xs tracking-widest text-white/60 uppercase">
                  isic.sk/readyformore
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
