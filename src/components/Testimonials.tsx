import { Star } from "lucide-react";
import house1 from "@/assets/house-1.jpg";
import house2 from "@/assets/house-2.jpg";
import house3 from "@/assets/house-3.jpg";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  { quote: "They made the whole process so easy. We had a cash offer within 24 hours and closed in just 10 days. No stress at all!", name: "Sarah M.", detail: "Sold inherited property", image: house1 },
  { quote: "I was behind on payments and facing foreclosure. Rarrick Property Solutions gave me a fair offer and helped me avoid the worst. Truly grateful.", name: "James T.", detail: "Avoided foreclosure", image: house2 },
  { quote: "No repairs, no showings, no hassle. They bought my house as-is and I was able to move on my own timeline. Highly recommend!", name: "Linda R.", detail: "Sold as-is, no repairs", image: house3 },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
              What Our <span className="text-gold">Clients Say</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.15} direction="up">
              <div className="bg-card rounded-xl overflow-hidden border border-border group h-full">
                <div className="h-44 overflow-hidden">
                  <img src={t.image} alt="Property sold" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-sm text-card-foreground leading-relaxed mb-4">"{t.quote}"</p>
                  <div>
                    <p className="font-semibold text-card-foreground">— {t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.detail}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
