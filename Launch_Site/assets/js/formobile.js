
    var c = 1;
if ($(window).width()<768){
    
$(".slidenavmain").css( "visibility", "hidden");
    $(".hamburg").click(function(){
        
        $(".slidenavmain").css( "visibility", "visible");

        $(".slidenavmain").fadeIn(200);
       
    $(".formobile").css( "visibility", "visible");
//    $(".forweb").css( "visibility", "visible");
    if(c === 1)
        {
$(".formobile").css({left:"-400px"}).animate({left:"-120px"}, 500);
//$(".slidenavmain").css({right:"300px"}).animate({right:"0px"}, 1600);
            
            c = c+1;
        }

    else{
        $(".slidenavmain").css( "visibility", "hidden");
  $(".slidenavmain").fadeOut(200);
        $(".formobile").css({left:"-120px"}).animate({left:"-400px"}, 500);
//        $(".slidenavmain").css({right:"0px"}).animate({right:"300px"}, 1600);
        c = 1;
    }
  });
        }

    
