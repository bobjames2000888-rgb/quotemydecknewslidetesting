import { useState } from "react";
import { Clock, ArrowLeft, ArrowRight, User, Mail, Phone, Shield } from "lucide-react";

interface ContactStepProps {
  onNext: (data: { name: string; email: string; phone: string }) => void;
  onBack: () => void;
}

const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
const validateName = (name: string) => !/\d/.test(name.trim());
const validatePhone = (phone: string) => {
  const digits = phone.replace(/\s/g, "");
  return /^0\d{9}$/.test(digits);
};

const ContactStep = ({ onNext, onBack }: ContactStepProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState({ name: false, email: false, phone: false });
  const [submitted, setSubmitted] = useState(false);

  const errors = {
    name: !name.trim() ? "Please enter your name" : !validateName(name) ? "Please enter your correct name" : "",
    email: !email.trim() ? "Please enter your email address" : !validateEmail(email) ? "Please enter a valid email address" : "",
    phone: !phone.trim() ? "Please enter your phone number" : !phone.replace(/\s/g, "").startsWith("0") ? "Phone number must start with 0" : !validatePhone(phone) ? "Phone number must be 10 digits" : "",
  };

  const canSubmit = !errors.name && !errors.email && !errors.phone;
  const show = (field: "name" | "email" | "phone") => (touched[field] || submitted) && errors[field];

  const inputClass = (field: "name" | "email" | "phone") =>
    `w-full px-5 py-4 rounded-xl border bg-muted/30 text-foreground placeholder-muted-foreground focus:ring-1 focus:outline-none focus:bg-card ${
      show(field) ? "border-destructive focus:border-destructive focus:ring-destructive" : "border-border focus:border-brand-orange focus:ring-brand-orange"
    }`;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-muted">
      <main className="w-full max-w-[600px] bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12">
        {/* Progress */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-muted-foreground text-sm font-medium">
              <Clock className="w-4 h-4 mr-2" />
              Step 4 of 5
            </div>
            <span className="text-brand-orange text-sm font-semibold">80% Complete</span>
          </div>
          <div className="w-full h-2 bg-brand-orange-light rounded-full overflow-hidden">
            <div className="h-full bg-brand-orange rounded-full" style={{ width: "80%" }}></div>
          </div>
        </section>

        {/* Heading */}
        <header className="mb-8">
          <h1 className="text-[32px] md:text-[36px] font-bold text-foreground leading-tight mb-4">
            Almost done! Your quotes are just minutes away.
          </h1>
          <p className="text-muted-foreground text-lg">
            Enter your details so your decking pros can send accurate pricing.
          </p>
        </header>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
            if (canSubmit) onNext({ name, email, phone });
          }}
          className="space-y-6"
          noValidate
        >
          <div className="space-y-2">
            <label className="flex items-center text-foreground font-semibold text-sm" htmlFor="full-name">
              <User className="w-4 h-4 mr-2" />
              Full Name
            </label>
            <input
              className={inputClass("name")}
              id="full-name"
              placeholder="John Smith"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, name: true }))}
            />
            {show("name") && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-foreground font-semibold text-sm" htmlFor="email">
              <Mail className="w-4 h-4 mr-2" />
              Email Address
            </label>
            <input
              className={inputClass("email")}
              id="email"
              placeholder="john@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            />
            {show("email") && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-foreground font-semibold text-sm" htmlFor="phone">
              <Phone className="w-4 h-4 mr-2" />
              Best Phone Number
            </label>
            <input
              className={inputClass("phone")}
              id="phone"
              placeholder="0412 234 562"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
            />
            {show("phone") && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Trust */}
          <div className="space-y-3 pt-4">
            {["Zero spam — ever", "Your details are private and secure"].map((text) => (
              <div key={text} className="flex items-center text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-brand-orange mr-2" />
                {text}
              </div>
            ))}
          </div>

          {/* Nav */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="button"
              onClick={onBack}
              className="flex-1 flex items-center justify-center px-6 py-4 bg-muted text-foreground font-bold rounded-xl transition-colors hover:bg-secondary"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>
            <button
              type="submit"
              className="flex-[1.5] flex items-center justify-center px-6 py-4 bg-brand-orange text-primary-foreground font-bold rounded-xl transition-opacity hover:opacity-90 disabled:opacity-50 shadow-md"
            >
              Get My Free Quotes
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ContactStep;
