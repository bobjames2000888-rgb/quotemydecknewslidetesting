<?php
/**
 * Template Name: City - Darwin
 * Complete city template with all sections matching live site
 * @package QuoteMyFence
 */
get_header();
$city_name = 'Darwin';
$state = 'NT';
include(get_template_directory() . '/template-parts/city-template-content.php');
get_footer();
