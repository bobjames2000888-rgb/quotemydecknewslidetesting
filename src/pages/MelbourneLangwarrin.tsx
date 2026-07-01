import { useEffect } from "react";
import Header from "@/components/Header";
import LangwarrinHeroSection from "@/components/langwarrin/LangwarrinHeroSection";
import LangwarrinHowItWorks from "@/components/langwarrin/LangwarrinHowItWorks";
import LangwarrinFenceTypes from "@/components/langwarrin/LangwarrinFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import LangwarrinFAQSection from "@/components/langwarrin/LangwarrinFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneLangwarrin = () => {
  useEffect(() => {
    document.title = "Langwarrin Decking Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => {
    window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <LangwarrinHeroSection />
        <LangwarrinHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types">
          <LangwarrinFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <LangwarrinFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneLangwarrin;
