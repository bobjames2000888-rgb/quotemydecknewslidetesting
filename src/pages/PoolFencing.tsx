import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ShieldCheck, Droplets, Sun, Waves, Award } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";
import framelessGlassIcon from "@/assets/frameless-glass.png";
import semiFramelessIcon from "@/assets/semi-frameless.png";
import aluminiumPoolFenceIcon from "@/assets/aluminium-pool-fence.png";
import steelTubularPoolFenceIcon from "@/assets/steel-tubular-pool-fence.png";
import poolDeckHero from "@/assets/pool-deck-hero.jpg";
import poolDeckFeatures from "@/assets/pool-deck-features.jpg";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";
const PoolFencing = () => {
  useDocumentTitle("Pool Decking Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };
  const handleViewOptions = () => { scrollToSection("pool-materials"); };
  const benefits = [{
    icon: ShieldCheck, title: "Slip Resistant", description: "Textured surfaces and proper board spacing ensure safe footing around the pool"
  }, {
    icon: Droplets, title: "Water Resistant", description: "Materials engineered to handle constant moisture without warping or rotting"
  }, {
    icon: Sun, title: "Cool Underfoot", description: "Composite and hardwood options that stay comfortable in the Australian sun"
  }, {
    icon: Waves, title: "Drainage Design", description: "Proper board gaps and subframe design for efficient water drainage"
  }];
  const features = ["Slip-resistant decking surfaces for pool safety", "Proper drainage gaps between boards", "Moisture-resistant materials and treatments", "Composite, hardwood, and treated pine options", "Stainless steel fasteners for corrosion resistance", "Professional installation by verified deck builders"];
  const materials = [{
    name: "Composite Pool Deck", description: "Low-maintenance, slip-resistant", icon: framelessGlassIcon
  }, {
    name: "Merbau Pool Deck", description: "Natural hardwood beauty", icon: semiFramelessIcon
  }, {
    name: "Spotted Gum Pool Deck", description: "Durable Australian hardwood", icon: aluminiumPoolFenceIcon
  }, {
    name: "Treated Pine Pool Deck", description: "Budget-friendly option", icon: steelTubularPoolFenceIcon
  }];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"><Award className="w-4 h-4 text-primary" /><span className="text-sm font-medium text-primary">Pool-Safe Surfaces</span></div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Pool<br /><span className="text-gradient">Decking Solutions</span></h1>
              <p className="text-lg text-muted-foreground mb-8">Create a stunning, safe pool surround with slip-resistant decking. Beautiful designs using composite or hardwood that handle moisture and heat.</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="quote" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes in Minutes</Button>
                <Button variant="outline" size="lg" onClick={handleViewOptions}>View Options</Button>
              </div>
              <div className="flex items-center space-x-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2"><Check className="w-4 h-4 text-primary" /><span>Slip Resistant</span></div>
                <div className="flex items-center space-x-2"><Check className="w-4 h-4 text-primary" /><span>Water Resistant</span></div>
              </div>
            </div>
            <div className="relative"><div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant"><img src={poolDeckHero} alt="Pool Deck Installation" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Pool Decking?</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">Safety, style, and durability in every pool deck installation</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((b, i) => <Card key={i} className="hover-scale border-border/50"><CardContent className="p-6"><div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4"><b.icon className="w-6 h-6 text-white" /></div><h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3><p className="text-sm text-muted-foreground">{b.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Built for Pool Environments</h2>
              <p className="text-muted-foreground mb-8">Pool decking requires specialist knowledge — proper drainage, slip resistance, and materials that handle constant moisture. Our deck builders deliver safe, stunning results.</p>
              <div className="space-y-4">{features.map((f, i) => <div key={i} className="flex items-start space-x-3"><div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-4 h-4 text-white" /></div><span className="text-foreground">{f}</span></div>)}</div>
            </div>
            <div className="relative"><div className="aspect-square rounded-2xl overflow-hidden shadow-elegant"><img src={poolDeckFeatures} alt="Pool Decking Features" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section id="pool-materials" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pool Decking Materials</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">Choose from materials that suit your style and budget</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{materials.map((m, i) => <Card key={i} className="hover-scale border-border/50"><CardContent className="p-6 text-center"><img src={m.icon} alt={m.name} className="w-36 h-36 mx-auto mb-4 object-contain select-none" draggable="false" /><h3 className="text-lg font-semibold text-foreground mb-2">{m.name}</h3><p className="text-sm text-muted-foreground">{m.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Install Your Pool Deck?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Get free quotes today and create a stunning outdoor entertaining area around your pool</p>
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
export default PoolFencing;
