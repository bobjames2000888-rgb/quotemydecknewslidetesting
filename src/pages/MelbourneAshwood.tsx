import Header from "@/components/Header";
import AshwoodHeroSection from "@/components/ashwood/AshwoodHeroSection";
import AshwoodHowItWorks from "@/components/ashwood/AshwoodHowItWorks";
import AshwoodFenceTypes from "@/components/ashwood/AshwoodFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import AshwoodFAQSection from "@/components/ashwood/AshwoodFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneAshwood = () => {
  useDocumentTitle("Ashwood Decking Quotes — Get 3 Free Quotes in Minutes");

  const handleQuoteClick = () => {
    window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <AshwoodHeroSection />
        <AshwoodHowItWorks />
        <div id="fence-types"><AshwoodFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><AshwoodFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneAshwood;
