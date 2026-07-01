<?php
/**
 * Template Name: FAQ Page
 * @package QuoteMyFence
 */
get_header();
$faqs = array(
    'Getting Started' => array(
        array('q' => 'How do I get a fencing quote?', 'a' => 'Simply click \'Get Free Quote\' on our website, fill out the quick form with your fencing requirements, and we\'ll connect you with up to 3 verified local contractors who will provide competitive quotes within 24-48 hours.'),
        array('q' => 'Is the quote service really free?', 'a' => 'Yes, our quote service is completely free for homeowners. There are no hidden fees or obligations.'),
        array('q' => 'How long does it take to receive quotes?', 'a' => 'Most homeowners receive their first quote within 2 hours of submitting their request.'),
    ),
    'About Our Contractors' => array(
        array('q' => 'How are contractors verified?', 'a' => 'All contractors in our network undergo a thorough verification process including license verification, insurance checks, and reference verification.'),
        array('q' => 'Are the contractors licensed and insured?', 'a' => 'Yes, we only work with contractors who hold valid licenses and comprehensive insurance coverage.'),
    ),
    'Costs & Payment' => array(
        array('q' => 'How much does fencing cost per metre?', 'a' => 'Costs vary by material: Colorbond $75-150/m, Timber $80-180/m, Aluminium $100-200/m, Glass $300-600/m.'),
    ),
);
?>
<main id="main-content" class="site-main">
    <section class="page-hero"><div class="page-hero-overlay"></div><div class="container"><div class="page-hero-content">
        <div class="badge mb-6"><?php echo qmf_icon('message-square'); ?> Frequently Asked Questions</div>
        <h1>Got Questions? We've Got Answers</h1>
        <p>Find answers to common questions about our fencing quote service.</p>
    </div></div></section>
    <section class="section"><div class="container max-w-4xl mx-auto">
        <?php foreach($faqs as $cat => $items): ?>
        <div class="faq-category">
            <h2><?php echo esc_html($cat); ?></h2>
            <?php foreach($items as $faq): ?>
            <div class="faq-item">
                <div class="faq-question"><?php echo esc_html($faq['q']); ?></div>
                <div class="faq-answer" style="display:none;"><?php echo esc_html($faq['a']); ?></div>
            </div>
            <?php endforeach; ?>
        </div>
        <?php endforeach; ?>
    </div></section>
    <section class="cta-section" style="background:var(--primary);"><div class="container max-w-4xl mx-auto text-center" style="padding:4rem 1rem;">
        <?php echo qmf_icon('message-square'); ?>
        <h2 style="color:white;margin:1.5rem 0 1rem;">Still Have Questions?</h2>
        <p style="color:rgba(255,255,255,0.8);margin-bottom:2rem;">Our team is here to help with any fencing questions.</p>
        <div class="flex gap-4 justify-center flex-wrap">
            <a href="<?php echo esc_url(qmf_get_quote_url()); ?>" class="btn btn-primary btn-lg">Get Your Free Quote</a>
            <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn-outline btn-lg" style="border-color:rgba(255,255,255,0.2);color:white;">Contact Us</a>
        </div>
    </div></section>
</main>
<?php get_footer(); ?>