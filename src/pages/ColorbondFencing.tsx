import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Shield, Droplets, Sun, Wrench, Award, ChevronDown, ChevronUp } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import compositeDeckHero from "@/assets/composite-deck-hero.jpg";
import compositeDeckFeatures from "@/assets/composite-deck-features.jpg";

const QUOTE_URL = "/quote";
const ColorbondFencing = () => {
  useDocumentTitle("Composite Decking Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };
  const handleViewColours = () => { scrollToSection("colour-range"); };
  const benefits = [{
    icon: Shield, title: "Superior Durability", description: "Built to withstand harsh Australian conditions with a lifespan of 25+ years"
  }, {
    icon: Droplets, title: "Moisture Resistant", description: "Resistant to rot, mould, and water damage — ideal for outdoor living"
  }, {
    icon: Sun, title: "Fade Resistant", description: "UV-stabilised composite boards maintain colour and appearance for decades"
  }, {
    icon: Wrench, title: "Low Maintenance", description: "No sanding, oiling, or staining required — stays looking great for years"
  }];
  const features = ["25-year manufacturer warranty on composite boards", "Available in 15+ wood-look colours and finishes", "Tested for Australian sun, rain, and coastal conditions", "Splinter-free and slip-resistant surface", "Environmentally friendly recycled materials", "Professional installation by verified deck builders"];
  const [showAllColours, setShowAllColours] = useState(false);
  const initialColors = [
    { name: "Teak", hex: "#8B6914" }, { name: "Walnut", hex: "#5C4033" },
    { name: "Charcoal", hex: "#36454F" }, { name: "Silver Grey", hex: "#A8A9AD" },
    { name: "Jarrah", hex: "#6B2D2D" }, { name: "Spotted Gum", hex: "#8B7355" },
    { name: "Blackbutt", hex: "#C4A882" }, { name: "Ironbark", hex: "#4A3728" }
  ];
  const additionalColors = [
    { name: "Merbau", hex: "#5C3317" }, { name: "Sandstone", hex: "#C2B280" },
    { name: "Driftwood", hex: "#967969" }, { name: "Mahogany", hex: "#C04000" },
    { name: "Coastal Grey", hex: "#8A8D8F" }, { name: "Bush Brown", hex: "#6E5B3A" },
    { name: "Ebony", hex: "#282829" }
  ];
  const displayedColors = showAllColours ? [...initialColors, ...additionalColors] : initialColors;
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"><Award className="w-4 h-4 text-primary" /><span className="text-sm font-medium text-primary">Australia's #1 Decking Choice</span></div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Composite<br />Decking Solutions</h1>
              <p className="text-lg text-muted-foreground mb-8">Experience the beauty of timber without the maintenance. Composite decking offers stunning wood-look finishes with exceptional durability for Australian outdoor living.</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="quote" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes in Minutes</Button>
                <Button variant="outline" size="lg" onClick={handleViewColours}>View Colour Range</Button>
              </div>
              <div className="flex items-center space-x-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2"><Check className="w-4 h-4 text-primary" /><span>Free Site Measure</span></div>
                <div className="flex items-center space-x-2"><Check className="w-4 h-4 text-primary" /><span>25 Year Warranty</span></div>
              </div>
            </div>
            <div className="relative"><div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant"><img alt="Composite Deck Installation" className="w-full h-full object-cover" src={compositeDeckHero} /></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Composite Decking?</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">The most trusted decking material in Australia, engineered for our unique climate</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((b, i) => <Card key={i} className="hover-scale border-border/50"><CardContent className="p-6"><div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4"><b.icon className="w-6 h-6 text-white" /></div><h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3><p className="text-sm text-muted-foreground">{b.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Premium Features & Australian Quality</h2>
              <p className="text-muted-foreground mb-8">Every composite deck our verified contractors install comes with premium features and professional installation. Our builders use only top-quality composite boards with hidden fastening systems.</p>
              <div className="space-y-4">{features.map((f, i) => <div key={i} className="flex items-start space-x-3"><div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-4 h-4 text-white" /></div><span className="text-foreground">{f}</span></div>)}</div>
            </div>
            <div className="relative"><div className="aspect-square rounded-2xl overflow-hidden shadow-elegant"><img alt="Composite Decking Features" className="w-full h-full object-cover" src={compositeDeckFeatures} /></div></div>
          </div>
        </div>
      </section>
      <section id="colour-range" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Perfect Colour</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">15+ beautiful wood-look colours to match your home's style and outdoor area</p></div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">{displayedColors.map((color, i) => <div key={i} className="text-center group cursor-pointer"><div className="aspect-square rounded-xl shadow-md hover-scale border-2 border-border/50 hover:border-primary transition-smooth mb-2" style={{ backgroundColor: color.hex }}></div><p className="text-xs font-medium text-foreground">{color.name}</p></div>)}</div>
          <div className="text-center"><Button variant="outline" size="lg" onClick={() => setShowAllColours(!showAllColours)} className="gap-2">{showAllColours ? <>Hide Colours <ChevronUp className="w-4 h-4" /></> : <>View Full Colour Chart <ChevronDown className="w-4 h-4" /></>}</Button></div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Install Your Composite Deck?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Get free quotes today and discover why thousands of Australians choose composite decking</p>
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
export default ColorbondFencing;
