<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#f97316">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#main-content">
        <?php esc_html_e( 'Skip to content', 'quotemyfence' ); ?>
    </a>

    <header id="masthead" class="site-header">
        <div class="header-inner">
            <!-- Logo -->
            <div class="site-branding">
                <?php if ( has_custom_logo() ) : ?>
                    <?php the_custom_logo(); ?>
                <?php else : ?>
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-logo" aria-label="<?php bloginfo( 'name' ); ?>">
                        <div class="logo-icon">QMF</div>
                        <span class="site-title"><?php bloginfo( 'name' ); ?></span>
                    </a>
                <?php endif; ?>
            </div>

            <!-- Navigation -->
            <nav id="site-navigation" class="main-navigation" aria-label="<?php esc_attr_e( 'Primary Navigation', 'quotemyfence' ); ?>">
                <?php
                wp_nav_menu( array(
                    'theme_location' => 'primary',
                    'menu_id'        => 'primary-menu',
                    'container'      => false,
                    'fallback_cb'    => 'quotemyfence_default_menu',
                ) );
                ?>
            </nav>

            <!-- Header CTA -->
            <div class="header-cta">
                <a href="<?php echo esc_url( qmf_get_phone_link() ); ?>" class="phone-link" aria-label="<?php printf( esc_attr__( 'Call %s', 'quotemyfence' ), qmf_get_phone() ); ?>">
                    <span><?php echo qmf_get_phone(); ?></span>
                </a>
                <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-primary"><?php esc_html_e( 'Instant Quotes', 'quotemyfence' ); ?></a>
            </div>

            <!-- Mobile Menu Toggle -->
            <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false" aria-label="<?php esc_attr_e( 'Toggle Menu', 'quotemyfence' ); ?>">
                <span class="screen-reader-text"><?php esc_html_e( 'Menu', 'quotemyfence' ); ?></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>

    <main id="main-content" class="site-main">
