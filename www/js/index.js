<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
  
	$('#taptext').on("tap",function(){
       var dunno = true;
       var dice = (Math.round(Math.random()*10));
          if (dice <= 5)  {
              dunno = true;
          }
          else if (dice > 5)  {
              dunno = false;
          };
    $("#myNumber").text(dunno);
});
 	});