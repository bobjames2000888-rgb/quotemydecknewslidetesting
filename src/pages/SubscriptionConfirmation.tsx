import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Mail } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const SubscriptionConfirmation = () => {
  useDocumentTitle("Subscription Confirmed — QuoteMyDeck");
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 accent-gradient rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          You're Subscribed!
        </h1>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-8">
          Thank you for subscribing to our updates. We'll keep you informed with the latest decking tips, offers, and news.
        </p>

        {/* Email Icon with Message */}
        <div className="card-gradient rounded-2xl p-6 shadow-soft border border-border mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Mail className="w-6 h-6 text-accent" />
            <span className="text-foreground font-medium">Check your inbox</span>
          </div>
          <p className="text-sm text-muted-foreground">
            A confirmation email has been sent to your address. Please check your spam folder if you don't see it.
          </p>
        </div>

        {/* Back to Home Button */}
        <Button variant="hero" size="lg" asChild>
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SubscriptionConfirmation;
