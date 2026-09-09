import { Facebook, Instagram, Linkedin, Youtube, type LucideIcon } from "lucide-react";

import eycaLogo from "@/assets/eyca-logo.svg.asset.json";
import isicLogo from "@/assets/isic-logo.svg.asset.json";
import iticLogo from "@/assets/itic-logo.svg.asset.json";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16.5 3c.3 1.9 1.4 3.4 3.5 3.7v2.6c-1.3.1-2.6-.3-3.7-1v5.9c0 3.6-2.6 6.1-6 6.1A5.8 5.8 0 0 1 4.5 14c.2-3 2.6-5.4 5.6-5.4.4 0 .7 0 1.1.1v2.9c-.3-.1-.6-.2-1-.2A2.6 2.6 0 1 0 12.8 14V3h3.7z" />
    </svg>
  );
}

type SocialIcon = LucideIcon | typeof TikTokIcon;

type SocialLink = {
  label: string;
  name: string;
  href: string;
  icon: SocialIcon;
};

type SocialGroup = {
  brand: string;
  links: SocialLink[];
};

const SOCIAL_GROUPS: SocialGroup[] = [
  {
    brand: "ISIC VŠ",
    links: [
      {
        name: "Instagram",
        label: "Instagram ISIC VŠ",
        href: "https://www.instagram.com/isic.slovakia",
        icon: Instagram,
      },
      {
        name: "TikTok",
        label: "TikTok ISIC VŠ",
        href: "https://www.tiktok.com/@isic_slovakia",
        icon: TikTokIcon,
      },
    ],
  },
  {
    brand: "ISIC SŠ",
    links: [
      {
        name: "Facebook",
        label: "Facebook ISIC SŠ",
        href: "https://www.facebook.com/preukazisiceuro26",
        icon: Facebook,
      },
      {
        name: "Instagram",
        label: "Instagram ISIC SŠ",
        href: "https://www.instagram.com/isic_euro26",
        icon: Instagram,
      },
    ],
  },
  {
    brand: "ISIC ZŠ",
    links: [
      {
        name: "Facebook",
        label: "Facebook ISIC ZŠ",
        href: "https://www.facebook.com/ISICEURO26",
        icon: Facebook,
      },
      {
        name: "Instagram",
        label: "Instagram ISIC ZŠ",
        href: "https://www.instagram.com/isic.sk_zs",
        icon: Instagram,
      },
    ],
  },
  {
    brand: "EURO<26",
    links: [
      {
        name: "Facebook",
        label: "Facebook EURO<26",
        href: "https://www.facebook.com/Kartamladycheuro26",
        icon: Facebook,
      },
      {
        name: "Instagram",
        label: "Instagram EURO<26",
        href: "https://www.instagram.com/euro_26",
        icon: Instagram,
      },
    ],
  },
  {
    brand: "ITIC",
    links: [
      {
        name: "Facebook",
        label: "Facebook ITIC",
        href: "https://www.facebook.com/ITICSlovakia",
        icon: Facebook,
      },
    ],
  },
  {
    brand: "CKM SYTS",
    links: [
      {
        name: "LinkedIn",
        label: "LinkedIn CKM SYTS",
        href: "https://sk.linkedin.com/company/isic-slovakia",
        icon: Linkedin,
      },
      {
        name: "YouTube",
        label: "YouTube CKM SYTS",
        href: "https://www.youtube.com/@isiciticeuro26preukazy81",
        icon: Youtube,
      },
    ],
  },
];

const SITES = [
  { label: "isic.sk", href: "https://isic.sk" },
  { label: "itic.sk", href: "https://itic.sk" },
  { label: "euro26.sk", href: "https://euro26.sk" },
  { label: "Zľavy v doprave s ISIC", href: "https://isic.sk/akceptacia-isic-vo-verejnej-doprave" },
  { label: "objednaj-preukaz.sk — eshop", href: "https://objednaj-preukaz.sk" },
];

export function Footer() {
  return (
    <footer className="bg-brand-teal-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-8 md:grid-cols-3 sm:gap-10">
          <div>
            <h2 className="font-display">
              <span className="block text-2xl text-brand-yellow sm:text-4xl">
                CKM SYTS - student, youth and teacher services
              </span>
              <span className="mt-1 block text-base text-primary-foreground sm:text-lg">
                CKM združenie pre mládež, študentov a učiteľov
              </span>
            </h2>

            <address className="mt-3 text-sm not-italic text-primary-foreground">
              Vysoká 32, 811 06 Bratislava
              <br />
              <a className="underline" href="tel:+421222119963" target="_top">
                02 2211 9963
              </a>
            </address>
            <div className="mt-5 flex flex-nowrap items-center gap-2 sm:gap-3">
              {[
                { src: isicLogo.url, alt: "ISIC" },
                { src: iticLogo.url, alt: "ITIC" },
                { src: eycaLogo.url, alt: "European Youth Card / EURO<26" },
              ].map((logo) => (
                <div key={logo.alt} className="rounded-lg bg-white p-1.5 shadow-sm sm:p-2">
                  <img src={logo.src} alt={logo.alt} className="h-auto w-16 shrink-0 sm:w-24" />
                </div>
              ))}
            </div>

          </div>

          <div>
            <h2 className="font-display text-xl text-primary-foreground">Naše weby</h2>
            <ul className="mt-3 space-y-1 text-sm text-primary-foreground">
              {SITES.map((site) => (
                <li key={site.href}>
                  <a
                    className="inline-flex min-h-11 items-center hover:underline"

                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {site.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 text-left sm:mt-12">
          <h2 className="font-display text-xl text-primary-foreground">Sociálne siete</h2>
          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-6">

            {SOCIAL_GROUPS.map((group) => (
              <div key={group.brand}>
                <p className="text-xs font-bold uppercase tracking-wide text-brand-yellow">
                  {group.brand}
                </p>
                <ul className="mt-2 flex flex-col items-start gap-2">
                  {group.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_top"
                          aria-label={link.label}
                          title={link.label}
                          className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-primary-foreground px-3 py-1 text-sm whitespace-nowrap text-primary-foreground transition-colors hover:bg-brand-yellow hover:text-foreground"
                        >
                          <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                          <span>{link.name}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t-2 border-brand-teal pt-6 text-xs text-primary-foreground">
          <p>© {new Date().getFullYear()} CKM SYTS. Všetky práva vyhradené.</p>
          <a
            className="hover:underline"
            href="https://isic.sk/cookies-policy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cookies policy
          </a>
        </div>
      </div>
    </footer>
  );
}
