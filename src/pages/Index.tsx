import HeroSection from "@/components/HeroSection";
import AsSeenOn from "@/components/AsSeenOn";
import HowItWorks from "@/components/HowItWorks";
import MidCTA from "@/components/MidCTA";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import WhoWeHelp from "@/components/WhoWeHelp";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AsSeenOn />
      <HowItWorks />
      <MidCTA />
      <WhyChooseUs />
      <WhoWeHelp />
      <Testimonials />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;