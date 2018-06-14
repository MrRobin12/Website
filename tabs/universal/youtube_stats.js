function updateText3() {
    document.getElementById("youtube-stats_video0").src = "http://www.youtube.com/embed/" + localStorage.getItem("youtube-stats_video0") + "?enablejsapi=1&amp&rel=0;origin=http://www.mrrobin12.github.io/website/";
    
    document.getElementById("youtube-stats_video1").src = "http://img.youtube.com/vi/" + localStorage.getItem("youtube-stats_video1") + "/maxresdefault.jpg";
    
    document.getElementById("youtube-stats_video2").src = "http://img.youtube.com/vi/" + localStorage.getItem("youtube-stats_video2") + "/maxresdefault.jpg";
    
    document.getElementById("youtube-stats_video3").src = "http://img.youtube.com/vi/" + localStorage.getItem("youtube-stats_video3") + "/maxresdefault.jpg";
    
    document.getElementById("youtube-stats_video4").src = "http://img.youtube.com/vi/" + localStorage.getItem("youtube-stats_video4") + "/maxresdefault.jpg";
    
    document.getElementById("youtube-stats_video5").src = "http://img.youtube.com/vi/" + localStorage.getItem("youtube-stats_video5") + "/maxresdefault.jpg";
}

function Load_API3() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
            
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        
        var video0 = response.items[0].id.videoId;
        var video0_title = response.items[0].snippet.title;
        var video0_publish = response.items[0].snippet.publishedAt;
        localStorage.setItem("youtube-stats_video0", video0);
        localStorage.setItem("youtube-stats_video0-title", video0);
        localStorage.setItem("youtube-stats_video0-publish", video0);
        
        var video1 = response.items[0].id.videoId;
        var video1_title = response.items[0].snippet.title;
        var video1_publish = response.items[0].snippet.publishedAt;
        localStorage.setItem("youtube-stats_video1", video1);
        localStorage.setItem("youtube-stats_video1-title", video1);
        localStorage.setItem("youtube-stats_video1-publish", video1);
        
        var video2 = response.items[1].id.videoId;
        var video2_title = response.items[1].snippet.title;
        var video2_publish = response.items[1].snippet.publishedAt;
        localStorage.setItem("youtube-stats_video2", video2);
        localStorage.setItem("youtube-stats_video2-title", video2);
        localStorage.setItem("youtube-stats_video2-publish", video2);
        
        var video3 = response.items[2].id.videoId;
        var video3_title = response.items[2].snippet.title;
        var video3_publish = response.items[2].snippet.publishedAt;
        localStorage.setItem("youtube-stats_video3", video3);
        localStorage.setItem("youtube-stats_video3-title", video3);
        localStorage.setItem("youtube-stats_video3-publish", video3);
        
        var video4 = response.items[3].id.videoId;
        var video4_title = response.items[3].snippet.title;
        var video4_publish = response.items[3].snippet.publishedAt;
        localStorage.setItem("youtube-stats_video4", video4);
        localStorage.setItem("youtube-stats_video4-title", video4);
        localStorage.setItem("youtube-stats_video4-publish", video4);
        
        var video5 = response.items[4].id.videoId;
        var video5_title = response.items[4].snippet.title;
        var video5_publish = response.items[4].snippet.publishedAt;
        localStorage.setItem("youtube-stats_video5", video5);
        localStorage.setItem("youtube-stats_video5-title", video5);
        localStorage.setItem("youtube-stats_video5-publish", video5);
    }};
        
    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCo7UzdjhDSxYqKR0rZnuU4Q&maxResults=10&order=date&type=video&key=AIzaSyA2Ya3aC_Ly-V5w_kM1-wOL8Os9mwJPVvM", true);
    
    xhttp.setRequestHeader('Access-Control-Allow-Origin', "*");
     
    xhttp.setRequestHeader('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
     
    xhttp.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type');

    xhttp.send();  
}

function select_video1() {
    document.getElementById("youtube-stats_video0").src = "http://www.youtube.com/embed/" + localStorage.getItem("youtube-stats_video1") + "?enablejsapi=1&amp&rel=0;origin=http://www.mrrobin12.github.io/website/";
    
    document.getElementById("youtube-stats_video1").style = "transform: translate(460%, -625%); border:3px solid white;"
    document.getElementById("youtube-stats_video2").style = "transform: translate(460%, -575%);"
    document.getElementById("youtube-stats_video3").style = "transform: translate(460%, -537%);"
    document.getElementById("youtube-stats_video4").style = "transform: translate(460%, -500%);"
    document.getElementById("youtube-stats_video5").style = "transform: translate(460%, -450%);"
}

function select_video2() {
    document.getElementById("youtube-stats_video0").src = "http://www.youtube.com/embed/" + localStorage.getItem("youtube-stats_video2") + "?enablejsapi=1&amp&rel=0;origin=http://www.mrrobin12.github.io/website/";
    
    document.getElementById("youtube-stats_video1").style = "transform: translate(460%, -625%);"
    document.getElementById("youtube-stats_video2").style = "transform: translate(460%, -575%); border:3px solid white;"
    document.getElementById("youtube-stats_video3").style = "transform: translate(460%, -537%);"
    document.getElementById("youtube-stats_video4").style = "transform: translate(460%, -500%);"
    document.getElementById("youtube-stats_video5").style = "transform: translate(460%, -450%);"
}

function select_video3() {
    document.getElementById("youtube-stats_video0").src = "http://www.youtube.com/embed/" + localStorage.getItem("youtube-stats_video3") + "?enablejsapi=1&amp&rel=0;origin=http://www.mrrobin12.github.io/website/";
    
    document.getElementById("youtube-stats_video1").style = "transform: translate(460%, -625%);"
    document.getElementById("youtube-stats_video2").style = "transform: translate(460%, -575%);"
    document.getElementById("youtube-stats_video3").style = "transform: translate(460%, -537%); border:3px solid white;"
    document.getElementById("youtube-stats_video4").style = "transform: translate(460%, -500%);"
    document.getElementById("youtube-stats_video5").style = "transform: translate(460%, -450%);"
}

function select_video4() {
    document.getElementById("youtube-stats_video0").src = "http://www.youtube.com/embed/" + localStorage.getItem("youtube-stats_video4") + "?enablejsapi=1&amp&rel=0;origin=http://www.mrrobin12.github.io/website/";
    
    document.getElementById("youtube-stats_video1").style = "transform: translate(460%, -625%);"
    document.getElementById("youtube-stats_video2").style = "transform: translate(460%, -575%);"
    document.getElementById("youtube-stats_video3").style = "transform: translate(460%, -537%);"
    document.getElementById("youtube-stats_video4").style = "transform: translate(460%, -500%); border:3px solid white;"
    document.getElementById("youtube-stats_video5").style = "transform: translate(460%, -450%);"
}

function select_video5() {
    document.getElementById("youtube-stats_video0").src = "http://www.youtube.com/embed/" + localStorage.getItem("youtube-stats_video5") + "?enablejsapi=1&amp&rel=0;origin=http://www.mrrobin12.github.io/website/";
    
    document.getElementById("youtube-stats_video1").style = "transform: translate(460%, -625%);"
    document.getElementById("youtube-stats_video2").style = "transform: translate(460%, -575%);"
    document.getElementById("youtube-stats_video3").style = "transform: translate(460%, -537%);"
    document.getElementById("youtube-stats_video4").style = "transform: translate(460%, -500%);"
    document.getElementById("youtube-stats_video5").style = "transform: translate(460%, -450%); border:3px solid white;"
}