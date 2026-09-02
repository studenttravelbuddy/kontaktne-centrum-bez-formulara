# Oprava sociálnych odkazov v Safari preview

## Príčina

Odkazy aj adresy profilov sú v pätičke správne, ale `target="_blank"` sa z vloženého Lovable preview pokúša otvoriť nové okno. Safari túto navigáciu blokuje cez Cross-Origin-Opener-Policy, čo presne zodpovedá zobrazenej chybe.

## Zmena

- Pri všetkých sociálnych odkazoch v pätičke nahradiť otváranie do nového okna (`target="_blank"`) navigáciou cez nadradené okno (`target="_top"`).
- Ponechať všetkých 11 aktuálnych URL bez koncovej lomky, názvy kategórií, ikony aj rozloženie bez ďalších vizuálnych zmien.
- Odstrániť atribúty určené iba pre nové okno, ak po zmene už nebudú potrebné.

## Overenie

- V Safari/preview kliknúť aspoň na Instagram ISIC VŠ a potvrdiť, že sa otvorí cieľový profil bez obrazovky „Safari Can’t Open the Page“.
- V DOM skontrolovať všetkých 11 sociálnych odkazov: správny `href`, žiadna koncová `/` a `target="_top"`.
- Overiť, že bežné odkazy v ostatných častiach pätičky sa touto úpravou nezmenili.
