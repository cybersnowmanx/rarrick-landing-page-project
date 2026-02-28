import { Phone } from "lucide-react";
import house4 from "@/assets/house-4.jpg";
import ScrollReveal from "./ScrollReveal";

const PHONE = "(555) 123-4567";
const PHONE_HREF = "tel:+15551234567";

const CTASection = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={house4} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark-surface/80" />
      </div>
      <div className="relative container mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-surface-foreground mb-4">
            Most Homeowners Wait Too Long Before Asking for <span className="text-gold">Help</span>
          </h2>
          <p className="text-dark-surface-foreground/70 max-w-lg mx-auto mb-8 text-lg">
            Don't wait until it costs you more. Get your no-obligation cash offer today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#offer"
              className="inline-flex gradient-gold text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-all text-lg shadow-gold"
            >
              Get My Cash Offer
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 border border-dark-surface-foreground/30 text-dark-surface-foreground font-semibold px-8 py-4 rounded-lg hover:border-primary/50 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              {PHONE}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;