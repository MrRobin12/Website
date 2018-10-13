function saveValue(e){
    var id = e.id;  // get the sender's id to save it . 
    var val = e.value; // get the value. 
    localStorage.setItem(id, val);// Every time user writing something, the localStorage's value will override . 
}

function getSavedValue  (v){
    if (localStorage.getItem(v) === null) {
        return "";// You can change this to your defualt value. 
    }
    return localStorage.getItem(v);
}

window.onload = function() {
    document.getElementById("username").value = getSavedValue("username");    // set the value to this input
    document.getElementById("channel").value = getSavedValue("channel");   // set the value to this input
    
    var code = sessionStorage.getItem("code");
    console.log(code);
    
    if (code != null) {
        document.getElementById('id01').style.display='block'
        document.getElementById("token").innerHTML = "Successful Token!";
        document.getElementById("token").disabled  = true;
        document.getElementById("token").style.opacity = 1;
        document.getElementById("token").style.pointerEvents = "none";
        document.getElementById("token").style.backgroundColor = "#220647";
    }
    
    var content = document.getElementById('id01').style.display;
    
    if (content == "block") {
        document.getElementById("buttonLogin").style.display = "none";   
    }
    else if (content == "none") {
        document.getElementById("buttonLogin").style.display = "block";
    }
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function login() {
    var username = document.getElementById("username").value;
    var code = sessionStorage.getItem("code");
    
    console.log(username);
    setUsername(username);
    
    if (code != null) {
        console.log(code);
        setPassword(code);
    }
    
    console.log(localStorage.getItem("username"));
    console.log(localStorage.getItem("password"));
    
    window.open("chat.html", "_self");
}

function setUsername(username) {
    return localStorage.setItem("username", username);
}

function setPassword(password) {
    return localStorage.setItem("password", password);
}

function getToken() {
    var currentURL = document.URL;
    
    var url = "https://id.twitch.tv/oauth2/authorize?client_id=h3xu1fslxahoph2e0m7oxwbfrqsgpl&redirect_uri=https://mrrobin12.github.io/website/tabs/universal/LoginIn_Template/&response_type=token&grant_type=authorization_code&scope=chat%3Aread+chat%3Aedit+channel%3Amoderate&token_type=bearer";
    
    //window.open(url, "_self");
    var codeURL = "https://mrrobin12.github.io/website/tabs/universal/LoginIn_Template/#access_token=3jguy8ln4lxh6aicply2ev0c3bvxhl&scope=chat%3Aread+chat%3Aedit+channel%3Amoderate&token_type=bearer";
    
    var code = codeURL.substr(codeURL.indexOf("access_token=") + 13);
    
    var result = code.substring(0, code.indexOf("&scope=chat%3Aread+chat%3Aedit+channel%3Amoderate&token_type=bearer"));
    sessionStorage.setItem("code", result);
    
    window.open("file:///C:/Users/Robin/Desktop/MrWebsite/tabs/universal/Twitch/index.html", "_self");
}