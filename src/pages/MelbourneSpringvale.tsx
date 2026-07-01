import { useEffect } from "react";
import Header from "@/components/Header";
import SpringvaleHeroSection from "@/components/springvale/SpringvaleHeroSection";
import SpringvaleHowItWorks from "@/components/springvale/SpringvaleHowItWorks";
import SpringvaleFenceTypes from "@/components/springvale/SpringvaleFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import SpringvaleFAQSection from "@/components/springvale/SpringvaleFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneSpringvale = () => {
  useEffect(() => { document.title = "Springvale Decking Quotes — Get 3 Free Quotes in Minutes"; }, []);
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <SpringvaleHeroSection />
        <SpringvaleHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types"><SpringvaleFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><SpringvaleFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneSpringvale;
