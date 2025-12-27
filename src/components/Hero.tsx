import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, TrendingUp, Shield } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Global network"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 z-0" />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-body">
              Trusted Partner Since 2017
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Elevate Your</span>
            <br />
            <span className="text-gradient">Business Growth</span>
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 font-body leading-relaxed">
            Strategic expertise in eCommerce, Logistics, and Warehousing. 
            We deliver real solutions and measurable results across EU, Middle East & South Asia.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="hero" size="xl" className="group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <StatCard
              icon={<Globe className="w-6 h-6" />}
              value="3+"
              label="Global Regions"
            />
            <StatCard
              icon={<TrendingUp className="w-6 h-6" />}
              value="8+"
              label="Years Experience"
            />
            <StatCard
              icon={<Shield className="w-6 h-6" />}
              value="100%"
              label="Client Focused"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => (
  <div className="glass-card p-6 hover:scale-105 transition-transform duration-300 group">
    <div className="flex items-center justify-center gap-4">
      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
        {icon}
      </div>
      <div className="text-left">
        <div className="text-3xl font-heading font-bold text-foreground">{value}</div>
        <div className="text-sm text-muted-foreground font-body">{label}</div>
      </div>
    </div>
  </div>
);

export default Hero;
