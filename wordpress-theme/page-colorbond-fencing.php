<?php
/**
 * Template Name: Colorbond Fencing
 * @package QuoteMyFence
 */
get_header();
$benefits = array(
    array('icon' => 'shield', 'title' => 'Superior Durability', 'desc' => 'Built to withstand harsh Australian conditions with a lifespan of 30+ years'),
    array('icon' => 'shield', 'title' => 'Weather Resistant', 'desc' => 'Resistant to rust, corrosion, and extreme weather conditions'),
    array('icon' => 'shield', 'title' => 'Heat Reflective', 'desc' => 'Thermal efficiency with Thermatech® technology keeps your property cooler'),
    array('icon' => 'shield', 'title' => 'Low Maintenance', 'desc' => 'No painting or staining required - stays looking great for decades'),
);
$features = array('10-year warranty on all Colorbond installations', 'Available in 22 modern colors', 'Wind-tested to withstand Australian conditions', 'Termite and fire resistant', 'Environmentally friendly and recyclable', 'Professional installation by certified tradies');
$colors = array('Surfmist', 'Monument', 'Woodland Grey', 'Basalt', 'Dune', 'Paperbark', 'Manor Red', 'Deep Ocean');
?>
<main id="main-content" class="site-main">
    <section class="page-hero"><div class="page-hero-overlay"></div><div class="container"><div class="page-hero-content">
        <div class="badge mb-6"><?php echo qmf_icon('award'); ?> Australia's #1 Fencing Choice</div>
        <h1>Premium Colorbond <span class="text-gradient">Fencing Solutions</span></h1>
        <p>Experience the strength, style, and durability of genuine Colorbond® steel fencing. Trusted by Australian homeowners for over 50 years.</p>
        <div class="flex gap-4 justify-center flex-wrap mt-8">
            <a href="<?php echo esc_url(qmf_get_quote_url()); ?>" class="btn btn-primary btn-lg">Get Free Quote</a>
            <a href="#colors" class="btn btn-outline btn-lg">View Color Range</a>
        </div>
    </div></div></section>
    <section class="benefits-section"><div class="container">
        <div class="text-center mb-12"><h2>Why Choose Colorbond Fencing?</h2><p class="text-lg text-muted">The most trusted name in Australian fencing, engineered for our unique climate</p></div>
        <div class="grid grid-4"><?php foreach($benefits as $b): ?><div class="benefit-card"><div class="benefit-icon"><?php echo qmf_icon($b['icon']); ?></div><h3 class="benefit-title"><?php echo esc_html($b['title']); ?></h3><p class="benefit-description"><?php echo esc_html($b['desc']); ?></p></div><?php endforeach; ?></div>
    </div></section>
    <section class="features-section"><div class="container"><div class="features-grid">
        <div><h2>Premium Features & Quality Guarantee</h2><p class="text-muted mb-8">Every Colorbond fence we install comes with premium features and our satisfaction guarantee.</p>
        <ul class="features-list"><?php foreach($features as $f): ?><li class="feature-item"><span class="feature-check"><?php echo qmf_icon('check'); ?></span><span class="feature-text"><?php echo esc_html($f); ?></span></li><?php endforeach; ?></ul></div>
        <div class="features-image"><img src="<?php echo get_template_directory_uri(); ?>/images/placeholder.jpg" alt="Colorbond Fencing"></div>
    </div></div></section>
    <section id="colors" class="section" style="background:var(--muted);"><div class="container">
        <div class="text-center mb-12"><h2>Choose Your Perfect Color</h2><p class="text-lg text-muted">22 beautiful colors to match your home's style and personality</p></div>
        <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:1rem;"><?php foreach($colors as $c): ?><div class="text-center p-4"><div style="width:60px;height:60px;background:#888;border-radius:12px;margin:0 auto 8px;"></div><p class="text-sm font-medium"><?php echo esc_html($c); ?></p></div><?php endforeach; ?></div>
    </div></section>
    <section class="cta-section"><div class="container max-w-4xl mx-auto"><div class="cta-box"><h2>Ready to Install Your Colorbond Fence?</h2><p>Get a free quote today and discover why thousands of Australians choose Colorbond fencing</p><div class="cta-buttons"><a href="<?php echo esc_url(qmf_get_quote_url()); ?>" class="btn btn-white btn-lg">Get Free Quote Now</a><a href="tel:<?php echo str_replace(' ', '', qmf_get_phone()); ?>" class="btn btn-outline btn-lg" style="background:rgba(255,255,255,0.1);color:white;border-color:rgba(255,255,255,0.3);">Call <?php echo qmf_get_phone(); ?></a></div></div></div></section>
</main>
<?php get_footer(); ?>