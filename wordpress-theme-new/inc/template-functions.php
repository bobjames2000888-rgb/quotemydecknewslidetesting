<?php
/**
 * Template Functions
 * 
 * Helper functions for templates - data providers
 * 
 * @package QuoteMyFence
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Get fence types data
 * 
 * @return array
 */
if ( ! function_exists( 'qmf_get_fence_types' ) ) {
    function qmf_get_fence_types() {
        return array(
            'colorbond' => array(
                'name'        => __( 'Colorbond Fencing', 'quotemyfence' ),
                'title'       => __( 'Colorbond® Fencing', 'quotemyfence' ),
                'slug'        => 'colorbond-fencing',
                'description' => __( 'Durable, low-maintenance steel fencing available in a range of colours.', 'quotemyfence' ),
                'price_from'  => '$75/m',
                'icon'        => '🏠',
            ),
            'timber' => array(
                'name'        => __( 'Timber Fencing', 'quotemyfence' ),
                'title'       => __( 'Timber Fencing', 'quotemyfence' ),
                'slug'        => 'timber-fencing',
                'description' => __( 'Classic natural timber fencing for a warm, traditional look.', 'quotemyfence' ),
                'price_from'  => '$65/m',
                'icon'        => '🌲',
            ),
            'aluminium' => array(
                'name'        => __( 'Aluminium Fencing', 'quotemyfence' ),
                'title'       => __( 'Aluminium Fencing', 'quotemyfence' ),
                'slug'        => 'aluminium-fencing',
                'description' => __( 'Modern, rust-proof fencing ideal for pools and front yards.', 'quotemyfence' ),
                'price_from'  => '$170/m',
                'icon'        => '✨',
            ),
            'steel' => array(
                'name'        => __( 'Steel Fencing', 'quotemyfence' ),
                'title'       => __( 'Steel Fencing', 'quotemyfence' ),
                'slug'        => 'steel-fencing',
                'description' => __( 'Strong tubular steel for security and pool compliance.', 'quotemyfence' ),
                'price_from'  => '$100/m',
                'icon'        => '🔩',
            ),
            'pool' => array(
                'name'        => __( 'Pool Fencing', 'quotemyfence' ),
                'title'       => __( 'Pool Fencing', 'quotemyfence' ),
                'slug'        => 'pool-fencing',
                'description' => __( 'Compliant pool barriers in glass, aluminium or steel.', 'quotemyfence' ),
                'price_from'  => '$150/m',
                'icon'        => '🏊',
            ),
            'security' => array(
                'name'        => __( 'Security Fencing', 'quotemyfence' ),
                'title'       => __( 'Security Fencing', 'quotemyfence' ),
                'slug'        => 'security-fencing',
                'description' => __( 'High-security options for commercial and residential.', 'quotemyfence' ),
                'price_from'  => '$120/m',
                'icon'        => '🔒',
            ),
            'glass' => array(
                'name'        => __( 'Glass Fencing', 'quotemyfence' ),
                'title'       => __( 'Glass Fencing', 'quotemyfence' ),
                'slug'        => 'glass-fencing',
                'description' => __( 'Premium frameless and semi-frameless glass barriers.', 'quotemyfence' ),
                'price_from'  => '$300/m',
                'icon'        => '🪟',
            ),
            'chain-link' => array(
                'name'        => __( 'Chain Link Fencing', 'quotemyfence' ),
                'title'       => __( 'Chain Link Fencing', 'quotemyfence' ),
                'slug'        => 'chain-link-fencing',
                'description' => __( 'Affordable and durable for large areas.', 'quotemyfence' ),
                'price_from'  => '$30/m',
                'icon'        => '🔗',
            ),
            'feature' => array(
                'name'        => __( 'Feature Fencing', 'quotemyfence' ),
                'title'       => __( 'Feature Fencing', 'quotemyfence' ),
                'slug'        => 'feature-fencing',
                'description' => __( 'Decorative laser-cut and architectural designs.', 'quotemyfence' ),
                'price_from'  => '$200/m',
                'icon'        => '🎨',
            ),
        );
    }
}

/**
 * Get Australian cities data
 * 
 * @return array
 */
if ( ! function_exists( 'qmf_get_cities' ) ) {
    function qmf_get_cities() {
        return array(
            'sydney' => array(
                'name'  => 'Sydney',
                'state' => 'NSW',
                'slug'  => 'sydney',
            ),
            'melbourne' => array(
                'name'  => 'Melbourne',
                'state' => 'VIC',
                'slug'  => 'melbourne',
            ),
            'brisbane' => array(
                'name'  => 'Brisbane',
                'state' => 'QLD',
                'slug'  => 'brisbane',
            ),
            'perth' => array(
                'name'  => 'Perth',
                'state' => 'WA',
                'slug'  => 'perth',
            ),
            'adelaide' => array(
                'name'  => 'Adelaide',
                'state' => 'SA',
                'slug'  => 'adelaide',
            ),
            'canberra' => array(
                'name'  => 'Canberra',
                'state' => 'ACT',
                'slug'  => 'canberra',
            ),
            'hobart' => array(
                'name'  => 'Hobart',
                'state' => 'TAS',
                'slug'  => 'hobart',
            ),
            'darwin' => array(
                'name'  => 'Darwin',
                'state' => 'NT',
                'slug'  => 'darwin',
            ),
        );
    }
}

/**
 * Get Melbourne suburbs data
 * 
 * @return array
 */
if ( ! function_exists( 'qmf_get_melbourne_suburbs' ) ) {
    function qmf_get_melbourne_suburbs() {
        return array(
            'pakenham'      => array( 'name' => 'Pakenham', 'slug' => 'pakenham' ),
            'berwick'       => array( 'name' => 'Berwick', 'slug' => 'berwick' ),
            'cranbourne'    => array( 'name' => 'Cranbourne', 'slug' => 'cranbourne' ),
            'narre-warren'  => array( 'name' => 'Narre Warren', 'slug' => 'narre-warren' ),
            'officer'       => array( 'name' => 'Officer', 'slug' => 'officer' ),
            'botanic-ridge' => array( 'name' => 'Botanic Ridge', 'slug' => 'botanic-ridge' ),
            'lynbrook'      => array( 'name' => 'Lynbrook', 'slug' => 'lynbrook' ),
            'ringwood'      => array( 'name' => 'Ringwood', 'slug' => 'ringwood' ),
            'lilydale'      => array( 'name' => 'Lilydale', 'slug' => 'lilydale' ),
            'rowville'      => array( 'name' => 'Rowville', 'slug' => 'rowville' ),
            'croydon'       => array( 'name' => 'Croydon', 'slug' => 'croydon' ),
            'box-hill'      => array( 'name' => 'Box Hill', 'slug' => 'box-hill' ),
            'toorak'        => array( 'name' => 'Toorak', 'slug' => 'toorak' ),
            'glen-waverley' => array( 'name' => 'Glen Waverley', 'slug' => 'glen-waverley' ),
            'richmond'      => array( 'name' => 'Richmond', 'slug' => 'richmond' ),
            'south-yarra'   => array( 'name' => 'South Yarra', 'slug' => 'south-yarra' ),
            'doncaster'     => array( 'name' => 'Doncaster', 'slug' => 'doncaster' ),
            'st-kilda'      => array( 'name' => 'St Kilda', 'slug' => 'st-kilda' ),
            'frankston'     => array( 'name' => 'Frankston', 'slug' => 'frankston' ),
            'mornington'    => array( 'name' => 'Mornington', 'slug' => 'mornington' ),
            'langwarrin'    => array( 'name' => 'Langwarrin', 'slug' => 'langwarrin' ),
            'carrum-downs'  => array( 'name' => 'Carrum Downs', 'slug' => 'carrum-downs' ),
            'mount-eliza'   => array( 'name' => 'Mount Eliza', 'slug' => 'mount-eliza' ),
            'mount-martha'  => array( 'name' => 'Mount Martha', 'slug' => 'mount-martha' ),
            'rosebud'       => array( 'name' => 'Rosebud', 'slug' => 'rosebud' ),
            'sorrento'      => array( 'name' => 'Sorrento', 'slug' => 'sorrento' ),
            'portsea'       => array( 'name' => 'Portsea', 'slug' => 'portsea' ),
        );
    }
}

/**
 * Get SVG icon
 * 
 * @param string $icon Icon name
 * @return string
 */
if ( ! function_exists( 'qmf_get_icon' ) ) {
    function qmf_get_icon( $icon ) {
        $icons = array(
            'check'    => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
            'phone'    => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
            'email'    => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
            'location' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
            'arrow'    => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
        );

        return isset( $icons[ $icon ] ) ? $icons[ $icon ] : '';
    }
}
