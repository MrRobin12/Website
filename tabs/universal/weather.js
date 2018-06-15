function updateText() {
    document.getElementById("weather").innerHTML = localStorage.getItem("weather_stats");
}

function Load_API() {
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
            
        var temp_max = response.main.temp_max;
        var result = temp_max + "°";
        
        $.get("https://ipinfo.io", function(response) {     
            localStorage.setItem("City", response.city);
        }, "json");    
        
        localStorage.setItem("weather_stats", result);
    }};
        
    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=" + localStorage.getItem("City") + "&APPID=fc72e2c9dd086937cb4a0be5d3fe1de2&units=metric", true);
    
    xhttp.setRequestHeader('Access-Control-Allow-Origin', "*");
     
    xhttp.setRequestHeader('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
     
    xhttp.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type');

    xhttp.send();  
}