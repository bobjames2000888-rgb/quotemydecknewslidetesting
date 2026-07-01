import { useEffect } from "react";
import Header from "@/components/Header";
import HeathmontHeroSection from "@/components/heathmont/HeathmontHeroSection";
import HeathmontHowItWorks from "@/components/heathmont/HeathmontHowItWorks";
import HeathmontFenceTypes from "@/components/heathmont/HeathmontFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import HeathmontFAQSection from "@/components/heathmont/HeathmontFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneHeathmont = () => {
  useEffect(() => { document.title = "Heathmont Decking Quotes — Get 3 Free Quotes in Minutes"; }, []);
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <HeathmontHeroSection />
        <HeathmontHowItWorks />
        <div id="fence-types"><HeathmontFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><HeathmontFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneHeathmont;
