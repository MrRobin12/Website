$(document).ready(function() {
setInterval(getYouTubeMessage, timeout);        
}); 
    
var my_youtube_channel = "UCo7UzdjhDSxYqKR0rZnuU4Q";
var test_youtube_channel = "UCovjMQ8BUxUZaIk3fO6xlig";
var channel = my_youtube_channel;

var update;
 
check_if_live();

function check_if_live() {
 $.ajax({
    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=" + channel + "&type=video&eventType=live&key=AIzaSyA2Ya3aC_Ly-V5w_kM1-wOL8Os9mwJPVvM",
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        
        if (json.items.length == 0) {
            update = false;
        } else{
            update = true;
        }
    },
    async: false
}); 
}

console.log(update);

var videoID = "t_U3IMFISZw";
var chatID;

if (update == true || videoID != null) {   
    
$.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=" + channel + "&type=video&eventType=live&key=AIzaSyA2Ya3aC_Ly-V5w_kM1-wOL8Os9mwJPVvM",
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        videoID = json.items[0].id.videoId;
    },
    async: false
});
    
$.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/videos?id=" + videoID + "&part=liveStreamingDetails&key=AIzaSyA2Ya3aC_Ly-V5w_kM1-wOL8Os9mwJPVvM",
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        chatID = json.items[0].liveStreamingDetails.activeLiveChatId;
    },
    async: false
});
  
console.log("Video ID: " + videoID);    
console.log("Chat ID: " + chatID);    
    
var YT_messages_length = {};
var YT_skip = 0;

function getYouTubeMessage() {  
    $.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId=" + chatID + "&part=snippet,authorDetails&key=AIzaSyA2Ya3aC_Ly-V5w_kM1-wOL8Os9mwJPVvM",
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        var YT_i;

        for (YT_i = YT_skip; YT_i < json.items.length; YT_i++) {
            var profile_image_url = json.items[YT_i].authorDetails.profileImageUrl;
            var display_username = json.items[YT_i].authorDetails.displayName;    
            var channel = json.items[YT_i].authorDetails.channelId;       
            var message = json.items[YT_i].snippet.displayMessage; 
            
            if(new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(message)) {
                
                var count = message.indexOf("http://");
                
                var custom_url = message.slice(count, message.length);
                message.replace(custom_url, "<font id='links' style='color:#ff00fa;'>" + custom_url + "</font>");
            }
            
            var result = "<font id='yt-text'>" + display_username + ": " + "</font>" + message;
        
            document.getElementById("multi-chat").innerHTML += linebreak + '<i style="font-size:19px; margin-right: 10px;" class="fa">&#xf16a;</i>' + result + linebreak_end;   
        }
        
        YT_skip = YT_i;
        YT_messages_length = json.items.length;
    },
    async: false
});
} 

//message = message.split('@' + display_username).join('<font style="color:gold;">' + '@' + display_username + '</font>');   

}
    