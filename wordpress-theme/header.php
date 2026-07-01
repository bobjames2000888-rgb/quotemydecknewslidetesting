<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-logo">
                        <div class="logo-icon">QMF</div>
                        <span class="site-title"><?php bloginfo( 'name' ); ?></span>
                    </a>
                <?php endif; ?>
            </div>

            <!-- Navigation -->
            <nav id="site-navigation" class="main-navigation">
                <?php
                wp_nav_menu( array(
                    'theme_location' => 'primary',
                    'menu_id'        => 'primary-menu',
                    'container'      => false,
                    'fallback_cb'    => false,
                ) );
                ?>
            </nav>

            <!-- Header CTA -->
            <div class="header-cta">
                <a href="tel:0400000000" class="phone-link">
                    <span>0400 000 000</span>
                </a>
                <a href="#quote" class="btn btn-primary">Instant Quote</a>
            </div>

            <!-- Mobile Menu Toggle -->
            <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                <span class="screen-reader-text"><?php esc_html_e( 'Menu', 'quotemyfence' ); ?></span>
                <span class="menu-icon"></span>
            </button>
        </div>
    </header>
