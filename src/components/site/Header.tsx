import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

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
        <a href="#preukazy" className="flex items-center gap-2">
          <span className="font-display text-xl font-black text-brand-teal-deep">ISIC</span>
          <span className="text-border">|</span>
          <span className="font-display text-xl font-black text-brand-teal-deep">ITIC</span>
          <span className="text-border">|</span>
          <span className="font-display text-xl font-black text-brand-teal-deep">EURO&lt;26</span>
        </a>
        <nav className="flex flex-wrap items-center gap-1 text-sm md:gap-2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              className={`rounded-full px-3 py-1.5 transition-colors ${
                active === item.href
                  ? "bg-brand-teal-light font-medium text-brand-teal-deep"
                  : "hover:bg-muted hover:text-brand-teal"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:+421222119963"
            className="inline-flex items-center gap-2 rounded-[14px] bg-brand-yellow px-4 py-2 font-medium text-brand-teal-deep transition-transform hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            02 2211 9963
          </a>
        </nav>
      </div>
    </header>
  );
}
