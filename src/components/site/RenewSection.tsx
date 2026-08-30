import { useState } from "react";
import { BadgeCheck, CreditCard, Gift, Info, Smartphone, Ticket } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";

type Tab = {
  id: string;
  label: string;
  kicker: string;
  icon: typeof Ticket;
  title: string;
  intro: string;
  steps: string[];
  notes: string[];
  ctas: { label: string; href: string }[];
};

const TABS: Tab[] = [
  {
    id: "skola",
    label: "Preukaz zo školy (čipový)",
    kicker: "Predlžuje sa známkou",
    icon: Ticket,
    title: "ISIC (VŠ), ISIC / EURO<26 (ZŠ a SŠ) alebo ITIC vydaný školou",
    intro:
      "Čipový preukaz zo školy sa nekupuje nanovo — jeho platnosť predĺžite prolongačnou známkou. ISIC na VŠ, ISIC/EURO<26 na ZŠ a SŠ aj ITIC môžu byť čipové; ITIC má vlastnú známku s vlastnou sezónou.",
    steps: [
      "Zvoľte správnu známku podľa typu preukazu: ISIC (VŠ), ISIC/EURO<26 (ZŠ a SŠ) alebo ITIC.",
      "V objednávke zadajte priezvisko a číslo preukazu (ITIC v tvare T421… aj s koncovým písmenom).",
      "Zaplaťte — elektronické predĺženie platí ihneď po zakúpení, ešte pred doručením fyzickej známky.",
      "Fyzická známka sa distribuuje koncom augusta a začiatkom septembra, prípadne si ju vyzdvihnete na svojej škole.",
    ],
    notes: [
      "V čase kupónovej kampane dostanete pri predĺžení aj kupónovú knižku — fyzicky alebo elektronicky.",
      "Zľavu v doprave máte ako držiteľ ISIC zo zákona. Známka nepredlžuje dopravu, ale funkciu čipu — tú si predĺžite samostatne na ubian.sk.",
      "Preukaz žiaka s vizuálom Ubian (bez loga ISIC) známku zakúpiť nevie. Zľavy doplníte preukazom ISIC klasik z nášho e-shopu.",
    ],
    ctas: [
      { label: "Známka ISIC/EURO<26", href: "https://objednaj-preukaz.sk/produkt/znamka-isiceuro/" },
      { label: "Známka ITIC", href: "https://objednaj-preukaz.sk/produkt/znamka-itic/" },
      { label: "Predĺženie čipu (Ubian)", href: "https://www.ubian.sk/preukaz-studenta" },
    ],
  },
  {
    id: "klasik",
    label: "Klasik z e-shopu",
    kicker: "Kupuje sa nový preukaz",
    icon: CreditCard,
    title: "Nečipový preukaz alebo preukaz v mobile",
    intro:
      "Preukaz kúpený u nás — plastový aj digitálny — čip nemá a známkou sa nepredlžuje. Na ďalšie obdobie si jednoducho zakúpite nový preukaz v e-shope.",
    steps: [
      "V e-shope vyberte typ preukazu (ISIC klasik, ITIC alebo EURO<26).",
      "Zadajte priezvisko a číslo súčasnej karty — systém Vás overí.",
      "Nový preukaz sa vystaví s nadväzujúcou platnosťou, o žiadny deň neprídete.",
    ],
    notes: [
      "Nečipový preukaz spoznáte podľa platnosti: čipové končia k 09/2027 (ISIC) alebo 12/2027 (ITIC), nečipové majú platnosť rozloženú počas celého roka.",
      "Aj keď platnosť už uplynula, môžete si preukaz zakúpiť kedykoľvek.",
      "V čase kupónovej kampane dostanete ku kúpe aj kupónovú knižku — fyzicky alebo elektronicky.",
    ],
    ctas: [
      { label: "ISIC klasik", href: "https://objednaj-preukaz.sk/produkt/isic-klasik/" },
      { label: "Celý e-shop", href: "https://objednaj-preukaz.sk" },
    ],
  },
  {
    id: "euro26",
    label: "EURO<26",
    kicker: "Nová karta s nadväzujúcou platnosťou",
    icon: Smartphone,
    title: "EURO<26 sa známkou nepredlžuje",
    intro:
      "EURO<26 sa vždy obnovuje kúpou novej karty — virtuálnej do mobilu alebo plastovej domov. Karta je pre mladých od 6 do 27 rokov, aj keď nie sú študenti.",
    steps: [
      "Zakúpte si novú kartu EURO<26 v e-shope.",
      "Nová karta dostane nové číslo a platnosť nadviaže na tú súčasnú — zľavy využívate bez prerušenia.",
      "Držitelia ISIC môžu plynulo prejsť na EURO<26, keď skončia so štúdiom.",
    ],
    notes: [
      "Platnosť EURO<26 vyprší deň pred 27. narodeninami a ďalej sa nepredlžuje.",
      "Zľavy sú rovnaké ako komerčné ISIC zľavy, aplikácia sa volá my EYC.",
    ],
    ctas: [{ label: "Kúpiť EURO<26", href: "https://objednaj-preukaz.sk/kategoria-produktu/som-mlady/" }],
  },
];

const FIRST_TAB = TABS[0] as Tab;

export function RenewSection() {
  const [activeId, setActiveId] = useState(FIRST_TAB.id);
  const active: Tab = TABS.find((tab) => tab.id === activeId) ?? FIRST_TAB;
  const ActiveIcon = active.icon;

  return (
    <section id="obnovit-preukaz" className="relative overflow-hidden bg-brand-teal-light">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal>
          <p className="kicker text-brand-pink">Končí Vám platnosť?</p>
          <h2 className="text-balance-tight mt-3 font-display text-4xl sm:text-5xl">
            Ako si obnoviť platnosť preukazu
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Postup sa líši podľa toho, či máte čipový preukaz zo školy, alebo preukaz z nášho
            e-shopu. Vyberte si svoj prípad.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Typ preukazu">
          {TABS.map((tab) => {
            const isActive = tab.id === active.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(tab.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                  isActive
                    ? "bg-brand-yellow text-foreground"
                    : "bg-background text-foreground hover:bg-brand-teal"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <article className="mt-6 rounded-3xl bg-background p-7 shadow-sm md:p-10">
          <p className="kicker text-brand-pink">{active.kicker}</p>
          <h3 className="mt-2 flex items-center gap-3 font-display text-2xl uppercase sm:text-3xl">
            <ActiveIcon className="h-6 w-6 shrink-0 text-brand-pink" aria-hidden="true" />
            {active.title}
          </h3>
          <p className="mt-3 max-w-3xl text-muted-foreground">{active.intro}</p>

          <div className="mt-7 grid gap-7 md:grid-cols-2">
            <ol className="space-y-4">
              {active.steps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-teal font-display text-sm font-black text-foreground">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-sm">{step}</span>
                </li>
              ))}
            </ol>

            <ul className="space-y-3 rounded-2xl bg-brand-teal-light p-5">
              {active.notes.map((note) => (
                <li key={note} className="flex gap-3 text-sm">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-pink" aria-hidden="true" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {active.ctas.map((cta, index) => (
              <a
                key={cta.href}
                href={cta.href}
                target="_top"
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors ${
                  index === 0
                    ? "bg-brand-yellow text-foreground hover:bg-brand-teal"
                    : "bg-brand-teal-light text-foreground hover:bg-brand-teal"
                }`}
              >
                <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                {cta.label}
              </a>
            ))}
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Gift className="h-4 w-4 shrink-0 text-brand-pink" aria-hidden="true" />
            Počas kupónovej kampane je súčasťou predĺženia aj kupónová knižka — fyzická alebo
            elektronická.
          </p>
        </article>
      </div>
    </section>
  );
}
