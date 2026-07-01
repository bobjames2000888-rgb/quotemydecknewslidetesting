import Header from "@/components/Header";
import BayswaterHeroSection from "@/components/bayswater/BayswaterHeroSection";
import BayswaterHowItWorks from "@/components/bayswater/BayswaterHowItWorks";
import BayswaterFenceTypes from "@/components/bayswater/BayswaterFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import BayswaterFAQSection from "@/components/bayswater/BayswaterFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneBayswater = () => {
  useDocumentTitle("Bayswater Decking Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <BayswaterHeroSection />
        <BayswaterHowItWorks />
        <div id="fence-types"><BayswaterFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><BayswaterFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneBayswater;
