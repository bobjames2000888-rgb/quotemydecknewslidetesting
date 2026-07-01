<?php
/**
 * QuoteMyFence Theme Functions
 *
 * @package QuoteMyFence
 */

if ( ! defined( 'QUOTEMYFENCE_VERSION' ) ) {
    define( 'QUOTEMYFENCE_VERSION', '1.0.0' );
}

/**
 * Theme Setup
 */
function quotemyfence_setup() {
    // Add default posts and comments RSS feed links to head
    add_theme_support( 'automatic-feed-links' );

    // Let WordPress manage the document title
    add_theme_support( 'title-tag' );

    // Enable support for Post Thumbnails on posts and pages
    add_theme_support( 'post-thumbnails' );

    // Register navigation menus
    register_nav_menus( array(
        'primary'   => esc_html__( 'Primary Menu', 'quotemyfence' ),
        'footer'    => esc_html__( 'Footer Menu', 'quotemyfence' ),
    ) );

    // Switch default core markup to output valid HTML5
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
}
add_action( 'after_setup_theme', 'quotemyfence_setup' );

/**
 * Enqueue scripts and styles
 */
function quotemyfence_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style(
        'quotemyfence-style',
        get_stylesheet_uri(),
        array(),
        QUOTEMYFENCE_VERSION
    );

    // Enqueue comment reply script
    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}
add_action( 'wp_enqueue_scripts', 'quotemyfence_scripts' );

/**
 * Register widget area
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
        'name'          => esc_html__( 'Footer Widget Area', 'quotemyfence' ),
        'id'            => 'footer-1',
        'description'   => esc_html__( 'Add widgets to the footer area.', 'quotemyfence' ),
        'before_widget' => '<section id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</section>',
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
