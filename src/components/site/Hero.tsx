import { ArrowRight, MessageCircle } from "lucide-react";

import { CardWizard } from "@/components/site/CardWizard";
import { Reveal } from "@/components/site/Reveal";
import eycaLogo from "@/assets/eyca-logo.png.asset.json";
import isicLogo from "@/assets/isic-logo.png.asset.json";
import iticLogo from "@/assets/itic-logo.png.asset.json";

const CARDS = [
  {
    name: "ISIC",
    logo: isicLogo.url,
    who: "Pre študentov denného štúdia na ZŠ, SŠ a VŠ.",
    detail:
      "Medzinárodne uznávaný doklad o štatúte študenta, zľavy na Slovensku aj v zahraničí a zľavnené cestovné.",
    linkLabel: "Zistiť nárok na ISIC",
    href: "https://isic.sk/narok-na-preukaz-isic/",
  },
  {
    name: "ITIC",
    logo: iticLogo.url,
    who: "Pre učiteľov, pedagogických a odborných zamestnancov škôl.",
    detail: "Viac ako 700 zliav na Slovensku a medzinárodné potvrdenie o statuse učiteľa.",
    linkLabel: "Zistiť nárok na ITIC",
    href: "https://itic.sk/narok-na-preukaz-itic/",
  },
  {
    name: "EURO<26",
    logo: eycaLogo.url,
    who: "Pre kohokoľvek od 6 do 27 rokov, aj keď neštuduje.",
    detail: "Vyše 2200 miest so zľavami na Slovensku, platí v 36 krajinách Európy.",
    linkLabel: "Objednať EURO<26",
    href: "https://objednaj-preukaz.sk/kategoria-produktu/som-mlady/",
  },
];

interface Props {
  onOpenChat: () => void;
  onGoToForm: () => void;
}

export function Hero({ onOpenChat, onGoToForm }: Props) {
  return (
    <section id="preukazy" className="relative overflow-hidden border-b border-border bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-brand-teal-light blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -right-20 h-64 w-64 rounded-full bg-[color-mix(in_oklab,var(--brand-yellow)_35%,white)] blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="mb-3 inline-block rounded-full bg-brand-pink px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
              Kontaktné centrum
            </p>
            <h1 className="max-w-3xl text-3xl leading-tight md:text-5xl">
              Preukazy ISIC, ITIC a EURO&lt;26 — na čo slúžia, pre koho sú a ako ich získate?
            </h1>
            <p className="mt-4 max-w-2xl text-base text-brand-gray md:text-lg">
              Preukazy vydáva združenie CKM SYTS. Fungujú ako medzinárodne uznávaný doklad o
              štatúte študenta, mladého človeka či učiteľa. Prinášajú zľavy na Slovensku aj v
              zahraničí a pre ISIC aj zľavnené cestovné vo verejnej doprave.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onOpenChat}
                className="inline-flex items-center gap-2 rounded-[14px] bg-brand-teal-deep px-5 py-3 font-medium text-white transition-transform hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Spýtať sa chatu
              </button>
              <button
                type="button"
                onClick={onGoToForm}
                className="inline-flex items-center gap-2 rounded-[14px] bg-brand-yellow px-5 py-3 font-medium text-brand-teal-deep transition-transform hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
              >
                Napísať nám
              </button>
              <a
                href="#zlavy"
                className="inline-flex items-center gap-2 rounded-[14px] border border-border px-5 py-3 font-medium text-brand-teal-deep transition-colors hover:bg-brand-teal-light"
              >
                Naj zľavy
              </a>
            </div>
          </div>

          <CardWizard onGoToForm={onGoToForm} />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {CARDS.map((card, index) => (
            <Reveal key={card.name} delay={index * 80}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-30px_var(--brand-teal-deep)] motion-reduce:hover:translate-y-0">
                <img
                  src={card.logo}
                  alt={`Logo ${card.name}`}
                  className="h-14 w-auto self-start object-contain transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                />
                <h2 className="mt-4 font-display text-2xl">{card.name}</h2>
                <p className="mt-2 font-medium">{card.who}</p>
                <p className="mt-2 flex-1 text-sm text-brand-gray">{card.detail}</p>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 self-start rounded-[14px] bg-brand-teal-deep px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  {card.linkLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 rounded-2xl bg-muted p-5 text-sm">
          <strong>Cena:</strong> preukaz aj známka na predĺženie stoja 13 €, doručenie kuriérom
          +3,15 €.{" "}
          <a className="font-medium text-brand-teal-deep underline" href="#faq">
            Kompletné časté otázky nižšie ↓
          </a>
        </p>
      </div>
    </section>
  );
}
