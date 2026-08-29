import { FileText, ListChecks, MessagesSquare } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";

const STEPS = [
  {
    number: "01",
    icon: MessagesSquare,
    title: "Opýtajte sa chatu",
    text: "Bublina vpravo dole odpovedá na bežné otázky o preukazoch, platbách, doprave a zľavách — 24/7 a bez čakania.",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Prezrite si časté otázky",
    text: "Najčastejšie riešené situácie sú spracované nižšie v prehľadnom zozname otázok a odpovedí.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Napíšte nám cez formulár",
    text: "Ak treba pozrieť do Vášho účtu, vyplňte formulár. Dopyt automaticky poputuje kolegyniam, ktoré danú oblasť riešia.",
  },
];

export function Steps() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <Reveal>
          <h2 className="text-2xl md:text-3xl">Ako sa k odpovedi dostanete najrýchlejšie</h2>
        </Reveal>
        <div className="relative mt-8 grid gap-5 md:grid-cols-3">
          <div
            aria-hidden="true"
            className="absolute top-12 right-6 left-6 hidden border-t-2 border-dashed border-border md:block"
          />
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.number} delay={index * 120}>
                <article className="relative h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-30px_var(--brand-teal-deep)] motion-reduce:hover:translate-y-0">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal-deep font-display text-lg text-white">
                    {step.number}
                  </span>
                  <h3 className="mt-4 flex items-center gap-2 font-display text-xl">
                    <Icon className="h-5 w-5 text-brand-teal" aria-hidden="true" />
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-gray">{step.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
