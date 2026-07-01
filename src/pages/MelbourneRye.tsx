import Header from "@/components/Header";
import RyeHeroSection from "@/components/rye/RyeHeroSection";
import RyeHowItWorks from "@/components/rye/RyeHowItWorks";
import RyeFenceTypes from "@/components/rye/RyeFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import RyeFAQSection from "@/components/rye/RyeFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneRye = () => {
  useDocumentTitle("Rye Decking Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <RyeHeroSection />
        <RyeHowItWorks />
        <div id="fence-types"><RyeFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><RyeFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneRye;
