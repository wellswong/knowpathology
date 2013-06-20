<?php
/**
 * @package Custom Facebook and Google+ Thumbnail
 * @version 1.0
 */
/*
Plugin Name: Custom Facebook and Google+ Thumbnail
Description: Sometimes, you want Facebook or Google+ (or any sharing website) to use a specific thumbnail. This plug-in make these websites use the thumbnail from your Wordpress article
Author: Arnaud Delante
Version: 1.0
Author URI: http://www.axioland.me
*/

function fbThumb() {
    if ( is_single() ) {
        if (has_post_thumbnail()) {
            $thumb = wp_get_attachment_image_src(get_post_thumbnail_id(), 'thumbnail_name');
            $thumbURL = $thumb[0];
            
            $tiitre = get_the_title();
            
            echo '
                <meta property="og:image" content="'.$thumbURL.'" />
                <meta property="og:title" content="'.$tiitre.'" />
            ';
        }
    }
}

add_action( 'wp_head', 'fbThumb' );