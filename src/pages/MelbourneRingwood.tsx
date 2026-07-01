import { useEffect } from "react";
import Header from "@/components/Header";
import RingwoodHeroSection from "@/components/ringwood/RingwoodHeroSection";
import RingwoodHowItWorks from "@/components/ringwood/RingwoodHowItWorks";
import RingwoodFenceTypes from "@/components/ringwood/RingwoodFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import RingwoodFAQSection from "@/components/ringwood/RingwoodFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneRingwood = () => {
  useEffect(() => {
    document.title = "Ringwood Decking Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => {
    window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <RingwoodHeroSection />
        <RingwoodHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types">
          <RingwoodFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <RingwoodFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneRingwood;
