import { useEffect } from "react";
import Header from "@/components/Header";
import HamptonParkHeroSection from "@/components/hampton-park/HamptonParkHeroSection";
import HamptonParkHowItWorks from "@/components/hampton-park/HamptonParkHowItWorks";
import HamptonParkFenceTypes from "@/components/hampton-park/HamptonParkFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import HamptonParkFAQSection from "@/components/hampton-park/HamptonParkFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneHamptonPark = () => {
  useEffect(() => {
    document.title = "Hampton Park Decking Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <HamptonParkHeroSection />
        <HamptonParkHowItWorks />
        <div id="fence-types"><HamptonParkFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><HamptonParkFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneHamptonPark;
