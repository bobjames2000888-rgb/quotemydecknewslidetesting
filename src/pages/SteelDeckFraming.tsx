import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Shield, Flame, Ruler, Hammer, Award } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import commercialSecurityIcon from "@/assets/commercial-security.png";
import industrialSecurityIcon from "@/assets/industrial-security.png";
import governmentSecurityIcon from "@/assets/government-security.png";
import criticalInfrastructureSecurityIcon from "@/assets/critical-infrastructure-security.png";
import steelFrameHero from "@/assets/steel-frame-hero.jpg";
import steelFrameFeatures from "@/assets/steel-frame-features.jpg";

const QUOTE_URL = "/quote";
const SteelDeckFraming = () => {
  useDocumentTitle("Steel Deck Framing Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };
  const handleViewOptions = () => { scrollToSection("frame-types"); };
  const benefits = [{
    icon: Shield, title: "Maximum Strength", description: "Steel subframes provide unmatched structural integrity for large or elevated decks"
  }, {
    icon: Flame, title: "Fire Resistant", description: "Non-combustible steel framing meets BAL requirements for bushfire-prone areas"
  }, {
    icon: Ruler, title: "Precision Engineering", description: "Factory-welded and galvanised frames ensure perfect alignment and long-term stability"
  }, {
    icon: Hammer, title: "Long Lifespan", description: "Hot-dip galvanised steel lasts 50+ years with virtually zero maintenance on the subframe"
  }];
  const features = ["Hot-dip galvanised steel bearers and joists", "Compatible with timber, composite, and hardwood boards", "Ideal for elevated and multi-level deck builds", "Non-combustible — meets BAL-40 and BAL-FZ ratings", "Custom configurations for any site conditions", "Professional installation by verified deck builders"];
  const frameTypes = [{
    name: "Universal Beams", description: "Heavy-duty structural support", icon: commercialSecurityIcon
  }, {
    name: "C-Channel Joists", description: "Lightweight steel framing", icon: industrialSecurityIcon
  }, {
    name: "Boxed Steel Posts", description: "High-rise & elevated decks", icon: governmentSecurityIcon
  }, {
    name: "Custom Fabrication", description: "Bespoke frames to spec", icon: criticalInfrastructureSecurityIcon
  }];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"><Award className="w-4 h-4 text-primary" /><span className="text-sm font-medium text-primary">Maximum Strength</span></div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Steel<br /><span className="text-gradient">Deck Framing</span></h1>
              <p className="text-lg text-muted-foreground mb-8">Build on the strongest foundation possible. Steel deck framing delivers unmatched structural integrity for elevated, large-span, and bushfire-rated deck builds across Australia.</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="quote" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes in Minutes</Button>
                <Button variant="outline" size="lg" onClick={handleViewOptions}>View Frame Types</Button>
              </div>
              <div className="flex items-center space-x-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2"><Check className="w-4 h-4 text-primary" /><span>Fire Rated</span></div>
                <div className="flex items-center space-x-2"><Check className="w-4 h-4 text-primary" /><span>50+ Year Lifespan</span></div>
              </div>
            </div>
            <div className="relative"><div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant"><img src={steelFrameHero} alt="Steel Deck Framing" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Steel Deck Framing?</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">The ultimate subframe solution for demanding deck builds</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((b, i) => <Card key={i} className="hover-scale border-border/50"><CardContent className="p-6"><div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4"><b.icon className="w-6 h-6 text-white" /></div><h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3><p className="text-sm text-muted-foreground">{b.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Built to Last Decades</h2>
              <p className="text-muted-foreground mb-8">Steel deck framing is the preferred choice for builders tackling elevated decks, steep sites, and bushfire zones. Our verified deck builders engineer every frame to Australian Standards.</p>
              <div className="space-y-4">{features.map((f, i) => <div key={i} className="flex items-start space-x-3"><div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-4 h-4 text-white" /></div><span className="text-foreground">{f}</span></div>)}</div>
            </div>
            <div className="relative"><div className="aspect-square rounded-2xl overflow-hidden shadow-elegant"><img src={steelFrameFeatures} alt="Steel Deck Framing Features" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section id="frame-types" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Steel Frame Options</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">Engineered steel systems for every deck configuration</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{frameTypes.map((t, i) => <Card key={i} className="hover-scale border-border/50"><CardContent className="p-6 text-center"><img src={t.icon} alt={t.name} className="w-36 h-36 mx-auto mb-4 object-contain select-none" draggable="false" /><h3 className="text-lg font-semibold text-foreground mb-2">{t.name}</h3><p className="text-sm text-muted-foreground">{t.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Steel Deck Framing?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Get free quotes today and build your deck on steel</p>
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
export default SteelDeckFraming;
