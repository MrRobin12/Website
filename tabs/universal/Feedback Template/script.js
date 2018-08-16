document.getElementById("play").onclick = function() { 
    document.getElementById('demo').play();
    document.getElementById("play").style.background = "url('1383113001_playback_play2.png') center center no-repeat";
    document.getElementById("pause").style.background = "url('1383113014_playback_pause.png') center center no-repeat";
    $("#fade").fadeIn();
}

document.getElementById("pause").onclick = function() { 
    document.getElementById('demo').pause();
    document.getElementById("play").style.background = "url('1383113001_playback_play.png') center center no-repeat";
    document.getElementById("pause").style.background = "url('1383113014_playback_pause2.png') center center no-repeat";
    $("#fade").fadeOut();
}

