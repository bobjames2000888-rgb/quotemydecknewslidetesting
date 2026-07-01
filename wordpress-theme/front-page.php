<?php
/**
 * The front page template file
 *
 * @package QuoteMyFence
 */

get_header();
?>

<main id="main-content" class="site-main front-page-content">
    
    <?php if ( have_posts() ) : ?>
        <?php while ( have_posts() ) : the_post(); ?>
            
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <div class="entry-content">
                    <?php the_content(); ?>
                </div>
            </article>

        <?php endwhile; ?>
    <?php else : ?>
        
        <!-- Default Homepage Content -->
        <section class="hero-section" style="background: linear-gradient(135deg, #1a2634, #0d1520); color: white; padding: 8rem 1rem 6rem; text-align: center;">
            <div class="container">
                <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">Get Free Fencing Quotes in Minutes</h1>
                <p style="font-size: 1.25rem; opacity: 0.9; max-width: 600px; margin: 0 auto 2rem;">Compare Prices & Save on Your Fence Installation — only verified, top-rated fencing contractors quote on your job.</p>
                <a href="#quote" class="btn btn-primary" style="font-size: 1.125rem; padding: 1rem 2rem;">Get Your Free Quote Now</a>
            </div>
        </section>

        <section class="how-it-works section">
            <div class="container" style="text-align: center;">
                <h2>How It Works</h2>
                <p>Get your fence project started in 3 easy steps</p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-top: 2rem;">
                    <div class="card" style="text-align: center; padding: 2rem;">
                        <h3>1. Submit Request</h3>
                        <p>Tell us about your fencing project in 60 seconds</p>
                    </div>
                    <div class="card" style="text-align: center; padding: 2rem;">
                        <h3>2. Receive Quotes</h3>
                        <p>Get up to 3 competitive quotes within minutes</p>
                    </div>
                    <div class="card" style="text-align: center; padding: 2rem;">
                        <h3>3. Choose & Save</h3>
                        <p>Compare and hire the best contractor for you</p>
                    </div>
                </div>
            </div>
        </section>

    <?php endif; ?>

</main>

<?php
get_footer();
