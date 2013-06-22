jQuery(document).ready(function(){

	// Menu Navigation
	jQuery('#main-superfish-wrapper ul.sf-menu').supersubs({
		minWidth: 14.5,
		maxWidth: 27,
		extraWidth: 1
	}).superfish({
		delay: 100,
		speed: 'fast',
		animation: {opacity:'show',height:'show'}
	});
	
	// Accordion
	jQuery("ul.gdl-accordion li").each(function(){
		//jQuery(this).children(".accordion-content").css('height', function(){ 
			//return jQuery(this).height(); 
		//});
		
		if(jQuery(this).index() > 0){
			jQuery(this).children(".accordion-content").css('display','none');
		}else{
			jQuery(this).find(".accordion-head-image").addClass('active');
		}
		
		jQuery(this).children(".accordion-head").bind("click", function(){
			jQuery(this).children().addClass(function(){
				if(jQuery(this).hasClass("active")) return "";
				return "active";
			});
			jQuery(this).siblings(".accordion-content").slideDown();
			jQuery(this).parent().siblings("li").children(".accordion-content").slideUp();
			jQuery(this).parent().siblings("li").find(".active").removeClass("active");
		});
	});
	
	// Toggle Box
	jQuery("ul.gdl-toggle-box li").each(function(){
		//jQuery(this).children(".toggle-box-content").css('height', function(){ 
			//return jQuery(this).height(); 
		//});
		jQuery(this).children(".toggle-box-content").not(".active").css('display','none');
		
		jQuery(this).children(".toggle-box-head").bind("click", function(){
			jQuery(this).children().addClass(function(){
				if(jQuery(this).hasClass("active")){
					jQuery(this).removeClass("active");
					return "";
				}
				return "active";
			});
			jQuery(this).siblings(".toggle-box-content").slideToggle();
		});
	});
	
	// Social Hover
	jQuery(".social-icon").hover(function(){
		jQuery(this).animate({ opacity: 1 }, 150);
	}, function(){
		jQuery(this).animate({ opacity: 0.35 }, 150);
	});
	
	// Scroll Top
	jQuery('div.scroll-top').click(function() {
		  jQuery('html, body').animate({ scrollTop:0 }, { duration: 600, easing: "easeOutExpo"});
		  return false;
	});
	
	// Blog Hover
	jQuery(".blog-thumbnail-image img").hover(function(){
		jQuery(this).animate({ opacity: 0.55 }, 150);
	}, function(){
		jQuery(this).animate({ opacity: 1 }, 150);
	});
	
	// Gallery Hover
	jQuery(".gallery-thumbnail-image img").hover(function(){
		jQuery(this).animate({ opacity: 0.55 }, 150);
	}, function(){
		jQuery(this).animate({ opacity: 1 }, 150);
	});
	
	// Port Hover
	jQuery("#portfolio-item-holder .gdl-portfolio .portfolio-thumbnail-title a").hover(function(){
		var curr_item = jQuery(this).parents('.gdl-portfolio');
		var color_hover = curr_item.attr('data-color-hover');
		var bg_hover = curr_item.attr('data-bg-hover');
		
		jQuery(this).animate({ color: color_hover }, 300);
		curr_item.animate({ 'background-color': bg_hover }, 300);
	}, function(){
		var curr_item = jQuery(this).parents('.gdl-portfolio');
		var font_color = curr_item.attr('data-color');
		var bg_color = curr_item.attr('data-bg');	

		jQuery(this).animate({ color: font_color }, 300);
		curr_item.animate({ 'background-color': bg_color }, 300);
	});	
	jQuery("#portfolio-item-holder .gdl-portfolio .portfolio-thumbnail-image-hover").hover(function(){		
		jQuery(this).animate({ opacity: 1 }, 300);
	}, function(){
		jQuery(this).animate({ opacity: 0 }, 300);
	});
	
	// Stunning text hover
	jQuery(".gdl-button-hover").hover(function(){
		var color_hover = jQuery(this).attr('data-color-hover');
		var bg_hover = jQuery(this).attr('data-bg-hover');	
		jQuery(this).animate({ color: color_hover, 'background-color': bg_hover }, 300);	
	},function(){
		var font_color = jQuery(this).attr('data-color');
		var bg_color = jQuery(this).attr('data-bg');	
		jQuery(this).animate({ color: font_color, 'background-color': bg_color }, 300);	
	});
	
	// Price Table
	jQuery(".gdl-price-item").each(function(){
		var max_height = 0;
		jQuery(this).find('.price-item').each(function(){
			if( max_height < jQuery(this).height()){
				max_height = jQuery(this).height();
			}
		});
		jQuery(this).find('.price-item').height(max_height);
		
	});

});

jQuery(window).load(function(){

	// Set Portfolio Max Height
	var port_item_holder = jQuery('div#portfolio-item-holder');
	port_item_holder.equalHeights();
	jQuery(window).resize(function(){
		port_item_holder.children().css('min-height','0');
		port_item_holder.equalHeights();
	});

});

/* Tabs Activiation
================================================== */
jQuery(document).ready(function() {

	var tabs = jQuery('ul.tabs');

	tabs.each(function(i) {

		//Get all tabs
		var tab = jQuery(this).find('> li > a');
		var tab_content = jQuery(this).next('ul.tabs-content');
		tab.click(function(e) {

			//Get Location of tab's content
			var contentLocation = jQuery(this).attr('data-href');
			
			//Let go if not a hashed one
			if(typeof( contentLocation ) != 'undefined') {

				e.preventDefault();

				//Make Tab Active
				tab.removeClass('active');
				jQuery(this).addClass('active');

				//Show Tab Content & add active class
				tab_content.children('li[data-href='+ contentLocation +']').fadeIn(200).addClass('active').siblings().hide().removeClass('active');

			}
		});
	});
});


/* Reorder the page block when resize the page
================================================== */
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */

window.matchMedia = window.matchMedia || (function( doc, undefined ) {

  "use strict";

  var bool,
      docElem = doc.documentElement,
      refNode = docElem.firstElementChild || docElem.firstChild,
      // fakeBody required for <FF4 when executed in <head>
      fakeBody = doc.createElement( "body" ),
      div = doc.createElement( "div" );

  div.id = "mq-test-1";
  div.style.cssText = "position:absolute;top:-100em";
  fakeBody.style.background = "none";
  fakeBody.appendChild(div);

  return function(q){

    div.innerHTML = "&shy;<style media=\"" + q + "\"> #mq-test-1 { width: 42px; }</style>";

    docElem.insertBefore( fakeBody, refNode );
    bool = div.offsetWidth === 42;
    docElem.removeChild( fakeBody );

    return {
      matches: bool,
      media: q
    };

  };

}( document ));
var obj = jQuery('#signup').parent().parent().parent();
var new_obj = obj.clone();
obj.addClass('original-obj');
new_obj.addClass('new-obj');
function reorderBlock() {
	new_obj.
			insertBefore(jQuery('.gdl-page-item>div:last'));
	obj.hide();
	new_obj.show();
}

function restoreBlock() {
	new_obj.hide();
	obj.show();
}


jQuery(window).resize(function() {
    if (matchMedia('only screen and (min-width: 768px)').matches) {
		console.log('restore action....');
		restoreBlock();
	} else {
		console.log('reorderBlock action....');
		reorderBlock();
	}
});

/* Note: Design for a width of 768px */
if (matchMedia('only screen and (min-width: 768px) and (max-width: 959px)').matches) {
      // smartphone/iphone... maybe run some small-screen related dom scripting?
//	restoreBlock();
}


/* Note: Design for a width of 320px */
if (matchMedia('only screen and (max-width: 767px)').matches) {
      // smartphone/iphone... maybe run some small-screen related dom scripting?
	reorderBlock();
}

/* Note: Design for a width of 480px */
if (matchMedia('only screen and (min-width: 480px) and (max-width: 767px)').matches) {
      // smartphone/iphone... maybe run some small-screen related dom scripting?
	reorderBlock();
}

/* Reorder the page block end
================================================== */

/* Equal Height Function
================================================== */
(function($) {
	$.fn.equalHeights = function(px) {
		$(this).each(function(){
			var currentTallest = 0;
			$(this).children().each(function(i){
				if ($(this).height() > currentTallest) { currentTallest = $(this).height(); }
			});
			$(this).children().css({'min-height': currentTallest}); 
		});
		return this;
	};
})(jQuery);
