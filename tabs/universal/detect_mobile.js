if(screen.width >= 769)
{
var win = window.open("tabs/desktop/home.html", '_self');
win.focus();    
}   
else if(screen.width >= 426)
{
var win = window.open("tabs/tablet/home.html", '_self');
win.focus();    
} 
else
{
var win = window.open("tabs/mobile/home.html", '_self');
win.focus();    
} 