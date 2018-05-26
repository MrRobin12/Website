var url = document.URL;
var width = screen.width;
var height = screen.height;

$(document).ready(function() {
        if (width <= 425)
    {
        // Mobile function
        var newURL  = url.replace("desktop", "mobile").replace("tablet", "mobile");
        var win = window.open(newURL, '_self');
        win.focus();
     }
    else if (width <= 768)
    {
        // Tablet function
        var newURL  = url.replace("desktop", "tablet").replace("mobile", "tablet");
        var win = window.open(newURL, '_self');
        win.focus();
    }
    else if (width <= 2560)
    {
        // Desktop function
        var newURL  = url.replace("mobile", "desktop").replace("tablet", "desktop");
        var win = window.open(newURL, '_self');
        win.focus();
    }
});
