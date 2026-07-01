import { useEffect } from "react";
import Header from "@/components/Header";
import MorningtonHeroSection from "@/components/mornington/MorningtonHeroSection";
import MorningtonHowItWorks from "@/components/mornington/MorningtonHowItWorks";
import MorningtonFenceTypes from "@/components/mornington/MorningtonFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import MorningtonFAQSection from "@/components/mornington/MorningtonFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneMornington = () => {
  useEffect(() => {
    document.title = "Mornington Decking Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => {
    window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <MorningtonHeroSection />
        <MorningtonHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types">
          <MorningtonFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <MorningtonFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneMornington;
