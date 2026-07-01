import { useEffect } from "react";
import Header from "@/components/Header";
import FerntreeGullyHeroSection from "@/components/ferntree-gully/FerntreeGullyHeroSection";
import FerntreeGullyHowItWorks from "@/components/ferntree-gully/FerntreeGullyHowItWorks";
import FerntreeGullyFenceTypes from "@/components/ferntree-gully/FerntreeGullyFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import FerntreeGullyFAQSection from "@/components/ferntree-gully/FerntreeGullyFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneFerntreeGully = () => {
  useEffect(() => { document.title = "Ferntree Gully Decking Quotes — Get 3 Free Quotes in Minutes"; }, []);
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <FerntreeGullyHeroSection />
        <FerntreeGullyHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types"><FerntreeGullyFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><FerntreeGullyFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneFerntreeGully;
