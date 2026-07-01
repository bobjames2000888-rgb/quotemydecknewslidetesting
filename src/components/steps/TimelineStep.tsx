import { useState } from "react";
import { TIMELINE_OPTIONS } from "@/data/formData";
import { Clock, ArrowLeft, ArrowRight, Megaphone, Calendar, MessageSquare } from "lucide-react";

interface TimelineStepProps {
  onNext: (timeline: string) => void;
  onBack: () => void;
}

const iconMap = {
  rocket: Megaphone,
  calendar: Calendar,
  chat: MessageSquare,
};

const TimelineStep = ({ onNext, onBack }: TimelineStepProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-muted">
      <main className="w-full max-w-[620px] bg-card rounded-2xl shadow-xl p-10 md:p-14">
        {/* Progress */}
        <header className="mb-10">
          <div className="flex items-center justify-between text-sm font-medium text-muted-foreground mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Step 2 of 5</span>
            </div>
            <div className="flex-grow mx-4 h-1.5 bg-muted rounded-full relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full bg-brand-orange rounded-full" style={{ width: "40%" }}></div>
            </div>
            <span className="text-brand-orange whitespace-nowrap">40% Complete</span>
          </div>
        </header>

        <section>
          <h1 className="text-[32px] font-bold text-foreground leading-tight mb-3">
            When do you want the job done?
          </h1>
          <p className="text-[17px] text-muted-foreground mb-8">
            We'll prioritise decking contractors who can meet your timeline.
          </p>

          <div className="space-y-4">
            {TIMELINE_OPTIONS.map((option) => {
              const Icon = iconMap[option.icon];
              const isSelected = selected === option.label;
              return (
                <label
                  key={option.label}
                  className={`relative flex items-center p-5 cursor-pointer rounded-xl border-2 transition-all ${
                    isSelected
                      ? "border-brand-orange bg-brand-orange-light"
                      : "border-border hover:border-brand-orange hover:bg-brand-orange-light/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="timeline"
                    className="hidden"
                    checked={isSelected}
                    onChange={() => setSelected(option.label)}
                  />
                  <div className="flex items-center w-full">
                    <div className={`mr-6 ${isSelected ? "text-brand-orange" : "text-muted-foreground"}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-semibold text-foreground">{option.label}</span>
                  </div>
                </label>
              );
            })}
          </div>
        </section>

        <footer className="mt-12 flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="flex-1 flex items-center justify-center gap-2 py-4 px-6 bg-muted text-muted-foreground font-semibold rounded-xl hover:bg-secondary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <button
            onClick={() => selected && onNext(selected)}
            disabled={!selected}
            className="flex-[1.2] flex items-center justify-center gap-2 py-4 px-6 bg-brand-orange text-primary-foreground font-semibold rounded-xl hover:opacity-90 disabled:opacity-50 transition-all"
          >
            Continue
            <ArrowRight className="w-5 h-5" />
          </button>
        </footer>
      </main>
    </div>
  );
};

export default TimelineStep;
