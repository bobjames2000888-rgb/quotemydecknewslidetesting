import Header from "@/components/Header";
import WantirnaHeroSection from "@/components/wantirna/WantirnaHeroSection";
import WantirnaHowItWorks from "@/components/wantirna/WantirnaHowItWorks";
import WantirnaFenceTypes from "@/components/wantirna/WantirnaFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import WantirnaFAQSection from "@/components/wantirna/WantirnaFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneWantirna = () => {
  useDocumentTitle("Wantirna Decking Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <WantirnaHeroSection />
        <WantirnaHowItWorks />
        <div id="fence-types"><WantirnaFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><WantirnaFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneWantirna;
