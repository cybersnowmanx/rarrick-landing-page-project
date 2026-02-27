import { useState } from "react";
import { Clock, Shield, ArrowRight, ArrowLeft, MapPin } from "lucide-react";

interface TwoStepFormProps {
  className?: string;
}

const TwoStepForm = ({ className }: TwoStepFormProps) => {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) setStep(2);
  };

  const handleStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName.trim() && phone.trim() && email.trim()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className={`bg-card rounded-xl p-8 shadow-2xl ${className}`}>
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
    <div className={`bg-card rounded-xl shadow-2xl overflow-hidden ${className}`}>
      {/* Badges */}
      <div className="flex gap-3 px-6 pt-6 pb-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
          <Clock className="w-3.5 h-3.5" /> Takes 30 Seconds
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
          <Shield className="w-3.5 h-3.5" /> No Obligation
        </span>
      </div>

      <div className="p-6 pt-4">
        <h3 className="text-2xl font-serif font-bold text-card-foreground mb-1">Get My Cash Offer</h3>
        <p className="text-sm text-muted-foreground mb-5">We'll call/text you within 24 hours.</p>

        {/* Step indicators */}
        <div className="flex gap-2 mb-6">
          <div className={`h-1 flex-1 rounded-full transition-colors ${step >= 1 ? 'bg-primary' : 'bg-muted'}`} />
          <div className={`h-1 flex-1 rounded-full transition-colors ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
        </div>

        {step === 1 ? (
          <form onSubmit={handleStep1} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-card-foreground mb-1.5 block">Property Address</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Enter your property address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full gradient-gold text-primary-foreground font-semibold py-3.5 rounded-lg shadow-gold hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              Get My Cash Offer <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <form onSubmit={handleStep2} className="space-y-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-2 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back
            </button>
            <div>
              <label className="text-sm font-medium text-card-foreground mb-1.5 block">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-card-foreground mb-1.5 block">Phone Number</label>
              <input
                type="tel"
                placeholder="(555) 123-4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-card-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                placeholder="john@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full gradient-gold text-primary-foreground font-semibold py-3.5 rounded-lg shadow-gold hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              Show Me My Options <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="text-[11px] text-muted-foreground mt-4 leading-relaxed">
          By submitting, you consent to receive calls, texts, and emails from Rarrick Property Solutions regarding your property inquiry. Reply STOP to opt out.
        </p>
      </div>
    </div>
  );
};

export default TwoStepForm;
