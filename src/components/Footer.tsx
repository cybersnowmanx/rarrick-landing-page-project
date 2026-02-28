import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import house3 from "@/assets/house-3.jpg";
import TwoStepForm from "./TwoStepForm";
import ScrollReveal from "./ScrollReveal";

const PHONE = "(555) 123-4567";
const PHONE_HREF = "tel:+15551234567";

const Footer = () => {
  return (
    <footer>
      {/* Footer CTA with form */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={house3} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark-surface/85" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_440px] gap-12 items-start">
            {/* Left - Contact Info */}
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-surface-foreground">
                  Get a Cash Offer <span className="text-gold">Today</span>
                </h2>
                <p className="text-dark-surface-foreground/70 text-lg leading-relaxed">
                  Contact us or fill out the form. We'll present you with a fair offer or strategy within 24 hours.
                </p>

                <div className="space-y-4 pt-4">
                  <a href={PHONE_HREF} className="flex items-center gap-3 text-dark-surface-foreground hover:text-gold transition-colors">
                    <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="font-medium">{PHONE}</span>
                  </a>
                  <a href="mailto:info@rarrickproperty.com" className="flex items-center gap-3 text-dark-surface-foreground hover:text-gold transition-colors">
                    <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="font-medium">info@rarrickproperty.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-dark-surface-foreground/70">
                    <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="font-medium">Serving homeowners nationwide</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Form */}
            <ScrollReveal direction="right" delay={0.1}>
              <div id="offer-footer">
                <TwoStepForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-secondary py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <img src={logo} alt="Rarrick Property Solutions" className="h-12" />
            <p className="text-secondary-foreground/60 text-sm text-center">
              We Buy Houses for Cash — As Is, No Fees
            </p>
            <p className="text-secondary-foreground/40 text-xs">
              © {new Date().getFullYear()} Rarrick Property Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;