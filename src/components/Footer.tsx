import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/quotemyfence-logo-icon.webp";
const Footer = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const deckingServices = [{
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
  }];
  const serviceAreas = [{
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
  }];
  const socialLinks = [{
    icon: Facebook,
    href: "#",
    label: "Facebook"
  }, {
    icon: Twitter,
    href: "#",
    label: "Twitter"
  }, {
    icon: Instagram,
    href: "#",
    label: "Instagram"
  }, {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn"
  }];
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      navigate("/subscription-confirmed");
    }
  };
  return <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated with Decking Tips</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Get the latest decking trends, maintenance tips, and exclusive offers delivered to your inbox
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email address" value={email} onChange={e => setEmail(e.target.value)} required className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60" />
              <Button type="submit" variant="accent" className="sm:px-8">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src={logoIcon} alt="QuoteMyDeck" className="w-8 h-8 object-contain" />
                </div>
                <div className="text-xl font-bold">QuoteMyDeck</div>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Australia's leading platform for connecting homeowners with trusted deck builders. 
                Get competitive quotes and quality installations nationwide.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-sm">0481 752 344</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-sm">info@quotemydeck.com.au</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm">Serving all of Australia</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(social => <a key={social.label} href={social.href} className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-smooth" aria-label={social.label}>
                  <social.icon className="w-5 h-5" />
                </a>)}
            </div>
          </div>

          {/* Decking Services */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6">Decking Services</h4>
            <ul className="grid grid-cols-2 gap-3">
              {deckingServices.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Service Areas & Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Major Cities</h4>
            <ul className="space-y-3 mb-8">
              {serviceAreas.map(area => <li key={area.name}>
                  <Link to={area.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth">
                    {area.name}
                  </Link>
                </li>)}
            </ul>
            
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/decking-guides" className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth">
                  Decking Guides
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © 2026 QuoteMyDeck. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                Terms  
              </Link>
              <Link to="/sitemap" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;