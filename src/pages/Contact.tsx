import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";
const Contact = () => {
  useDocumentTitle("Contact Us — QuoteMyDeck");
  const handleQuoteClick = () => {
    window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate"));
  };
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours."
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };
  const contactInfo = [{
    icon: Phone,
    title: "Phone",
    details: "0481 752 344",
    subtext: "24 Hours 7 Days A Week"
  }, {
    icon: Mail,
    title: "Email",
    details: "info@quotemydeck.com.au",
    subtext: "We reply within hours"
  }, {
    icon: MapPin,
    title: "Service Areas",
    details: "All Major Cities",
    subtext: "Sydney, Melbourne, Brisbane & more"
  }];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <section className="relative pt-32 pb-20 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"><MessageSquare className="w-4 h-4 text-primary" /><span className="text-sm font-medium text-primary">We're Here to Help</span></div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get in Touch with<br /><span className="text-gradient">Our Expert Team</span></h1>
            <p className="text-lg text-muted-foreground mb-8">Have questions about decking? Our friendly team is ready to help.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => <Card key={index} className="text-center border-border/50 hover-scale"><CardContent className="p-6"><div className="w-12 h-12 accent-gradient rounded-full flex items-center justify-center mx-auto mb-4"><info.icon className="w-6 h-6 text-white" /></div><h3 className="font-semibold text-foreground mb-1">{info.title}</h3><p className="text-lg font-bold text-primary mb-1">{info.details}</p><p className="text-xs text-muted-foreground">{info.subtext}</p></CardContent></Card>)}
          </div>
        </div>
      </section>
      <section className="py-20">
      </section>
      <Footer />
    </div>;
};
export default Contact;