// Countdown Timer Script
$('#timer').timezz({
  'date' : 'February 5, 2019 00:00:00',
  'days' : 'Days',
  'hours' : 'Hrs',
  'minutes' : 'Min',
  'seconds' : 'Sec'
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


// Animated Particle Background

particlesJS("particles-js",
 {
    "particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},
    "color":{"value":"#ffffff"},
    "shape":{"type":"circle",
    "stroke":{"width":0,"color":"#000000"},
    "polygon":{"nb_sides":5},
    "image":{"src":"img/github.svg","width":100,"height":100}},
    "opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
    "size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
    "line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},
    "move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
    "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},
    "onclick":{"enable":true,"mode":"push"},"resize":true},
    "modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},
    "bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},
    "repulse":{"distance":200,"duration":0.4},
    "push":{"particles_nb":4},
    "remove":{"particles_nb":2}}},
    "retina_detect":true
 });