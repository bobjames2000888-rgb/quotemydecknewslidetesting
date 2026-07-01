import { useEffect } from "react";
import Header from "@/components/Header";
import EumemmerringHeroSection from "@/components/eumemmerring/EumemmerringHeroSection";
import EumemmerringHowItWorks from "@/components/eumemmerring/EumemmerringHowItWorks";
import EumemmerringFenceTypes from "@/components/eumemmerring/EumemmerringFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import EumemmerringFAQSection from "@/components/eumemmerring/EumemmerringFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneEumemmerring = () => {
  useEffect(() => { document.title = "Eumemmerring Decking Quotes — Get 3 Free Quotes in Minutes"; }, []);
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <EumemmerringHeroSection />
        <EumemmerringHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types"><EumemmerringFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><EumemmerringFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneEumemmerring;
