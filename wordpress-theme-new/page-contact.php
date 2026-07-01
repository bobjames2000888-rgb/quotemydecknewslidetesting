<?php
/**
 * Template Name: Contact
 * Complete template matching live React page
 * @package QuoteMyFence
 */
get_header();

$contactInfo = array(
    array('icon' => '📞', 'title' => 'Phone', 'details' => qmf_get_phone(), 'subtext' => '24 Hours 7 Days A Week'),
    array('icon' => '✉️', 'title' => 'Email', 'details' => qmf_get_email(), 'subtext' => 'We reply within hours'),
    array('icon' => '📍', 'title' => 'Service Areas', 'details' => 'All Major Cities', 'subtext' => 'Sydney, Melbourne, Brisbane & more'),
);
?>

<!-- Hero Section -->
<section class="hero-section" style="padding: 6rem 0 3rem;">
    <div class="container">
        <div class="hero-content text-center">
            <div class="hero-badge" style="justify-content: center;">
                <span>💬</span>
                <span>We're Here to Help</span>
            </div>
            <h1 class="hero-title">
                Get in Touch with<br>
                <span class="text-gradient">Our Expert Team</span>
            </h1>
            <p class="hero-description" style="margin: 0 auto;">
                Have questions about fencing? Our friendly team is ready to help.
            </p>
        </div>
    </div>
</section>

<!-- Contact Info Section -->
<section class="section-muted">
    <div class="container">
        <div class="grid grid-3" style="max-width: 900px; margin: 0 auto;">
            <?php foreach ($contactInfo as $info) : ?>
            <div class="card text-center hover-scale">
                <div class="card-content">
                    <div class="icon-box" style="margin: 0 auto 1rem;">
                        <?php echo $info['icon']; ?>
                    </div>
                    <h3><?php echo esc_html($info['title']); ?></h3>
                    <p style="font-size: 1.25rem; font-weight: 700; color: hsl(var(--accent));">
                        <?php echo esc_html($info['details']); ?>
                    </p>
                    <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem;">
                        <?php echo esc_html($info['subtext']); ?>
                    </p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section style="padding: 5rem 0;">
    <!-- Empty section for spacing as per React component -->
</section>

<?php get_footer(); ?>
