<?php
/**
 * Template Name: Timber Fencing
 * @package QuoteMyFence
 */
get_header();
$benefits = array(
    array('icon' => 'award', 'title' => 'Natural Beauty', 'desc' => 'Timeless aesthetic that complements any property style and landscape'),
    array('icon' => 'award', 'title' => 'Fully Customizable', 'desc' => 'Choose from various timber types, stains, and styles to match your vision'),
    array('icon' => 'award', 'title' => 'Eco-Friendly', 'desc' => 'Sustainable and renewable material that\'s environmentally responsible'),
    array('icon' => 'award', 'title' => 'Versatile Designs', 'desc' => 'From privacy screens to decorative pickets, endless design possibilities'),
);
$features = array('Premium treated pine and hardwood options', 'Custom staining and painting services', 'Paling, picket, and lattice styles available', 'Termite-resistant timber treatments', 'Professional installation with concrete posts', '5-year workmanship warranty');
?>
<main id="main-content" class="site-main">
    <section class="page-hero"><div class="page-hero-overlay"></div><div class="container"><div class="page-hero-content">
        <div class="badge mb-6"><?php echo qmf_icon('award'); ?> Natural & Timeless</div>
        <h1>Beautiful Timber <span class="text-gradient">Fencing Solutions</span></h1>
        <p>Experience the natural warmth and classic beauty of timber fencing. Expertly crafted using premium Australian hardwoods and treated pine.</p>
        <div class="flex gap-4 justify-center flex-wrap mt-8">
            <a href="<?php echo esc_url(qmf_get_quote_url()); ?>" class="btn btn-primary btn-lg">Get Free Quote</a>
            <a href="#features" class="btn btn-outline btn-lg">View Timber Types</a>
        </div>
    </div></div></section>
    <section class="benefits-section"><div class="container">
        <div class="text-center mb-12"><h2>Why Choose Timber Fencing?</h2><p class="text-lg text-muted">Classic beauty meets modern durability with our premium timber fencing solutions</p></div>
        <div class="grid grid-4"><?php foreach($benefits as $b): ?><div class="benefit-card"><div class="benefit-icon"><?php echo qmf_icon($b['icon']); ?></div><h3 class="benefit-title"><?php echo esc_html($b['title']); ?></h3><p class="benefit-description"><?php echo esc_html($b['desc']); ?></p></div><?php endforeach; ?></div>
    </div></section>
    <section id="features" class="features-section"><div class="container"><div class="features-grid">
        <div><h2>Premium Quality & Expert Craftsmanship</h2><p class="text-muted mb-8">Every timber fence we install is built to last, using premium materials and expert installation techniques.</p>
        <ul class="features-list"><?php foreach($features as $f): ?><li class="feature-item"><span class="feature-check"><?php echo qmf_icon('check'); ?></span><span class="feature-text"><?php echo esc_html($f); ?></span></li><?php endforeach; ?></ul></div>
        <div class="features-image"><img src="<?php echo get_template_directory_uri(); ?>/images/placeholder.jpg" alt="Timber Fencing"></div>
    </div></div></section>
    <section class="cta-section"><div class="container max-w-4xl mx-auto"><div class="cta-box"><h2>Ready to Install Your Timber Fence?</h2><p>Get a free quote today and discover the natural beauty of premium timber fencing</p><div class="cta-buttons"><a href="<?php echo esc_url(qmf_get_quote_url()); ?>" class="btn btn-white btn-lg">Get Free Quote Now</a><a href="tel:<?php echo str_replace(' ', '', qmf_get_phone()); ?>" class="btn btn-outline btn-lg" style="background:rgba(255,255,255,0.1);color:white;border-color:rgba(255,255,255,0.3);">Call <?php echo qmf_get_phone(); ?></a></div></div></div></section>
</main>
<?php get_footer(); ?>