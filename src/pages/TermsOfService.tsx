import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Campion Media</title>
        <meta name="description" content="Terms of Service for Campion Media Limited. Read our terms governing the use of our website and consultancy services." />
        <link rel="canonical" href="https://www.campionmedia.com/terms-of-service" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground font-body mb-2">Campion Media Limited</p>
            <p className="text-muted-foreground font-body mb-2">Company Number: 10875806</p>
            <p className="text-sm text-muted-foreground font-body mb-12">Last updated: 25 February 2026</p>

            <section className="space-y-12 font-body text-foreground/90 leading-relaxed">
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">1. Introduction</h2>
                <p className="mb-4">These Terms of Service ("Terms") govern your use of the website www.campionmedia.com and any consultancy services provided by Campion Media Limited ("we", "us", "our"), a private company limited by shares incorporated in England and Wales (Company Number: 10875806).</p>
                <p>By accessing our website or engaging our services, you agree to these Terms. If you do not agree, please do not use the site or our services.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">2. About Us</h2>
                <p className="mb-4">Campion Media Limited has been operating since 20 July 2017, offering eCommerce strategy, logistics solutions, warehousing, and regulatory compliance consultancy across the EU, Middle East, and South Asia.</p>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li><strong className="text-foreground">Registered Office:</strong> 7 Bell Yard, London, England, WC2A 2JR</li>
                  <li><strong className="text-foreground">Email:</strong> info@campionmedia.com</li>
                  <li><strong className="text-foreground">Phone:</strong> +44 (0) 7407 200678</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">3. Use of the Website</h2>
                <p className="mb-4">You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use of the site. Prohibited behaviour includes:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Attempting to gain unauthorised access to the site or its servers</li>
                  <li>Transmitting malicious code or harmful data</li>
                  <li>Using the site to send unsolicited commercial communications</li>
                  <li>Scraping or data-mining the site without written permission</li>
                  <li>Using automated bots or crawlers without prior consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">4. Intellectual Property</h2>
                <p>All content on this website, including text, graphics, logos, the "Campion Media" brand, images, and design, is owned by or licensed to Campion Media Limited and protected by UK and international intellectual-property laws. You may not reproduce, distribute, or create derivative works from any content without our prior written consent.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">5. Services and Engagements</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Our consultancy services are provided under separate written agreements (Statements of Work, proposals, or contracts) agreed between Campion Media Limited and each client.</li>
                  <li>These Terms apply generally; in the event of a conflict between these Terms and a specific service agreement, the service agreement prevails.</li>
                  <li>All fees, timelines, deliverables, and scope will be set out in the relevant service agreement.</li>
                  <li>We reserve the right to decline any engagement at our sole discretion.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">6. Contact Form and Communications</h2>
                <p className="mb-4">When you submit an enquiry through our contact form, you confirm that:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>The information you provide (name, email, company, message) is accurate.</li>
                  <li>You consent to us using that information to respond to your enquiry and, if applicable, discuss potential services.</li>
                  <li>Your data will be handled in accordance with our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
                <p className="mb-4">To the fullest extent permitted by law:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>The website and its content are provided "as is" without warranties of any kind, express or implied.</li>
                  <li>We do not guarantee that the website will be uninterrupted, secure, or error-free.</li>
                  <li>Campion Media Limited shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the website.</li>
                  <li>Our total aggregate liability for any claim related to the website shall not exceed one hundred pounds sterling (GBP 100).</li>
                  <li>Nothing in these Terms excludes or limits liability for death or personal injury caused by negligence, fraud, or any liability that cannot be excluded under English law.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">8. Third-Party Links</h2>
                <p>Our website may contain links to third-party sites. We have no control over their content or practices and accept no responsibility for them. Visiting third-party links is at your own risk.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">9. Indemnification</h2>
                <p>You agree to indemnify and hold harmless Campion Media Limited, its directors, employees, and agents from any claims, losses, or damages (including legal fees) arising from your breach of these Terms or misuse of the website.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">10. Privacy and Data Protection</h2>
                <p>Your use of our website is also governed by our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>, which sets out how we collect, use, and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. By using this website, you acknowledge that you have read and understood our Privacy Policy.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">11. Termination</h2>
                <p>We reserve the right to restrict or terminate access to the website at any time, without notice, for any reason, including breach of these Terms.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">12. Governing Law and Jurisdiction</h2>
                <p>These Terms are governed by the laws of England and Wales. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">13. Changes to These Terms</h2>
                <p>We may revise these Terms at any time by updating this page. The "Last updated" date at the top will always reflect the current version. Continued use of the site after changes constitutes acceptance of the revised Terms.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">14. Severability</h2>
                <p>If any provision of these Terms is found to be unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">15. Contact</h2>
                <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground space-y-1">
                  <p className="font-semibold text-foreground">Campion Media Limited</p>
                  <p>Company Number: 10875806</p>
                  <p>Registered Office: 7 Bell Yard, London, England, WC2A 2JR</p>
                  <p>Contact: Ali Leghari</p>
                  <p>Email: <a href="mailto:info@campionmedia.com" className="text-primary hover:underline">info@campionmedia.com</a></p>
                  <p>Phone: +44 (0) 7407 200678</p>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;
