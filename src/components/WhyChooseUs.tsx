import { Wrench, Clock, HandCoins, ShieldCheck, Users, FileText } from "lucide-react";

const benefits = [
  { icon: HandCoins, title: "Fair Cash Offers", desc: "We provide competitive cash offers based on current market value." },
  { icon: Clock, title: "Fast Closing", desc: "Close in as little as 7 days. No waiting for bank approvals." },
  { icon: Wrench, title: "No Repairs Needed", desc: "Sell as-is. We buy houses in any condition — no cleaning required." },
  { icon: ShieldCheck, title: "No Fees or Commissions", desc: "Zero hidden costs. No agent fees, no closing costs." },
  { icon: Users, title: "Local & Trusted", desc: "We're a local team that treats every homeowner with respect." },
  { icon: FileText, title: "We Handle Paperwork", desc: "Our team manages all the closing documents and logistics." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gold">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-3">
            Why Choose Rarrick Property Solutions
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">
            We make selling your house simple, fast, and stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="rounded-xl border border-primary-foreground/20 p-6 hover:border-primary-foreground/40 transition-all group bg-primary-foreground/15 backdrop-blur-sm">
              <div className="w-11 h-11 rounded-lg bg-primary-foreground flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <b.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-lg font-serif font-bold text-primary-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-primary-foreground/75 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
