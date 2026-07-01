<?php
/**
 * Template Part: Complete City Page Content
 * This file contains all sections for city pages (Sydney, Melbourne, etc.)
 * Variables: $city_name and $state must be defined before including
 * @package QuoteMyFence
 */

if (!isset($city_name)) {
    $city_name = 'Melbourne';
}
if (!isset($state)) {
    $state = 'VIC';
}

// City-specific stats
$stats = array(
    array('icon' => '👥', 'value' => '2,800+', 'label' => 'Jobs Quoted'),
    array('icon' => '⭐', 'value' => '4.7/5', 'label' => 'Average Rating'),
    array('icon' => '🕐', 'value' => '15+', 'label' => 'Years Experience'),
    array('icon' => '📍', 'value' => '580+', 'label' => 'Suburbs Serviced'),
);

// Recent projects reviews
$recent_projects = array(
    array(
        'suburb' => 'Richmond',
        'type' => 'Timber Fence',
        'rating' => 5,
        'review' => 'Very happy with the service provided. The installers were on time and the quality of the fence is excellent.',
    ),
    array(
        'suburb' => 'St Kilda',
        'type' => 'Timber Fence',
        'rating' => 5,
        'review' => 'High standards from start to finish and pricing that makes sense. Definitely worth choosing.',
    ),
    array(
        'suburb' => 'Brunswick',
        'type' => 'Pool Fence',
        'rating' => 5,
        'review' => 'Couldn\'t be happier with the outcome. The fence is beautiful and the support throughout was excellent.',
    ),
);

// Benefits
$benefits = array(
    array(
        'title' => 'Local ' . $city_name . ' Experts',
        'desc' => 'Local contractors understand ' . $city_name . '\'s unique weather, council requirements, and local styles',
    ),
    array(
        'title' => 'Fast Response Times',
        'desc' => 'Get up to 3 quotes within 24 hours from verified ' . $city_name . ' fencing professionals',
    ),
    array(
        'title' => 'Competitive Pricing',
        'desc' => 'Compare quotes to ensure you get the best value for your fencing project',
    ),
    array(
        'title' => 'Quality Guaranteed',
        'desc' => 'All our contractors are fully licensed, insured and back their work with warranties',
    ),
);
?>

<!-- Hero Section -->
<section class="hero-section">
    <div class="container">
        <div class="text-center" style="max-width: 900px; margin: 0 auto;">
            <div class="hero-badge">
                <span>📍</span>
                <span>Servicing All <?php echo esc_html($city_name); ?> Suburbs</span>
            </div>
            <h1 class="hero-title"><?php echo esc_html($city_name); ?>'s Most Trusted<br><span class="text-gradient">Fencing Specialists</span></h1>
            <p class="hero-description" style="margin: 0 auto 2rem;">Professional fencing installation and repair services across Greater <?php echo esc_html($city_name); ?>. Local tradies, trusted by 2,800+ <?php echo esc_html($city_name); ?> homeowners.</p>
            <div class="hero-buttons" style="justify-content: center;">
                <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-primary btn-lg">Get Free <?php echo esc_html($city_name); ?> Quotes</a>
                <a href="<?php echo esc_url( qmf_get_phone_link() ); ?>" class="btn btn-outline btn-lg">Call <?php echo qmf_get_phone(); ?></a>
            </div>
        </div>
    </div>
</section>

<!-- Stats Section -->
<section class="section-muted" style="padding: 3rem 0;">
    <div class="container">
        <div class="grid grid-4">
            <?php foreach ($stats as $stat) : ?>
            <div class="card text-center">
                <div class="card-content">
                    <div class="icon-box" style="margin: 0 auto 1rem;">
                        <span style="font-size: 1.5rem;"><?php echo $stat['icon']; ?></span>
                    </div>
                    <div style="font-size: 2rem; font-weight: 700; color: hsl(var(--foreground));"><?php echo esc_html($stat['value']); ?></div>
                    <div style="color: hsl(var(--muted-foreground)); font-size: 0.875rem;"><?php echo esc_html($stat['label']); ?></div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- How It Works Section -->
<?php get_template_part('template-parts/how-it-works'); ?>

<!-- Fence Types Section -->
<?php get_template_part('template-parts/fence-types-grid', null, array('location' => $city_name)); ?>

<!-- Recent Projects Section -->
<section class="section-muted">
    <div class="container">
        <div class="section-header text-center">
            <h2>Recent <?php echo esc_html($city_name); ?> Projects</h2>
            <p>See what your neighbours are saying about their fencing projects</p>
        </div>
        <div class="grid grid-3">
            <?php foreach ($recent_projects as $project) : ?>
            <div class="card">
                <div class="card-content">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <span>📍</span>
                            <strong><?php echo esc_html($project['suburb']); ?></strong>
                        </div>
                        <div class="review-rating">
                            <?php for ($i = 0; $i < $project['rating']; $i++) : ?>
                                <span class="star-icon">⭐</span>
                            <?php endfor; ?>
                        </div>
                    </div>
                    <p style="font-size: 0.875rem; color: hsl(var(--muted-foreground)); margin-bottom: 0.75rem;"><?php echo esc_html($project['type']); ?></p>
                    <p style="font-style: italic; font-size: 0.875rem;">"<?php echo esc_html($project['review']); ?>"</p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Why Choose Us Section -->
<section>
    <div class="container">
        <div class="grid grid-2" style="align-items: center; gap: 3rem;">
            <div>
                <h2>Why <?php echo esc_html($city_name); ?> Homeowners Choose Us</h2>
                <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2rem;">
                    <?php foreach ($benefits as $benefit) : ?>
                    <div style="display: flex; align-items: flex-start; gap: 1rem;">
                        <div class="icon-box" style="width: 2rem; height: 2rem; border-radius: 50%; flex-shrink: 0;">
                            <span style="color: white; font-size: 0.75rem;">✓</span>
                        </div>
                        <div>
                            <h3 style="margin-bottom: 0.25rem;"><?php echo esc_html($benefit['title']); ?></h3>
                            <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem; margin: 0;"><?php echo esc_html($benefit['desc']); ?></p>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
            <div class="text-center">
                <div class="cta-section">
                    <h3 style="color: white; margin-bottom: 1rem;">Ready to Get Started?</h3>
                    <p style="color: rgba(255,255,255,0.9); margin-bottom: 1.5rem;">Get free quotes from trusted <?php echo esc_html($city_name); ?> fencing professionals</p>
                    <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-secondary btn-lg">Get 3 Free Quotes Now</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Reviews Section -->
<?php get_template_part('template-parts/reviews-section'); ?>

<!-- CTA Section -->
<?php get_template_part('template-parts/cta-section', null, array('location' => $city_name)); ?>
