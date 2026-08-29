import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ChatWidget } from "@/components/site/ChatWidget";
import { ContactForm } from "@/components/site/ContactForm";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Steps } from "@/components/site/Steps";

const TITLE = "Kontakt a pomoc — preukazy ISIC, ITIC a EURO<26 | CKM SYTS";
const DESCRIPTION =
  "Kontaktný formulár, časté otázky a chat pre držiteľov preukazov ISIC, ITIC a EURO<26. Dopyt doručíme priamo kolegyniam z CKM SYTS.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  const [chatOpen, setChatOpen] = useState(false);
  const [topicId, setTopicId] = useState("");

  function goToForm(suggestedTopic?: string) {
    if (suggestedTopic) setTopicId(suggestedTopic);
    document.getElementById("formular")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Steps />
        <Faq onOpenChat={() => setChatOpen(true)} />
        <ContactForm topicId={topicId} onTopicChange={setTopicId} />
      </main>
      <Footer />
      <ChatWidget open={chatOpen} onOpenChange={setChatOpen} onGoToForm={goToForm} />
    </div>
  );
}
