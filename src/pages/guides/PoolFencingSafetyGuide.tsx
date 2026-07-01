import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, AlertTriangle } from "lucide-react";
const QUOTE_URL = "/quote";
const PoolFencingSafetyGuide = () => {
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
              Pool Decking
              <br />
              <span className="text-gradient">Safety Guide</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Essential safety requirements and design considerations for pool decking
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              A pool deck transforms your backyard into a resort-style entertaining area, but safety and durability must be the primary design drivers. Pool environments are harsh — combining constant moisture, chlorine or salt, intense sun, and barefoot traffic.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">1. Slip Resistance is Critical</h2>
            <p className="text-muted-foreground mb-4">Pool decking must provide secure footing when wet.</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li><strong>Composite Decking:</strong> Often the best choice. Premium boards have highly engineered textured surfaces specifically designed for wet slip resistance.</li>
              <li><strong>Timber Decking:</strong> Must be regularly maintained to prevent slippery algae or mould growth. Grooved timber (reeded decking) can offer grip but is harder to clean.</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">2. Proper Drainage and Board Spacing</h2>
            <p className="text-muted-foreground mb-4">Water must not pool on the deck surface or sit on the subframe.</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Adequate gaps (usually 4-6mm) must be left between boards for water drainage.</li>
              <li>The subframe below must be designed to allow water to drain away from the pool and the house.</li>
              <li>If the deck sits close to the ground over concrete, adequate fall/slope must be present on the concrete pad.</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">3. Safe Materials Near Pools</h2>
            <p className="text-muted-foreground mb-4">The chemicals in your pool and constant moisture dictate your material choices.</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li><strong>Fasteners:</strong> You MUST use 316 marine-grade stainless steel screws or hidden fasteners around a pool, especially saltwater pools. Standard galvanised screws will rust rapidly.</li>
              <li><strong>Subframe:</strong> Standard treated pine subframes can deteriorate faster in pool zones due to poor ventilation and high moisture. Consider H4 treated pine, hardwood, or ideally, aluminium framing.</li>
              <li><strong>Splinters:</strong> Timber decks will eventually splinter, which is a hazard for bare feet. High-quality composite decking guarantees a splinter-free surface.</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">4. Pool Fencing Integration</h2>
            <p className="text-muted-foreground mb-4">Your deck design must accommodate mandatory pool fencing (glass or aluminium).</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>If fixing glass spigots or fence posts to the deck, the deck subframe MUST be structurally reinforced at those points to take the wind load and impact load of the fence.</li>
              <li>The deck height affects the effective height of the pool fence. If you build a new deck against an existing pool fence, you may inadvertently make the fence non-compliant (e.g., less than 1200mm high).</li>
            </ul>

            <div className="bg-muted/50 border border-border rounded-lg p-6 mt-8">
              <p className="text-muted-foreground text-sm italic">
                Always ensure your deck builder understands pool safety fencing laws. A poorly planned deck can result in your pool failing its safety inspection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Your Pool Deck Quote?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Compare professional deck builders and get free quotes in 60 seconds.</p>
            <Button variant="secondary" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes Now</Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default PoolFencingSafetyGuide;