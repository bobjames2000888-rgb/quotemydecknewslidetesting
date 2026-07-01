<?php
/**
 * Template Name: Aluminium Fencing
 * The template for Aluminium Fencing page
 *
 * @package QuoteMyFence
 */

get_header();

$benefits = array(
    array('icon' => '⚡', 'title' => 'Lightweight & Strong', 'desc' => 'Modern aluminium design that\'s easy to install yet incredibly durable'),
    array('icon' => '🛡️', 'title' => '100% Rust-Proof', 'desc' => 'Never worry about rust or corrosion, even in coastal environments'),
    array('icon' => '✨', 'title' => 'Sleek Modern Look', 'desc' => 'Contemporary powder-coated finish that elevates any property'),
    array('icon' => '🏊', 'title' => 'Pool Compliant', 'desc' => 'Meets all Australian pool safety standards and regulations'),
);

$features = array(
    'Premium powder-coated aluminium',
    'Available in 15+ modern colours',
    'Pool-safe certified installations',
    'Modular design for easy repairs',
    'UV and weather resistant',
);

$styles = array(
    array('name' => 'Classic Slat', 'desc' => 'Timeless horizontal design'),
    array('name' => 'Vertical Picket', 'desc' => 'Traditional elegance'),
    array('name' => 'Privacy Screen', 'desc' => 'Maximum privacy'),
    array('name' => 'Decorative Panel', 'desc' => 'Artistic modern style'),
);
?>

<section class="hero-section">
    <div class="container">
        <div class="grid grid-2" style="align-items: center; gap: 3rem;">
            <div class="hero-content">
                <div class="hero-badge">
                    <span>✨</span>
                    <span>Modern & Maintenance-Free</span>
                </div>
                <h1 class="hero-title">Aluminium<br><span class="text-gradient">Fencing Solutions</span></h1>
                <p class="hero-description">
                    Discover the perfect blend of modern aesthetics and lasting durability. 
                    Aluminium fencing is rust-proof, low maintenance, and built to last.
                </p>
                <div class="hero-buttons">
                    <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-primary btn-lg">Get 3 Free Quotes in Minutes</a>
                    <a href="#aluminium-styles" class="btn btn-outline btn-lg">View Styles</a>
                </div>
                <div class="flex gap-6 mt-8" style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">
                    <span>✓ Pool Certified</span>
                </div>
            </div>
            <div class="hero-image">
                <img src="<?php echo esc_url( get_template_directory_uri() . '/images/aluminium-hero.webp' ); ?>" alt="Aluminium Fence Installation">
            </div>
        </div>
    </div>
</section>

<section class="section-muted">
    <div class="container">
        <div class="section-header">
            <h2>Why Choose Aluminium Fencing?</h2>
            <p>The ultimate modern fencing solution with zero maintenance and maximum style</p>
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
                <h2>Superior Quality & Zero Maintenance</h2>
                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 2rem;">
                    Aluminium fencing systems are engineered for Australian conditions, 
                    offering unmatched durability without any ongoing maintenance requirements.
                </p>
                <div style="display: flex; flex-direction: column; gap: 1rem;">
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
                <img src="<?php echo esc_url( get_template_directory_uri() . '/images/aluminium-features.webp' ); ?>" alt="Aluminium Fencing Features">
            </div>
        </div>
    </div>
</section>

<section id="aluminium-styles" class="section-muted">
    <div class="container">
        <div class="section-header">
            <h2>Choose Your Style</h2>
            <p>Modern designs to complement any architectural style</p>
        </div>
        <div class="grid grid-4">
            <?php foreach ($styles as $style) : ?>
            <div class="card">
                <div class="card-content text-center">
                    <img src="<?php echo esc_url( get_template_directory_uri() . '/images/' . sanitize_title($style['name']) . '.png' ); ?>" alt="<?php echo esc_attr($style['name']); ?>" class="feature-icon">
                    <h3><?php echo esc_html($style['name']); ?></h3>
                    <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem;"><?php echo esc_html($style['desc']); ?></p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section>
    <div class="container" style="max-width: 800px;">
        <div class="cta-section">
            <h2>Ready to Install Your Aluminium Fence?</h2>
            <p>Get free quotes today and experience the modern elegance of aluminium fencing</p>
            <div class="cta-buttons">
                <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-secondary btn-lg">Get 3 Free Quotes Now</a>
                <a href="<?php echo esc_url( qmf_get_phone_link() ); ?>" class="btn btn-outline btn-lg" style="background: rgba(255,255,255,0.1); color: white; border-color: rgba(255,255,255,0.3);">Call <?php echo qmf_get_phone(); ?></a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
