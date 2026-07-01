import { useEffect } from "react";
import Header from "@/components/Header";
import NarreWarrenHeroSection from "@/components/narre-warren/NarreWarrenHeroSection";
import NarreWarrenHowItWorks from "@/components/narre-warren/NarreWarrenHowItWorks";
import NarreWarrenFenceTypes from "@/components/narre-warren/NarreWarrenFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import NarreWarrenFAQSection from "@/components/narre-warren/NarreWarrenFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneNarreWarren = () => {
  useEffect(() => {
    document.title = "Narre Warren Decking Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => {
    window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <NarreWarrenHeroSection />
        <NarreWarrenHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types">
          <NarreWarrenFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <NarreWarrenFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneNarreWarren;
