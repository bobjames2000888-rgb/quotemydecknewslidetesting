import { useEffect } from "react";
import Header from "@/components/Header";
import MountElizaHeroSection from "@/components/mount-eliza/MountElizaHeroSection";
import MountElizaHowItWorks from "@/components/mount-eliza/MountElizaHowItWorks";
import MountElizaFenceTypes from "@/components/mount-eliza/MountElizaFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import MountElizaFAQSection from "@/components/mount-eliza/MountElizaFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneMountEliza = () => {
  useEffect(() => {
    document.title = "Mount Eliza Decking Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => {
    window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <MountElizaHeroSection />
        <MountElizaHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types">
          <MountElizaFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <MountElizaFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneMountEliza;
