<?php
/**
 * Template Name: Privacy Policy
 * @package QuoteMyFence
 */
get_header();
?>
<main id="main-content" class="site-main">
    <section class="page-hero"><div class="page-hero-overlay"></div><div class="container"><div class="page-hero-content">
        <div class="badge mb-6"><?php echo qmf_icon('shield'); ?> Your Privacy Matters</div>
        <h1>Privacy Policy</h1>
        <p class="text-muted">Last updated: 25/12/2025</p>
    </div></div></section>
    <section class="legal-content"><div class="container max-w-4xl mx-auto">
        <div class="legal-section"><h2>1. Introduction</h2><p>QuoteMyFence ("we", "our", "us") is committed to protecting your privacy and handling your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).</p><p>This Privacy Policy explains what information we collect, how we use and store it, who we share it with, and your rights and choices.</p><p>By using our website or submitting your information, you agree to this Privacy Policy.</p></div>
        <div class="legal-section"><h2>2. What Personal Information We Collect</h2><h3>2.1 Information You Provide</h3><p>When submitting a job request, you may provide:</p><ul><li>Full name</li><li>Email address</li><li>Phone number</li><li>Job location or property address</li><li>Details about your fencing job</li></ul><h3>2.2 Automatically Collected Information</h3><p>Through cookies, analytics tools and third-party services, we may collect IP address, device type, browser type, pages visited, and interactions with the website.</p></div>
        <div class="legal-section"><h2>3. How We Use Your Information</h2><p>We use your information to assess your job request, share your details with up to three fencing contractors, allow contractors to contact you directly, track usage trends, analyse website performance, and send service updates.</p><p>We will never sell your personal information.</p></div>
        <div class="legal-section"><h2>4. Sharing Your Personal Information</h2><p>We provide your contact details and job information to selected fencing contractors so they can contact you directly. We also use trusted third-party providers including Firebase, Google Analytics, and email delivery platforms.</p></div>
        <div class="legal-section"><h2>5. Contact Us</h2><p>If you have questions about this Privacy Policy, contact us at:</p><p><strong>QuoteMyFence – Privacy Officer</strong><br>Email: <?php echo qmf_get_email(); ?><br>Phone: <?php echo qmf_get_phone(); ?></p></div>
    </div></section>
</main>
<?php get_footer(); ?>