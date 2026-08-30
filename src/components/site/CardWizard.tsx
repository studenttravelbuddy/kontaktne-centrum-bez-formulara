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


const RESULTS: Record<
  ResultKey,
  { card: string; title: string; text: string; href: string; cta: string }
> = {
  "isic-zs-ss": {
    card: "ISIC / EURO<26",
    title: "Preukaz žiaka ZŠ a SŠ",
    text: "Slúži ako doklad o štúdiu, prináša zľavnené cestovné vo vlakoch a autobusoch a tisíce zliav na Slovensku aj v zahraničí. Vydáva ho Vaša škola.",
    href: "https://isic.sk/preukaz-ziaka-ss-a-zs-isic-euro/",
    cta: "Ako ho získať",
  },
  "isic-vs": {
    card: "ISIC",
    title: "Preukaz študenta VŠ",
    text: "Medzinárodný doklad o štatúte študenta, zľavnené cestovné a zľavy v 130 krajinách. Vydáva ho Vaša vysoká škola, platnosť si predlžujete známkou.",
    href: "https://isic.sk/univerzitny-vysokoskolsky-preukaz-studenta-isic/",
    cta: "Ako ho získať",
  },
  itic: {
    card: "ITIC",
    title: "Preukaz učiteľa",
    text: "Pre pedagogických a odborných zamestnancov škôl. Viac ako 700 zliav na Slovensku a medzinárodné potvrdenie statusu učiteľa.",
    href: "https://itic.sk/narok-na-preukaz-itic/",
    cta: "Zistiť nárok",
  },
  euro26: {
    card: "EURO<26",
    title: "Preukaz mladého človeka",
    text: "Pre kohokoľvek od 6 do 27 rokov, aj bez štúdia. Vyše 2 200 miest so zľavami na Slovensku a platnosť v 36 krajinách Európy.",
    href: "https://objednaj-preukaz.sk/kategoria-produktu/som-mlady/",
    cta: "Objednať preukaz",
  },
};

// Farby zodpovedajú preukazom v kartách nižšie: ISIC tyrkysová/žltá, ITIC oranžová, EURO<26 magenta
const ANSWER_TONES: Record<string, string> = {
  "zs-ss": "bg-brand-teal text-brand-teal-deep",
  vs: "bg-brand-yellow text-foreground",
  ucitel: "bg-brand-orange text-primary-foreground",
  mlady: "bg-brand-pink text-primary-foreground",
};

const ANSWER_CHIPS: Record<string, string> = {
  "zs-ss": "bg-background/90 text-brand-teal-deep",
  vs: "bg-background/90 text-foreground",
  ucitel: "bg-background/95 text-brand-orange-dark",
  mlady: "bg-background/95 text-brand-pink-dark",
};


export function CardWizard({ onGoToForm }: { onGoToForm: () => void }) {
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
                <span className="chip mt-auto bg-background/85 text-foreground">
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
            <button
              type="button"
              onClick={onGoToForm}
              className="chip bg-brand-yellow px-5 py-2.5 text-foreground transition-colors hover:bg-brand-teal"
            >
              Mám otázku — napísať nám
            </button>
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

