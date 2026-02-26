import { Helmet } from 'react-helmet-async';
import { resetCookieConsent } from '@/components/CookieBanner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Campion Media</title>
        <meta name="description" content="Privacy Policy for Campion Media Limited. Learn how we collect, use, and protect your personal data." />
        <link rel="canonical" href="https://www.campionmedia.com/privacy-policy" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground font-body mb-2">Campion Media Limited</p>
            <p className="text-muted-foreground font-body mb-2">Company Number: 10875806</p>
            <p className="text-sm text-muted-foreground font-body mb-12">Last updated: 25 February 2026</p>

            <section className="space-y-12 font-body text-foreground/90 leading-relaxed">
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">1. Who We Are</h2>
                <p className="mb-4">
                  Campion Media Limited ("we", "us", "our") is a private company limited by shares, incorporated in England and Wales on 20 July 2017 under the Companies Act 2006. We provide consultancy services in eCommerce, logistics, and warehousing across the EU, Middle East, and South Asia.
                </p>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li><strong className="text-foreground">Company Name:</strong> Campion Media Limited</li>
                  <li><strong className="text-foreground">Company Number:</strong> 10875806</li>
                  <li><strong className="text-foreground">Registered Office:</strong> 7 Bell Yard, London, England, WC2A 2JR</li>
                  <li><strong className="text-foreground">Data Protection Contact:</strong> Ali Leghari</li>
                  <li><strong className="text-foreground">Email:</strong> info@campionmedia.com</li>
                  <li><strong className="text-foreground">Phone:</strong> +44 (0) 7407 200678</li>
                  <li><strong className="text-foreground">Website:</strong> www.campionmedia.com</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">2. What Data We Collect</h2>
                <p className="mb-4">When you use our website or engage with our services, we may collect the following categories of personal data:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Identity Data:</strong> Full name, company name</li>
                  <li><strong className="text-foreground">Contact Data:</strong> Email address, telephone number</li>
                  <li><strong className="text-foreground">Enquiry Data:</strong> Messages and project details submitted via our contact form</li>
                  <li><strong className="text-foreground">Technical Data:</strong> IP address, browser type and version, time-zone setting, operating system, pages visited, referring URL</li>
                  <li><strong className="text-foreground">Cookie and Analytics Data:</strong> Google Analytics identifiers, cookie consent preferences (see Section 7)</li>
                </ul>
                <p className="mt-4">We do not collect any special-category (sensitive) personal data.</p>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">3. How We Collect Your Data</h2>
                <p>We collect personal data through direct interactions (contact form submissions, email correspondence), automated technologies (cookies, server logs, Google Analytics), and third-party sources where applicable.</p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">4. How and Why We Use Your Data</h2>
                <p className="mb-4">We process personal data only where we have a lawful basis under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Respond to your enquiry or contact form submission:</strong> Legitimate interest; performance of a contract</li>
                  <li><strong className="text-foreground">Provide and manage our consultancy services:</strong> Performance of a contract</li>
                  <li><strong className="text-foreground">Send service-related communications:</strong> Legitimate interest</li>
                  <li><strong className="text-foreground">Send marketing communications (only with your consent):</strong> Consent</li>
                  <li><strong className="text-foreground">Analyse website usage via Google Analytics:</strong> Legitimate interest (with cookie consent where required)</li>
                  <li><strong className="text-foreground">Maintain security and prevent fraud:</strong> Legitimate interest</li>
                  <li><strong className="text-foreground">Meet legal or regulatory obligations:</strong> Legal obligation</li>
                </ul>
                <p className="mt-4">Where we rely on legitimate interest, we have carried out a balancing test to ensure your rights are not overridden.</p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">5. Who We Share Your Data With</h2>
                <p className="mb-4">We may share your personal data with the following categories of recipients:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Hosting and infrastructure providers:</strong> GitHub Pages, Lovable (GPT Engineer), Cloudflare</li>
                  <li><strong className="text-foreground">Contact form processor:</strong> Web3Forms (for delivering contact form submissions to us)</li>
                  <li><strong className="text-foreground">Analytics provider:</strong> Google Analytics (Google LLC)</li>
                  <li><strong className="text-foreground">Professional advisers:</strong> Solicitors, accountants, and auditors where required</li>
                  <li><strong className="text-foreground">Regulatory or law-enforcement bodies:</strong> Where we are legally obliged to disclose data</li>
                </ul>
                <p className="mt-4">We do not sell your personal data to any third party.</p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">6. International Transfers</h2>
                <p>Because we operate across the EU, Middle East, and South Asia, and use service providers based outside the UK (including Google LLC in the United States), your data may be transferred internationally. Where this occurs, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses (SCCs) approved by the UK Information Commissioner's Office, or reliance on an adequacy decision.</p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">7. Cookies</h2>
                <p className="mb-4">Our website uses cookies and similar technologies. We display a GDPR-compliant cookie consent banner, and non-essential cookies are only set after you provide consent.</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Strictly Necessary cookies:</strong> Essential for the site to function (e.g. cookie consent preference). Provider: Campion Media.</li>
                  <li><strong className="text-foreground">Analytics cookies:</strong> Understand how visitors use the site, measure page views and sessions. Provider: Google Analytics.</li>
                  <li><strong className="text-foreground">Third-Party / Functional cookies:</strong> Set by embedded services such as hosting provider scripts. Provider: Cloudflare, GitHub Pages.</li>
                </ul>
                <p className="mt-4">
                  You can manage or withdraw cookie consent at any time via the{' '}
                  <button
                    onClick={resetCookieConsent}
                    className="text-primary hover:underline cursor-pointer bg-transparent border-none p-0 font-body text-sm inline"
                  >
                    cookie consent banner
                  </button>{' '}
                  or your browser settings. For more information on Google Analytics cookies, visit:{' '}
                  <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://policies.google.com/technologies/cookies
                  </a>
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">8. How Long We Keep Your Data</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Contact form enquiries:</strong> Up to 24 months after our last communication, unless a client relationship is established.</li>
                  <li><strong className="text-foreground">Client project data:</strong> Duration of the engagement plus 6 years (to meet legal and accounting obligations).</li>
                  <li><strong className="text-foreground">Google Analytics data:</strong> 26 months (Google's default retention period), then automatically deleted.</li>
                  <li><strong className="text-foreground">Cookie consent records:</strong> 12 months from the date consent was given.</li>
                </ul>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">9. Your Rights Under UK GDPR</h2>
                <p className="mb-4">Under the UK GDPR, you have the following rights in relation to your personal data:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Right of access (Article 15):</strong> Request a copy of the data we hold about you.</li>
                  <li><strong className="text-foreground">Right to rectification (Article 16):</strong> Ask us to correct inaccurate or incomplete data.</li>
                  <li><strong className="text-foreground">Right to erasure (Article 17):</strong> Ask us to delete your data ("right to be forgotten").</li>
                  <li><strong className="text-foreground">Right to restrict processing (Article 18):</strong> Ask us to limit how we use your data.</li>
                  <li><strong className="text-foreground">Right to data portability (Article 20):</strong> Receive your data in a structured, machine-readable format.</li>
                  <li><strong className="text-foreground">Right to object (Article 21):</strong> Object to processing based on legitimate interest or direct marketing.</li>
                  <li><strong className="text-foreground">Right to withdraw consent:</strong> Where processing is based on consent, withdraw it at any time without affecting prior processing.</li>
                  <li><strong className="text-foreground">Rights related to automated decision-making (Article 22):</strong> We do not carry out automated decision-making or profiling.</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please email{' '}
                  <a href="mailto:info@campionmedia.com" className="text-primary hover:underline">info@campionmedia.com</a>{' '}
                  with the subject line "Data Subject Request". We will respond within one calendar month of receiving your verified request.
                </p>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">10. Right to Complain</h2>
                <p className="mb-4">If you are dissatisfied with how we handle your personal data, you have the right to lodge a complaint with the UK supervisory authority:</p>
                <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground space-y-1">
                  <p className="font-semibold text-foreground">Information Commissioner's Office (ICO)</p>
                  <p>Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ico.org.uk</a></p>
                  <p>Telephone: 0303 123 1113</p>
                  <p>Address: Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</p>
                </div>
                <p className="mt-4">
                  We would appreciate the opportunity to address your concerns before you contact the ICO, so please reach out to us first at{' '}
                  <a href="mailto:info@campionmedia.com" className="text-primary hover:underline">info@campionmedia.com</a>.
                </p>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">11. Children's Privacy</h2>
                <p>Our website and services are not directed at individuals under the age of 18. We do not knowingly collect personal data from children. If we become aware that we have inadvertently collected data from a child, we will take steps to delete it promptly.</p>
              </div>

              {/* Section 12 */}
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">12. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The "Last updated" date at the top will always reflect the latest version. We encourage you to review this policy periodically.</p>
              </div>

              {/* Section 13 */}
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">13. Contact Us</h2>
                <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground space-y-1">
                  <p className="font-semibold text-foreground">Campion Media Limited</p>
                  <p>Company Number: 10875806</p>
                  <p>Registered Office: 7 Bell Yard, London, England, WC2A 2JR</p>
                  <p>Data Protection Contact: Ali Leghari</p>
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

export default PrivacyPolicy;
