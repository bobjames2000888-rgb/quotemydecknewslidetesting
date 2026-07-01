import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, DollarSign } from "lucide-react";

const QUOTE_URL = "/quote";

const QuoteCalculator = () => {
  const handleQuoteClick = () => {
    window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <section id="calculator" className="py-12 sm:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
            Calculate Your Decking Cost
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Get an instant estimate for your decking project with our advanced calculator
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <Card className="shadow-strong">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 accent-gradient rounded-lg flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Get Your Free Quote</CardTitle>
                  <CardDescription className="text-base">Compare quotes from top local deck builders</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Answer a few quick questions and we'll connect you with verified deck builders in your area. 
                Get multiple competitive quotes to choose from.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 accent-gradient rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                  <span className="text-sm">Tell us about your decking project</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 accent-gradient rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                  <span className="text-sm">Get matched with local deck builders</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 accent-gradient rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                  <span className="text-sm">Compare quotes and hire the best</span>
                </div>
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={handleQuoteClick}
              >
                <Calculator className="w-4 h-4" />
                Start Free Quote Request
              </Button>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-xl font-bold text-accent">8,500+</div>
                  <div className="text-xs text-muted-foreground">Decks Quoted</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-accent">4.8★</div>
                  <div className="text-xs text-muted-foreground">Avg Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-accent">60 sec</div>
                  <div className="text-xs text-muted-foreground">To Complete</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="card-gradient shadow-soft">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-primary mb-4">Why Choose Decking Quotes Online?</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 accent-gradient rounded-full"></div>
                    <span>Compare quotes from licensed contractors</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 accent-gradient rounded-full"></div>
                    <span>Read verified customer reviews</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 accent-gradient rounded-full"></div>
                    <span>No hidden fees or obligations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 accent-gradient rounded-full"></div>
                    <span>Quality materials and workmanship guaranteed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCalculator;