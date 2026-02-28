import house4 from "@/assets/house-4.jpg";

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={house4} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark-surface/80" />
      </div>
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-surface-foreground mb-4">
          Ready to Sell Your House <span className="text-gold">Fast</span>?
        </h2>
        <p className="text-dark-surface-foreground/70 max-w-lg mx-auto mb-8 text-lg">
          Get your no-obligation cash offer today. No fees, no repairs, close on your timeline.
        </p>
        <a
          href="#offer"
          className="inline-flex gradient-gold text-primary-foreground font-semibold px-8 py-4 rounded-lg shadow-gold hover:opacity-90 transition-all text-lg"
        >
          Get My Cash Offer Now
        </a>
      </div>
    </section>
  );
};

export default CTASection;
