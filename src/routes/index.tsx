import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { CampaignBanner } from "@/components/site/CampaignBanner";
import { ChatWidget } from "@/components/site/ChatWidget";
import { ContactForm } from "@/components/site/ContactForm";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { RenewSection } from "@/components/site/RenewSection";
import { Steps } from "@/components/site/Steps";
import { TopDiscounts } from "@/components/site/TopDiscounts";

const TITLE = "Kontakt a pomoc — preukazy ISIC, ITIC a EURO<26 | CKM SYTS";
const DESCRIPTION =
  "Kontaktné centrum CKM SYTS: naj zľavy, kampaň Ready for More, časté otázky, chat a formulár pre držiteľov preukazov ISIC, ITIC a EURO<26.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
    <div className="ambassador-playful min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero onOpenChat={() => setChatOpen(true)} onGoToForm={() => goToForm()} />
        <TopDiscounts />
        <CampaignBanner />
        <Steps />
        <Faq onOpenChat={() => setChatOpen(true)} onGoToForm={() => goToForm()} />
        <ContactForm topicId={topicId} onTopicChange={setTopicId} />
      </main>
      <Footer />
      <ChatWidget open={chatOpen} onOpenChange={setChatOpen} onGoToForm={goToForm} />
    </div>
  );
}
