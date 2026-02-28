import { useEffect, useRef, useState } from "react";
import { Home, Landmark, Users, AlertTriangle, HeartHandshake, KeyRound } from "lucide-react";

const situations = [
  { icon: Landmark, title: "Facing Foreclosure", desc: "Avoid the stress and credit damage. We can close fast and help you move forward." },
  { icon: Home, title: "Inherited Property", desc: "Don't want to deal with a house you've inherited? We'll handle everything for you." },
  { icon: AlertTriangle, title: "Behind on Payments", desc: "Falling behind doesn't mean you're out of options. Let us help you get back on track." },
  { icon: Users, title: "Going Through Divorce", desc: "Simplify the process by selling quickly and splitting the proceeds fairly." },
  { icon: KeyRound, title: "Problem Tenants", desc: "Tired of dealing with difficult renters? Sell your rental property as-is." },
  { icon: HeartHandshake, title: "Need to Relocate", desc: "Moving for a job or family? We'll buy your house fast so you can focus on what matters." },
];

const WhoWeHelp = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-gold overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-3">
            Who We Help
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">
            No matter your situation, we've helped homeowners just like you find a way out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {situations.map((s, i) => (
            <div
              key={i}
              className={`rounded-xl border border-secondary/20 p-6 hover:border-secondary/40 transition-all duration-500 group bg-secondary/10 backdrop-blur-sm ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: visible ? `${i * 100}ms` : "0ms" }}
            >
              <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <s.icon className="w-5 h-5 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-serif font-bold text-primary-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-secondary/80 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <a
            href="#offer"
            className="inline-flex bg-secondary text-secondary-foreground font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-all"
          >
            Get My Cash Offer
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
