import { useEffect } from "react";
import Header from "@/components/Header";
import FrankstonHeroSection from "@/components/frankston/FrankstonHeroSection";
import FrankstonHowItWorks from "@/components/frankston/FrankstonHowItWorks";
import FrankstonFenceTypes from "@/components/frankston/FrankstonFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import FrankstonFAQSection from "@/components/frankston/FrankstonFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneFrankston = () => {
  useEffect(() => {
    document.title = "Frankston Decking Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => {
    window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <FrankstonHeroSection />
        <FrankstonHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types">
          <FrankstonFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <FrankstonFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneFrankston;
