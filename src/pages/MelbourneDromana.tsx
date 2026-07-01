import Header from "@/components/Header";
import DromanaHeroSection from "@/components/dromana/DromanaHeroSection";
import DromanaHowItWorks from "@/components/dromana/DromanaHowItWorks";
import DromanaFenceTypes from "@/components/dromana/DromanaFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import DromanaFAQSection from "@/components/dromana/DromanaFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneDromana = () => {
  useDocumentTitle("Dromana Decking Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <DromanaHeroSection />
        <DromanaHowItWorks />
        <div id="fence-types"><DromanaFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><DromanaFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneDromana;
