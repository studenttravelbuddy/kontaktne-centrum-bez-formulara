# Doplnenie katalógov ITIC a EURO<26 do sekcie Zľavy

Pod tlačidlom „Zobraziť katalóg zliav (235)“ sú dnes len dva externé odkazy: „Zľavy v doprave s ISIC“ a „Katalóg na isic.sk“. Doplním k nim katalógy pre učiteľov (ITIC) a pre EURO<26.

## Čo pribudne

Dva nové tlačidlá v rovnakom štýle ako existujúce:

- „Katalóg na itic.sk“ → https://itic.sk/vsetky-zlavy/ (overené, funkčné)
- „Katalóg na euro26.sk“ → https://euro26.sk/zlavy-na-slovensku/ (overené, funkčné)

Pôvodné „Katalóg na isic.sk“ premenujem na „Katalóg na isic.sk (ISIC)“ nie — ponechám názov, len doplním ďalšie dva, aby bolo jasné, že ide o tri preukazy vedľa seba.

## Technické detaily

- `src/lib/discounts.ts`: pridám exporty `ITIC_DISCOUNTS_URL` a `EURO26_DISCOUNTS_URL` vedľa existujúceho `ALL_DISCOUNTS_URL`.
- `src/components/site/TopDiscounts.tsx`: v bloku odkazov (riadky 187–220) pridám dva `<a>` prvky s rovnakými triedami a ikonou `ArrowUpRight`, `target="_blank" rel="noreferrer"`.
- Na mobile sa tlačidlá zalamujú (kontajner už má `flex-wrap gap-3`), takže netreba meniť layout.
