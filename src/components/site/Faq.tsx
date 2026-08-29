import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/faq";

export function Faq({ onOpenChat }: { onOpenChat: () => void }) {
  return (
    <section id="faq" className="bg-background">
      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl">Pýtate sa? Odpovedáme.</h2>
        <p className="mt-2 text-brand-gray">
          Najčastejšie otázky držiteľov preukazov ISIC, ITIC a EURO&lt;26.
        </p>

        <Accordion type="single" collapsible className="mt-8">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`faq-${index}`}
              className="rounded-2xl border border-border bg-card mb-3 px-5"
            >
              <AccordionTrigger className="text-left font-display text-base hover:no-underline md:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-brand-gray">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="mt-8 rounded-2xl bg-brand-teal-light p-5 text-sm">
          Nenašli ste odpoveď?{" "}
          <button
            type="button"
            onClick={onOpenChat}
            className="font-medium text-brand-teal-deep underline"
          >
            Opýtajte sa nášho chatu vpravo dole
          </button>
          , alebo{" "}
          <a className="font-medium text-brand-teal-deep underline" href="#formular">
            vyplňte formulár nižšie
          </a>
          .
        </p>
      </div>
    </section>
  );
}
