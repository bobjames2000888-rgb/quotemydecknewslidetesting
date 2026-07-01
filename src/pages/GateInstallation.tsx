import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Home, Sun, Sparkles, Ruler, Award } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";
import slidingGateIcon from "@/assets/sliding-gate.png";
import swingGateIcon from "@/assets/swing-gate.png";
import pedestrianGateIcon from "@/assets/pedestrian-gate.png";
import commercialGateIcon from "@/assets/commercial-gate.png";
import deckPergolaHero from "@/assets/deck-pergola-hero.jpg";
import deckPergolaFeatures from "@/assets/deck-pergola-features.jpg";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";
const GateInstallation = () => {
  useDocumentTitle("Deck + Pergola Combo Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };
  const handleViewOptions = () => { scrollToSection("gate-types"); };
  const benefits = [{
    icon: Home, title: "Complete Outdoor Living", description: "Combine your deck with a pergola for the ultimate entertaining space"
  }, {
    icon: Sun, title: "Weather Protection", description: "Pergolas provide shade and shelter, extending your deck's usability year-round"
  }, {
    icon: Sparkles, title: "Custom Design", description: "Integrated designs that flow seamlessly from deck to pergola"
  }, {
    icon: Ruler, title: "Added Property Value", description: "Deck and pergola combinations significantly increase your home's appeal and value"
  }];
  const features = ["Custom-designed pergola to complement your deck", "Timber, steel, or aluminium pergola frames", "Shade cloth, polycarbonate, or louvre roofing options", "Integrated lighting and fan provisions", "Expert installation by verified deck builders"];
  const gateTypes = [{
    name: "Flat Roof Pergola", description: "Modern, clean lines", icon: slidingGateIcon
  }, {
    name: "Gable Pergola", description: "Classic pitched design", icon: swingGateIcon
  }, {
    name: "Louvre Pergola", description: "Adjustable sun control", icon: pedestrianGateIcon
  }, {
    name: "Attached Pergola", description: "Seamless home extension", icon: commercialGateIcon
  }];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"><Award className="w-4 h-4 text-primary" /><span className="text-sm font-medium text-primary">Complete Outdoor Living</span></div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Deck + Pergola<br /><span className="text-gradient">Combo Packages</span></h1>
              <p className="text-lg text-muted-foreground mb-8">Create the ultimate outdoor entertaining area with a custom deck and pergola combination.</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="quote" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes in Minutes</Button>
                <Button variant="outline" size="lg" onClick={handleViewOptions}>Pergola Options</Button>
              </div>
            </div>
            <div className="relative"><div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant"><img src={deckPergolaHero} alt="Deck and Pergola Combo" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose a Deck + Pergola Combo?</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((b, i) => <Card key={i} className="hover-scale border-border/50"><CardContent className="p-6"><div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4"><b.icon className="w-6 h-6 text-white" /></div><h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3><p className="text-sm text-muted-foreground">{b.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Premium Features & Design</h2>
              <div className="space-y-4">{features.map((f, i) => <div key={i} className="flex items-start space-x-3"><div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-4 h-4 text-white" /></div><span className="text-foreground">{f}</span></div>)}</div>
            </div>
            <div className="relative"><div className="aspect-square rounded-2xl overflow-hidden shadow-elegant"><img src={deckPergolaFeatures} alt="Deck Pergola Features" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section id="gate-types" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pergola Styles</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{gateTypes.map((t, i) => <Card key={i} className="hover-scale border-border/50"><CardContent className="p-6 text-center"><img src={t.icon} alt={t.name} className="w-36 h-36 mx-auto mb-4 object-contain select-none" draggable="false" /><h3 className="text-lg font-semibold text-foreground mb-2">{t.name}</h3><p className="text-sm text-muted-foreground">{t.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Your Deck + Pergola?</h2>
            <p className="text-white/90 text-lg mb-8">Get free quotes today</p>
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
export default GateInstallation;
