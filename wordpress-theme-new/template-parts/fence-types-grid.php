<?php
/**
 * Template Part: Fence Types Grid
 * 
 * Reusable fence types grid section
 * 
 * @package QuoteMyFence
 */

$title = isset( $args['title'] ) ? $args['title'] : __( 'Popular Fence Types', 'quotemyfence' );
$subtitle = isset( $args['subtitle'] ) ? $args['subtitle'] : __( 'Choose from Australia\'s most popular fencing materials', 'quotemyfence' );

$fence_types = array(
    array(
        'title'       => __( 'Colorbond® Fencing', 'quotemyfence' ),
        'description' => __( 'Durable, low-maintenance steel fencing available in a range of colours.', 'quotemyfence' ),
        'price'       => __( 'From $75/m', 'quotemyfence' ),
        'link'        => home_url( '/colorbond-fencing/' ),
        'icon'        => '🏗️',
    ),
    array(
        'title'       => __( 'Timber Fencing', 'quotemyfence' ),
        'description' => __( 'Classic natural timber fencing for a warm, traditional look.', 'quotemyfence' ),
        'price'       => __( 'From $65/m', 'quotemyfence' ),
        'link'        => home_url( '/timber-fencing/' ),
        'icon'        => '🪵',
    ),
    array(
        'title'       => __( 'Aluminium Fencing', 'quotemyfence' ),
        'description' => __( 'Modern, rust-proof fencing ideal for pools and front yards.', 'quotemyfence' ),
        'price'       => __( 'From $170/m', 'quotemyfence' ),
        'link'        => home_url( '/aluminium-fencing/' ),
        'icon'        => '✨',
    ),
    array(
        'title'       => __( 'Steel Fencing', 'quotemyfence' ),
        'description' => __( 'Strong tubular steel for security and pool compliance.', 'quotemyfence' ),
        'price'       => __( 'From $100/m', 'quotemyfence' ),
        'link'        => home_url( '/steel-fencing/' ),
        'icon'        => '🔩',
    ),
    array(
        'title'       => __( 'Pool Fencing', 'quotemyfence' ),
        'description' => __( 'Compliant pool barriers in glass, aluminium or steel.', 'quotemyfence' ),
        'price'       => __( 'From $150/m', 'quotemyfence' ),
        'link'        => home_url( '/pool-fencing/' ),
        'icon'        => '🏊',
    ),
    array(
        'title'       => __( 'Security Fencing', 'quotemyfence' ),
        'description' => __( 'High-security options for commercial and residential properties.', 'quotemyfence' ),
        'price'       => __( 'From $120/m', 'quotemyfence' ),
        'link'        => home_url( '/security-fencing/' ),
        'icon'        => '🔒',
    ),
);
?>

<section class="fence-types-section">
    <div class="container">
        <div class="section-header text-center">
            <h2><?php echo esc_html( $title ); ?></h2>
            <p><?php echo esc_html( $subtitle ); ?></p>
        </div>
        <div class="fence-types-grid">
            <?php foreach ( $fence_types as $fence ) : ?>
                <a href="<?php echo esc_url( $fence['link'] ); ?>" class="fence-type-card">
                    <div class="fence-type-icon"><?php echo esc_html( $fence['icon'] ); ?></div>
                    <h3><?php echo esc_html( $fence['title'] ); ?></h3>
                    <p><?php echo esc_html( $fence['description'] ); ?></p>
                    <span class="fence-type-price"><?php echo esc_html( $fence['price'] ); ?></span>
                </a>
            <?php endforeach; ?>
        </div>
    </div>
</section>
