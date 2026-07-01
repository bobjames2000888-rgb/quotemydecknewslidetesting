import Header from "@/components/Header";
import MitchamHeroSection from "@/components/mitcham/MitchamHeroSection";
import MitchamHowItWorks from "@/components/mitcham/MitchamHowItWorks";
import MitchamFenceTypes from "@/components/mitcham/MitchamFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import MitchamFAQSection from "@/components/mitcham/MitchamFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneMitcham = () => {
  useDocumentTitle("Mitcham Decking Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <MitchamHeroSection />
        <MitchamHowItWorks />
        <div id="fence-types"><MitchamFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><MitchamFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneMitcham;
