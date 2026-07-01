import Header from "@/components/Header";
import BerwickHeroSection from "@/components/berwick/BerwickHeroSection";
import BerwickHowItWorks from "@/components/berwick/BerwickHowItWorks";
import BerwickFenceTypes from "@/components/berwick/BerwickFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import BerwickFAQSection from "@/components/berwick/BerwickFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneBerwick = () => {
  useDocumentTitle("Berwick Decking Quotes — Get 3 Free Quotes in Minutes");

  const handleQuoteClick = () => {
    window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <BerwickHeroSection />
        <BerwickHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types">
          <BerwickFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <BerwickFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneBerwick;
