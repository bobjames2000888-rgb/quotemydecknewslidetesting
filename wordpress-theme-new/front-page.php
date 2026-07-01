<?php
/**
 * Template Name: Front Page
 * The template for displaying the home page
 *
 * @package QuoteMyFence
 */

get_header();
?>

<section class="hero-section">
    <div class="container">
        <div class="hero-content text-center">
            <div class="hero-badge">
                <span>🏆</span>
                <span>Australia's #1 Fencing Quote Platform</span>
            </div>
            <h1 class="hero-title">
                Get Free Fencing Quotes<br>
                <span class="text-gradient">From Verified Tradies</span>
            </h1>
            <p class="hero-description" style="margin: 0 auto 2rem;">
                Connect with trusted local fencing contractors in minutes. Compare quotes, read reviews, and save on your fencing project.
            </p>
            <div class="hero-buttons" style="justify-content: center;">
                <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-primary btn-lg">Get 3 Free Quotes</a>
                <a href="<?php echo esc_url( qmf_get_phone_link() ); ?>" class="btn btn-outline btn-lg">Call <?php echo qmf_get_phone(); ?></a>
            </div>
        </div>
    </div>
</section>

<section class="section-muted">
    <div class="container">
        <div class="section-header">
            <h2>How It Works</h2>
            <p>Get matched with verified fencing contractors in 3 simple steps</p>
        </div>
        <div class="grid grid-3">
            <div class="card">
                <div class="card-content text-center">
                    <div class="icon-box" style="margin: 0 auto 1rem;">
                        <span style="color: white; font-size: 1.5rem;">1</span>
                    </div>
                    <h3>Tell Us Your Needs</h3>
                    <p style="color: hsl(var(--muted-foreground));">Complete our quick form with your fencing requirements</p>
                </div>
            </div>
            <div class="card">
                <div class="card-content text-center">
                    <div class="icon-box" style="margin: 0 auto 1rem;">
                        <span style="color: white; font-size: 1.5rem;">2</span>
                    </div>
                    <h3>Get Matched</h3>
                    <p style="color: hsl(var(--muted-foreground));">We connect you with up to 3 verified local contractors</p>
                </div>
            </div>
            <div class="card">
                <div class="card-content text-center">
                    <div class="icon-box" style="margin: 0 auto 1rem;">
                        <span style="color: white; font-size: 1.5rem;">3</span>
                    </div>
                    <h3>Compare & Choose</h3>
                    <p style="color: hsl(var(--muted-foreground));">Review quotes and select the best contractor for your project</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <div class="section-header">
            <h2>Popular Fence Types</h2>
            <p>Explore our most popular fencing solutions</p>
        </div>
        <div class="grid grid-4">
            <a href="<?php echo esc_url( home_url( '/colorbond-fencing/' ) ); ?>" class="card">
                <div class="card-content text-center">
                    <div class="icon-box" style="margin: 0 auto 1rem; width: 4rem; height: 4rem;">
                        <span style="color: white; font-size: 1.75rem;">🏠</span>
                    </div>
                    <h3>Colorbond</h3>
                    <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem;">15 colour options</p>
                </div>
            </a>
            <a href="<?php echo esc_url( home_url( '/timber-fencing/' ) ); ?>" class="card">
                <div class="card-content text-center">
                    <div class="icon-box" style="margin: 0 auto 1rem; width: 4rem; height: 4rem;">
                        <span style="color: white; font-size: 1.75rem;">🌲</span>
                    </div>
                    <h3>Timber</h3>
                    <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem;">Natural beauty</p>
                </div>
            </a>
            <a href="<?php echo esc_url( home_url( '/aluminium-fencing/' ) ); ?>" class="card">
                <div class="card-content text-center">
                    <div class="icon-box" style="margin: 0 auto 1rem; width: 4rem; height: 4rem;">
                        <span style="color: white; font-size: 1.75rem;">✨</span>
                    </div>
                    <h3>Aluminium</h3>
                    <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem;">Modern & sleek</p>
                </div>
            </a>
            <a href="<?php echo esc_url( home_url( '/pool-fencing/' ) ); ?>" class="card">
                <div class="card-content text-center">
                    <div class="icon-box" style="margin: 0 auto 1rem; width: 4rem; height: 4rem;">
                        <span style="color: white; font-size: 1.75rem;">🏊</span>
                    </div>
                    <h3>Pool Fencing</h3>
                    <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem;">Safety certified</p>
                </div>
            </a>
        </div>
    </div>
</section>

<section class="section-muted">
    <div class="container">
        <div class="section-header">
            <h2>What Our Customers Say</h2>
            <p>Join thousands of satisfied homeowners</p>
        </div>
        <div class="grid grid-3">
            <div class="card">
                <div class="card-content">
                    <div class="review-stars mb-4">★★★★★</div>
                    <p class="review-text">"Excellent service from start to finish. Got 3 quotes within hours and saved $1,200 on my Colorbond fence."</p>
                    <p style="margin-top: 1rem; font-weight: 600;">— Sarah M., Sydney</p>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <div class="review-stars mb-4">★★★★★</div>
                    <p class="review-text">"The contractors were professional and the fence looks amazing. Highly recommend this service!"</p>
                    <p style="margin-top: 1rem; font-weight: 600;">— James T., Melbourne</p>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <div class="review-stars mb-4">★★★★★</div>
                    <p class="review-text">"Quick, easy, and free. What more could you ask for? Great platform for finding fencing contractors."</p>
                    <p style="margin-top: 1rem; font-weight: 600;">— Michelle R., Brisbane</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <div class="section-header">
            <h2>Frequently Asked Questions</h2>
        </div>
        <div style="max-width: 800px; margin: 0 auto;">
            <div class="accordion-item">
                <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('active')">
                    How do I get a fencing quote?
                    <span>+</span>
                </button>
                <div class="accordion-content">
                    Simply click 'Get Free Quotes' on our website, fill out the quick form with your fencing requirements, and we'll connect you with up to 3 verified local contractors who will provide competitive quotes within 1-48 hours.
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('active')">
                    Is the quote service really free?
                    <span>+</span>
                </button>
                <div class="accordion-content">
                    Yes, our quote service is completely free for homeowners. There are no hidden fees or obligations.
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('active')">
                    How much does fencing cost per metre?
                    <span>+</span>
                </button>
                <div class="accordion-content">
                    Costs vary by material: Colorbond $75-150/m, Timber $65-120/m, Aluminium $170-300/m, Glass Pool Fencing $300-600/m. These are estimates and actual prices depend on your specific requirements.
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container" style="max-width: 800px;">
        <div class="cta-section">
            <h2>Ready to Get Started?</h2>
            <p>Get free quotes from verified fencing contractors today</p>
            <div class="cta-buttons">
                <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-secondary btn-lg">Get 3 Free Quotes Now</a>
                <a href="<?php echo esc_url( qmf_get_phone_link() ); ?>" class="btn btn-outline btn-lg" style="background: rgba(255,255,255,0.1); color: white; border-color: rgba(255,255,255,0.3);">Call <?php echo qmf_get_phone(); ?></a>
            </div>
        </div>
    </div>
</section>

<?php
get_footer();
