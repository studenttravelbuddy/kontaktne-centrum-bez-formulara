const STEPS = [
  {
    number: "01",
    title: "Opýtajte sa chatu",
    text: "Bublina vpravo dole odpovedá na bežné otázky o preukazoch, platbách, doprave a zľavách — 24/7 a bez čakania.",
  },
  {
    number: "02",
    title: "Prezrite si časté otázky",
    text: "Najčastejšie riešené situácie sú spracované nižšie v prehľadnom zozname otázok a odpovedí.",
  },
  {
    number: "03",
    title: "Napíšte nám cez formulár",
    text: "Ak treba pozrieť do Vášho účtu, vyplňte formulár. Dopyt automaticky poputuje kolegyniam, ktoré danú oblasť riešia.",
  },
];

export function Steps() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl">Ako sa k odpovedi dostanete najrýchlejšie</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {STEPS.map((step) => (
            <article key={step.number} className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-bold tracking-widest text-brand-teal uppercase">
                Krok {step.number}
              </p>
              <h3 className="mt-3 font-display text-xl">{step.title}</h3>
              <p className="mt-2 text-sm text-brand-gray">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
