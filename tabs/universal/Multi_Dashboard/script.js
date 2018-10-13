window.onload = function() {
    var client_id = "j47taumj3y0tjjl7zj0vraoqazur37";    
    var url = "https://api.twitch.tv/kraken/channels/mrrobin12ftw?client_id=" + client_id;
    
    $.ajax({
        url: url,
        async: false,
        success: function(data) {
            document.getElementById("title").value = "Title: " + data.status;
            document.getElementById("category").value = "Category: " +  data.game;
        }   
    });
}

function check_title() {
    var client_id = "j47taumj3y0tjjl7zj0vraoqazur37";    
    var url = "https://api.twitch.tv/kraken/channels/mrrobin12ftw?client_id=" + client_id;
    
    if (document.getElementById("title").value == "") {
            $.ajax({
                url: url,
                async: false,
                success: function(data) {
                    document.getElementById("title").value = "Title: " + data.status;
                }   
            });
    }
}

function check_category() {
    var client_id = "j47taumj3y0tjjl7zj0vraoqazur37";    
    var url = "https://api.twitch.tv/kraken/channels/mrrobin12ftw?client_id=" + client_id;
    
    if (document.getElementById("category").value == "") {
            $.ajax({
                url: url,
                async: false,
                success: function(data) {
                    document.getElementById("category").value = "Category: " +  data.game;
                }   
            });
    }
}

function cleartext_title() {
    document.getElementById("title").value = "";
}        
    
function cleartext_category() {
    document.getElementById("category").value = "";
}        
    
function update() {
    document.getElementById("update_button").innerHTML = "Send!";
    
    var client_id = "j47taumj3y0tjjl7zj0vraoqazur37";
    var token = "k1jqffjnd740mgf9qmas5zb16pca9r";    
    var post_url = "https://cors-anywhere.herokuapp.com/https://api.twitch.tv/kraken/channels/56707769?client_id=" + client_id + "&api_version=5&oauth_token=" + token;    
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Title has changed!");
            
            document.getElementById("update_button").style.backgroundColor = "green";
            document.getElementById("update_button").innerHTML = "Updated!";
            
            check_title();
            check_category();
        }
    };
    
    var title = document.getElementById("title").value;
    var category = document.getElementById("category").value;
    
    var new_title = title.replace("Title: ", "");
    var new_category = category.replace("Category: ", "");
    
    var channel_feed_enabled = true;    
        
    var params = '{\"channel\": {\"status\": \"' + new_title + '\", \"game\": \"' + new_category + '\", \"channel_feed_enabled\": ' + channel_feed_enabled + '}}';
        
    xhttp.open("PUT", post_url, true);
    
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.setRequestHeader('Access-Control-Allow-Origin', "*"); ;  
    xhttp.setRequestHeader('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    xhttp.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    xhttp.send(params);  
}

function UpdateYouTubeVideos() 
{
    var key = "AIzaSyA2Ya3aC_Ly-V5w_kM1-wOL8Os9mwJPVvM";
    var playlistID = "PLrJitY3EqnlRo4Q4nUlcfhOcmQcBPL2y4";
    var newPageToken = "CDIQAA";
    var pageToken = "CBkQAQ";
    
    var url = "https://cors-anywhere.herokuapp.com/" + "https://www.googleapis.com/youtube/v3/playlistItems?playlistId=" + playlistID + "&maxResults=50&pageToken=" + pageToken + "&part=snippet%2CcontentDetails&key=" + key;
    
    $.ajax({
        url: url,
        async: false,
        success: function(data) {
            var length = data.items.length;
            
            for (var i = 0; i < length; i++) {
                var title = data.items[i].snippet.title;
                var count = i + 1;
                
                var newTitle = "Marvel's Spider-Man - Let's Play #" + count;
                var videoID = data.items[i].snippet.resourceId.videoId;
                console.log(videoID + "||" + count);
            }
        }   
    });
}