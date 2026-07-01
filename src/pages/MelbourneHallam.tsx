import Header from "@/components/Header";
import HallamHeroSection from "@/components/hallam/HallamHeroSection";
import HallamHowItWorks from "@/components/hallam/HallamHowItWorks";
import HallamFenceTypes from "@/components/hallam/HallamFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import HallamFAQSection from "@/components/hallam/HallamFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneHallam = () => {
  useDocumentTitle("Hallam Decking Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <HallamHeroSection />
        <HallamHowItWorks />
        <div id="fence-types"><HallamFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><HallamFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneHallam;
