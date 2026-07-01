<?php
/**
 * Template Name: Fencing Guides
 * @package QuoteMyFence
 */
get_header();
?>

<section class="hero-section" style="padding: 6rem 0 3rem;">
    <div class="container">
        <div class="hero-content text-center">
            <div class="hero-badge"><span>📚</span><span><?php esc_html_e( 'Expert Fencing Knowledge', 'quotemyfence' ); ?></span></div>
            <h1 class="hero-title"><?php esc_html_e( 'Fencing Guides &', 'quotemyfence' ); ?><br><span class="text-gradient"><?php esc_html_e( 'Expert Resources', 'quotemyfence' ); ?></span></h1>
            <p class="hero-description" style="margin: 0 auto;"><?php esc_html_e( 'Everything you need to know about fencing in Australia.', 'quotemyfence' ); ?></p>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <h2 style="margin-bottom: 2rem;"><?php esc_html_e( 'Popular Guides', 'quotemyfence' ); ?></h2>
        <div class="grid grid-3">
            <a href="<?php echo esc_url( home_url( '/guide/complete-guide-to-colorbond-fencing/' ) ); ?>" class="card guide-card">
                <div class="guide-card-image" style="background: linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--accent) / 0.2)); height: 200px;"></div>
                <div class="card-content">
                    <span class="badge"><?php esc_html_e( 'Installation', 'quotemyfence' ); ?></span>
                    <h3 style="margin: 1rem 0 0.5rem;"><?php esc_html_e( 'Complete Guide to Colorbond Fencing', 'quotemyfence' ); ?></h3>
                    <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem;"><?php esc_html_e( 'Everything about Colorbond fences in Australia.', 'quotemyfence' ); ?></p>
                </div>
            </a>
            <a href="<?php echo esc_url( home_url( '/guide/fence-height-regulations-by-state/' ) ); ?>" class="card guide-card">
                <div class="guide-card-image" style="background: linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--accent) / 0.2)); height: 200px;"></div>
                <div class="card-content">
                    <span class="badge"><?php esc_html_e( 'Regulations', 'quotemyfence' ); ?></span>
                    <h3 style="margin: 1rem 0 0.5rem;"><?php esc_html_e( 'Fence Height Regulations by State', 'quotemyfence' ); ?></h3>
                    <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem;"><?php esc_html_e( 'Australian fence height regulations and permits.', 'quotemyfence' ); ?></p>
                </div>
            </a>
            <a href="<?php echo esc_url( home_url( '/guide/choosing-the-right-fence-material/' ) ); ?>" class="card guide-card">
                <div class="guide-card-image" style="background: linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--accent) / 0.2)); height: 200px;"></div>
                <div class="card-content">
                    <span class="badge"><?php esc_html_e( 'Materials', 'quotemyfence' ); ?></span>
                    <h3 style="margin: 1rem 0 0.5rem;"><?php esc_html_e( 'Choosing the Right Fence Material', 'quotemyfence' ); ?></h3>
                    <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem;"><?php esc_html_e( 'Compare timber, Colorbond, aluminium, and glass.', 'quotemyfence' ); ?></p>
                </div>
            </a>
            <a href="<?php echo esc_url( home_url( '/guide/pool-fencing-safety-guide/' ) ); ?>" class="card guide-card">
                <div class="guide-card-image" style="background: linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--accent) / 0.2)); height: 200px;"></div>
                <div class="card-content">
                    <span class="badge"><?php esc_html_e( 'Safety', 'quotemyfence' ); ?></span>
                    <h3 style="margin: 1rem 0 0.5rem;"><?php esc_html_e( 'Pool Fencing Safety Guide', 'quotemyfence' ); ?></h3>
                    <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem;"><?php esc_html_e( 'Essential safety requirements for pool fencing.', 'quotemyfence' ); ?></p>
                </div>
            </a>
            <a href="<?php echo esc_url( home_url( '/guide/fence-online-quote-guide/' ) ); ?>" class="card guide-card">
                <div class="guide-card-image" style="background: linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--accent) / 0.2)); height: 200px;"></div>
                <div class="card-content">
                    <span class="badge"><?php esc_html_e( 'Cost', 'quotemyfence' ); ?></span>
                    <h3 style="margin: 1rem 0 0.5rem;"><?php esc_html_e( 'Fence Online Quote Guide', 'quotemyfence' ); ?></h3>
                    <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem;"><?php esc_html_e( 'Understand how to get better fencing quotes online.', 'quotemyfence' ); ?></p>
                </div>
            </a>
        </div>
    </div>
</section>

<?php get_footer(); ?>
