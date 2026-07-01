<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package QuoteMyFence
 */

get_header();
?>

<section class="hero-section" style="min-height: 60vh; display: flex; align-items: center;">
    <div class="container">
        <div class="hero-content text-center">
            <h1 class="hero-title" style="font-size: 6rem; margin-bottom: 0.5rem;">
                <span class="text-gradient">404</span>
            </h1>
            <h2 style="margin-bottom: 1.5rem;"><?php esc_html_e( 'Page Not Found', 'quotemyfence' ); ?></h2>
            <p class="hero-description" style="margin: 0 auto 2rem;">
                <?php esc_html_e( "Oops! The page you're looking for doesn't exist or has been moved.", 'quotemyfence' ); ?>
            </p>
            <div class="hero-buttons" style="justify-content: center;">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn btn-primary btn-lg"><?php esc_html_e( 'Go Home', 'quotemyfence' ); ?></a>
                <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-outline btn-lg"><?php esc_html_e( 'Get a Quote', 'quotemyfence' ); ?></a>
            </div>
        </div>
    </div>
</section>

<section class="section-muted">
    <div class="container">
        <div class="section-header">
            <h2><?php esc_html_e( 'Popular Pages', 'quotemyfence' ); ?></h2>
        </div>
        <div class="grid grid-4" style="max-width: 900px; margin: 0 auto;">
            <a href="<?php echo esc_url( home_url( '/colorbond-fencing/' ) ); ?>" class="card">
                <div class="card-content text-center">
                    <h3><?php esc_html_e( 'Colorbond Fencing', 'quotemyfence' ); ?></h3>
                </div>
            </a>
            <a href="<?php echo esc_url( home_url( '/timber-fencing/' ) ); ?>" class="card">
                <div class="card-content text-center">
                    <h3><?php esc_html_e( 'Timber Fencing', 'quotemyfence' ); ?></h3>
                </div>
            </a>
            <a href="<?php echo esc_url( home_url( '/pool-fencing/' ) ); ?>" class="card">
                <div class="card-content text-center">
                    <h3><?php esc_html_e( 'Pool Fencing', 'quotemyfence' ); ?></h3>
                </div>
            </a>
            <a href="<?php echo esc_url( home_url( '/fencing-guides/' ) ); ?>" class="card">
                <div class="card-content text-center">
                    <h3><?php esc_html_e( 'Fencing Guides', 'quotemyfence' ); ?></h3>
                </div>
            </a>
        </div>
    </div>
</section>

<?php
get_footer();
