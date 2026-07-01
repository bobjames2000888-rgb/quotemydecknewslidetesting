<?php
/**
 * Template Name: Fence Repairs
 * @package QuoteMyFence
 */
get_header();
?>

<section class="hero-section">
    <div class="container">
        <div class="hero-grid">
            <div class="hero-content">
                <div class="hero-badge"><span>🔧</span><span><?php esc_html_e( 'Fast & Reliable Service', 'quotemyfence' ); ?></span></div>
                <h1 class="hero-title"><?php esc_html_e( 'Fence', 'quotemyfence' ); ?><br><span class="text-gradient"><?php esc_html_e( 'Repair Services', 'quotemyfence' ); ?></span></h1>
                <p class="hero-description"><?php esc_html_e( 'Don\'t replace when you can repair! Fencing contractors fix all types of fence damage quickly and affordably.', 'quotemyfence' ); ?></p>
                <div class="hero-buttons">
                    <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-primary btn-lg"><?php esc_html_e( 'Get Free Assessment', 'quotemyfence' ); ?></a>
                    <a href="<?php echo esc_url( qmf_get_phone_link() ); ?>" class="btn btn-outline btn-lg"><?php esc_html_e( 'Emergency Repairs', 'quotemyfence' ); ?></a>
                </div>
            </div>
            <div class="hero-image"><img src="<?php echo esc_url( get_template_directory_uri() . '/images/fence-repairs-hero.webp' ); ?>" alt="<?php esc_attr_e( 'Fence Repairs', 'quotemyfence' ); ?>"></div>
        </div>
    </div>
</section>

<section class="section-muted">
    <div class="container">
        <div class="section-header"><h2><?php esc_html_e( 'Why Choose Repair Services?', 'quotemyfence' ); ?></h2></div>
        <div class="grid grid-4">
            <div class="card"><div class="card-content"><div class="icon-box"><span>⚡</span></div><h3><?php esc_html_e( 'Fast Response', 'quotemyfence' ); ?></h3><p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( '2-36 hour response time for urgent repairs and emergency services', 'quotemyfence' ); ?></p></div></div>
            <div class="card"><div class="card-content"><div class="icon-box"><span>🔧</span></div><h3><?php esc_html_e( 'Expert Repairs', 'quotemyfence' ); ?></h3><p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'Verified tradies with experience in all fence types and materials', 'quotemyfence' ); ?></p></div></div>
            <div class="card"><div class="card-content"><div class="icon-box"><span>💰</span></div><h3><?php esc_html_e( 'Cost-Effective', 'quotemyfence' ); ?></h3><p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'Save money by repairing instead of replacing your entire fence', 'quotemyfence' ); ?></p></div></div>
            <div class="card"><div class="card-content"><div class="icon-box"><span>✅</span></div><h3><?php esc_html_e( 'Quality Work', 'quotemyfence' ); ?></h3><p style="color: hsl(var(--muted-foreground));"><?php esc_html_e( 'All repairs completed by experienced tradies', 'quotemyfence' ); ?></p></div></div>
        </div>
    </div>
</section>

<section>
    <div class="container" style="max-width: 800px;">
        <div class="cta-section">
            <h2><?php esc_html_e( 'Need Your Fence Repaired?', 'quotemyfence' ); ?></h2>
            <p><?php esc_html_e( 'Get a free assessment today', 'quotemyfence' ); ?></p>
            <div class="cta-buttons">
                <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-secondary btn-lg"><?php esc_html_e( 'Get Free Assessment', 'quotemyfence' ); ?></a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
