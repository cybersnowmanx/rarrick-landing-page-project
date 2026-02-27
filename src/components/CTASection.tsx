const CTASection = () => {
  return (
    <section className="py-20 gradient-gold">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
          Ready to Sell Your House Fast?
        </h2>
        <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8 text-lg">
          Get your no-obligation cash offer today. No fees, no repairs, close on your timeline.
        </p>
        <a
          href="#offer"
          className="inline-flex bg-secondary text-secondary-foreground font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-all text-lg"
        >
          Get My Cash Offer Now
        </a>
      </div>
    </section>
  );
};

export default CTASection;
