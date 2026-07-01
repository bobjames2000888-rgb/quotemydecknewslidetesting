<?php
/**
 * Theme Customizer
 * 
 * @package QuoteMyFence
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Add customizer settings
 * 
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function qmf_customize_register( $wp_customize ) {
    
    // Add Theme Options Panel
    $wp_customize->add_panel( 'qmf_theme_options', array(
        'title'    => __( 'QuoteMyFence Options', 'quotemyfence' ),
        'priority' => 30,
    ) );

    // Contact Information Section
    $wp_customize->add_section( 'qmf_contact_section', array(
        'title'    => __( 'Contact Information', 'quotemyfence' ),
        'panel'    => 'qmf_theme_options',
        'priority' => 10,
    ) );

    // Phone Number
    $wp_customize->add_setting( 'qmf_phone', array(
        'default'           => '1300 000 000',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( 'qmf_phone', array(
        'label'   => __( 'Phone Number', 'quotemyfence' ),
        'section' => 'qmf_contact_section',
        'type'    => 'text',
    ) );

    // Email
    $wp_customize->add_setting( 'qmf_email', array(
        'default'           => 'info@quotemyfence.com.au',
        'sanitize_callback' => 'sanitize_email',
    ) );

    $wp_customize->add_control( 'qmf_email', array(
        'label'   => __( 'Email Address', 'quotemyfence' ),
        'section' => 'qmf_contact_section',
        'type'    => 'email',
    ) );

    // Quote URL Section
    $wp_customize->add_section( 'qmf_urls_section', array(
        'title'    => __( 'URLs & Links', 'quotemyfence' ),
        'panel'    => 'qmf_theme_options',
        'priority' => 20,
    ) );

    // Quote URL
    $wp_customize->add_setting( 'qmf_quote_url', array(
        'default'           => 'https://app.quotemyfence.com.au/#/step/1',
        'sanitize_callback' => 'esc_url_raw',
    ) );

    $wp_customize->add_control( 'qmf_quote_url', array(
        'label'   => __( 'Quote Form URL', 'quotemyfence' ),
        'section' => 'qmf_urls_section',
        'type'    => 'url',
    ) );

    // Social Media Section
    $wp_customize->add_section( 'qmf_social_section', array(
        'title'    => __( 'Social Media', 'quotemyfence' ),
        'panel'    => 'qmf_theme_options',
        'priority' => 30,
    ) );

    // Facebook
    $wp_customize->add_setting( 'qmf_facebook', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ) );

    $wp_customize->add_control( 'qmf_facebook', array(
        'label'   => __( 'Facebook URL', 'quotemyfence' ),
        'section' => 'qmf_social_section',
        'type'    => 'url',
    ) );

    // Instagram
    $wp_customize->add_setting( 'qmf_instagram', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ) );

    $wp_customize->add_control( 'qmf_instagram', array(
        'label'   => __( 'Instagram URL', 'quotemyfence' ),
        'section' => 'qmf_social_section',
        'type'    => 'url',
    ) );

    // LinkedIn
    $wp_customize->add_setting( 'qmf_linkedin', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ) );

    $wp_customize->add_control( 'qmf_linkedin', array(
        'label'   => __( 'LinkedIn URL', 'quotemyfence' ),
        'section' => 'qmf_social_section',
        'type'    => 'url',
    ) );

    // Footer Section
    $wp_customize->add_section( 'qmf_footer_section', array(
        'title'    => __( 'Footer', 'quotemyfence' ),
        'panel'    => 'qmf_theme_options',
        'priority' => 40,
    ) );

    // Footer Copyright
    $wp_customize->add_setting( 'qmf_copyright', array(
        'default'           => '© ' . date( 'Y' ) . ' QuoteMyFence. All rights reserved.',
        'sanitize_callback' => 'wp_kses_post',
    ) );

    $wp_customize->add_control( 'qmf_copyright', array(
        'label'   => __( 'Copyright Text', 'quotemyfence' ),
        'section' => 'qmf_footer_section',
        'type'    => 'textarea',
    ) );
}
add_action( 'customize_register', 'qmf_customize_register' );
