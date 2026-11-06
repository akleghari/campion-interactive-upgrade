import { Helmet } from 'react-helmet-async';
import { Clock, PoundSterling, Store, Check, ShoppingBag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const goContact = () => {
  window.location.href = '/#contact';
};

const features = [
  { icon: Clock, title: 'UK-based, UK hours', text: 'Real replies in your working day, not overnight.' },
  { icon: PoundSterling, title: 'Fixed monthly price', text: 'No hourly billing. No arguments about what counts as extra.' },
  { icon: Store, title: 'Store owners ourselves', text: 'We run live Shopify stores for UK and US customers.' },
];

const plans = [
  {
    name: 'Essentials',
    for: 'For small stores that change rarely',
    items: ['Monthly store health check', 'App and theme updates checked', 'Monthly broken link and checkout check', '1 small change a month', 'Reply within 2 working days'],
  },
  {
    name: 'Growth',
    badge: 'Most popular',
    for: 'For stores that add products and offers often',
    items: ['Everything in Essentials', 'Weekly link and checkout check', 'Up to 2 hours of changes a month', 'Product uploads and edits', 'SEO basics (titles, descriptions, alt text)', 'Short monthly email report', 'Reply next working day'],
  },
  {
    name: 'Pro',
    for: 'For busy stores with many products',
    items: ['Everything in Growth', 'App and theme updates tested before going live', 'Up to 5 hours of changes a month', 'Monthly report plus 30 minute call', 'Reply same working day'],
  },
];

const steps = [
  { title: 'Tell us about your store', text: 'A short form. No technical knowledge needed.' },
  { title: 'Free store check', text: 'We look over your store and send you a short list of what needs attention.' },
  { title: 'Pick a plan or a one-off fix', text: 'Or nothing at all. No pressure.' },
  { title: 'We get to work', text: 'Add us as a staff member on Shopify and we take it from there.' },
];

const faqs = [
  { q: 'Is the store check really free?', a: 'Yes. No cost and no obligation.' },
  { q: 'Do I need to move my store or change anything?', a: 'No. Your store, domain and apps stay exactly where they are. You add us as a staff account, and you can remove us at any time.' },
  { q: 'Will you have full control of my store?', a: 'Only the access we need. You choose our permissions in Shopify, and we never see your payment details.' },
  { q: 'What if I need more than my plan covers?', a: 'We tell you first and give you a fixed quote. Nothing is charged without your OK.' },
  { q: 'Can I cancel?', a: 'Yes. Plans are month to month with no contract.' },
  { q: "My site isn't on Shopify. Can you help?", a: "Tell us about it. If it's not a good fit, we'll say so honestly." },
  { q: 'Do you build new stores?', a: 'Our focus is looking after existing stores. For new builds, ask about our eCommerce Strategy service.' },
];

const checks = ['Checkout working', 'Apps up to date', 'Theme updated', 'Broken links: 0', 'Last health check: today'];

const StoreDashboard = () => (
  <div className="relative mx-auto w-full max-w-md" aria-hidden="true">
    <div className="absolute -inset-6 rounded-[2rem] blur-3xl opacity-60 pulse-glow" style={{ backgroundImage: 'var(--gradient-growth)' }} />
    <div className="relative glass-card p-6 rounded-2xl floating">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl btn-growth flex items-center justify-center text-primary-foreground">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <div>
            <div className="font-heading font-semibold text-foreground">Your Store</div>
            <div className="text-xs text-muted-foreground font-body">Store health</div>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold font-body">All good</span>
      </div>
      <ul className="space-y-2.5">
        {checks.map((c) => (
          <li key={c} className="flex items-center justify-between px-4 py-3 rounded-xl bg-secondary/40 border border-border/40">
            <span className="text-sm text-foreground/90 font-body">{c}</span>
            <span className="w-6 h-6 rounded-full bg-[hsl(var(--success))]/20 text-[hsl(var(--success))] flex items-center justify-center">
              <Check className="w-4 h-4" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const SectionHeading = ({ label, title }: { label: string; title: string }) => (
  <div className="text-center max-w-3xl mx-auto mb-12">
    <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 font-body">{label}</span>
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
  </div>
);

const StoreCare = () => (
  <>
    <Helmet>
      <title>Shopify Store Care | Campion Media</title>
      <meta name="description" content="Ongoing Shopify store care from a UK team: updates, health checks and small changes each month, at a fixed price." />
      <link rel="canonical" href="https://www.campionmedia.com/store-care" />
    </Helmet>

    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-20 overflow-x-clip">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[150px]" />
          <div className="container mx-auto px-6 relative z-10 max-w-6xl grid lg:grid-cols-2 gap-14 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
                Shopify <span className="text-gradient">Store Care</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/90 font-body mb-6">Your store, looked after. So you can run the business.</p>
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                We keep your Shopify store updated, tidy and selling. Fixed monthly price, no surprise invoices.
              </p>
              <Button variant="hero" size="lg" onClick={goContact}>Get a free store check</Button>
            </div>
            <StoreDashboard />
          </div>
        </section>

        {/* Features */}
        <section className="pb-24">
          <p className="container mx-auto px-6 max-w-2xl text-center text-muted-foreground font-body mb-10">
            We run our own Shopify stores, so we know what matters: a checkout that works, products that are up to date, and pages that load fast.
          </p>
          <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6 max-w-6xl">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="glass-card p-6 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary mb-5">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground font-body text-sm">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Plans */}
        <section className="relative py-24 bg-secondary/20">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="container mx-auto px-6 relative z-10 max-w-6xl">
            <SectionHeading label="Plans" title="Choose the care your store needs" />
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((p) => (
                <div key={p.name} className={`p-8 flex flex-col relative rounded-2xl ${p.badge ? 'growth-card md:scale-105 z-10' : 'glass-card'}`}>
                  {p.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold font-body">{p.badge}</span>
                  )}
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{p.name}</h3>
                  <p className="text-muted-foreground font-body text-sm mb-6">{p.for}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {p.items.map((i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/85 font-body">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />{i}
                      </li>
                    ))}
                  </ul>
                  <Button variant={p.badge ? 'default' : 'outline'} size="lg" className={`w-full ${p.badge ? 'btn-growth text-primary-foreground font-semibold hover:opacity-90' : ''}`} onClick={goContact}>Get a quote</Button>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground font-body max-w-2xl mx-auto mt-10">
              All plans are month to month. Cancel any time. Bigger jobs are quoted first, and nothing is charged without your OK. Not ready for a plan? We also do one-off fixes at a fixed quote.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-6xl">
            <SectionHeading label="How It Works" title="Four simple steps" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <div key={s.title} className="glass-card p-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-xl font-bold mb-5">{i + 1}</div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground font-body text-sm">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-secondary/20">
          <div className="container mx-auto px-6 max-w-3xl">
            <SectionHeading label="FAQ" title="Common questions" />
            <Accordion type="single" collapsible className="glass-card px-6">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className={i === faqs.length - 1 ? 'border-b-0' : 'border-border/50'}>
                  <AccordionTrigger className="font-heading text-left text-foreground hover:text-primary hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  </>
);

export default StoreCare;
