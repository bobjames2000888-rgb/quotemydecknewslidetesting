import Header from "@/components/Header";
import ClydeHeroSection from "@/components/clyde/ClydeHeroSection";
import ClydeHowItWorks from "@/components/clyde/ClydeHowItWorks";
import ClydeFenceTypes from "@/components/clyde/ClydeFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import ClydeFAQSection from "@/components/clyde/ClydeFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneClyde = () => {
  useDocumentTitle("Clyde Decking Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <ClydeHeroSection />
        <ClydeHowItWorks />
        <div id="fence-types"><ClydeFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><ClydeFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneClyde;
