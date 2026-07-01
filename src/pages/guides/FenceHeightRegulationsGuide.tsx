import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, AlertTriangle } from "lucide-react";
const QUOTE_URL = "/quote";
const FenceHeightRegulationsGuide = () => {
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
              Deck Building Regulations
              <br />
              <span className="text-gradient">by State</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Australian deck height regulations, permits, and engineering requirements
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground font-medium mb-2">Important Notice</p>
                  <p className="text-muted-foreground text-sm">
                    This guide is for general information only. Always confirm requirements with your local council before building a deck. Unapproved decks may need to be demolished.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              Building a new deck in Australia often requires council approval, but the rules depend on how high the deck is, its size, and where it is located on your property.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">General Rules for Deck Approvals</h2>
            <p className="text-muted-foreground mb-4">While rules vary by council, generally a building permit or development approval is REQUIRED if:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>The deck is elevated more than a specific height above ground level (often 800mm to 1m, depending on the state)</li>
              <li>It is larger than a specific area (often 20-25 square metres)</li>
              <li>It is attached to the house</li>
              <li>It has a roof or pergola structure over it</li>
              <li>It is built forward of the building line (in the front yard)</li>
              <li>It is in a bushfire prone area (BAL zone) or heritage overlay</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Deck Height and Balustrades (Handrails)</h2>
            <p className="text-muted-foreground mb-4">Under the National Construction Code (NCC) and Australian Standards:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>If the deck floor is 1 metre or more above the ground below, a continuous balustrade or barrier is mandatory.</li>
              <li>The balustrade must be at least 1 metre high (measured from the deck floor).</li>
              <li>If the deck is more than 4 metres above ground, the balustrade must not have any climbable elements between 150mm and 760mm above the floor.</li>
              <li>Gaps in the balustrade must not allow a 125mm sphere to pass through.</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">When is Engineering Required?</h2>
            <p className="text-muted-foreground mb-4">Structural engineering certification is typically required for:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Elevated decks (usually over 1m high)</li>
              <li>Decks carrying heavy loads (e.g., spas or outdoor kitchens)</li>
              <li>Decks built on sloping or unstable ground</li>
              <li>Decks attached to existing structures in specific ways</li>
              <li>Decks requiring non-standard spans or framing</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Decking Regulations by State</h2>
            <p className="text-muted-foreground mb-4">
              <strong>NSW:</strong> Under Complying Development (CDC), decks up to 25sqm and under 1m high might not need full DA approval, but still need a Complying Development Certificate in many cases.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Victoria:</strong> Building permits are generally required for decks attached to a building, or any freestanding deck larger than 10sqm.
            </p>
            <p className="text-muted-foreground mb-8">
              <strong>QLD:</strong> Approvals are generally required for decks attached to the home or over certain heights.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Getting the Right Deck Built</h2>
            <p className="text-muted-foreground mb-4">QuoteMyDeck connects you with professional deck builders who understand local council requirements and can often handle the permit application process for you.</p>

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
export default FenceHeightRegulationsGuide;