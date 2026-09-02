# Kontrola stránky: odkazy, zvyšky chatu, návrh úprav

Otestovala som HTTP requestom všetkých 239 unikátnych odkazov v projekte a prehľadala kód na zvyšky chatu.

## 1. Chat — na stránke už nie je nikde ponúkaný

Overené: žiadny komponent, text ani route neponúka chat. Zostali len nepoužívané súbory na pozadí:

- `src/lib/contact.functions.ts`, `src/lib/contact.server.ts`, `src/lib/inquiry-routing.ts` — logika starého interného formulára (ukladanie dopytov, e-maily cez Resend). Nič ich už nevolá.
- `src/content/knowledge-base.md` — dátová banka pre bývalý AI chat, tiež už nikde nepoužitá.

Navrhujem zmazať prvé tri (mŕtvy kód). `knowledge-base.md` ponechám ako referenciu obsahu, pokiaľ nepovieš inak — nezobrazuje sa nikde na stránke.

## 2. Nefunkčné odkazy, ktoré treba opraviť

Reálne pokazené odkazy zobrazené na stránke:


| Kde                                  | Terajší odkaz                          | Stav                                | Oprava                                                                                  |
| ------------------------------------ | -------------------------------------- | ----------------------------------- | --------------------------------------------------------------------------------------- |
| Kampaň (`discounts.ts` CAMPAIGN_URL) | `www.isic.sk/readyformore`             | 404                                 | `https://readyformore.isic.sk/` (otestované, 200; verzia s `www.` má chybný certifikát) |
| RegioJet (`zlavy.ts`)                | `http://www.regojet.sk` (preklep)      | neexistuje                          | `https://regiojet.sk/`                                                                  |
| Považské muzeum, 8 záznamov          | `pmza.sk/<podstránky>`                 | všetky 404                          | `https://pmza.sk/`                                                                      |
| Kysucké muzeum                       | `http://kysuckemuzeum@vuczilina.sk`    | neplatná URL                        | `https://www.kysuckemuzeum.sk/sk/`                                                      |
| Kysucké muzeum (druhý záznam)        | `http://www.kysuckemuzeum.sk`          | 200 po redirecte                    | `https://www.kysuckemuzeum.sk/sk/`                                                      |
| Muzeum SNP                           | `http://www.múzeumsnp.sk` (diakritika) | neexistuje                          | `https://muzeumsnp.sk/`                                                                 |
| Baddy Fitness                        | `baddyfitness.eu/sk`                   | 404                                 | `https://baddyfitness.eu/`                                                              |
| UGO                                  | `ugo.sk/sk/blog/karta-isic-sk` (3×)    | 404                                 | `https://www.ugo.sk/sk`                                                                 |
| Nová scéna                           | `http://www.novascena.sk`              | 503 (http)                          | `https://www.novascena.sk/`                                                             |
| KniHart                              | `https://www.knihart.sk`               | domény nefunguje                    | PONECHAT                                                                                |
| Galéria kvetín                       | `http://www.galeriakvetin.sk`          | zlý certifikát                      | PONECHAT                                                                                |
| Expresná preprava (2×)               | `http://www.expresnapreprava.sk`       | neodpovedá                          | PONECHAT                                                                                |
| Wakelake                             | `http://www.wakelake.sk`               | 500                                 | PONECHAT                                                                                |
| Booking                              | `booking.com/?aid=8131740`             | 202 (funguje)                       | ponechať                                                                                |
| Ubian (RenewSection)                 | `www.ubian.sk/preukaz-studenta`        | blokuje boty, v prehliadači funguje | ponechať                                                                                |


Alza a Cinema City vracajú 403 len pre automat (v prehliadači fungujú) — ponechám.

Ak niektorý partner odkaz vymažeme, karta zľavy zostane a tlačidlo „detail zľavy" jednoducho nezobrazím.

## 3. Ostatné zistenia

- Aplikačné odkazy (ISIC appka, myEYC appka, App Store aj Google Play) fungujú vo všetkých 232 kartách.
- Odkazy na isic.sk, itic.sk, euro26.sk, objednaj-preukaz.sk, kontaktný formulár `/kontaktny-formular/2`, telefón a katalógy zliav — všetky 200 OK.
- Pätička: všetkých 11 sociálnych odkazov funguje.

## Technické detaily

Zmeny len v `src/data/zlavy.ts` (opravy `partnerUrl`), `src/lib/discounts.ts` (`CAMPAIGN_URL`) a zmazanie troch nepoužívaných súborov v `src/lib/`. Po zmene znova otestujem opravené odkazy HTTP requestom a spustím typecheck.