<?php
/**
 * Template Name: Steel Fencing
 * The template for Steel Fencing page
 *
 * @package QuoteMyFence
 */

get_header();

$benefits = array(
    array('icon' => '🛡️', 'title' => 'Ultimate Strength', 'desc' => 'Steel provides unmatched structural strength and impact resistance'),
    array('icon' => '🔨', 'title' => 'Built to Last', 'desc' => 'Properly treated steel fencing can last 50+ years with minimal maintenance'),
    array('icon' => '⚙️', 'title' => 'Versatile Options', 'desc' => 'Available in tubular, flat bar, and fabricated panel designs'),
    array('icon' => '🎨', 'title' => 'Custom Finishes', 'desc' => 'Powder-coated or galvanised in a wide range of colours'),
);

$features = array(
    'Hot-dipped galvanised steel construction',
    'Powder-coated finish in 50+ colours',
    'Tubular, flat bar & panel options',
    'Custom heights and configurations',
    'Gate and automation compatible',
);

$styles = array(
    array('name' => 'Tubular Steel', 'desc' => 'Classic round tube design'),
    array('name' => 'Flat Bar', 'desc' => 'Modern sleek appearance'),
    array('name' => 'Garrison', 'desc' => 'Traditional security style'),
    array('name' => 'Custom Fabricated', 'desc' => 'Bespoke designs to order'),
);
?>

<section class="hero-section">
    <div class="container">
        <div class="grid grid-2" style="align-items: center; gap: 3rem;">
            <div class="hero-content">
                <div class="hero-badge">
                    <span>💪</span>
                    <span>Strength & Durability</span>
                </div>
                <h1 class="hero-title">Steel<br><span class="text-gradient">Fencing Solutions</span></h1>
                <p class="hero-description">
                    Discover the ultimate in fencing strength and longevity. 
                    Steel fencing combines industrial durability with elegant design.
                </p>
                <div class="hero-buttons">
                    <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-primary btn-lg">Get 3 Free Quotes in Minutes</a>
                    <a href="#steel-styles" class="btn btn-outline btn-lg">View Styles</a>
                </div>
                <div class="flex gap-6 mt-8" style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">
                    <span>✓ Long lifespan</span>
                    <span>✓ Galvanised Steel</span>
                </div>
            </div>
            <div class="hero-image">
                <img src="<?php echo esc_url( get_template_directory_uri() . '/images/steel-hero.webp' ); ?>" alt="Steel Fence Installation">
            </div>
        </div>
    </div>
</section>

<section class="section-muted">
    <div class="container">
        <div class="section-header">
            <h2>Why Choose Steel Fencing?</h2>
            <p>The strongest fencing material for lasting security and style</p>
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
                <h2>Industrial-Grade Quality</h2>
                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 2rem;">
                    Steel fencing is manufactured to the highest Australian standards, 
                    using premium materials and advanced coating technologies.
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
                <img src="<?php echo esc_url( get_template_directory_uri() . '/images/steel-features.webp' ); ?>" alt="Steel Fencing Features">
            </div>
        </div>
    </div>
</section>

<section id="steel-styles" class="section-muted">
    <div class="container">
        <div class="section-header">
            <h2>Steel Fencing Styles</h2>
            <p>From classic tubular to modern flat bar designs</p>
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
            <h2>Ready to Install Your Steel Fence?</h2>
            <p>Get free quotes today and experience the strength of premium steel fencing</p>
            <div class="cta-buttons">
                <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-secondary btn-lg">Get 3 Free Quotes Now</a>
                <a href="<?php echo esc_url( qmf_get_phone_link() ); ?>" class="btn btn-outline btn-lg" style="background: rgba(255,255,255,0.1); color: white; border-color: rgba(255,255,255,0.3);">Call <?php echo qmf_get_phone(); ?></a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
