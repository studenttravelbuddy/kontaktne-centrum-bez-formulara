import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

const SUGGESTIONS = [
  "Ako si predĺžim preukaz?",
  "Nefunguje mi preukaz v doprave",
  "Aký mám nárok na preukaz?",
  "Zabudol som číslo preukazu",
];

const GREETING =
  "Dobrý deň, rada Vám poradím s preukazmi ISIC, ITIC a EURO<26. Do Vášho účtu nevidím — ak bude treba, rada Vás nasmerujem na kontaktný formulár.";

/** Odhad oblasti dopytu z rozhovoru, aby sa dala vo formulári predvyplniť. */
function guessTopic(text: string): string | undefined {
  const t = text.toLowerCase();
  if (/doprav|vlak|autobus|mhd|ubian|čip/.test(t)) return "doprava";
  if (/platb|zaplat|úhrad|uhrad|prevod/.test(t)) return "platba";
  if (/aplikáci|appk|prihlás|mobil/.test(t)) return "mobil";
  if (/zľav|kupón|bloček|lidl/.test(t)) return "zlava-nefunguje";
  if (/doruč|nedoraz|známka.*neprišl/.test(t)) return "nedorucene";
  if (/faktúr/.test(t)) return "faktura";
  if (/výmaz|gdpr|osobné údaje/.test(t)) return "gdpr-vymaz";
  if (/predĺž|obnov|strat|duplikát|zmena údajov/.test(t)) return "vybavit";
  return undefined;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onGoToForm: (topicId?: string) => void;
}

export function ChatWidget({ open, onOpenChange, onGoToForm }: Props) {
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: GREETING }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function send(text: string) {
    const question = text.trim();
    if (!question || loading) return;

    const next: Message[] = [...messages, { role: "user", content: question }];
    setMessages([...next, { role: "assistant", content: "" }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next.slice(1) }),
      });

      if (!res.ok || !res.body) {
        const detail = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(detail.error ?? "Chat je momentálne nedostupný.");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let answer = "";

      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith("data:")) continue;
          const payload = trimmed.slice(5).trim();
          if (payload === "[DONE]") continue;
          try {
            const parsed = JSON.parse(payload) as {
              choices?: { delta?: { content?: string } }[];
            };
            const delta = parsed.choices?.[0]?.delta?.content;
            if (delta) {
              answer += delta;
              setMessages([...next, { role: "assistant", content: answer }]);
            }
          } catch {
            // neúplný fragment, počkáme na ďalší
          }
        }
      }

      if (!answer) {
        setMessages([
          ...next,
          {
            role: "assistant",
            content:
              "Odpoveď sa mi nepodarilo načítať. Napíšte nám prosím cez kontaktný formulár nižšie.",
          },
        ]);
      }
    } catch (error) {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            error instanceof Error
              ? `${error.message} Skúste to prosím znova alebo použite kontaktný formulár nižšie.`
              : "Chat je momentálne nedostupný.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const lastUser = [...messages].reverse().find((m) => m.role === "user")?.content ?? "";

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => onOpenChange(true)}
          aria-label="Otvoriť chat s asistentkou"
          className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-2xl bg-brand-yellow px-5 py-3 font-bold text-foreground transition-colors hover:bg-brand-teal"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Opýtať sa
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-label="Chat s asistentkou CKM SYTS"
          className="fixed inset-x-3 bottom-3 z-50 flex max-h-[80vh] flex-col overflow-hidden rounded-2xl bg-card sm:inset-x-auto sm:right-4 sm:bottom-4 sm:w-[400px]"
        >
           <div className="flex items-center justify-between bg-brand-teal px-4 py-3 text-foreground">
             <p className="font-display text-base font-black text-foreground">Asistentka CKM SYTS</p>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              aria-label="Zavrieť chat"
               className="rounded-md p-1 hover:bg-brand-yellow"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                     ? "ml-auto max-w-[85%] rounded-2xl bg-brand-yellow px-4 py-2 text-sm"
                     : "mr-auto max-w-[90%] rounded-2xl border-2 border-brand-teal bg-brand-teal-light px-4 py-2 text-sm whitespace-pre-wrap"
                }
              >
                {m.content || (loading ? "…" : "")}
              </div>
            ))}

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-2xl px-3 py-1.5 text-xs font-bold hover:bg-brand-yellow"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-brand-teal/20 p-3">
            <button
              type="button"
              onClick={() => {
                onOpenChange(false);
                onGoToForm(guessTopic(lastUser));
              }}
              className="mb-3 w-full rounded-2xl px-3 py-2 text-xs font-bold text-foreground hover:bg-brand-teal-light"
            >
              Prejsť na kontaktný formulár
            </button>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                void send(input);
              }}
              className="flex items-center gap-2"
            >
              <label htmlFor="chat-input" className="sr-only">
                Vaša otázka
              </label>
              <input
                id="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Napíšte svoju otázku…"
                className="h-10 flex-1 rounded-2xl border-2 border-brand-teal px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                disabled={loading}
                aria-label="Odoslať otázku"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-yellow text-foreground disabled:opacity-60"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
            <p className="mt-2 text-[11px] text-brand-gray">
              Chat neposkytuje informácie z Vášho účtu a nepýta si osobné údaje.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
