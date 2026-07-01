<?php
/**
 * Template Name: Suburb Page
 * Generic template for suburb pages (Pakenham, Berwick, etc.)
 *
 * @package QuoteMyFence
 */

get_header();
$suburb_name = get_the_title();
?>

<section class="hero-section">
    <div class="container">
        <div class="hero-content text-center">
            <div class="hero-badge">
                <span>📍</span>
                <span>Local <?php echo esc_html($suburb_name); ?> Fencing Experts</span>
            </div>
            <h1 class="hero-title"><?php echo esc_html($suburb_name); ?><br><span class="text-gradient">Fencing Services</span></h1>
            <p class="hero-description" style="margin: 0 auto 2rem;">Professional fencing installation and repairs in <?php echo esc_html($suburb_name); ?>. Get free quotes from verified local contractors.</p>
            <div class="hero-buttons" style="justify-content: center;">
                <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-primary btn-lg">Get 3 Free Quotes</a>
                <a href="<?php echo esc_url( qmf_get_phone_link() ); ?>" class="btn btn-outline btn-lg">Call <?php echo qmf_get_phone(); ?></a>
            </div>
        </div>
    </div>
</section>

<?php the_content(); ?>

<section>
    <div class="container" style="max-width: 800px;">
        <div class="cta-section">
            <h2>Get Your <?php echo esc_html($suburb_name); ?> Fencing Quote</h2>
            <p>Connect with verified local contractors today</p>
            <div class="cta-buttons">
                <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-secondary btn-lg">Get 3 Free Quotes Now</a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
