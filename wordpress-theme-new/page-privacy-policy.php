<?php
/**
 * Template Name: Privacy Policy
 * Complete Privacy Policy matching live React site
 * @package QuoteMyFence
 */
get_header();
?>

<section class="hero-section" style="padding: 8rem 0 3rem;">
    <div class="container" style="max-width: 56rem;">
        <div class="hero-content text-center">
            <div class="hero-badge">
                <span>🛡️</span>
                <span><?php esc_html_e( 'Your Privacy Matters', 'quotemyfence' ); ?></span>
            </div>
            <h1 class="hero-title"><?php esc_html_e( 'Privacy Policy', 'quotemyfence' ); ?></h1>
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
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <?php esc_html_e( 'QuoteMyFence ("we", "our", "us") is committed to protecting your privacy and handling your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).', 'quotemyfence' ); ?>
                    </p>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;"><?php esc_html_e( 'This Privacy Policy explains:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'what information we collect,', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'how we use and store it,', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'who we share it with, and', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'your rights and choices.', 'quotemyfence' ); ?></li>
                    </ul>
                    <p style="color: hsl(var(--muted-foreground));">
                        <?php esc_html_e( 'By using our website or submitting your information, you agree to this Privacy Policy.', 'quotemyfence' ); ?>
                    </p>
                </div>
            </div>

            <!-- Section 2 -->
            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '2. What Personal Information We Collect', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;"><?php esc_html_e( 'We collect the following types of information when you use our website:', 'quotemyfence' ); ?></p>
                    
                    <h3 style="font-size: 1.125rem; font-weight: 600; margin: 1rem 0 0.75rem;"><?php esc_html_e( '2.1 Information You Provide', 'quotemyfence' ); ?></h3>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'When submitting a job request, you may provide:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'Full name', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Email address', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Phone number', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Job location or property address', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Details about your fencing job', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Any additional notes or attachments you choose to submit', 'quotemyfence' ); ?></li>
                    </ul>

                    <h3 style="font-size: 1.125rem; font-weight: 600; margin: 1rem 0 0.75rem;"><?php esc_html_e( '2.2 Automatically Collected Information', 'quotemyfence' ); ?></h3>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'Through cookies, analytics tools and third-party services, we may collect:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'IP address', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Device type', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Browser type', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Pages visited', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Time spent on the website', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Interactions with the website', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Referring websites or ads', 'quotemyfence' ); ?></li>
                    </ul>

                    <h3 style="font-size: 1.125rem; font-weight: 600; margin: 1rem 0 0.75rem;"><?php esc_html_e( '2.3 Contractor Information', 'quotemyfence' ); ?></h3>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'For Contractors who join our platform, we may collect:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground));">
                        <li><?php esc_html_e( 'Business name', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Contact details', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'ABN details', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Number of reviews (as supplied by the Contractor)', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Number of star ratings (as supplied by the Contractor)', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Business descriptions or service details', 'quotemyfence' ); ?></li>
                    </ul>
                </div>
            </div>

            <!-- Section 3 -->
            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '3. How We Use Your Information', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;"><?php esc_html_e( 'We use your information to:', 'quotemyfence' ); ?></p>

                    <h3 style="font-size: 1.125rem; font-weight: 600; margin: 1rem 0 0.75rem;"><?php esc_html_e( '3.1 Provide Our Core Service', 'quotemyfence' ); ?></h3>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'assess your job request;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'share your details with up to three fencing contractors;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'allow contractors to contact you directly.', 'quotemyfence' ); ?></li>
                    </ul>

                    <h3 style="font-size: 1.125rem; font-weight: 600; margin: 1rem 0 0.75rem;"><?php esc_html_e( '3.2 Improve, Maintain and Operate the Website', 'quotemyfence' ); ?></h3>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'track usage trends;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'analyse website performance;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'troubleshoot technical issues;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'run analytics and reporting.', 'quotemyfence' ); ?></li>
                    </ul>

                    <h3 style="font-size: 1.125rem; font-weight: 600; margin: 1rem 0 0.75rem;"><?php esc_html_e( '3.3 Marketing and Communication', 'quotemyfence' ); ?></h3>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'send service updates or confirmation emails;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'conduct remarketing or advertising through Google, Meta, or other platforms;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'provide relevant blog content and guides.', 'quotemyfence' ); ?></li>
                    </ul>

                    <p style="color: hsl(var(--muted-foreground)); font-weight: 600;"><?php esc_html_e( 'We will never sell your personal information.', 'quotemyfence' ); ?></p>
                </div>
            </div>

            <!-- Section 4 -->
            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '4. Sharing Your Personal Information', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;"><?php esc_html_e( 'We may share your information with the following parties:', 'quotemyfence' ); ?></p>

                    <h3 style="font-size: 1.125rem; font-weight: 600; margin: 1rem 0 0.75rem;"><?php esc_html_e( '4.1 Contractors', 'quotemyfence' ); ?></h3>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'We provide your contact details and job information to selected fencing contractors so they can contact you directly.', 'quotemyfence' ); ?></p>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'Once provided, QuoteMyFence has no control over:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'how Contractors use your information;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'how they contact you;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'how they manage your personal information.', 'quotemyfence' ); ?></li>
                    </ul>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;"><?php esc_html_e( 'Contractors are responsible for complying with their own privacy obligations.', 'quotemyfence' ); ?></p>

                    <h3 style="font-size: 1.125rem; font-weight: 600; margin: 1rem 0 0.75rem;"><?php esc_html_e( '4.2 Service Providers', 'quotemyfence' ); ?></h3>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'We use trusted third-party providers that may process your information:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'Firebase (Google Cloud Platform) – data storage, hosting, authentication, database', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Google Analytics / Google Marketing Platform – analytics and marketing', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Email delivery platforms (e.g., SendGrid, Mailgun, Gmail API)', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'CRM systems (HubSpot, Zoho, Monday, or others if added in future)', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Website hosting providers', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Subcontracted social media managers who run or assist with social content', 'quotemyfence' ); ?></li>
                    </ul>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;"><?php esc_html_e( 'These providers may store or process data outside Australia.', 'quotemyfence' ); ?></p>

                    <h3 style="font-size: 1.125rem; font-weight: 600; margin: 1rem 0 0.75rem;"><?php esc_html_e( '4.3 Legal Requirements', 'quotemyfence' ); ?></h3>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'We may disclose your information if required:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground));">
                        <li><?php esc_html_e( 'to comply with Australian law;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'to protect our rights, users, or platform;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'to respond to law enforcement requests.', 'quotemyfence' ); ?></li>
                    </ul>
                </div>
            </div>

            <!-- Section 5 -->
            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '5. Data Storage & Security', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;"><?php esc_html_e( 'Your data is stored securely using:', 'quotemyfence' ); ?></p>

                    <h3 style="font-size: 1.125rem; font-weight: 600; margin: 1rem 0 0.75rem;"><?php esc_html_e( '5.1 Firebase', 'quotemyfence' ); ?></h3>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'Data stored in Firebase Storage and/or Firestore', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Industry-standard encryption in transit and at rest', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Google-managed secure servers', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Access controls and authentication', 'quotemyfence' ); ?></li>
                    </ul>

                    <h3 style="font-size: 1.125rem; font-weight: 600; margin: 1rem 0 0.75rem;"><?php esc_html_e( '5.2 Internal Safeguards', 'quotemyfence' ); ?></h3>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'Restricted staff access', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Password and 2FA protection', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Secure device policies', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Data minimisation principles', 'quotemyfence' ); ?></li>
                    </ul>

                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'Despite our efforts, no method of transmission is 100% secure.', 'quotemyfence' ); ?></p>
                    <p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'We cannot guarantee absolute data security.', 'quotemyfence' ); ?></p>
                </div>
            </div>

            <!-- Section 6 -->
            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '6. Data Retention', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'We retain personal information only as long as necessary for:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'providing our services', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'legal, tax, or compliance obligations', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'resolving potential disputes', 'quotemyfence' ); ?></li>
                    </ul>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'We may:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'archive job submissions;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'retain contractor data for ongoing platform use;', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'store minimal metadata for analytics.', 'quotemyfence' ); ?></li>
                    </ul>
                    <p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'Users may request deletion at any time (see Section 9).', 'quotemyfence' ); ?></p>
                </div>
            </div>

            <!-- Section 7 -->
            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '7. Cookies & Tracking Technologies', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'QuoteMyFence may use:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'Cookies', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Google Analytics', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Google Ads remarketing pixels', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Facebook/Meta pixels', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Session tracking tools', 'quotemyfence' ); ?></li>
                    </ul>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'These help us analyse website usage and improve the service.', 'quotemyfence' ); ?></p>
                    <p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'You can disable cookies through your browser, but some features may not work correctly.', 'quotemyfence' ); ?></p>
                </div>
            </div>

            <!-- Section 8 -->
            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '8. Overseas Disclosure', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;"><?php esc_html_e( 'Because we use Firebase, Google Analytics, and certain third-party tools, your data may be stored or processed in countries outside Australia, including the United States, EU, or Asia-Pacific regions.', 'quotemyfence' ); ?></p>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;"><?php esc_html_e( 'These countries may have different privacy laws.', 'quotemyfence' ); ?></p>
                    <p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'By using our service, you consent to this overseas disclosure.', 'quotemyfence' ); ?></p>
                </div>
            </div>

            <!-- Section 9 -->
            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '9. Your Rights', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;"><?php esc_html_e( 'Under the Australian Privacy Principles (APPs), you have the right to:', 'quotemyfence' ); ?></p>

                    <h3 style="font-size: 1.125rem; font-weight: 600; margin: 1rem 0 0.75rem;"><?php esc_html_e( '9.1 Access Your Information', 'quotemyfence' ); ?></h3>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;"><?php esc_html_e( 'You may request a copy of the personal information we hold about you.', 'quotemyfence' ); ?></p>

                    <h3 style="font-size: 1.125rem; font-weight: 600; margin: 1rem 0 0.75rem;"><?php esc_html_e( '9.2 Correct Your Information', 'quotemyfence' ); ?></h3>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;"><?php esc_html_e( 'If your personal information is inaccurate or outdated, you may request correction.', 'quotemyfence' ); ?></p>

                    <h3 style="font-size: 1.125rem; font-weight: 600; margin: 1rem 0 0.75rem;"><?php esc_html_e( '9.3 Request Deletion', 'quotemyfence' ); ?></h3>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;"><?php esc_html_e( 'You may ask us to delete your personal information, subject to any legal obligations requiring retention.', 'quotemyfence' ); ?></p>

                    <h3 style="font-size: 1.125rem; font-weight: 600; margin: 1rem 0 0.75rem;"><?php esc_html_e( '9.4 Opt-Out of Marketing', 'quotemyfence' ); ?></h3>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;"><?php esc_html_e( 'You can unsubscribe from marketing emails at any time.', 'quotemyfence' ); ?></p>

                    <h3 style="font-size: 1.125rem; font-weight: 600; margin: 1rem 0 0.75rem;"><?php esc_html_e( '9.5 Opt-Out of Analytics', 'quotemyfence' ); ?></h3>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;"><?php esc_html_e( 'You may use browser tools to block analytics, cookies, or tracking.', 'quotemyfence' ); ?></p>

                    <p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'All requests can be made using the contact details in Section 12.', 'quotemyfence' ); ?></p>
                </div>
            </div>

            <!-- Section 10 -->
            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '10. Children\'s Privacy', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'Our service is not directed to children under 18.', 'quotemyfence' ); ?></p>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'We do not knowingly collect personal information from minors.', 'quotemyfence' ); ?></p>
                    <p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'If a child\'s data is found in our system, we will delete it promptly upon request.', 'quotemyfence' ); ?></p>
                </div>
            </div>

            <!-- Section 11 -->
            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '11. Third-Party Links', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'Our website may contain links to:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'fencing contractors', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'blogs', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'guides', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'external websites', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'social media accounts', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'advertising links', 'quotemyfence' ); ?></li>
                    </ul>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;"><?php esc_html_e( 'We are not responsible for the privacy practices of third-party websites.', 'quotemyfence' ); ?></p>
                    <p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'We encourage you to read their privacy policies.', 'quotemyfence' ); ?></p>
                </div>
            </div>

            <!-- Section 12 -->
            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '12. Contact Us', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;"><?php esc_html_e( 'If you have questions about this Privacy Policy or wish to make a request, you can contact us at:', 'quotemyfence' ); ?></p>
                    <div style="color: hsl(var(--muted-foreground));">
                        <p style="font-weight: 600;"><?php esc_html_e( 'QuoteMyFence – Privacy Officer', 'quotemyfence' ); ?></p>
                        <p>Email: <?php echo esc_html( qmf_get_email() ); ?></p>
                        <p>Phone: <?php echo esc_html( qmf_get_phone() ); ?></p>
                    </div>
                </div>
            </div>

            <!-- Section 13 -->
            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '13. Complaints', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;"><?php esc_html_e( 'If you believe your privacy has been breached, you may:', 'quotemyfence' ); ?></p>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                        <li><?php esc_html_e( 'Contact us directly to resolve the issue; or', 'quotemyfence' ); ?></li>
                        <li><?php esc_html_e( 'Lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au', 'quotemyfence' ); ?></li>
                    </ul>
                </div>
            </div>

            <!-- Section 14 -->
            <div class="card">
                <div class="card-content" style="padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;"><?php esc_html_e( '14. Changes to This Policy', 'quotemyfence' ); ?></h2>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;"><?php esc_html_e( 'We may update this Privacy Policy from time to time.', 'quotemyfence' ); ?></p>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;"><?php esc_html_e( 'Updates will be published on this page.', 'quotemyfence' ); ?></p>
                    <p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'Continued use of the website after any changes constitutes acceptance of the revised policy.', 'quotemyfence' ); ?></p>
                </div>
            </div>

        </div>
    </div>
</section>

<?php get_footer(); ?>
