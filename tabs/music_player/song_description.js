var object_length;

var url = "https://www.dropbox.com/s/ht9gi89mibodezb/song_api.json?dl=0";
jQuery.get('https://cors-anywhere.herokuapp.com/https://dl.dropbox.com/s/ht9gi89mibodezb/song_api.json?dl=0', function(data) {
    data = jQuery.parseJSON(data)
    var myObject = data;
    var count = Object.keys(myObject).length;
    
    var i = 0;
    
    for (i = 0; i < count; i++) {        
        var song_title = "Title: " + data[i].Song_title;
        var artist = "Artist: " + data[i].Artist;
        
        function formatTime(seconds) {
            minutes = Math.floor(seconds / 60);
            minutes = (minutes >= 10) ? minutes : "0" + minutes;
            seconds = Math.floor(seconds % 60);
            seconds = (seconds >= 10) ? seconds : "0" + seconds;
            return minutes + ":" + seconds;
        }    
        
        var ms = data[i].duration_ms / 1000;
        var duration =  formatTime(ms);
        
        var audio_url = "https://cors-anywhere.herokuapp.com/https://dl.dropbox.com/s/bh06jvg1y933npv/Rihanna%20-%20We%20Found%20Love%20Bootleg%20Remix%20%28MrRobin%29.mp3";
        
        var song_url = "<div id='songURL" + i + "' src='" +  data[i].Song_url + "'></div>";     
        var image_cover = data[i].album.images[2].url;
        var img = "<img src='" + image_cover + "' style='width: 32px; height: 32px; margin-right: 10px;'>";
        var border = "<div id='border" + i + "' onclick='activate(" + i + ")' style='border: 2px solid black; padding-left: 10px; padding-right: 10px; padding-top: 10px; margin-bottom: 25px; width: 280px;'>"

        var result = song_url + border + img + song_title + "<br>" + artist + "<br><br>" + duration + "<br><br>" + "<br>" + "</div>";     
        
        document.getElementById("song_api").innerHTML += result;
    }
    
    localStorage.setItem("object_length", i);
});

object_length = localStorage.getItem("object_length");
  
var audio = document.getElementById("demo");

var array_of_functions = [
    function (num) {
        
jQuery.get('https://cors-anywhere.herokuapp.com/https://dl.dropbox.com/s/ht9gi89mibodezb/song_api.json?dl=0', function(data) {
    data = jQuery.parseJSON(data)
    var myObject = data;
    var count = Object.keys(myObject).length;
        
    var source = data[num].Song_url;
    var title = data[num].Song_title;
    var artist = data[num].Artist;
        
    audio.pause();
    audio.src = source;
    audio.title = artist + " - " + title;
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    
    document.getElementById('title').innerHTML = "Playing " + audio.title + "...";
});

}]

function activate(num) {
    for (i = 0; i < object_length; i++) {
        array_of_functions[0](num);
        
        var j = 0;
        
        for (j = 0; j < object_length; j++) {
            if (j != num) {
                document.getElementById("border" + j).style.borderColor = "black";   
            } else {
                document.getElementById("border" + j).style.borderColor = "rgb(154, 4, 219)";   
            }
        }
    }
}    
