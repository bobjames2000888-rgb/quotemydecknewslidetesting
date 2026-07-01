    </main><!-- #main-content -->

    <footer id="colophon" class="site-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <div class="footer-logo">
                        <div class="logo-icon">QMF</div>
                        <span class="site-title" style="color: white;">QuoteMyFence</span>
                    </div>
                    <p style="color: rgba(255,255,255,0.7); margin-top: 1rem; font-size: 0.875rem;">
                        <?php esc_html_e( "Australia's trusted fencing quote platform. Connect with verified local contractors for free quotes.", 'quotemyfence' ); ?>
                    </p>
                </div>

                <div class="footer-col">
                    <h4><?php esc_html_e( 'Services', 'quotemyfence' ); ?></h4>
                    <ul>
                        <li><a href="<?php echo esc_url( home_url( '/colorbond-fencing/' ) ); ?>"><?php esc_html_e( 'Colorbond Fencing', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/timber-fencing/' ) ); ?>"><?php esc_html_e( 'Timber Fencing', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/aluminium-fencing/' ) ); ?>"><?php esc_html_e( 'Aluminium Fencing', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/steel-fencing/' ) ); ?>"><?php esc_html_e( 'Steel Fencing', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/pool-fencing/' ) ); ?>"><?php esc_html_e( 'Pool Fencing', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/glass-fencing/' ) ); ?>"><?php esc_html_e( 'Glass Fencing', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/gate-installation/' ) ); ?>"><?php esc_html_e( 'Gate Installation', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/fence-repairs/' ) ); ?>"><?php esc_html_e( 'Fence Repairs', 'quotemyfence' ); ?></a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4><?php esc_html_e( 'Locations', 'quotemyfence' ); ?></h4>
                    <ul>
                        <li><a href="<?php echo esc_url( home_url( '/sydney/' ) ); ?>"><?php esc_html_e( 'Sydney', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/melbourne/' ) ); ?>"><?php esc_html_e( 'Melbourne', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/brisbane/' ) ); ?>"><?php esc_html_e( 'Brisbane', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/perth/' ) ); ?>"><?php esc_html_e( 'Perth', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/adelaide/' ) ); ?>"><?php esc_html_e( 'Adelaide', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/canberra/' ) ); ?>"><?php esc_html_e( 'Canberra', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/hobart/' ) ); ?>"><?php esc_html_e( 'Hobart', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/darwin/' ) ); ?>"><?php esc_html_e( 'Darwin', 'quotemyfence' ); ?></a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4><?php esc_html_e( 'Support', 'quotemyfence' ); ?></h4>
                    <ul>
                        <li><a href="<?php echo esc_url( home_url( '/fencing-guides/' ) ); ?>"><?php esc_html_e( 'Fencing Guides', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/faq/' ) ); ?>"><?php esc_html_e( 'FAQ', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>"><?php esc_html_e( 'Contact Us', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/sitemap/' ) ); ?>"><?php esc_html_e( 'Sitemap', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/privacy-policy/' ) ); ?>"><?php esc_html_e( 'Privacy Policy', 'quotemyfence' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/terms-of-service/' ) ); ?>"><?php esc_html_e( 'Terms of Service', 'quotemyfence' ); ?></a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; <?php echo esc_html( date('Y') ); ?> <?php bloginfo( 'name' ); ?>. <?php esc_html_e( 'All rights reserved.', 'quotemyfence' ); ?></p>
            </div>
        </div>
    </footer>
</div><!-- #page -->

<?php wp_footer(); ?>

<script>
// Prevent image dragging
document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var navigation = document.querySelector('.main-navigation');
    
    if (menuToggle && navigation) {
        menuToggle.addEventListener('click', function() {
            navigation.classList.toggle('active');
            var expanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !expanded);
        });
    }
});
</script>
</body>
</html>
