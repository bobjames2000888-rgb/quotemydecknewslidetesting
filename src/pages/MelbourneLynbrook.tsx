import { useEffect } from "react";
import Header from "@/components/Header";
import LynbrookHeroSection from "@/components/lynbrook/LynbrookHeroSection";
import LynbrookHowItWorks from "@/components/lynbrook/LynbrookHowItWorks";
import LynbrookFenceTypes from "@/components/lynbrook/LynbrookFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import LynbrookFAQSection from "@/components/lynbrook/LynbrookFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneLynbrook = () => {
  useEffect(() => {
    document.title = "Lynbrook Decking Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => {
    window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <LynbrookHeroSection />
        <LynbrookHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types">
          <LynbrookFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <LynbrookFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneLynbrook;
