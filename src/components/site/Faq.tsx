import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Reveal } from "@/components/site/Reveal";
import { FAQ_ITEMS } from "@/lib/faq";

export function Faq({
  onOpenChat,
  onGoToForm,
}: {
  onOpenChat: () => void;
  onGoToForm: () => void;
}) {
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return FAQ_ITEMS;
    return FAQ_ITEMS.filter(
      (item) =>
        item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <section id="faq" className="bg-background">
      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <Reveal>
          <h2 className="text-2xl md:text-3xl">Pýtate sa? Odpovedáme.</h2>
          <p className="mt-2 text-brand-gray">
            Najčastejšie otázky držiteľov preukazov ISIC, ITIC a EURO&lt;26.
          </p>
        </Reveal>

        <div className="relative mt-6">
          <Search
            className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-brand-gray"
            aria-hidden="true"
          />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Hľadajte v otázkach — napríklad doprava, predĺženie, platba…"
            aria-label="Hľadať v častých otázkach"
            className="rounded-[14px] pl-9"
          />
        </div>

        {items.length === 0 ? (
          <p className="mt-8 rounded-2xl bg-muted p-5 text-sm">
            Na „{query}" sme nič nenašli.{" "}
            <button
              type="button"
              onClick={onOpenChat}
              className="font-medium text-brand-teal-deep underline"
            >
              Skúste chat
            </button>{" "}
            alebo{" "}
            <button
              type="button"
              onClick={onGoToForm}
              className="font-medium text-brand-teal-deep underline"
            >
              napíšte nám cez formulár
            </button>
            .
          </p>
        ) : (
          <Accordion type="single" collapsible className="mt-6">
            {items.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className="mb-3 rounded-2xl border border-border bg-card px-5 transition-colors hover:border-brand-teal"
              >
                <AccordionTrigger className="text-left font-display text-base hover:no-underline md:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-brand-gray">
                  {item.answer}
                  <div className="mt-3">
                    <button
                      type="button"
                      onClick={onGoToForm}
                      className="rounded-full bg-brand-teal-light px-3 py-1 text-xs font-medium text-brand-teal-deep transition-colors hover:bg-brand-teal hover:text-white"
                    >
                      Nepomohlo? Napíšte nám →
                    </button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}

        <p className="mt-8 rounded-2xl bg-brand-teal-light p-5 text-sm">
          Nenašli ste odpoveď?{" "}
          <button
            type="button"
            onClick={onOpenChat}
            className="font-medium text-brand-teal-deep underline"
          >
            Opýtajte sa nášho chatu vpravo dole
          </button>
          , zavolajte nám alebo{" "}
          <button
            type="button"
            onClick={onGoToForm}
            className="font-medium text-brand-teal-deep underline"
          >
            vyplňte formulár nižšie
          </button>
          .
        </p>
      </div>
    </section>
  );
}
