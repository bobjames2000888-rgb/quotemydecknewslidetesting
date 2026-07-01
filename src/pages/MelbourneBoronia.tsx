import Header from "@/components/Header";
import BoroniaHeroSection from "@/components/boronia/BoroniaHeroSection";
import BoroniaHowItWorks from "@/components/boronia/BoroniaHowItWorks";
import BoroniaFenceTypes from "@/components/boronia/BoroniaFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import BoroniaFAQSection from "@/components/boronia/BoroniaFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
const QUOTE_URL = "/quote";
const MelbourneBoronia = () => {
  useDocumentTitle("Boronia Decking Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };
  return (<div className="min-h-screen bg-background"><Header onQuoteClick={handleQuoteClick} /><main><BoroniaHeroSection /><BoroniaHowItWorks /><div id="fence-types"><BoroniaFenceTypes /></div><div id="reviews"><ReviewsSection /></div><div id="faq"><BoroniaFAQSection /></div></main><Footer /></div>);
};
export default MelbourneBoronia;