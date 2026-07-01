import { Button } from "@/components/ui/button";
import { Star, Users } from "lucide-react";
import heroDeck from "@/assets/hero-deck.jpg";
import fastWhiteIcon from "@/assets/fast-white-icon.webp";

const QUOTE_URL = "/quote";

interface SuburbHeroSectionProps {
  suburbName: string;
}

const SuburbHeroSection = ({ suburbName }: SuburbHeroSectionProps) => {
  const handleQuoteClick = () => {
    window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <section className="relative min-h-screen lg:min-h-screen flex items-start lg:items-center overflow-x-hidden overflow-y-visible">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroDeck} 
          alt="Professional deck installation" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 hero-gradient opacity-85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 pt-20 sm:pt-24 lg:pt-20 pb-16 sm:pb-20 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left Column - Main Content */}
          <div className="text-white space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Trust Badge */}
            <div className="flex items-center space-x-2 text-accent flex-wrap">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">Australia's #1 Decking Quote Platform — Quotes Within Minutes.</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                {suburbName} <span className="block text-accent">Decking Quotes</span>
                in Minutes - Free
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 max-w-lg">
                Compare Prices & Save on Your Deck Installation — only verified, top-rated deck builders quote on your job.
              </p>
            </div>

            {/* Quote Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-strong border border-white/20">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 lg:mb-4 text-white">Start Your Free Quote</h3>
              <div className="space-y-3 sm:space-y-4">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="w-full text-xs sm:text-sm lg:text-base py-3 sm:py-4" 
                  onClick={handleQuoteClick}
                >
                  Click to Get 3 Free {suburbName} Quotes in Minutes
                </Button>
              </div>
              <p className="text-[10px] sm:text-xs text-gray-200 mt-2 sm:mt-3 text-center">
                ✓ No obligation quotes ✓ Licensed contractors only ✓ 100% Free service
              </p>
            </div>

            {/* Social Proof */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 pt-2 sm:pt-4">
              <div className="text-center">
                <div className="text-base sm:text-lg lg:text-2xl font-bold text-accent">10,000+</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-gray-200">Suburbs Covered</div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-lg lg:text-2xl font-bold text-accent">4.78★</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-gray-200">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-lg lg:text-2xl font-bold text-accent">8,500+</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-gray-200">Decks Quoted</div>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 mt-4 lg:mt-0">
            {/* Feature Cards */}
            <div className="grid gap-3 sm:gap-4">
              <div className="card-gradient rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 shadow-soft border border-white/20">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 accent-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Trusted by Homeowners Across {suburbName}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">Homeowners across {suburbName} count on us for their decking solutions at competitive and affordable prices, without compromising on quality.</p>
                  </div>
                </div>
              </div>

              <div className="card-gradient rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 shadow-soft border border-white/20">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 accent-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">{suburbName}'s Most Reliable Decking Professionals</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">Quotes are sourced only from screened, reviewed, and highly-rated deck builders in {suburbName}.</p>
                  </div>
                </div>
              </div>

              <div className="card-gradient rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 shadow-soft border border-white/20">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 accent-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <img src={fastWhiteIcon} alt="Fast quotes" className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Fast {suburbName}-Wide Local Area Quotes</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">Get decking quotes from local contractors in minutes — no matter where you are in {suburbName}.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-8 sm:h-12 text-background" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
};

export default SuburbHeroSection;