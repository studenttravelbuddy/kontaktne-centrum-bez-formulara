# Pätička: prelinkované sociálne siete a kompaktnejší layout

## Cieľ
Sociálne siete v pätičke doplniť podľa dodaného zoznamu odkazov, rozdeliť ZŠ a SŠ, dať ISIC (VŠ) na prvé miesto a rozložiť skupiny vedľa seba, aby footer nebol taký dlhý.

## Odkazy, ktoré sa použijú

**ISIC (VŠ + SŠ, spoločné profily)** — prvá skupina
- Instagram: https://www.instagram.com/isic.slovakia/
- TikTok: https://www.tiktok.com/@isic_slovakia
- (Facebook neexistuje — nebude uvedený)

**ISIC / EURO<26 — ZŠ**
- Facebook: https://www.facebook.com/ISICEURO26/
- Instagram: https://www.instagram.com/isic.sk_zs/

**ISIC / EURO<26 — SŠ**
- Facebook: https://www.facebook.com/preukazisiceuro26
- Instagram: https://www.instagram.com/isic_euro26/

**EURO<26**
- Facebook: https://www.facebook.com/Kartamladycheuro26/
- Instagram: https://www.instagram.com/euro_26/

**ITIC**
- Facebook: https://www.facebook.com/ITICSlovakia/

**CKM SYTS**
- LinkedIn: https://sk.linkedin.com/company/isic-slovakia

Vynechané (v podklade neúplné/chýbajúce): Campsite bio odkaz, YouTube kanál, ITIC Instagram, EURO<26 TikTok. Doplníme, keď pošleš správne URL.

## Zmeny

1. **Prelinkovanie** — každá ikona bude skutočný `<a href>` s `target="_blank"`, `rel="noreferrer"`, `aria-label` aj `title`, aby bolo jasné, kam vedie.
2. **Rozdelenie skupín** — súčasná spoločná skupina „ZŠ a SŠ“ sa rozdelí na samostatné „ZŠ“ a „SŠ“ podľa odkazov vyššie.
3. **Poradie** — ISIC (VŠ/SŠ spoločné profily) ako prvá skupina, potom ZŠ, SŠ, EURO<26, ITIC, CKM SYTS.
4. **Kompaktný layout** — skupiny sa zobrazia v responzívnej mriežke vedľa seba (2 stĺpce na mobile, 3 na desktope) namiesto jedného dlhého stĺpca; zmenšia sa vertikálne medzery.
5. **Štýl** — zachová sa existujúci brand vzhľad (tyrkysové linky, kruhové ikonové tlačidlá, žltý hover).

## Overenie
Typecheck a Playwright kontrola: každá ikona v pätičke má platný `href` a footer je viditeľne kratší.
