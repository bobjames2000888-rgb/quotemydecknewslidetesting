import Header from "@/components/Header";
import BoxHillHeroSection from "@/components/box-hill/BoxHillHeroSection";
import BoxHillHowItWorks from "@/components/box-hill/BoxHillHowItWorks";
import BoxHillFenceTypes from "@/components/box-hill/BoxHillFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import BoxHillFAQSection from "@/components/box-hill/BoxHillFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
const QUOTE_URL = "/quote";
const MelbourneBoxHill = () => {
  useDocumentTitle("Box Hill Decking Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };
  return (<div className="min-h-screen bg-background"><Header onQuoteClick={handleQuoteClick} /><main><BoxHillHeroSection /><BoxHillHowItWorks onQuoteClick={handleQuoteClick} /><div id="fence-types"><BoxHillFenceTypes onQuoteClick={handleQuoteClick} /></div><div id="reviews"><ReviewsSection /></div><div id="faq"><BoxHillFAQSection onQuoteClick={handleQuoteClick} /></div></main><Footer /></div>);
};
export default MelbourneBoxHill;