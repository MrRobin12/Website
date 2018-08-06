var url = document.URL;
var width = screen.width;
var height = screen.height;

window.onload = function() {
    localStorage.setItem("update", "0");    
}

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