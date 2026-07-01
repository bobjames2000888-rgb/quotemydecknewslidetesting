import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Wrench, Clock, DollarSign, CheckCircle2, Award } from "lucide-react";
import fenceRepairColorbondIcon from "@/assets/fence-repair-colorbond.png";
import fenceRepairTimberIcon from "@/assets/fence-repair-timber.png";
import fenceRepairAluminiumIcon from "@/assets/fence-repair-aluminium.png";
import fenceRepairGlassIcon from "@/assets/fence-repair-glass.png";
import deckRepairsHero from "@/assets/deck-repairs-hero.jpg";
import deckRepairsFeatures from "@/assets/deck-repairs-features.jpg";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";
const FenceRepairs = () => {
  useDocumentTitle("Deck Repair Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };
  const benefits = [{
    icon: Clock, title: "Fast Response", description: "Quick response time for urgent deck repairs and safety issues"
  }, {
    icon: Wrench, title: "Expert Repairs", description: "Verified deck builders with experience in all deck types and materials"
  }, {
    icon: DollarSign, title: "Cost-Effective", description: "Save money by repairing instead of replacing your entire deck"
  }, {
    icon: CheckCircle2, title: "Quality Work", description: "All repairs completed by experienced deck builders"
  }];
  const repairTypes = ["Damaged or rotted deck boards", "Loose or deteriorated joists and bearers", "Storm and weather damage", "Structural repairs and restumping", "Board replacement and sanding", "Handrail and balustrade repairs", "Re-oiling and refinishing", "Safety compliance upgrades"];
  const fenceTypes = [{
    name: "Composite", description: "Board & frame repairs", icon: fenceRepairColorbondIcon
  }, {
    name: "Timber", description: "Rot & damage fixes", icon: fenceRepairTimberIcon
  }, {
    name: "Structural", description: "Joist & bearer repairs", icon: fenceRepairAluminiumIcon
  }, {
    name: "Refinishing", description: "Sand, oil & restore", icon: fenceRepairGlassIcon
  }];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"><Award className="w-4 h-4 text-primary" /><span className="text-sm font-medium text-primary">Fast & Reliable Service</span></div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Deck<br /><span className="text-gradient">Repair Services</span></h1>
              <p className="text-lg text-muted-foreground mb-8">Don't replace when you can repair! Our deck builders fix all types of deck damage quickly and affordably — from rotten boards to structural issues.</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="quote" size="lg" onClick={handleQuoteClick}>Get Free Assessment</Button>
                <Button variant="outline" size="lg" onClick={handleQuoteClick}>Emergency Repairs</Button>
              </div>
            </div>
            <div className="relative"><div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant"><img src={deckRepairsHero} alt="Deck Repair Services" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Deck Repair?</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((b, i) => <Card key={i} className="hover-scale border-border/50"><CardContent className="p-6"><div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4"><b.icon className="w-6 h-6 text-white" /></div><h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3><p className="text-sm text-muted-foreground">{b.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Common Deck Repairs We Handle</h2>
              <div className="space-y-4">{repairTypes.map((r, i) => <div key={i} className="flex items-start space-x-3"><div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-4 h-4 text-white" /></div><span className="text-foreground">{r}</span></div>)}</div>
            </div>
            <div className="relative"><div className="aspect-square rounded-2xl overflow-hidden shadow-elegant"><img src={deckRepairsFeatures} alt="Deck Repair Types" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Repair All Deck Types</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{fenceTypes.map((t, i) => <Card key={i} className="hover-scale border-border/50"><CardContent className="p-6 text-center"><img src={t.icon} alt={t.name} className="w-36 h-36 mx-auto mb-4 object-contain select-none" draggable="false" /><h3 className="text-lg font-semibold text-foreground mb-2">{t.name}</h3><p className="text-sm text-muted-foreground">{t.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Your Deck Repaired?</h2>
            <p className="text-white/90 text-lg mb-8">Get a free assessment today</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" onClick={handleQuoteClick}>Get Free Assessment</Button>
              <a href="tel:0481752344" aria-label="Call 0481 752 344"><Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">Call 0481 752 344</Button></a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default FenceRepairs;
