# Zapracovanie všetkých komentárov zo stránky

Na stránke je 8 otvorených komentárov od LS a od zmajdanova@ckmsyts.sk. Všetky sa týkajú textov v sekciách „Kto si?" / preukazy, „Ako si obnoviť platnosť preukazu" a jednej otázky vo FAQ. Nižšie je pre každý komentár konkrétna úprava.

## Sekcia „Ako si obnoviť platnosť preukazu" — záložka Preukaz zo školy (čipový)

**1. Krok 1 — chýba odkaz do e-shopu a spresnenie, kto tam prolongáciu kupuje** (komentáre od oboch autorov k tomu istému kroku)
Krok 1 preformulujem tak, že bude obsahovať aj odkaz do e-shopu aj upozornenie:

> Zvoľte správnu známku podľa typu preukazu — ISIC (VŠ), ISIC/EURO<26 (ZŠ a SŠ) alebo ITIC — v našom e-shope objednaj-preukaz.sk (odkaz priamo v texte).
> Prolongáciu ISIC si cez e-shop kupujú iba študenti Univerzity Konštantína Filozofa v Nitre, Katolíckej univerzity v Ružomberku a Univerzity J. Selyeho v Komárne. Študenti ostatných vysokých škôl postupujú podľa pokynov svojej školy.

Táto druhá veta pôjde ako samostatná zvýraznená poznámka, aby sa nestratila.

**2. Krok 2 — doplniť príklad čísla preukazu**
Text zmením na: „V objednávke zadajte priezvisko a číslo preukazu — napr. ISIC S421…, ITIC T421… (aj s koncovým písmenom)."

**3. Krok 4 — platba na SŠ funguje dvojako**
Namiesto dnešného tvrdenia o distribúcii známky koncom augusta bude: „Na stredných školách sa platí buď v hotovosti v škole, alebo online — riaďte sa inštrukciami svojej školy. Fyzickú známku dostanete zo školy, prípadne poštou."

**4. Poznámka o známke a čipe — presnejšie znenie od LS**
Poznámku prepíšem na: „Vysokoškolská ISIC známka predlžuje platnosť ISIC licencie. Po spracovaní prolongácie môže byť pre funkcie dopravy potrebná aktivácia čipu na univerzitnom termináli. Postup sa líši podľa vysokej školy — riaďte sa jej aktuálnymi pokynmi." Existujúcu poznámku o ubian.sk ponechám ako samostatný bod pre ZŠ/SŠ preukazy.

## Sekcia s preukazmi a sprievodcom „Kto si?"

**5. Cena — doplniť, že univerzitný čipový preukaz určuje škola**
Do žltého cenového bloku doplním vetu: „Cenu a spôsob úhrady univerzitného čipového preukazu aj jeho predĺženia určuje príslušná vysoká škola."

**6. Zvýrazniť „s čipom" a „bez čipu"**
Vo výsledkoch sprievodcu „Kto si?" zvýrazním tučným tieto slová: pri školskom preukaze „**s čipom**", pri klasiku z e-shopu „**bez čipu**". Zároveň dopíšem „(bez čipu)" priamo k názvom kariet ISIC klasik / ITIC klasik vo výsledkoch, aby to bolo jasné na prvý pohľad.

## FAQ

**7. Otázka „Zaplatil som, ale nič sa nedeje"**
Na konec odpovede doplním: „Ak ste platili cez svoju vysokú školu alebo jej informačný systém, spracovanie platby a odoslanie údajov zabezpečuje škola. Stav si preto najskôr overte priamo na škole."

## Technické detaily

- `src/components/site/RenewSection.tsx` — kroky 1, 2, 4 a poznámky v záložke „Preukaz zo školy (čipový)"; krok 1 a poznámky budú podporovať odkazy, takže texty prejdú z čistých stringov na malé React fragmenty.
- `src/components/site/Hero.tsx` — doplnenie vety o cene univerzitného čipového preukazu do cenového bloku.
- `src/components/site/CardWizard.tsx` — zvýraznenie „s čipom" / „bez čipu" v textoch výsledkov (`school.text`, `shop.text`, `note`).
- `src/lib/faq.ts` — doplnenie vety do odpovede „Zaplatil som, ale nič sa nedeje".
- `src/content/knowledge-base.md` — zladenie tých istých faktov (prolongácia cez e-shop len pre 3 univerzity, aktivácia čipu na univerzitnom termináli, platba na SŠ v hotovosti/online), aby podklady ostali konzistentné so stránkou.
- Po úprave spustím typecheck a vizuálne skontrolujem obe sekcie aj FAQ; do každého vlákna komentárov napíšem, čo sa zmenilo.

## Otvorené

Vlákna nechám otvorené — zavriem ich, len ak o to výslovne požiadate.
