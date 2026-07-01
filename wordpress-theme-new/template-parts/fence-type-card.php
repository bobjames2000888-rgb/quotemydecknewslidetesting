<?php
/**
 * Template Part: Fence Type Card
 * 
 * Reusable card component for fence types
 * 
 * @package QuoteMyFence
 */

$title = isset( $args['title'] ) ? $args['title'] : '';
$description = isset( $args['description'] ) ? $args['description'] : '';
$image = isset( $args['image'] ) ? $args['image'] : '';
$link = isset( $args['link'] ) ? $args['link'] : '#';
$price_from = isset( $args['price_from'] ) ? $args['price_from'] : '';
?>

<div class="fence-type-card">
    <?php if ( $image ) : ?>
        <div class="fence-type-image">
            <img src="<?php echo esc_url( $image ); ?>" alt="<?php echo esc_attr( $title ); ?>" loading="lazy">
        </div>
    <?php endif; ?>
    <div class="fence-type-content">
        <h3><?php echo esc_html( $title ); ?></h3>
        <?php if ( $description ) : ?>
            <p><?php echo esc_html( $description ); ?></p>
        <?php endif; ?>
        <?php if ( $price_from ) : ?>
            <p class="price-from"><?php echo esc_html( $price_from ); ?></p>
        <?php endif; ?>
        <a href="<?php echo esc_url( $link ); ?>" class="btn btn-outline">
            <?php esc_html_e( 'Learn More', 'quotemyfence' ); ?>
        </a>
    </div>
</div>
