<?php
/**
 * Template Name: Pool Fencing
 * The template for Pool Fencing page
 *
 * @package QuoteMyFence
 */

get_header();

$benefits = array(
    array('icon' => '🛡️', 'title' => 'Safety Compliant', 'desc' => 'Meets all Australian pool safety standards and council regulations'),
    array('icon' => '👁️', 'title' => 'Clear Visibility', 'desc' => 'Maintain supervision of the pool area with unobstructed views'),
    array('icon' => '👶', 'title' => 'Child Safe', 'desc' => 'Self-closing, self-latching gates and non-climbable designs'),
    array('icon' => '📋', 'title' => 'Certified Install', 'desc' => 'Installation by licensed professionals with compliance certificates'),
);

$features = array(
    'Compliant with AS 1926.1 pool fencing standards',
    'Self-closing and self-latching gate mechanisms',
    'Non-climbable design requirements met',
    'Glass, aluminium, and steel options',
    'Council inspection ready installations',
    'Compliance certificate provided',
);

$materials = array(
    array('name' => 'Frameless Glass', 'desc' => 'Premium unobstructed views'),
    array('name' => 'Semi-Frameless', 'desc' => 'Glass panels with posts'),
    array('name' => 'Aluminium', 'desc' => 'Modern tubular or flat bar'),
    array('name' => 'Steel Tubular', 'desc' => 'Classic pool safe design'),
);
?>

<section class="hero-section">
    <div class="container">
        <div class="grid grid-2" style="align-items: center; gap: 3rem;">
            <div class="hero-content">
                <div class="hero-badge">
                    <span>✓</span>
                    <span>Safety Certified</span>
                </div>
                <h1 class="hero-title">Pool<br><span class="text-gradient">Fencing Solutions</span></h1>
                <p class="hero-description">
                    Keep your family safe with fully compliant pool fencing. 
                    Beautiful designs that meet all Australian safety standards.
                </p>
                <div class="hero-buttons">
                    <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-primary btn-lg">Get 3 Free Quotes in Minutes</a>
                    <a href="#pool-materials" class="btn btn-outline btn-lg">View Options</a>
                </div>
                <div class="flex gap-6 mt-8" style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">
                    <span>✓ AS 1926.1 Compliant</span>
                    <span>✓ Council Certified</span>
                </div>
            </div>
            <div class="hero-image">
                <img src="<?php echo esc_url( get_template_directory_uri() . '/images/pool-hero.webp' ); ?>" alt="Pool Fence Installation">
            </div>
        </div>
    </div>
</section>

<section class="section-muted">
    <div class="container">
        <div class="section-header">
            <h2>Why Choose Our Pool Fencing Installers?</h2>
            <p>Safety, style, and compliance in every pool fencing installation</p>
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
                <h2>Full Compliance</h2>
                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 2rem;">
                    Pool fence installations need to meet Australian Standard AS 1926.1. 
                    The Pool Fencing Contractors handle all compliance requirements and provide certification.
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
                <img src="<?php echo esc_url( get_template_directory_uri() . '/images/pool-features.webp' ); ?>" alt="Pool Fencing Compliance">
            </div>
        </div>
    </div>
</section>

<section id="pool-materials" class="section-muted">
    <div class="container">
        <div class="section-header">
            <h2>Pool Fencing Materials</h2>
            <p>Choose from materials that suit your style and budget</p>
        </div>
        <div class="grid grid-4">
            <?php foreach ($materials as $material) : ?>
            <div class="card">
                <div class="card-content text-center">
                    <img src="<?php echo esc_url( get_template_directory_uri() . '/images/' . sanitize_title($material['name']) . '.png' ); ?>" alt="<?php echo esc_attr($material['name']); ?>" class="feature-icon">
                    <h3><?php echo esc_html($material['name']); ?></h3>
                    <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem;"><?php echo esc_html($material['desc']); ?></p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section>
    <div class="container" style="max-width: 800px;">
        <div class="cta-section">
            <h2>Ready to Install Compliant Pool Fencing?</h2>
            <p>Get free quotes today and protect your family with certified pool fencing</p>
            <div class="cta-buttons">
                <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-secondary btn-lg">Get 3 Free Quotes Now</a>
                <a href="<?php echo esc_url( qmf_get_phone_link() ); ?>" class="btn btn-outline btn-lg" style="background: rgba(255,255,255,0.1); color: white; border-color: rgba(255,255,255,0.3);">Call <?php echo qmf_get_phone(); ?></a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
