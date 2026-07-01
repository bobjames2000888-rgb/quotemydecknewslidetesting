<?php
/**
 * Template Part: Reviews Section
 * Matches the live React ReviewsSection component exactly
 * 
 * @package QuoteMyFence
 */

$reviews = array(
    array(
        'name'     => 'Samantha',
        'location' => 'Sydney, NSW',
        'rating'   => 5,
        'text'     => 'Such a smooth and easy process! Three quotes arrived almost instantly, and the contractor I picked did a flawless job. My new Colorbond fence looks stunning — I\'m absolutely thrilled!',
        'project'  => 'Colorbond Fencing – 32m',
    ),
    array(
        'name'     => 'Mark',
        'location' => 'Melbourne, VIC',
        'rating'   => 5,
        'text'     => 'Super impressed! The quotes were spot-on, and the contractor I chose was fantastic from day one. They finished earlier than promised, and the fence looks perfect. Highly recommended!',
        'project'  => 'Timber Fencing – 46m',
    ),
    array(
        'name'     => 'James',
        'location' => 'Brisbane, QLD',
        'rating'   => 5,
        'text'     => 'Fantastic experience! Comparing quotes was so easy, and I got a much better price than I thought I would. The workmanship was outstanding. The job truly exceeded my expectations.',
        'project'  => 'Glass Panel Fencing – 35m',
    ),
    array(
        'name'     => 'Jessica',
        'location' => 'Sydney, NSW',
        'rating'   => 5,
        'text'     => 'Such a professional experience. Communication was excellent, and the online quote system made things incredibly simple — no more calling around for prices. Highly recommend!',
        'project'  => 'Aluminium Slat Fencing – 31m',
    ),
);
?>

<section id="reviews" class="reviews-section section-muted">
    <div class="container">
        <!-- Header -->
        <div class="section-header text-center">
            <div class="review-stars-header">
                <?php for ( $i = 0; $i < 5; $i++ ) : ?>
                    <span class="star-icon">⭐</span>
                <?php endfor; ?>
            </div>
            <h2>Trusted by Thousands of Australians</h2>
            <p>Read what our customers say about their fencing experience with our platform</p>
        </div>
        
        <!-- Reviews Grid -->
        <div class="reviews-grid">
            <?php foreach ( $reviews as $review ) : ?>
                <div class="review-card card">
                    <div class="card-content">
                        <div class="review-header">
                            <div class="review-icon">
                                <span>❝</span>
                            </div>
                            <div class="review-body">
                                <!-- Rating -->
                                <div class="review-rating">
                                    <?php for ( $i = 0; $i < $review['rating']; $i++ ) : ?>
                                        <span class="star-icon">⭐</span>
                                    <?php endfor; ?>
                                </div>
                                
                                <!-- Review Text -->
                                <p class="review-text">"<?php echo esc_html( $review['text'] ); ?>"</p>
                                
                                <!-- Customer Info -->
                                <div class="review-footer">
                                    <div class="review-author-info">
                                        <strong class="review-author"><?php echo esc_html( $review['name'] ); ?></strong>
                                        <span class="review-location"><?php echo esc_html( $review['location'] ); ?></span>
                                    </div>
                                    <div class="review-project">
                                        <span><?php echo esc_html( $review['project'] ); ?></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <!-- Trust Indicators -->
        <div class="trust-card">
            <h3>Join Thousands of Happy Customers</h3>
            <div class="trust-indicators">
                <div class="trust-indicator">
                    <div class="trust-check">✓</div>
                    <span>Licensed & Insured Contractors</span>
                </div>
                <div class="trust-indicator">
                    <div class="trust-check">✓</div>
                    <span>Quality Workmanship</span>
                </div>
                <div class="trust-indicator">
                    <div class="trust-check">✓</div>
                    <span>Free, No-Obligation Quotes</span>
                </div>
            </div>
        </div>
    </div>
</section>
