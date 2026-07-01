<?php
/**
 * Suburb Template Generator
 * 
 * This file contains the reusable function to generate complete suburb page content.
 * Each suburb template can include this file and call the function with suburb name.
 * 
 * @package QuoteMyFence
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Generate complete suburb page content
 * 
 * @param string $suburb_name The name of the suburb
 * @param string $suburb_slug The URL slug for the suburb
 */
function qmf_render_suburb_page( $suburb_name, $suburb_slug = '' ) {
    if ( empty( $suburb_slug ) ) {
        $suburb_slug = sanitize_title( $suburb_name );
    }
    
    $quote_url = qmf_get_quote_url();
    ?>

    <!-- Hero Section -->
    <section class="suburb-hero" style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/hero-fence.jpg');">
        <div class="hero-overlay"></div>
        <div class="container">
            <div class="hero-grid">
                <div class="hero-content">
                    <div class="trust-badge">
                        <span class="star">★</span>
                        <span>Australia's #1 Fencing Quote Platform — Quotes Within Minutes.</span>
                    </div>
                    <h1><?php echo esc_html($suburb_name); ?> <span class="accent">Fencing Quotes</span> in Minutes - Free</h1>
                    <p class="hero-description">Compare Prices & Save on Your Fence Installation — only verified, top-rated fencing contractors quote on your job.</p>
                    
                    <div class="quote-box">
                        <h3>Start Your Free Quote</h3>
                        <a href="<?php echo esc_url($quote_url); ?>" class="btn btn-hero btn-xl">
                            Click to Get 3 Free <?php echo esc_html($suburb_name); ?> Quotes in Minutes
                        </a>
                        <p class="quote-disclaimer">✓ No obligation quotes ✓ Licensed contractors only ✓ 100% Free service</p>
                    </div>
                    
                    <div class="social-proof-grid">
                        <div class="proof-item">
                            <span class="proof-value">10,000+</span>
                            <span class="proof-label">Suburbs Covered</span>
                        </div>
                        <div class="proof-item">
                            <span class="proof-value">4.78★</span>
                            <span class="proof-label">Customer Rating</span>
                        </div>
                        <div class="proof-item">
                            <span class="proof-value">10,000+</span>
                            <span class="proof-label">Fences Quoted</span>
                        </div>
                    </div>
                </div>
                
                <div class="hero-features">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        </div>
                        <div class="feature-content">
                            <h3>Trusted by Homeowners Across <?php echo esc_html($suburb_name); ?></h3>
                            <p>Homeowners across <?php echo esc_html($suburb_name); ?> count on us for their fencing solutions at competitive and affordable prices, without compromising on quality.</p>
                        </div>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                        </div>
                        <div class="feature-content">
                            <h3><?php echo esc_html($suburb_name); ?>'s Most Reliable Fencing Professionals</h3>
                            <p>Quotes are sourced only from screened, reviewed, and highly-rated fencing contractors in <?php echo esc_html($suburb_name); ?>.</p>
                        </div>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        </div>
                        <div class="feature-content">
                            <h3>Fast <?php echo esc_html($suburb_name); ?>-Wide Local Area Quotes</h3>
                            <p>Get fencing quotes from local contractors in minutes — no matter where you are in <?php echo esc_html($suburb_name); ?>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-wave">
            <svg preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"/>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"/>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"/>
            </svg>
        </div>
    </section>

    <!-- How It Works Section -->
    <section class="how-it-works">
        <div class="container">
            <div class="section-header">
                <span class="badge">Simple Process</span>
                <h2>How It Works</h2>
                <p>Get your <?php echo esc_html($suburb_name); ?> fence project started in 3 easy steps</p>
            </div>
            
            <div class="steps-grid">
                <div class="step-card">
                    <div class="step-number">1</div>
                    <div class="step-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    </div>
                    <h3>Click Quotes</h3>
                    <span class="step-badge">60 seconds</span>
                    <p>Quick & easy form</p>
                </div>
                
                <div class="step-card">
                    <div class="step-number">2</div>
                    <div class="step-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    </div>
                    <h3>Receive Quotes</h3>
                    <span class="step-badge">Within minutes</span>
                    <p>3 competitive quotes</p>
                </div>
                
                <div class="step-card">
                    <div class="step-number">3</div>
                    <div class="step-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
                    </div>
                    <h3>Choose & Save</h3>
                    <span class="step-badge">You decide</span>
                    <p>Hire the best contractor</p>
                </div>
            </div>
            
            <div class="text-center mt-12">
                <a href="<?php echo esc_url($quote_url); ?>" class="btn btn-hero btn-lg">
                    Get Your 3 Free <?php echo esc_html($suburb_name); ?> Fencing Quotes Now
                </a>
            </div>
        </div>
    </section>

    <!-- Fence Types Section -->
    <section class="fence-types" style="background-color: hsl(215, 40%, 18%);">
        <div class="container">
            <div class="section-header light">
                <h2>Choose Your Perfect Fence in <?php echo esc_html($suburb_name); ?></h2>
                <p>Discover <?php echo esc_html($suburb_name); ?> fencing options tailored to your needs, budget, and style.</p>
            </div>
            
            <div class="fence-grid">
                <?php
                $fence_types = array(
                    array(
                        'id' => 'colorbond',
                        'name' => 'Colorbond Fencing',
                        'description' => 'Durable, weather-resistant steel fencing available in 15 colours. Perfect for Australian conditions.',
                        'features' => array('10 year manufacturer warranty', 'Termite resistant', 'Low maintenance', '15 colour options'),
                        'price' => '$75/metre',
                        'popular' => true,
                        'href' => '/colorbond-fencing'
                    ),
                    array(
                        'id' => 'timber',
                        'name' => 'Timber Fencing',
                        'description' => 'Natural timber fencing that adds warmth and character to your property. Eco-friendly option.',
                        'features' => array('Natural appearance', 'Cost effective', 'Easy to repair', 'Customisable'),
                        'price' => '$65/metre',
                        'popular' => false,
                        'href' => '/timber-fencing'
                    ),
                    array(
                        'id' => 'pool',
                        'name' => 'Pool Fencing',
                        'description' => 'Compliant pool fencing in glass, aluminium, or steel. Safety certified installations.',
                        'features' => array('AS 1926.1 compliant', 'Self-closing gates', 'Clear visibility', 'Council certified'),
                        'price' => '$60/metre',
                        'popular' => false,
                        'href' => '/pool-fencing'
                    ),
                    array(
                        'id' => 'aluminium',
                        'name' => 'Aluminium Fencing',
                        'description' => 'Modern aluminium slats offering privacy and style. Lightweight yet strong construction.',
                        'features' => array('Contemporary design', 'Rust resistant', 'Easy installation', 'Various colours'),
                        'price' => '$170/metre',
                        'popular' => false,
                        'href' => '/aluminium-fencing'
                    ),
                    array(
                        'id' => 'chainlink',
                        'name' => 'Chain Link Fencing',
                        'description' => 'Economical and practical fencing solution for large areas. Quick installation.',
                        'features' => array('Budget friendly', 'Quick install', 'Durable', 'Low maintenance'),
                        'price' => '$60/metre',
                        'popular' => false,
                        'href' => '/chain-link-fencing'
                    ),
                    array(
                        'id' => 'security',
                        'name' => 'Security Fencing',
                        'description' => 'High-security anti-climb fencing for commercial and industrial properties.',
                        'features' => array('Anti-climb design', 'Heavy duty', 'CCTV compatible', 'Visible deterrent'),
                        'price' => '$180/metre',
                        'popular' => false,
                        'href' => '/security-fencing'
                    ),
                    array(
                        'id' => 'steel',
                        'name' => 'Steel Fencing',
                        'description' => 'Premium steel fencing with ultimate strength and longevity. Built to last decades.',
                        'features' => array('Maximum strength', 'Long lifespan', 'Custom finishes', 'Gate compatible'),
                        'price' => '$120/metre',
                        'popular' => false,
                        'href' => '/steel-fencing'
                    ),
                    array(
                        'id' => 'feature',
                        'name' => 'Feature Fencing',
                        'description' => 'Custom decorative fencing with laser-cut panels and unique designs. Make a statement.',
                        'features' => array('Custom designs', 'Laser-cut panels', 'Mixed materials', 'Unique aesthetics'),
                        'price' => '$130/metre',
                        'popular' => false,
                        'href' => '/feature-fencing'
                    )
                );
                
                foreach ($fence_types as $fence) :
                ?>
                <div class="fence-card <?php echo $fence['popular'] ? 'popular' : ''; ?>">
                    <?php if ($fence['popular']) : ?>
                    <span class="popular-badge">Most Popular</span>
                    <?php endif; ?>
                    
                    <div class="fence-icon"></div>
                    <span class="fence-location"><?php echo esc_html($suburb_name); ?></span>
                    <h3><?php echo esc_html($fence['name']); ?></h3>
                    <div class="fence-price">
                        <span class="from">from</span>
                        <?php echo esc_html($fence['price']); ?>
                    </div>
                    <p><?php echo esc_html($fence['description']); ?></p>
                    
                    <ul class="fence-features">
                        <?php foreach ($fence['features'] as $feature) : ?>
                        <li><?php echo esc_html($feature); ?></li>
                        <?php endforeach; ?>
                    </ul>
                    
                    <div class="fence-actions">
                        <a href="<?php echo esc_url($quote_url); ?>" class="btn <?php echo $fence['popular'] ? 'btn-hero' : 'btn-outline'; ?>">Get Quotes</a>
                        <a href="<?php echo esc_url($fence['href']); ?>" class="btn btn-outline">Learn More</a>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
            
            <div class="need-help-box">
                <h3>Need Help Choosing?</h3>
                <p>Our expert <?php echo esc_html($suburb_name); ?> team can help you select the perfect fencing solution based on your specific needs, budget, and property requirements.</p>
                <a href="<?php echo esc_url($quote_url); ?>" class="btn btn-hero btn-lg">Speak to an Expert</a>
            </div>
        </div>
    </section>

    <!-- Reviews Section -->
    <section class="reviews-section">
        <div class="container">
            <div class="section-header">
                <span class="badge">Customer Reviews</span>
                <h2>What <?php echo esc_html($suburb_name); ?> Homeowners Say</h2>
                <p>Real reviews from real customers in your area</p>
            </div>
            
            <div class="reviews-grid">
                <div class="review-card">
                    <div class="review-stars">★★★★★</div>
                    <p class="review-text">"The team was professional from start to finish. Our new Colorbond fence looks amazing and was installed quickly. Highly recommend for anyone in <?php echo esc_html($suburb_name); ?>!"</p>
                    <div class="review-author">
                        <span class="author-name">Sarah M.</span>
                        <span class="author-location"><?php echo esc_html($suburb_name); ?></span>
                    </div>
                </div>
                
                <div class="review-card">
                    <div class="review-stars">★★★★★</div>
                    <p class="review-text">"Got 3 quotes within hours and saved over $800 compared to the first quote I received elsewhere. The platform made it so easy to compare prices."</p>
                    <div class="review-author">
                        <span class="author-name">Michael T.</span>
                        <span class="author-location"><?php echo esc_html($suburb_name); ?></span>
                    </div>
                </div>
                
                <div class="review-card">
                    <div class="review-stars">★★★★★</div>
                    <p class="review-text">"Excellent service! The contractors were punctual, tidy, and the quality of work exceeded my expectations. Will definitely use again."</p>
                    <div class="review-author">
                        <span class="author-name">Jennifer L.</span>
                        <span class="author-location"><?php echo esc_html($suburb_name); ?></span>
                    </div>
                </div>
            </div>
            
            <div class="reviews-stats">
                <div class="stat">
                    <span class="stat-value">4.78</span>
                    <span class="stat-label">Average Rating</span>
                </div>
                <div class="stat">
                    <span class="stat-value">10,000+</span>
                    <span class="stat-label">Fences Quoted</span>
                </div>
                <div class="stat">
                    <span class="stat-value">100%</span>
                    <span class="stat-label">Verified Contractors</span>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section with 14 Questions -->
    <section class="faq-section">
        <div class="container" style="max-width: 900px;">
            <div class="section-header">
                <div class="faq-icon">?</div>
                <h2>Frequently Asked Questions</h2>
                <p>Got questions about fencing in <?php echo esc_html($suburb_name); ?>? We've got answers. Here's everything you need to know about getting your perfect fence installed in <?php echo esc_html($suburb_name); ?>.</p>
            </div>
            
            <div class="faq-list">
                <?php
                $faqs = array(
                    array(
                        'question' => 'How much does fencing installation cost in ' . $suburb_name . '?',
                        'answer' => $suburb_name . ' fencing Installation costs depend on the fencing material, height, total length, and site conditions. As a guide from our ' . $suburb_name . ' verified fencing contractors, timber fencing starts from $65 per metre, Colorbond fencing starts from $75 per metre, and pool-safe fencing options can start from $60 per metre. Prices may increase for steeper blocks, rocky soil, retaining requirements, or old fence removal. For the most accurate price, use our instant fencing quote tool — it gives you a fast online estimate and matches you with local fencing experts who\'ll provide detailed on-site pricing.'
                    ),
                    array(
                        'question' => 'How long does it take to install a fence in ' . $suburb_name . '?',
                        'answer' => 'A standard residential fence (20–30m) in ' . $suburb_name . ' usually takes around 1–2 days to install. Larger fencing jobs, sloping blocks, retaining requirements, or custom designs may take 3–7 days. Pool fencing, due to compliance checks and certification rules, typically takes 1–4 days. After reviewing your property, your matched local fencing contractors will confirm the exact installation timeline during the quoting stage.'
                    ),
                    array(
                        'question' => 'Do I need council approval for my fence in ' . $suburb_name . '?',
                        'answer' => 'In ' . $suburb_name . ' most residential fences under 2 metres don\'t require council approval, but rules can vary depending on your estate area. Approval is often required for boundary fences on corner blocks, heritage-listed properties, high-traffic locations, or fences that exceed standard height limits. Our verified ' . $suburb_name . ' local fencing contractors understand council regulations in ' . $suburb_name . ' and will guide you through the approval or permit process if needed.'
                    ),
                    array(
                        'question' => 'What\'s the best fencing material for my property in ' . $suburb_name . '?',
                        'answer' => 'It depends on your goals and the style of your home in ' . $suburb_name . '. Colorbond fencing is incredibly durable, low-maintenance, and ideal for harsh Australian weather conditions. Timber fencing offers a natural, warm look but requires periodic maintenance. Aluminium slat fencing provides a modern appearance with excellent durability, while glass fencing is a premium option perfect for pools, outdoor areas, and homes wanting an open, stylish finish. After reviewing your property, ' . $suburb_name . ' local fencing contractors can recommend the best material based on your privacy needs, style preferences, budget, and long-term value.'
                    ),
                    array(
                        'question' => 'Are the fencing contractors in ' . $suburb_name . ' verified and insured?',
                        'answer' => 'Yes. Every fencing contractor on our platform in ' . $suburb_name . ' is fully licensed, insured, and professionally vetted before they\'re allowed to quote. We verify their experience, trade credentials, public liability insurance, and customer reviews to ensure you\'re only connected with reliable, experienced, and proven fencing professionals in your ' . $suburb_name . ' local area.'
                    ),
                    array(
                        'question' => 'How many quotes will I receive?',
                        'answer' => 'You\'ll typically receive up to 3 competitive quotes from reputable ' . $suburb_name . ' local fencing experts within hours. This lets you compare pricing, availability, experience, and workmanship. There\'s absolutely no obligation — you simply choose the fencing contractor who best suits your project and budget.'
                    ),
                    array(
                        'question' => 'Can you repair or replace an existing fence in ' . $suburb_name . '?',
                        'answer' => 'Absolutely. Whether you need simple fence repairs (broken palings, leaning posts, storm damage) or a complete fence replacement, our ' . $suburb_name . ' local fencing contractors can help. They\'ll inspect the fence, explain your repair-vs-replacement options, and provide honest advice to ensure you get the most cost-effective solution for your property.'
                    ),
                    array(
                        'question' => 'What happens after I submit my quote request?',
                        'answer' => 'Within minutes, we\'ll match you with up to 3 qualified local fencing professionals in ' . $suburb_name . '. They\'ll contact you to discuss your job, arrange a site visit if required, and provide detailed written fencing quotes. You review the quotes, ask any questions, and choose the fencing contractor that best suits your project — all at your own pace with zero pressure.'
                    ),
                    array(
                        'question' => 'How long will my fence last in ' . $suburb_name . '?',
                        'answer' => 'Fence lifespan depends on the material and ' . $suburb_name . ' area climate. A well-installed Colorbond fence or aluminium fence can last 20–30 years, while timber fencing generally lasts 10–20 years with proper care. Regular maintenance, high-quality installation, and choosing the right fencing material for the ' . $suburb_name . ' area all play a major role in how long your fence will last.'
                    ),
                    array(
                        'question' => 'What factors can increase the total cost of a fence?',
                        'answer' => 'Aside from the fencing material itself, several factors can increase the total cost of a fence. These include site preparation, sloped or rocky ground, old fence removal, retaining requirements, custom designs, extra gates, and property accessibility issues. Your fencing contractors will outline all costs upfront during the quoting process so there are no surprises.'
                    ),
                    array(
                        'question' => 'Do I need my neighbour\'s approval for a new boundary fence in ' . $suburb_name . '?',
                        'answer' => 'Yes — communication with your neighbour is essential. Boundary fences require both parties to agree on the fence height, materials, and cost sharing. In most cases, a quick conversation is enough to reach an agreement, and formal fencing notices are only needed if there\'s a dispute or your neighbour disagrees with the proposed fence.'
                    ),
                    array(
                        'question' => 'How close to the boundary can I build my fence in ' . $suburb_name . '?',
                        'answer' => 'Most boundary fences are installed directly on the shared property line and are usually a shared cost between neighbours. To avoid disputes, it\'s best to check your boundary plan, title documents, or property survey before work begins. If needed, your fencing contractor can help confirm the correct boundary location.'
                    ),
                    array(
                        'question' => 'How do I choose the right fence for my home in ' . $suburb_name . '?',
                        'answer' => 'Choosing the right fence depends on your home\'s style, privacy requirements and budget. Modern and contemporary homes often suit aluminium slat fencing or Colorbond, while classic or traditional properties typically look best with timber, picket, or decorative feature fencing. If you need maximum privacy, Colorbond or tall timber options work well. During your consultation, a local fencing contractor will assess your property and recommend the best materials based on appearance, durability, long-term value, and your goals.'
                    ),
                    array(
                        'question' => 'Can a new fence add value to my property?',
                        'answer' => 'Absolutely. A modern, high-quality fence can significantly improve your property\'s street appeal, privacy, and security — all of which add real value. It creates a stronger first impression, enhances outdoor spaces, and reduces future maintenance for potential buyers. By choosing durable materials like Colorbond, aluminium, or premium timber, your home becomes more attractive on the market and can stand out against similar properties.'
                    )
                );
                
                foreach ($faqs as $index => $faq) :
                ?>
                <div class="accordion-item">
                    <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('active')">
                        <div class="accordion-header">
                            <span class="faq-number"><?php echo $index + 1; ?></span>
                            <span class="faq-question"><?php echo esc_html($faq['question']); ?></span>
                        </div>
                        <span class="accordion-icon">+</span>
                    </button>
                    <div class="accordion-content">
                        <?php echo esc_html($faq['answer']); ?>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
            
            <div class="faq-cta">
                <h3>Still have questions?</h3>
                <p>Our local fencing experts in <?php echo esc_html($suburb_name); ?> are here to help. Get your free quotes and ask them anything!</p>
                <a href="<?php echo esc_url($quote_url); ?>" class="btn btn-hero btn-lg">
                    Get Your 3 Free Quotes Now
                </a>
                <div class="faq-stats">
                    <span>⭐ 4.78 rating</span>
                    <span>•</span>
                    <span>10,000+ Fences Quoted</span>
                    <span>•</span>
                    <span>100% verified contractors</span>
                </div>
            </div>
        </div>
    </section>

    <?php
}
