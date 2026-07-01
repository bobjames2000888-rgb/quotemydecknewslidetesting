<?php
/**
 * Template Name: Subscription Confirmation
 * @package QuoteMyFence
 */
get_header();
?>

<section style="min-height: calc(100vh - 200px); display: flex; align-items: center; justify-content: center; padding: 2rem;">
    <div style="max-width: 28rem; text-center;">
        <!-- Success Icon -->
        <div class="icon-box" style="width: 5rem; height: 5rem; margin: 0 auto 2rem; border-radius: 50%;">
            <span style="font-size: 2.5rem; color: white;">✓</span>
        </div>

        <!-- Heading -->
        <h1 style="font-size: 2rem; font-weight: 700; color: hsl(var(--primary)); margin-bottom: 1rem;">
            <?php esc_html_e( "You're Subscribed!", 'quotemyfence' ); ?>
        </h1>

        <!-- Description -->
        <p style="font-size: 1.125rem; color: hsl(var(--muted-foreground)); margin-bottom: 2rem;">
            <?php esc_html_e( "Thank you for subscribing to our updates. We'll keep you informed with the latest fencing tips, offers, and news.", 'quotemyfence' ); ?>
        </p>

        <!-- Email Card -->
        <div class="card" style="margin-bottom: 2rem;">
            <div class="card-content" style="padding: 1.5rem;">
                <div style="display: flex; align-items: center; justify-content: center; gap: 0.75rem; margin-bottom: 1rem;">
                    <span style="font-size: 1.5rem;">✉️</span>
                    <span style="font-weight: 500; color: hsl(var(--foreground));"><?php esc_html_e( 'Check your inbox', 'quotemyfence' ); ?></span>
                </div>
                <p style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">
                    <?php esc_html_e( "A confirmation email has been sent to your address. Please check your spam folder if you don't see it.", 'quotemyfence' ); ?>
                </p>
            </div>
        </div>

        <!-- Back to Home Button -->
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn btn-primary btn-lg">
            ← <?php esc_html_e( 'Back to Home', 'quotemyfence' ); ?>
        </a>
    </div>
</section>

<?php get_footer(); ?>
