<?php
/**
 * The template for displaying search results
 *
 * @package QuoteMyFence
 */

get_header();
?>

<section class="hero-section" style="padding: 6rem 0 3rem;">
    <div class="container">
        <div class="hero-content text-center">
            <h1 class="hero-title">
                <?php
                /* translators: %s: search query. */
                printf( esc_html__( 'Search Results for: %s', 'quotemyfence' ), '<span class="text-gradient">' . get_search_query() . '</span>' );
                ?>
            </h1>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <?php if ( have_posts() ) : ?>
            <div class="grid grid-3">
                <?php while ( have_posts() ) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class( 'card' ); ?>>
                        <?php if ( has_post_thumbnail() ) : ?>
                            <div class="guide-card-image">
                                <?php the_post_thumbnail( 'guide-thumbnail' ); ?>
                            </div>
                        <?php endif; ?>
                        <div class="card-content">
                            <h2 class="entry-title" style="font-size: 1.25rem;">
                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </h2>
                            <div class="entry-excerpt">
                                <?php the_excerpt(); ?>
                            </div>
                            <a href="<?php the_permalink(); ?>" class="btn btn-outline btn-sm"><?php esc_html_e( 'Read More', 'quotemyfence' ); ?></a>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>

            <div class="pagination" style="margin-top: 3rem; text-align: center;">
                <?php
                the_posts_pagination( array(
                    'mid_size'  => 2,
                    'prev_text' => __( '&laquo; Previous', 'quotemyfence' ),
                    'next_text' => __( 'Next &raquo;', 'quotemyfence' ),
                ) );
                ?>
            </div>

        <?php else : ?>
            <div class="text-center" style="padding: 3rem 0;">
                <h2><?php esc_html_e( 'No Results Found', 'quotemyfence' ); ?></h2>
                <p><?php esc_html_e( 'Sorry, nothing matched your search criteria. Please try again with different keywords.', 'quotemyfence' ); ?></p>
                <div style="max-width: 400px; margin: 2rem auto;">
                    <?php get_search_form(); ?>
                </div>
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
get_footer();
