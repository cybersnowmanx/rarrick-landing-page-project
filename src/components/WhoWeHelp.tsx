import { Home, Landmark, Users, AlertTriangle, HeartHandshake, KeyRound } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const situations = [
  { icon: Landmark, title: "Facing Foreclosure", desc: "Avoid the stress and credit damage. We can close fast and help you move forward." },
  { icon: Home, title: "Inherited Property", desc: "Don't want to deal with a house you've inherited? We'll handle everything for you." },
  { icon: AlertTriangle, title: "Behind on Payments", desc: "Falling behind doesn't mean you're out of options. Let us help you get back on track." },
  { icon: Users, title: "Going Through Divorce", desc: "Simplify the process by selling quickly and splitting the proceeds fairly." },
  { icon: KeyRound, title: "Problem Tenants", desc: "Tired of dealing with difficult renters? Sell your rental property as-is." },
  { icon: HeartHandshake, title: "Need to Relocate", desc: "Moving for a job or family? We'll buy your house fast so you can focus on what matters." },
];

const WhoWeHelp = () => {
  return (
    <section className="py-20 bg-gold overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-3">
              Who We Help
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto">
              No matter your situation, we've helped homeowners just like you find a way out.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {situations.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.08} direction="up">
              <div className="rounded-xl border border-primary-foreground/20 p-6 hover:border-primary-foreground/40 transition-all duration-500 group bg-primary-foreground/15 backdrop-blur-sm h-full">
                <div className="w-11 h-11 rounded-lg bg-primary-foreground flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <s.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-lg font-serif font-bold text-primary-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-primary-foreground/75 leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="text-center mt-12">
            <a
              href="#offer"
              className="inline-flex bg-primary-foreground text-gold font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-all shadow-lg"
            >
              Get My Cash Offer
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhoWeHelp;
