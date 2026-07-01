import Header from "@/components/Header";
import HastingsHeroSection from "@/components/hastings/HastingsHeroSection";
import HastingsHowItWorks from "@/components/hastings/HastingsHowItWorks";
import HastingsFenceTypes from "@/components/hastings/HastingsFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import HastingsFAQSection from "@/components/hastings/HastingsFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneHastings = () => {
  useDocumentTitle("Hastings Decking Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <HastingsHeroSection />
        <HastingsHowItWorks />
        <div id="fence-types"><HastingsFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><HastingsFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneHastings;
