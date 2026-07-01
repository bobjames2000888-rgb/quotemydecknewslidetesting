import { useEffect } from "react";
import Header from "@/components/Header";
import GlenWaverleyHeroSection from "@/components/glen-waverley/GlenWaverleyHeroSection";
import GlenWaverleyHowItWorks from "@/components/glen-waverley/GlenWaverleyHowItWorks";
import GlenWaverleyFenceTypes from "@/components/glen-waverley/GlenWaverleyFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import GlenWaverleyFAQSection from "@/components/glen-waverley/GlenWaverleyFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneGlenWaverley = () => {
  useEffect(() => {
    document.title = "Glen Waverley Decking Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => {
    window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <GlenWaverleyHeroSection />
        <GlenWaverleyHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types">
          <GlenWaverleyFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <GlenWaverleyFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneGlenWaverley;
