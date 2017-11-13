<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
  
	$('#taptext').on("tap",function(){
       var dunno = true;
       var dice = (Math.round(Math.random()*10));
          if (dice <= 5)  {
              dunno = true;
              navigator.notification.beep(1);	//beep once
          }
          else if (dice > 5)  {
              dunno = false;
              navigator.notification.beep(2);	//beep twice
          };
    $("#myNumber").text(dunno);
});
 	});