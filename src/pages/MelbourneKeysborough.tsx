import { useEffect } from "react";
import Header from "@/components/Header";
import KeysboroughHeroSection from "@/components/keysborough/KeysboroughHeroSection";
import KeysboroughHowItWorks from "@/components/keysborough/KeysboroughHowItWorks";
import KeysboroughFenceTypes from "@/components/keysborough/KeysboroughFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import KeysboroughFAQSection from "@/components/keysborough/KeysboroughFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneKeysborough = () => {
  useEffect(() => { document.title = "Keysborough Decking Quotes — Get 3 Free Quotes in Minutes"; }, []);
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <KeysboroughHeroSection />
        <KeysboroughHowItWorks />
        <div id="fence-types"><KeysboroughFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><KeysboroughFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneKeysborough;
