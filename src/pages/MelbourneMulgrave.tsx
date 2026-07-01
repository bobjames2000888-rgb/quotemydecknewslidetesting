import Header from "@/components/Header";
import MulgraveHeroSection from "@/components/mulgrave/MulgraveHeroSection";
import MulgraveHowItWorks from "@/components/mulgrave/MulgraveHowItWorks";
import MulgraveFenceTypes from "@/components/mulgrave/MulgraveFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import MulgraveFAQSection from "@/components/mulgrave/MulgraveFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneMulgrave = () => {
  useDocumentTitle("Mulgrave Decking Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <MulgraveHeroSection />
        <MulgraveHowItWorks />
        <div id="fence-types"><MulgraveFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><MulgraveFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneMulgrave;
