import { ArrowUpRight, Ticket } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { CAMPAIGN_URL } from "@/lib/discounts";

export function CampaignBanner() {
  return (
    <section id="kampan" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal>
          <div className="coupon relative overflow-hidden bg-brand-teal p-8 md:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-12 h-52 w-52 rounded-full border-[28px] border-brand-yellow"
            />
            <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="kicker inline-flex items-center gap-2 text-foreground">
                  <Ticket className="h-3.5 w-3.5" aria-hidden="true" />
                  Kupónová Back to School kampaň
                </p>
                <h2 className="mt-4 font-display text-5xl uppercase text-foreground sm:text-6xl">
                  Ready for More
                </h2>
                <p className="mt-4 max-w-xl text-foreground">
                  Kupónová kampaň pre držiteľov preukazov ISIC, ITIC a EURO&lt;26. Odomknite si
                  ďalšie kupóny a bonusy od partnerov — stačí mať platný preukaz.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={CAMPAIGN_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 items-center gap-2 rounded-full bg-brand-yellow px-7 font-bold text-foreground transition-colors hover:bg-background"
                  >
                    Získať kupóny
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="relative rounded-3xl bg-brand-pink p-8 text-center">
                <p className="font-display text-5xl text-primary-foreground">MORE</p>
                <p className="mt-3 text-sm text-primary-foreground">
                  Kupóny platia s platným preukazom ISIC / ITIC / EURO&lt;26.
                </p>
                <p className="kicker mt-5 text-primary-foreground/80">readyformore.isic.sk</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
