import { useEffect } from "react";
import Header from "@/components/Header";
import BeaconsfieldHeroSection from "@/components/beaconsfield/BeaconsfieldHeroSection";
import BeaconsfieldHowItWorks from "@/components/beaconsfield/BeaconsfieldHowItWorks";
import BeaconsfieldFenceTypes from "@/components/beaconsfield/BeaconsfieldFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import BeaconsfieldFAQSection from "@/components/beaconsfield/BeaconsfieldFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneBeaconsfield = () => {
  useEffect(() => { document.title = "Beaconsfield Decking Quotes — Get 3 Free Quotes in Minutes"; }, []);
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <BeaconsfieldHeroSection />
        <BeaconsfieldHowItWorks />
        <div id="fence-types"><BeaconsfieldFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><BeaconsfieldFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneBeaconsfield;
