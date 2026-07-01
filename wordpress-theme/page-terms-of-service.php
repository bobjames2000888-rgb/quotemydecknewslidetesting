<?php
/**
 * Template Name: Terms of Service
 * @package QuoteMyFence
 */
get_header();
?>
<main id="main-content" class="site-main">
    <section class="page-hero"><div class="page-hero-overlay"></div><div class="container"><div class="page-hero-content">
        <div class="badge mb-6"><?php echo qmf_icon('shield'); ?> Legal Information</div>
        <h1>Terms of Use (Job Poster Terms & Website Terms)</h1>
        <p class="text-muted">Last updated: 25/12/2025</p>
    </div></div></section>
    <section class="legal-content"><div class="container max-w-4xl mx-auto">
        <div class="legal-section"><h2>1. Introduction</h2><p>Welcome to QuoteMyFence. These Terms of Use apply when you access or use our website and services to find fencing contractors. By using our website, you agree to these Terms.</p><p>QuoteMyFence is operated in Australia and provides an online platform that connects property owners ("Users") with fencing contractors ("Contractors").</p><p>QuoteMyFence does not provide fencing services and is not a party to any contract between Users and Contractors.</p></div>
        <div class="legal-section"><h2>2. Our Service</h2><p>QuoteMyFence collects information from Users about their fencing needs, shares this information with selected Contractors, and provides Users with details of up to three Contractors who may contact them directly.</p><p>We simply connect Users and Contractors. We are not an employer of Contractors, not an agent of Contractors, not responsible for any work performed, and not a provider of quotes, pricing, or advice.</p></div>
        <div class="legal-section"><h2>3. No Guarantee of Contractor Availability</h2><p>We do not guarantee that you will receive 3 Contractors, any Contractor will contact you, any Contractor will be suitable for your needs, or any Contractor will agree to perform your job.</p></div>
        <div class="legal-section"><h2>4. Contractor Information & Accuracy Disclaimer</h2><p>We do not verify licences (except during initial onboarding), insurance, identity, experience, skills, qualifications, customer reviews, star ratings, or compliance with laws. Users must perform their own due diligence.</p></div>
        <div class="legal-section"><h2>5. Limitation of Liability</h2><p>To the maximum extent permitted under Australian law, QuoteMyFence is not liable for any loss, damage or injury resulting from interactions between Users and Contractors.</p></div>
        <div class="legal-section"><h2>6. Contact Information</h2><p>For questions about these Terms of Service, please contact us at:</p><p>Email: <?php echo qmf_get_email(); ?><br>Phone: <?php echo qmf_get_phone(); ?></p></div>
    </div></section>
</main>
<?php get_footer(); ?>