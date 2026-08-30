import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

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

export function Header() {
  const [active, setActive] = useState("#preukazy");

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
      <div className="bg-brand-teal-deep px-4 py-2 text-center text-sm font-bold text-primary-foreground">
        Končí Vám platnosť preukazu? Pozrite si, ako si ju obnoviť —{" "}
        <a className="underline underline-offset-2" href="#obnovit-preukaz">
          ako si obnoviť platnosť preukazu
        </a>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#preukazy" className="flex items-center gap-3" aria-label="Preukazy ISIC, ITIC a EYC">
          {[
            { src: isicLogo.url, alt: "ISIC" },
            { src: iticLogo.url, alt: "ITIC" },
            { src: eycaLogo.url, alt: "European Youth Card / EURO<26" },
          ].map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-auto w-24 shrink-0 sm:w-28"
            />
          ))}
        </a>
        <nav className="flex flex-wrap items-center gap-1 text-sm md:gap-2">
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
            className="inline-flex items-center gap-2 rounded-full bg-brand-teal px-5 py-2 font-bold text-foreground transition-colors hover:bg-brand-yellow"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            02 2211 9963
          </a>
        </nav>
      </div>
    </header>
  );
}

