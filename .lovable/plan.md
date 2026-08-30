# Oprava kategorizácie zliav

## Cieľ
Zaradiť partnerov do správnych kategórií v datasete zliav, aby filter v katalógu dával zmysel.

## Zmeny

### Konkrétne z pripomienky
- **Albi**: Kultúra a zábava → **Nákupy** (hračky a darčeky, kamenné predajne/e-shop).
- **The Spot**: Vzdelávanie → **Služby** (coworking, nie školenie). Autoškola Mavex a Skillmea zostávajú vo Vzdelávaní.

### Nová kategória „Služby“
Pribudne kategória Služby pre partnerov, ktorí nie sú predaj tovaru ani vzdelávanie:
- The Spot (coworking)
- DHL Express (2 ponuky) — kuriérske služby
- FaxCOPY (3 ponuky) — tlač a kopírovanie
- ZSE — energie
- Galéria kvetín, Salón Judith (kaderníctvo/kozmetika → ak ide o službu krásy, ide do Zdravie a krása)

### Ďalšie opravy zaradenia
- **Salón Judith**, **Očná Optika MANIA**: Nákupy → **Zdravie a krása**.
- **PlnáPeňaženka**: Tech a mobil → **Služby** (finančný portál).
- **Demänová Rezort**: ponuky rozdelené podľa obsahu — wellness/aquapark do **Zdravie a krása**, lyžovanie/šport do **Šport**, ubytovanie do **Cestovanie**.
- **Slovnaft BAjk**: zostáva v **Doprave** (bikesharing ako mestská doprava).
- **Aquaparky, kúpaliská, wellness** (AQUACITY Poprad, Aquapark Trnava, Tatralandia, Bešeňová, termálne kúpaliská, Wellness Hotel Patince, Bardejovské kúpele, HOLIDAYPARK Kováčová, MARA CAMPING, Slnečné jazerá, Mestská plaváreň Žilina): Kultúra a zábava → **Šport a wellness**? — ponechávame v Kultúra a zábava len múzeá, galérie, divadlá, kiná, hrady, festivaly a únikovky; vodné a wellness areály presunieme do **Zdravie a krása**, lyžiarske strediská zostávajú v **Športe**.
- **PARK SNOW Donovaly**, **Vrátna Malá Fatra**: duplicity medzi Kultúra a zábava a Šport → ponechať v **Športe**.
- **Panta Rhei, Martinus, KnihArt, UniKnihy.sk, Diderot, ŠEVT, Ineduco**: zostávajú v **Nákupoch** (predaj tovaru).

## Technická časť
- Upraviť pole `kategoria` pri dotknutých položkách v `src/data/zlavy.ts`.
- Doplniť „Služby“ do zoznamu kategórií a poradia filtrov v `src/lib/discounts.ts` a `src/components/site/TopDiscounts.tsx` (vrátane ikony/farby, ak sa mapujú podľa kategórie).
- Skontrolovať výber 9 TOP kariet — jedna z každej kategórie; po pridaní Služieb doplniť TOP ponuku aj pre túto kategóriu (alebo ponechať 9 podľa pôvodných a Služby pridať len do katalógu — rozhodne sa pri implementácii tak, aby TOP mriežka ostala vyvážená).
- Overiť typecheck a v náhľade prejsť filtre všetkých kategórií.
