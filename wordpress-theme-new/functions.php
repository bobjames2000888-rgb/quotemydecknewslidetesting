<?php
/**
 * QuoteMyFence Theme Functions
 *
 * @package QuoteMyFence
 * @version 2.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

if ( ! defined( 'QUOTEMYFENCE_VERSION' ) ) {
    define( 'QUOTEMYFENCE_VERSION', '2.0.0' );
}

/**
 * Quote URL constant
 */
if ( ! defined( 'QUOTE_URL' ) ) {
    define( 'QUOTE_URL', 'https://app.quotemyfence.com.au/#/step/1' );
}

/**
 * Phone number constant
 */
if ( ! defined( 'PHONE_NUMBER' ) ) {
    define( 'PHONE_NUMBER', '0481 752 344' );
}

/**
 * Email constant
 */
if ( ! defined( 'EMAIL_ADDRESS' ) ) {
    define( 'EMAIL_ADDRESS', 'info@quotemyfence.com.au' );
}

/**
 * Theme Setup
 */
function quotemyfence_setup() {
    // Add default posts and comments RSS feed links to head
    add_theme_support( 'automatic-feed-links' );

    // Let WordPress manage the document title
    add_theme_support( 'title-tag' );

    // Enable support for Post Thumbnails
    add_theme_support( 'post-thumbnails' );

    // Register navigation menus
    register_nav_menus( array(
        'primary'   => esc_html__( 'Primary Menu', 'quotemyfence' ),
        'footer'    => esc_html__( 'Footer Menu', 'quotemyfence' ),
        'services'  => esc_html__( 'Services Menu', 'quotemyfence' ),
        'locations' => esc_html__( 'Locations Menu', 'quotemyfence' ),
    ) );

    // Add support for HTML5 markup
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ) );

    // Add support for custom logo
    add_theme_support( 'custom-logo', array(
        'height'      => 64,
        'width'       => 200,
        'flex-width'  => true,
        'flex-height' => true,
    ) );

    // Add support for responsive embeds
    add_theme_support( 'responsive-embeds' );

    // Add support for wide alignment
    add_theme_support( 'align-wide' );

    // Add support for editor styles
    add_theme_support( 'editor-styles' );
}
add_action( 'after_setup_theme', 'quotemyfence_setup' );

/**
 * Set the content width
 */
function quotemyfence_content_width() {
    $GLOBALS['content_width'] = apply_filters( 'quotemyfence_content_width', 1280 );
}
add_action( 'after_setup_theme', 'quotemyfence_content_width', 0 );

/**
 * Enqueue scripts and styles
 */
function quotemyfence_scripts() {
    // Google Fonts
    wp_enqueue_style(
        'quotemyfence-google-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        array(),
        null
    );

    // Main stylesheet
    wp_enqueue_style(
        'quotemyfence-style',
        get_stylesheet_uri(),
        array(),
        QUOTEMYFENCE_VERSION
    );

    // Main JavaScript
    wp_enqueue_script(
        'quotemyfence-main',
        get_template_directory_uri() . '/js/main.js',
        array(),
        QUOTEMYFENCE_VERSION,
        true
    );

    // Localize script for AJAX and other PHP variables
    wp_localize_script( 'quotemyfence-main', 'qmfData', array(
        'ajaxUrl'  => admin_url( 'admin-ajax.php' ),
        'quoteUrl' => qmf_get_quote_url(),
        'phone'    => qmf_get_phone(),
    ) );

    // Comment reply script
    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}
add_action( 'wp_enqueue_scripts', 'quotemyfence_scripts' );

/**
 * Register widget areas
 */
function quotemyfence_widgets_init() {
    register_sidebar( array(
        'name'          => esc_html__( 'Sidebar', 'quotemyfence' ),
        'id'            => 'sidebar-1',
        'description'   => esc_html__( 'Add widgets here.', 'quotemyfence' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );

    register_sidebar( array(
        'name'          => esc_html__( 'Footer Column 1', 'quotemyfence' ),
        'id'            => 'footer-1',
        'description'   => esc_html__( 'Footer column 1', 'quotemyfence' ),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ) );

    register_sidebar( array(
        'name'          => esc_html__( 'Footer Column 2', 'quotemyfence' ),
        'id'            => 'footer-2',
        'description'   => esc_html__( 'Footer column 2', 'quotemyfence' ),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ) );

    register_sidebar( array(
        'name'          => esc_html__( 'Footer Column 3', 'quotemyfence' ),
        'id'            => 'footer-3',
        'description'   => esc_html__( 'Footer column 3', 'quotemyfence' ),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ) );

    register_sidebar( array(
        'name'          => esc_html__( 'Footer Column 4', 'quotemyfence' ),
        'id'            => 'footer-4',
        'description'   => esc_html__( 'Footer column 4', 'quotemyfence' ),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ) );
}
add_action( 'widgets_init', 'quotemyfence_widgets_init' );

/**
 * Custom excerpt length
 */
function quotemyfence_excerpt_length( $length ) {
    return 25;
}
add_filter( 'excerpt_length', 'quotemyfence_excerpt_length' );

/**
 * Custom excerpt more
 */
function quotemyfence_excerpt_more( $more ) {
    return '...';
}
add_filter( 'excerpt_more', 'quotemyfence_excerpt_more' );

/**
 * Add custom body classes
 */
function quotemyfence_body_classes( $classes ) {
    if ( ! is_singular() ) {
        $classes[] = 'hfeed';
    }

    if ( is_front_page() ) {
        $classes[] = 'front-page';
    }

    return $classes;
}
add_filter( 'body_class', 'quotemyfence_body_classes' );

/**
 * Helper function to get quote URL
 */
function qmf_get_quote_url() {
    return esc_url( QUOTE_URL );
}

/**
 * Helper function to get phone number
 */
function qmf_get_phone() {
    return esc_html( PHONE_NUMBER );
}

/**
 * Helper function to get phone link
 */
function qmf_get_phone_link() {
    return 'tel:' . preg_replace('/[^0-9]/', '', PHONE_NUMBER);
}

/**
 * Helper function to get email address
 */
function qmf_get_email() {
    return esc_html( EMAIL_ADDRESS );
}

/**
 * Helper function to get SVG icon (alias for qmf_get_icon)
 * 
 * @param string $icon Icon name
 * @return string SVG markup
 */
function qmf_icon( $icon ) {
    $icons = array(
        'check'          => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
        'phone'          => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
        'mail'           => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
        'email'          => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
        'location'       => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
        'map-pin'        => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
        'arrow'          => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
        'clock'          => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
        'shield'         => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
        'award'          => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>',
        'message-square' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
        'facebook'       => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>',
        'twitter'        => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>',
        'instagram'      => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
        'linkedin'       => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
    );

    return isset( $icons[ $icon ] ) ? $icons[ $icon ] : '';
}

/**
 * Add Schema.org structured data
 */
function quotemyfence_schema_org() {
    if ( is_front_page() ) {
        $schema = array(
            '@context' => 'https://schema.org',
            '@type' => 'Organization',
            'name' => 'QuoteMyFence',
            'url' => home_url('/'),
            'logo' => get_template_directory_uri() . '/images/logo.png',
            'description' => 'Australia\'s #1 Fencing Quote Platform - Get 3 Free Quotes in Minutes',
            'telephone' => PHONE_NUMBER,
            'email' => EMAIL_ADDRESS,
            'areaServed' => array(
                '@type' => 'Country',
                'name' => 'Australia'
            ),
            'sameAs' => array(
                'https://www.facebook.com/quotemyfence',
                'https://www.instagram.com/quotemyfence'
            )
        );
        echo '<script type="application/ld+json">' . wp_json_encode( $schema ) . '</script>';
    }
}
add_action( 'wp_head', 'quotemyfence_schema_org' );

/**
 * Default menu fallback
 */
function quotemyfence_default_menu() {
    ?>
    <ul id="primary-menu">
        <li><a href="<?php echo esc_url( home_url( '/colorbond-fencing/' ) ); ?>"><?php esc_html_e( 'Colorbond', 'quotemyfence' ); ?></a></li>
        <li><a href="<?php echo esc_url( home_url( '/timber-fencing/' ) ); ?>"><?php esc_html_e( 'Timber', 'quotemyfence' ); ?></a></li>
        <li><a href="<?php echo esc_url( home_url( '/aluminium-fencing/' ) ); ?>"><?php esc_html_e( 'Aluminium', 'quotemyfence' ); ?></a></li>
        <li><a href="<?php echo esc_url( home_url( '/pool-fencing/' ) ); ?>"><?php esc_html_e( 'Pool Fencing', 'quotemyfence' ); ?></a></li>
        <li><a href="<?php echo esc_url( home_url( '/fencing-guides/' ) ); ?>"><?php esc_html_e( 'Guides', 'quotemyfence' ); ?></a></li>
        <li><a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>"><?php esc_html_e( 'Contact', 'quotemyfence' ); ?></a></li>
    </ul>
    <?php
}

/**
 * Add custom image sizes
 */
function quotemyfence_custom_image_sizes() {
    add_image_size( 'hero-image', 800, 600, true );
    add_image_size( 'card-image', 400, 300, true );
    add_image_size( 'guide-thumbnail', 600, 400, true );
}
add_action( 'after_setup_theme', 'quotemyfence_custom_image_sizes' );

/**
 * Disable WordPress emojis
 */
function quotemyfence_disable_emojis() {
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
    remove_action( 'admin_print_styles', 'print_emoji_styles' );
    remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
    remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
    remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
}
add_action( 'init', 'quotemyfence_disable_emojis' );

/**
 * Add preconnect for Google Fonts
 */
function quotemyfence_resource_hints( $urls, $relation_type ) {
    if ( 'preconnect' === $relation_type ) {
        $urls[] = array(
            'href' => 'https://fonts.googleapis.com',
            'crossorigin',
        );
        $urls[] = array(
            'href' => 'https://fonts.gstatic.com',
            'crossorigin',
        );
    }
    return $urls;
}
add_filter( 'wp_resource_hints', 'quotemyfence_resource_hints', 10, 2 );

/**
 * Custom title separator
 */
function quotemyfence_document_title_separator( $sep ) {
    return '—';
}
add_filter( 'document_title_separator', 'quotemyfence_document_title_separator' );

/**
 * Include template parts helper
 */
function qmf_get_template_part( $slug, $name = null, $args = array() ) {
    get_template_part( 'template-parts/' . $slug, $name, $args );
}

/**
 * Include additional theme files
 * NOTE: template-functions.php contains data helper functions
 * NOTE: customizer.php contains theme customizer settings
 */
require_once get_template_directory() . '/inc/template-functions.php';
require_once get_template_directory() . '/inc/customizer.php';

/**
 * Output breadcrumbs
 */
function qmf_breadcrumbs() {
    if ( is_front_page() ) return;
    
    echo '<nav class="breadcrumbs" aria-label="Breadcrumb">';
    echo '<div class="container">';
    echo '<ol itemscope itemtype="https://schema.org/BreadcrumbList">';
    
    echo '<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">';
    echo '<a itemprop="item" href="' . esc_url( home_url('/') ) . '"><span itemprop="name">Home</span></a>';
    echo '<meta itemprop="position" content="1" />';
    echo '</li>';
    
    $position = 2;
    
    if ( is_page() ) {
        $ancestors = get_post_ancestors( get_the_ID() );
        if ( $ancestors ) {
            $ancestors = array_reverse( $ancestors );
            foreach ( $ancestors as $ancestor ) {
                echo '<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">';
                echo '<a itemprop="item" href="' . esc_url( get_permalink( $ancestor ) ) . '"><span itemprop="name">' . esc_html( get_the_title( $ancestor ) ) . '</span></a>';
                echo '<meta itemprop="position" content="' . $position . '" />';
                echo '</li>';
                $position++;
            }
        }
        echo '<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">';
        echo '<span itemprop="name">' . esc_html( get_the_title() ) . '</span>';
        echo '<meta itemprop="position" content="' . $position . '" />';
        echo '</li>';
    }
    
    echo '</ol>';
    echo '</div>';
    echo '</nav>';
}
