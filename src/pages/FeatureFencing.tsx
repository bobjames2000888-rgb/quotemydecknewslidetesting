import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Sparkles, Paintbrush, Star, Home, Award } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";
import laserCutIcon from "@/assets/laser-cut.png";
import slatScreenIcon from "@/assets/slat-screen.png";
import mixedMaterialsIcon from "@/assets/mixed-materials.png";
import architecturalIcon from "@/assets/architectural.png";
import featureDeckHero from "@/assets/feature-deck-hero.jpg";
import featureDeckDesigns from "@/assets/feature-deck-designs.jpg";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";
const FeatureFencing = () => {
  useDocumentTitle("Custom Feature Deck Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };
  const handleViewDesigns = () => { scrollToSection("fencing-styles"); };
  const benefits = [{
    icon: Sparkles, title: "Unique Designs", description: "Stand out with custom deck patterns, inlays, and multi-level designs"
  }, {
    icon: Paintbrush, title: "Custom Finishes", description: "Choose from a wide range of board colours, stains, and mixed materials"
  }, {
    icon: Star, title: "Premium Materials", description: "High-quality hardwoods and composites for exceptional aesthetics"
  }, {
    icon: Home, title: "Property Value", description: "A stunning feature deck significantly increases your property's market value"
  }];
  const features = ["Custom multi-level deck designs", "Mixed material combinations (timber, composite, stone)", "Built-in seating, planters, and fire pit surrounds", "LED lighting integration", "Custom staining and finishing"];
  const styles = [{
    name: "Multi-Level", description: "Tiered entertainment spaces", icon: laserCutIcon
  }, {
    name: "Wraparound", description: "Full home perimeter decking", icon: slatScreenIcon
  }, {
    name: "Floating Deck", description: "Modern freestanding platforms", icon: mixedMaterialsIcon
  }, {
    name: "Rooftop Deck", description: "Elevated urban entertaining", icon: architecturalIcon
  }];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"><Award className="w-4 h-4 text-primary" /><span className="text-sm font-medium text-primary">Statement Pieces</span></div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Custom Feature<br /><span className="text-gradient">Deck Designs</span></h1>
              <p className="text-lg text-muted-foreground mb-8">Make a statement with a custom feature deck. Unique designs that transform your outdoor space into a work of art.</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="quote" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes in Minutes</Button>
                <Button variant="outline" size="lg" onClick={handleViewDesigns}>View Designs</Button>
              </div>
            </div>
            <div className="relative"><div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant"><img src={featureDeckHero} alt="Custom Feature Deck" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose a Feature Deck?</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">Create a unique outdoor space that reflects your personal style</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((b, i) => <Card key={i} className="hover-scale border-border/50"><CardContent className="p-6"><div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4"><b.icon className="w-6 h-6 text-white" /></div><h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3><p className="text-sm text-muted-foreground">{b.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Endless Design Possibilities</h2>
              <p className="text-muted-foreground mb-8">Feature deck options are limited only by your imagination. Work with our deck builders to create something truly extraordinary.</p>
              <div className="space-y-4">{features.map((f, i) => <div key={i} className="flex items-start space-x-3"><div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-4 h-4 text-white" /></div><span className="text-foreground">{f}</span></div>)}</div>
            </div>
            <div className="relative"><div className="aspect-square rounded-2xl overflow-hidden shadow-elegant"><img src={featureDeckDesigns} alt="Feature Deck Designs" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section id="fencing-styles" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Feature Deck Styles</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">From multi-level platforms to wraparound designs</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{styles.map((s, i) => <Card key={i} className="hover-scale border-border/50"><CardContent className="p-6 text-center"><img src={s.icon} alt={s.name} className="w-36 h-36 mx-auto mb-4 object-contain select-none" draggable="false" /><h3 className="text-lg font-semibold text-foreground mb-2">{s.name}</h3><p className="text-sm text-muted-foreground">{s.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Create Your Feature Deck?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Get a free consultation and quotes for your custom feature deck project</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes Now</Button>
              <a href="tel:0481752344" aria-label="Call 0481 752 344"><Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">Call 0481 752 344</Button></a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default FeatureFencing;
