import Header from "@/components/Header";
import SeafordHeroSection from "@/components/seaford/SeafordHeroSection";
import SeafordHowItWorks from "@/components/seaford/SeafordHowItWorks";
import SeafordFenceTypes from "@/components/seaford/SeafordFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import SeafordFAQSection from "@/components/seaford/SeafordFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneSeaford = () => {
  useDocumentTitle("Seaford Decking Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <SeafordHeroSection />
        <SeafordHowItWorks />
        <div id="fence-types"><SeafordFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><SeafordFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneSeaford;
