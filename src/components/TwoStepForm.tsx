import { useState } from "react";
import { Clock, Shield, ArrowRight } from "lucide-react";

interface TwoStepFormProps {
  className?: string;
}

const TwoStepForm = ({ className }: TwoStepFormProps) => {
  const [address, setAddress] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim() && phone.trim() && fullName.trim()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className={`bg-card rounded-2xl p-8 shadow-2xl border-t-[6px] border-primary ${className}`}>
        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-card-foreground">Thank You!</h3>
          <p className="text-muted-foreground">We'll contact you within 24 hours with your cash offer.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-card rounded-2xl shadow-2xl overflow-hidden border-t-[6px] border-primary ${className}`}>
      {/* Badges */}
      <div className="flex gap-3 px-7 pt-7 pb-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <Clock className="w-3.5 h-3.5 text-primary" /> Takes 30 Seconds
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <Shield className="w-3.5 h-3.5 text-primary" /> No Obligation
        </span>
      </div>

      <div className="px-7 pb-7 pt-3">
        <h3 className="text-2xl font-serif font-bold text-card-foreground mb-1">Get My Cash Offer</h3>
        <p className="text-sm text-muted-foreground mb-6">We'll call/text you within 24 hours.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Property Address *"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          />
          <input
            type="tel"
            placeholder="Phone *"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          />
          <input
            type="text"
            placeholder="Name *"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          />
          <button
            type="submit"
            className="w-full gradient-gold text-primary-foreground font-semibold py-3.5 rounded-lg shadow-gold hover:opacity-90 transition-all flex items-center justify-center gap-2 text-lg"
          >
            Show Me My Options <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-[11px] text-muted-foreground mt-4 leading-relaxed">
          By submitting, you consent to receive calls, texts, and emails from Rarrick Property Solutions regarding your property inquiry. Reply STOP to opt out.
        </p>
      </div>
    </div>
  );
};

export default TwoStepForm;