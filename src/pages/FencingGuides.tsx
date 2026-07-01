import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import guideComposite from "@/assets/guide-composite-decking.jpg";
import guideRegulations from "@/assets/guide-deck-regulations.jpg";
import guideMaterials from "@/assets/guide-decking-materials.jpg";
import guidePool from "@/assets/guide-pool-decking.jpg";
import guideQuotes from "@/assets/guide-deck-quotes.jpg";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const FencingGuides = () => {
  useDocumentTitle("Decking Guides & Expert Resources — QuoteMyDeck");
  const handleQuoteClick = () => { window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate")); };

  const guides = [
    {
      title: "Complete Guide to Composite Decking",
      description: "Everything about composite decking in Australia.",
      category: "Installation",
      readTime: "8 min read",
      slug: "complete-guide-to-composite-decking",
      popular: true,
      image: guideComposite
    },
    {
      title: "Deck Building Regulations by State",
      description: "Australian deck height regulations and permits.",
      category: "Regulations",
      readTime: "6 min read",
      slug: "deck-regulations-by-state",
      popular: true,
      image: guideRegulations
    },
    {
      title: "Choosing the Right Decking Material",
      description: "Compare timber, composite, and aluminium framing.",
      category: "Materials",
      readTime: "10 min read",
      slug: "choosing-the-right-decking-material",
      popular: true,
      image: guideMaterials
    },
    {
      title: "Pool Decking Safety Guide",
      description: "Essential safety requirements for pool decking.",
      category: "Safety",
      readTime: "7 min read",
      slug: "pool-decking-safety-guide",
      popular: true,
      image: guidePool
    },
    {
      title: "Getting a Deck Quote Online",
      description: "Understand how to get better decking quotes online.",
      category: "Cost",
      readTime: "4 min read",
      slug: "deck-online-quote-guide",
      popular: true,
      image: guideQuotes
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Expert Decking Knowledge</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Decking Guides &<br />
              <span className="text-gradient">Expert Resources</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">Everything you need to know about decking in Australia.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Popular Guides</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.filter(g => g.popular).map((guide, index) => (
              <Card key={index} className="hover-scale border-border/50 overflow-hidden group">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <img 
                    src={guide.image} 
                    alt={guide.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{guide.category}</Badge>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{guide.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{guide.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{guide.description}</p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to={`/guide/${guide.slug}`}>Read Guide</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FencingGuides;