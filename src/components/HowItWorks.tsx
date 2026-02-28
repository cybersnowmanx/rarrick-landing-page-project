import ScrollReveal from "./ScrollReveal";

const steps = [
  { num: "01", title: "Tell Us About Your Property", description: "Fill out our quick form with your property address and contact info. It takes just 30 seconds." },
  { num: "02", title: "Get Your Cash Offer", description: "We evaluate your property and present you with a fair, no-obligation cash offer within 24 hours." },
  { num: "03", title: "Close On Your Timeline", description: "Choose your closing date — as fast as 7 days. We handle all paperwork and closing costs." },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
              How It <span className="text-gold">Works</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Selling your house has never been this simple. Three easy steps to your cash offer.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.15} direction="up">
              <div className="bg-card rounded-2xl p-8 h-full border border-border hover:border-primary/30 transition-all hover:shadow-lg text-center">
                <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center mx-auto mb-5">
                  <span className="text-lg font-bold text-primary-foreground">{step.num}</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-card-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;