import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-dark-surface py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Rarrick Property Solutions" className="h-14" />
          </div>
          <p className="text-dark-surface-foreground/40 text-sm text-center">
            We Buy Houses for Cash — As Is, No Fees
          </p>
          <p className="text-dark-surface-foreground/30 text-xs">
            © {new Date().getFullYear()} Rarrick Property Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
