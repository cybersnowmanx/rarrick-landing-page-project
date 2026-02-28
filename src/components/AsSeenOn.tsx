const logos = [
  { name: "FOX", svg: (
    <svg viewBox="0 0 80 32" className="h-6 md:h-7 w-auto fill-current"><text x="0" y="26" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="28" letterSpacing="-1">FOX</text></svg>
  )},
  { name: "NBC", svg: (
    <svg viewBox="0 0 80 32" className="h-6 md:h-7 w-auto fill-current"><text x="0" y="26" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="28" letterSpacing="-1">NBC</text></svg>
  )},
  { name: "CBS", svg: (
    <svg viewBox="0 0 80 32" className="h-6 md:h-7 w-auto fill-current"><text x="0" y="26" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="28" letterSpacing="-1">CBS</text></svg>
  )},
  { name: "USA Today", svg: (
    <svg viewBox="0 0 140 32" className="h-6 md:h-7 w-auto fill-current"><text x="0" y="26" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="24" letterSpacing="-0.5">USA Today</text></svg>
  )},
  { name: "Yahoo!", svg: (
    <svg viewBox="0 0 110 32" className="h-6 md:h-7 w-auto fill-current"><text x="0" y="26" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="26" letterSpacing="-0.5">Yahoo!</text></svg>
  )},
];

const AsSeenOn = () => {
  return (
    <section className="py-6 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground text-center mb-4 font-medium">
          As Seen On
        </p>
        <div className="flex items-center justify-center gap-8 md:gap-14 flex-wrap text-muted-foreground/50">
          {logos.map((logo) => (
            <div key={logo.name} className="opacity-60 hover:opacity-100 transition-opacity">
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AsSeenOn;
