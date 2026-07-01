import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Building, Ruler, Hammer, Shield, Award } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";
import commercialSecurityIcon from "@/assets/commercial-security.png";
import industrialSecurityIcon from "@/assets/industrial-security.png";
import governmentSecurityIcon from "@/assets/government-security.png";
import criticalInfrastructureSecurityIcon from "@/assets/critical-infrastructure-security.png";
import commercialDeckHero from "@/assets/commercial-deck-hero.jpg";
import commercialDeckFeatures from "@/assets/commercial-deck-features.jpg";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";
const SecurityFencing = () => {
  useDocumentTitle("Commercial Decking Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };
  const handleSecurityOptions = () => { scrollToSection("security-applications"); };
  const benefits = [{
    icon: Building, title: "Commercial Grade", description: "Heavy-duty decking solutions designed for high-traffic commercial environments"
  }, {
    icon: Shield, title: "Durable Construction", description: "Engineered for maximum lifespan and structural integrity in commercial settings"
  }, {
    icon: Ruler, title: "Custom Specifications", description: "Built to exact architectural and engineering specifications for commercial projects"
  }, {
    icon: Hammer, title: "Professional Install", description: "Experienced commercial deck builders with project management capabilities"
  }];
  const features = ["Heavy-duty structural framing systems", "Commercial-grade composite and hardwood boards", "Slip-resistant and high-traffic surfaces", "Fire-rated decking options available", "Compliant with BCA and Australian Standards", "Full project management and documentation"];
  const applications = [{
    name: "Restaurants & Cafes", description: "Outdoor dining areas", icon: commercialSecurityIcon
  }, {
    name: "Hotels & Resorts", description: "Pool decks & common areas", icon: industrialSecurityIcon
  }, {
    name: "Offices & Retail", description: "Outdoor breakout spaces", icon: governmentSecurityIcon
  }, {
    name: "Public Spaces", description: "Boardwalks & viewing platforms", icon: criticalInfrastructureSecurityIcon
  }];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"><Award className="w-4 h-4 text-primary" /><span className="text-sm font-medium text-primary">Commercial Grade</span></div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Commercial<br /><span className="text-gradient">Decking Solutions</span></h1>
              <p className="text-lg text-muted-foreground mb-8">Professional-grade decking for commercial properties. Built to handle high traffic, meet compliance requirements, and create stunning outdoor spaces for businesses.</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="quote" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes in Minutes</Button>
                <Button variant="outline" size="lg" onClick={handleSecurityOptions}>View Applications</Button>
              </div>
            </div>
            <div className="relative"><div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant"><img src={commercialDeckHero} alt="Commercial Deck Installation" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Commercial Decking?</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">Professional-grade outdoor solutions for high-value commercial properties</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((b, i) => <Card key={i} className="hover-scale border-border/50"><CardContent className="p-6"><div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4"><b.icon className="w-6 h-6 text-white" /></div><h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3><p className="text-sm text-muted-foreground">{b.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Commercial-Grade Quality</h2>
              <p className="text-muted-foreground mb-8">Our commercial decking solutions meet the highest standards for durability, safety, and compliance — trusted by businesses across Australia.</p>
              <div className="space-y-4">{features.map((f, i) => <div key={i} className="flex items-start space-x-3"><div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-4 h-4 text-white" /></div><span className="text-foreground">{f}</span></div>)}</div>
            </div>
            <div className="relative"><div className="aspect-square rounded-2xl overflow-hidden shadow-elegant"><img src={commercialDeckFeatures} alt="Commercial Decking Features" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section id="security-applications" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Commercial Applications</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">Tailored decking solutions for every commercial application</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{applications.map((a, i) => <Card key={i} className="hover-scale border-border/50"><CardContent className="p-6 text-center"><img src={a.icon} alt={a.name} className="w-36 h-36 mx-auto mb-4 object-contain select-none" draggable="false" /><h3 className="text-lg font-semibold text-foreground mb-2">{a.name}</h3><p className="text-sm text-muted-foreground">{a.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Commercial Decking?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Get a free assessment and quotes for your commercial decking project</p>
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
export default SecurityFencing;
