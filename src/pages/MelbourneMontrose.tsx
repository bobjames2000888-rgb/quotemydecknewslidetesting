import Header from "@/components/Header";
import MontroseHeroSection from "@/components/montrose/MontroseHeroSection";
import MontroseHowItWorks from "@/components/montrose/MontroseHowItWorks";
import MontroseFenceTypes from "@/components/montrose/MontroseFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import MontroseFAQSection from "@/components/montrose/MontroseFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneMontrose = () => {
  useDocumentTitle("Montrose Decking Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <MontroseHeroSection />
        <MontroseHowItWorks />
        <div id="fence-types"><MontroseFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><MontroseFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneMontrose;
