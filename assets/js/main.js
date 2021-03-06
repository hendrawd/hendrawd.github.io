/* Loading Script */
$(window).load(function() {
  "use strict";
    	$(".loader").delay(500).fadeOut();
    	$("#mask").delay(1000).fadeOut("slow");
    });

/* Flexslider */
$(window).load(function() {
  "use strict";
	$('.flexslider').flexslider({
		animation: "fade",
		start: function(slider) {
			$('.np-controls a.next').click(function(event){
				event.preventDefault();
				slider.flexAnimate(slider.getTarget("next"));
			});
			$('.np-controls a.previous').click(function(event){
				event.preventDefault();
				slider.flexAnimate(slider.getTarget("previous"));
			});
		}
	});
});

/* Mixitup Portfolio */
// jQuery(document).ready(function($) {
//     "use strict";
//     $('#portfolio').mixitup({
//         targetSelector: '.item',
//         transitionSpeed: 450
//     });
// });

/* Nivo - Lightbox */
// jQuery(document).ready(function($) {
//   "use strict";
//     $('.nivo-lbox').nivoLightbox({ effect: 'fade' });
// });

/* Skills */
jQuery(document).ready(function($) {
	"use strict";
	$('.skills-info').appear(function() {
	$('.skill1').css('width', $('#skill1-percentage').text());
	$('.skill2').css('width', $('#skill2-percentage').text());
	$('.skill3').css('width', $('#skill3-percentage').text());
	$('.skill4').css('width', $('#skill4-percentage').text());
	$('.skill5').css('width', $('#skill5-percentage').text());
	},{accX: 0, accY: -150});
});

/* Google map */
$(function () {
  "use strict";
	var map = new GMaps({
	el: "#map",
	lat: -6.2169131,
	lng: 106.8121203,
          zoom: 15,
          zoomControl : true,
          zoomControlOpt: {
            style : "BIG",
            position: "TOP_LEFT"
          },
          panControl : true,
          streetViewControl : false,
          mapTypeControl: false,
          overviewMapControl: false
      });

      var styles = [
            {
              stylers: [
                { hue: "#00ffe6" },
                { saturation: -100 }
              ]
            }
      ];

      map.addStyle({
            styledMapName:"Styled Map",
            styles: styles,
            mapTypeId: "map_style"
      });

      map.setStyle("map_style");

      map.addMarker({
      	lat: -6.2169131,
	  	lng: 106.8121203
      });
});

