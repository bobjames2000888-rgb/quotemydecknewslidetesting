import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, DollarSign, Clock, Hammer, Recycle, Award } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";
import residentialIcon from "@/assets/residential.png";
import commercialIcon from "@/assets/commercial.png";
import sportsFieldsIcon from "@/assets/sports-fields.png";
import ruralIcon from "@/assets/rural.webp";
import deckRemovalHero from "@/assets/deck-removal-hero.jpg";
import deckRemovalFeatures from "@/assets/deck-removal-features.jpg";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";
const ChainLinkFencing = () => {
  useDocumentTitle("Deck Replacement & Removal Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };
  const handleViewOptions = () => { scrollToSection("applications"); };
  const benefits = [{
    icon: Recycle, title: "Full Removal Service", description: "Complete removal and disposal of your old deck, ready for a new build"
  }, {
    icon: Clock, title: "Quick Turnaround", description: "Efficient removal and replacement service to minimise disruption"
  }, {
    icon: Hammer, title: "Professional Demolition", description: "Safe, controlled deck demolition by experienced builders"
  }, {
    icon: DollarSign, title: "Transparent Pricing", description: "Clear quotes for removal, disposal, and any new deck construction"
  }];
  const features = ["Complete deck removal and demolition", "Safe disposal of old timber and materials", "Stump and footing removal", "Site preparation for new deck build", "Asbestos assessment where required", "Combined removal and rebuild packages"];
  const applications = [{
    name: "Old Timber Decks", description: "Rotted or unsafe deck removal", icon: residentialIcon
  }, {
    name: "Structural Issues", description: "Failed subframe replacement", icon: commercialIcon
  }, {
    name: "Renovation Projects", description: "Deck removal for extensions", icon: sportsFieldsIcon
  }, {
    name: "Insurance Claims", description: "Storm damage deck removal", icon: ruralIcon
  }];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"><Award className="w-4 h-4 text-primary" /><span className="text-sm font-medium text-primary">Complete Removal Service</span></div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Deck Replacement<br /><span className="text-gradient">& Removal</span></h1>
              <p className="text-lg text-muted-foreground mb-8">Professional deck removal and replacement services. Safe demolition, complete disposal, and site preparation for your new deck build.</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="quote" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes in Minutes</Button>
                <Button variant="outline" size="lg" onClick={handleViewOptions}>View Options</Button>
              </div>
            </div>
            <div className="relative"><div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant"><img src={deckRemovalHero} alt="Deck Removal Service" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our Removal Service?</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">Professional deck removal and replacement by experienced builders</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((b, i) => <Card key={i} className="hover-scale border-border/50"><CardContent className="p-6"><div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4"><b.icon className="w-6 h-6 text-white" /></div><h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3><p className="text-sm text-muted-foreground">{b.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Complete Removal & Rebuild</h2>
              <p className="text-muted-foreground mb-8">Our deck builders handle everything from demolition to disposal, leaving your site clean and ready for a new deck build.</p>
              <div className="space-y-4">{features.map((f, i) => <div key={i} className="flex items-start space-x-3"><div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-4 h-4 text-white" /></div><span className="text-foreground">{f}</span></div>)}</div>
            </div>
            <div className="relative"><div className="aspect-square rounded-2xl overflow-hidden shadow-elegant"><img src={deckRemovalFeatures} alt="Deck Removal Features" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section id="applications" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Common Removal Scenarios</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">We handle deck removal for a wide range of situations</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{applications.map((a, i) => <Card key={i} className="hover-scale border-border/50"><CardContent className="p-6 text-center"><img src={a.icon} alt={a.name} className="w-36 h-36 mx-auto mb-4 object-contain select-none" draggable="false" /><h3 className="text-lg font-semibold text-foreground mb-2">{a.name}</h3><p className="text-sm text-muted-foreground">{a.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Deck Removal or Replacement?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Get free quotes today for professional deck removal and replacement</p>
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
export default ChainLinkFencing;
