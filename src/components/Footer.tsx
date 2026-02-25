import { ArrowUp } from 'lucide-react';
import campionLogo from '@/assets/campion-logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={campionLogo} 
              alt="Campion Media" 
              className="h-10 w-auto"
            />
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors font-body text-sm">
              Home
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-body text-sm">
              About
            </a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors font-body text-sm">
              Services
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-body text-sm">
              Contact
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-body">
            © {new Date().getFullYear()} Campion Media. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
