<?php
/**
 * The template for displaying all pages
 *
 * @package QuoteMyFence
 */

get_header();
?>

<section class="hero-section" style="padding: 6rem 0 3rem;">
    <div class="container">
        <div class="hero-content text-center">
            <h1 class="hero-title"><?php the_title(); ?></h1>
        </div>
    </div>
</section>

<section>
    <div class="container" style="max-width: 900px;">
        <?php
        while ( have_posts() ) :
            the_post();
            the_content();
        endwhile;
        ?>
    </div>
</section>

<section>
    <div class="container" style="max-width: 800px;">
        <div class="cta-section">
            <h2>Need a Fencing Quote?</h2>
            <p>Get free quotes from verified fencing contractors today</p>
            <div class="cta-buttons">
                <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-secondary btn-lg">Get 3 Free Quotes Now</a>
            </div>
        </div>
    </div>
</section>

<?php
get_footer();
