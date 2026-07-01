import Header from "@/components/Header";
import NottingHillHeroSection from "@/components/notting-hill/NottingHillHeroSection";
import NottingHillHowItWorks from "@/components/notting-hill/NottingHillHowItWorks";
import NottingHillFenceTypes from "@/components/notting-hill/NottingHillFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import NottingHillFAQSection from "@/components/notting-hill/NottingHillFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneNottingHill = () => {
  useDocumentTitle("Notting Hill Decking Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <NottingHillHeroSection />
        <NottingHillHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types"><NottingHillFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><NottingHillFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneNottingHill;
