function randomString() {
    if (localStorage.getItem("code_confirmed") == "true") {
        
    } else {
        var chars = "0123456789";
        var string_length = 4;
        var randomstring = '';
    
	   for (var i=0; i<string_length; i++) {
           var rnum = Math.floor(Math.random() * chars.length);
           randomstring += chars.substring(rnum,rnum+1);
	   }
        
        localStorage.setItem("random-code", randomstring);
        document.getElementById("before-lobby-mobile").style.opacity = 1;
        document.getElementById("code").value = localStorage.getItem("random-code");   
    }
}

function codegenerator() { 
        localStorage.setItem("select", "false");
    
        if (localStorage.getItem("select") == "true") {
            document.getElementById("code").value = localStorage.getItem("random-code");
            document.getElementById("wrapper").style.opacity = 1;
            document.getElementById("wrapper").style.zIndex = 100;
            document.getElementById("before-lobby-mobile").style.zIndex = 0;
            document.getElementById("before-lobby-desktop").style.zIndex = 0;

        } else {
            document.getElementById("code").value = localStorage.getItem("random-code");
            document.getElementById("wrapper").style.opacity = 1;
            document.getElementById("wrapper").style.zIndex = 100;
            document.getElementById("before-lobby-mobile").style.zIndex = 0;
            document.getElementById("before-lobby-desktop").style.zIndex = 0;
            document.getElementById("change-character").style.opacity = 0;
    
            document.getElementById("change-character").style.opacity = 1;
            document.getElementById("wrapper").style.opacity = 0;
            document.getElementById("wrapper").style.opacity = 0;
            document.getElementById("wrapper").style.zIndex = 0;
            document.getElementById("before-lobby-mobile").style.zIndex = 100;
            document.getElementById("before-lobby-desktop").style.zIndex = 100;
            
            document.getElementById("code").value = "";
            document.getElementById("text-left").style.opacity = 0;
            document.getElementById("text-right").style.opacity = 0;       
            localStorage.setItem("code_confirmed", "true");  
    }
}

function changeCharacter() {
    localStorage.setItem("select", "false");
    location.reload();
}

function mafia_select() {
    document.getElementById("before-lobby-mobile").style.opacity = 0;
    document.getElementById("before-lobby-desktop").style.opacity = 0
    document.getElementById("before-lobby-mobile").style.zIndex = 0;
    document.getElementById("before-lobby-desktop").style.zIndex = 0;
    document.getElementById("wrapper").style.opacity = 1;
    localStorage.setItem("select", "true");
}

function citizen_select() {
    document.getElementById("before-lobby-mobile").style.opacity = 0;
    document.getElementById("before-lobby-desktop").style.opacity = 0;
    document.getElementById("before-lobby-mobile").style.zIndex = 0;
    document.getElementById("before-lobby-desktop").style.zIndex = 0;
    document.getElementById("wrapper").style.opacity = 1;
    localStorage.setItem("select", "true");
}