import { useState } from "react";
import { ArrowRight, RotateCcw, Sparkles } from "lucide-react";

interface Answer {
  id: string;
  label: string;
  emoji: string;
  result: ResultKey;
}

type ResultKey = "isic-zs-ss" | "isic-vs" | "itic" | "euro26";

const ANSWERS: Answer[] = [
  { id: "zs-ss", label: "Chodím na ZŠ alebo SŠ", emoji: "🎒", result: "isic-zs-ss" },
  { id: "vs", label: "Študujem na vysokej škole", emoji: "🎓", result: "isic-vs" },
  { id: "ucitel", label: "Učím / pracujem v škole", emoji: "🍎", result: "itic" },
  { id: "mlady", label: "Mám do 27 rokov a neštudujem", emoji: "🛹", result: "euro26" },
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

export function CardWizard({ onGoToForm }: { onGoToForm: () => void }) {
  const [choice, setChoice] = useState<ResultKey | null>(null);
  const result = choice ? RESULTS[choice] : null;

  return (
    <div className="rounded-lg border-2 border-foreground bg-brand-teal-light p-6 shadow-[8px_8px_0_var(--brand-teal)] md:p-8">
      <p className="inline-flex items-center gap-2 text-sm font-black tracking-wider text-brand-pink uppercase">
        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
        Sprievodca
      </p>
      <h2 className="mt-3 text-3xl md:text-4xl">Aký preukaz je pre mňa?</h2>

      {!result ? (
        <>
          <p className="mt-2 text-sm text-brand-gray">Vyberte, čo o Vás platí:</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {ANSWERS.map((answer) => (
              <button
                key={answer.id}
                type="button"
                onClick={() => setChoice(answer.result)}
                className="group flex items-center gap-3 rounded-lg border-2 border-foreground bg-card p-4 text-left text-sm font-bold transition-colors hover:bg-brand-yellow"
              >
                <span className="text-2xl transition-transform group-hover:scale-110 motion-reduce:transition-none">
                  {answer.emoji}
                </span>
                {answer.label}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="mt-5 rounded-lg border-2 border-foreground bg-card p-5">
          <p className="font-display text-2xl text-brand-teal-deep">{result.card}</p>
          <p className="mt-1 font-medium">{result.title}</p>
          <p className="mt-2 text-sm text-brand-gray">{result.text}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={result.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-teal px-4 py-2 text-sm font-bold text-foreground transition-colors hover:bg-brand-yellow"
            >
              {result.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={onGoToForm}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-yellow px-4 py-2 text-sm font-bold text-foreground transition-colors hover:bg-brand-teal"
            >
              Mám otázku — napísať nám
            </button>
            <button
              type="button"
              onClick={() => setChoice(null)}
              className="inline-flex items-center gap-2 rounded-[14px] px-3 py-2 text-sm text-brand-gray underline"
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
