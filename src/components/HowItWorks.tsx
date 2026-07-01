import { Send, MessageSquareQuote, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
interface HowItWorksProps {
  onQuoteClick: () => void;
}
const HowItWorks = ({
  onQuoteClick
}: HowItWorksProps) => {
  const steps = [{
    icon: Send,
    title: "Click Quotes",
    badge: "60 seconds",
    description: "Quick & easy form"
  }, {
    icon: MessageSquareQuote,
    title: "Receive Quotes",
    badge: "Within minutes",
    description: "3 competitive quotes"
  }, {
    icon: ThumbsUp,
    title: "Choose & Save",
    badge: "You decide",
    description: "Hire the best deck builder"
  }];
  return <section className="py-12 sm:py-20 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold text-sm rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">Get your decking project started in 3 easy steps</p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-1/2 left-[20%] right-[20%] h-1 bg-accent/30 -translate-y-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {steps.map((step, index) => <div key={index} className="group relative">
                {/* Card */}
                <div className="relative bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-strong hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 text-center">
                  {/* Step number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-accent">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 rounded-xl bg-primary mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-accent" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {step.title}
                  </h3>

                  {/* Badge */}
                  <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-medium text-sm rounded-full mb-3">
                    {step.badge}
                  </span>

                  {/* Description */}
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>)}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" onClick={onQuoteClick}>
            Get Your 3 Free Quotes Now          
          </Button>
        </div>
      </div>
    </section>;
};
export default HowItWorks;