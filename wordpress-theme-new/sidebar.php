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
            <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-primary" style="width: 100%;">
                <?php esc_html_e( 'Request Quote', 'quotemyfence' ); ?>
            </a>
        </section>

        <section class="widget">
            <h3 class="widget-title"><?php esc_html_e( 'Popular Services', 'quotemyfence' ); ?></h3>
            <ul>
                <li><a href="<?php echo esc_url( home_url( '/colorbond-fencing/' ) ); ?>">Colorbond Fencing</a></li>
                <li><a href="<?php echo esc_url( home_url( '/timber-fencing/' ) ); ?>">Timber Fencing</a></li>
                <li><a href="<?php echo esc_url( home_url( '/pool-fencing/' ) ); ?>">Pool Fencing</a></li>
                <li><a href="<?php echo esc_url( home_url( '/security-fencing/' ) ); ?>">Security Fencing</a></li>
                <li><a href="<?php echo esc_url( home_url( '/gate-installation/' ) ); ?>">Gate Installation</a></li>
            </ul>
        </section>

        <section class="widget">
            <h3 class="widget-title"><?php esc_html_e( 'Contact Us', 'quotemyfence' ); ?></h3>
            <p>
                <strong><?php esc_html_e( 'Phone:', 'quotemyfence' ); ?></strong><br>
                <?php echo qmf_get_phone(); ?>
            </p>
            <p>
                <strong><?php esc_html_e( 'Email:', 'quotemyfence' ); ?></strong><br>
                <?php echo qmf_get_email(); ?>
            </p>
        </section>
    <?php endif; ?>
</aside>
