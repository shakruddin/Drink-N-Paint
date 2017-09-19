// A $( document ).ready() block.
$( document ).ready(function() {



jQuery(function($) {

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			var nav = $($anchor.attr('href'));
			if (nav.length) {
			$('html, body').stop().animate({				
				scrollTop: $($anchor.attr('href')).offset().top				
			}, 1500, 'easeInOutExpo');
			
			event.preventDefault();
			}
		});
						
	});	
	
	

	//Initiat WOW JS
	new WOW().init();

	// portfolio filter
	$(window).load(function(){
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.port');
    
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});
    
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});
		$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 50 }, 1000);
				return false;
		});
        
    //Google Map
    var get_latitude = $('#google-map').data('latitude');
    var get_longitude = $('#google-map').data('longitude');

    function initialize_google_map() {
        var myLatlng = new google.maps.LatLng(get_latitude, get_longitude);
        var mapOptions = {
            zoom: 14,
            scrollwheel: false,
            center: myLatlng
        };
        var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map
        });
    }
	
	
});

var one_img_1 = "<div class='grid'><figure class='effect-sarah'><img src='DNP/img-12.jpg' alt='img13'/></figure></div>";
var one_img_2 = "<div class='grid'><figure class='effect-sarah'><img src='DNP/img-4.jpg' alt='img13'/></figure></div>";
var one_img_3 = "<div class='grid'><figure class='effect-sarah'><img src='DNP/img-3.jpg' alt='img13'/></figure></div>";
var one_img_4 = "<div class='grid'><figure class='effect-sarah'><img src='DNP/img-6.jpg' alt='img13'/></figure></div>";

var text_one = "We are with you to support the society and make a difference! Raise funds to support a social cause through our event.";

var text_two = "Strengthen the bond of your employees with an exclusive fun and relaxing event customized to suit the moto of your organization!";

var text_three = "Enjoy one of a kind of a party at your choice of place with your people and your customized flavor of painting!";

var text_four = "Join us at public events to make new friends and discover a creative style of drinking with us!";


$('.img_f').html(one_img_1);
$('#one').css("background", "#f5f4f4");
$('#one').click(function(){
    $('.img_f').html(one_img_1);
    $('#one').css("background", "#f5f4f4");
    $('.detail').html(text_one);
    $('#two').css("background", "");
    $('#three').css("background", "");
    $('#four').css("background", "");
});

$('#two').click(function(){
    $('.img_f').html(one_img_2);
    $('.detail').html(text_two);
    $('#two').css("background", "#f5f4f4");
    $('#one').css("background", "");
    $('#three').css("background", "");
    $('#four').css("background", "");
});

$('#three').click(function(){
    $('.img_f').html(one_img_3);
    $('.detail').html(text_three);
    $('#three').css("background", "#f5f4f4");
    $('#two').css("background", "");
    $('#one').css("background", "");
    $('#four').css("background", "");
});
$('#four').click(function(){
    $('.img_f').html(one_img_4);
    $('.detail').html(text_four);
    $('#four').css("background", "#f5f4f4");
    $('#two').css("background", "");
    $('#three').css("background", "");
    $('#one').css("background", "");
});

});



var Gallery_image = "<div class='portfolio-item wordpress col-xs-12 col-sm-4 col-md-4'><div class='grid'><figure class='effect-bubba'><img src='DNP/img-12.jpg' alt='img02'/><figcaption><p><span style='font-size: 30px; font-weight: bold;'>Fresh</span></p><a class='example-image-link' href='DNP/img-12.jpg' data-lightbox='example-2' data-title='Drint N Paint'><img class='example-image' src='DNP/img-12.jpg' alt='image-1'/></a></figcaption></figure></div></div><div class='portfolio-item wordp col-xs-12 col-sm-4 col-md-4'><div class='grid'><figure class='effect-bubba'><img src='DNP/img-15.png' alt='img02'/><figcaption><p><span style='font-size: 30px; font-weight: bold;'>Fresh</span></p><a class='example-image-link' href='DNP/img-15.png' data-lightbox='example-2' data-title='Drint N Paint'><img class='example-image' src='DNP/img-15.png' alt='image-1'/></a></figcaption></figure></div></div><div class='portfolio-item bootstrap col-xs-12 col-sm-4 col-md-4'><div class='grid'><figure class='effect-bubba'><img src='DNP/img-18.png' alt='img02'/><figcaption><p><span style='font-size: 30px; font-weight: bold;'>Fresh</span></p><a class='example-image-link' href='DNP/img-18.png' data-lightbox='example-2' data-title='Drint N Paint'><img class='example-image' src='DNP/img-18.png' alt='image-1'/></a></figcaption></figure></div></div><div class='portfolio-item html col-xs-12 col-sm-4 col-md-4'><div class='grid'><figure class='effect-bubba'><img src='DNP/img-20.png' alt='img02'/><figcaption><p><span style='font-size: 30px; font-weight: bold;'>Fresh</span></p><a class='example-image-link' href='DNP/img-20.png' data-lightbox='example-2' data-title='Drint N Paint'><img class='example-image' src='DNP/img-20.png' alt='image-1'/></a></figcaption></figure></div></div><div class='portfolio-item wordpress col-xs-12 col-sm-4 col-md-4'><div class='grid'><figure class='effect-bubba'><img src='DNP/img-21.jpg' alt='img02'/><figcaption><p><span style='font-size: 30px; font-weight: bold;'>Fresh</span></p><a class='example-image-link' href='DNP/img-21.jpg' data-lightbox='example-2' data-title='Drint N Paint'><img class='example-image' src='DNP/img-21.jpg' alt='image-1'/></a></figcaption></figure></div></div><div class='portfolio-item wordp col-xs-12 col-sm-4 col-md-4'><div class='grid'><figure class='effect-bubba'><img src='DNP/img-32.jpg' alt='img02'/><figcaption><p><span style='font-size: 30px; font-weight: bold;'>Fresh</span></p><a class='example-image-link' href='DNP/img-32.jpg' data-lightbox='example-2' data-title='Drint N Paint'><img class='example-image' src='DNP/img-32.jpg' alt='image-1'/></a></figcaption></figure></div></div></div>";
      
        var count = 0;
        $('#more_Gallery').click(function(){
            if(count == 0){
            $('#hider').append(Gallery_image);
                $('#more_Gallery').hide();
                count = count + 1;
            }else{
                count = 1;
            }
        });


//
//$('.hide_1').click(function(){
//    $('.navbar-nav').hide();
//});
//
//
//$('.navbar-toggle').click(function(){
//    $('.navbar-nav').show();
//});