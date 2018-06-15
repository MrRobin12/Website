var url = document.URL;
var width = screen.width;
var height = screen.height;

window.onload = function() {
    localStorage.setItem("update", "0");    
}


$(document ).ready(function() {
   // request permission on page load
document.addEventListener('DOMContentLoaded', function () {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); 
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

 if (Notification.permission !== "granted")
        Notification.requestPermission();
  else {
    var notification = new Notification('NYA VIDEOS PÅ YOUTUBE!', {
        icon: 'https://www.freepnglogos.com/uploads/youtube-circle-icon-png-logo-14.png',
        body: "Vägen Till E3 2018 är här! Kolla in video för mer information!",
    });
      
    notification.onclick = function () {
        window.open("https://www.youtube.com/watch?v=oomLKHUCRII&list=PLrJitY3EqnlSusNKyaHWp4XhqSqbYv3yl");    
        notification.close();
    };

  }
    
});

if (localStorage.getItem("update") == "0") {
    
    if (width <= 425)
    {
        // Mobile function
        var newURL  = url.replace("desktop", "mobile").replace("tablet", "mobile");
        var win = window.open(newURL, '_self');
        win.focus();
        localStorage.setItem("update", "1");
     }
    else if (width <= 768)
    {
        // Tablet function
        var newURL  = url.replace("desktop", "tablet").replace("mobile", "tablet");
        var win = window.open(newURL, '_self');
        win.focus();
        localStorage.setItem("update", "1");
    }
    else if (width <= 2560)
    {
        // Desktop function
        var newURL  = url.replace("mobile", "desktop").replace("tablet", "desktop");
        var win = window.open(newURL, '_self');
        win.focus();
        localStorage.setItem("update", "1");
    }


}