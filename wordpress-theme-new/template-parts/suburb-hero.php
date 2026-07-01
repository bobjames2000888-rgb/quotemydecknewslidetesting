<?php
/**
 * Template Part: Suburb Hero Section
 * @package QuoteMyFence
 */
$suburb_name = isset($args['suburb']) ? $args['suburb'] : 'Melbourne';
?>
<section class="hero-section">
    <div class="container">
        <div class="hero-grid">
            <div class="hero-content">
                <div class="hero-badge"><span>📍</span><span>Local <?php echo esc_html($suburb_name); ?> Fencing Experts</span></div>
                <h1 class="hero-title"><?php echo esc_html($suburb_name); ?><br><span class="text-gradient">Fencing Services</span></h1>
                <p class="hero-description">Professional fencing installation and repairs in <?php echo esc_html($suburb_name); ?>. Get free quotes from verified local contractors.</p>
                <div class="hero-buttons">
                    <a href="<?php echo esc_url(qmf_get_quote_url()); ?>" class="btn btn-primary btn-lg">Get 3 Free Quotes</a>
                    <a href="<?php echo esc_url(qmf_get_phone_link()); ?>" class="btn btn-outline btn-lg">Call <?php echo qmf_get_phone(); ?></a>
                </div>
                <div class="hero-trust">
                    <div class="trust-item"><span class="trust-icon">✓</span> No obligation quotes</div>
                    <div class="trust-item"><span class="trust-icon">✓</span> Licensed contractors only</div>
                    <div class="trust-item"><span class="trust-icon">✓</span> 100% Free service</div>
                </div>
            </div>
            <div class="hero-features">
                <div class="feature-box"><div class="feature-icon">🏠</div><div class="feature-content"><h3>Trusted by <?php echo esc_html($suburb_name); ?> Homeowners</h3><p>Local families trust us for quality fencing</p></div></div>
                <div class="feature-box"><div class="feature-icon">⚡</div><div class="feature-content"><h3>Fast Local Quotes</h3><p>Get quotes from <?php echo esc_html($suburb_name); ?> contractors in minutes</p></div></div>
                <div class="feature-box"><div class="feature-icon">🏆</div><div class="feature-content"><h3>Quality Guaranteed</h3><p>All work backed by comprehensive warranties</p></div></div>
            </div>
        </div>
    </div>
</section>
