//Explore Coupons hide show
var content = document.getElementById("explore_content");
var button = document.getElementById("show-more");

//button.onclick = function () {
//
//	if(content.className == "open"){
//		//shrink the box
//		content.className = "";
//		button.innerHTML = "View More";
//	} else {
//		//expand the box
//		content.className = "open";
//		button.innerHTML = "View Less";
//	}
//
//};
var mapFun = {
 mapHeightFun: function(){
               var fullScreenHeight=window.innerHeight - document.getElementById('headerContent').offsetHeight;
               console.log("fullScreenHeight"+fullScreenHeight);
               var mapHeight = document.getElementById('sidebarPanal').offsetHeight;
               if(fullScreenHeight < mapHeight){
                document.getElementById("map_div").style.height = mapHeight + "px";
               }else{
                   document.getElementById("map_div").style.height = fullScreenHeight + "px";
               }
           }
}
$('.view_less_btn').hide();
        $('.view_less_btn').on('click',function(){
//            setTimeout(function(){
//                 $('.view_less_btn').hide();
//                 $('.view_more_btn').show();
//            },2000);
               
            
                $(this).addClass("view_more_btn");
                $(this).removeClass("view_less_btn");
       
            if(content.className == "open"){ 
                $(this).find("span").text("View More");
                $('.vmvl').attr("src","images/category_more.svg");
                 content.className = "";
                setTimeout(function(){
                    mapFun.mapHeightFun();
                },1000);
            }else{
                content.className = "open";
                $(this).find("span").text("View Less");
                $('.vmvl').attr("src","images/category_less.svg");
                setTimeout(function(){
                    mapFun.mapHeightFun();
                },1000);
            }
        });
 $('.view_more_btn').on('click',function(){
//              $('.view_less_btn').show();
//               $('.view_more_btn').hide();
        $(this).removeClass("view_more_btn");
     $(this).addClass("view_less_btn");
            if(content.className == "open"){ 
                $(this).find("span").text("View More");
                $('.vmvl').attr("src","images/category_more.svg");
                 content.className = "";
                setTimeout(function(){
                    mapFun.mapHeightFun();
                },1000);
            }else{
                 $(this).find("span").text("View Less");
                $('.vmvl').attr("src","images/category_less.svg");
                content.className = "open";
                setTimeout(function(){
                    mapFun.mapHeightFun();
                },1000);
            }
        });


//left menu
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


//hot selling slider
            function owlInitialize() {
            if ($(window).width() > 767) {
                $('.prdt_category').addClass("owl-one");
                $('.owl-one').owlCarousel({
                    loop:true,
                    margin:10,
                    responsiveClass:true,
                    mouseDrag:false,
                    touchDrag:false,
                    autoplay:true,
                    responsive:{
                        0:{
                            items:3,
                            nav:false
                        },
                        600:{
                            items:2,
                            nav:false
                        },
                        1000:{
                            items:3,
                            nav:true,
                            loop:true
                        }
                    }
                });
                }else{
                $('.owl-one').owlCarousel('destroy');
                $('.prdt_category').removeClass("owl-one");
                    }
                    }
                $(document).ready(function(e) {
                owlInitialize();
                });
                $(window).resize(function() {
                owlInitialize();
                });

            $('.owl-two').owlCarousel({
                loop:true,
                responsiveClass:true,
                mouseDrag:false,
                touchDrag:true,
                autoplay:true,
                responsive:{
                    0:{
                        items:3,
                        nav:false,
                        dot:false
                    },
                    600:{
                        items:5,
                        nav:false,
                        dot:false
                    },
                    1000:{
                        items:8,
                        nav:false,
                        loop:false
                    }
                }
            })
            
//Featured Coupons startfunction owlInitialize() 
            applysSlider();
            $(window).resize(function(){
                    applysSlider();
            });
            function applysSlider(){
                
                if ($(window).width() > 767) {
                $('.featured_coupons_scroll').addClass("owl-three");
                $('.owl-three').owlCarousel({
                    loop:true,
                    margin:10,
                    responsiveClass:true,
                    mouseDrag:true,
                    touchDrag:true,
                    autoplay:true,
                    responsive:{
                        0:{
                            items:2,
                            nav:false,
                            dot:false
                        },
                        600:{
                            items:3,
                            nav:false,
                            dot:false
                        },
                        1000:{
                            items:5,
                            nav:false,
                            loop:true
                        }
                    }
                });
                //latest-coupons
            
            $('.owl-latest-coupons').owlCarousel({
                loop:true,
                margin:5,
                stagePadding:40,
                responsiveClass:true,
                mouseDrag:false,
                touchDrag:true,
                autoplay:true,
                responsive:{
                    0:{
                        items:2,
                        nav:false,
                        dot:false
                    },
                    600:{
                        items:2,
                        nav:false,
                        dot:false
                    },
                    1000:{
                        items:3,
                        nav:false,
                        loop:true
                    }
                }
            })
                }else{
                $('.owl-three').owlCarousel('destroy');
                $('.featured_coupons_scroll').removeClass("owl-three");
                    }
            }


                  
//svg color change

/*
     * Replace all SVG images with inline SVG
     */
        jQuery('img.svg_icon').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });

//map page 

/*
 * declare map as a global variable
 */
var map;

/*
 * use google maps api built-in mechanism to attach dom events
 */
google.maps.event.addDomListener(window, "load", function () {

  /*
   * create map
   */
  var map = new google.maps.Map(document.getElementById("map_div"), {
    center: new google.maps.LatLng(33.808678, -117.918921),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  /*
   * create infowindow (which will be used by markers)
   */
  var infoWindow = new google.maps.InfoWindow();

  /*
   * marker creater function (acts as a closure for html parameter)
   */
  function createMarker(options, html) {
    var marker = new google.maps.Marker(options);
    if (html) {
      google.maps.event.addListener(marker, "click", function () {
        infoWindow.setContent(html);
        infoWindow.open(options.map, this);
      });
    }
    return marker;
  }

  /*
   * add markers to map
   */
  var marker0 = createMarker({
    position: new google.maps.LatLng(33.808678, -117.918921),
    map: map,
    icon: "http://1.bp.blogspot.com/_GZzKwf6g1o8/S6xwK6CSghI/AAAAAAAAA98/_iA3r4Ehclk/s1600/marker-green.png"
  }, "<h1>Marker 0</h1><p>This is the home marker.</p>");

  var marker1 = createMarker({
    position: new google.maps.LatLng(33.818038, -117.928492),
    map: map
  }, "<h1>Marker 1</h1><p>This is marker 1</p>");

  var marker2 = createMarker({
    position: new google.maps.LatLng(33.803333, -117.915278),
    map: map
  }, "<h1>Marker 2</h1><p>This is marker 2</p>");
});

/*********** for map height *************/
       $( document ).ready(function() {
                    mapFun.mapHeightFun();
        }); 

/*********** scroll_effect *************/
        (function($){
			$(window).on("load",function(){
				
				$("#content-3").mCustomScrollbar({
					scrollButtons:{enable:true},
					theme:"light-thick",
					scrollbarPosition:"outside"
				});
				
			});
		})(jQuery);


/*********** photo gallery *************/
        