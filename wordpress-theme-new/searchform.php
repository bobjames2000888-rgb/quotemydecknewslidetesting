<?php
/**
 * The searchform template
 *
 * @package QuoteMyFence
 */
?>

<form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
    <label class="screen-reader-text" for="s"><?php esc_html_e( 'Search for:', 'quotemyfence' ); ?></label>
    <div class="search-form-inner">
        <input type="search" class="search-field" placeholder="<?php esc_attr_e( 'Search...', 'quotemyfence' ); ?>" value="<?php echo get_search_query(); ?>" name="s" id="s">
        <button type="submit" class="search-submit btn btn-primary">
            <span class="screen-reader-text"><?php esc_html_e( 'Search', 'quotemyfence' ); ?></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </button>
    </div>
</form>
