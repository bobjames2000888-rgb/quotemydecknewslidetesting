import Header from "@/components/Header";
import PakenhamHeroSection from "@/components/pakenham/PakenhamHeroSection";
import PakenhamHowItWorks from "@/components/pakenham/PakenhamHowItWorks";
import PakenhamFenceTypes from "@/components/pakenham/PakenhamFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import PakenhamFAQSection from "@/components/pakenham/PakenhamFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbournePakenham = () => {
  useDocumentTitle("Pakenham Decking Quotes — Get 3 Free Quotes in Minutes");

  const handleQuoteClick = () => {
    window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <PakenhamHeroSection />
        <PakenhamHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types">
          <PakenhamFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <PakenhamFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbournePakenham;
