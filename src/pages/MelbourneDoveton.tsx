import Header from "@/components/Header";
import DovetonHeroSection from "@/components/doveton/DovetonHeroSection";
import DovetonHowItWorks from "@/components/doveton/DovetonHowItWorks";
import DovetonFenceTypes from "@/components/doveton/DovetonFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import DovetonFAQSection from "@/components/doveton/DovetonFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneDoveton = () => {
  useDocumentTitle("Doveton Decking Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <DovetonHeroSection />
        <DovetonHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types"><DovetonFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><DovetonFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneDoveton;
