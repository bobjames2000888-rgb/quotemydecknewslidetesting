import { useEffect } from "react";
import Header from "@/components/Header";
import EndeavourHillsHeroSection from "@/components/endeavour-hills/EndeavourHillsHeroSection";
import EndeavourHillsHowItWorks from "@/components/endeavour-hills/EndeavourHillsHowItWorks";
import EndeavourHillsFenceTypes from "@/components/endeavour-hills/EndeavourHillsFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import EndeavourHillsFAQSection from "@/components/endeavour-hills/EndeavourHillsFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneEndeavourHills = () => {
  useEffect(() => { document.title = "Endeavour Hills Decking Quotes — Get 3 Free Quotes in Minutes"; }, []);
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <EndeavourHillsHeroSection />
        <EndeavourHillsHowItWorks />
        <div id="fence-types"><EndeavourHillsFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><EndeavourHillsFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneEndeavourHills;
