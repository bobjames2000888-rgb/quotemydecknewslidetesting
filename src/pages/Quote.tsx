import { useState } from "react";
import LocationStep from "@/components/steps/LocationStep";
import TimelineStep from "@/components/steps/TimelineStep";
import DescriptionStep from "@/components/steps/DescriptionStep";
import ContactStep from "@/components/steps/ContactStep";
import ResultsStep from "@/components/steps/ResultsStep";
import { Suburb } from "@/data/formData";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

type Step = "location" | "timeline" | "description" | "contact" | "results";

const TRADE = "Decking";

const Quote = () => {
  useDocumentTitle("Get Your Free Decking Quote — QuoteMyDeck");
  const [step, setStep] = useState<Step>("location");
  const [suburb, setSuburb] = useState<Suburb | null>(null);
  const [, setTimeline] = useState("");
  const [, setDescription] = useState("");

  switch (step) {
    case "location":
      return (
        <LocationStep
          trade={TRADE}
          onNext={(s) => {
            setSuburb(s);
            setStep("timeline");
          }}
        />
      );
    case "timeline":
      return (
        <TimelineStep
          onNext={(t) => {
            setTimeline(t);
            setStep("description");
          }}
          onBack={() => setStep("location")}
        />
      );
    case "description":
      return (
        <DescriptionStep
          trade={TRADE}
          onNext={(d) => {
            setDescription(d);
            setStep("contact");
          }}
          onBack={() => setStep("timeline")}
        />
      );
    case "contact":
      return (
        <ContactStep
          onNext={() => setStep("results")}
          onBack={() => setStep("description")}
        />
      );
    case "results":
      return <ResultsStep state={suburb?.state || "VIC"} />;
    default:
      return null;
  }
};

export default Quote;