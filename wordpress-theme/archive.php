<?php
/**
 * The template for displaying archive pages
 *
 * @package QuoteMyFence
 */

get_header();
?>

<main id="main-content" class="site-main">
    <div class="container">
        <div class="entry-content">
            <header class="page-header" style="padding-top: 6rem; text-align: center; margin-bottom: 3rem;">
                <?php
                the_archive_title( '<h1 class="page-title">', '</h1>' );
                the_archive_description( '<div class="archive-description">', '</div>' );
                ?>
            </header>

            <?php if ( have_posts() ) : ?>

                <div class="posts-grid">
                    <?php while ( have_posts() ) : the_post(); ?>

                        <article id="post-<?php the_ID(); ?>" <?php post_class( 'post-card' ); ?>>
                            <?php if ( has_post_thumbnail() ) : ?>
                                <div class="post-thumbnail">
                                    <a href="<?php the_permalink(); ?>">
                                        <?php the_post_thumbnail( 'medium_large' ); ?>
                                    </a>
                                </div>
                            <?php endif; ?>

                            <div class="post-content">
                                <h2 class="post-title">
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </h2>

                                <div class="post-excerpt">
                                    <?php the_excerpt(); ?>
                                </div>

                                <div class="post-meta">
                                    <span class="post-date"><?php echo get_the_date(); ?></span>
                                    <span class="post-author"> by <?php the_author(); ?></span>
                                </div>
                            </div>
                        </article>

                    <?php endwhile; ?>
                </div>

                <?php the_posts_pagination( array(
                    'prev_text' => '&laquo; Previous',
                    'next_text' => 'Next &raquo;',
                ) ); ?>

            <?php else : ?>

                <article class="no-results">
                    <h1><?php esc_html_e( 'Nothing Found', 'quotemyfence' ); ?></h1>
                    <p><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'quotemyfence' ); ?></p>
                    <?php get_search_form(); ?>
                </article>

            <?php endif; ?>
        </div>
    </div>
</main>

<?php
get_footer();
