import ScrollReveal from "./ScrollReveal";
import { Star, Phone } from "lucide-react";
import house5 from "@/assets/house-5.jpg";

const PHONE = "(555) 123-4567";
const PHONE_HREF = "tel:+15551234567";

const MidCTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <ScrollReveal direction="left">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={house5} alt="Beautiful property" className="w-full h-[460px] object-cover" />
            </div>
          </ScrollReveal>

          {/* Right - Text */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight">
                One Form Away from Your <span className="text-gold">Cash Offer</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We don't pressure. We solve problems. See if you qualify for a fair cash offer or discover an even better option for your situation.
              </p>

              {/* Review badge */}
              <div className="inline-flex flex-col gap-1 max-w-[320px]">
                <span className="text-sm font-semibold text-foreground">
                  Our clients love working with us.
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-foreground">4.9</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">150+ reviews</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#offer"
                  className="inline-flex gradient-gold text-primary-foreground font-semibold px-7 py-3.5 rounded-lg shadow-gold hover:opacity-90 transition-all"
                >
                  Get My Cash Offer
                </a>
                <a
                  href="#testimonials"
                  className="inline-flex items-center gap-2 border border-border text-foreground font-semibold px-7 py-3.5 rounded-lg hover:bg-muted transition-all"
                >
                  See Testimonials
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default MidCTA;