import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";
const TermsOfService = () => {
  useDocumentTitle("Terms of Service — QuoteMyDeck");
  const handleQuoteClick = () => {
    window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate"));
  };
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <FileText className="w-4 h-4" />
            <span className="text-sm font-medium">Legal Information</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Terms of Use (Job Poster Terms & Website Terms)
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
                Welcome to QuoteMyDeck. These Terms of Use apply when you access or use our website and platform to find deck building contractors. By using our website and platform, you agree to these Terms.
              </p>
              <p className="text-muted-foreground mb-4">
                QuoteMyDeck is operated in Australia and provides an online platform that connects property owners ("Users") with deck building contractors ("Contractors").
              </p>
              <p className="text-muted-foreground">
                QuoteMyDeck does not provide decking services and is not a party to any contract between Users and Contractors.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Our Service</h2>
              <p className="text-muted-foreground mb-4">
                QuoteMyDeck:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>collects information from Users about their decking needs;</li>
                <li>shares this information with selected Contractors; and</li>
                <li>provides Users with details of up to three Contractors who may contact them directly.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                We simply connect Users and Contractors.
              </p>
              <p className="text-muted-foreground mb-4">
                We are not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>an employer of Contractors;</li>
                <li>an agent of Contractors;</li>
                <li>responsible for any work performed;</li>
                <li>a provider of quotes, pricing, or advice.</li>
              </ul>
              <p className="text-muted-foreground">
                All arrangements, negotiations, quotes, charges and contracts are exclusively between the User and the Contractor.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. No Guarantee of Contractor Availability</h2>
              <p className="text-muted-foreground mb-4">
                We do not guarantee that:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>you will receive 3 Contractors;</li>
                <li>any Contractor will contact you;</li>
                <li>any Contractor will be suitable for your needs;</li>
                <li>any Contractor will agree to perform your job.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Some locations may have limited Contractor availability.
              </p>
              <p className="text-muted-foreground">
                We are not responsible if no Contractor responds or accepts your job.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Contractor Information & Accuracy Disclaimer</h2>
              <p className="text-muted-foreground mb-4">
                Contractor information shown on QuoteMyDeck may include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>business names;</li>
                <li>number of reviews (as provided by the Contractor);</li>
                <li>number of star ratings (as provided by the Contractor);</li>
                <li>business descriptions;</li>
                <li>services offered;</li>
                <li>contact details.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                We do not verify:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>licences (except during initial onboarding, where we may check only if applicable in that state);</li>
                <li>insurance;</li>
                <li>identity;</li>
                <li>experience;</li>
                <li>skills;</li>
                <li>qualifications;</li>
                <li>customer reviews or testimonials;</li>
                <li>star ratings;</li>
                <li>compliance with laws.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                After the initial onboarding checks, we do not continuously monitor or verify any Contractor information.
              </p>
              <p className="text-muted-foreground mb-4">
                We rely solely on information provided by Contractors.
              </p>
              <p className="text-muted-foreground mb-4">
                We do not guarantee its accuracy, completeness, or reliability.
              </p>
              <p className="text-muted-foreground mb-4">
                Users must perform their own due diligence, including checking:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>customer reviews;</li>
                <li>licences (if required in their state);</li>
                <li>insurance coverage;</li>
                <li>ABN records;</li>
                <li>experience;</li>
                <li>suitability for the job.</li>
              </ul>
              <p className="text-muted-foreground">
                QuoteMyDeck is not liable for any errors, omissions, misrepresentations, or false information provided by Contractors.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. No Endorsement</h2>
              <p className="text-muted-foreground mb-4">
                We do not endorse or recommend any particular Contractor.
              </p>
              <p className="text-muted-foreground mb-4">
                Listing a Contractor on our platform does not imply:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>guarantee of quality;</li>
                <li>confirmation of licensing or insurance;</li>
                <li>affiliation or partnership;</li>
                <li>validation of past work.</li>
              </ul>
              <p className="text-muted-foreground">
                Users choose Contractors entirely at their own risk.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. User Responsibilities</h2>
              <p className="text-muted-foreground mb-4">
                By using QuoteMyDeck, Users agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>provide accurate job details;</li>
                <li>allow their personal information to be passed to Contractors;</li>
                <li>conduct independent checks on each Contractor;</li>
                <li>enter into any service contract at their own risk;</li>
                <li>resolve any disputes directly with the Contractor.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Users must not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>misuse or interfere with the QuoteMyDeck website;</li>
                <li>mine or scrape data from the platform;</li>
                <li>upload any malicious code or harmful content.</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Contractors Contact Users Directly</h2>
              <p className="text-muted-foreground mb-4">
                When a User submits a job request:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>we share the User's details with selected Contractors;</li>
                <li>Contractors may contact Users directly through phone, email, SMS or other means;</li>
                <li>QuoteMyDeck is not responsible for any contact, communication, conduct, or outcomes.</li>
              </ul>
              <p className="text-muted-foreground">
                Once details are shared, QuoteMyDeck has no involvement in the communications or arrangements between the User and the Contractor.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Payments</h2>
              <p className="text-muted-foreground mb-4">
                QuoteMyDeck:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>does not charge Users;</li>
                <li>does not accept payments from Users;</li>
                <li>does not handle any Contractor payments;</li>
                <li>is not involved in deposit rules, invoicing, pricing, or job guarantees.</li>
              </ul>
              <p className="text-muted-foreground">
                Users handle all payments privately with Contractors.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Third-Party Services & Marketing</h2>
              <p className="text-muted-foreground mb-4">
                QuoteMyDeck uses third-party services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>hosting providers</li>
                <li>CRM tools</li>
                <li>Google Analytics and marketing tools</li>
                <li>cloud storage (Firebase)</li>
                <li>email and communication services</li>
                <li>optional subcontracted social media managers</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                We are not responsible for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>errors, downtime, loss, or failures caused by third-party providers;</li>
                <li>actions of subcontractors managing marketing or social content;</li>
                <li>content accuracy provided by Contractors in marketing or listings.</li>
              </ul>
              <p className="text-muted-foreground">
                We do not accept liability for any interruption caused by technology providers or marketing subcontractors.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. No Mediation or Dispute Resolution</h2>
              <p className="text-muted-foreground mb-4">
                QuoteMyDeck:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>does not mediate disputes;</li>
                <li>does not get involved in disagreements regarding workmanship, pricing, contracts, or communication;</li>
                <li>is not responsible for rectifying any issues between Users and Contractors.</li>
              </ul>
              <p className="text-muted-foreground">
                All disputes must be handled directly between the User and Contractor.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                To the maximum extent permitted under Australian law:
              </p>
              <p className="text-muted-foreground mb-4">
                QuoteMyDeck is not liable for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>any loss, damage or injury resulting from interactions between Users and Contractors;</li>
                <li>contractor behaviour, conduct, performance, workmanship or negligence;</li>
                <li>inaccurate, incomplete, or outdated contractor information;</li>
                <li>failure of contractors to contact or quote Users;</li>
                <li>any financial loss, property damage, personal injury, or legal disputes;</li>
                <li>errors in job information submitted by Users;</li>
                <li>any indirect, incidental, consequential, exemplary or punitive damages.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Our liability for any claim related to your use of our website or platform is limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>re-providing our platform service, or</li>
                <li>paying the cost of having the service re-provided.</li>
              </ul>
              <p className="text-muted-foreground">
                We do not provide professional advice and Users must rely on their own judgment.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Indemnity</h2>
              <p className="text-muted-foreground mb-4">
                Users agree to indemnify and hold QuoteMyDeck harmless from any claims, losses, damages, liabilities, costs, or legal fees arising from:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>interactions with Contractors;</li>
                <li>reliance on Contractor information;</li>
                <li>misuse of our website or platform;</li>
                <li>breach of these Terms.</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                QuoteMyDeck owns all:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>website content;</li>
                <li>branding;</li>
                <li>logos;</li>
                <li>layout and design;</li>
                <li>software and underlying code.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Users may not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>copy, reuse, commercialise or distribute our content;</li>
                <li>create derivative works;</li>
                <li>use our content for competing services.</li>
              </ul>
              <p className="text-muted-foreground">
                Contractors grant us permission to display the information they provide (business details, review counts, star rating counts, descriptions, etc.) on our platform.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Account Suspension & Access Restrictions</h2>
              <p className="text-muted-foreground mb-4">
                We may suspend or restrict access to the platform if:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>required for system maintenance or security;</li>
                <li>a User breaches these Terms;</li>
                <li>unlawful activity is suspected;</li>
                <li>the platform is shut down or modified.</li>
              </ul>
              <p className="text-muted-foreground">
                We may provide notice, but are not required to.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">15. Changes to These Terms</h2>
              <p className="text-muted-foreground mb-4">
                We may update these Terms from time to time.
              </p>
              <p className="text-muted-foreground mb-4">
                If significant changes occur, we will provide reasonable notice by updating the date at the top of this page.
              </p>
              <p className="text-muted-foreground">Continued use of the website or platform means acceptance of the updated Terms.</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">16. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These Terms are governed by the laws of Australia.
              </p>
              <p className="text-muted-foreground">
                Any disputes must be handled in the courts of the state or territory where QuoteMyDeck operates.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">17. Entire Agreement</h2>
              <p className="text-muted-foreground">
                These Terms constitute the entire agreement between the User and QuoteMyDeck and replace any previous discussions, representations or agreements.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">18. Disclaimer</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">18.1 General Information Disclaimer</h3>
              <p className="text-muted-foreground mb-4">
                QuoteMyDeck provides an online information and referral platform only. Any information, content or material available on this website is provided for general informational and illustrative purposes only.
              </p>
              <p className="text-muted-foreground mb-4">
                Nothing on this website constitutes professional, legal, technical, construction, engineering, safety, pricing, regulatory or financial advice. Users must not rely on website content as a substitute for independent professional advice.
              </p>
              <p className="text-muted-foreground mb-4">
                Use of this website and reliance on any information is entirely at your own risk.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">18.2 Third-Party Content & Supplied Information</h3>
              <p className="text-muted-foreground mb-4">
                This website may contain information, content or material supplied by:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>deck building contractors;</li>
                <li>third parties;</li>
                <li>marketing partners;</li>
                <li>subcontractors;</li>
                <li>contributors;</li>
                <li>external sources.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                QuoteMyDeck does not independently verify third-party information and makes no representations as to its accuracy, completeness, authenticity or reliability.
              </p>
              <p className="text-muted-foreground mb-4">
                All third-party content remains the responsibility of the party who supplied it. QuoteMyDeck is not responsible for errors, omissions or misleading statements in such content.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">18.3 Illustrative Images, Media & Examples</h3>
              <p className="text-muted-foreground mb-4">
                Images, photographs, videos, illustrations, diagrams and examples used on this website:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>may be stock images or externally sourced;</li>
                <li>may be supplied by contractors or third parties;</li>
                <li>are used for illustrative purposes only.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Such media may not represent:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>actual contractors;</li>
                <li>actual decking work;</li>
                <li>actual properties;</li>
                <li>real job outcomes, materials or workmanship.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                No reliance should be placed on any visual material as a representation of quality, results or performance.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">18.4 Testimonials, Reviews & Statements</h3>
              <p className="text-muted-foreground mb-4">
                Any testimonials, reviews, endorsements, ratings or statements appearing on this website:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>may not be verified;</li>
                <li>may not be genuine or accurate;</li>
                <li>may be supplied directly by contractors;</li>
                <li>may not reflect typical outcomes or experiences.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                QuoteMyDeck does not guarantee results, outcomes or experiences and does not endorse any testimonial or statement displayed.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">18.5 Pricing, Costs & Estimates</h3>
              <p className="text-muted-foreground mb-4">
                Any pricing information, cost estimates, examples, budgets or price ranges shown on this website:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>are indicative only;</li>
                <li>are provided for illustration purposes;</li>
                <li>may be outdated, incomplete or inaccurate;</li>
                <li>may not include all variables or costs.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Actual pricing, scope and final costs are determined solely between Users and Contractors. QuoteMyDeck does not guarantee pricing accuracy or affordability.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">18.6 Marketing, Blogs & Promotional Content</h3>
              <p className="text-muted-foreground mb-4">
                Blogs, guides, marketing materials, advertisements and social media content:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>may be created internally or by subcontractors;</li>
                <li>are general in nature only;</li>
                <li>may not be current, complete or accurate.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                QuoteMyDeck is not liable for reliance on marketing or promotional content.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">18.7 Third-Party Websites & External Links</h3>
              <p className="text-muted-foreground mb-4">
                This website may contain links to third-party websites or services. QuoteMyDeck:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>does not control third-party websites;</li>
                <li>is not responsible for their content, availability or accuracy;</li>
                <li>does not endorse third-party products or services.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Accessing third-party websites is at your own risk.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">18.8 Reliance & Assumption of Risk</h3>
              <p className="text-muted-foreground mb-4">
                Users acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>they assume all risks arising from use of the website;</li>
                <li>they are responsible for verifying information independently;</li>
                <li>QuoteMyDeck is not responsible for outcomes arising from reliance on website content.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">18.9 Severability</h3>
              <p className="text-muted-foreground">
                If any part of this Disclaimer is found unenforceable, the remaining provisions remain valid and enforceable.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">19. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Email: info@quotemydeck.com.au</p>
                <p>Phone: 0481 752 344</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default TermsOfService;
