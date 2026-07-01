<?php
/**
 * Template Name: Colorbond Fencing
 * The template for Colorbond Fencing page
 *
 * @package QuoteMyFence
 */

get_header();

$colors = array(
    array('name' => 'Surfmist®', 'hex' => '#E8E8E3'),
    array('name' => 'Shale Grey™', 'hex' => '#B1ACA3'),
    array('name' => 'Bluegum®', 'hex' => '#6B7B7B'),
    array('name' => 'Pale Eucalypt®', 'hex' => '#6B7D6B'),
    array('name' => 'Domain®', 'hex' => '#A19A8B'),
    array('name' => 'Evening Haze®', 'hex' => '#C2B4A2'),
    array('name' => 'Basalt®', 'hex' => '#525252'),
    array('name' => 'Wilderness®', 'hex' => '#3C4537'),
    array('name' => 'Paperbark®', 'hex' => '#968D7D'),
    array('name' => 'Dune®', 'hex' => '#A99C8D'),
    array('name' => 'Ironstone®', 'hex' => '#4D3C3A'),
    array('name' => 'Woodland Grey®', 'hex' => '#4F4943'),
    array('name' => 'Monument®', 'hex' => '#282829'),
    array('name' => 'Riversand®', 'hex' => '#8A7B6A'),
    array('name' => 'Wollemi®', 'hex' => '#5C5652'),
);

$benefits = array(
    array('icon' => '🛡️', 'title' => 'Superior Durability', 'desc' => 'Built to withstand harsh Australian conditions with a lifespan of 30+ years'),
    array('icon' => '💧', 'title' => 'Weather Resistant', 'desc' => 'Resistant to rust, corrosion, and extreme weather conditions'),
    array('icon' => '☀️', 'title' => 'Heat Reflective', 'desc' => 'Thermal efficiency with Thermatech® technology keeps your property cooler'),
    array('icon' => '🔧', 'title' => 'Low Maintenance', 'desc' => 'No painting or staining required - stays looking great for decades'),
);

$features = array(
    '10-year manufacture warranty on all Colorbond installations',
    'Available in 15 modern colours',
    'Wind-tested to withstand Australian conditions',
    'Termite and fire resistant',
    'Environmentally friendly and recyclable',
    'Professional installation by verified tradies',
);
?>

<section class="hero-section">
    <div class="container">
        <div class="grid grid-2" style="align-items: center; gap: 3rem;">
            <div class="hero-content">
                <div class="hero-badge">
                    <span>🏆</span>
                    <span>Australia's #1 Fencing Choice</span>
                </div>
                <h1 class="hero-title">Colorbond<br>Fencing Solutions</h1>
                <p class="hero-description">
                    Experience the strength, style, and durability of genuine Colorbond® steel fencing. 
                    Trusted by Australian homeowners for over 50 years.
                </p>
                <div class="hero-buttons">
                    <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-primary btn-lg">Get 3 Free Quotes in Minutes</a>
                    <a href="#colour-range" class="btn btn-outline btn-lg">View Colour Range</a>
                </div>
                <div class="flex gap-6 mt-8" style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">
                    <span>✓ Free Site Measure</span>
                    <span>✓ 10 Year Manufacture Warranty</span>
                </div>
            </div>
            <div class="hero-image">
                <img src="<?php echo esc_url( get_template_directory_uri() . '/images/colorbond-hero.webp' ); ?>" alt="Colorbond Fence Installation">
            </div>
        </div>
    </div>
</section>

<section class="section-muted">
    <div class="container">
        <div class="section-header">
            <h2>Why Choose Colorbond Fencing?</h2>
            <p>The most trusted name in Australian fencing, engineered for our unique climate</p>
        </div>
        <div class="grid grid-4">
            <?php foreach ($benefits as $benefit) : ?>
            <div class="card">
                <div class="card-content">
                    <div class="icon-box">
                        <span style="font-size: 1.5rem;"><?php echo $benefit['icon']; ?></span>
                    </div>
                    <h3><?php echo esc_html($benefit['title']); ?></h3>
                    <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem;"><?php echo esc_html($benefit['desc']); ?></p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <div class="grid grid-2" style="align-items: center; gap: 3rem;">
            <div>
                <h2>Premium Features & Australian Quality</h2>
                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 2rem;">
                    Every Colorbond fence our verified contractors install come with premium features and professional installation. Our contractors use only genuine Bluescope Colorbond steel.
                </p>
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    <?php foreach ($features as $feature) : ?>
                    <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                        <div class="icon-box" style="width: 1.5rem; height: 1.5rem; border-radius: 50%; flex-shrink: 0;">
                            <span style="color: white; font-size: 0.75rem;">✓</span>
                        </div>
                        <span><?php echo esc_html($feature); ?></span>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
            <div class="hero-image" style="aspect-ratio: 1;">
                <img src="<?php echo esc_url( get_template_directory_uri() . '/images/colorbond-features.webp' ); ?>" alt="Colorbond Features">
            </div>
        </div>
    </div>
</section>

<section id="colour-range" class="section-muted">
    <div class="container">
        <div class="section-header">
            <h2>Choose Your Perfect Colour</h2>
            <p>15 beautiful colours to match your home's style and personality</p>
        </div>
        <div class="grid" style="grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 1rem;">
            <?php foreach ($colors as $color) : ?>
            <div class="text-center">
                <div class="color-swatch" style="background-color: <?php echo esc_attr($color['hex']); ?>;"></div>
                <p class="color-name"><?php echo esc_html($color['name']); ?></p>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section>
    <div class="container" style="max-width: 800px;">
        <div class="cta-section">
            <h2>Ready to Install Your Colorbond Fence?</h2>
            <p>Get free quotes today and discover why thousands of Australians choose Colorbond fencing</p>
            <div class="cta-buttons">
                <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-secondary btn-lg">Get 3 Free Quotes Now</a>
                <a href="<?php echo esc_url( qmf_get_phone_link() ); ?>" class="btn btn-outline btn-lg" style="background: rgba(255,255,255,0.1); color: white; border-color: rgba(255,255,255,0.3);">Call <?php echo qmf_get_phone(); ?></a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
