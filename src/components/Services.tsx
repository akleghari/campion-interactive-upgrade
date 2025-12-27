import { useEffect, useRef, useState } from 'react';
import { 
  ShoppingCart, 
  Truck, 
  Warehouse, 
  Scale, 
  ArrowRight,
  Sparkles 
} from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'eCommerce Strategy',
      description:
        'Develop winning strategies for your online business with market analysis, platform optimization, and growth planning.',
      features: ['Market Analysis', 'Platform Selection', 'Growth Strategy'],
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Logistics Solutions',
      description:
        'Optimize your supply chain with end-to-end logistics management, from procurement to last-mile delivery.',
      features: ['Supply Chain', 'Distribution', 'Last-Mile Delivery'],
    },
    {
      icon: <Warehouse className="w-8 h-8" />,
      title: 'Warehousing',
      description:
        'Efficient storage and inventory management solutions tailored to your business needs and scale.',
      features: ['Inventory Management', 'Fulfillment', 'Quality Control'],
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'Regulatory Compliance',
      description:
        'Navigate complex regulatory frameworks with expert guidance on compliance and best practices.',
      features: ['Compliance Audit', 'Documentation', 'Risk Management'],
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-secondary/20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 font-body">
            <Sparkles className="w-4 h-4" />
            Our Services
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Solutions for{' '}
            <span className="text-gradient">Your Business</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            From strategic decisions to capability development, we provide end-to-end 
            solutions that drive real results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({
  icon,
  title,
  description,
  features,
  index,
  isVisible,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
  isVisible: boolean;
}) => (
  <div
    className="group relative glass-card p-6 hover:bg-secondary/40 transition-all duration-500 hover:-translate-y-2"
    style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: `all 0.6s ease ${index * 0.1 + 0.2}s`,
    }}
  >
    {/* Gradient Border on Hover */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/50 to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
    
    {/* Icon */}
    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 mb-6">
      {icon}
    </div>

    {/* Title */}
    <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
      {title}
    </h3>

    {/* Description */}
    <p className="text-muted-foreground font-body text-sm mb-6 leading-relaxed">
      {description}
    </p>

    {/* Features */}
    <ul className="space-y-2 mb-6">
      {features.map((feature) => (
        <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80 font-body">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          {feature}
        </li>
      ))}
    </ul>

    {/* Link */}
    <a
      href="#contact"
      className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link font-body"
    >
      Learn More
      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
    </a>
  </div>
);

export default Services;
