import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
const QUOTE_URL = "/quote";
const ChoosingFenceMaterialGuide = () => {
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
              Choosing the Right
              <br />
              <span className="text-gradient">Decking Material</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Compare composite, hardwood, treated pine, and aluminium framing
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Choosing the right decking material is crucial. It determines not just how your deck looks, but how much time you'll spend maintaining it, how long it will last, and the overall cost of the project.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">At‑a‑Glance Decking Material Comparison</h2>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border px-4 py-3 text-left font-semibold">Material</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold">Typical Lifespan</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold">Cost</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold">Maintenance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-3">Treated Pine</td>
                    <td className="border border-border px-4 py-3">10-15 years</td>
                    <td className="border border-border px-4 py-3">$</td>
                    <td className="border border-border px-4 py-3">High (Annual staining)</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border px-4 py-3">Hardwood (Merbau, Spotted Gum)</td>
                    <td className="border border-border px-4 py-3">15-25+ years</td>
                    <td className="border border-border px-4 py-3">$$ - $$$</td>
                    <td className="border border-border px-4 py-3">High (Regular oiling)</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-3">Composite</td>
                    <td className="border border-border px-4 py-3">25-30+ years</td>
                    <td className="border border-border px-4 py-3">$$$</td>
                    <td className="border border-border px-4 py-3">Very Low (Washing only)</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border px-4 py-3">Aluminium (Framing or Boards)</td>
                    <td className="border border-border px-4 py-3">40+ years</td>
                    <td className="border border-border px-4 py-3">$$$$</td>
                    <td className="border border-border px-4 py-3">Zero</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">1. Composite Decking</h2>
            <p className="text-muted-foreground mb-4">Made from recycled plastics and wood fibres, composite is rapidly becoming the standard for modern decks.</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li><strong>Pros:</strong> No sanding or oiling ever. Highly durable, rot-resistant, fade-resistant. Hidden fastener systems.</li>
              <li><strong>Cons:</strong> Higher upfront cost. Can get warmer underfoot in direct intense sun compared to light timber.</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">2. Hardwood Decking (Merbau, Spotted Gum, Blackbutt)</h2>
            <p className="text-muted-foreground mb-4">The classic Australian choice offering natural beauty and character.</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li><strong>Pros:</strong> Stunning natural look, extremely strong and durable. Many species are naturally fire and termite resistant.</li>
              <li><strong>Cons:</strong> Requires regular maintenance (oiling/staining every 12-18 months) to prevent greying and splitting. Can splinter over time.</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">3. Treated Pine Decking</h2>
            <p className="text-muted-foreground mb-4">The most budget-friendly timber option.</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li><strong>Pros:</strong> Lowest upfront cost. Easy to work with. Can be painted or stained to various colours.</li>
              <li><strong>Cons:</strong> Softest wood, dents easily. Highest maintenance requirement. Shortest lifespan.</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">What About the Subframe?</h2>
            <p className="text-muted-foreground mb-4">Don't put a 25-year composite board on a 15-year treated pine frame. Consider <strong>Aluminium framing</strong> for your deck's substructure — it never rots, remains perfectly straight, and outlasts any timber frame.</p>

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
export default ChoosingFenceMaterialGuide;