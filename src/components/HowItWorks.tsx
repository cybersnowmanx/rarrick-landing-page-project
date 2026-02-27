import { Home, DollarSign, FileCheck, Calendar } from "lucide-react";

const steps = [
  {
    icon: Home,
    title: "Tell Us About Your Property",
    description: "Fill out our simple form with your property address. It takes just 30 seconds.",
  },
  {
    icon: DollarSign,
    title: "Get Your Cash Offer",
    description: "We'll evaluate your property and present you with a fair, no-obligation cash offer within 24 hours.",
  },
  {
    icon: FileCheck,
    title: "We Handle Everything",
    description: "No repairs, no cleaning, no agent fees. We take care of all the paperwork and closing costs.",
  },
  {
    icon: Calendar,
    title: "Close On Your Timeline",
    description: "Choose your closing date — as fast as 7 days or on whatever schedule works best for you.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
            How It <span className="text-gold">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Selling your house has never been this simple. Four easy steps to your cash offer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="bg-card rounded-xl p-6 h-full border border-border hover:border-primary/30 transition-all hover:shadow-lg">
                <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xs font-semibold text-primary mb-2 block">Step {i + 1}</span>
                <h3 className="text-lg font-serif font-bold text-card-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
