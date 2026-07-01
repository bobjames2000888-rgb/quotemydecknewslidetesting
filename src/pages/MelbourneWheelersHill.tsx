import { useEffect } from "react";
import Header from "@/components/Header";
import WheelersHillHeroSection from "@/components/wheelers-hill/WheelersHillHeroSection";
import WheelersHillHowItWorks from "@/components/wheelers-hill/WheelersHillHowItWorks";
import WheelersHillFenceTypes from "@/components/wheelers-hill/WheelersHillFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import WheelersHillFAQSection from "@/components/wheelers-hill/WheelersHillFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneWheelersHill = () => {
  useEffect(() => { document.title = "Wheelers Hill Decking Quotes — Get 3 Free Quotes in Minutes"; }, []);
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <WheelersHillHeroSection />
        <WheelersHillHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types"><WheelersHillFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><WheelersHillFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneWheelersHill;
