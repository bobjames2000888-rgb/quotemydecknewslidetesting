<?php
/**
 * The template for displaying all single posts
 *
 * @package QuoteMyFence
 */

get_header();
?>

<main id="main-content" class="site-main">
    <div class="container">
        <?php while ( have_posts() ) : the_post(); ?>

            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="entry-header" style="padding-top: 6rem;">
                    <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>

                    <div class="entry-meta" style="color: #5a6a7a; margin-bottom: 2rem;">
                        <span class="posted-on">
                            <?php echo get_the_date(); ?>
                        </span>
                        <span class="byline">
                            <?php esc_html_e( 'by', 'quotemyfence' ); ?>
                            <?php the_author(); ?>
                        </span>
                        <?php if ( has_category() ) : ?>
                            <span class="cat-links">
                                <?php esc_html_e( 'in', 'quotemyfence' ); ?>
                                <?php the_category( ', ' ); ?>
                            </span>
                        <?php endif; ?>
                    </div>
                </header>

                <?php if ( has_post_thumbnail() ) : ?>
                    <div class="post-thumbnail" style="margin-bottom: 2rem; border-radius: 12px; overflow: hidden;">
                        <?php the_post_thumbnail( 'large' ); ?>
                    </div>
                <?php endif; ?>

                <div class="entry-content">
                    <?php
                    the_content();

                    wp_link_pages( array(
                        'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'quotemyfence' ),
                        'after'  => '</div>',
                    ) );
                    ?>
                </div>

                <footer class="entry-footer" style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #e8eaec;">
                    <?php if ( has_tag() ) : ?>
                        <div class="tags-links">
                            <?php esc_html_e( 'Tags:', 'quotemyfence' ); ?>
                            <?php the_tags( '', ', ', '' ); ?>
                        </div>
                    <?php endif; ?>

                    <?php if ( get_edit_post_link() ) : ?>
                        <?php
                        edit_post_link(
                            sprintf(
                                wp_kses(
                                    __( 'Edit <span class="screen-reader-text">%s</span>', 'quotemyfence' ),
                                    array( 'span' => array( 'class' => array() ) )
                                ),
                                get_the_title()
                            ),
                            '<span class="edit-link">',
                            '</span>'
                        );
                        ?>
                    <?php endif; ?>
                </footer>
            </article>

            <!-- Post Navigation -->
            <nav class="post-navigation" style="margin-top: 3rem; display: flex; justify-content: space-between; gap: 2rem;">
                <div class="nav-previous">
                    <?php previous_post_link( '%link', '&laquo; %title' ); ?>
                </div>
                <div class="nav-next">
                    <?php next_post_link( '%link', '%title &raquo;' ); ?>
                </div>
            </nav>

            <?php
            // If comments are open or we have at least one comment, load up the comment template.
            if ( comments_open() || get_comments_number() ) :
                comments_template();
            endif;
            ?>

        <?php endwhile; ?>
    </div>
</main>

<?php
get_footer();
