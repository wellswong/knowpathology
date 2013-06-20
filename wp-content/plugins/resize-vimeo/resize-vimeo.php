<?php
/**
 * @package Resize_Vimeo
 * @author Josh Betz
 * @version 0.3
 */
/*
Plugin Name: Resize Vimeo
Plugin URI: http://joshbetz.com/2009/10/resize-vimeo/
Version: 0.3
Author: Josh Betz
Author URI: http://joshbetz.com
Description: Find Vimeo videos and resize them to a specified width, keeping the correct width-height ratio.
*/


if ( is_admin() ){ // admin actions
  add_action('admin_menu', 'resize_vimeo_menu');
  add_action( 'admin_init', 'register_rv_settings' );
} else {
  add_filter( 'the_content', 'resize_vimeo' );
}



function resize_vimeo($content) {
	$new_width = get_option('rv_width');
	if( $new_width == '' ) $new_width = 500;
	
	$objects = preg_split( '/object/', $content );
	foreach( $objects as $number => $object ) {
		if( preg_match( '/embed/', $object)) {
			$onlyobjects[$number] = $object;
			$dimensionsobject = $object;
			
			preg_match_all('/width="[0-9][0-9][0-9]"/', $dimensionsobject, $width);
			preg_match_all('/[0-9][0-9][0-9]/', $width[0][0], $width);
			preg_match_all('/height="[0-9][0-9][0-9]"/', $dimensionsobject, $height);
			preg_match_all('/[0-9][0-9][0-9]/', $height[0][0], $height);
			
			$width = $width[0][0];
			$height = $height[0][0];
			
			if( $width != 0 ) $ratio = $height / $width;
			else $ratio = 1;
			
			$new_height = round($ratio * $new_width);
			$object = str_replace( $height, $new_height, $object );
			$object = str_replace( $width, $new_width, $object );
			$newobject[$number] = $object;
		}
	}
	$print = str_replace( $onlyobjects, $newobject, $content );
	return $print;
}

function register_rv_settings() { // whitelist options
  register_setting( 'resize-vimeo-group', 'rv_width' );
}

function resize_vimeo_menu() {
  add_options_page('Resize Vimeo Options', 'Resize Vimeo', 'administrator', 'rv-options-page', 'resize_vimeo_options');
}

function resize_vimeo_options() { ?>
	
	<div class="wrap">
	<h2>Resize Vimeo</h2>
	
	<form method="post" action="options.php">
	<?php wp_nonce_field('update-options'); ?>
	
	<table class="form-table">
	
		<tr valign="top">
		<th scope="row">Video Width</th>
		<td><input type="text" name="rv_width" value="<?php echo get_option('rv_width'); ?>" /></td>
		</tr>
		
	</table>
	
	<?php settings_fields( 'resize-vimeo-group' ); ?>
	
	<p class="submit">
	<input type="submit" class="button-primary" value="<?php _e('Save Changes') ?>" />
	</p>
	
	</form>
	</div>
	
<?php } ?>