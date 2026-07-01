import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Quote } from "lucide-react";
const QUOTE_URL = "/quote";
interface FAQSectionProps {
  onQuoteClick?: () => void;
}
const FAQSection = ({
  onQuoteClick
}: FAQSectionProps) => {
  const handleQuoteClick = () => {
    window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate"));
  };
  const faqs = [{
    question: "How much does decking installation cost in Australia?",
    answer: "Installation costs depend on the decking material, deck size, site conditions, and design complexity. As a guide from our verified deck builders, timber decking starts from $280 per m², composite decking starts from $350 per m², and pool decking options can start from $320 per m². Prices may increase for elevated decks, sloping blocks, difficult access, or old deck removal. For the most accurate price, use our instant decking quote tool — it gives you a fast online estimate and matches you with local deck builders who'll provide detailed on-site pricing."
  }, {
    question: "How long does it take to build a deck?",
    answer: "A standard residential deck (15–25m²) usually takes around 3–5 days to build. Larger decks, elevated structures, or custom designs may take 1–3 weeks. After reviewing your property, your matched local deck builder will confirm the exact build timeline during the quoting stage."
  }, {
    question: "Do I need council approval for my deck?",
    answer: "In most Australian states, decks above a certain height (typically 800mm above ground) require council approval or a building permit. Low-level decks may be exempt, but rules vary by council. Our verified local deck builders understand council regulations in your area and will guide you through the approval or permit process if needed."
  }, {
    question: "What's the best decking material for my property?",
    answer: "It depends on your goals and the style of your home. Composite decking is incredibly durable, low-maintenance, and ideal for harsh Australian weather. Timber decking offers a natural, warm look with species like Merbau, Spotted Gum, and Blackbutt. Aluminium framing provides a modern, rust-proof substructure ideal for coastal areas. After reviewing your property, local deck builders can recommend the best material based on your style preferences, budget, and long-term value."
  }, {
    question: "Are the deck builders verified and insured?",
    answer: "Yes. Every deck builder in our network is fully licensed, insured, and professionally vetted before they're allowed to quote. We verify their experience, trade credentials, public liability insurance, and customer reviews to ensure you're only connected with reliable, experienced, and proven decking professionals in your local area."
  }, {
    question: "How many quotes will I receive?",
    answer: "You'll typically receive up to 3 competitive quotes from reputable local deck builders within hours. This lets you compare pricing, availability, experience, and workmanship. There's absolutely no obligation — you simply choose the deck builder who best suits your project and budget."
  }, {
    question: "Can you repair or replace an existing deck?",
    answer: "Absolutely. Whether you need simple deck repairs (damaged boards, loose joists, sanding and refinishing) or a complete deck replacement, our local deck builders can help. They'll inspect the deck, explain your repair-vs-replacement options, and provide honest advice to ensure you get the most cost-effective solution for your property."
  }, {
    question: "What happens after I submit my quote request?",
    answer: "Within minutes, we'll match you with up to 3 qualified local deck builders in your area. They'll contact you to discuss your job, arrange a site visit if required, and provide detailed written decking quotes. You review the quotes, ask any questions, and choose the deck builder that best suits your project — all at your own pace with zero pressure."
  }, {
    question: "How long will my deck last?",
    answer: "Deck lifespan depends on the material and your local climate. A well-installed composite deck can last 25–30+ years, while hardwood timber decking generally lasts 15–25 years with proper care. Regular maintenance, high-quality installation, and choosing the right decking material for your environment all play a major role in how long your deck will last."
  }, {
    question: "What factors can increase the total cost of a deck?",
    answer: "Aside from the decking material itself, several factors can increase the total cost. These include site preparation, sloped or rocky ground, old deck removal, elevated structures requiring engineering, custom designs, built-in seating or planters, stairs, and property accessibility issues. Your deck builders will outline all costs upfront during the quoting process so there are no surprises."
  }, {
    question: "Do I need engineering plans for my deck?",
    answer: "For elevated decks, large structures, or decks attached to the house, engineering plans or certification may be required by your local council. Your deck builder can advise whether engineering is needed and help arrange the necessary documentation."
  }, {
    question: "How do I choose the right deck for my home?",
    answer: "Choosing the right deck depends on your home's style, outdoor entertaining needs, and budget. Modern homes often suit composite decking or aluminium-framed designs, while traditional properties typically look best with natural hardwood. During your consultation, a local deck builder will assess your property and recommend the best materials based on appearance, durability, long-term value, and your goals."
  }, {
    question: "Can a new deck add value to my property?",
    answer: "Absolutely. A quality deck can significantly improve your property's outdoor living space, street appeal, and lifestyle value — all of which add real value. It creates additional entertaining space, enhances outdoor flow, and reduces future maintenance for potential buyers. By choosing durable materials like composite or premium hardwood, your home becomes more attractive on the market."
  }];
  return <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
            <HelpCircle className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl leading-[1.15] font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions about decking? We've got answers. Here's everything you need to know about
            getting your perfect deck built.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-card rounded-2xl shadow-strong p-6 md:p-8 border border-border/50">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-xl px-6 py-2 bg-card-gradient transition-all duration-300 hover:shadow-soft hover:border-accent/20">
                <AccordionTrigger className="text-left hover:no-underline group">
                  <div className="flex items-start gap-4 pr-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mt-1 group-hover:bg-accent/20 transition-colors">
                      <span className="text-accent font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-base md:text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-12 pr-4 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>

        {/* CTA Footer */}
        <div className="text-center mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-accent/20">
          <h3 className="text-2xl font-bold mb-3 text-foreground">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Our local decking experts are here to help. Get your free quotes and ask them anything!
          </p>
          <Button variant="hero" size="lg" onClick={handleQuoteClick} className="mb-6">
            <Quote className="w-5 h-5" />
            Get Your 3 Free Quotes Now
          </Button>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <span className="text-accent font-bold text-lg">⭐ 4.78</span>
              <span>rating</span>
            </div>
            <span className="text-border">•</span>
            <span>8,500+ Decks Quoted</span>
            <span className="text-border">•</span>
            <span>100% verified contractors</span>
          </div>
        </div>
      </div>
    </section>;
};
export default FAQSection;