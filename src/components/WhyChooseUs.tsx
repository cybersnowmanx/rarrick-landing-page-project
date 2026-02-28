import { Award, Zap, Settings, HandCoins } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const benefits = [
  { icon: Award, title: "Expertise & Trust", desc: "With years of experience helping homeowners in tough situations, we know how to create solutions when others can't." },
  { icon: Zap, title: "Speed & Certainty", desc: "We can make an offer within 24 hours and close in as little as 7 days. No waiting, no delays, no red tape." },
  { icon: Settings, title: "Tailored Solutions", desc: "Every situation is different. We tailor our approach to fit your goals, whether that's cash, flexible terms, or guidance." },
  { icon: HandCoins, title: "No-Obligation Offer", desc: "You're never pressured to accept. We present your options and if it makes sense, great. If not, we'll still help." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
              What Makes Rarrick <span className="text-gold">Different</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="up">
              <div className="bg-card rounded-2xl p-7 h-full border border-border hover:shadow-lg transition-all group">
                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <b.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-serif font-bold text-card-foreground mb-3">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom banner */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 bg-card rounded-2xl border border-border p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-serif font-bold text-card-foreground">We don't make generic offers.</h3>
              <p className="text-sm text-muted-foreground mt-1">We actually review your situation and show you what your best move is — even if it means not selling to us.</p>
            </div>
            <a
              href="#offer"
              className="inline-flex gradient-gold text-primary-foreground font-semibold px-7 py-3.5 rounded-lg shadow-gold hover:opacity-90 transition-all whitespace-nowrap"
            >
              Get My Cash Offer
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhyChooseUs;