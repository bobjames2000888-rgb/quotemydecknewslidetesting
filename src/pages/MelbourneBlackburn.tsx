import Header from "@/components/Header";
import BlackburnHeroSection from "@/components/blackburn/BlackburnHeroSection";
import BlackburnHowItWorks from "@/components/blackburn/BlackburnHowItWorks";
import BlackburnFenceTypes from "@/components/blackburn/BlackburnFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import BlackburnFAQSection from "@/components/blackburn/BlackburnFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
const QUOTE_URL = "/quote";
const MelbourneBlackburn = () => {
  useDocumentTitle("Blackburn Decking Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };
  return (<div className="min-h-screen bg-background"><Header onQuoteClick={handleQuoteClick} /><main><BlackburnHeroSection /><BlackburnHowItWorks /><div id="fence-types"><BlackburnFenceTypes /></div><div id="reviews"><ReviewsSection /></div><div id="faq"><BlackburnFAQSection /></div></main><Footer /></div>);
};
export default MelbourneBlackburn;