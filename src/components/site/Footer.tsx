import { Facebook, Instagram, Linkedin, type LucideIcon } from "lucide-react";

import eycaLogo from "@/assets/eyca-logo.png.asset.json";
import isicLogo from "@/assets/isic-logo.png.asset.json";
import iticLogo from "@/assets/itic-logo.png.asset.json";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16.5 3c.3 1.9 1.4 3.4 3.5 3.7v2.6c-1.3.1-2.6-.3-3.7-1v5.9c0 3.6-2.6 6.1-6 6.1A5.8 5.8 0 0 1 4.5 14c.2-3 2.6-5.4 5.6-5.4.4 0 .7 0 1.1.1v2.9c-.3-.1-.6-.2-1-.2A2.6 2.6 0 1 0 12.8 14V3h3.7z" />
    </svg>
  );
}

type SocialLink = { label: string; href: string; icon: LucideIcon | typeof TikTokIcon };

const SOCIAL_GROUPS: { brand: string; links: SocialLink[] }[] = [
  {
    brand: "ISIC",
    links: [
      { label: "Instagram ISIC", href: "https://www.instagram.com/isic.slovakia/", icon: Instagram },
      { label: "TikTok ISIC", href: "https://www.tiktok.com/@isic_slovakia", icon: TikTokIcon },
    ],
  },
  {
    brand: "ISIC / EURO<26 — ZŠ a SŠ",
    links: [
      { label: "Facebook SŠ a ZŠ", href: "https://www.facebook.com/preukazisiceuro26", icon: Facebook },
      { label: "Facebook ZŠ", href: "https://www.facebook.com/ISICEURO26/", icon: Facebook },
      { label: "Instagram ZŠ", href: "https://www.instagram.com/isic.sk_zs/", icon: Instagram },
      { label: "Instagram SŠ", href: "https://www.instagram.com/isic_euro26/", icon: Instagram },
    ],
  },
  {
    brand: "EURO<26",
    links: [
      { label: "Facebook EURO<26", href: "https://www.facebook.com/Kartamladycheuro26/", icon: Facebook },
      { label: "Instagram EURO<26", href: "https://www.instagram.com/euro_26/", icon: Instagram },
    ],
  },
  {
    brand: "ITIC",
    links: [
      { label: "Facebook ITIC", href: "https://www.facebook.com/ITICSlovakia/", icon: Facebook },
    ],
  },
  {
    brand: "CKM SYTS",
    links: [
      { label: "LinkedIn CKM SYTS", href: "https://sk.linkedin.com/company/isic-slovakia", icon: Linkedin },
    ],
  },
];

const SITES = [
  { label: "isic.sk", href: "https://isic.sk" },
  { label: "itic.sk", href: "https://itic.sk" },
  { label: "euro26.sk", href: "https://euro26.sk" },
  { label: "ubian.sk — doprava a čip", href: "https://www.ubian.sk/preukaz-studenta" },
  { label: "objednaj-preukaz.sk — eshop", href: "https://objednaj-preukaz.sk" },
];

export function Footer() {
  return (
    <footer className="bg-brand-teal-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-display text-3xl text-primary-foreground">CKM SYTS</h2>
            <address className="mt-3 text-sm not-italic text-primary-foreground">
              Vysoká 32, 811 06 Bratislava
              <br />
              <a className="underline" href="tel:+421222119963">
                02 2211 9963
              </a>
            </address>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {[
                { src: isicLogo.url, alt: "ISIC" },
                { src: iticLogo.url, alt: "ITIC" },
                { src: eycaLogo.url, alt: "European Youth Card / EURO<26" },
              ].map((logo) => (
                <span
                  key={logo.alt}
                  className="inline-flex h-16 w-28 items-center bg-background p-2"
                >
                  <img src={logo.src} alt={logo.alt} className="h-full w-full object-contain" />
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl text-primary-foreground">Naše weby</h2>
            <ul className="mt-3 space-y-2 text-sm text-primary-foreground">
              {SITES.map((site) => (
                <li key={site.href}>
                  <a className="hover:underline" href={site.href} target="_blank" rel="noreferrer">
                    {site.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl text-primary-foreground">Sociálne siete</h2>
            <div className="mt-3 space-y-3 text-sm text-primary-foreground">
              {SOCIAL_GROUPS.map((group) => (
                <div key={group.brand}>
                   <p className="font-bold text-primary-foreground">{group.brand}</p>
                  <ul className="mt-1.5 flex flex-wrap gap-2">
                    {group.links.map((link) => {
                      const Icon = link.icon;
                      return (
                        <li key={link.href + link.label}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={link.label}
                            title={link.label}
                             className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-foreground text-primary-foreground transition-colors hover:bg-brand-yellow hover:text-foreground"
                          >
                            <Icon className="h-4 w-4" />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t-2 border-brand-teal pt-6 text-xs text-primary-foreground">
          <p>© {new Date().getFullYear()} CKM SYTS. Všetky práva vyhradené.</p>
          <a className="hover:underline" href="https://isic.sk/cookies/" target="_blank" rel="noreferrer">
            Cookies policy
          </a>
        </div>
      </div>
    </footer>
  );
}
