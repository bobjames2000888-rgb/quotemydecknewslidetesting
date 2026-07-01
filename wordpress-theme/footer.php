    <footer id="colophon" class="site-footer">
        <!-- Newsletter Section -->
        <div class="footer-newsletter">
            <div class="container">
                <h3><?php esc_html_e( 'Stay Updated with Fencing Tips', 'quotemyfence' ); ?></h3>
                <p><?php esc_html_e( 'Get the latest fencing trends, maintenance tips, and exclusive offers delivered to your inbox', 'quotemyfence' ); ?></p>
                <form action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" method="post" class="newsletter-form">
                    <input type="hidden" name="action" value="qmf_newsletter">
                    <?php wp_nonce_field( 'qmf_newsletter', 'qmf_newsletter_nonce' ); ?>
                    <input type="email" name="newsletter_email" class="newsletter-input" placeholder="<?php esc_attr_e( 'Enter your email address', 'quotemyfence' ); ?>" required>
                    <button type="submit" class="btn btn-primary"><?php esc_html_e( 'Subscribe', 'quotemyfence' ); ?></button>
                </form>
            </div>
        </div>

        <!-- Main Footer Content -->
        <div class="container">
            <div class="footer-grid">
                <!-- Company Info -->
                <div class="footer-section">
                    <div class="footer-logo">
                        <div class="logo-icon">QMF</div>
                        <span class="site-title"><?php bloginfo( 'name' ); ?></span>
                    </div>
                    <p><?php esc_html_e( 'Australia\'s leading platform for connecting homeowners with trusted fencing contractors. Get competitive quotes and quality installations nationwide.', 'quotemyfence' ); ?></p>
                    
                    <!-- Contact Info -->
                    <div class="footer-contact">
                        <div class="footer-contact-item">
                            <?php echo qmf_icon( 'phone' ); ?>
                            <span><?php echo esc_html( qmf_get_phone() ); ?></span>
                        </div>
                        <div class="footer-contact-item">
                            <?php echo qmf_icon( 'mail' ); ?>
                            <span><?php echo esc_html( qmf_get_email() ); ?></span>
                        </div>
                        <div class="footer-contact-item">
                            <?php echo qmf_icon( 'map-pin' ); ?>
                            <span><?php esc_html_e( 'Serving all of Australia', 'quotemyfence' ); ?></span>
                        </div>
                    </div>

                    <!-- Social Links -->
                    <div class="social-links">
                        <a href="#" class="social-link" aria-label="<?php esc_attr_e( 'Facebook', 'quotemyfence' ); ?>">
                            <?php echo qmf_icon( 'facebook' ); ?>
                        </a>
                        <a href="#" class="social-link" aria-label="<?php esc_attr_e( 'Twitter', 'quotemyfence' ); ?>">
                            <?php echo qmf_icon( 'twitter' ); ?>
                        </a>
                        <a href="#" class="social-link" aria-label="<?php esc_attr_e( 'Instagram', 'quotemyfence' ); ?>">
                            <?php echo qmf_icon( 'instagram' ); ?>
                        </a>
                        <a href="#" class="social-link" aria-label="<?php esc_attr_e( 'LinkedIn', 'quotemyfence' ); ?>">
                            <?php echo qmf_icon( 'linkedin' ); ?>
                        </a>
                    </div>
                </div>

                <!-- Fencing Services -->
                <div class="footer-section" style="grid-column: span 2;">
                    <h4><?php esc_html_e( 'Fencing Services', 'quotemyfence' ); ?></h4>
                    <ul style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem;">
                        <li><a href="<?php echo esc_url( home_url( '/timber-fencing/' ) ); ?>"><?php esc_html_e( 'Timber Fencing', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/colorbond-fencing/' ) ); ?>"><?php esc_html_e( 'Colorbond Fencing', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/feature-fencing/' ) ); ?>"><?php esc_html_e( 'Feature Fencing', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/aluminium-fencing/' ) ); ?>"><?php esc_html_e( 'Aluminium Fencing', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/chain-link-fencing/' ) ); ?>"><?php esc_html_e( 'Chain Link Fencing', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/security-fencing/' ) ); ?>"><?php esc_html_e( 'Security Fencing', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/steel-fencing/' ) ); ?>"><?php esc_html_e( 'Steel Fencing', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/pool-fencing/' ) ); ?>"><?php esc_html_e( 'Pool Fencing', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/fence-repairs/' ) ); ?>"><?php esc_html_e( 'Fence Repairs', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/gate-installation/' ) ); ?>"><?php esc_html_e( 'Gate Installation', 'quotemyfence' ); ?></a></li>
                    </ul>
                </div>

                <!-- Service Areas & Resources -->
                <div class="footer-section">
                    <h4><?php esc_html_e( 'Major Cities', 'quotemyfence' ); ?></h4>
                    <ul>
                        <li><a href="<?php echo esc_url( home_url( '/sydney/' ) ); ?>"><?php esc_html_e( 'Sydney', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/sydney/' ) ); ?>"><?php esc_html_e( 'Melbourne', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/sydney/' ) ); ?>"><?php esc_html_e( 'Brisbane', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/sydney/' ) ); ?>"><?php esc_html_e( 'Perth', 'quotemyfence' ); ?></a></li>
                    </ul>
                    
                    <h4 style="margin-top: 2rem;"><?php esc_html_e( 'Resources', 'quotemyfence' ); ?></h4>
                    <ul>
                        <li><a href="<?php echo esc_url( home_url( '/fencing-guides/' ) ); ?>"><?php esc_html_e( 'Fencing Guides', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/faq/' ) ); ?>"><?php esc_html_e( 'FAQ', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>"><?php esc_html_e( 'Contact Us', 'quotemyfence' ); ?></a></li>
                    </ul>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="footer-bottom">
                <p>&copy; <?php echo date( 'Y' ); ?> <?php bloginfo( 'name' ); ?>. <?php esc_html_e( 'All rights reserved.', 'quotemyfence' ); ?></p>
                <nav class="footer-navigation">
                    <a href="<?php echo esc_url( home_url( '/privacy-policy/' ) ); ?>"><?php esc_html_e( 'Privacy Policy', 'quotemyfence' ); ?></a>
                    <a href="<?php echo esc_url( home_url( '/terms-of-service/' ) ); ?>"><?php esc_html_e( 'Terms of Service', 'quotemyfence' ); ?></a>
                    <a href="<?php echo esc_url( home_url( '/sitemap/' ) ); ?>"><?php esc_html_e( 'Sitemap', 'quotemyfence' ); ?></a>
                </nav>
            </div>
        </div>
    </footer>
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>
