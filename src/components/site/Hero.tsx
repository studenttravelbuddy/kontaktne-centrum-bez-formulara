import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

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
      "Medzinárodne uznávaný doklad o štatúte študenta, zľavy na Slovensku aj v zahraničí a zľavnené cestovné. Čipový (co-brand) preukaz vydáva škola, ISIC klasik kúpite u nás.",
    linkLabel: "Zistiť nárok na ISIC",
    href: "https://isic.sk/narok-na-preukaz-isic/",
    shopLabel: "Objednať ISIC klasik",
    shopHref: "https://objednaj-preukaz.sk/produkt/isic-klasik/",
    accent: "card-isic",
  },
  {
    name: "ITIC",
    logo: iticLogo.url,
    who: "Pre učiteľov, pedagogických a odborných zamestnancov škôl.",
    detail:
      "Viac ako 700 zliav na Slovensku a medzinárodné potvrdenie o statuse učiteľa. Zapojené školy vydávajú co-brand preukaz, inak objednávate klasik.",
    linkLabel: "Zistiť nárok na ITIC",
    href: "https://itic.sk/narok-na-preukaz-itic/",
    shopLabel: "Objednať ITIC",
    shopHref: "https://objednaj-preukaz.sk/kategoria-produktu/som-ucitel/",
    accent: "card-itic",
  },
  {
    name: "EURO<26",
    logo: eycaLogo.url,
    who: "Pre kohokoľvek od 6 do 27 rokov, aj keď neštuduje.",
    detail:
      "Vyše 2200 miest so zľavami na Slovensku, platí v 36 krajinách Európy. Po skončení štúdia naň z ISIC prejdete plynulo — platnosť nadväzuje na súčasnú.",
    linkLabel: "Viac o EURO<26",
    href: "https://isic.sk/euro26/",
    shopLabel: "Objednať EURO<26",
    shopHref: "https://objednaj-preukaz.sk/kategoria-produktu/som-mlady/",
    accent: "card-euro26",
  },
];


interface Props {
  onOpenChat: () => void;
  onGoToForm: () => void;
}

export function Hero({ onOpenChat, onGoToForm }: Props) {
  return (
    <section id="preukazy" className="relative border-b border-brand-teal/25 bg-background">
      <div className="relative overflow-hidden bg-brand-teal">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[24px] border-brand-yellow sm:h-96 sm:w-96 sm:border-[32px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 bottom-24 h-32 w-32 rotate-12 bg-brand-pink sm:h-40 sm:w-40"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
          <p className="mb-8 flex items-center gap-2 text-sm font-black tracking-[0.18em] uppercase text-foreground">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Kontaktné centrum
          </p>
          <h1 className="text-balance-tight max-w-5xl font-display text-4xl leading-[0.95] font-black sm:text-6xl lg:text-7xl">
            <span className="block text-brand-yellow">Preukazy ISIC, ITIC a EURO&lt;26.</span>
            <span className="block text-brand-teal-deep">
              Na čo slúžia, pre koho sú a ako ich získate?
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground md:text-lg">
            Preukazy vydáva združenie CKM SYTS. Fungujú ako medzinárodne uznávaný doklad o
            štatúte študenta, mladého človeka či učiteľa. Prinášajú zľavy na Slovensku aj v
            zahraničí a pre ISIC aj zľavnené cestovné vo verejnej doprave.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <button
              type="button"
              onClick={onOpenChat}
              className="inline-flex h-14 items-center gap-2 rounded-full bg-brand-yellow px-8 font-bold text-foreground transition-transform hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Spýtať sa chatu
            </button>
            <button
              type="button"
              onClick={onGoToForm}
              className="font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-8"
            >
              Napísať nám
            </button>
            <a
              href="#zlavy"
              className="font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-8"
            >
              Naj zľavy
            </a>
          </div>

          <p className="mt-14 text-sm font-black tracking-[0.18em] uppercase text-foreground">
            ISIC · ITIC · EURO&lt;26
          </p>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <CardWizard onGoToForm={onGoToForm} />


        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {CARDS.map((card, index) => (
            <Reveal key={card.name} delay={index * 80}>
              <article className={`group flex h-full flex-col rounded-lg border border-brand-teal/25 bg-card p-6 shadow-[8px_8px_0_var(--card-accent)] transition-transform duration-200 hover:-translate-y-1 motion-reduce:hover:translate-y-0 ${card.accent}`}>
                <img
                  src={card.logo}
                  alt={`Logo ${card.name}`}
                  className="h-16 w-28 self-start object-contain"
                />
                <h2 className="mt-4 font-display text-3xl text-card-accent-strong">{card.name}</h2>
                <p className="mt-2 font-medium">{card.who}</p>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{card.detail}</p>
                <div className="mt-5 flex flex-col items-start gap-2">
                  <a
                    href={card.shopHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-4 py-2 text-sm font-bold text-foreground transition-colors hover:bg-brand-teal"
                  >
                    {card.shopLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-4"
                  >
                    {card.linkLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 rounded-lg border border-brand-teal/25 bg-brand-yellow p-5 text-sm shadow-[6px_6px_0_var(--brand-teal)]">
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
