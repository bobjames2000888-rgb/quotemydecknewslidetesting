<?php
/**
 * Template Name: Contact Page
 * @package QuoteMyFence
 */
get_header();
?>
<main id="main-content" class="site-main">
    <section class="page-hero"><div class="page-hero-overlay"></div><div class="container"><div class="page-hero-content">
        <div class="badge mb-6"><?php echo qmf_icon('message-square'); ?> We're Here to Help</div>
        <h1>Get in Touch with <span class="text-gradient">Our Expert Team</span></h1>
        <p>Have questions about fencing? Our friendly team is ready to help.</p>
    </div></div></section>
    <section class="section-sm" style="background:var(--muted);"><div class="container"><div class="contact-info-grid">
        <div class="contact-card"><div class="contact-icon"><?php echo qmf_icon('phone'); ?></div><h3 class="contact-title">Phone</h3><p class="contact-detail"><?php echo qmf_get_phone(); ?></p><p class="contact-subtext">Mon-Sat: 7am - 6pm</p></div>
        <div class="contact-card"><div class="contact-icon"><?php echo qmf_icon('mail'); ?></div><h3 class="contact-title">Email</h3><p class="contact-detail"><?php echo qmf_get_email(); ?></p><p class="contact-subtext">We reply within 24 hours</p></div>
        <div class="contact-card"><div class="contact-icon"><?php echo qmf_icon('map-pin'); ?></div><h3 class="contact-title">Service Areas</h3><p class="contact-detail">All Major Cities</p><p class="contact-subtext">Sydney, Melbourne, Brisbane & more</p></div>
        <div class="contact-card"><div class="contact-icon"><?php echo qmf_icon('clock'); ?></div><h3 class="contact-title">Business Hours</h3><p class="contact-detail">Mon-Sat: 7am - 6pm</p><p class="contact-subtext">Sun: Emergency only</p></div>
    </div></div></section>
    <section class="section"><div class="container"><div class="contact-form-section">
        <div><h2 class="mb-4">Send Us a Message</h2>
        <div class="contact-form">
            <form method="post" action="#">
                <div class="form-group"><label class="form-label" for="name">Full Name *</label><input type="text" id="name" name="name" class="form-input" placeholder="John Smith" required></div>
                <div class="form-group"><label class="form-label" for="email">Email Address *</label><input type="email" id="email" name="email" class="form-input" placeholder="john@example.com" required></div>
                <div class="form-group"><label class="form-label" for="phone">Phone Number *</label><input type="tel" id="phone" name="phone" class="form-input" placeholder="0400 000 000" required></div>
                <div class="form-group"><label class="form-label" for="message">Your Message *</label><textarea id="message" name="message" class="form-input" placeholder="Tell us about your fencing project..." required></textarea></div>
                <button type="submit" class="btn btn-primary btn-lg w-full">Send Message</button>
            </form>
        </div></div>
        <div>
            <div class="cta-box mb-8"><h3 class="text-xl font-semibold mb-4" style="color:white;">Need an Instant Quote?</h3><p style="color:rgba(255,255,255,0.9);" class="mb-6">Use our online quote calculator to get an estimated price in under 60 seconds.</p><a href="<?php echo esc_url(qmf_get_quote_url()); ?>" class="btn btn-white w-full">Get Instant Quote</a></div>
            <div class="card"><h3 class="text-xl font-semibold mb-4">Prefer to Call?</h3><p class="text-muted mb-4">Speak directly with our friendly team</p><a href="tel:<?php echo str_replace(' ', '', qmf_get_phone()); ?>" class="btn btn-outline w-full"><?php echo qmf_icon('phone'); ?> Call <?php echo qmf_get_phone(); ?></a></div>
        </div>
    </div></div></section>
</main>
<?php get_footer(); ?>