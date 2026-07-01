<?php
/**
 * Template Part: Hero Section
 * 
 * Reusable hero section for pages
 * 
 * @package QuoteMyFence
 */

$badge_icon = isset( $args['badge_icon'] ) ? $args['badge_icon'] : '🏠';
$badge_text = isset( $args['badge_text'] ) ? $args['badge_text'] : __( 'Australia\'s #1 Fencing Quote Platform', 'quotemyfence' );
$title_line1 = isset( $args['title_line1'] ) ? $args['title_line1'] : '';
$title_line2 = isset( $args['title_line2'] ) ? $args['title_line2'] : '';
$description = isset( $args['description'] ) ? $args['description'] : '';
$show_cta = isset( $args['show_cta'] ) ? $args['show_cta'] : true;
$cta_text = isset( $args['cta_text'] ) ? $args['cta_text'] : __( 'Get 3 Free Quotes Now', 'quotemyfence' );
?>

<section class="hero-section">
    <div class="container">
        <div class="hero-content text-center">
            <div class="hero-badge">
                <span><?php echo esc_html( $badge_icon ); ?></span>
                <span><?php echo esc_html( $badge_text ); ?></span>
            </div>
            <h1 class="hero-title">
                <?php if ( $title_line1 ) : ?>
                    <?php echo esc_html( $title_line1 ); ?>
                <?php endif; ?>
                <?php if ( $title_line2 ) : ?>
                    <br><span class="text-gradient"><?php echo esc_html( $title_line2 ); ?></span>
                <?php endif; ?>
            </h1>
            <?php if ( $description ) : ?>
                <p class="hero-description"><?php echo esc_html( $description ); ?></p>
            <?php endif; ?>
            <?php if ( $show_cta ) : ?>
                <div class="hero-cta">
                    <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-primary btn-lg">
                        <?php echo esc_html( $cta_text ); ?>
                    </a>
                </div>
            <?php endif; ?>
        </div>
    </div>
</section>
