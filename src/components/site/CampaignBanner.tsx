import { ArrowUpRight, Ticket } from "lucide-react";

import readyForMoreKv from "@/assets/readyformore-kv.png.asset.json";
import { Reveal } from "@/components/site/Reveal";
import { CAMPAIGN_URL } from "@/lib/discounts";

export function CampaignBanner() {
  return (
    <section id="kampan" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-24">
        <Reveal>
          <div className="coupon relative overflow-hidden bg-brand-teal p-6 sm:p-8 md:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-10 h-32 w-32 rounded-full border-[18px] border-brand-yellow opacity-70 sm:-top-20 sm:-right-12 sm:h-52 sm:w-52 sm:border-[28px] sm:opacity-100"
            />
            <div className="relative grid items-center gap-6 sm:gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="kicker inline-flex items-center gap-2 text-foreground">
                  <Ticket className="h-3.5 w-3.5" aria-hidden="true" />
                  Kupónová Back to School kampaň
                </p>
                <h2 className="mt-4 font-display text-4xl uppercase text-foreground sm:text-6xl">
                  Ready for More
                </h2>
                <p className="mt-4 max-w-xl text-sm text-foreground sm:text-base">
                  Kupónová kampaň pre držiteľov preukazov ISIC, ITIC a EURO&lt;26. Odomknite si
                  ďalšie kupóny a bonusy od partnerov — stačí mať platný preukaz.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap">
                  <a
                    href={CAMPAIGN_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-yellow px-7 font-bold text-foreground transition-colors hover:bg-background sm:w-auto"
                  >
                    Získať kupóny
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>


              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={readyForMoreKv.url}
                  alt="Kampaň Ready for More: ľudia s preukazmi ISIC, ITIC a EURO<26"
                  className="mx-auto w-full max-w-md rounded-3xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
