=== Custom Facebook and Google+ Thumbnail ===
Contributors: Axiol
Author URI: http://www.axioland.me
Tags: facebook, google+, google plus, thumbnail, link, sharing, link sharing
Requires at least: 2.9
Tested up to: 3.3
Stable tag: trunk

Use a specific thumbnail for Facebook or Google+ sharing.

== Description ==

Sometimes, you want Facebook or Google+ (or any sharing website) to use a specific thumbnail. Sometimes, you even want to use a thumbnail which is not in your article (when it's a video by example). This plug-in make these websites use the thumbnail from your Wordpress article.

If you define a thumbnail for your article, it will use it. If not, it will act the normal way.

== Installation ==

1. Upload `plugin-name.php` to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress
1. Make sure you activated thumbnails support by adding `add_theme_support( 'post-thumbnails' );` to your `functions.php`

== Frequently Asked Questions ==

= It doesn't work. Why ? =

Are you sure your theme has `<?php wp_head() ?>` in its `header.php` ?

= Is there a good size for these thumbnail ? =

A pretty good size for Facebook and Google+ is 150x150 pixels

== Screenshots ==

1. Here is your thumbnail defined
2. Here is how it appear on Facebook for example

== Changelog ==

= 1.0 =
* Initial release