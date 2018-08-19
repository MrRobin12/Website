var audio = document.getElementById("demo");

audio.addEventListener("timeupdate", function() { 
var duration = this.duration; 
var currentTime = this.currentTime;
var percentage = (currentTime / duration) * 100;
    
function formatTime(seconds) {
    minutes = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
}    
    
document.getElementById("audio-timeline").style.width = percentage + "%";
document.getElementById("audio-timeline").innerHTML =  formatTime(currentTime);
    
if (formatTime(currentTime) == document.getElementById("audio_time").innerHTML) {
    if (isRepeat == false) {
        title_scroll = true;
        document.getElementById('title').stop();
        document.getElementById('demo').pause();
        document.getElementById("play").style.background = "url('1383113001_playback_play.png') center center no-repeat";
        document.getElementById("pause").style.background = "url('1383113014_playback_pause2.png') center center no-repeat";
        $("#fade").fadeOut();
    }
}    

});

var title_scroll = false;
$("#fade").fadeOut();
setInterval(update_fade, 500);

var audio = document.getElementById("demo");

audio.addEventListener('loadedmetadata', function() {
var duration = this.duration; 
    
function formatTime(seconds) {
    minutes = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
}    
    document.getElementById("audio_time").innerHTML = formatTime(duration);
});

function update_fade() {
    var img_height = document.getElementById("wallpaper").height;
    document.getElementById("fade").style.height = img_height + "px";   
}

document.getElementById("pause").onclick = function() { 
    title_scroll = true;
    document.getElementById('title').stop();
    document.getElementById('demo').pause();
    document.getElementById("play").style.background = "url('1383113001_playback_play.png') center center no-repeat";
    document.getElementById("pause").style.background = "url('1383113014_playback_pause2.png') center center no-repeat";
    $("#fade").fadeOut();
}

var isSongPlayed = false;

document.getElementById("play").onclick = function() { 
    if (title_scroll == true) {
        document.getElementById('title').start();
    } else {
        title_scroll = false;
    }
    
    if (isSongPlayed == false) {
        document.getElementById('demo').play();
        isSongPlayed = true;
    } else {
        document.getElementById('demo').pause();
        document.getElementById('demo').currentTime = 0
        document.getElementById('demo').play();
        isSongPlayed = false;
    }
    
    document.getElementById('title').innerHTML = "Playing: Rihanna - We Found Love Bootleg Remix...";
    
    document.getElementById("play").style.background = "url('1383113001_playback_play2.png') center center no-repeat";
    document.getElementById("pause").style.background = "url('1383113014_playback_pause.png') center center no-repeat";

    $("#fade").fadeIn();
}

var isRepeat = false;

document.getElementById("repeat").onclick = function() { 
    if (isRepeat == false) {
        document.getElementById("repeat").style.color = "rgb(103, 4, 224)";
        document.getElementById("demo").loop = true;     
        isRepeat = true;
    } else {
        isRepeat = false;
        document.getElementById("demo").loop = false;   
         document.getElementById("repeat").style.color = "black";
    }
}