import { useEffect } from "react";
import Header from "@/components/Header";
import RowvilleHeroSection from "@/components/rowville/RowvilleHeroSection";
import RowvilleHowItWorks from "@/components/rowville/RowvilleHowItWorks";
import RowvilleFenceTypes from "@/components/rowville/RowvilleFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import RowvilleFAQSection from "@/components/rowville/RowvilleFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneRowville = () => {
  useEffect(() => {
    document.title = "Rowville Decking Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => {
    window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <RowvilleHeroSection />
        <RowvilleHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types">
          <RowvilleFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <RowvilleFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneRowville;
