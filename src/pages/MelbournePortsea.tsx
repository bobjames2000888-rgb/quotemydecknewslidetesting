import Header from "@/components/Header";
import PortseaHeroSection from "@/components/portsea/PortseaHeroSection";
import PortseaHowItWorks from "@/components/portsea/PortseaHowItWorks";
import PortseaFenceTypes from "@/components/portsea/PortseaFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import PortseaFAQSection from "@/components/portsea/PortseaFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbournePortsea = () => {
  useDocumentTitle("Portsea Decking Quotes — Get 3 Free Quotes in Minutes");

  const handleQuoteClick = () => {
    window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <PortseaHeroSection />
        <PortseaHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types">
          <PortseaFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <PortseaFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbournePortsea;
