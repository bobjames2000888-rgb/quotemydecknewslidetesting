import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Star, Clock, Phone, ChevronDown, ChevronUp } from "lucide-react";
import SuburbLink from "@/components/SuburbLink";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";
const Sydney = () => {
  useDocumentTitle("Sydney Decking Quotes — Get 3 Free Quotes in Minutes");
  const [showAllSuburbs, setShowAllSuburbs] = useState(false);
  const handleQuoteClick = () => {
    window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate"));
  };
  const getSuburbPath = (suburb: string) => {
    const suburbLower = suburb.toLowerCase();
    const suburbRoutes: Record<string, string> = {
      "sydney": "/sydney",
      "parramatta": "/sydney",
      "penrith": "/sydney",
      "liverpool": "/sydney",
      "hurstville": "/sydney",
      "chatswood": "/sydney",
      "ryde": "/sydney",
      "hornsby": "/sydney",
      "castle hill": "/sydney",
      "blacktown": "/sydney",
      "manly": "/sydney",
      "bondi": "/sydney",
      "cronulla": "/sydney",
      "narrabeen": "/sydney",
      "leichhardt": "/sydney",
      "randwick": "/sydney",
      "auburn": "/sydney",
      "bankstown": "/sydney",
      "cabramatta": "/sydney",
      "fairfield": "/sydney",
      "campbelltown": "/sydney",
      "wollongong": "/sydney",
      "central coast": "/sydney",
      "newcastle": "/sydney",
    };
    return suburbRoutes[suburbLower] || "/sydney";
  };
  const suburbs = ["Arncliffe", "Banksia", "Banksmeadow", "Bardwell Park", "Bardwell Valley", "Bexley North", "Bexley", "Botany", "Brighton-Le-Sands", "Carlton", "Daceyville", "Dolls Point", "Eastgardens", "Eastlakes", "Hillsdale", "Kingsgrove"];
  const allSuburbs = ["Kogarah", "Kyeemagh", "Mascot", "Monterey", "Pagewood", "Ramsgate Beach", "Rockdale", "Rosebery", "Sandringham", "Sans Souci", "Turrella", "Wolli Creek", "Acacia Gardens", "Angus", "Arndell Park", "Bidwill", "Blackett", "Blacktown", "Bungarribee", "Colebee", "Dean Park", "Dharruk", "Doonside", "Eastern Creek", "Emerton", "Glendenning", "Glenwood", "Grantham Farm", "Hassall Grove", "Hebersham", "Huntingwood", "Kellyville Ridge", "Kings Langley", "Kings Park", "Lalor Park", "Lethbridge Park", "Marayong", "Marsden Park", "Melonba", "Minchinbury", "Mount Druitt", "Nirimba Fields", "Oakhurst", "Parklea", "Plumpton", "Prospect", "Quakers Hill", "Richards", "Riverstone", "Rooty Hill", "Ropes Crossing", "Rouse Hill", "Schofields", "Seven Hills", "Shalvey", "Shanes Park", "St Marys", "Stanhope Gardens", "Tallawong", "The Ponds", "Toongabbie", "Tregear", "Vineyard", "Whalan", "Willmot", "Woodcroft"];
  const stats = [{
    icon: Users,
    label: "Decks Quoted",
    value: "3,200+"
  }, {
    icon: Star,
    label: "Average Rating",
    value: "4.9/5"
  }, {
    icon: Clock,
    label: "Years Experience",
    value: "15+"
  }, {
    icon: MapPin,
    label: "Suburbs Serviced",
    value: "600+"
  }];
  const recentProjects = [{
    suburb: "Parramatta",
    type: "Composite Deck",
    rating: 5,
    review: "Professional service from start to finish. The team was punctual and the deck looks amazing!"
  }, {
    suburb: "Penrith",
    type: "Timber Deck",
    rating: 5,
    review: "Best decking company in Sydney! Highly recommend for quality work and fair pricing."
  }, {
    suburb: "Liverpool",
    type: "Pool Deck",
    rating: 5,
    review: "Exceeded our expectations. Beautiful deck and excellent customer service throughout."
  }];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Servicing All Sydney Suburbs</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sydney's Most Trusted
              <br />
              <span className="text-gradient">Decking Specialists</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Professional decking installation and repair services across Greater Sydney. Local tradies, trusted by 3,200+ Sydney homeowners.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="quote" size="lg" onClick={handleQuoteClick}>
                Get Free Sydney Quotes
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:0481752344" aria-label="Call 0481 752 344">
                  <Phone className="w-4 h-4 mr-2" />
                  Call 0481 752 344
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => <Card key={index} className="text-center border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 accent-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">We Service All Sydney Suburbs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">From the Northern Beaches to Campbelltown, we've got Sydney covered</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {suburbs.map((suburb, index) => <SuburbLink key={index} suburb={suburb} cityPath="/sydney" />)}
          </div>
          {showAllSuburbs && <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {allSuburbs.map((suburb, index) => <SuburbLink key={index} suburb={suburb} cityPath="/sydney" />)}
            </div>}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Don't see your suburb? We service the entire Greater Sydney area!</p>
            <Button variant="outline" onClick={() => setShowAllSuburbs(!showAllSuburbs)}>
              {showAllSuburbs ? <><ChevronUp className="w-4 h-4 mr-2" />Hide Suburbs</> : <><ChevronDown className="w-4 h-4 mr-2" />View All Suburbs</>}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Recent Sydney Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">See what your neighbours are saying about their decking projects</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {recentProjects.map((project, index) => <Card key={index} className="hover-scale border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-foreground">{project.suburb}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(project.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{project.type}</p>
                  <p className="text-sm text-foreground italic">"{project.review}"</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Sydney Homeowners Choose Us</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1"><span className="text-white text-xs font-bold">✓</span></div>
                  <div><h3 className="font-semibold text-foreground mb-1">Local Sydney Experts</h3><p className="text-muted-foreground text-sm">Local deck builders understand Sydney's unique weather, council requirements, and local styles</p></div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1"><span className="text-white text-xs font-bold">✓</span></div>
                  <div><h3 className="font-semibold text-foreground mb-1">Fast Response Times</h3><p className="text-muted-foreground text-sm">Same-day quotes and flexible scheduling to suit your Sydney lifestyle</p></div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1"><span className="text-white text-xs font-bold">✓</span></div>
                  <div><h3 className="font-semibold text-foreground mb-1">Quality</h3><p className="text-muted-foreground text-sm">Local expert deck builders on all installations.</p></div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
                <img alt="Sydney Decking Projects" className="w-full h-full object-cover" src="/lovable-uploads/b398ce61-451a-430e-8e0c-bd29476ef2c4.webp" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Your Sydney Deck Built?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Join 1,000's of happy Sydney homeowners. Get your free quotes in 60 seconds.</p>
            <Button variant="secondary" size="lg" onClick={handleQuoteClick}>Get Free Sydney Quotes</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Sydney;
