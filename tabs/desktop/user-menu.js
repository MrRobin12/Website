function user_menu() {
    
if (localStorage.getItem("user_menu_desktop") == 'true') {    
    localStorage.setItem("user_menu_desktop", "false");
    document.getElementById('menu-button').style.backgroundColor = "#333";
} else {
    localStorage.setItem("user_menu_desktop", "true");
    document.getElementById('menu-button').style.backgroundColor = "rebeccapurple";
}
    
if (localStorage.getItem("user_menu_desktop") == 'false') {   
    document.getElementById('user-menu1').style.animation = "fadeout 1s";
    document.getElementById('user-menu2').style.animation = "fadeout 1s";
    document.getElementById('user-menu3').style.animation = "fadeout 1s";    
    
    document.getElementById('user-menu1').style.opacity = "0";
    document.getElementById('user-menu2').style.opacity = "0";
    document.getElementById('user-menu3').style.opacity = "0";
} else {                  
    document.getElementById('user-menu1').style.animation = "fadein 1s";
    document.getElementById('user-menu2').style.animation = "fadein 1s";
    document.getElementById('user-menu3').style.animation = "fadein 1s"; 
    
    document.getElementById('user-menu1').style.opacity = "1";
    document.getElementById('user-menu2').style.opacity = "1";
    document.getElementById('user-menu3').style.opacity = "1";
    }
}

window.onbeforeunload = function() {
    localStorage.removeItem("user_menu_desktop");
}