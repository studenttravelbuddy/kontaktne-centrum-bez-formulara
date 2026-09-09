import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import eycaLogo from "@/assets/eyca-logo.svg.asset.json";
import isicLogo from "@/assets/isic-logo.svg.asset.json";
import iticLogo from "@/assets/itic-logo.svg.asset.json";

const NAV = [
  { href: "#preukazy", label: "Preukazy" },
  { href: "#zlavy", label: "Naj zľavy" },
  { href: "#kampan", label: "Ready for More" },
  { href: "#faq", label: "Časté otázky" },
  { href: "#formular", label: "Napíšte nám" },
];

const LOGOS = [
  { src: isicLogo.url, alt: "ISIC" },
  { src: iticLogo.url, alt: "ITIC" },
  { src: eycaLogo.url, alt: "European Youth Card / EURO<26" },
];

export function Header() {
  const [active, setActive] = useState("#preukazy");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = NAV.map((item) => document.getElementById(item.href.slice(1))).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.05, 0.3, 0.6] },
    );
    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur">
      <div className="bg-brand-teal-deep px-4 py-1.5 text-center text-xs font-bold text-primary-foreground sm:py-2 sm:text-sm">
        <span className="hidden sm:inline">Končí Vám platnosť preukazu? Pozrite si, </span>
        <a className="underline underline-offset-2" href="#obnovit-preukaz">
          ako si obnoviť platnosť preukazu
        </a>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-2 sm:flex-wrap sm:gap-3 sm:px-6 sm:py-3">
        <a
          href="#preukazy"
          className="flex min-w-0 items-center gap-1.5 sm:gap-3"
          aria-label="Preukazy ISIC, ITIC a EYC"
        >
          {LOGOS.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-auto w-16 shrink-0 sm:w-28"
            />
          ))}
        </a>

        <div className="flex shrink-0 items-center gap-2 sm:hidden">
          <a
            href="tel:+421222119963"
            target="_top"
            aria-label="Zavolať na 02 2211 9963"
            className="inline-flex size-11 items-center justify-center rounded-full bg-brand-teal text-foreground"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Zavrieť menu" : "Otvoriť menu"}
            className="inline-flex size-11 items-center justify-center rounded-full bg-brand-yellow text-foreground"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>

        <nav className="hidden flex-wrap items-center gap-1 text-sm sm:flex md:gap-2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              className={`rounded-full px-3 py-1.5 font-bold transition-colors ${
                active === item.href
                  ? "bg-brand-yellow text-foreground"
                  : "hover:bg-brand-teal-light"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:+421222119963"
            target="_top"
            className="inline-flex items-center gap-2 rounded-full bg-brand-teal px-5 py-2 font-bold text-foreground transition-colors hover:bg-brand-yellow"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            02 2211 9963
          </a>
        </nav>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-brand-teal/25 bg-background px-4 pb-3 sm:hidden"
        >
          <ul className="flex flex-col py-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.href ? "true" : undefined}
                  className={`flex min-h-11 items-center rounded-xl px-3 text-sm font-bold ${
                    active === item.href ? "bg-brand-yellow text-foreground" : "text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#obnovit-preukaz"
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-xl px-3 text-sm font-bold text-foreground"
              >
                Obnoviť platnosť
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
