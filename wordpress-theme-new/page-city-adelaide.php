<?php
/**
 * Template Name: City - Adelaide
 * Complete city template matching live site exactly
 * @package QuoteMyFence
 */
get_header();

$city_name = 'Adelaide';
$state = 'SA';

// Adelaide-specific stats
$stats = array(
    array('icon' => '👥', 'value' => '1,800+', 'label' => 'Jobs Quoted'),
    array('icon' => '⭐', 'value' => '4.7/5', 'label' => 'Average Rating'),
    array('icon' => '🕐', 'value' => '13+', 'label' => 'Years Experience'),
    array('icon' => '📍', 'value' => '432+', 'label' => 'Suburbs Serviced'),
);

// Adelaide recent projects
$recent_projects = array(
    array(
        'suburb' => 'Glenelg',
        'type' => 'Timber Fence',
        'rating' => 5,
        'review' => 'A hassle-free experience with great results. The workers were prompt and the fence looks top-notch.',
    ),
    array(
        'suburb' => 'Norwood',
        'type' => 'Colorbond Fence',
        'rating' => 5,
        'review' => 'Reliable service, well-built fencing, and fair costs. Would use them again.',
    ),
    array(
        'suburb' => 'Unley',
        'type' => 'Colorbond Fence',
        'rating' => 5,
        'review' => 'Very impressed with both the quality of the fence and how well we were looked after throughout the process.',
    ),
);

// Initial suburbs shown
$suburbs = array('Leabrook', 'Leawood Gardens', 'Linden Park', 'Magill', 'Mount Osmond', 'Rose Park', 'Rosslyn Park', 'Skye', 'St Georges', 'Stonyfell', 'Toorak Gardens', 'Tusmore', 'Waterfall Gully', 'Wattle Park', 'Athelstone', 'Campbelltown');

// All suburbs (expanded list)
$all_suburbs = array('Hectorville', 'Newton', 'Paradise', 'Rostrevor', 'Tranmere', 'Adelaide', 'Albert Park', 'Allenby Gardens', 'Athol Park', 'Auldana', 'Beaumont', 'Beulah Park', 'Beverley', 'Bowden', 'Brompton', 'Burnside', 'Cheltenham', 'Croydon', 'Devon Park', 'Dulwich', 'Eastwood', 'Erindale', 'Findon', 'Flinders Park', 'Frewville', 'Fulham Gardens', 'Glen Osmond', 'Glenelg North', 'Glenside', 'Glenunga', 'Grange', 'Hazelwood Park', 'Hendon', 'Henley Beach', 'Henley Beach South', 'Hindmarsh', 'Kensington Gardens', 'Kensington Park', 'Kidman Park', 'Kilkenny', 'North Adelaide', 'Ovingham', 'Pennington', 'Renown Park', 'Ridleyton', 'Rosewater', 'Royal Park', 'Seaton', 'Semaphore Park', 'St Clair', 'Tennyson', 'Welland', 'West Beach', 'West Croydon', 'West Hindmarsh', 'West Lakes', 'West Lakes Shore', 'Woodville', 'Woodville North', 'Woodville Park', 'Woodville South', 'Woodville West', 'Bibaringa', 'Evanston', 'Evanston Gardens', 'Evanston Park', 'Evanston South', 'Gawler', 'Gawler East', 'Gawler South', 'Gawler West', 'Hillier', 'Kudla', 'Willaston', 'Brighton', 'Glenelg', 'Glenelg East', 'Glenelg South', 'Hove', 'Kingston Park', 'North Brighton', 'Seacliff', 'Seacliff Park', 'Somerton Park', 'South Brighton', 'Ascot Park', 'Clovelly Park', 'Darlington', 'Dover Gardens', 'Edwardstown', 'Glandore', 'Glengowrie', 'Hallett Cove', 'Marino', 'Marion', 'Mitchell Park', 'Morphettville', 'O\'Halloran Hill', 'Oaklands Park', 'Park Holme', 'Plympton Park', 'Seacombe Gardens', 'Seacombe Heights', 'Seaview Downs', 'Sheidow Park', 'South Plympton', 'Sturt', 'Tonsley', 'Trott Park', 'Warradale', 'Bedford Park', 'Belair', 'Bellevue Heights', 'Blackwood', 'Brown Hill Creek', 'Clapham', 'Clarence Gardens', 'Col. Light Gardens', 'Coromandel Valley', 'Crafers West', 'Craigburn Farm', 'Cumberland Park', 'Daw Park', 'Eden Hills', 'Glenalta', 'Hawthorn', 'Hawthorndene', 'Kingswood', 'Lower Mitcham', 'Lynton', 'Melrose Park', 'Mitcham', 'Netherby', 'Panorama', 'Pasadena', 'Springfield', 'St Marys', 'Stirling', 'Torrens Park', 'Upper Sturt', 'Urrbrae', 'Westbourne Park', 'College Park', 'Evandale', 'Felixstow', 'Firle', 'Glynde', 'Hackney', 'Heathpool', 'Joslin', 'Kensington', 'Kent Town', 'Marden', 'Marryatville', 'Maylands', 'Norwood', 'Payneham', 'Payneham South', 'Royston Park', 'St Morris', 'St Peters', 'Stepney', 'Trinity Gardens');
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
            <p class="hero-description" style="margin: 0 auto 2rem;">Professional fencing installation and repair services across Greater <?php echo esc_html($city_name); ?>. Local tradies, trusted by 1,800+ <?php echo esc_html($city_name); ?> homeowners.</p>
            <div class="hero-buttons" style="justify-content: center;">
                <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-primary btn-lg">Get Free <?php echo esc_html($city_name); ?> Quotes</a>
                <a href="<?php echo esc_url( qmf_get_phone_link() ); ?>" class="btn btn-outline btn-lg">📞 Call <?php echo esc_html( qmf_get_phone() ); ?></a>
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

<!-- Service Areas Section -->
<section style="padding: 5rem 0;">
    <div class="container">
        <div class="section-header text-center">
            <h2>We Service All <?php echo esc_html($city_name); ?> Suburbs</h2>
            <p>From the Adelaide Hills to the coast, we've got <?php echo esc_html($city_name); ?> covered</p>
        </div>
        <div class="grid grid-4" style="gap: 1rem; margin-bottom: 2rem;">
            <?php foreach ($suburbs as $suburb) : ?>
            <div class="suburb-item" style="display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem; background: hsl(var(--card)); border-radius: 0.5rem; border: 1px solid hsl(var(--border));">
                <span style="color: hsl(var(--primary));">📍</span>
                <span style="font-size: 0.875rem;"><?php echo esc_html($suburb); ?></span>
            </div>
            <?php endforeach; ?>
        </div>
        
        <!-- Expanded suburbs (hidden by default) -->
        <div id="expanded-suburbs" class="grid grid-4" style="gap: 1rem; margin-bottom: 2rem; display: none;">
            <?php foreach ($all_suburbs as $suburb) : ?>
            <div class="suburb-item" style="display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem; background: hsl(var(--card)); border-radius: 0.5rem; border: 1px solid hsl(var(--border));">
                <span style="color: hsl(var(--primary));">📍</span>
                <span style="font-size: 0.875rem;"><?php echo esc_html($suburb); ?></span>
            </div>
            <?php endforeach; ?>
        </div>
        
        <div class="text-center">
            <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">Don't see your suburb? We service the entire Greater <?php echo esc_html($city_name); ?> area!</p>
            <button class="btn btn-outline" onclick="toggleSuburbs()" id="suburb-toggle-btn">
                <span id="toggle-icon">▼</span> View All Suburbs
            </button>
        </div>
    </div>
</section>

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
                            <span style="color: hsl(var(--primary));">📍</span>
                            <strong><?php echo esc_html($project['suburb']); ?></strong>
                        </div>
                        <div class="review-rating">
                            <?php for ($i = 0; $i < $project['rating']; $i++) : ?>
                                <span class="star-icon" style="color: hsl(var(--primary));">★</span>
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
<section style="padding: 5rem 0;">
    <div class="container">
        <div class="grid grid-2" style="align-items: center; gap: 3rem;">
            <div>
                <h2>Why <?php echo esc_html($city_name); ?> Homeowners Choose Us</h2>
                <div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem;">
                    <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                        <div class="icon-box" style="width: 1.5rem; height: 1.5rem; border-radius: 50%; flex-shrink: 0;">
                            <span style="color: white; font-size: 0.75rem;">✓</span>
                        </div>
                        <div>
                            <h3 style="margin-bottom: 0.25rem; font-size: 1rem;">Local <?php echo esc_html($city_name); ?> Experts</h3>
                            <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem; margin: 0;">Local contractors understand <?php echo esc_html($city_name); ?>'s unique weather, council requirements, and local styles</p>
                        </div>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                        <div class="icon-box" style="width: 1.5rem; height: 1.5rem; border-radius: 50%; flex-shrink: 0;">
                            <span style="color: white; font-size: 0.75rem;">✓</span>
                        </div>
                        <div>
                            <h3 style="margin-bottom: 0.25rem; font-size: 1rem;">Fast Response Times</h3>
                            <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem; margin: 0;">Same-day quotes and flexible scheduling to suit your <?php echo esc_html($city_name); ?> lifestyle</p>
                        </div>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                        <div class="icon-box" style="width: 1.5rem; height: 1.5rem; border-radius: 50%; flex-shrink: 0;">
                            <span style="color: white; font-size: 0.75rem;">✓</span>
                        </div>
                        <div>
                            <h3 style="margin-bottom: 0.25rem; font-size: 1rem;">Quality</h3>
                            <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem; margin: 0;">Local expert fence contractors on all installations.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <div style="aspect-ratio: 4/3; border-radius: 1rem; overflow: hidden; box-shadow: 0 10px 30px -10px rgba(0,0,0,0.2);">
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/images/adelaide-fencing.webp" alt="<?php echo esc_html($city_name); ?> Fencing Projects" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="section-muted" style="padding: 5rem 0;">
    <div class="container" style="max-width: 800px;">
        <div class="cta-section">
            <h2 style="color: white;">Ready to Get Your <?php echo esc_html($city_name); ?> Fence Installed?</h2>
            <p style="color: rgba(255,255,255,0.9);">Join 1,000's of happy <?php echo esc_html($city_name); ?> homeowners. Get your free quotes in 60 seconds.</p>
            <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-secondary btn-lg">Get Free <?php echo esc_html($city_name); ?> Quotes</a>
        </div>
    </div>
</section>

<script>
function toggleSuburbs() {
    var expanded = document.getElementById('expanded-suburbs');
    var btn = document.getElementById('suburb-toggle-btn');
    
    if (expanded.style.display === 'none' || expanded.style.display === '') {
        expanded.style.display = 'grid';
        btn.innerHTML = '<span id="toggle-icon">▲</span> Hide Suburbs';
    } else {
        expanded.style.display = 'none';
        btn.innerHTML = '<span id="toggle-icon">▼</span> View All Suburbs';
    }
}
</script>

<?php get_footer(); ?>
