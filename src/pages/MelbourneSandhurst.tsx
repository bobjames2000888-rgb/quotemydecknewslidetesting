import Header from "@/components/Header";
import SandhurstHeroSection from "@/components/sandhurst/SandhurstHeroSection";
import SandhurstHowItWorks from "@/components/sandhurst/SandhurstHowItWorks";
import SandhurstFenceTypes from "@/components/sandhurst/SandhurstFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import SandhurstFAQSection from "@/components/sandhurst/SandhurstFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";
const MelbourneSandhurst = () => {
  useDocumentTitle("Sandhurst Decking Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };
  return (<div className="min-h-screen bg-background"><Header onQuoteClick={handleQuoteClick} /><main><SandhurstHeroSection /><SandhurstHowItWorks onQuoteClick={handleQuoteClick} /><div id="fence-types"><SandhurstFenceTypes /></div><div id="reviews"><ReviewsSection /></div><div id="faq"><SandhurstFAQSection /></div></main><Footer /></div>);
};
export default MelbourneSandhurst;
