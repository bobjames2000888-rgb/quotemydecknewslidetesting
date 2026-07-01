<?php
/**
 * Template Name: City Page
 * Generic template for city pages (Sydney, Melbourne, Brisbane, etc.)
 *
 * @package QuoteMyFence
 */

get_header();
$city_name = get_the_title();
?>

<section class="hero-section">
    <div class="container">
        <div class="hero-content text-center">
            <div class="hero-badge">
                <span>📍</span>
                <span>Servicing All <?php echo esc_html($city_name); ?> Suburbs</span>
            </div>
            <h1 class="hero-title"><?php echo esc_html($city_name); ?>'s Most Trusted<br><span class="text-gradient">Fencing Specialists</span></h1>
            <p class="hero-description" style="margin: 0 auto 2rem;">Professional fencing installation and repair services across Greater <?php echo esc_html($city_name); ?>. Local tradies, trusted by thousands of homeowners.</p>
            <div class="hero-buttons" style="justify-content: center;">
                <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-primary btn-lg">Get Free <?php echo esc_html($city_name); ?> Quotes</a>
                <a href="<?php echo esc_url( qmf_get_phone_link() ); ?>" class="btn btn-outline btn-lg">Call <?php echo qmf_get_phone(); ?></a>
            </div>
        </div>
    </div>
</section>

<section class="section-muted">
    <div class="container">
        <div class="grid grid-4 text-center">
            <div class="card"><div class="card-content"><div class="icon-box" style="margin: 0 auto 1rem;">👥</div><div style="font-size: 2rem; font-weight: 700;">2,500+</div><div style="color: hsl(var(--muted-foreground));">Jobs Quoted</div></div></div>
            <div class="card"><div class="card-content"><div class="icon-box" style="margin: 0 auto 1rem;">⭐</div><div style="font-size: 2rem; font-weight: 700;">4.8/5</div><div style="color: hsl(var(--muted-foreground));">Average Rating</div></div></div>
            <div class="card"><div class="card-content"><div class="icon-box" style="margin: 0 auto 1rem;">🕐</div><div style="font-size: 2rem; font-weight: 700;">15+</div><div style="color: hsl(var(--muted-foreground));">Years Experience</div></div></div>
            <div class="card"><div class="card-content"><div class="icon-box" style="margin: 0 auto 1rem;">📍</div><div style="font-size: 2rem; font-weight: 700;">500+</div><div style="color: hsl(var(--muted-foreground));">Suburbs Serviced</div></div></div>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <div class="section-header">
            <h2>We Service All <?php echo esc_html($city_name); ?> Suburbs</h2>
        </div>
        <?php the_content(); ?>
    </div>
</section>

<section>
    <div class="container" style="max-width: 800px;">
        <div class="cta-section">
            <h2>Ready to Get Started in <?php echo esc_html($city_name); ?>?</h2>
            <p>Get free quotes from verified fencing contractors today</p>
            <div class="cta-buttons">
                <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-secondary btn-lg">Get 3 Free Quotes Now</a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
