import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
const ReviewsSection = () => {
  const reviews = [{
    name: "Samantha",
    location: "Sydney, NSW",
    rating: 5,
    text: "Such a smooth and easy process! Three quotes arrived almost instantly, and the contractor I picked did a flawless job. My new composite deck looks stunning — I'm absolutely thrilled!",
    project: "Composite Decking – 28m²"
  }, {
    name: "Mark",
    location: "Melbourne, VIC",
    rating: 5,
    text: "Super impressed! The quotes were spot-on, and the deck builder I chose was fantastic from day one. They finished earlier than promised, and the deck looks perfect. Highly recommended!",
    project: "Timber Decking – 35m²"
  }, {
    name: "James",
    location: "Brisbane, QLD",
    rating: 5,
    text: "Fantastic experience! Comparing quotes was so easy, and I got a much better price than I thought I would. The workmanship was outstanding. The job truly exceeded my expectations.",
    project: "Pool Decking – 22m²"
  }, {
    name: "Jessica",
    location: "Sydney, NSW",
    rating: 5,
    text: "Such a professional experience. Communication was excellent, and the online quote system made things incredibly simple — no more calling around for prices. Highly recommend!",
    project: "Hardwood Decking – 30m²"
  }];
  return <section id="reviews" className="py-12 sm:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 sm:w-6 h-5 sm:h-6 fill-accent text-accent" />)}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
            Trusted by Thousands of Australians
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Read what our customers say about their decking experience with our platform
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {reviews.map((review, index) => <Card key={index} className="shadow-strong hover:shadow-accent transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 accent-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                    </div>
                    
                    {/* Review Text */}
                    <p className="text-foreground mb-4">"{review.text}"</p>
                    
                    {/* Customer Info */}
                    <div className="border-t border-border pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-primary">{review.name}</div>
                          <div className="text-sm text-muted-foreground">{review.location}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-accent">{review.project}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Trust Indicators */}
        <div className="card-gradient rounded-2xl p-8 shadow-soft text-center">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Join Thousands of Happy Customers
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-muted-foreground">Licensed & Insured Contractors</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-muted-foreground">Quality Workmanship</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-muted-foreground">Free, No-Obligation Quotes</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ReviewsSection;