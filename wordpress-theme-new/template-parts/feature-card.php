<?php
/**
 * Template Part: Feature Card
 * 
 * Reusable card component for features/benefits
 * 
 * @package QuoteMyFence
 */

$icon = isset( $args['icon'] ) ? $args['icon'] : '✓';
$title = isset( $args['title'] ) ? $args['title'] : '';
$description = isset( $args['description'] ) ? $args['description'] : '';
?>

<div class="feature-card">
    <div class="feature-icon">
        <?php echo esc_html( $icon ); ?>
    </div>
    <div class="feature-content">
        <?php if ( $title ) : ?>
            <h3><?php echo esc_html( $title ); ?></h3>
        <?php endif; ?>
        <?php if ( $description ) : ?>
            <p><?php echo esc_html( $description ); ?></p>
        <?php endif; ?>
    </div>
</div>
