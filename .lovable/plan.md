# Pätička: prelinkované sociálne siete a kompaktnejší layout

## Cieľ
Upraviť footer tak, aby boli sociálne siete jasne prelinkované a viditeľné, a aby sa celá sekcia sociálnych sietí neťahala zbytočne dlho pod sebou.

## Zmeny

1. **Prelinkovanie sociálnych sietí**
   - Každý sociálny odkaz bude renderovaný ako plnohodnotný klikateľný prvok (ikona + krátky viditeľný text).
   - Odkazy otvárajú novú kartu, majú `rel="noreferrer"` a `aria-label`.
   - Nadpisy skupín (ISIC/VŠ, ZŠ, SŠ, EURO<26, ITIC, CKM SYTS) zostanú ako nadpisy; samotné odkazy budú klikateľné.

2. **Rozdelenie ZŠ a SŠ a nové poradie**
   - Oddeliť skupinu "ZŠ a SŠ" na samostatné skupiny "ZŠ" a "SŠ".
   - Dať skupinu "ISIC / VŠ" na prvé miesto.
   - Poradie skupín: ISIC/VŠ, ZŠ, SŠ, EURO<26, ITIC, CKM SYTS.

3. **Kompaktnejšie rozloženie**
   - Sociálne skupiny sa nebudú zobrazovať ako jeden dlhý zoznam pod sebou.
   - Použiť responzívnu mriežku (napr. 2 stĺpce na mobile/tablete, 3–4 na desktope), aby skupiny boli vedľa seba.
   - Znížiť vertikálne medzery, aby footer zaberal menej miesta.

4. **Vizuálne doladenie podľa brand identity**
   - Zachovať existujúce farby a štýl (2px outline, zaoblenie, ostré tiene ak sa používajú).
   - Sociálne tlačidlá môžu mať jemný hover efekt (napr. zvýraznenie brand farbou).

5. **Overenie**
   - Spustiť typecheck.
   - Pomocou Playwright skontrolovať, že každý sociálny odkaz má platný `href`, otvára sa a footer je kompaktnejší.
