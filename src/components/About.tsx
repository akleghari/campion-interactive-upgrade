import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    'Strategic Decision Making',
    'Capability Development',
    'Regulatory Compliance',
    'Scalable Solutions',
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 font-body">
              About Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your Trusted Partner for{' '}
              <span className="text-gradient">Global Success</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-body leading-relaxed">
              Based in London since 2017, we've been empowering businesses across the EU, 
              Middle East & South Asia with our deep expertise in eCommerce, Logistics, 
              and Warehousing solutions.
            </p>
            <p className="text-muted-foreground mb-8 font-body leading-relaxed">
              Our first priority is always the interests of our clients, providing capability, 
              adaptability, and scalability. We lighten the load off your shoulders with 
              efficient and professional service.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-foreground font-body"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.5s ease ${index * 0.1 + 0.3}s`,
                  }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" className="group" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Discover Our Approach
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Content - Visual Element */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Main Card */}
              <div className="glass-card p-8 relative z-10">
                <div className="grid grid-cols-2 gap-6">
                  <MetricCard number="8+" label="Years of Excellence" delay={0} isVisible={isVisible} />
                  <MetricCard number="50+" label="Projects Delivered" delay={0.1} isVisible={isVisible} />
                  <MetricCard number="3" label="Continents Served" delay={0.2} isVisible={isVisible} />
                  <MetricCard number="100%" label="Client Satisfaction" delay={0.3} isVisible={isVisible} />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MetricCard = ({
  number,
  label,
  delay,
  isVisible,
}: {
  number: string;
  label: string;
  delay: number;
  isVisible: boolean;
}) => (
  <div
    className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
    style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'scale(1)' : 'scale(0.9)',
      transition: `all 0.5s ease ${delay + 0.4}s`,
    }}
  >
    <div className="text-3xl font-heading font-bold text-primary mb-1">{number}</div>
    <div className="text-sm text-muted-foreground font-body">{label}</div>
  </div>
);

export default About;
