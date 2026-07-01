import { useEffect } from "react";
import Header from "@/components/Header";
import StKildaHeroSection from "@/components/st-kilda/StKildaHeroSection";
import StKildaHowItWorks from "@/components/st-kilda/StKildaHowItWorks";
import StKildaFenceTypes from "@/components/st-kilda/StKildaFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import StKildaFAQSection from "@/components/st-kilda/StKildaFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneStKilda = () => {
  useEffect(() => {
    document.title = "St Kilda Decking Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => {
    window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <StKildaHeroSection />
        <StKildaHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types">
          <StKildaFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <StKildaFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneStKilda;
