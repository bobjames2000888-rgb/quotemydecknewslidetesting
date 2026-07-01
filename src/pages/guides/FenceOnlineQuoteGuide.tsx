import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
const QUOTE_URL = "/quote";
const FenceOnlineQuoteGuide = () => {
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Decking Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How to Get Accurate
              <br />
              <span className="text-gradient">Deck Quotes Online</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Understand what information builders need to price your deck accurately
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Getting deck quotes online is fast and convenient — but the quality of the quote you receive depends heavily on the information you provide. Clear details lead to accurate pricing, fewer surprises, and smoother construction.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Information Deck Builders Need</h2>
            <p className="text-muted-foreground mb-4">To provide an accurate quote, a deck builder needs to understand several key factors about your project:</p>
            
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Deck Size and Dimensions</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Rough length and width (e.g., 6m x 4m = 24 square metres)</li>
              <li>Estimated height off the ground (Crucial for engineering and balustrade requirements)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Material Preferences</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Are you wanting Composite, Hardwood (e.g., Merbau), or Treated Pine?</li>
              <li>Do you want timber subframing or aluminium subframing?</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Ground Conditions & Site Access</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Is the ground flat or sloping?</li>
              <li>What is currently there? (Grass, concrete slab, old deck to be removed?)</li>
              <li>How is the access to the backyard? (Can they get machinery in, or is it narrow side-gate access only?)</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Extras That Affect the Price</h2>
            <p className="text-muted-foreground mb-4">Make sure to mention if you want any of the following, as they significantly alter the price:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Stairs and steps</li>
              <li>Handrails or balustrades (required if the deck is high)</li>
              <li>Built-in seating or planter boxes</li>
              <li>Fascia boards (closing in the sides of the deck so you can't see underneath)</li>
              <li>Integrated lighting</li>
              <li>Pergola or roof structure over the deck</li>
              <li>Council approval processing</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Provide Photos</h2>
            <p className="text-muted-foreground mb-8">
              The single best thing you can do when requesting a quote online is to upload photos of the area where the deck will be built. This allows the builder to immediately see the ground conditions, the attachment points to the house, and potential access issues.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Getting Quotes with QuoteMyDeck</h2>
            <p className="text-muted-foreground mb-8">
              QuoteMyDeck uses a guided process designed to capture the right details from the start, helping you get accurate, comparable quotes from local professional deck builders.
            </p>

          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Your Deck Quote?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Compare local deck builders and get free quotes in 60 seconds.</p>
            <Button variant="secondary" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes Now</Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default FenceOnlineQuoteGuide;