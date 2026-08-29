import { ArrowUpRight, Ticket } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { CAMPAIGN_URL } from "@/lib/discounts";

export function CampaignBanner() {
  return (
    <section id="kampan" className="border-b-2 border-foreground bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal>
          <div className="coupon relative overflow-hidden border-2 border-foreground bg-brand-teal p-7 shadow-[8px_8px_0_var(--brand-yellow)] md:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-12 h-52 w-52 rounded-full border-[28px] border-brand-yellow"
            />
            <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="inline-flex items-center gap-2 text-sm font-black tracking-wider text-foreground uppercase">
                  <Ticket className="h-3.5 w-3.5" aria-hidden="true" />
                  Kampaň
                </p>
                <h2 className="mt-4 text-4xl text-foreground sm:text-5xl">Ready for More</h2>
                <p className="mt-3 max-w-xl text-foreground">
                  Kupónová kampaň pre držiteľov preukazov ISIC, ITIC a EURO&lt;26. Odomknite si
                  ďalšie kupóny a bonusy od partnerov — stačí mať platný preukaz.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={CAMPAIGN_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 items-center gap-2 rounded-lg bg-brand-yellow px-7 font-bold text-foreground transition-colors hover:bg-background"
                  >
                    Získať kupóny
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="#formular"
                    className="inline-flex h-12 items-center gap-2 rounded-lg border-2 border-foreground bg-background px-7 font-bold text-foreground transition-colors hover:bg-brand-yellow"
                  >
                    Otázka ku kampani
                  </a>
                </div>
              </div>

              <div className="relative rounded-lg border-2 border-dashed border-foreground bg-background p-8 text-center">
                <p className="font-display text-5xl text-brand-pink">MORE</p>
                <p className="mt-2 text-sm text-foreground">
                  Kupóny platia s platným preukazom ISIC / ITIC / EURO&lt;26.
                </p>
                <p className="mt-4 text-xs font-bold tracking-widest text-muted-foreground uppercase">
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
