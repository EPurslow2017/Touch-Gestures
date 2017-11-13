<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.notification);
}

$(document).on("pagecreate","#pageone",function(){
  
	$('#taptext').on("tap",function(){
       var dunno = true;
       var dice = (Math.round(Math.random()*10));
          if (dice <= 5)  {
              dunno = true;
              navigator.notification.beep(1);
          }
          else if (dice > 5)  {
              dunno = false;
              navigator.notification.beep(2);
          };
    $("#myNumber").text(dunno);
});
 	});