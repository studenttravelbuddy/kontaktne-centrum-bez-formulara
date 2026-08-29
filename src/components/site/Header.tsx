import { Phone } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur">
      <div className="bg-brand-teal-deep px-4 py-2 text-center text-sm text-white">
        Končí Vám platnosť preukazu? Pozrite si, ako si ju obnoviť —{" "}
        <a
          className="underline underline-offset-2"
          href="https://isic.sk/ako-si-obnovit-platnost-preukazu/"
          target="_blank"
          rel="noreferrer"
        >
          isic.sk/ako-si-obnovit-platnost-preukazu
        </a>
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="font-display text-xl font-black text-brand-teal-deep">ISIC</span>
          <span className="text-border">|</span>
          <span className="font-display text-xl font-black text-brand-teal-deep">ITIC</span>
          <span className="text-border">|</span>
          <span className="font-display text-xl font-black text-brand-teal-deep">
            EURO&lt;26
          </span>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm">
          <a className="hover:text-brand-teal" href="#preukazy">
            Preukazy
          </a>
          <a className="hover:text-brand-teal" href="#faq">
            Časté otázky
          </a>
          <a className="hover:text-brand-teal" href="#formular">
            Kontaktný formulár
          </a>
          <a
            href="tel:+421222119963"
            className="inline-flex items-center gap-2 rounded-[14px] bg-brand-yellow px-4 py-2 font-medium text-brand-teal-deep transition-opacity hover:opacity-90"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            02 2211 9963
          </a>
        </nav>
      </div>
    </header>
  );
}
