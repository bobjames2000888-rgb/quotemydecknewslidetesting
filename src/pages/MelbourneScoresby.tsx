import Header from "@/components/Header";
import ScoresbyHeroSection from "@/components/scoresby/ScoresbyHeroSection";
import ScoresbyHowItWorks from "@/components/scoresby/ScoresbyHowItWorks";
import ScoresbyFenceTypes from "@/components/scoresby/ScoresbyFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import ScoresbyFAQSection from "@/components/scoresby/ScoresbyFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneScoresby = () => {
  useDocumentTitle("Scoresby Decking Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <ScoresbyHeroSection />
        <ScoresbyHowItWorks />
        <div id="fence-types"><ScoresbyFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><ScoresbyFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneScoresby;
