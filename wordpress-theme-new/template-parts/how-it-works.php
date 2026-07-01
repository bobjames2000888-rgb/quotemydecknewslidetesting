<?php
/**
 * Template Part: How It Works Section
 * 
 * Reusable how it works section
 * 
 * @package QuoteMyFence
 */

$title = isset( $args['title'] ) ? $args['title'] : __( 'How It Works', 'quotemyfence' );
$subtitle = isset( $args['subtitle'] ) ? $args['subtitle'] : __( 'Get quotes in 3 simple steps', 'quotemyfence' );

$steps = array(
    array(
        'number' => '1',
        'title'  => __( 'Tell Us About Your Fence', 'quotemyfence' ),
        'desc'   => __( 'Share your fencing requirements using our simple online form — it takes less than 60 seconds.', 'quotemyfence' ),
    ),
    array(
        'number' => '2',
        'title'  => __( 'Get Matched with Pros', 'quotemyfence' ),
        'desc'   => __( 'We connect you with up to 3 verified local fencing contractors who match your project needs.', 'quotemyfence' ),
    ),
    array(
        'number' => '3',
        'title'  => __( 'Compare & Choose', 'quotemyfence' ),
        'desc'   => __( 'Review quotes, compare prices and credentials, then choose the contractor that fits you best.', 'quotemyfence' ),
    ),
);
?>

<section class="how-it-works-section">
    <div class="container">
        <div class="section-header text-center">
            <h2><?php echo esc_html( $title ); ?></h2>
            <p><?php echo esc_html( $subtitle ); ?></p>
        </div>
        <div class="steps-grid">
            <?php foreach ( $steps as $step ) : ?>
                <div class="step-card">
                    <div class="step-number"><?php echo esc_html( $step['number'] ); ?></div>
                    <h3><?php echo esc_html( $step['title'] ); ?></h3>
                    <p><?php echo esc_html( $step['desc'] ); ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
