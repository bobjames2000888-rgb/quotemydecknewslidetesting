<?php
/**
 * Template Name: Gate Installation
 * The template for Gate Installation page
 *
 * @package QuoteMyFence
 */

get_header();

$benefits = array(
    array('icon' => '🔒', 'title' => 'Enhanced Security', 'desc' => 'Secure your property with professional gate systems'),
    array('icon' => '📱', 'title' => 'Smart Automation', 'desc' => 'Remote control and smartphone integration'),
    array('icon' => '⚙️', 'title' => 'Custom Design', 'desc' => 'Gates designed to match your fence style'),
    array('icon' => '⚡', 'title' => 'Motor & Automation', 'desc' => 'Premium automatic motors with safety features'),
);

$features = array(
    'Custom-designed gates to match any fence',
    'Automatic motor installation available',
    'Intercom and access control systems',
    'Sliding and swing gate options',
    'Expert installation',
);

$gate_types = array(
    array('name' => 'Sliding Gates', 'desc' => 'Space-saving automatic'),
    array('name' => 'Swing Gates', 'desc' => 'Classic single or double'),
    array('name' => 'Pedestrian Gates', 'desc' => 'Walk-through access'),
    array('name' => 'Commercial Gates', 'desc' => 'Heavy-duty industrial'),
);
?>

<section class="hero-section">
    <div class="container">
        <div class="grid grid-2" style="align-items: center; gap: 3rem;">
            <div class="hero-content">
                <div class="hero-badge">
                    <span>🔐</span>
                    <span>Security & Convenience</span>
                </div>
                <h1 class="hero-title">Gate<br><span class="text-gradient">Installation Services</span></h1>
                <p class="hero-description">
                    Complete your property with a custom-designed gate system.
                </p>
                <div class="hero-buttons">
                    <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-primary btn-lg">Get 3 Free Quotes in Minutes</a>
                    <a href="#gate-types" class="btn btn-outline btn-lg">Gate Options</a>
                </div>
            </div>
            <div class="hero-image">
                <img src="<?php echo esc_url( get_template_directory_uri() . '/images/gate-hero.webp' ); ?>" alt="Gate Installation">
            </div>
        </div>
    </div>
</section>

<section class="section-muted">
    <div class="container">
        <div class="section-header">
            <h2>Why Install a Professional Gate?</h2>
        </div>
        <div class="grid grid-4">
            <?php foreach ($benefits as $benefit) : ?>
            <div class="card">
                <div class="card-content">
                    <div class="icon-box">
                        <span style="font-size: 1.5rem;"><?php echo $benefit['icon']; ?></span>
                    </div>
                    <h3><?php echo esc_html($benefit['title']); ?></h3>
                    <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem;"><?php echo esc_html($benefit['desc']); ?></p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <div class="grid grid-2" style="align-items: center; gap: 3rem;">
            <div>
                <h2>Premium Features & Technology</h2>
                <div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 2rem;">
                    <?php foreach ($features as $feature) : ?>
                    <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                        <div class="icon-box" style="width: 1.5rem; height: 1.5rem; border-radius: 50%; flex-shrink: 0;">
                            <span style="color: white; font-size: 0.75rem;">✓</span>
                        </div>
                        <span><?php echo esc_html($feature); ?></span>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
            <div class="hero-image" style="aspect-ratio: 1;">
                <img src="<?php echo esc_url( get_template_directory_uri() . '/images/gate-features.webp' ); ?>" alt="Gate Features">
            </div>
        </div>
    </div>
</section>

<section id="gate-types" class="section-muted">
    <div class="container">
        <div class="section-header">
            <h2>Gate Types</h2>
        </div>
        <div class="grid grid-4">
            <?php foreach ($gate_types as $type) : ?>
            <div class="card">
                <div class="card-content text-center">
                    <img src="<?php echo esc_url( get_template_directory_uri() . '/images/' . sanitize_title($type['name']) . '.png' ); ?>" alt="<?php echo esc_attr($type['name']); ?>" class="feature-icon">
                    <h3><?php echo esc_html($type['name']); ?></h3>
                    <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem;"><?php echo esc_html($type['desc']); ?></p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section>
    <div class="container" style="max-width: 800px;">
        <div class="cta-section">
            <h2>Ready to Install Your Gate?</h2>
            <p>Get free quotes today</p>
            <div class="cta-buttons">
                <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-secondary btn-lg">Get 3 Free Quotes Now</a>
                <a href="<?php echo esc_url( qmf_get_phone_link() ); ?>" class="btn btn-outline btn-lg" style="background: rgba(255,255,255,0.1); color: white; border-color: rgba(255,255,255,0.3);">Call <?php echo qmf_get_phone(); ?></a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
