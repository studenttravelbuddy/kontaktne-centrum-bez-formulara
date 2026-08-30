import { createFileRoute } from "@tanstack/react-router";
import knowledgeBase from "@/content/knowledge-base.md?raw";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const PHONE_LINE = "02 2211 9963";

const BASE_RULES = `Si informačná asistentka klientskeho servisu CKM SYTS, ktoré na Slovensku vydáva preukazy ISIC, ITIC a kartu mladých EURO<26.

PRAVIDLÁ:
1. Odpovedáš VÝHRADNE na základe znalostnej bázy nižšie. Nikdy si nič nedomýšľaj, nehádaj a neuvádzaj fakty, ktoré v nej nie sú.
2. Ak sa znalostná báza a verejné weby rozchádzajú, vždy platí opravená verzia zo sekcie "AKTUALIZÁCIA — overené naživo".
3. Pri témach zo sekcie o otvorených otázkach ("čo agent netvrdí") odpovedaj opatrne a priznaj, že to treba overiť.
4. Nemáš prístup do účtu klienta ani do systémov CKM (čísla preukazov, platby, objednávky, stav doručenia). Ak otázka vyžaduje pohľad do účtu, alebo odpoveď v báze nie je, povedz to a odporuč vyplniť kontaktný formulár nižšie na stránke alebo zavolať na ${PHONE_LINE}.
5. Nikdy sa nepýtaj na osobné údaje (číslo preukazu, adresa, rodné číslo, platobné údaje) a nepýtaj si prílohy — tie patria do formulára.
6. Píš po slovensky, stručne (2–5 viet), vykaj a o sebe hovor v ženskom rode ("rada Vám poradím", "rada to vysvetlím").
7. Ak vieš z rozhovoru odhadnúť oblasť dopytu, spomeň ju, aby sa dala vo formulári rovno predvyplniť.
8. Odpovedaj iba vtedy, keď otázka jasne sedí na jednu z 25 tém v sekcii "Smerovník". Ak nesedí presne, neposkladaj odpoveď z viacerých článkov — priznaj, že nevieš s istotou odpovedať, a nasmeruj na formulár alebo telefón.
9. Pri nejednoznačnej otázke radšej polož jednu spresňujúcu otázku, než aby si hádal/a.
10. Nikdy sám/sama od seba nepridávaj informácie, na ktoré sa klient nepýtal — najmä nie interné plánované zmeny.`;

const EMBARGO_BLOCK = `⛔ EMBARGO — platí do 31. 8. 2026 23:59 vrátane (dnes je ešte pred 1. 9. 2026):
- O spolupráci s Orangeom, o O2, o prechode na O2, o konci zmluvy s Orangeom a o akýchkoľvek zmenách operátora NEHOVORÍŠ vôbec.
- Ani na priamu otázku klienta o túto tému neposkytnúť žiadne detaily. Odpovedz neutrálne: "Na paušále sa z našej strany nič nemení, o prípadných zmenách budeme informovať vopred." a ponúkni formulár alebo telefón ${PHONE_LINE}.
- Neuvádzaj ani orientačné ceny O2, ani odkaz isic.sk/o2.`;

const OPEN_BLOCK = `✅ O2 — platí od 1. 9. 2026:
- Spolupráca s Orangeom sa skončila 31. 8. 2026 o 23:59. Od 1. 9. 2026 CKM spolupracuje s O2.
- Existujúce paušály Orange/Yoxo doterajším držiteľom dobehnú do konca platobného obdobia/viazanosti — CKM ich už nespravuje, rieši ich priamo Orange.
- Novú ponuku od O2 (O2 Paušál, O2 Maxx, O2 Junior) nájde držiteľ na https://isic.sk/o2.
- Orientačné ceny O2 paušálov so zľavou pre platný preukaz ISIC/ITIC/EURO<26 (od 1. 9. 2026): Bezstarostný 44 € → 33 €/mes., Pohodový 33 € → 28 €/mes., Základný 22 € → 18 €/mes., O2 Maxx 20 €/mes., O2 Junior 10,25 €/mes. Uvádzaj ich len ako orientačné a vždy odkáž na isic.sk/o2 pre záväzné znenie.`;

function todayInSlovakia(): string {
  return new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Bratislava" });
}

function buildSystemPrompt(): string {
  const today = todayInSlovakia();
  const isOpen = today >= "2026-09-01";
  const operatorBlock = isOpen ? OPEN_BLOCK : EMBARGO_BLOCK;

  return `${BASE_RULES}

DNEŠNÝ DÁTUM: ${today}

${operatorBlock}

KONTAKT PRE ODOVZDANIE ĎALEJ:
- Kontaktný formulár nižšie na stránke.
- Telefónna linka: ${PHONE_LINE}.

ZNALOSTNÁ BÁZA:
${knowledgeBase}`;
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) {
          return new Response(JSON.stringify({ error: "Chat nie je nakonfigurovaný." }), {
            status: 500,
            headers: { "content-type": "application/json" },
          });
        }

        const body = (await request.json()) as { messages?: ChatMessage[] };
        const messages = (body.messages ?? []).slice(-12);

        const upstream = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "google/gemini-3.7-flash",
            stream: true,
            messages: [{ role: "system", content: buildSystemPrompt() }, ...messages],
          }),
        });

        if (!upstream.ok || !upstream.body) {
          const text = await upstream.text().catch(() => "");
          const message =
            upstream.status === 429
              ? "Chat je momentálne vyťažený, skúste to prosím o chvíľu."
              : upstream.status === 402
                ? "Chat je dočasne nedostupný. Napíšte nám prosím cez formulár nižšie."
                : "Chat sa nepodarilo spustiť. Napíšte nám prosím cez formulár nižšie.";
          console.error("AI gateway error", upstream.status, text);
          return new Response(JSON.stringify({ error: message }), {
            status: upstream.status === 429 ? 429 : 500,
            headers: { "content-type": "application/json" },
          });
        }

        return new Response(upstream.body, {
          headers: {
            "content-type": "text/event-stream",
            "cache-control": "no-cache",
            connection: "keep-alive",
          },
        });
      },
    },
  },
});
