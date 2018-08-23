var count = 1;
var right = $('.slidenavmain').offset().right;
$(".forweb").css( "visibility", "visible");

$(".hamburg").click(function(){
    
    if(count === 1)
        {
$(".slidenavmain").css({right:right}).animate({right:"50px"}, 1600);
             count = count+1;
        }

    else{
        
      var right  = $(window).width() - $('.slidenavmain').width();
    
        $(".slidenavmain").css({right:"50px"}).animate({right:"-700px"}, 1600);
        count  = 1;
    }
  });
  

        
