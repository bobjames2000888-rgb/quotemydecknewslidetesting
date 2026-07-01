import { useEffect } from "react";
import Header from "@/components/Header";
import LilydaleHeroSection from "@/components/lilydale/LilydaleHeroSection";
import LilydaleHowItWorks from "@/components/lilydale/LilydaleHowItWorks";
import LilydaleFenceTypes from "@/components/lilydale/LilydaleFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import LilydaleFAQSection from "@/components/lilydale/LilydaleFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneLilydale = () => {
  useEffect(() => {
    document.title = "Lilydale Decking Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => {
    window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <LilydaleHeroSection />
        <LilydaleHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types">
          <LilydaleFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <LilydaleFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneLilydale;
