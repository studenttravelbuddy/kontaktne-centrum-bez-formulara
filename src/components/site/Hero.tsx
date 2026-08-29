import { ArrowRight } from "lucide-react";

const CARDS = [
  {
    name: "ISIC",
    who: "Pre študentov denného štúdia na ZŠ, SŠ a VŠ.",
    detail:
      "Medzinárodne uznávaný doklad o štatúte študenta, zľavy na Slovensku aj v zahraničí a zľavnené cestovné.",
    linkLabel: "Zistiť nárok na ISIC",
    href: "https://isic.sk/narok-na-preukaz-isic/",
  },
  {
    name: "ITIC",
    who: "Pre učiteľov, pedagogických a odborných zamestnancov škôl.",
    detail: "Viac ako 700 zliav na Slovensku a medzinárodné potvrdenie o statuse učiteľa.",
    linkLabel: "Zistiť nárok na ITIC",
    href: "https://itic.sk/narok-na-preukaz-itic/",
  },
  {
    name: "EURO<26",
    who: "Pre kohokoľvek od 6 do 27 rokov, aj keď neštuduje.",
    detail: "Vyše 2200 miest so zľavami na Slovensku, platí v 36 krajinách Európy.",
    linkLabel: "Objednať EURO<26",
    href: "https://objednaj-preukaz.sk/kategoria-produktu/som-mlady/",
  },
];

export function Hero() {
  return (
    <section id="preukazy" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <p className="mb-3 inline-block rounded-full bg-brand-pink px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
          Kontakt a pomoc
        </p>
        <h1 className="max-w-3xl text-3xl leading-tight md:text-5xl">
          Preukazy ISIC, ITIC a EURO&lt;26 — na čo slúžia, pre koho sú a ako ich získate?
        </h1>
        <p className="mt-4 max-w-3xl text-base text-brand-gray md:text-lg">
          Preukazy vydáva združenie CKM SYTS. Fungujú ako medzinárodne uznávaný doklad o štatúte
          študenta, mládého človeka či učiteľa. Prinášajú zľavy na Slovensku aj v zahraničí a pre
          ISIC aj zľavnené cestovné vo verejnej doprave. Nižšie nájdete odpovede na najčastejšie
          otázky, chat aj kontaktný formulár.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {CARDS.map((card) => (
            <article
              key={card.name}
              className="flex flex-col rounded-2xl border border-border bg-brand-teal-light p-6"
            >
              <h2 className="font-display text-2xl">{card.name}</h2>
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
