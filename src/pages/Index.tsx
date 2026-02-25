import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Campion Media | eCommerce, Logistics & Warehousing Consultancy</title>
        <meta
          name="description"
          content="Strategic expertise in eCommerce, Logistics, and Warehousing. Campion Media delivers real solutions and measurable results across EU, Middle East & South Asia."
        />
        <meta name="keywords" content="ecommerce, logistics, warehousing, consultancy, London, business strategy" />
        <link rel="canonical" href="https://www.campionmedia.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </>
  );
};

export default Index;
