# Oprava chatu: kde a ako sa kupuje preukaz

## Problém

Chat klientovi odporučil kúpiť si ISIC „cez UBIAN alebo svoju školu“. To je nesprávne:
UBIAN/škola nie sú predajný kanál CKM — riešia iba čipové preukazy vydávané školou.
V dátovej banke je táto formulácia priamo v texte (napr. vetva o EURO<26 a doprave:
„môžete si požiadať o preukaz ISIC klasik na objednaj-preukaz.sk alebo ak máte záujem
o preukaz ISIC s čipom cez UBIAN alebo svoju školu“), takže model ju len zopakoval.

## Ako to má fungovať

1. Pri každej otázke typu „kde/ako si kúpim preukaz“ sa chat najprv spýta:
   máte preukaz vydávaný školou (čipový), alebo chcete náš preukaz klasik?
2. Ak klient chce klasik, primárne ponúkame **digitálny preukaz do mobilu** (13 €)
   z e-shopu objednaj-preukaz.sk; plastová karta sa spomenie len ako alternatíva
   (13 € + 3,15 € kuriér) alebo keď o ňu klient výslovne požiada.
3. UBIAN/škola sa spomínajú výhradne ako miesto, kde sa rieši čipový školský preukaz
   a jeho dopravná funkcionalita — nikdy ako odporúčanie, kde si preukaz kúpiť.
4. Chat nikdy neposiela klienta „kúpiť si ISIC do Ubianu“.

## Úpravy v dátovej banke (`src/content/knowledge-base.md`)

- Nová krátka sekcia „Kde sa preukaz kupuje — predajné kanály“ hneď pri cenníku:
  CKM predáva len cez objednaj-preukaz.sk (primárne digitálna karta do mobilu);
  škola/UBIAN len vydáva čipové školské preukazy; klient si ich sám cez UBIAN neobjednáva.
- Vetva o EURO<26 a doprave: odstrániť „cez UBIAN alebo svoju školu“ ako nákupnú možnosť;
  nahradiť vysvetlením, že čipový preukaz vydáva výhradne škola pri zápise, a ponukou
  preukazu ISIC v mobile / klasik z e-shopu.
- Vetvy o preukaze s vizuálom Ubian (bez loga ISIC): odkaz na e-shop zmeniť z generického
  objednaj-preukaz.sk na konkrétny produkt ISIC v mobile s poznámkou o plaste ako alternatíve.
- Zjednotiť poradie ponuky všade, kde sa spomína kúpa: mobil → plast.

## Úpravy v prompte chatu (`src/routes/api/chat.ts`)

Doplniť do `BASE_RULES` dve pravidlá:
- Pri otázke o kúpe/získaní preukazu sa vždy najprv spýtaj, či ide o preukaz zo školy
  (čipový) alebo o preukaz klasik od CKM; bez tejto odpovede neponúkaj konkrétny nákup.
- Preukaz sa kupuje výhradne v našom e-shope objednaj-preukaz.sk a primárne ponúkaš
  digitálny preukaz do mobilu. UBIAN ani školu nikdy neuvádzaj ako miesto na kúpu ISIC —
  škola preukaz vydáva pri zápise a UBIAN rieši dopravnú/čipovú časť.

## Overenie

Po zmene otestujem chat reálnymi otázkami („kde si kúpim ISIC“, „chcem ISIC s čipom“,
„nemám preukaz zo školy“) a skontrolujem, že nikde nepadne odporúčanie kúpiť preukaz
cez Ubian a že prvá ponuka je preukaz do mobilu.
