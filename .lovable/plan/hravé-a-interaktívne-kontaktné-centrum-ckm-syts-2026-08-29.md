# Hravé a interaktívne kontaktné centrum CKM SYTS

Zo súčasnej statickej stránky spravíme moderné, hravé a interaktívne kontaktné centrum: pribudne sekcia TOP zliav, kampaňová sekcia Ready for More s preklikom, interaktívny sprievodca výberom preukazu a oživíme celý vizuál mikroanimáciami — pri zachovaní firemných farieb a oficiálneho tónu.

## Čo pribudne

### 1. Interaktívny sprievodca „Aký preukaz je pre mňa?"
Krátky 2–3 krokový kvíz priamo v hero sekcii (Som žiak ZŠ/SŠ → študent VŠ → učiteľ → do 26 rokov bez školy). Na konci karta s odporúčaným preukazom (ISIC / ITIC / EURO<26), čo prináša a dvomi tlačidlami: „Objednať preukaz" a „Mám otázku → formulár" (predvyplní tému a typ preukazu vo formulári).

### 2. Sekcia „Naj zľavy"
Farebné dlaždice s najznámejšími zľavami z isic.sk — YOXO paušál (Orange), McDonald's, Burger King, Starbucks, Panta Rhei, Samsung Extra, 101 Drogéria, poistenie Union, MHD/vlaky. Filtrovacie čipy (Doprava, Jedlo, Tech, Nákupy, Cestovanie) s plynulou animáciou, hover efekt s naklonením karty a odkaz na plný katalóg zliav na isic.sk.
Logá: viem doplniť oficiálne logá partnerov aj preukazov ISIC/ITIC/EURO<26 — ak ich máte v tlačovej kvalite, pošlite ich; dovtedy použijem vlastné ikonové/typografické dlaždice v ISIC farbách, aby to nevyzeralo prázdne.

### 3. Kampaňový banner „Ready for More"
Výrazná gradientová sekcia s kupónovým vizuálom (perforovaný okraj kupónu), krátky text kampane a CTA na `www.isic.sk/readyformore`.
Poznámka: adresa dnes vracia chybu 404 — vložím ju tak, ako ste zadali, a keď kampaň spustíte, bude fungovať. Ak máte inú finálnu URL, prepíšem ju.

### 4. Hravejšie a interaktívnejšie celé UI
- Kroky „Ako to funguje" ako gamifikovaná časová os s číslami, ikonami a postupným odhalením pri scrollovaní.
- FAQ s vyhľadávaním a tematickými čipmi, plynulé otváranie odpovedí, pri každej odpovedi „Nepomohlo? Napíšte nám" → predvyplní tému formulára.
- Formulár s progres ukazovateľom (Téma → Údaje → Správa), priateľské mikrotexty, drag & drop príloh s náhľadom, animovaná potvrdzovacia obrazovka.
- Chat ako priateľský plávajúci „bublinový" asistent s uvítacími rýchlymi otázkami a jemnou animáciou ikonky.
- Sticky navigácia s aktívnou sekciou, plynulé scrollovanie, dekoratívne pozadia (jemné kruhy/vlny v petrolejovej, žltej, ružovej, oranžovej).
- Rešpektuje `prefers-reduced-motion` a plne funkčné na mobile.

## Technické detaily
- Nové komponenty: `TopDiscounts.tsx`, `CampaignBanner.tsx`, `CardWizard.tsx`, dátový súbor `src/lib/discounts.ts` (kategórie, názvy, popisy, odkazy).
- Prestavba `Hero.tsx`, `Steps.tsx`, `Faq.tsx`, `ContactForm.tsx`, `ChatWidget.tsx`, `Header.tsx` na hravejší dizajn; poradie sekcií v `src/routes/index.tsx`: Hero + sprievodca → Naj zľavy → Ready for More → Ako to funguje → FAQ → Formulár.
- Animácie cez CSS/Tailwind prechody a `IntersectionObserver` (žiadne ťažké knižnice), nové dizajnové tokeny (gradienty, tiene, „coupon" tvar) doplním do `src/styles.css` pri existujúcich farbách.
- Smerovanie e-mailov, znalostná báza chatu a ukladanie dopytov ostávajú bez zmeny.
- Súčasne opravím drobnú hydratačnú chybu v hero nadpise.

## Mimo rozsahu
- Zmeny logiky smerovania e-mailov a doručovania (stále čaká na `RESEND_API_KEY`).
- Sťahovanie cudzích log bez Vášho súhlasu — čakám na dodanie oficiálnych log.
