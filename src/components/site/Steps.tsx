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
    <section className="relative overflow-hidden border-b-2 border-foreground bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal>
          <p className="text-sm font-black tracking-wider text-brand-pink uppercase">Tri jednoduché kroky</p>
          <h2 className="text-balance-tight mt-3 text-4xl sm:text-5xl">Ako sa k odpovedi dostanete najrýchlejšie</h2>
        </Reveal>
        <div className="relative mt-8 grid gap-5 md:grid-cols-3">
          <div
            aria-hidden="true"
            className="absolute top-12 right-6 left-6 hidden border-t-4 border-dashed border-brand-teal md:block"
          />
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.number} delay={index * 120}>
                <article className="relative h-full rounded-lg border-2 border-foreground bg-card p-6 shadow-[8px_8px_0_var(--brand-teal)] transition-transform duration-200 hover:-translate-y-1 motion-reduce:hover:translate-y-0">
                  <span className="inline-flex size-12 items-center justify-center rounded-full border-2 border-foreground bg-brand-yellow font-display text-lg font-black text-foreground">
                    {step.number}
                  </span>
                  <h3 className="mt-4 flex items-center gap-2 font-display text-xl">
                    <Icon className="h-5 w-5 text-brand-teal" aria-hidden="true" />
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
