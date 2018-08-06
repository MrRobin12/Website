function updateText() {
    document.getElementById("weather_mobile").innerHTML = localStorage.getItem("weather_stats_moblie");
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

function showPosition(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
    
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            localStorage.setItem("City_mobile", response.list[0].name);
        }};
        
        xhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/find?lat=" + lat + "&lon=" + lon + "&cnt=1&appid=fc72e2c9dd086937cb4a0be5d3fe1de2&units=metric", true);
        
        xhttp.send();
    
        console.log(lat);
        console.log(lon);
    
    Load_API123();
}

function Load_API123() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
            
    if (this.readyState == 4 && this.status == 200) {
    
        var response = JSON.parse(this.responseText);
        var small = '<font style="font-size: 0.9em">';
        var small_end = '</font>';
        var normal = '<font style="font-size: 1.0em">';
        var normal_end = '</font>';
        var big = '<font style="font-size: 1.2em">';
        var big_end = '</font>';
        
        var title = '<font id="title" onclick="open_stats();" link style="font-size: 1.8em; color: goldenrod; text-decoration: underline; text-underline-position: under;">';
        var title_end = '</font>';
        
        var breakline = '<br>';
        var font_red = '<font color="red">';
        var font_gold = '<font color="goldenrod">';
        var font_purple = '<font color="rebeccapurple">';
        var font_gray = '<font color="gray">';
        var font_end = '</font>';
            
        var temp_max = response.main.temp;
        var result = Math.floor(temp_max) + "°";
        console.log(localStorage.getItem("City_mobile"));
        
        localStorage.setItem("weather_stats_mobile", result);
        fix_text();
    }};   
    
    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=" + localStorage.getItem("City_mobile") + "&APPID=fc72e2c9dd086937cb4a0be5d3fe1de2&units=metric", true);
        
    xhttp.send();
}

function fix_text() {
    $.get("https://ipinfo.io", function(response) {  
    
    $.get("https://restcountries.eu/rest/v2/name/" + response.country + "?fullText=true", function(response1) {
        localStorage.setItem("Country_mobile", response1[0].nativeName);
      }, "json");  
    
    if (localStorage.getItem("Country_mobile") == "null") {location.reload();}
    
    document.getElementById("weather-text_mobile").innerHTML = localStorage.getItem("City_mobile") + ", " + response.region + "<br>" + localStorage.getItem("Country_mobile");
    
    document.getElementById("weather_mobile").innerHTML = localStorage.getItem("weather_stats_mobile");
    
}, "jsonp");    
}