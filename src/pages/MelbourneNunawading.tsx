import { useEffect } from "react";
import Header from "@/components/Header";
import NunawadingHeroSection from "@/components/nunawading/NunawadingHeroSection";
import NunawadingHowItWorks from "@/components/nunawading/NunawadingHowItWorks";
import NunawadingFenceTypes from "@/components/nunawading/NunawadingFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import NunawadingFAQSection from "@/components/nunawading/NunawadingFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneNunawading = () => {
  useEffect(() => { document.title = "Nunawading Decking Quotes — Get 3 Free Quotes in Minutes"; }, []);
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <NunawadingHeroSection />
        <NunawadingHowItWorks />
        <div id="fence-types"><NunawadingFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><NunawadingFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneNunawading;
