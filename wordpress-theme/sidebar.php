<?php
/**
 * The sidebar containing the main widget area
 *
 * @package QuoteMyFence
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
    return;
}
?>

<aside id="secondary" class="widget-area sidebar">
    <?php dynamic_sidebar( 'sidebar-1' ); ?>

    <?php if ( ! is_active_sidebar( 'sidebar-1' ) ) : ?>
        <!-- Fallback content when no widgets are assigned -->
        <section class="widget">
            <h3 class="widget-title"><?php esc_html_e( 'Get a Free Quote', 'quotemyfence' ); ?></h3>
            <p><?php esc_html_e( 'Ready to start your fencing project? Get free quotes from trusted local contractors.', 'quotemyfence' ); ?></p>
            <a href="#quote" class="btn btn-primary" style="width: 100%;">
                <?php esc_html_e( 'Request Quote', 'quotemyfence' ); ?>
            </a>
        </section>

        <section class="widget">
            <h3 class="widget-title"><?php esc_html_e( 'Popular Services', 'quotemyfence' ); ?></h3>
            <ul>
                <li><a href="#">Colorbond Fencing</a></li>
                <li><a href="#">Timber Fencing</a></li>
                <li><a href="#">Pool Fencing</a></li>
                <li><a href="#">Security Fencing</a></li>
                <li><a href="#">Gate Installation</a></li>
            </ul>
        </section>

        <section class="widget">
            <h3 class="widget-title"><?php esc_html_e( 'Contact Us', 'quotemyfence' ); ?></h3>
            <p>
                <strong><?php esc_html_e( 'Phone:', 'quotemyfence' ); ?></strong><br>
                0400 000 000
            </p>
            <p>
                <strong><?php esc_html_e( 'Email:', 'quotemyfence' ); ?></strong><br>
                info@quotemyfence.com.au
            </p>
        </section>
    <?php endif; ?>
</aside>
