import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
const QUOTE_URL = "/quote";
const ColorbondFencingGuide = () => {
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
              Complete Guide to
              <br />
              <span className="text-gradient">Composite Decking</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Everything about composite decking in Australia
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Composite decking is one of the most popular choices for Australian homes — and for good reason. It offers beautiful wood-look finishes, exceptional durability, and low maintenance, making it a practical long‑term option for outdoor living areas.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              This guide is designed for everyday Australian homeowners who want clear, honest information before building a deck. Whether you're replacing an old timber deck or building new, this guide explains everything you need to know about composite decking.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">What Is Composite Decking?</h2>
            <p className="text-muted-foreground mb-4">
              Composite decking is manufactured from a blend of recycled wood fibres and plastic. The boards are typically capped or coated with a protective polymer shell that resists moisture, stains, and fading.
            </p>
            <p className="text-muted-foreground mb-4">In simple terms:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>It looks like natural timber</li>
              <li>It doesn't rot, warp, or splinter</li>
              <li>It doesn't need oiling or painting</li>
              <li>It's highly resistant to Australian weather</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Why Homeowners Choose Composite Decking</h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Low maintenance – no sanding, oiling, or staining required</li>
              <li>Highly durable – resistant to scratches, stains, and fading</li>
              <li>Moisture resistant – ideal for pool areas and coastal environments</li>
              <li>Eco-friendly – made largely from recycled materials</li>
              <li>Safe for bare feet – no splinters or nails sticking up (hidden fasteners)</li>
              <li>Long lifespan – often backed by 25+ year warranties</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Composite vs Timber Decking</h2>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Maintenance</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li><strong>Composite:</strong> Very low maintenance. Just wash with soapy water.</li>
              <li><strong>Timber:</strong> Requires regular cleaning, sanding, and oiling/staining to prevent deterioration.</li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Cost Over Time</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li><strong>Composite:</strong> Higher upfront cost, but minimal long-term maintenance expenses.</li>
              <li><strong>Timber:</strong> Often cheaper initially, but significantly higher ongoing maintenance costs and effort.</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Installation: What Homeowners Should Know</h2>
            <p className="text-muted-foreground mb-4">
              Professional installation is critical for composite decking. It expands and contracts differently than timber, requiring specific joist spacing and fastening systems.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Proper subframe preparation is essential</li>
              <li>Specific gapping is required for thermal expansion</li>
              <li>Hidden clip systems provide a clean, fastener-free surface</li>
              <li>Adequate ventilation under the deck must be maintained</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Getting a Composite Decking Quote</h2>
            <p className="text-muted-foreground mb-4">
              QuoteMyDeck helps homeowners compare local deck builders and receive transparent, competitive quotes.
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
export default ColorbondFencingGuide;