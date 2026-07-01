<?php
/**
 * Template Name: Sitemap
 * Complete sitemap matching live site exactly
 * @package QuoteMyFence
 */
get_header();
?>

<!-- Hero Section -->
<section class="hero-section" style="padding: 8rem 0 3rem;">
    <div class="container">
        <div class="hero-content text-center">
            <div class="hero-badge" style="margin-bottom: 1.5rem;">
                <span>🗺️</span>
                <span>Site Navigation</span>
            </div>
            <h1 class="hero-title"><?php esc_html_e('Sitemap', 'quotemyfence'); ?></h1>
            <p class="hero-description" style="margin: 0 auto; max-width: 600px;"><?php esc_html_e('Find everything you need on QuoteMyFence with our complete site directory.', 'quotemyfence'); ?></p>
        </div>
    </div>
</section>

<!-- Sitemap Content -->
<section style="padding: 4rem 0;">
    <div class="container" style="max-width: 1200px;">
        <div class="grid grid-3" style="gap: 2rem;">
            
            <!-- Main Pages -->
            <div class="card">
                <div class="card-content">
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
                        <div class="icon-box" style="width: 2.5rem; height: 2.5rem;">
                            <span style="font-size: 1.25rem;">🏠</span>
                        </div>
                        <h2 style="margin: 0; font-size: 1.25rem;">Main Pages</h2>
                    </div>
                    <ul class="sitemap-list" style="list-style: none; padding: 0; margin: 0;">
                        <li style="margin-bottom: 0.75rem;">
                            <a href="<?php echo esc_url(home_url('/')); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: hsl(var(--muted-foreground)); text-decoration: none; transition: color 0.2s;">
                                <span style="width: 6px; height: 6px; background: hsl(var(--accent)); border-radius: 50%; opacity: 0.5;"></span>
                                Home
                            </a>
                        </li>
                        <li style="margin-bottom: 0.75rem;">
                            <a href="<?php echo esc_url(home_url('/contact/')); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: hsl(var(--muted-foreground)); text-decoration: none; transition: color 0.2s;">
                                <span style="width: 6px; height: 6px; background: hsl(var(--accent)); border-radius: 50%; opacity: 0.5;"></span>
                                Contact Us
                            </a>
                        </li>
                        <li style="margin-bottom: 0.75rem;">
                            <a href="<?php echo esc_url(home_url('/faq/')); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: hsl(var(--muted-foreground)); text-decoration: none; transition: color 0.2s;">
                                <span style="width: 6px; height: 6px; background: hsl(var(--accent)); border-radius: 50%; opacity: 0.5;"></span>
                                FAQ
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Fencing Services -->
            <div class="card">
                <div class="card-content">
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
                        <div class="icon-box" style="width: 2.5rem; height: 2.5rem;">
                            <span style="font-size: 1.25rem;">🔧</span>
                        </div>
                        <h2 style="margin: 0; font-size: 1.25rem;">Fencing Services</h2>
                    </div>
                    <ul class="sitemap-list" style="list-style: none; padding: 0; margin: 0;">
                        <li style="margin-bottom: 0.75rem;"><a href="<?php echo esc_url(home_url('/timber-fencing/')); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: hsl(var(--muted-foreground)); text-decoration: none;"><span style="width: 6px; height: 6px; background: hsl(var(--accent)); border-radius: 50%; opacity: 0.5;"></span>Timber Fencing</a></li>
                        <li style="margin-bottom: 0.75rem;"><a href="<?php echo esc_url(home_url('/colorbond-fencing/')); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: hsl(var(--muted-foreground)); text-decoration: none;"><span style="width: 6px; height: 6px; background: hsl(var(--accent)); border-radius: 50%; opacity: 0.5;"></span>Colorbond Fencing</a></li>
                        <li style="margin-bottom: 0.75rem;"><a href="<?php echo esc_url(home_url('/feature-fencing/')); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: hsl(var(--muted-foreground)); text-decoration: none;"><span style="width: 6px; height: 6px; background: hsl(var(--accent)); border-radius: 50%; opacity: 0.5;"></span>Feature Fencing</a></li>
                        <li style="margin-bottom: 0.75rem;"><a href="<?php echo esc_url(home_url('/aluminium-fencing/')); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: hsl(var(--muted-foreground)); text-decoration: none;"><span style="width: 6px; height: 6px; background: hsl(var(--accent)); border-radius: 50%; opacity: 0.5;"></span>Aluminium Fencing</a></li>
                        <li style="margin-bottom: 0.75rem;"><a href="<?php echo esc_url(home_url('/chain-link-fencing/')); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: hsl(var(--muted-foreground)); text-decoration: none;"><span style="width: 6px; height: 6px; background: hsl(var(--accent)); border-radius: 50%; opacity: 0.5;"></span>Chain Link Fencing</a></li>
                        <li style="margin-bottom: 0.75rem;"><a href="<?php echo esc_url(home_url('/security-fencing/')); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: hsl(var(--muted-foreground)); text-decoration: none;"><span style="width: 6px; height: 6px; background: hsl(var(--accent)); border-radius: 50%; opacity: 0.5;"></span>Security Fencing</a></li>
                        <li style="margin-bottom: 0.75rem;"><a href="<?php echo esc_url(home_url('/steel-fencing/')); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: hsl(var(--muted-foreground)); text-decoration: none;"><span style="width: 6px; height: 6px; background: hsl(var(--accent)); border-radius: 50%; opacity: 0.5;"></span>Steel Fencing</a></li>
                        <li style="margin-bottom: 0.75rem;"><a href="<?php echo esc_url(home_url('/pool-fencing/')); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: hsl(var(--muted-foreground)); text-decoration: none;"><span style="width: 6px; height: 6px; background: hsl(var(--accent)); border-radius: 50%; opacity: 0.5;"></span>Pool Fencing</a></li>
                        <li style="margin-bottom: 0.75rem;"><a href="<?php echo esc_url(home_url('/fence-repairs/')); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: hsl(var(--muted-foreground)); text-decoration: none;"><span style="width: 6px; height: 6px; background: hsl(var(--accent)); border-radius: 50%; opacity: 0.5;"></span>Fence Repairs</a></li>
                        <li style="margin-bottom: 0.75rem;"><a href="<?php echo esc_url(home_url('/gate-installation/')); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: hsl(var(--muted-foreground)); text-decoration: none;"><span style="width: 6px; height: 6px; background: hsl(var(--accent)); border-radius: 50%; opacity: 0.5;"></span>Gate Installation</a></li>
                    </ul>
                </div>
            </div>

            <!-- Service Areas -->
            <div class="card">
                <div class="card-content">
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
                        <div class="icon-box" style="width: 2.5rem; height: 2.5rem;">
                            <span style="font-size: 1.25rem;">📍</span>
                        </div>
                        <h2 style="margin: 0; font-size: 1.25rem;">Service Areas</h2>
                    </div>
                    <ul class="sitemap-list" style="list-style: none; padding: 0; margin: 0;">
                        <li style="margin-bottom: 0.75rem;"><a href="<?php echo esc_url(home_url('/sydney/')); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: hsl(var(--muted-foreground)); text-decoration: none;"><span style="width: 6px; height: 6px; background: hsl(var(--accent)); border-radius: 50%; opacity: 0.5;"></span>Sydney</a></li>
                        <li style="margin-bottom: 0.75rem;"><a href="<?php echo esc_url(home_url('/melbourne/')); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: hsl(var(--muted-foreground)); text-decoration: none;"><span style="width: 6px; height: 6px; background: hsl(var(--accent)); border-radius: 50%; opacity: 0.5;"></span>Melbourne</a></li>
                        <li style="margin-bottom: 0.75rem;"><a href="<?php echo esc_url(home_url('/brisbane/')); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: hsl(var(--muted-foreground)); text-decoration: none;"><span style="width: 6px; height: 6px; background: hsl(var(--accent)); border-radius: 50%; opacity: 0.5;"></span>Brisbane</a></li>
                        <li style="margin-bottom: 0.75rem;"><a href="<?php echo esc_url(home_url('/perth/')); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: hsl(var(--muted-foreground)); text-decoration: none;"><span style="width: 6px; height: 6px; background: hsl(var(--accent)); border-radius: 50%; opacity: 0.5;"></span>Perth</a></li>
                        <li style="margin-bottom: 0.75rem;"><a href="<?php echo esc_url(home_url('/adelaide/')); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: hsl(var(--muted-foreground)); text-decoration: none;"><span style="width: 6px; height: 6px; background: hsl(var(--accent)); border-radius: 50%; opacity: 0.5;"></span>Adelaide</a></li>
                        <li style="margin-bottom: 0.75rem;"><a href="<?php echo esc_url(home_url('/canberra/')); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: hsl(var(--muted-foreground)); text-decoration: none;"><span style="width: 6px; height: 6px; background: hsl(var(--accent)); border-radius: 50%; opacity: 0.5;"></span>Canberra</a></li>
                        <li style="margin-bottom: 0.75rem;"><a href="<?php echo esc_url(home_url('/hobart/')); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: hsl(var(--muted-foreground)); text-decoration: none;"><span style="width: 6px; height: 6px; background: hsl(var(--accent)); border-radius: 50%; opacity: 0.5;"></span>Hobart</a></li>
                        <li style="margin-bottom: 0.75rem;"><a href="<?php echo esc_url(home_url('/darwin/')); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: hsl(var(--muted-foreground)); text-decoration: none;"><span style="width: 6px; height: 6px; background: hsl(var(--accent)); border-radius: 50%; opacity: 0.5;"></span>Darwin</a></li>
                    </ul>
                </div>
            </div>

            <!-- Resources -->
            <div class="card">
                <div class="card-content">
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
                        <div class="icon-box" style="width: 2.5rem; height: 2.5rem;">
                            <span style="font-size: 1.25rem;">📚</span>
                        </div>
                        <h2 style="margin: 0; font-size: 1.25rem;">Resources</h2>
                    </div>
                    <ul class="sitemap-list" style="list-style: none; padding: 0; margin: 0;">
                        <li style="margin-bottom: 0.75rem;"><a href="<?php echo esc_url(home_url('/fencing-guides/')); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: hsl(var(--muted-foreground)); text-decoration: none;"><span style="width: 6px; height: 6px; background: hsl(var(--accent)); border-radius: 50%; opacity: 0.5;"></span>Fencing Guides</a></li>
                    </ul>
                </div>
            </div>

            <!-- Legal -->
            <div class="card">
                <div class="card-content">
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
                        <div class="icon-box" style="width: 2.5rem; height: 2.5rem;">
                            <span style="font-size: 1.25rem;">📄</span>
                        </div>
                        <h2 style="margin: 0; font-size: 1.25rem;">Legal</h2>
                    </div>
                    <ul class="sitemap-list" style="list-style: none; padding: 0; margin: 0;">
                        <li style="margin-bottom: 0.75rem;"><a href="<?php echo esc_url(home_url('/privacy-policy/')); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: hsl(var(--muted-foreground)); text-decoration: none;"><span style="width: 6px; height: 6px; background: hsl(var(--accent)); border-radius: 50%; opacity: 0.5;"></span>Privacy Policy</a></li>
                        <li style="margin-bottom: 0.75rem;"><a href="<?php echo esc_url(home_url('/terms-of-service/')); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: hsl(var(--muted-foreground)); text-decoration: none;"><span style="width: 6px; height: 6px; background: hsl(var(--accent)); border-radius: 50%; opacity: 0.5;"></span>Terms</a></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</section>

<!-- SEO Suburb Links Section -->
<section class="section-muted" style="padding: 3rem 0;">
    <div class="container" style="max-width: 1200px;">
        <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 2rem;">Fencing by Location</h2>
        
        <!-- Melbourne Suburbs -->
        <div style="margin-bottom: 2rem;">
            <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 1px solid hsl(var(--border));">Melbourne Suburbs</h3>
            <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 0.5rem 1rem;">
                <?php
                $melbourne_suburbs = array('Pakenham', 'Berwick', 'Cranbourne', 'Narre Warren', 'Officer', 'Botanic Ridge', 'Lynbrook', 'Ringwood', 'Lilydale', 'Rowville', 'Croydon', 'Box Hill', 'Toorak', 'Glen Waverley', 'Richmond', 'South Yarra', 'Doncaster', 'St Kilda', 'Frankston', 'Mornington', 'Langwarrin', 'Carrum Downs', 'Mount Eliza', 'Mount Martha', 'Rosebud', 'Sorrento', 'Portsea');
                foreach ($melbourne_suburbs as $suburb) :
                    $suburb_slug = strtolower(str_replace(' ', '-', $suburb));
                ?>
                <a href="<?php echo esc_url(home_url('/melbourne/' . $suburb_slug . '/')); ?>" style="font-size: 0.75rem; color: hsl(var(--muted-foreground)); text-decoration: none; padding: 0.25rem 0; transition: color 0.2s;">
                    Fencing in <?php echo esc_html($suburb); ?>
                </a>
                <?php endforeach; ?>
            </div>
        </div>

    </div>
</section>

<!-- CTA Section -->
<section style="padding: 4rem 0;">
    <div class="container" style="max-width: 800px;">
        <div class="cta-section">
            <h2 style="color: white;"><?php esc_html_e('Ready to Get Started?', 'quotemyfence'); ?></h2>
            <p style="color: rgba(255,255,255,0.9);"><?php esc_html_e('Get free quotes from verified fencing contractors', 'quotemyfence'); ?></p>
            <div class="cta-buttons">
                <a href="<?php echo esc_url(qmf_get_quote_url()); ?>" class="btn btn-secondary btn-lg"><?php esc_html_e('Get 3 Free Quotes Now', 'quotemyfence'); ?></a>
            </div>
        </div>
    </div>
</section>

<style>
.sitemap-list a:hover {
    color: hsl(var(--accent)) !important;
}
</style>

<?php get_footer(); ?>
