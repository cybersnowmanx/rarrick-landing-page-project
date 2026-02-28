import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
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
      <HowItWorks />
      <WhyChooseUs />
      <WhoWeHelp />
      <Testimonials />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
