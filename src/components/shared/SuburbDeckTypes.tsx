import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link2, Lock, Waves } from "lucide-react";
import { Link } from "react-router-dom";
import colorbondWhiteIcon from "@/assets/colorbond-white-icon.webp";
import timberWhiteIcon from "@/assets/timber-white-icon.webp";


import featureWhiteIcon from "@/assets/feature-white-icon.webp";

const QUOTE_URL = "/quote";

interface SuburbDeckTypesProps {
  suburbName: string;
  onQuoteClick?: () => void;
}

const SuburbDeckTypes = ({ suburbName, onQuoteClick }: SuburbDeckTypesProps) => {
  const handleQuoteClick = () => {
    window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const deckTypes = [
    {
      id: "colorbond", name: "Composite Decking",
      description: "Low-maintenance composite boards with wood-look finishes. Moisture resistant and built to last in Australian conditions.",
      features: ["25 year manufacturer warranty", "Moisture resistant", "Low maintenance", "Multiple colour options"],
      price: "$350/m²", iconImage: colorbondWhiteIcon, popular: true, href: "/composite-decking",
    },
    {
      id: "timber", name: "Timber Decking",
      description: "Natural Australian hardwood decking that adds warmth and character. Merbau, Spotted Gum, and Blackbutt options.",
      features: ["Natural appearance", "Durable hardwood", "Customisable designs", "Classic Australian style"],
      price: "$280/m²", iconImage: timberWhiteIcon, href: "/timber-decking",
    },
    {
      id: "pool", name: "Pool Decking",
      description: "Slip-resistant decking designed for pool surrounds. Safe, stylish, and water-resistant materials.",
      features: ["Slip resistant surface", "Water resistant", "Pool-safe materials", "Stylish entertaining area"],
      price: "$320/m²", icon: Waves, href: "/pool-decking",
    },
    {
      id: "chainlink", name: "Deck Replacement & Removal",
      description: "Professional removal of old decks and full replacement with new materials. Quick turnaround.",
      features: ["Old deck removal", "Full replacement", "Site cleanup", "Quick turnaround"],
      price: "From $200", icon: Link2, href: "/deck-replacement",
    },
    {
      id: "security", name: "Commercial Decking",
      description: "Heavy-duty commercial-grade decking for businesses, restaurants, and public spaces.",
      features: ["Commercial grade", "Heavy duty", "High traffic rated", "Professional finish"],
      price: "$380/m²", icon: Lock, href: "/commercial-decking",
    },
    {
      id: "feature", name: "Custom Feature Decks",
      description: "Custom-designed decks with unique shapes, built-in seating, planters, and architectural features.",
      features: ["Custom designs", "Built-in features", "Mixed materials", "Unique aesthetics"],
      price: "$400/m²", iconImage: featureWhiteIcon, href: "/feature-decking",
    },
  ];

  return (
    <section id="fence-types" className="py-12 sm:py-20" style={{ backgroundColor: "hsl(215 40% 18%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Perfect Deck in {suburbName}
          </h2>
          <p className="text-base sm:text-xl text-white/70 max-w-3xl mx-auto px-4">
            Discover {suburbName} decking options tailored to your needs, budget, and style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {deckTypes.map((deck) => (
            <Card key={deck.id} className={`relative shadow-strong hover:shadow-accent transition-smooth group cursor-pointer ${deck.popular ? "border-accent ring-2 ring-accent/20" : ""}`}>
              {deck.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="accent-gradient text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
                </div>
              )}
              <CardHeader className="text-center">
                <div className="w-16 h-16 accent-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                  {deck.iconImage ? <img src={deck.iconImage} alt={deck.name} className="w-8 h-8" /> : deck.icon ? <deck.icon className="w-8 h-8 text-white" /> : null}
                </div>
                <div className="text-muted-foreground text-sm font-normal text-center">{suburbName}</div>
                <CardTitle className="text-lg">{deck.name}</CardTitle>
                <div className="text-2xl font-bold text-accent">
                  <span className="text-muted-foreground text-sm font-normal mr-1">from</span>{deck.price}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-center">{deck.description}</CardDescription>
                <div className="space-y-2">
                  {deck.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 accent-gradient rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant={deck.popular ? "hero" : "outline"} className="flex-1" onClick={onQuoteClick || handleQuoteClick}>Get Quotes</Button>
                  <Button variant="outline" className="flex-1" asChild><Link to={deck.href}>Learn More</Link></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="card-gradient rounded-2xl p-8 shadow-soft border border-border">
            <h3 className="text-2xl font-bold text-primary mb-4">Need Help Choosing?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our expert {suburbName} team can help you select the perfect decking solution based on your specific needs, budget, and property requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild><a href={QUOTE_URL}>Speak to an Expert</a></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuburbDeckTypes;
