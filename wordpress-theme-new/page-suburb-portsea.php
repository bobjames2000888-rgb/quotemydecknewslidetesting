<?php
/**
 * Template Name: Suburb - Portsea
 * @package QuoteMyFence
 */
get_header();
$suburb_name = 'Portsea';
$suburb_slug = 'portsea';
?>

<section class="hero-section">
    <div class="container">
        <div class="hero-grid">
            <div class="hero-content">
                <div class="hero-badge">
                    <span>📍</span>
                    <span>Local <?php echo esc_html($suburb_name); ?> Fencing Experts</span>
                </div>
                <h1 class="hero-title"><?php echo esc_html($suburb_name); ?><br><span class="text-gradient">Fencing Services</span></h1>
                <p class="hero-description">Professional fencing installation and repairs in <?php echo esc_html($suburb_name); ?>. Get free quotes from verified local contractors who know the area.</p>
                <div class="hero-buttons">
                    <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-primary btn-lg">Get 3 Free Quotes</a>
                    <a href="<?php echo esc_url( qmf_get_phone_link() ); ?>" class="btn btn-outline btn-lg">Call <?php echo qmf_get_phone(); ?></a>
                </div>
                <div class="hero-trust">
                    <div class="trust-item"><span class="trust-icon">✓</span> No obligation quotes</div>
                    <div class="trust-item"><span class="trust-icon">✓</span> Licensed contractors only</div>
                    <div class="trust-item"><span class="trust-icon">✓</span> 100% Free service</div>
                </div>
            </div>
            <div class="hero-features">
                <div class="feature-box">
                    <div class="feature-icon">🏠</div>
                    <div class="feature-content">
                        <h3>Trusted by <?php echo esc_html($suburb_name); ?> Homeowners</h3>
                        <p>Local families trust us for quality fencing solutions</p>
                    </div>
                </div>
                <div class="feature-box">
                    <div class="feature-icon">⚡</div>
                    <div class="feature-content">
                        <h3>Fast Local Quotes</h3>
                        <p>Get quotes from <?php echo esc_html($suburb_name); ?> contractors in minutes</p>
                    </div>
                </div>
                <div class="feature-box">
                    <div class="feature-icon">🏆</div>
                    <div class="feature-content">
                        <h3>Quality Guaranteed</h3>
                        <p>All work backed by comprehensive warranties</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- How It Works Section -->
<section class="section-light">
    <div class="container">
        <div class="section-header text-center">
            <span class="section-badge">Simple Process</span>
            <h2>How It Works</h2>
            <p>Get your <?php echo esc_html($suburb_name); ?> fence project started in 3 easy steps</p>
        </div>
        <div class="steps-grid">
            <div class="step-card">
                <div class="step-number">1</div>
                <div class="step-icon">📤</div>
                <h3>Click Quotes</h3>
                <span class="step-badge">60 seconds</span>
                <p>Quick & easy form</p>
            </div>
            <div class="step-card">
                <div class="step-number">2</div>
                <div class="step-icon">💬</div>
                <h3>Receive Quotes</h3>
                <span class="step-badge">Within minutes</span>
                <p>3 competitive quotes</p>
            </div>
            <div class="step-card">
                <div class="step-number">3</div>
                <div class="step-icon">👍</div>
                <h3>Choose & Save</h3>
                <span class="step-badge">You decide</span>
                <p>Hire the best contractor</p>
            </div>
        </div>
        <div class="text-center" style="margin-top: 3rem;">
            <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-primary btn-lg">Get Your 3 Free <?php echo esc_html($suburb_name); ?> Fencing Quotes Now</a>
        </div>
    </div>
</section>

<!-- Fence Types Section -->
<section class="section-dark" id="fence-types">
    <div class="container">
        <div class="section-header text-center">
            <h2 style="color: white;">Choose Your Perfect Fence in <?php echo esc_html($suburb_name); ?></h2>
            <p style="color: rgba(255,255,255,0.7);">Discover <?php echo esc_html($suburb_name); ?> fencing options tailored to your needs, budget, and style.</p>
        </div>
        <div class="fence-types-grid">
            <div class="fence-card popular">
                <span class="popular-badge">Most Popular</span>
                <div class="fence-icon">🏠</div>
                <span class="fence-location"><?php echo esc_html($suburb_name); ?></span>
                <h3>Colorbond Fencing</h3>
                <div class="fence-price"><span>from</span> $75/metre</div>
                <p>Durable, weather-resistant steel fencing available in 15 colours. Perfect for Australian conditions.</p>
                <ul class="fence-features">
                    <li>10 year manufacturer warranty</li>
                    <li>Termite resistant</li>
                    <li>Low maintenance</li>
                    <li>15 colour options</li>
                </ul>
                <div class="fence-buttons">
                    <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-primary">Get Quotes</a>
                    <a href="<?php echo esc_url( home_url('/colorbond-fencing/') ); ?>" class="btn btn-outline">Learn More</a>
                </div>
            </div>
            <div class="fence-card">
                <div class="fence-icon">🌲</div>
                <span class="fence-location"><?php echo esc_html($suburb_name); ?></span>
                <h3>Timber Fencing</h3>
                <div class="fence-price"><span>from</span> $65/metre</div>
                <p>Natural timber fencing that adds warmth and character to your property. Eco-friendly option.</p>
                <ul class="fence-features">
                    <li>Natural appearance</li>
                    <li>Cost effective</li>
                    <li>Easy to repair</li>
                    <li>Customisable</li>
                </ul>
                <div class="fence-buttons">
                    <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-outline">Get Quotes</a>
                    <a href="<?php echo esc_url( home_url('/timber-fencing/') ); ?>" class="btn btn-outline">Learn More</a>
                </div>
            </div>
            <div class="fence-card">
                <div class="fence-icon">🏊</div>
                <span class="fence-location"><?php echo esc_html($suburb_name); ?></span>
                <h3>Pool Fencing</h3>
                <div class="fence-price"><span>from</span> $60/metre</div>
                <p>Compliant pool fencing in glass, aluminium, or steel. Safety certified installations.</p>
                <ul class="fence-features">
                    <li>AS 1926.1 compliant</li>
                    <li>Self-closing gates</li>
                    <li>Clear visibility</li>
                    <li>Council certified</li>
                </ul>
                <div class="fence-buttons">
                    <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-outline">Get Quotes</a>
                    <a href="<?php echo esc_url( home_url('/pool-fencing/') ); ?>" class="btn btn-outline">Learn More</a>
                </div>
            </div>
            <div class="fence-card">
                <div class="fence-icon">✨</div>
                <span class="fence-location"><?php echo esc_html($suburb_name); ?></span>
                <h3>Aluminium Fencing</h3>
                <div class="fence-price"><span>from</span> $170/metre</div>
                <p>Modern aluminium slats offering privacy and style. Lightweight yet strong construction.</p>
                <ul class="fence-features">
                    <li>Contemporary design</li>
                    <li>Rust resistant</li>
                    <li>Easy installation</li>
                    <li>Various colours</li>
                </ul>
                <div class="fence-buttons">
                    <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-outline">Get Quotes</a>
                    <a href="<?php echo esc_url( home_url('/aluminium-fencing/') ); ?>" class="btn btn-outline">Learn More</a>
                </div>
            </div>
            <div class="fence-card">
                <div class="fence-icon">⛓️</div>
                <span class="fence-location"><?php echo esc_html($suburb_name); ?></span>
                <h3>Chain Link Fencing</h3>
                <div class="fence-price"><span>from</span> $60/metre</div>
                <p>Economical and practical fencing solution for large areas. Quick installation.</p>
                <ul class="fence-features">
                    <li>Budget friendly</li>
                    <li>Quick install</li>
                    <li>Durable</li>
                    <li>Low maintenance</li>
                </ul>
                <div class="fence-buttons">
                    <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-outline">Get Quotes</a>
                    <a href="<?php echo esc_url( home_url('/chain-link-fencing/') ); ?>" class="btn btn-outline">Learn More</a>
                </div>
            </div>
            <div class="fence-card">
                <div class="fence-icon">🔒</div>
                <span class="fence-location"><?php echo esc_html($suburb_name); ?></span>
                <h3>Security Fencing</h3>
                <div class="fence-price"><span>from</span> $180/metre</div>
                <p>High-security anti-climb fencing for commercial and industrial properties.</p>
                <ul class="fence-features">
                    <li>Anti-climb design</li>
                    <li>Heavy duty</li>
                    <li>CCTV compatible</li>
                    <li>Visible deterrent</li>
                </ul>
                <div class="fence-buttons">
                    <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-outline">Get Quotes</a>
                    <a href="<?php echo esc_url( home_url('/security-fencing/') ); ?>" class="btn btn-outline">Learn More</a>
                </div>
            </div>
            <div class="fence-card">
                <div class="fence-icon">🔩</div>
                <span class="fence-location"><?php echo esc_html($suburb_name); ?></span>
                <h3>Steel Fencing</h3>
                <div class="fence-price"><span>from</span> $120/metre</div>
                <p>Premium steel fencing with ultimate strength and longevity. Built to last decades.</p>
                <ul class="fence-features">
                    <li>Maximum strength</li>
                    <li>Long lifespan</li>
                    <li>Custom finishes</li>
                    <li>Gate compatible</li>
                </ul>
                <div class="fence-buttons">
                    <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-outline">Get Quotes</a>
                    <a href="<?php echo esc_url( home_url('/steel-fencing/') ); ?>" class="btn btn-outline">Learn More</a>
                </div>
            </div>
            <div class="fence-card">
                <div class="fence-icon">🎨</div>
                <span class="fence-location"><?php echo esc_html($suburb_name); ?></span>
                <h3>Feature Fencing</h3>
                <div class="fence-price"><span>from</span> $130/metre</div>
                <p>Custom decorative fencing with laser-cut panels and unique designs. Make a statement.</p>
                <ul class="fence-features">
                    <li>Custom designs</li>
                    <li>Laser-cut panels</li>
                    <li>Mixed materials</li>
                    <li>Unique aesthetics</li>
                </ul>
                <div class="fence-buttons">
                    <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-outline">Get Quotes</a>
                    <a href="<?php echo esc_url( home_url('/feature-fencing/') ); ?>" class="btn btn-outline">Learn More</a>
                </div>
            </div>
        </div>
        <!-- Need Help Section -->
        <div class="help-card">
            <h3>Need Help Choosing?</h3>
            <p>Our expert <?php echo esc_html($suburb_name); ?> team can help you select the perfect fencing solution based on your specific needs, budget, and property requirements.</p>
            <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-primary btn-lg">Speak to an Expert</a>
        </div>
    </div>
</section>

<!-- Reviews Section -->
<?php get_template_part('template-parts/reviews-section'); ?>

<!-- FAQ Section -->
<section class="section-gradient" id="faq">
    <div class="container" style="max-width: 900px;">
        <div class="section-header text-center">
            <div class="icon-circle"><span>❓</span></div>
            <h2>Frequently Asked Questions</h2>
            <p>Got questions about fencing in <?php echo esc_html($suburb_name); ?>? We've got answers. Here's everything you need to know about getting your perfect fence installed in <?php echo esc_html($suburb_name); ?>.</p>
        </div>
        <div class="faq-container">
            <div class="accordion-item">
                <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('active')">
                    <div class="accordion-number">1</div>
                    <span>How much does fencing installation cost in <?php echo esc_html($suburb_name); ?>?</span>
                    <span class="accordion-icon">+</span>
                </button>
                <div class="accordion-content">
                    <?php echo esc_html($suburb_name); ?> fencing installation costs depend on the fencing material, height, total length, and site conditions. As a guide from our <?php echo esc_html($suburb_name); ?> verified fencing contractors, timber fencing starts from $65 per metre, Colorbond fencing starts from $75 per metre, and pool-safe fencing options can start from $60 per metre. Prices may increase for steeper blocks, rocky soil, retaining requirements, or old fence removal. For the most accurate price, use our instant fencing quote tool.
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('active')">
                    <div class="accordion-number">2</div>
                    <span>How long does it take to install a fence in <?php echo esc_html($suburb_name); ?>?</span>
                    <span class="accordion-icon">+</span>
                </button>
                <div class="accordion-content">
                    A standard residential fence (20–30m) in <?php echo esc_html($suburb_name); ?> usually takes around 1–2 days to install. Larger fencing jobs, sloping blocks, retaining requirements, or custom designs may take 3–7 days. Pool fencing, due to compliance checks and certification rules, typically takes 1–4 days.
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('active')">
                    <div class="accordion-number">3</div>
                    <span>Do I need council approval for my fence in <?php echo esc_html($suburb_name); ?>?</span>
                    <span class="accordion-icon">+</span>
                </button>
                <div class="accordion-content">
                    In <?php echo esc_html($suburb_name); ?> most residential fences under 2 metres don't require council approval, but rules can vary depending on your estate area. Approval is often required for boundary fences on corner blocks, heritage-listed properties, high-traffic locations, or fences that exceed standard height limits.
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('active')">
                    <div class="accordion-number">4</div>
                    <span>What's the best fencing material for my property in <?php echo esc_html($suburb_name); ?>?</span>
                    <span class="accordion-icon">+</span>
                </button>
                <div class="accordion-content">
                    It depends on your goals and the style of your home in <?php echo esc_html($suburb_name); ?>. Colorbond fencing is incredibly durable, low-maintenance, and ideal for harsh Australian weather conditions. Timber fencing offers a natural, warm look but requires periodic maintenance. Aluminium slat fencing provides a modern appearance with excellent durability.
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('active')">
                    <div class="accordion-number">5</div>
                    <span>Are the fencing contractors in <?php echo esc_html($suburb_name); ?> verified and insured?</span>
                    <span class="accordion-icon">+</span>
                </button>
                <div class="accordion-content">
                    Yes. Every fencing contractor on our platform in <?php echo esc_html($suburb_name); ?> is fully licensed, insured, and professionally vetted before they're allowed to quote. We verify their experience, trade credentials, public liability insurance, and customer reviews.
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('active')">
                    <div class="accordion-number">6</div>
                    <span>How many quotes will I receive?</span>
                    <span class="accordion-icon">+</span>
                </button>
                <div class="accordion-content">
                    You'll typically receive up to 3 competitive quotes from reputable <?php echo esc_html($suburb_name); ?> local fencing experts within hours. This lets you compare pricing, availability, experience, and workmanship. There's absolutely no obligation.
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('active')">
                    <div class="accordion-number">7</div>
                    <span>Can you repair or replace an existing fence in <?php echo esc_html($suburb_name); ?>?</span>
                    <span class="accordion-icon">+</span>
                </button>
                <div class="accordion-content">
                    Absolutely. Whether you need simple fence repairs (broken palings, leaning posts, storm damage) or a complete fence replacement, our <?php echo esc_html($suburb_name); ?> local fencing contractors can help.
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('active')">
                    <div class="accordion-number">8</div>
                    <span>What happens after I submit my quote request?</span>
                    <span class="accordion-icon">+</span>
                </button>
                <div class="accordion-content">
                    Within minutes, we'll match you with up to 3 qualified local fencing professionals in <?php echo esc_html($suburb_name); ?>. They'll contact you to discuss your job, arrange a site visit if required, and provide detailed written fencing quotes.
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('active')">
                    <div class="accordion-number">9</div>
                    <span>How long will my fence last in <?php echo esc_html($suburb_name); ?>?</span>
                    <span class="accordion-icon">+</span>
                </button>
                <div class="accordion-content">
                    Fence lifespan depends on the material and <?php echo esc_html($suburb_name); ?> area climate. A well-installed Colorbond fence or aluminium fence can last 20–30 years, while timber fencing generally lasts 10–20 years with proper care.
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('active')">
                    <div class="accordion-number">10</div>
                    <span>Do I need my neighbour's approval for a new boundary fence?</span>
                    <span class="accordion-icon">+</span>
                </button>
                <div class="accordion-content">
                    Yes — communication with your neighbour is essential. Boundary fences require both parties to agree on the fence height, materials, and cost sharing. In most cases, a quick conversation is enough to reach an agreement.
                </div>
            </div>
        </div>
        <!-- FAQ CTA -->
        <div class="faq-cta">
            <h3>Still have questions?</h3>
            <p>Our local fencing experts in <?php echo esc_html($suburb_name); ?> are here to help. Get your free quotes and ask them anything!</p>
            <a href="<?php echo esc_url( qmf_get_quote_url() ); ?>" class="btn btn-primary btn-lg">Get Your 3 Free Quotes Now</a>
            <div class="faq-stats">
                <span>⭐ <strong>4.78</strong> rating</span>
                <span>•</span>
                <span>10,000+ Fences Quoted</span>
                <span>•</span>
                <span>100% verified contractors</span>
            </div>
        </div>
    </div>
</section>

<?php get_template_part('template-parts/cta-section', null, array('suburb' => $suburb_name)); ?>

<?php get_footer(); ?>
