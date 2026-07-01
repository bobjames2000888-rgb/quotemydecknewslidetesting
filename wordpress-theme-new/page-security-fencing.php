<?php
/**
 * Template Name: Security Fencing
 * The template for Security Fencing page
 *
 * @package QuoteMyFence
 */

get_header();

$benefits = array(
    array('icon' => '🛡️', 'title' => 'Maximum Protection', 'desc' => 'Heavy-duty construction designed to deter and prevent unauthorised access'),
    array('icon' => '🔒', 'title' => 'Anti-Climb Design', 'desc' => 'Specialised profiles and spikes make scaling virtually impossible'),
    array('icon' => '📹', 'title' => 'Integration Ready', 'desc' => 'Compatible with CCTV, sensors, and electronic access systems'),
    array('icon' => '⚠️', 'title' => 'Visible Deterrent', 'desc' => 'Professional appearance sends a clear security message'),
);

$features = array(
    '358 anti-climb mesh (prison mesh)',
    'Palisade and garrison styles',
    'Razor wire and barbed wire options',
    'Electronic gate integration',
    'Powder-coated corrosion protection',
    'Compliant with Australian security standards',
);

$applications = array(
    array('name' => 'Commercial', 'desc' => 'Warehouses & office complexes'),
    array('name' => 'Industrial', 'desc' => 'Factories & storage yards'),
    array('name' => 'Government', 'desc' => 'Schools & public facilities'),
    array('name' => 'Critical Infrastructure', 'desc' => 'Utilities & data centres'),
);
?>

<section class="hero-section">
    <div class="container">
        <div class="grid grid-2" style="align-items: center; gap: 3rem;">
            <div class="hero-content">
                <div class="hero-badge">
                    <span>🛡️</span>
                    <span>Maximum Protection</span>
                </div>
                <h1 class="hero-title">Security<br><span class="text-gradient">Fencing Systems</span></h1>
                <p class="hero-description">
                    Protect your assets with professional-grade security fencing. 
                    Anti-climb, anti-cut solutions for commercial and industrial properties.
                </p>
                <div class="hero-buttons">
                    <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-primary btn-lg">Get 3 Free Quotes in Minutes</a>
                    <a href="#security-applications" class="btn btn-outline btn-lg">Security Options</a>
                </div>
                <div class="flex gap-6 mt-8" style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">
                    <span>✓ Anti-Climb</span>
                    <span>✓ Anti-Cut</span>
                </div>
            </div>
            <div class="hero-image">
                <img src="<?php echo esc_url( get_template_directory_uri() . '/images/security-hero.webp' ); ?>" alt="Security Fence Installation">
            </div>
        </div>
    </div>
</section>

<section class="section-muted">
    <div class="container">
        <div class="section-header">
            <h2>Why Choose Security Fencing?</h2>
            <p>Professional-grade perimeter protection for high-value properties</p>
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
                <h2>Commercial-Grade Security Features</h2>
                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 2rem;">
                    Security fencing solutions meet the highest standards for 
                    perimeter protection, trusted by businesses across Australia.
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
                <img src="<?php echo esc_url( get_template_directory_uri() . '/images/security-features.webp' ); ?>" alt="Security Fencing Features">
            </div>
        </div>
    </div>
</section>

<section id="security-applications" class="section-muted">
    <div class="container">
        <div class="section-header">
            <h2>Security Applications</h2>
            <p>Tailored security solutions for every industry and application</p>
        </div>
        <div class="grid grid-4">
            <?php foreach ($applications as $app) : ?>
            <div class="card">
                <div class="card-content text-center">
                    <img src="<?php echo esc_url( get_template_directory_uri() . '/images/' . sanitize_title($app['name']) . '-security.png' ); ?>" alt="<?php echo esc_attr($app['name']); ?>" class="feature-icon">
                    <h3><?php echo esc_html($app['name']); ?></h3>
                    <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem;"><?php echo esc_html($app['desc']); ?></p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section>
    <div class="container" style="max-width: 800px;">
        <div class="cta-section">
            <h2>Ready to Secure Your Property?</h2>
            <p>Get a free security assessment and quotes for your perimeter protection needs</p>
            <div class="cta-buttons">
                <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-secondary btn-lg">Get 3 Free Quotes Now</a>
                <a href="<?php echo esc_url( qmf_get_phone_link() ); ?>" class="btn btn-outline btn-lg" style="background: rgba(255,255,255,0.1); color: white; border-color: rgba(255,255,255,0.3);">Call <?php echo qmf_get_phone(); ?></a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
