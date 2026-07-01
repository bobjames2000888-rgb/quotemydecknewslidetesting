<?php
/**
 * Template Part: CTA Section
 * 
 * Reusable call-to-action section for pages
 * 
 * @package QuoteMyFence
 */

$cta_title = isset( $args['title'] ) ? $args['title'] : __( 'Ready to Get Your Fence Quote?', 'quotemyfence' );
$cta_description = isset( $args['description'] ) ? $args['description'] : __( 'Compare local fencing professionals and get free quotes in 60 seconds.', 'quotemyfence' );
$cta_button_text = isset( $args['button_text'] ) ? $args['button_text'] : __( 'Get 3 Free Quotes Now', 'quotemyfence' );
$suburb = isset( $args['suburb'] ) ? $args['suburb'] : '';
?>

<section style="padding: 5rem 0;">
    <div class="container" style="max-width: 800px;">
        <div class="cta-section">
            <h2 style="color: white;"><?php echo esc_html( $cta_title ); ?></h2>
            <p style="color: rgba(255,255,255,0.9);"><?php echo esc_html( $cta_description ); ?></p>
            <div class="cta-buttons">
                <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-secondary btn-lg">
                    <?php echo esc_html( $cta_button_text ); ?>
                </a>
                <a href="<?php echo esc_url( qmf_get_phone_link() ); ?>" class="btn btn-outline btn-lg" style="background: rgba(255,255,255,0.1); color: white; border-color: rgba(255,255,255,0.3);">
                    📞 Call <?php echo esc_html( qmf_get_phone() ); ?>
                </a>
            </div>
        </div>
    </div>
</section>
