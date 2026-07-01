import { useEffect } from "react";
import Header from "@/components/Header";
import TemplestoweHeroSection from "@/components/templestowe/TemplestoweHeroSection";
import TemplestoweHowItWorks from "@/components/templestowe/TemplestoweHowItWorks";
import TemplestoweFenceTypes from "@/components/templestowe/TemplestoweFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import TemplestoweFAQSection from "@/components/templestowe/TemplestoweFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneTemplestowe = () => {
  useEffect(() => {
    document.title = "Templestowe Decking Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => {
    window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <TemplestoweHeroSection />
        <TemplestoweHowItWorks />
        <div id="fence-types">
          <TemplestoweFenceTypes />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <TemplestoweFAQSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneTemplestowe;
