<?php
/**
 * Template Name: Terms of Service
 * Complete Terms of Service matching live React site
 * @package QuoteMyFence
 */
get_header();
?>

<section class="hero-section" style="padding: 8rem 0 3rem;">
    <div class="container" style="max-width: 56rem;">
        <div class="hero-content text-center">
            <div class="hero-badge">
                <span>📄</span>
                <span><?php esc_html_e( 'Legal Information', 'quotemyfence' ); ?></span>
            </div>
            <h1 class="hero-title"><?php esc_html_e( 'Terms of Use', 'quotemyfence' ); ?><br><?php esc_html_e( '(Job Poster Terms & Website Terms)', 'quotemyfence' ); ?></h1>
            <p class="hero-description" style="margin: 0 auto;"><?php esc_html_e( 'Last updated: 25/12/2025', 'quotemyfence' ); ?></p>
        </div>
    </div>
</section>

<section style="padding: 4rem 0;">
    <div class="container" style="max-width: 56rem;">
        <div style="display: flex; flex-direction: column; gap: 2rem;">

            <!-- Section 1 -->
            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '1. Introduction', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;"><?php esc_html_e( 'Welcome to QuoteMyFence. These Terms of Use apply when you access or use our website and platform to find fencing contractors. By using our website and platform, you agree to these Terms.', 'quotemyfence' ); ?></p>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;"><?php esc_html_e( 'QuoteMyFence is operated in Australia and provides an online platform that connects property owners ("Users") with fencing contractors ("Contractors").', 'quotemyfence' ); ?></p>
                    <p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'QuoteMyFence does not provide fencing services and is not a party to any contract between Users and Contractors.', 'quotemyfence' ); ?></p>
                </div>
            </div>

            <!-- Section 2 -->
            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '2. Our Service', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'QuoteMyFence:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'collects information from Users about their fencing needs;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'shares this information with selected Contractors; and', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'provides Users with details of up to three Contractors who may contact them directly.', 'quotemyfence' ); ?></li>
                    </ul>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'We simply connect Users and Contractors.', 'quotemyfence' ); ?></p>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'We are not:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'an employer of Contractors;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'an agent of Contractors;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'responsible for any work performed;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'a provider of quotes, pricing, or advice.', 'quotemyfence' ); ?></li>
                    </ul>
                    <p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'All arrangements, negotiations, quotes, charges and contracts are exclusively between the User and the Contractor.', 'quotemyfence' ); ?></p>
                </div>
            </div>

            <!-- Section 3 -->
            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '3. No Guarantee of Contractor Availability', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'We do not guarantee that:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'you will receive 3 Contractors;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'any Contractor will contact you;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'any Contractor will be suitable for your needs;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'any Contractor will agree to perform your job.', 'quotemyfence' ); ?></li>
                    </ul>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'Some locations may have limited Contractor availability.', 'quotemyfence' ); ?></p>
                    <p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'We are not responsible if no Contractor responds or accepts your job.', 'quotemyfence' ); ?></p>
                </div>
            </div>

            <!-- Section 4 -->
            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '4. Contractor Information & Accuracy Disclaimer', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'Contractor information shown on QuoteMyFence may include:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'business names;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'number of reviews (as provided by the Contractor);', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'number of star ratings (as provided by the Contractor);', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'business descriptions;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'services offered;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'contact details.', 'quotemyfence' ); ?></li>
                    </ul>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'We do not verify:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'licences (except during initial onboarding, where we may check only if applicable in that state);', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'insurance;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'identity;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'experience;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'skills;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'qualifications;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'customer reviews or testimonials;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'star ratings;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'compliance with laws.', 'quotemyfence' ); ?></li>
                    </ul>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'After the initial onboarding checks, we do not continuously monitor or verify any Contractor information.', 'quotemyfence' ); ?></p>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'We rely solely on information provided by Contractors.', 'quotemyfence' ); ?></p>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'We do not guarantee its accuracy, completeness, or reliability.', 'quotemyfence' ); ?></p>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'Users must perform their own due diligence, including checking:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'customer reviews;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'licences (if required in their state);', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'insurance coverage;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'ABN records;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'experience;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'suitability for the job.', 'quotemyfence' ); ?></li>
                    </ul>
                    <p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'QuoteMyFence is not liable for any errors, omissions, misrepresentations, or false information provided by Contractors.', 'quotemyfence' ); ?></p>
                </div>
            </div>

            <!-- Section 5 -->
            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '5. No Endorsement', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'We do not endorse or recommend any particular Contractor.', 'quotemyfence' ); ?></p>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'Listing a Contractor on our platform does not imply:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'guarantee of quality;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'confirmation of licensing or insurance;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'affiliation or partnership;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'validation of past work.', 'quotemyfence' ); ?></li>
                    </ul>
                    <p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'Users choose Contractors entirely at their own risk.', 'quotemyfence' ); ?></p>
                </div>
            </div>

            <!-- Section 6 -->
            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '6. User Responsibilities', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'By using QuoteMyFence, Users agree to:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'provide accurate job details;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'allow their personal information to be passed to Contractors;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'conduct independent checks on each Contractor;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'enter into any service contract at their own risk;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'resolve any disputes directly with the Contractor.', 'quotemyfence' ); ?></li>
                    </ul>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'Users must not:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground));">
                        <li><?php esc_html_e( 'misuse or interfere with the QuoteMyFence website;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'mine or scrape data from the platform;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'upload any malicious code or harmful content.', 'quotemyfence' ); ?></li>
                    </ul>
                </div>
            </div>

            <!-- Sections 7-17 abbreviated for length - full content in actual file -->
            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '7. Contractors Contact Users Directly', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'When a User submits a job request:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'we share the User\'s details with selected Contractors;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Contractors may contact Users directly through phone, email, SMS or other means;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'QuoteMyFence is not responsible for any contact, communication, conduct, or outcomes.', 'quotemyfence' ); ?></li>
                    </ul>
                    <p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'Once details are shared, QuoteMyFence has no involvement in the communications or arrangements between the User and the Contractor.', 'quotemyfence' ); ?></p>
                </div>
            </div>

            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '8. Payments', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'QuoteMyFence:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'does not charge Users;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'does not accept payments from Users;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'does not handle any Contractor payments;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'is not involved in deposit rules, invoicing, pricing, or job guarantees.', 'quotemyfence' ); ?></li>
                    </ul>
                    <p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'Users handle all payments privately with Contractors.', 'quotemyfence' ); ?></p>
                </div>
            </div>

            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '9. Third-Party Services & Marketing', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'QuoteMyFence uses third-party services including but not limited to:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'hosting providers', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'CRM tools', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Google Analytics and marketing tools', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'cloud storage (Firebase)', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'email and communication services', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'optional subcontracted social media managers', 'quotemyfence' ); ?></li>
                    </ul>
                    <p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'We do not accept liability for any interruption caused by technology providers or marketing subcontractors.', 'quotemyfence' ); ?></p>
                </div>
            </div>

            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '10. No Mediation or Dispute Resolution', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'QuoteMyFence:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'does not mediate disputes;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'does not get involved in disagreements regarding workmanship, pricing, contracts, or communication;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'is not responsible for rectifying any issues between Users and Contractors.', 'quotemyfence' ); ?></li>
                    </ul>
                    <p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'All disputes must be handled directly between the User and Contractor.', 'quotemyfence' ); ?></p>
                </div>
            </div>

            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '11. Limitation of Liability', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'To the maximum extent permitted under Australian law, QuoteMyFence is not liable for:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'any loss, damage or injury resulting from interactions between Users and Contractors;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'contractor behaviour, conduct, performance, workmanship or negligence;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'inaccurate, incomplete, or outdated contractor information;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'failure of contractors to contact or quote Users;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'any financial loss, property damage, personal injury, or legal disputes;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'errors in job information submitted by Users;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'any indirect, incidental, consequential, exemplary or punitive damages.', 'quotemyfence' ); ?></li>
                    </ul>
                    <p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'We do not provide professional advice and Users must rely on their own judgment.', 'quotemyfence' ); ?></p>
                </div>
            </div>

            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '12. Indemnity', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'Users agree to indemnify and hold QuoteMyFence harmless from any claims, losses, damages, liabilities, costs, or legal fees arising from:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground));">
                        <li><?php esc_html_e( 'interactions with Contractors;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'reliance on Contractor information;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'misuse of our website or platform;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'breach of these Terms.', 'quotemyfence' ); ?></li>
                    </ul>
                </div>
            </div>

            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '13. Intellectual Property', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'QuoteMyFence owns all: website content, branding, logos, layout and design, software and underlying code.', 'quotemyfence' ); ?></p>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'Users may not copy, reuse, commercialise or distribute our content or create derivative works.', 'quotemyfence' ); ?></p>
                    <p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'Contractors grant us permission to display the information they provide on our platform.', 'quotemyfence' ); ?></p>
                </div>
            </div>

            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '14. Account Suspension & Access Restrictions', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'We may suspend or restrict access to the platform if:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground));">
                        <li><?php esc_html_e( 'required for system maintenance or security;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'a User breaches these Terms;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'unlawful activity is suspected;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'the platform is shut down or modified.', 'quotemyfence' ); ?></li>
                    </ul>
                </div>
            </div>

            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '15. Changes to These Terms', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'We may update these Terms at any time.', 'quotemyfence' ); ?></p>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'Changes will be posted on this page.', 'quotemyfence' ); ?></p>
                    <p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'Continued use of the platform after updates means you accept the revised Terms.', 'quotemyfence' ); ?></p>
                </div>
            </div>

            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '16. Governing Law', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'These Terms are governed by the laws of the State of Victoria, Australia.', 'quotemyfence' ); ?></p>
                    <p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'Any disputes are subject to the exclusive jurisdiction of Victorian courts.', 'quotemyfence' ); ?></p>
                </div>
            </div>

            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '17. Contact Us', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;"><?php esc_html_e( 'For questions about these Terms, please contact:', 'quotemyfence' ); ?></p>
                    <div style="color: hsl(var(--muted-foreground));">
                        <p style="font-weight: 600;"><?php esc_html_e( 'QuoteMyFence', 'quotemyfence' ); ?></p>
                        <p>Email: <?php echo esc_html( qmf_get_email() ); ?></p>
                        <p>Phone: <?php echo esc_html( qmf_get_phone() ); ?></p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<?php get_footer(); ?>
