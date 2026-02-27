import { Phone } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import heroBg from "@/assets/hero-bg.jpg";
import TwoStepForm from "./TwoStepForm";

const PHONE = "(555) 123-4567";
const PHONE_HREF = "tel:+15551234567";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark-surface/85" />
      </div>

      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <img src={logo} alt="Rarrick Property Solutions" className="h-16 md:h-20" />
          <div className="flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 border border-dark-surface-foreground/20 text-dark-surface-foreground font-medium px-4 py-2.5 rounded-lg hover:border-primary/50 transition-all text-sm"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span className="hidden sm:inline">{PHONE}</span>
            </a>
            <a
              href="#offer"
              className="hidden md:inline-flex gradient-gold text-primary-foreground font-semibold px-6 py-2.5 rounded-lg shadow-gold hover:opacity-90 transition-all"
            >
              Get My Cash Offer
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile sticky call button */}
      <a
        href={PHONE_HREF}
        className="md:hidden fixed bottom-5 right-5 z-50 gradient-gold text-primary-foreground p-4 rounded-full shadow-gold hover:opacity-90 transition-all"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark-surface-foreground leading-tight">
              Get a <span className="text-gold">Cash Offer</span> for Your House — <span className="text-gold">As Is</span>
            </h1>
            <p className="text-lg text-dark-surface-foreground/70 max-w-lg leading-relaxed">
              We buy houses for cash. No fees, no repairs, no hassle. Get a fair offer and close on your timeline.
            </p>
            <div className="flex flex-wrap gap-6 text-dark-surface-foreground/60 text-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold" /> No Repairs Needed
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold" /> Close in 7 Days
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold" /> Zero Fees
              </span>
            </div>
          </div>

          {/* Right - Form */}
          <div id="offer" className="lg:ml-auto w-full max-w-md">
            <TwoStepForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
