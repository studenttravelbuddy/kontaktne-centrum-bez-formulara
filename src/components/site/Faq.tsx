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

export function Faq() {
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return FAQ_ITEMS;
    return FAQ_ITEMS.filter(
      (item) => item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <section id="faq" className="bg-brand-teal-light">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal>
          <p className="kicker text-brand-pink">Časté otázky</p>
          <h2 className="text-balance-tight mt-3 font-display text-4xl sm:text-5xl">
            Pýtate sa? Odpovedáme.
          </h2>
          <p className="mt-4 text-muted-foreground">
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
            className="h-12 bg-background pl-10"
          />
        </div>

        {items.length === 0 ? (
          <p className="mt-8 rounded-2xl bg-background p-5 text-sm">
            Na „{query}" sme nič nenašli.{" "}
            <a
              href="https://isic.sk/kontaktny-formular/2"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-teal-deep underline"
            >
              Napíšte nám cez formulár
            </a>{" "}
            alebo nám zavolajte na{" "}
            <a
              href="tel:+421222119963"
              target="_top"
              className="font-medium text-brand-teal-deep underline"
            >
              02 2211 9963
            </a>
            .
          </p>
        ) : (
          <Accordion type="single" collapsible className="mt-6">
            {items.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className="mb-4 rounded-2xl bg-card px-5"
              >
                <AccordionTrigger className="text-left font-display text-lg font-bold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {item.answer}
                  <div className="mt-3">
                    <a
                      href="https://isic.sk/kontaktny-formular/2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-4"
                    >
                      Nepomohlo? Napíšte nám →
                    </a>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}

        <p className="mt-8 rounded-2xl bg-brand-yellow p-5 text-sm">
          Nenašli ste odpoveď?{" "}
          <a
            href="https://isic.sk/kontaktny-formular/2"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-teal-deep underline"
          >
            Vyplňte kontaktný formulár
          </a>{" "}
          alebo nám rovno zavolajte na{" "}
          <a
            href="tel:+421222119963"
            target="_top"
            className="font-medium text-brand-teal-deep underline"
          >
            02 2211 9963
          </a>
          .
        </p>
      </div>
    </section>
  );
}
