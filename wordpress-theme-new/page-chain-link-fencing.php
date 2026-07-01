<?php
/**
 * Template Name: Chain Link Fencing
 * @package QuoteMyFence
 */
get_header();
?>

<section class="hero-section">
    <div class="container">
        <div class="hero-grid">
            <div class="hero-content">
                <div class="hero-badge"><span>🔗</span><span><?php esc_html_e( 'Cost-Effective Security', 'quotemyfence' ); ?></span></div>
                <h1 class="hero-title"><?php esc_html_e( 'Chain Link', 'quotemyfence' ); ?><br><span class="text-gradient"><?php esc_html_e( 'Fencing Solutions', 'quotemyfence' ); ?></span></h1>
                <p class="hero-description"><?php esc_html_e( 'The practical choice for large areas and commercial properties. Durable, affordable, and quick to install chain link fencing.', 'quotemyfence' ); ?></p>
                <div class="hero-buttons">
                    <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-primary btn-lg"><?php esc_html_e( 'Get 3 Free Quotes', 'quotemyfence' ); ?></a>
                    <a href="<?php echo esc_url( qmf_get_phone_link() ); ?>" class="btn btn-outline btn-lg"><?php esc_html_e( 'Call', 'quotemyfence' ); ?> <?php echo qmf_get_phone(); ?></a>
                </div>
            </div>
            <div class="hero-image"><img src="<?php echo esc_url( get_template_directory_uri() . '/images/chain-link-fence-hero.webp' ); ?>" alt="<?php esc_attr_e( 'Chain Link Fencing', 'quotemyfence' ); ?>"></div>
        </div>
    </div>
</section>

<section class="section-muted">
    <div class="container">
        <div class="section-header"><h2><?php esc_html_e( 'Why Choose Chain Link Fencing?', 'quotemyfence' ); ?></h2></div>
        <div class="grid grid-4">
            <div class="card"><div class="card-content"><div class="icon-box"><span>💰</span></div><h3><?php esc_html_e( 'Budget Friendly', 'quotemyfence' ); ?></h3><p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'Most economical fencing option without compromising on security', 'quotemyfence' ); ?></p></div></div>
            <div class="card"><div class="card-content"><div class="icon-box"><span>⚡</span></div><h3><?php esc_html_e( 'Quick Installation', 'quotemyfence' ); ?></h3><p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'Fast installation times mean less disruption to your property', 'quotemyfence' ); ?></p></div></div>
            <div class="card"><div class="card-content"><div class="icon-box"><span>💪</span></div><h3><?php esc_html_e( 'Highly Durable', 'quotemyfence' ); ?></h3><p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'Galvanized steel construction resists rust and weather damage', 'quotemyfence' ); ?></p></div></div>
            <div class="card"><div class="card-content"><div class="icon-box"><span>👁️</span></div><h3><?php esc_html_e( 'Visibility', 'quotemyfence' ); ?></h3><p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'Open weave design allows natural light and visibility through', 'quotemyfence' ); ?></p></div></div>
        </div>
    </div>
</section>

<section>
    <div class="container" style="max-width: 800px;">
        <div class="cta-section">
            <h2><?php esc_html_e( 'Ready to Install Chain Link Fencing?', 'quotemyfence' ); ?></h2>
            <p><?php esc_html_e( 'Get free quotes today for affordable, durable chain link fencing', 'quotemyfence' ); ?></p>
            <div class="cta-buttons">
                <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-secondary btn-lg"><?php esc_html_e( 'Get 3 Free Quotes Now', 'quotemyfence' ); ?></a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
