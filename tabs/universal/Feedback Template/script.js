var title_scroll = false;

document.getElementById("pause").onclick = function() { 
    title_scroll = true;
    document.getElementById('title').stop();
    document.getElementById('demo').pause();
    document.getElementById("play").style.background = "url('1383113001_playback_play.png') center center no-repeat";
    document.getElementById("pause").style.background = "url('1383113014_playback_pause2.png') center center no-repeat";
    $("#fade").fadeOut();
}

document.getElementById("play").onclick = function() { 
    if (title_scroll == true) {
        document.getElementById('title').start();
    } else {
        title_scroll = false;
    }
    
    document.getElementById('title').innerHTML = "Playing: Rihanna - We Found Love Bootleg Remix...";
    document.getElementById('demo').play();
    document.getElementById("play").style.background = "url('1383113001_playback_play2.png') center center no-repeat";
    document.getElementById("pause").style.background = "url('1383113014_playback_pause.png') center center no-repeat";
    $("#fade").fadeIn();
}