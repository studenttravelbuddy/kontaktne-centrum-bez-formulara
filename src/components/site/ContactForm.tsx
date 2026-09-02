import { Mail, Phone } from "lucide-react";

export function ContactForm() {
  return (
    <section id="formular" className="bg-brand-teal-light">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
        <p className="text-sm font-black tracking-wider text-brand-pink uppercase">Napíšte nám</p>
        <h2 className="text-balance-tight mt-3 text-4xl sm:text-5xl">Kontaktný formulár</h2>
        <p className="mt-4 text-muted-foreground">
          Vyberte, ako nás chcete kontaktovať. Kolegyne Vám poradia s preukazmi ISIC, ITIC a
          EURO&lt;26, zľavami aj dopravou.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <a
            href="tel:+421222119963"
            target="_top"
            className="group flex flex-col items-start gap-4 rounded-2xl bg-brand-yellow p-6 transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
          >
            <span className="inline-flex size-12 items-center justify-center rounded-full bg-background text-foreground">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-xl font-black text-foreground">Zavolajte nám</p>
              <p className="mt-1 text-sm text-foreground/90">
                Naše kolegyne Vám poradia aj po telefóne.
              </p>
            </div>
            <span className="mt-2 inline-flex items-center gap-2 font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-4">
              02 2211 9963
            </span>
          </a>

          <a
            href="https://isic.sk/kontaktny-formular/2"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start gap-4 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-brand-teal/20 transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
          >
            <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand-teal-light text-brand-teal-deep">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-xl font-black text-foreground">Napíšte nám</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Prejdite do kontaktného formulára na isic.sk. Dopyt sa automaticky doručí
                kolegyniam, ktoré danú oblasť riešia.
              </p>
            </div>
            <span className="mt-2 inline-flex items-center gap-2 font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-4">
              Otvoriť formulár
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
