<?php
/**
 * The main template file - Homepage
 * Complete homepage matching live site exactly
 * @package QuoteMyFence
 */

get_header();
?>

<!-- Hero Section -->
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
            <p class="hero-description" style="margin: 0 auto 2rem; max-width: 700px;">
                Connect with trusted local fencing contractors in minutes. Compare quotes, read reviews, and save on your fencing project.
            </p>
            <div class="hero-buttons" style="justify-content: center;">
                <a href="<?php echo esc_url(qmf_get_quote_url()); ?>" class="btn btn-primary btn-lg">Get 3 Free Quotes</a>
                <a href="<?php echo esc_url(qmf_get_phone_link()); ?>" class="btn btn-outline btn-lg">📞 Call <?php echo qmf_get_phone(); ?></a>
            </div>
        </div>
    </div>
</section>

<!-- How It Works Section -->
<section class="section-muted">
    <div class="container">
        <div class="section-header text-center">
            <h2>How It Works</h2>
            <p>Get matched with verified fencing contractors in 3 simple steps</p>
        </div>
        <div class="grid grid-3">
            <div class="card">
                <div class="card-content text-center">
                    <div class="icon-box" style="margin: 0 auto 1rem; width: 3rem; height: 3rem;">
                        <span style="color: white; font-size: 1.25rem; font-weight: 700;">1</span>
                    </div>
                    <h3>Tell Us Your Needs</h3>
                    <p style="color: hsl(var(--muted-foreground)); margin: 0;">Complete our quick form with your fencing requirements</p>
                </div>
            </div>
            <div class="card">
                <div class="card-content text-center">
                    <div class="icon-box" style="margin: 0 auto 1rem; width: 3rem; height: 3rem;">
                        <span style="color: white; font-size: 1.25rem; font-weight: 700;">2</span>
                    </div>
                    <h3>Get Matched</h3>
                    <p style="color: hsl(var(--muted-foreground)); margin: 0;">We connect you with up to 3 verified local contractors</p>
                </div>
            </div>
            <div class="card">
                <div class="card-content text-center">
                    <div class="icon-box" style="margin: 0 auto 1rem; width: 3rem; height: 3rem;">
                        <span style="color: white; font-size: 1.25rem; font-weight: 700;">3</span>
                    </div>
                    <h3>Compare & Choose</h3>
                    <p style="color: hsl(var(--muted-foreground)); margin: 0;">Review quotes and select the best contractor for your project</p>
                </div>
            </div>
        </div>
        <div class="text-center" style="margin-top: 2rem;">
            <a href="<?php echo esc_url(qmf_get_quote_url()); ?>" class="btn btn-primary btn-lg">Get Started Now</a>
        </div>
    </div>
</section>

<!-- Popular Fence Types Section -->
<section style="padding: 5rem 0;">
    <div class="container">
        <div class="section-header text-center">
            <h2>Popular Fence Types</h2>
            <p>Explore our most popular fencing solutions</p>
        </div>
        <div class="grid grid-4" style="gap: 1.5rem;">
            <a href="<?php echo esc_url(home_url('/colorbond-fencing/')); ?>" class="card" style="text-decoration: none; transition: transform 0.2s, box-shadow 0.2s;">
                <div class="card-content text-center">
                    <div class="icon-box" style="margin: 0 auto 1rem; width: 4rem; height: 4rem;">
                        <span style="color: white; font-size: 1.75rem;">🏠</span>
                    </div>
                    <h3 style="color: hsl(var(--foreground));">Colorbond</h3>
                    <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem; margin: 0;">15 colour options</p>
                </div>
            </a>
            <a href="<?php echo esc_url(home_url('/timber-fencing/')); ?>" class="card" style="text-decoration: none; transition: transform 0.2s, box-shadow 0.2s;">
                <div class="card-content text-center">
                    <div class="icon-box" style="margin: 0 auto 1rem; width: 4rem; height: 4rem;">
                        <span style="color: white; font-size: 1.75rem;">🌲</span>
                    </div>
                    <h3 style="color: hsl(var(--foreground));">Timber</h3>
                    <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem; margin: 0;">Natural beauty</p>
                </div>
            </a>
            <a href="<?php echo esc_url(home_url('/aluminium-fencing/')); ?>" class="card" style="text-decoration: none; transition: transform 0.2s, box-shadow 0.2s;">
                <div class="card-content text-center">
                    <div class="icon-box" style="margin: 0 auto 1rem; width: 4rem; height: 4rem;">
                        <span style="color: white; font-size: 1.75rem;">✨</span>
                    </div>
                    <h3 style="color: hsl(var(--foreground));">Aluminium</h3>
                    <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem; margin: 0;">Modern & sleek</p>
                </div>
            </a>
            <a href="<?php echo esc_url(home_url('/pool-fencing/')); ?>" class="card" style="text-decoration: none; transition: transform 0.2s, box-shadow 0.2s;">
                <div class="card-content text-center">
                    <div class="icon-box" style="margin: 0 auto 1rem; width: 4rem; height: 4rem;">
                        <span style="color: white; font-size: 1.75rem;">🏊</span>
                    </div>
                    <h3 style="color: hsl(var(--foreground));">Pool Fencing</h3>
                    <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem; margin: 0;">Safety certified</p>
                </div>
            </a>
        </div>
    </div>
</section>

<!-- Customer Testimonials Section -->
<section class="section-muted">
    <div class="container">
        <div class="section-header text-center">
            <h2>What Our Customers Say</h2>
            <p>Join thousands of satisfied homeowners</p>
        </div>
        <div class="grid grid-3">
            <div class="card">
                <div class="card-content">
                    <div class="review-stars" style="color: hsl(var(--primary)); margin-bottom: 1rem;">★★★★★</div>
                    <p class="review-text" style="font-style: italic; margin-bottom: 1rem;">"Excellent service from start to finish. Got 3 quotes within hours and saved $1,200 on my Colorbond fence."</p>
                    <p style="font-weight: 600; margin: 0;">— Sarah M., Sydney</p>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <div class="review-stars" style="color: hsl(var(--primary)); margin-bottom: 1rem;">★★★★★</div>
                    <p class="review-text" style="font-style: italic; margin-bottom: 1rem;">"The contractors were professional and the fence looks amazing. Highly recommend this service!"</p>
                    <p style="font-weight: 600; margin: 0;">— James T., Melbourne</p>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <div class="review-stars" style="color: hsl(var(--primary)); margin-bottom: 1rem;">★★★★★</div>
                    <p class="review-text" style="font-style: italic; margin-bottom: 1rem;">"Quick, easy, and free. What more could you ask for? Great platform for finding fencing contractors."</p>
                    <p style="font-weight: 600; margin: 0;">— Michelle R., Brisbane</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- FAQ Section -->
<section style="padding: 5rem 0;">
    <div class="container" style="max-width: 900px;">
        <div class="section-header text-center">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about our service</p>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div class="card">
                <div class="card-content">
                    <h3 style="margin-bottom: 0.5rem;">Is your service really free?</h3>
                    <p style="color: hsl(var(--muted-foreground)); margin: 0;">Yes! Our service is 100% free for homeowners. We're paid by the contractors when they receive leads, so you never pay a cent.</p>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <h3 style="margin-bottom: 0.5rem;">How quickly will I receive quotes?</h3>
                    <p style="color: hsl(var(--muted-foreground)); margin: 0;">Most homeowners receive their first quote within 24 hours. You'll receive up to 3 quotes from verified local contractors.</p>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <h3 style="margin-bottom: 0.5rem;">Are the contractors verified?</h3>
                    <p style="color: hsl(var(--muted-foreground)); margin: 0;">Yes, all contractors in our network are verified, licensed, and insured. We check credentials and reviews before accepting any contractor.</p>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <h3 style="margin-bottom: 0.5rem;">What areas do you service?</h3>
                    <p style="color: hsl(var(--muted-foreground)); margin: 0;">We service all major Australian cities including Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra, Hobart, and Darwin.</p>
                </div>
            </div>
        </div>
        <div class="text-center" style="margin-top: 2rem;">
            <a href="<?php echo esc_url(home_url('/faq/')); ?>" class="btn btn-outline">View All FAQs</a>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section style="padding: 5rem 0;">
    <div class="container" style="max-width: 800px;">
        <div class="cta-section">
            <h2 style="color: white;">Ready to Get Started?</h2>
            <p style="color: rgba(255,255,255,0.9);">Get free quotes from verified fencing contractors today</p>
            <div class="cta-buttons" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="<?php echo esc_url(qmf_get_quote_url()); ?>" class="btn btn-secondary btn-lg">Get 3 Free Quotes Now</a>
                <a href="<?php echo esc_url(qmf_get_phone_link()); ?>" class="btn btn-outline btn-lg" style="background: rgba(255,255,255,0.1); color: white; border-color: rgba(255,255,255,0.3);">📞 Call <?php echo esc_html(qmf_get_phone()); ?></a>
            </div>
        </div>
    </div>
</section>

<style>
.card:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px -10px rgba(0,0,0,0.15);
}
</style>

<?php get_footer(); ?>
