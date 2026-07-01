<?php
/**
 * Template Name: Timber Fencing
 * The template for Timber Fencing page
 *
 * @package QuoteMyFence
 */

get_header();

$benefits = array(
    array('icon' => '🌲', 'title' => 'Natural Beauty', 'desc' => 'Timeless aesthetic that complements any property style and landscape'),
    array('icon' => '🎨', 'title' => 'Fully Customisable', 'desc' => 'Choose from various timber types, stains, and styles to match your vision'),
    array('icon' => '🍃', 'title' => 'Eco-Friendly', 'desc' => 'Sustainable and renewable material that\'s environmentally responsible'),
    array('icon' => '📏', 'title' => 'Versatile Designs', 'desc' => 'From privacy screens to decorative pickets, endless design possibilities'),
);

$features = array(
    'Treated pine and hardwood options',
    'Custom staining and painting services',
    'Paling, picket, and lattice styles available',
    'Termite-resistant timber treatments',
    'Professional installation',
);

$timber_types = array(
    array('name' => 'Treated Pine', 'desc' => 'Cost-effective and durable'),
    array('name' => 'Merbau', 'desc' => 'Rich red tones, naturally durable'),
    array('name' => 'Spotted Gum', 'desc' => 'Australian hardwood classic'),
    array('name' => 'Cypress', 'desc' => 'Naturally termite resistant'),
);
?>

<section class="hero-section">
    <div class="container">
        <div class="grid grid-2" style="align-items: center; gap: 3rem;">
            <div class="hero-content">
                <div class="hero-badge">
                    <span>🌲</span>
                    <span>Natural & Timeless</span>
                </div>
                <h1 class="hero-title">Timber<br>Fencing Solutions</h1>
                <p class="hero-description">
                    Experience the natural warmth and classic beauty of timber fencing. 
                    Expertly crafted using Australian hardwoods and treated pine.
                </p>
                <div class="hero-buttons">
                    <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-primary btn-lg">Get 3 Free Quotes in Minutes</a>
                    <a href="#timber-types" class="btn btn-outline btn-lg">View Timber Types</a>
                </div>
                <div class="flex gap-6 mt-8" style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">
                    <span>✓ Australian Timber</span>
                </div>
            </div>
            <div class="hero-image">
                <img src="<?php echo esc_url( get_template_directory_uri() . '/images/timber-hero.webp' ); ?>" alt="Timber Fence Installation">
            </div>
        </div>
    </div>
</section>

<section class="section-muted">
    <div class="container">
        <div class="section-header">
            <h2>Why Choose Timber Fencing?</h2>
            <p>Classic beauty meets modern durability with Australian timber fencing solutions</p>
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
                <h2>Australian Quality & Expert Installation</h2>
                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 2rem;">
                    Every timber fence our verified contractors install are built to last, using local materials and expert installation techniques that ensure longevity and beauty.
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
                <img src="<?php echo esc_url( get_template_directory_uri() . '/images/timber-features.webp' ); ?>" alt="Timber Fencing Features">
            </div>
        </div>
    </div>
</section>

<section id="timber-types" class="section-muted">
    <div class="container">
        <div class="section-header">
            <h2>Choose Your Timber Type</h2>
            <p>Select from Australian timbers, each with unique characteristics</p>
        </div>
        <div class="grid grid-4">
            <?php foreach ($timber_types as $type) : ?>
            <div class="card">
                <div class="card-content text-center">
                    <img src="<?php echo esc_url( get_template_directory_uri() . '/images/' . sanitize_title($type['name']) . '.webp' ); ?>" alt="<?php echo esc_attr($type['name']); ?>" class="feature-icon">
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
            <h2>Ready to Install Your Timber Fence?</h2>
            <p>Get free quotes today and discover the natural beauty of Australian timber fencing</p>
            <div class="cta-buttons">
                <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-secondary btn-lg">Get 3 Free Quotes Now</a>
                <a href="<?php echo esc_url( qmf_get_phone_link() ); ?>" class="btn btn-outline btn-lg" style="background: rgba(255,255,255,0.1); color: white; border-color: rgba(255,255,255,0.3);">Call <?php echo qmf_get_phone(); ?></a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
