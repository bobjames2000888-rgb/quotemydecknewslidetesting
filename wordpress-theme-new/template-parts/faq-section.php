<?php
/**
 * Template Part: FAQ Section
 * 
 * Reusable FAQ accordion section
 * 
 * @package QuoteMyFence
 */

$title = isset( $args['title'] ) ? $args['title'] : __( 'Frequently Asked Questions', 'quotemyfence' );
$faqs = isset( $args['faqs'] ) ? $args['faqs'] : array();

// Default FAQs if none provided
if ( empty( $faqs ) ) {
    $faqs = array(
        array(
            'question' => __( 'How do I get a fencing quote?', 'quotemyfence' ),
            'answer'   => __( 'Simply click "Get Free Quotes" on our website, fill out the quick form with your fencing requirements, and we\'ll connect you with up to 3 verified local contractors.', 'quotemyfence' ),
        ),
        array(
            'question' => __( 'Is the quote service really free?', 'quotemyfence' ),
            'answer'   => __( 'Yes, our quote service is completely free for homeowners. There are no hidden fees or obligations.', 'quotemyfence' ),
        ),
        array(
            'question' => __( 'How are contractors verified?', 'quotemyfence' ),
            'answer'   => __( 'All contractors undergo license verification, insurance checks, and reference verification before being listed on our platform.', 'quotemyfence' ),
        ),
        array(
            'question' => __( 'How much does fencing cost per metre?', 'quotemyfence' ),
            'answer'   => __( 'Costs vary by material: Colorbond $75-150/m, Timber $65-120/m, Aluminium $170-300/m. Get accurate quotes for your specific project.', 'quotemyfence' ),
        ),
    );
}
?>

<section class="faq-section">
    <div class="container" style="max-width: 800px;">
        <div class="section-header text-center">
            <h2><?php echo esc_html( $title ); ?></h2>
        </div>
        <div class="faq-list">
            <?php foreach ( $faqs as $faq ) : ?>
                <div class="accordion-item">
                    <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('active')">
                        <?php echo esc_html( $faq['question'] ); ?>
                        <span>+</span>
                    </button>
                    <div class="accordion-content">
                        <?php echo esc_html( $faq['answer'] ); ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
