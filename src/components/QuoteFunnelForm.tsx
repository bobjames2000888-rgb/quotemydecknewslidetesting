import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { 
  Clock, 
  ArrowRight, 
  ArrowLeft, 
  Star, 
  Shield, 
  Zap, 
  CheckCircle2, 
  MapPin, 
  Calendar,
  Upload,
  Phone,
  Mail,
  User,
  MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface QuoteFunnelFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormData {
  jobType: string;
  jobDescription: string;
  photo: File | null;
  location: string;
  timing: string;
  name: string;
  email: string;
  phone: string;
  verificationCode: string;
}

const QuoteFunnelForm = ({ open, onOpenChange }: QuoteFunnelFormProps) => {
  const { toast } = useToast();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    jobType: "",
    jobDescription: "",
    photo: null,
    location: "",
    timing: "",
    name: "",
    email: "",
    phone: "",
    verificationCode: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSlides = 6;
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  const motivationalMessages = [
    "Great start! 🎯",
    "That helps us a lot! 👍",
    "Excellent! Almost there... ⚡",
    "Perfect! Nearly done... 🌟",
    "Last step! 🎉",
    "Connecting you now... ✨"
  ];

  const updateFormData = (field: Partial<FormData>) => {
    setFormData({ ...formData, ...field });
  };

  const goNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Success! 🎉",
      description: "We're connecting you with top local deck building pros now.",
    });
    
    setIsSubmitting(false);
    onOpenChange(false);
    
    // Reset form
    setTimeout(() => {
      setCurrentSlide(0);
      setFormData({
        jobType: "",
        jobDescription: "",
        photo: null,
        location: "",
        timing: "",
        name: "",
        email: "",
        phone: "",
        verificationCode: "",
      });
    }, 500);
  };

  const canProceed = () => {
    switch (currentSlide) {
      case 0:
        return formData.jobType !== "";
      case 1:
        return formData.jobDescription.trim() !== "";
      case 2:
        return formData.location.trim() !== "";
      case 3:
        return formData.timing !== "";
      case 4:
        return formData.name.trim() !== "" && 
               formData.email.trim() !== "" && 
               formData.phone.trim() !== "";
      case 5:
        return formData.verificationCode.length === 6;
      default:
        return false;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden p-0">
        {/* Progress Bar */}
        <div className="h-1.5 bg-muted relative overflow-hidden">
          <div 
            className="h-full accent-gradient transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-6px)]">
          {/* Progress Text */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Step {currentSlide + 1} of {totalSlides}</span>
              {currentSlide >= 3 && (
                <span className="text-accent font-medium ml-2">
                  {motivationalMessages[currentSlide]}
                </span>
              )}
            </div>
            <div className="text-sm font-medium text-accent">
              {Math.round(progress)}% Complete
            </div>
          </div>

          {/* Slide Content */}
          <div className="min-h-[400px]">
            {/* Slide 1: Job Type */}
            {currentSlide === 0 && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div>
                  <DialogTitle className="text-2xl md:text-3xl font-bold mb-3">
                    Let's get your decking job sorted — it only takes 60 seconds.
                  </DialogTitle>
                  <DialogDescription className="text-base flex items-center gap-2">
                    <Star className="w-5 h-5 text-accent fill-accent" />
                    We'll match you with trusted local deck builders rated <span className="font-semibold text-accent">4.8★</span> by homeowners near you.
                  </DialogDescription>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="jobType" className="text-base font-medium">
                    What kind of decking work do you need?
                  </Label>
                  <Select value={formData.jobType} onValueChange={(value) => updateFormData({ jobType: value })}>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select your decking needs..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new-fence">New Deck Installation</SelectItem>
                      <SelectItem value="repair">Deck Repair</SelectItem>
                      <SelectItem value="replacement">Deck Replacement</SelectItem>
                      <SelectItem value="gate">Pergola / Combo Build</SelectItem>
                      <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Free, no-obligation quotes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Licensed contractors only</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>100% free service</span>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 2: Job Description */}
            {currentSlide === 1 && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div>
                  <DialogTitle className="text-2xl md:text-3xl font-bold mb-3">
                    Got a moment? Describe what needs doing.
                  </DialogTitle>
                  <DialogDescription className="text-base">
                    This helps us match you with the best tradies for your specific job.
                  </DialogDescription>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="description" className="text-base font-medium flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Job Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="e.g. Build a new composite deck in the backyard."
                    value={formData.jobDescription}
                    onChange={(e) => updateFormData({ jobDescription: e.target.value })}
                    className="min-h-[120px] text-base resize-none"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-medium flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    Add a photo (optional, but helps us match the best tradies)
                  </Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-accent/50 transition-smooth cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="photo-upload"
                      onChange={(e) => updateFormData({ photo: e.target.files?.[0] || null })}
                    />
                    <label htmlFor="photo-upload" className="cursor-pointer">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                      {formData.photo ? (
                        <p className="text-sm text-accent font-medium">{formData.photo.name}</p>
                      ) : (
                        <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                      )}
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 3: Location */}
            {currentSlide === 2 && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div>
                  <DialogTitle className="text-2xl md:text-3xl font-bold mb-3">
                    Where's the job located?
                  </DialogTitle>
                  <DialogDescription className="text-base flex items-center gap-2">
                    <Shield className="w-5 h-5 text-accent" />
                    We'll connect you only with <span className="font-semibold text-accent">verified deck building experts</span> in your area.
                  </DialogDescription>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="location" className="text-base font-medium flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Postcode or Suburb
                  </Label>
                  <Input
                    id="location"
                    placeholder="e.g. Pakenham 3810"
                    value={formData.location}
                    onChange={(e) => updateFormData({ location: e.target.value })}
                    className="h-12 text-base"
                  />
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 accent-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-accent mb-1">Local Expertise</p>
                      <p className="text-sm text-muted-foreground">
                        We've already helped <span className="font-semibold text-foreground">2,600+ homeowners</span> get quality decking in your area.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-accent">120+</div>
                    <div className="text-xs text-muted-foreground">Verified Contractors</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-accent">4.8★</div>
                    <div className="text-xs text-muted-foreground">Average Rating</div>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 4: Timing */}
            {currentSlide === 3 && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div>
                  <DialogTitle className="text-2xl md:text-3xl font-bold mb-3">
                    When would you like the job done?
                  </DialogTitle>
                  <DialogDescription className="text-base">
                    Your answer helps us find tradies who are free when you are.
                  </DialogDescription>
                </div>

                <div className="space-y-3">
                  <Label className="text-base font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Preferred Timeline
                  </Label>
                  <div className="grid gap-3">
                    {[
                      { value: "asap", label: "As soon as possible", icon: "🚀" },
                      { value: "2weeks", label: "Within 2 weeks", icon: "📅" },
                      { value: "1month", label: "In a month", icon: "🗓️" },
                      { value: "planning", label: "Just planning / comparing quotes", icon: "💭" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => updateFormData({ timing: option.value })}
                        className={cn(
                          "w-full text-left p-4 rounded-lg border-2 transition-all duration-200",
                          formData.timing === option.value
                            ? "border-accent bg-accent/5 shadow-accent"
                            : "border-border hover:border-accent/50 hover:bg-accent/5"
                        )}
                      >
                        <span className="text-xl mr-3">{option.icon}</span>
                        <span className="font-medium">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Slide 5: Contact Details */}
            {currentSlide === 4 && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div>
                  <DialogTitle className="text-2xl md:text-3xl font-bold mb-3">
                    Almost there — where can our deck building experts reach you?
                  </DialogTitle>
                  <DialogDescription className="text-base">
                    We'll text you when your quotes are ready — no spam, ever.
                  </DialogDescription>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-medium flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => updateFormData({ name: e.target.value })}
                      className="h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-medium flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => updateFormData({ email: e.target.value })}
                      className="h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-medium flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Best Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="0412 345 678"
                      value={formData.phone}
                      onChange={(e) => updateFormData({ phone: e.target.value })}
                      className="h-12 text-base"
                    />
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 text-accent" />
                    <span>Your info is 100% private and secure</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Zap className="w-4 h-4 text-accent" />
                    <span>Most people get 3 quotes within 1 hour</span>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 6: Verification */}
            {currentSlide === 5 && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div>
                  <DialogTitle className="text-2xl md:text-3xl font-bold mb-3">
                    We've sent you a quick verification code 📩
                  </DialogTitle>
                  <DialogDescription className="text-base">
                    This helps make sure your quotes go to the right number.
                  </DialogDescription>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="code" className="text-base font-medium">
                    Enter 6-digit code
                  </Label>
                  <Input
                    id="code"
                    placeholder="000000"
                    maxLength={6}
                    value={formData.verificationCode}
                    onChange={(e) => updateFormData({ verificationCode: e.target.value.replace(/\D/g, '') })}
                    className="h-14 text-center text-2xl tracking-widest font-semibold"
                  />
                  <p className="text-xs text-muted-foreground text-center">
                    Didn't receive it? <button className="text-accent hover:underline font-medium">Resend code</button>
                  </p>
                </div>

                <div className="space-y-3 bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="font-medium">Over 2,600 decking jobs completed in your area</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-accent" />
                    <span className="font-medium">Verified, reviewed, and insured tradies only</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span className="font-medium">Average response time: under 1 hour</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3 mt-8 pt-6 border-t">
            {currentSlide > 0 && (
              <Button
                variant="outline"
                onClick={goBack}
                disabled={isSubmitting}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            )}
            
            <Button
              variant="hero"
              onClick={currentSlide === totalSlides - 1 ? handleSubmit : goNext}
              disabled={!canProceed() || isSubmitting}
              className="flex-1 h-12 text-base gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Connecting...
                </>
              ) : currentSlide === totalSlides - 1 ? (
                "Get My Quotes"
              ) : currentSlide === 4 ? (
                <>
                  Send Verification Code
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  {currentSlide === 0 ? "Next Step" : 
                   currentSlide === 2 ? "Find Local Pros" : 
                   "Continue"}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteFunnelForm;