import { Home, Landmark, Users, AlertTriangle, HeartHandshake, KeyRound } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import house6 from "@/assets/house-6.jpg";
import house7 from "@/assets/house-7.jpg";

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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Top: Image left + text right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal direction="left">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={house6} alt="Home we can help with" className="w-full h-[400px] object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.1}>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                We Buy Houses in <span className="text-gold">Any Condition</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                No matter your situation, we've helped homeowners just like you find a way out. No repairs needed, no cleaning, no agent fees.
              </p>
              <a
                href="#offer"
                className="inline-flex gradient-gold text-primary-foreground font-semibold px-7 py-3.5 rounded-lg shadow-gold hover:opacity-90 transition-all"
              >
                Get My Cash Offer
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Situation cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {situations.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.08} direction="up">
              <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all group h-full">
                <div className="w-11 h-11 rounded-lg gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <s.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-serif font-bold text-card-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;