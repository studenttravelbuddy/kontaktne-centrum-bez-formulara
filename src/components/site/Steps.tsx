import { FileText, Phone } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";

const STEPS = [
  {
    number: "01",
    icon: Phone,
    title: "Zavolajte nám",
    text: "Najrýchlejšia cesta k odpovedi — kolegyne Vám poradia s preukazmi, platbami, dopravou aj zľavami na 02 2211 9963.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Napíšte nám cez formulár",
    text: "Ak treba pozrieť do Vášho účtu, vyplňte formulár na isic.sk. Dopyt automaticky poputuje kolegyniam, ktoré danú oblasť riešia.",
  },
];

export function Steps() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal>
          <p className="kicker text-brand-pink">Dva jednoduché kroky</p>
          <h2 className="text-balance-tight mt-3 font-display text-4xl sm:text-5xl">
            Ako sa k odpovedi dostanete najrýchlejšie
          </h2>
        </Reveal>
        <div className="relative mt-8 grid gap-5 md:grid-cols-2">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.number} delay={index * 120}>
                <article className="relative h-full rounded-3xl bg-brand-teal-light p-7 transition-transform duration-200 hover:-translate-y-1 motion-reduce:hover:translate-y-0">
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand-yellow font-display text-lg font-black text-foreground">
                    {step.number}
                  </span>
                  <h3 className="mt-5 flex items-center gap-2 font-display text-xl uppercase">
                    <Icon className="h-5 w-5 text-brand-pink" aria-hidden="true" />
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
