function randomString() {
    var chars = "0123456789";
    var string_length = 4;
    var randomstring = '';
    
    for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
    }
        
    localStorage.setItem("random-code", randomstring);
    document.getElementById("code").value = localStorage.getItem("random-code");   
}

function confirmed() {    
    if (document.getElementById("code").value == localStorage.getItem("random-code")) {
        alert("You Have Been Logged In!");
    } else if (document.getElementById("code").value == "") {
       alert("Please Type Your Room Code!");        
    } 
    else {
        if (document.getElementById("code").value.length == 4) {
            alert("Wrong Code!");
        } else {
            alert("Please Type Your Room Code!"); 
        }
    }
}