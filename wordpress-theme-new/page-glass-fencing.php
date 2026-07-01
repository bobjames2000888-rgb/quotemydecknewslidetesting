<?php
/**
 * Template Name: Glass Fencing
 * Complete Glass Fencing page matching live React site
 * @package QuoteMyFence
 */
get_header();

$benefits = array(
    array('icon' => '👁️', 'title' => 'Unobstructed Views', 'desc' => 'Crystal-clear panoramic views that don\'t compromise your scenery'),
    array('icon' => '🌊', 'title' => 'Wind Protection', 'desc' => 'Creates a comfortable outdoor space while maintaining air flow'),
    array('icon' => '✨', 'title' => 'Modern Elegance', 'desc' => 'Sophisticated glass finish that adds luxury to any property'),
    array('icon' => '🛡️', 'title' => 'Safety First', 'desc' => 'Toughened safety glass meeting all Australian safety standards'),
);

$features = array(
    '12mm toughened safety glass',
    'Frameless and semi-frameless options',
    'Pool-safe certified installations',
    '316 marine-grade stainless steel spigots',
    'Easy-clean nano coating available',
    '10-year warranty on glass and hardware',
);

$options = array(
    array('name' => 'Frameless Pool', 'desc' => 'Seamless glass panels'),
    array('name' => 'Semi-Frameless', 'desc' => 'Modern with top rail'),
    array('name' => 'Balustrade', 'desc' => 'Balcony & deck solutions'),
    array('name' => 'Privacy Screen', 'desc' => 'Frosted glass options'),
);
?>

<!-- Hero Section -->
<section class="hero-section">
    <div class="container">
        <div class="hero-grid">
            <div class="hero-content">
                <div class="hero-badge">
                    <span>✨</span>
                    <span><?php esc_html_e( 'Luxury & Sophistication', 'quotemyfence' ); ?></span>
                </div>
                <h1 class="hero-title">
                    <?php esc_html_e( 'Stunning Glass', 'quotemyfence' ); ?><br>
                    <span class="text-gradient"><?php esc_html_e( 'Fencing Solutions', 'quotemyfence' ); ?></span>
                </h1>
                <p class="hero-description">
                    <?php esc_html_e( 'Transform your outdoor space with elegant frameless glass fencing. Maximize views while maintaining safety and style for pools, balconies, and patios.', 'quotemyfence' ); ?>
                </p>
                <div class="hero-buttons">
                    <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-primary btn-lg"><?php esc_html_e( 'Get Free Quote', 'quotemyfence' ); ?></a>
                    <a href="#glass-options" class="btn btn-outline btn-lg"><?php esc_html_e( 'View Options', 'quotemyfence' ); ?></a>
                </div>
                <div class="hero-features">
                    <span>✓ <?php esc_html_e( 'Safety Glass', 'quotemyfence' ); ?></span>
                    <span>✓ <?php esc_html_e( 'Pool Certified', 'quotemyfence' ); ?></span>
                </div>
            </div>
            <div class="hero-image">
                <img src="<?php echo esc_url( get_template_directory_uri() . '/images/glass-fence-hero.webp' ); ?>" alt="<?php esc_attr_e( 'Glass Fence Installation', 'quotemyfence' ); ?>">
            </div>
        </div>
    </div>
</section>

<!-- Benefits Section -->
<section class="section-muted">
    <div class="container">
        <div class="section-header">
            <h2><?php esc_html_e( 'Why Choose Glass Fencing?', 'quotemyfence' ); ?></h2>
            <p><?php esc_html_e( 'The ultimate in modern luxury fencing - where safety meets stunning aesthetics', 'quotemyfence' ); ?></p>
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

<!-- Features Section -->
<section>
    <div class="container">
        <div class="grid grid-2" style="align-items: center; gap: 3rem;">
            <div>
                <h2><?php esc_html_e( 'Premium Safety & Quality Standards', 'quotemyfence' ); ?></h2>
                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 2rem;">
                    <?php esc_html_e( 'Every glass fence we install uses premium toughened safety glass and marine-grade hardware, ensuring maximum safety and longevity.', 'quotemyfence' ); ?>
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
                <img src="<?php echo esc_url( get_template_directory_uri() . '/images/glass-fence-features.webp' ); ?>" alt="<?php esc_attr_e( 'Glass Fencing Features', 'quotemyfence' ); ?>">
            </div>
        </div>
    </div>
</section>

<!-- Options Section -->
<section id="glass-options" class="section-muted">
    <div class="container">
        <div class="section-header">
            <h2><?php esc_html_e( 'Glass Fencing Options', 'quotemyfence' ); ?></h2>
            <p><?php esc_html_e( 'Choose the perfect glass fencing solution for your space', 'quotemyfence' ); ?></p>
        </div>
        <div class="grid grid-4">
            <?php foreach ($options as $option) : ?>
            <div class="card">
                <div class="card-content text-center">
                    <div class="icon-box" style="margin: 0 auto 1rem; width: 3rem; height: 3rem;">
                        <span style="font-size: 1.5rem;">👁️</span>
                    </div>
                    <h3><?php echo esc_html($option['name']); ?></h3>
                    <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem;"><?php echo esc_html($option['desc']); ?></p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section>
    <div class="container" style="max-width: 800px;">
        <div class="cta-section">
            <h2><?php esc_html_e( 'Ready to Install Your Glass Fence?', 'quotemyfence' ); ?></h2>
            <p><?php esc_html_e( 'Get a free quote today and elevate your space with stunning glass fencing', 'quotemyfence' ); ?></p>
            <div class="cta-buttons">
                <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-secondary btn-lg"><?php esc_html_e( 'Get Free Quote Now', 'quotemyfence' ); ?></a>
                <a href="<?php echo esc_url( qmf_get_phone_link() ); ?>" class="btn btn-outline btn-lg" style="background: rgba(255,255,255,0.1); color: white; border-color: rgba(255,255,255,0.3);"><?php esc_html_e( 'Call', 'quotemyfence' ); ?> <?php echo qmf_get_phone(); ?></a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
