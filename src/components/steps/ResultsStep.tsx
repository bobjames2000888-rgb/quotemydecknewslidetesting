import { useEffect, useState, useRef, useMemo } from "react";
import { CONTRACTORS } from "@/data/formData";
import { Star, CheckCircle, Shield, User, Zap } from "lucide-react";

interface ResultsStepProps {
  state: string;
}

const ResultsStep = ({ state }: ResultsStepProps) => {
  const [visibleContractors, setVisibleContractors] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [showTrust, setShowTrust] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const stateContractors = useMemo(
    () =>
      CONTRACTORS.map((c) => ({
        ...c,
        name: `${state} ${c.name}`,
        message: c.message.replace(c.name, `${state} ${c.name}`),
      })),
    [state]
  );

  const allLoaded = visibleContractors >= stateContractors.length;

  useEffect(() => {
    const timers = stateContractors.map((_, i) =>
      setTimeout(() => setVisibleContractors(i + 1), (i + 1) * 1200)
    );
    const base = stateContractors.length * 1200;
    const alertTimer = setTimeout(() => setShowAlert(true), base + 500);
    const trustTimer = setTimeout(() => setShowTrust(true), base + 1200);
    const footerTimer = setTimeout(() => setShowFooter(true), base + 1900);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(alertTimer);
      clearTimeout(trustTimer);
      clearTimeout(footerTimer);
    };
  }, [stateContractors]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visibleContractors, showAlert, showTrust, showFooter]);

  return (
    <div className="min-h-screen p-4 bg-muted flex flex-col items-center pt-8 sm:pt-12">
      <main className="bg-card rounded-[2rem] shadow-2xl w-full max-w-[550px] overflow-hidden p-6 sm:p-8 md:p-12 text-center">
        {/* Header */}
        <section className="mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-4">
            We're finding the best decking contractors near you...
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg mb-8">
            Local verified pros are checking your job details right now.
          </p>
          {!allLoaded && (
            <div className="flex justify-center space-x-2 mb-4">
              <div className="loading-dot w-3 h-3 bg-brand-orange rounded-full"></div>
              <div className="loading-dot-2 w-3 h-3 bg-brand-orange rounded-full"></div>
              <div className="loading-dot-3 w-3 h-3 bg-brand-orange rounded-full"></div>
            </div>
          )}
        </section>

        {/* Contractors */}
        <section className="space-y-4 mb-8">
          {stateContractors.slice(0, visibleContractors).map((c) => (
            <div key={c.name} className="border border-border rounded-2xl p-4 sm:p-6 text-left shadow-sm bg-card hover:border-brand-orange/30 transition-colors relative animate-fade-in">
              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-orange-light rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange" />
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">{c.name}</h3>
                  <div className="flex items-center mt-1 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 text-brand-orange mr-1" fill="hsl(var(--brand-orange))" />
                    <span className="font-bold text-foreground mr-2">{c.rating}</span>
                    <span>• {c.reviews} reviews</span>
                  </div>
                  <div className="mt-2 flex flex-col">
                    <div className="flex items-center text-green-500 font-bold text-base">
                      <CheckCircle className="w-5 h-5 mr-1" fill="currentColor" />
                      Accepted!
                    </div>
                    <p className="text-muted-foreground text-sm ml-6">{c.message}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Alert */}
        {showAlert && (
          <section className="bg-green-50 border border-green-100 rounded-2xl p-4 sm:p-6 flex items-start text-left mb-8 sm:mb-10 animate-fade-in">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center mr-3 sm:mr-4">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              </svg>
            </div>
            <div>
              <h4 className="text-foreground font-bold text-base sm:text-lg leading-snug">Your quotes are being prepared now!</h4>
              <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                We've matched you with 3 top-rated decking contractors in your area. You'll receive your quotes shortly.
              </p>
            </div>
          </section>
        )}

        {/* Trust Badges */}
        {showTrust && (
          <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2 mb-8 sm:mb-10 animate-fade-in">
            {[
              { icon: User, label: "Verified Professionals" },
              { icon: Shield, label: "Licensed & Insured" },
              { icon: Star, label: "Reviewed by Locals" },
              { icon: Zap, label: "Fast Response" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center">
                <div className="w-12 h-12 bg-brand-orange-light rounded-full flex items-center justify-center mb-2">
                  <Icon className="w-6 h-6 text-brand-orange" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-foreground leading-tight text-center">{label}</span>
              </div>
            ))}
          </section>
        )}

        {/* Footer */}
        {showFooter && (
          <footer className="pt-8 border-t border-border animate-fade-in">
            <p className="text-foreground font-bold text-base mb-1">
              Your quotes will arrive in the next 3–7 minutes.
            </p>
            <p className="text-muted-foreground text-sm">
              Keep an eye on your phone.
            </p>
          </footer>
        )}

        <div ref={bottomRef} />
      </main>
    </div>
  );
};

export default ResultsStep;
