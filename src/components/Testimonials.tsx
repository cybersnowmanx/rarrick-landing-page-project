import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "They made the whole process so easy. We had a cash offer within 24 hours and closed in just 10 days. No stress at all!",
    name: "Sarah M.",
    detail: "Sold inherited property",
  },
  {
    quote: "I was behind on payments and facing foreclosure. Rarrick Property Solutions gave me a fair offer and helped me avoid the worst. Truly grateful.",
    name: "James T.",
    detail: "Avoided foreclosure",
  },
  {
    quote: "No repairs, no showings, no hassle. They bought my house as-is and I was able to move on my own timeline. Highly recommend!",
    name: "Linda R.",
    detail: "Sold as-is, no repairs",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
            What Our <span className="text-gold">Clients Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border border-border">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
