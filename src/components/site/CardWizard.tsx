import { useState } from "react";
import {
  ArrowRight,
  Backpack,
  GraduationCap,
  Presentation,
  RotateCcw,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";

interface Answer {
  id: string;
  label: string;
  Icon: LucideIcon;
  result: ResultKey;
}

type ResultKey = "isic-zs-ss" | "isic-vs" | "itic" | "euro26";

const ANSWERS: Answer[] = [
  { id: "zs-ss", label: "Chodím na ZŠ alebo SŠ", Icon: Backpack, result: "isic-zs-ss" },
  { id: "vs", label: "Študujem na vysokej škole", Icon: GraduationCap, result: "isic-vs" },
  { id: "ucitel", label: "Učím / pracujem v škole", Icon: Presentation, result: "itic" },
  { id: "mlady", label: "Mám do 27 rokov a neštudujem", Icon: Zap, result: "euro26" },
];


interface ResultInfo {
  card: string;
  title: string;
  text: string;
  href: string;
  cta: string;
  school?: { label: string; href: string; text: string };
  shop?: { label: string; href: string; text: string };
  options?: { kicker: string; label: string; href: string; text: string }[];
  note?: string;
}

const RESULTS: Record<ResultKey, ResultInfo> = {
  "isic-zs-ss": {
    card: "ISIC / EURO<26",
    title: "Preukaz žiaka ZŠ a SŠ",
    text: "Slúži ako doklad o štúdiu, prináša zľavnené cestovné vo vlakoch a autobusoch a tisíce zliav na Slovensku aj v zahraničí.",
    href: "https://isic.sk/preukaz-ziaka-ss-a-zs-isic-euro/",
    cta: "Ako ho získať",
    school: {
      label: "Zoznam zapojených ZŠ a SŠ",
      href: "https://isic.sk/zoznam-skol-ss-a-zs/",
      text: "Školský (co-brand) preukaz s čipom vydáva Vaša škola — slúži aj na dopravu, stravu a vstupy. Overte si, či je škola zapojená.",
    },
    shop: {
      label: "Objednať ISIC klasik",
      href: "https://objednaj-preukaz.sk/produkt/isic-klasik/",
      text: "Ak škola v zozname nie je alebo chcete preukaz hneď, objednajte si ISIC klasik z nášho e-shopu.",
    },
    note: "Klasik nemá čip (nedá sa naň nabiť kredit ani električenka), no je plnohodnotným dokladom o statuse študenta a platia s ním všetky komerčné zľavy.",
  },
  "isic-vs": {
    card: "ISIC",
    title: "Preukaz študenta VŠ",
    text: "Medzinárodný doklad o štatúte študenta, zľavnené cestovné a zľavy v 130 krajinách.",
    href: "https://isic.sk/univerzitny-vysokoskolsky-preukaz-studenta-isic/",
    cta: "Ako ho získať",
    school: {
      label: "Zoznam VŠ vydávajúcich ISIC",
      href: "https://isic.sk/zoznam-vs-kde-vybavis-isic/",
      text: "Školský (co-brand) preukaz s čipom vydáva Vaša vysoká škola a platnosť si predlžujete známkou.",
    },
    shop: {
      label: "Objednať ISIC klasik",
      href: "https://objednaj-preukaz.sk/produkt/isic-klasik/",
      text: "Nie ste na zapojenej škole? ISIC klasik alebo ISIC do mobilu kúpite priamo v našom e-shope.",
    },
    note: "Klasik nemá čip (bez kreditu a električenky), ale je plnohodnotným dokladom o statuse študenta so všetkými komerčnými zľavami.",
  },
  itic: {
    card: "ITIC",
    title: "Preukaz učiteľa",
    text: "Pre pedagogických a odborných zamestnancov škôl. Viac ako 700 zliav na Slovensku a medzinárodné potvrdenie statusu učiteľa.",
    href: "https://itic.sk/narok-na-preukaz-itic/",
    cta: "Zistiť nárok",
    school: {
      label: "Zapojené stredné školy ITIC",
      href: "https://itic.sk/zapojene-stredne-skoly-itic/",
      text: "Školský (co-brand) preukaz ITIC vydávajú zapojené školy. Zoznam vysokých škôl nájdete tu: itic.sk/zapojene-vysoke-skoly-itic.",
    },
    shop: {
      label: "Objednať ITIC",
      href: "https://objednaj-preukaz.sk/kategoria-produktu/som-ucitel/",
      text: "Ak škola preukazy nevydáva, ITIC klasik alebo ITIC do mobilu objednáte v našom e-shope.",
    },
    note: "ITIC klasik nemá čip, no všetky komerčné zľavy a medzinárodné potvrdenie statusu učiteľa platia rovnako.",
  },
  euro26: {
    card: "EURO<26",
    title: "Preukaz mladého človeka",
    text: "Pre kohokoľvek od 6 do 27 rokov aj bez štúdia — externisti, absolventi aj pracujúci. Vyše 2 200 miest so zľavami na Slovensku a platnosť v 36 krajinách Európy.",
    href: "https://objednaj-preukaz.sk/kategoria-produktu/som-mlady/",
    cta: "Objednať preukaz",
    options: [
      {
        kicker: "Plynulý prechod",
        label: "Prejsť z ISIC na EURO<26",
        href: "https://objednaj-preukaz.sk/kategoria-produktu/som-mlady/",
        text: "Skončili ste štúdium a mali ste ISIC? Na EURO<26 prejdete plynulo — nová karta dostane nové číslo a jej platnosť nadväzuje na tú súčasnú, takže nevzniká medzera v zľavách.",
      },
      {
        kicker: "Nový držiteľ s nárokom na preukaz",
        label: "Objednať EURO<26",
        href: "https://objednaj-preukaz.sk/kategoria-produktu/som-mlady/",
        text: "Máte 6–27 rokov? Objednajte si EURO<26 priamo v našom e-shope a využívajte tisíce zliav na Slovensku aj v zahraničí.",
      },
    ],
    note: "EURO<26 nemá čip, takže nenahrádza dopravnú funkciu školského preukazu.",
  },
};


// Farby zodpovedajú preukazom v kartách nižšie: ISIC tyrkysová/žltá, ITIC oranžová, EURO<26 magenta
const ANSWER_TONES: Record<string, string> = {
  "zs-ss": "bg-brand-teal text-brand-teal-deep",
  vs: "bg-[#FEEF00] text-foreground",
  ucitel: "bg-brand-orange text-primary-foreground",
  mlady: "bg-brand-pink text-primary-foreground",
};

const ANSWER_CHIPS: Record<string, string> = {
  "zs-ss": "bg-background/90 text-brand-teal-deep",
  vs: "bg-background/90 text-foreground",
  ucitel: "bg-background/95 text-brand-orange-dark",
  mlady: "bg-background/95 text-brand-pink-dark",
};


export function CardWizard() {
  const [choice, setChoice] = useState<ResultKey | null>(null);
  const result = choice ? RESULTS[choice] : null;

  return (
    <div className="rounded-[2rem] bg-brand-teal-light p-6 md:p-10">
      <p className="kicker inline-flex items-center gap-2 text-brand-pink">
        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
        Vyber si svoju výhodu
      </p>
      <h2 className="mt-3 font-display text-4xl sm:text-5xl">Kto si?</h2>

      {!result ? (
        <>
          <p className="mt-3 text-sm text-brand-gray">Vyberte, čo o Vás platí:</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ANSWERS.map((answer) => (
              <button
                key={answer.id}
                type="button"
                onClick={() => setChoice(answer.result)}
                className={`group flex h-full flex-col items-start gap-4 rounded-3xl p-6 text-left transition-transform duration-200 hover:-translate-y-1 motion-reduce:hover:translate-y-0 ${ANSWER_TONES[answer.id]}`}
              >
                <answer.Icon className="h-7 w-7" aria-hidden="true" />
                <span className="font-display text-2xl leading-tight font-black uppercase">
                  {answer.label}
                </span>
                <span className={`chip mt-auto ${ANSWER_CHIPS[answer.id]}`}>
                  Zistiť viac
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>

              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="mt-6 rounded-3xl bg-card p-6">
          <p className="kicker text-brand-pink">{result.card}</p>
          <p className="mt-2 font-display text-3xl uppercase text-brand-teal-deep">
            {result.title}
          </p>
          <p className="mt-3 text-sm text-brand-gray">{result.text}</p>

          {(result.school || result.shop) && (
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {result.school && (
                <div className="rounded-2xl bg-brand-teal-light p-4">
                  <p className="kicker text-brand-teal-deep">Cez školu (co-brand)</p>
                  <p className="mt-2 text-sm text-brand-gray">{result.school.text}</p>
                  <a
                    href={result.school.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-brand-teal-deep underline decoration-brand-pink decoration-2 underline-offset-4"
                  >
                    {result.school.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              )}
              {result.shop && (
                <div className="rounded-2xl bg-brand-teal-light p-4">
                  <p className="kicker text-brand-teal-deep">
                    {result.card === "EURO<26" ? "Plynulý prechod" : "Klasik z e-shopu"}
                  </p>
                  <p className="mt-2 text-sm text-brand-gray">{result.shop.text}</p>
                  <a
                    href={result.shop.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-brand-teal-deep underline decoration-brand-pink decoration-2 underline-offset-4"
                  >
                    {result.shop.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              )}
            </div>
          )}

          {result.options && (
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {result.options.map((option) => (
                <div key={option.label} className="rounded-2xl bg-brand-teal-light p-4">
                  <p className="kicker text-brand-teal-deep">{option.kicker}</p>
                  <p className="mt-2 text-sm text-brand-gray">{option.text}</p>
                  <a
                    href={option.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-brand-teal-deep underline decoration-brand-pink decoration-2 underline-offset-4"
                  >
                    {option.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              ))}
            </div>
          )}

          {result.note && <p className="mt-4 text-xs text-brand-gray">{result.note}</p>}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={result.href}
              target="_blank"
              rel="noreferrer"
              className="chip bg-brand-teal px-5 py-2.5 text-foreground transition-colors hover:bg-brand-yellow"
            >
              {result.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://isic.sk/kontaktny-formular/2"
              target="_blank"
              rel="noopener noreferrer"
              className="chip bg-brand-yellow px-5 py-2.5 text-foreground transition-colors hover:bg-brand-teal"
            >
              Mám otázku — napísať nám
            </a>
            <button
              type="button"
              onClick={() => setChoice(null)}
              className="chip px-3 py-2.5 text-brand-gray underline underline-offset-4"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Späť
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

