import { useEffect } from "react";
import Header from "@/components/Header";
import SomervilleHeroSection from "@/components/somerville/SomervilleHeroSection";
import SomervilleHowItWorks from "@/components/somerville/SomervilleHowItWorks";
import SomervilleFenceTypes from "@/components/somerville/SomervilleFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import SomervilleFAQSection from "@/components/somerville/SomervilleFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneSomerville = () => {
  useEffect(() => { document.title = "Somerville Decking Quotes — Get 3 Free Quotes in Minutes"; }, []);
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <SomervilleHeroSection />
        <SomervilleHowItWorks />
        <div id="fence-types"><SomervilleFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><SomervilleFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneSomerville;
