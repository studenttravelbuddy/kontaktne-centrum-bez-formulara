const SOCIAL_GROUPS = [
  {
    brand: "ISIC",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/isic.slovakia/" },
      { label: "TikTok", href: "https://www.tiktok.com/@isic_slovakia" },
    ],
  },
  {
    brand: "ISIC / EURO<26 — ZŠ a SŠ",
    links: [
      { label: "Facebook (SŠ a ZŠ)", href: "https://www.facebook.com/preukazisiceuro26" },
      { label: "Facebook (ZŠ)", href: "https://www.facebook.com/ISICEURO26/" },
      { label: "Instagram (ZŠ)", href: "https://www.instagram.com/isic.sk_zs/" },
      { label: "Instagram (SŠ)", href: "https://www.instagram.com/isic_euro26/" },
    ],
  },
  {
    brand: "EURO<26",
    links: [
      { label: "Facebook", href: "https://www.facebook.com/Kartamladycheuro26/" },
      { label: "Instagram", href: "https://www.instagram.com/euro_26/" },
    ],
  },
  {
    brand: "ITIC",
    links: [{ label: "Facebook", href: "https://www.facebook.com/ITICSlovakia/" }],
  },
  {
    brand: "CKM SYTS",
    links: [{ label: "LinkedIn", href: "https://sk.linkedin.com/company/isic-slovakia" }],
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
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-display text-xl text-white">CKM SYTS</h2>
            <address className="mt-3 text-sm not-italic text-white/80">
              Vysoká 32, 811 06 Bratislava
              <br />
              <a className="underline" href="tel:+421222119963">
                02 2211 9963
              </a>
            </address>
          </div>

          <div>
            <h2 className="font-display text-lg text-white">Naše weby</h2>
            <ul className="mt-3 space-y-1 text-sm text-white/80">
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
            <h2 className="font-display text-lg text-white">Sociálne siete</h2>
            <div className="mt-3 space-y-3 text-sm text-white/80">
              {SOCIAL_GROUPS.map((group) => (
                <div key={group.brand}>
                  <p className="font-medium text-white">{group.brand}</p>
                  <ul className="flex flex-wrap gap-x-3">
                    {group.links.map((link) => (
                      <li key={link.href + link.label}>
                        <a
                          className="hover:underline"
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/20 pt-6 text-xs text-white/70">
          <p>© {new Date().getFullYear()} CKM SYTS. Všetky práva vyhradené.</p>
          <a className="hover:underline" href="https://isic.sk/cookies/" target="_blank" rel="noreferrer">
            Cookies policy
          </a>
        </div>
      </div>
    </footer>
  );
}
