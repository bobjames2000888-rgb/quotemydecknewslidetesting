<?php
/**
 * Template Name: Sydney Page
 * @package QuoteMyFence
 */
get_header();
$suburbs = array('Parramatta', 'Penrith', 'Liverpool', 'Blacktown', 'Campbelltown', 'Bankstown', 'Sutherland', 'Hornsby', 'Ryde', 'Canterbury', 'Northern Beaches', 'Inner West', 'Eastern Suburbs', 'Hills District');
$all_suburbs = array('Arncliffe', 'Banksia', 'Banksmeadow', 'Bardwell Park', 'Bexley', 'Botany', 'Brighton-Le-Sands', 'Carlton', 'Eastgardens', 'Kogarah', 'Mascot', 'Rockdale', 'Rosebery', 'Sans Souci', 'Wolli Creek', 'Blacktown', 'Dean Park', 'Doonside', 'Glenwood', 'Kings Langley', 'Marsden Park', 'Mount Druitt', 'Quakers Hill', 'Riverstone', 'Rooty Hill', 'Rouse Hill', 'Schofields', 'Seven Hills', 'St Marys', 'The Ponds', 'Blackheath', 'Glenbrook', 'Katoomba', 'Springwood', 'Burwood', 'Strathfield', 'Camden', 'Narellan', 'Oran Park', 'Campbelltown', 'Glenfield', 'Ingleburn', 'Minto', 'Macquarie Fields');
?>
<main id="main-content" class="site-main">
    <section class="page-hero">
        <div class="page-hero-overlay"></div>
        <div class="container"><div class="page-hero-content">
            <div class="badge mb-6"><?php echo qmf_icon('map-pin'); ?> Servicing All Sydney Suburbs</div>
            <h1>Sydney's Most Trusted <span class="text-gradient">Fencing Specialists</span></h1>
            <p>Professional fencing installation and repair services across Greater Sydney. Local tradies, trusted by over 3,200 Sydney homeowners.</p>
            <div class="flex gap-4 justify-center flex-wrap mt-8">
                <a href="<?php echo esc_url(qmf_get_quote_url()); ?>" class="btn btn-primary btn-lg">Get Free Sydney Quote</a>
                <a href="tel:<?php echo str_replace(' ', '', qmf_get_phone()); ?>" class="btn btn-outline btn-lg"><?php echo qmf_icon('phone'); ?> Call <?php echo qmf_get_phone(); ?></a>
            </div>
        </div></div>
    </section>
    <section class="section-sm" style="background: var(--muted);">
        <div class="container"><div class="stats-grid">
            <div class="stat-card"><div class="stat-icon"><?php echo qmf_icon('users'); ?></div><div class="stat-value">3,200+</div><div class="stat-label">Jobs Completed</div></div>
            <div class="stat-card"><div class="stat-icon"><?php echo qmf_icon('star'); ?></div><div class="stat-value">4.9/5</div><div class="stat-label">Average Rating</div></div>
            <div class="stat-card"><div class="stat-icon"><?php echo qmf_icon('clock'); ?></div><div class="stat-value">15+</div><div class="stat-label">Years Experience</div></div>
            <div class="stat-card"><div class="stat-icon"><?php echo qmf_icon('map-pin'); ?></div><div class="stat-value">100+</div><div class="stat-label">Suburbs Serviced</div></div>
        </div></div>
    </section>
    <section class="section">
        <div class="container">
            <div class="text-center mb-12"><h2>We Service All Sydney Suburbs</h2><p class="text-lg text-muted">From the Northern Beaches to Campbelltown, we've got Sydney covered</p></div>
            <div class="suburbs-grid mb-8">
                <?php foreach($suburbs as $suburb): ?><div class="suburb-item"><?php echo qmf_icon('map-pin'); ?><span class="suburb-name"><?php echo esc_html($suburb); ?></span></div><?php endforeach; ?>
            </div>
            <div class="expanded-suburbs suburbs-grid mb-8 hidden" id="expanded-suburbs">
                <?php foreach($all_suburbs as $suburb): ?><div class="suburb-item"><?php echo qmf_icon('map-pin'); ?><span class="suburb-name"><?php echo esc_html($suburb); ?></span></div><?php endforeach; ?>
            </div>
            <div class="text-center"><p class="text-muted mb-4">Don't see your suburb? We service the entire Greater Sydney area!</p><button class="btn btn-outline suburb-toggle" onclick="document.getElementById('expanded-suburbs').classList.toggle('hidden'); this.textContent = this.textContent === 'View All Suburbs' ? 'Hide Suburbs' : 'View All Suburbs';">View All Suburbs</button></div>
        </div>
    </section>
    <section class="cta-section"><div class="container max-w-4xl mx-auto"><div class="cta-box"><h2>Ready to Get Your Sydney Fence Installed?</h2><p>Join 3,200+ happy Sydney homeowners. Get your free quote in 60 seconds.</p><a href="<?php echo esc_url(qmf_get_quote_url()); ?>" class="btn btn-white btn-lg">Get Free Sydney Quote</a></div></div></section>
</main>
<style>.hidden{display:none!important;}</style>
<?php get_footer(); ?>