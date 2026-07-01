import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteFunnelForm from "@/components/QuoteFunnelForm";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Map, Home, Wrench, MapPin, BookOpen, FileText } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const Sitemap = () => {
  useDocumentTitle("Sitemap — QuoteMyDeck");
  const [funnelOpen, setFunnelOpen] = useState(false);
  const sitemapSections = [{
    title: "Main Pages",
    icon: Home,
    links: [{
      name: "Home",
      href: "/"
    }, {
      name: "Contact Us",
      href: "/contact"
    }, {
      name: "FAQ",
      href: "/faq"
    }]
  }, {
    title: "Decking Services",
    icon: Wrench,
    links: [{
      name: "Timber Decking",
      href: "/timber-decking"
    }, {
      name: "Composite Decking",
      href: "/composite-decking"
    }, {
      name: "Custom Feature Decks",
      href: "/feature-decking"
    }, {
      name: "Deck Replacement & Removal",
      href: "/deck-replacement"
    }, {
      name: "Commercial Decking",
      href: "/commercial-decking"
    }, {
      name: "Pool Decking",
      href: "/pool-decking"
    }, {
      name: "Deck Repairs",
      href: "/deck-repairs"
    }, {
      name: "Deck + Pergola Combo",
      href: "/deck-pergola-combo"
    }]
  }, {
    title: "Service Areas",
    icon: MapPin,
    links: [{
      name: "Sydney",
      href: "/sydney"
    }, {
      name: "Melbourne",
      href: "/melbourne"
    }, {
      name: "Brisbane",
      href: "/brisbane"
    }, {
      name: "Perth",
      href: "/perth"
    }, {
      name: "Adelaide",
      href: "/adelaide"
    }, {
      name: "Canberra",
      href: "/canberra"
    }, {
      name: "Hobart",
      href: "/hobart"
    }, {
      name: "Darwin",
      href: "/darwin"
    }]
  }, {
    title: "Resources",
    icon: BookOpen,
    links: [{
      name: "Decking Guides",
      href: "/decking-guides"
    }]
  }, {
    title: "Legal",
    icon: FileText,
    links: [{
      name: "Privacy Policy",
      href: "/privacy-policy"
    }, {
      name: "Terms",
      href: "/terms-of-service"
    }]
  }];
  const handleQuoteClick = () => {
    window.history.pushState({}, "", "/quote"); window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return <div className="min-h-screen bg-background">
      <QuoteFunnelForm open={funnelOpen} onOpenChange={setFunnelOpen} />
      <Header onQuoteClick={handleQuoteClick} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Map className="w-4 h-4" />
            <span className="text-sm font-medium">Site Navigation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sitemap
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Find everything you need on QuoteMyDeck with our complete site directory.</p>
        </div>
      </section>

      {/* Sitemap Sections */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {sitemapSections.map(({ title, icon: Icon, links }) => <div key={title}>
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-foreground mb-6">
              <Icon className="w-6 h-6 text-primary" />
              {title}
            </h2>
            <ul className="space-y-3">
              {links.map(({ name, href }) => <li key={href}>
                  <Link to={href} className="text-lg text-muted-foreground hover:text-primary transition-colors">
                    {name}
                  </Link>
                </li>)}
            </ul>
          </div>)}
      </section>

      {/* Suburbs Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-primary" />
          Service Suburbs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-h-[400px] overflow-y-auto border border-border rounded-md p-4 bg-background">
          <ul className="list-disc list-inside space-y-1">
            <li><Link to="/vic/cranbourne-decking" className="text-muted-foreground hover:text-primary transition-colors">Cranbourne</Link></li>
            <li><Link to="/vic/melbourne-decking" className="text-muted-foreground hover:text-primary transition-colors">Melbourne</Link></li>
            <li><Link to="/vic/geelong-decking" className="text-muted-foreground hover:text-primary transition-colors">Geelong</Link></li>
            <li><Link to="/vic/sunshine-coast-decking" className="text-muted-foreground hover:text-primary transition-colors">Sunshine Coast</Link></li>
            <li><Link to="/vic/werribee-decking" className="text-muted-foreground hover:text-primary transition-colors">Werribee</Link></li>
            <li><Link to="/vic/warragul-decking" className="text-muted-foreground hover:text-primary transition-colors">Warragul</Link></li>
            <li><Link to="/vic/wodonga-decking" className="text-muted-foreground hover:text-primary transition-colors">Wodonga</Link></li>
            <li><Link to="/vic/wangaratta-decking" className="text-muted-foreground hover:text-primary transition-colors">Wangaratta</Link></li>
            <li><Link to="/vic/traralgon-decking" className="text-muted-foreground hover:text-primary transition-colors">Traralgon</Link></li>
            <li><Link to="/vic/sale-decking" className="text-muted-foreground hover:text-primary transition-colors">Sale</Link></li>
            <li><Link to="/vic/ballarat-decking" className="text-muted-foreground hover:text-primary transition-colors">Ballarat</Link></li>
            <li><Link to="/vic/bendigo-decking" className="text-muted-foreground hover:text-primary transition-colors">Bendigo</Link></li>
            <li><Link to="/vic/mildura-decking" className="text-muted-foreground hover:text-primary transition-colors">Mildura</Link></li>
            <li><Link to="/vic/shepparton-decking" className="text-muted-foreground hover:text-primary transition-colors">Shepparton</Link></li>
            <li><Link to="/vic/benalla-decking" className="text-muted-foreground hover:text-primary transition-colors">Benalla</Link></li>
            <li><Link to="/vic/echuca-decking" className="text-muted-foreground hover:text-primary transition-colors">Echuca</Link></li>
            <li><Link to="/vic/portland-decking" className="text-muted-foreground hover:text-primary transition-colors">Portland</Link></li>
            <li><Link to="/vic/colac-decking" className="text-muted-foreground hover:text-primary transition-colors">Colac</Link></li>
            <li><Link to="/vic/torquay-decking" className="text-muted-foreground hover:text-primary transition-colors">Torquay</Link></li>
            <li><Link to="/vic/maryborough-decking" className="text-muted-foreground hover:text-primary transition-colors">Maryborough</Link></li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>;
};

export default Sitemap;
