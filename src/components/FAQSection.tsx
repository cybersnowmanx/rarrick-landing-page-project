import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";
import house8 from "@/assets/house-8.jpg";

const faqs = [
  { q: "How does selling my house for cash work?", a: "It's simple — you fill out our form with your property address, we evaluate your home, and present you with a fair, no-obligation cash offer within 24 hours. If you accept, we handle all the paperwork and close on your timeline." },
  { q: "Do I need to make any repairs before selling?", a: "Absolutely not. We buy houses in any condition — as-is. No repairs, no cleaning, no renovations needed. You can even leave behind items you don't want." },
  { q: "Are there any fees or commissions?", a: "None at all. There are zero agent fees, zero commissions, and we cover all closing costs. The cash offer you accept is the amount you receive." },
  { q: "How fast can I close?", a: "We can close in as little as 7 days if you need to move quickly. But we're flexible — if you need more time, we'll work around your schedule." },
  { q: "What types of properties do you buy?", a: "We buy all types of residential properties — single-family homes, duplexes, condos, townhomes, and more. Whether it's occupied, vacant, outdated, or damaged, we're interested." },
  { q: "Is there any obligation if I request an offer?", a: "No obligation whatsoever. Requesting an offer is completely free and you're under no pressure to accept. We simply present your options and let you decide." },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about selling your house for cash.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[auto_1fr] gap-12 items-start max-w-5xl mx-auto">
          <ScrollReveal direction="left" delay={0.2}>
            <div className="hidden lg:block w-64 rounded-2xl overflow-hidden shadow-xl sticky top-8">
              <img src={house8} alt="Colonial style home" className="w-full h-[380px] object-cover" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-card-foreground hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
