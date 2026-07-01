<?php
/**
 * Template Name: Feature Fencing
 * @package QuoteMyFence
 */
get_header();
?>

<section class="hero-section">
    <div class="container">
        <div class="hero-grid">
            <div class="hero-content">
                <div class="hero-badge"><span>🎨</span><span><?php esc_html_e( 'Statement Pieces', 'quotemyfence' ); ?></span></div>
                <h1 class="hero-title"><?php esc_html_e( 'Feature', 'quotemyfence' ); ?><br><span class="text-gradient"><?php esc_html_e( 'Fencing Solutions', 'quotemyfence' ); ?></span></h1>
                <p class="hero-description"><?php esc_html_e( 'Make a statement with custom feature fencing. Unique designs that transform your property into a work of art.', 'quotemyfence' ); ?></p>
                <div class="hero-buttons">
                    <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-primary btn-lg"><?php esc_html_e( 'Get 3 Free Quotes', 'quotemyfence' ); ?></a>
                    <a href="<?php echo esc_url( qmf_get_phone_link() ); ?>" class="btn btn-outline btn-lg"><?php esc_html_e( 'Call', 'quotemyfence' ); ?> <?php echo qmf_get_phone(); ?></a>
                </div>
            </div>
            <div class="hero-image"><img src="<?php echo esc_url( get_template_directory_uri() . '/images/feature-fence-hero.webp' ); ?>" alt="<?php esc_attr_e( 'Feature Fencing', 'quotemyfence' ); ?>"></div>
        </div>
    </div>
</section>

<section class="section-muted">
    <div class="container">
        <div class="section-header"><h2><?php esc_html_e( 'Why Choose Feature Fencing?', 'quotemyfence' ); ?></h2></div>
        <div class="grid grid-4">
            <div class="card"><div class="card-content"><div class="icon-box"><span>✨</span></div><h3><?php esc_html_e( 'Unique Designs', 'quotemyfence' ); ?></h3><p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'Stand out with custom decorative patterns and artistic fence designs', 'quotemyfence' ); ?></p></div></div>
            <div class="card"><div class="card-content"><div class="icon-box"><span>🎨</span></div><h3><?php esc_html_e( 'Custom Finishes', 'quotemyfence' ); ?></h3><p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'Choose from a wide range of colours, textures, and decorative elements', 'quotemyfence' ); ?></p></div></div>
            <div class="card"><div class="card-content"><div class="icon-box"><span>⭐</span></div><h3><?php esc_html_e( 'Premium Materials', 'quotemyfence' ); ?></h3><p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'High-quality materials ensure durability with exceptional aesthetics', 'quotemyfence' ); ?></p></div></div>
            <div class="card"><div class="card-content"><div class="icon-box"><span>🏠</span></div><h3><?php esc_html_e( 'Property Value', 'quotemyfence' ); ?></h3><p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'Enhance curb appeal and increase your property\'s market value', 'quotemyfence' ); ?></p></div></div>
        </div>
    </div>
</section>

<section>
    <div class="container" style="max-width: 800px;">
        <div class="cta-section">
            <h2><?php esc_html_e( 'Ready to Create Your Feature Fence?', 'quotemyfence' ); ?></h2>
            <p><?php esc_html_e( 'Get a free consultation and quotes for your custom feature fencing project', 'quotemyfence' ); ?></p>
            <div class="cta-buttons">
                <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-secondary btn-lg"><?php esc_html_e( 'Get 3 Free Quotes Now', 'quotemyfence' ); ?></a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
