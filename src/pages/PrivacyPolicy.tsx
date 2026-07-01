import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";
const PrivacyPolicy = () => {
  useDocumentTitle("Privacy Policy — QuoteMyDeck");
  const handleQuoteClick = () => {
    window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate"));
  };
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Your Privacy Matters</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: 25/12/2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                QuoteMyDeck ("we", "our", "us") is committed to protecting your privacy and handling your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
              </p>
              <p className="text-muted-foreground mb-4">
                This Privacy Policy explains:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>what information we collect,</li>
                <li>how we use and store it,</li>
                <li>who we share it with, and</li>
                <li>your rights and choices.</li>
              </ul>
              <p className="text-muted-foreground">
                By using our website or submitting your information, you agree to this Privacy Policy.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. What Personal Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect the following types of information when you use our website:
              </p>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">2.1 Information You Provide</h3>
              <p className="text-muted-foreground mb-4">
                When submitting a job request, you may provide:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Job location or property address</li>
                <li>Details about your decking job</li>
                <li>Any additional notes or attachments you choose to submit</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-muted-foreground mb-4">
                Through cookies, analytics tools and third-party services, we may collect:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>IP address</li>
                <li>Device type</li>
                <li>Browser type</li>
                <li>Pages visited</li>
                <li>Time spent on the website</li>
                <li>Interactions with the website</li>
                <li>Referring websites or ads</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">2.3 Contractor Information</h3>
              <p className="text-muted-foreground mb-4">
                For Contractors who join our platform, we may collect:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Business name</li>
                <li>Contact details</li>
                <li>ABN details</li>
                <li>Number of reviews (as supplied by the Contractor)</li>
                <li>Number of star ratings (as supplied by the Contractor)</li>
                <li>Business descriptions or service details</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use your information to:
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3">3.1 Provide Our Core Service</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>assess your job request;</li>
                <li>share your details with up to three deck builders;</li>
                <li>allow contractors to contact you directly.</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">3.2 Improve, Maintain and Operate the Website</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>track usage trends;</li>
                <li>analyse website performance;</li>
                <li>troubleshoot technical issues;</li>
                <li>run analytics and reporting.</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">3.3 Marketing and Communication</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>send service updates or confirmation emails;</li>
                <li>conduct remarketing or advertising through Google, Meta, or other platforms;</li>
                <li>provide relevant blog content and guides.</li>
              </ul>

              <p className="text-muted-foreground">
                We will never sell your personal information.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Sharing Your Personal Information</h2>
              <p className="text-muted-foreground mb-4">
                We may share your information with the following parties:
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3">4.1 Contractors</h3>
              <p className="text-muted-foreground mb-4">
                We provide your contact details and job information to selected deck builders so they can contact you directly.
              </p>
              <p className="text-muted-foreground mb-4">
                Once provided, QuoteMyDeck has no control over:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>how Contractors use your information;</li>
                <li>how they contact you;</li>
                <li>how they manage your personal information.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Contractors are responsible for complying with their own privacy obligations.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3">4.2 Service Providers</h3>
              <p className="text-muted-foreground mb-4">
                We use trusted third-party providers that may process your information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Firebase (Google Cloud Platform) – data storage, hosting, authentication, database</li>
                <li>Google Analytics / Google Marketing Platform – analytics and marketing</li>
                <li>Email delivery platforms (e.g., SendGrid, Mailgun, Gmail API)</li>
                <li>CRM systems (HubSpot, Zoho, Monday, or others if added in future)</li>
                <li>Website hosting providers</li>
                <li>Subcontracted social media managers who run or assist with social content</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                These providers may store or process data outside Australia.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3">4.3 Legal Requirements</h3>
              <p className="text-muted-foreground mb-4">
                We may disclose your information if required:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>to comply with Australian law;</li>
                <li>to protect our rights, users, or platform;</li>
                <li>to respond to law enforcement requests.</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Storage & Security</h2>
              <p className="text-muted-foreground mb-4">
                Your data is stored securely using:
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3">5.1 Firebase</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Data stored in Firebase Storage and/or Firestore</li>
                <li>Industry-standard encryption in transit and at rest</li>
                <li>Google-managed secure servers</li>
                <li>Access controls and authentication</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">5.2 Internal Safeguards</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Restricted staff access</li>
                <li>Password and 2FA protection</li>
                <li>Secure device policies</li>
                <li>Data minimisation principles</li>
              </ul>

              <p className="text-muted-foreground mb-4">
                Despite our efforts, no method of transmission is 100% secure.
              </p>
              <p className="text-muted-foreground">
                We cannot guarantee absolute data security.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground mb-4">
                We retain personal information only as long as necessary for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>providing our services</li>
                <li>legal, tax, or compliance obligations</li>
                <li>resolving potential disputes</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                We may:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>archive job submissions;</li>
                <li>retain contractor data for ongoing platform use;</li>
                <li>store minimal metadata for analytics.</li>
              </ul>
              <p className="text-muted-foreground">
                Users may request deletion at any time (see Section 9).
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies & Tracking Technologies</h2>
              <p className="text-muted-foreground mb-4">
                QuoteMyDeck may use:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Cookies</li>
                <li>Google Analytics</li>
                <li>Google Ads remarketing pixels</li>
                <li>Facebook/Meta pixels</li>
                <li>Session tracking tools</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                These help us analyse website usage and improve the service.
              </p>
              <p className="text-muted-foreground">
                You can disable cookies through your browser, but some features may not work correctly.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Overseas Disclosure</h2>
              <p className="text-muted-foreground mb-4">
                Because we use Firebase, Google Analytics, and certain third-party tools, your data may be stored or processed in countries outside Australia, including the United States, EU, or Asia-Pacific regions.
              </p>
              <p className="text-muted-foreground mb-4">
                These countries may have different privacy laws.
              </p>
              <p className="text-muted-foreground">
                By using our service, you consent to this overseas disclosure.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                Under the Australian Privacy Principles (APPs), you have the right to:
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3">9.1 Access Your Information</h3>
              <p className="text-muted-foreground mb-4">
                You may request a copy of the personal information we hold about you.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3">9.2 Correct Your Information</h3>
              <p className="text-muted-foreground mb-4">
                If your personal information is inaccurate or outdated, you may request correction.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3">9.3 Request Deletion</h3>
              <p className="text-muted-foreground mb-4">
                You may ask us to delete your personal information, subject to any legal obligations requiring retention.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3">9.4 Opt-Out of Marketing</h3>
              <p className="text-muted-foreground mb-4">
                You can unsubscribe from marketing emails at any time.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3">9.5 Opt-Out of Analytics</h3>
              <p className="text-muted-foreground mb-4">
                You may use browser tools to block analytics, cookies, or tracking.
              </p>

              <p className="text-muted-foreground">
                All requests can be made using the contact details in Section 12.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Children's Privacy</h2>
              <p className="text-muted-foreground mb-4">
                Our service is not directed to children under 18.
              </p>
              <p className="text-muted-foreground mb-4">
                We do not knowingly collect personal information from minors.
              </p>
              <p className="text-muted-foreground">
                If a child's data is found in our system, we will delete it promptly upon request.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Third-Party Links</h2>
              <p className="text-muted-foreground mb-4">
                Our website may contain links to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>deck builders</li>
                <li>blogs</li>
                <li>guides</li>
                <li>external websites</li>
                <li>social media accounts</li>
                <li>advertising links</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                We are not responsible for the privacy practices of third-party websites.
              </p>
              <p className="text-muted-foreground">
                We encourage you to read their privacy policies.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or wish to make a request, you can contact us at:
              </p>
              <div className="text-muted-foreground">
                <p className="font-semibold">QuoteMyDeck – Privacy Officer</p>
                <p>Email: info@quotemydeck.com.au</p>
                <p>Phone: 0481 752 344</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Complaints</h2>
              <p className="text-muted-foreground mb-4">
                If you believe we have breached the Australian Privacy Principles, please contact us first.
              </p>
              <p className="text-muted-foreground mb-4">
                If we cannot resolve your complaint, you may contact:
              </p>
              <div className="text-muted-foreground">
                <p className="font-semibold">Office of the Australian Information Commissioner (OAIC)</p>
                <p>Website: https://www.oaic.gov.au</p>
                <p>Phone: 1300 363 992</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this policy from time to time.
              </p>
              <p className="text-muted-foreground mb-4">
                The "Last Updated" date at the top of this page reflects the most recent changes.
              </p>
              <p className="text-muted-foreground">
                Continued use of the website constitutes acceptance of the updated Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default PrivacyPolicy;