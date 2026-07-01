import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Zap, ShieldCheck, Sparkles, Waves, Award } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";
import classicSlatIcon from "@/assets/classic-slat.png";
import verticalPicketIcon from "@/assets/vertical-picket.png";
import privacyScreenIcon from "@/assets/privacy-screen.png";
import decorativePanelIcon from "@/assets/decorative-panel.webp";
import aluminiumFrameHero from "@/assets/aluminium-frame-hero.jpg";
import aluminiumFrameFeatures from "@/assets/aluminium-frame-features.jpg";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";
const AluminumFencing = () => {
  useDocumentTitle("Aluminium Deck Framing Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };
  const handleViewStyles = () => { scrollToSection("aluminium-styles"); };
  const benefits = [{
    icon: Zap, title: "Lightweight & Strong", description: "Aluminium joist systems are easy to install yet incredibly durable and long-lasting"
  }, {
    icon: ShieldCheck, title: "100% Rust-Proof", description: "Never worry about rust or corrosion, even in coastal and high-moisture environments"
  }, {
    icon: Sparkles, title: "Modern Structure", description: "Contemporary aluminium framing enables clean deck designs with minimal subframe"
  }, {
    icon: Waves, title: "Ideal for Coastal Areas", description: "Corrosion-resistant framing that withstands salt air and harsh coastal conditions"
  }];
  const features = ["Premium aluminium joist and bearer systems", "Compatible with composite and timber boards", "Corrosion-resistant for coastal environments", "Lightweight design for easier installation", "Long lifespan with zero maintenance on framing"];
  const styles = [{
    name: "Standard Joists", description: "Traditional aluminium framing", icon: classicSlatIcon
  }, {
    name: "Adjustable Pedestals", description: "Level decks on uneven ground", icon: verticalPicketIcon
  }, {
    name: "Clip Systems", description: "Hidden fastening solutions", icon: privacyScreenIcon
  }, {
    name: "Full Frame Kits", description: "Complete subframe packages", icon: decorativePanelIcon
  }];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"><Award className="w-4 h-4 text-primary" /><span className="text-sm font-medium text-primary">Modern & Maintenance-Free</span></div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Aluminium<br /><span className="text-gradient">Deck Framing</span></h1>
              <p className="text-lg text-muted-foreground mb-8">Build your deck on a foundation that lasts forever. Aluminium deck framing is rust-proof, lightweight, and engineered for Australian conditions.</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="quote" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes in Minutes</Button>
                <Button variant="outline" size="lg" onClick={handleViewStyles}>View Options</Button>
              </div>
              <div className="flex items-center space-x-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2"><Check className="w-4 h-4 text-primary" /><span>Rust-Proof</span></div>
              </div>
            </div>
            <div className="relative"><div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant"><img src={aluminiumFrameHero} alt="Aluminium Deck Framing" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Aluminium Deck Framing?</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">The ultimate modern deck substructure with zero maintenance and maximum longevity</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((b, i) => <Card key={i} className="hover-scale border-border/50"><CardContent className="p-6"><div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4"><b.icon className="w-6 h-6 text-white" /></div><h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3><p className="text-sm text-muted-foreground">{b.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Superior Quality & Zero Maintenance</h2>
              <p className="text-muted-foreground mb-8">Aluminium deck framing systems are engineered for Australian conditions, offering unmatched durability without any ongoing maintenance on the substructure.</p>
              <div className="space-y-4">{features.map((f, i) => <div key={i} className="flex items-start space-x-3"><div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-4 h-4 text-white" /></div><span className="text-foreground">{f}</span></div>)}</div>
            </div>
            <div className="relative"><div className="aspect-square rounded-2xl overflow-hidden shadow-elegant"><img src={aluminiumFrameFeatures} alt="Aluminium Deck Framing Features" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section id="aluminium-styles" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Framing Options</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">Modern aluminium systems to suit any deck design</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{styles.map((s, i) => <Card key={i} className="hover-scale border-border/50"><CardContent className="p-6 text-center"><img src={s.icon} alt={s.name} className="w-36 h-36 mx-auto mb-4 object-contain select-none" draggable="false" /><h3 className="text-lg font-semibold text-foreground mb-2">{s.name}</h3><p className="text-sm text-muted-foreground">{s.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Aluminium Deck Framing?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Get free quotes today and build your deck on a foundation that lasts</p>
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
export default AluminumFencing;
