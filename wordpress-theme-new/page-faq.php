<?php
/**
 * Template Name: FAQ
 * @package QuoteMyFence
 */
get_header();
?>

<section class="hero-section" style="padding: 6rem 0 3rem;">
    <div class="container">
        <div class="hero-content text-center">
            <div class="hero-badge"><span>❓</span><span>Frequently Asked Questions</span></div>
            <h1 class="hero-title">Got Questions?<br>We've Got Answers</h1>
        </div>
    </div>
</section>

<section>
    <div class="container" style="max-width: 800px;">
        <h2 style="margin-bottom: 1.5rem;">Getting Started</h2>
        <div class="accordion-item"><button class="accordion-trigger" onclick="this.parentElement.classList.toggle('active')">How do I get a fencing quote?<span>+</span></button><div class="accordion-content">Simply click 'Get Free Quotes' on our website, fill out the quick form with your fencing requirements, and we'll connect you with up to 3 verified local contractors.</div></div>
        <div class="accordion-item"><button class="accordion-trigger" onclick="this.parentElement.classList.toggle('active')">Is the quote service really free?<span>+</span></button><div class="accordion-content">Yes, our quote service is completely free for homeowners. There are no hidden fees or obligations.</div></div>
        
        <h2 style="margin: 2rem 0 1.5rem;">About Our Contractors</h2>
        <div class="accordion-item"><button class="accordion-trigger" onclick="this.parentElement.classList.toggle('active')">How are contractors verified?<span>+</span></button><div class="accordion-content">All contractors undergo license verification, insurance checks, and reference verification.</div></div>
        
        <h2 style="margin: 2rem 0 1.5rem;">Costs & Payment</h2>
        <div class="accordion-item"><button class="accordion-trigger" onclick="this.parentElement.classList.toggle('active')">How much does fencing cost per metre?<span>+</span></button><div class="accordion-content">Costs vary by material: Colorbond $75-150/m, Timber $65-120/m, Aluminium $170-300/m.</div></div>
    </div>
</section>

<section style="background: hsl(var(--primary)); padding: 4rem 0;">
    <div class="container text-center">
        <h2 style="color: white; margin-bottom: 1rem;">Still Have Questions?</h2>
        <p style="color: rgba(255,255,255,0.8); margin-bottom: 2rem;">Our team is here to help with any fencing questions.</p>
        <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-secondary btn-lg">Get Your Free Quotes</a>
    </div>
</section>

<?php get_footer(); ?>
