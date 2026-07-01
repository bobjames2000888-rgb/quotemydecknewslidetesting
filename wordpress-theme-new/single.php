<?php
/**
 * The template for displaying single posts
 *
 * @package QuoteMyFence
 */

get_header();
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <section class="hero-section" style="padding: 6rem 0 3rem;">
        <div class="container">
            <div class="hero-content text-center">
                <?php the_title( '<h1 class="hero-title">', '</h1>' ); ?>
                <div class="entry-meta" style="color: hsl(var(--muted-foreground)); margin-top: 1rem;">
                    <span><?php echo get_the_date(); ?></span>
                    <?php if ( get_the_category() ) : ?>
                        <span> · </span>
                        <span><?php the_category( ', ' ); ?></span>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </section>

    <?php if ( has_post_thumbnail() ) : ?>
        <div class="container" style="max-width: 900px; margin-bottom: 2rem;">
            <div class="hero-image">
                <?php the_post_thumbnail( 'large' ); ?>
            </div>
        </div>
    <?php endif; ?>

    <section>
        <div class="container" style="max-width: 800px;">
            <div class="entry-content">
                <?php
                the_content();

                wp_link_pages( array(
                    'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'quotemyfence' ),
                    'after'  => '</div>',
                ) );
                ?>
            </div>

            <?php if ( get_the_tags() ) : ?>
                <div class="entry-tags" style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid hsl(var(--border));">
                    <strong><?php esc_html_e( 'Tags:', 'quotemyfence' ); ?></strong>
                    <?php the_tags( '', ', ', '' ); ?>
                </div>
            <?php endif; ?>
        </div>
    </section>

    <section>
        <div class="container" style="max-width: 800px;">
            <div class="cta-section">
                <h2><?php esc_html_e( 'Need a Fencing Quote?', 'quotemyfence' ); ?></h2>
                <p><?php esc_html_e( 'Get free quotes from verified fencing contractors today', 'quotemyfence' ); ?></p>
                <div class="cta-buttons">
                    <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-secondary btn-lg"><?php esc_html_e( 'Get 3 Free Quotes Now', 'quotemyfence' ); ?></a>
                </div>
            </div>
        </div>
    </section>

    <?php
    // If comments are open or we have at least one comment, load up the comment template.
    if ( comments_open() || get_comments_number() ) :
        ?>
        <section>
            <div class="container" style="max-width: 800px;">
                <?php comments_template(); ?>
            </div>
        </section>
        <?php
    endif;
    ?>
</article>

<?php
get_footer();
