import { useEffect } from "react";
import Header from "@/components/Header";
import KnoxfieldHeroSection from "@/components/knoxfield/KnoxfieldHeroSection";
import KnoxfieldHowItWorks from "@/components/knoxfield/KnoxfieldHowItWorks";
import KnoxfieldFenceTypes from "@/components/knoxfield/KnoxfieldFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import KnoxfieldFAQSection from "@/components/knoxfield/KnoxfieldFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneKnoxfield = () => {
  useEffect(() => { document.title = "Knoxfield Decking Quotes — Get 3 Free Quotes in Minutes"; }, []);
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <KnoxfieldHeroSection />
        <KnoxfieldHowItWorks />
        <div id="fence-types"><KnoxfieldFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><KnoxfieldFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneKnoxfield;
