import Header from "@/components/Header";
import KilsythHeroSection from "@/components/kilsyth/KilsythHeroSection";
import KilsythHowItWorks from "@/components/kilsyth/KilsythHowItWorks";
import KilsythFenceTypes from "@/components/kilsyth/KilsythFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import KilsythFAQSection from "@/components/kilsyth/KilsythFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneKilsyth = () => {
  useDocumentTitle("Kilsyth Decking Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <KilsythHeroSection />
        <KilsythHowItWorks />
        <div id="fence-types"><KilsythFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><KilsythFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneKilsyth;
