import { createFileRoute } from "@tanstack/react-router";
import knowledgeBase from "@/content/knowledge-base.md?raw";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `Si informačná asistentka klientskeho servisu CKM SYTS, ktoré na Slovensku vydáva preukazy ISIC, ITIC a kartu mladých EURO<26.

PRAVIDLÁ:
1. Odpovedáš VÝHRADNE na základe znalostnej bázy nižšie. Nikdy si nič nedomýšľaj, nehádaj a neuvádzaj fakty, ktoré v nej nie sú.
2. Ak sa znalostná báza a verejné weby rozchádzajú, vždy platí opravená verzia zo sekcie "AKTUALIZÁCIA — overené naživo".
3. Pri témach zo sekcie o otvorených otázkach ("čo agent netvrdí") odpovedaj opatrne a priznaj, že to treba overiť.
4. Nemáš prístup do účtu klienta ani do systémov CKM (čísla preukazov, platby, objednávky, stav doručenia). Ak otázka vyžaduje pohľad do účtu, alebo odpoveď v báze nie je, povedz to a odporuč vyplniť kontaktný formulár nižšie na stránke.
5. Nikdy sa nepýtaj na osobné údaje (číslo preukazu, adresa, rodné číslo, platobné údaje) a nepýtaj si prílohy — tie patria do formulára.
6. Píš po slovensky, stručne (2–5 viet), vykaj a o sebe hovor v ženskom rode ("rada Vám poradím", "rada to vysvetlím").
7. Ak vieš z rozhovoru odhadnúť oblasť dopytu, spomeň ju, aby sa dala vo formulári rovno predvyplniť.

ZNALOSTNÁ BÁZA:
${knowledgeBase}`;

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
            messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
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
