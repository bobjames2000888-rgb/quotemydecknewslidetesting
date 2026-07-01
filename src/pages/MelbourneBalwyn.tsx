import Header from "@/components/Header";
import BalwynHeroSection from "@/components/balwyn/BalwynHeroSection";
import BalwynHowItWorks from "@/components/balwyn/BalwynHowItWorks";
import BalwynFenceTypes from "@/components/balwyn/BalwynFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import BalwynFAQSection from "@/components/balwyn/BalwynFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneBalwyn = () => {
  useDocumentTitle("Balwyn Decking Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <BalwynHeroSection />
        <BalwynHowItWorks />
        <div id="fence-types"><BalwynFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><BalwynFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneBalwyn;
