// Countdown Timer Script Default

$("#DateCountdown").TimeCircles();
$("#DateCountdown").TimeCircles({circle_bg_color: "#ffffff"});
$("#DateCountdown").TimeCircles({bg_width: 0.1});
$("#DateCountdown").TimeCircles({ time: {
// Days: { color: "RED" },
// Hours: { color: "#C0C8CF" },
// Minutes: { color: "#C0C8CF" },
Seconds: { color: "#fff" }
}}); 

// Countdown Timer Script Dark

$("#DateCountdown-dark").TimeCircles();
$("#DateCountdown-dark").TimeCircles({circle_bg_color: "#193441"});
$("#DateCountdown-dark").TimeCircles({bg_width: 0.2});
$("#DateCountdown-dark").TimeCircles({ time: {
Days: { color: "#DE111E" },
Hours: { color: "#DE111E" },
Minutes: { color: "#DE111E" },
Seconds: { color: "#DE111E" }
}}); 

// Countdown Timer Script Dark

$("#DateCountdown-light").TimeCircles();
$("#DateCountdown-light").TimeCircles({circle_bg_color: "#FFFFFF"});
$("#DateCountdown-light").TimeCircles({bg_width: 0.2});
$("#DateCountdown-light").TimeCircles({ time: {
Days: { color: "#FFFFFF" },
Hours: { color: "#FFFFFF" },
Minutes: { color: "#FFFFFF" },
Seconds: { color: "#FFFFFF" }
}});


// Countdown Timer Script Green

$("#DateCountdown-green").TimeCircles();
$("#DateCountdown-green").TimeCircles({circle_bg_color: "#FFFFFF"});
$("#DateCountdown-green").TimeCircles({bg_width: 0.2});
$("#DateCountdown-green").TimeCircles({ time: {
Days: { color: "#1CA950" },
Hours: { color: "#1CA950" },
Minutes: { color: "#1CA950" },
Seconds: { color: "#1CA950" }
}});



// Animated Bubble Background Script 
$(function(){

particlesJS("particles-js",
 {
    "particles":{"number":{"value":150,"density":{"enable":true,"value_area":800}},
    "color":{"value":"#fff"},
    "shape":{"type":"circle", "stroke":{"width":0,"color":"#13542b"}, "polygon":{"nb_sides":5}, "image":{"src":"img/github.svg","width":100,"height":100}},
    "opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
    "size":{"value":10,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
    "line_linked":{"enable":false,"distance":500,"color":"#13542b","opacity":0.4,"width":2},
    "move":{"enable":true,"speed":0.5,"direction":"top","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
    "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},
    "onclick":{"enable":true,"mode":"repulse"},"resize":true},
    "modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},
    "bubble":{"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},
    "repulse":{"distance":200,"duration":0.4},
    "push":{"particles_nb":4},
    "remove":{"particles_nb":2}}},
    "retina_detect":true});


});


// Menu Sidebar
$(function(){
	$("#menu-handle").click(function(){
		$("#float-menu").toggleClass("show");
	});
});

//Menu Scrollbar
$(function(){
    $('.content-block').slimScroll({
        height: '100%',
        size: '6px',
        alwaysVisible: true
    });
});


// Animated menu icon script
$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});

//Remove Placeholder text on focus
jQuery(document).ready(function()  
{  
    jQuery('input').each(function()  
    {  
        if (jQuery(this).attr('placeholder') && jQuery(this).attr('placeholder') != '')  
        {  
            jQuery(this).attr( 'data-placeholder', jQuery(this).attr('placeholder') );  
        }  
    });  
  
    jQuery('input').focus(function()  
    {  
        if (jQuery(this).attr('data-placeholder') && jQuery(this).attr('data-placeholder') != '')  
        {  
            jQuery(this).attr('placeholder', '');  
        }  
    });  
  
    jQuery('input').blur(function()  
    {  
        if (jQuery(this).attr('data-placeholder') && jQuery(this).attr('data-placeholder') != '')  
        {  
            jQuery(this).attr('placeholder', jQuery(this).attr('data-placeholder'));  
        }  
    });  
});  