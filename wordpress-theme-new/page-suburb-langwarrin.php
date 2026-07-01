<?php
/**
 * Template Name: Suburb - Langwarrin
 * @package QuoteMyFence
 */
get_header();
$suburb_name = 'Langwarrin';
$suburb_slug = 'langwarrin';
?>

<section class="hero-section">
    <div class="container">
        <div class="hero-grid">
            <div class="hero-content">
                <div class="hero-badge">
                    <span>📍</span>
                    <span>Local <?php echo esc_html($suburb_name); ?> Fencing Experts</span>
                </div>
                <h1 class="hero-title"><?php echo esc_html($suburb_name); ?><br><span class="text-gradient">Fencing Services</span></h1>
                <p class="hero-description">Professional fencing installation and repairs in <?php echo esc_html($suburb_name); ?>. Get free quotes from verified local contractors who know the area.</p>
                <div class="hero-buttons">
                    <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-primary btn-lg">Get 3 Free Quotes</a>
                    <a href="<?php echo esc_url( qmf_get_phone_link() ); ?>" class="btn btn-outline btn-lg">Call <?php echo qmf_get_phone(); ?></a>
                </div>
                <div class="hero-trust">
                    <div class="trust-item"><span class="trust-icon">✓</span> No obligation quotes</div>
                    <div class="trust-item"><span class="trust-icon">✓</span> Licensed contractors only</div>
                    <div class="trust-item"><span class="trust-icon">✓</span> 100% Free service</div>
                </div>
            </div>
            <div class="hero-features">
                <div class="feature-box">
                    <div class="feature-icon">🏠</div>
                    <div class="feature-content">
                        <h3>Trusted by <?php echo esc_html($suburb_name); ?> Homeowners</h3>
                        <p>Local families trust us for quality fencing solutions</p>
                    </div>
                </div>
                <div class="feature-box">
                    <div class="feature-icon">⚡</div>
                    <div class="feature-content">
                        <h3>Fast Local Quotes</h3>
                        <p>Get quotes from <?php echo esc_html($suburb_name); ?> contractors in minutes</p>
                    </div>
                </div>
                <div class="feature-box">
                    <div class="feature-icon">🏆</div>
                    <div class="feature-content">
                        <h3>Quality Guaranteed</h3>
                        <p>All work backed by comprehensive warranties</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_template_part('template-parts/how-it-works'); ?>

<section class="section-muted" id="fence-types">
    <div class="container">
        <div class="section-header text-center">
            <h2>Popular Fencing Options in <?php echo esc_html($suburb_name); ?></h2>
            <p>Choose from our range of quality fencing solutions perfect for <?php echo esc_html($suburb_name); ?> properties</p>
        </div>
        <?php get_template_part('template-parts/fence-types-grid'); ?>
    </div>
</section>

<?php get_template_part('template-parts/reviews-section'); ?>

<section id="faq">
    <div class="container" style="max-width: 800px;">
        <div class="section-header text-center">
            <h2><?php echo esc_html($suburb_name); ?> Fencing FAQs</h2>
            <p>Common questions about fencing in <?php echo esc_html($suburb_name); ?></p>
        </div>
        <div class="accordion">
            <div class="accordion-item">
                <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('active')">
                    How much does fencing cost in <?php echo esc_html($suburb_name); ?>?
                    <span>+</span>
                </button>
                <div class="accordion-content">
                    Fencing costs in <?php echo esc_html($suburb_name); ?> vary by material: Colorbond $75-150/m, Timber $65-120/m, Aluminium $170-300/m. Get accurate quotes by using our free service.
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('active')">
                    Do I need council approval for fencing in <?php echo esc_html($suburb_name); ?>?
                    <span>+</span>
                </button>
                <div class="accordion-content">
                    In <?php echo esc_html($suburb_name); ?>, fences under 2m typically don't require a permit. However, pool fencing and heritage overlays may have specific requirements. Our contractors can advise on local regulations.
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('active')">
                    How long does fence installation take in <?php echo esc_html($suburb_name); ?>?
                    <span>+</span>
                </button>
                <div class="accordion-content">
                    Most residential fencing projects in <?php echo esc_html($suburb_name); ?> are completed within 1-3 days, depending on the size and complexity. Our local contractors work efficiently to minimize disruption.
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('active')">
                    What's the best fence type for <?php echo esc_html($suburb_name); ?> homes?
                    <span>+</span>
                </button>
                <div class="accordion-content">
                    <?php echo esc_html($suburb_name); ?> homes commonly choose Colorbond for durability and low maintenance, or timber for a natural aesthetic. The best choice depends on your property style and budget.
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_template_part('template-parts/cta-section', null, array('suburb' => $suburb_name)); ?>

<?php get_footer(); ?>
