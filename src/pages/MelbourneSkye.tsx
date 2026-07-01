import Header from "@/components/Header";
import SkyeHeroSection from "@/components/skye/SkyeHeroSection";
import SkyeHowItWorks from "@/components/skye/SkyeHowItWorks";
import SkyeFenceTypes from "@/components/skye/SkyeFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import SkyeFAQSection from "@/components/skye/SkyeFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneSkye = () => {
  useDocumentTitle("Skye Decking Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <SkyeHeroSection />
        <SkyeHowItWorks />
        <div id="fence-types"><SkyeFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><SkyeFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneSkye;
