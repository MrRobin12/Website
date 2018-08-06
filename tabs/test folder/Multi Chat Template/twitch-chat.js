var stream_channel = "56707769";
var extra_channel = "167268359";       
var test_channel = "38256700";

var twitch_id = test_channel;
var stream_user = "";

$(document).ready(function() {
getTwitchInfo();
setInterval(getTwitchMessage, timeout);    
});

function getTwitchInfo() {
     $.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://api.twitch.tv/kraken/users?id=" + twitch_id,
    type: "GET",
    contentType: "application/json",
    dataType: "text",
    headers: {
    'Accept' : 'application/vnd.twitchtv.v5+json',
    'Client-ID' : 'h3xu1fslxahoph2e0m7oxwbfrqsgpl'
    },
    success: function(data) {
        var json = $.parseJSON(data);
        stream_user = json.users[0].name;
    },
    async: false
    
     });
}

var messages_length = {};
var TW_skip = 0;

function getTwitchMessage() {
    $.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://tmi.twitch.tv/api/rooms/" + twitch_id + "/recent_messages?count=50",
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        var TW_i;

        for (TW_i = TW_skip; TW_i < json.messages.length; TW_i++) {
            var json = $.parseJSON(data);   
            var api_message = json.messages[TW_i];
            api_message = api_message.substring(api_message.indexOf('display-name='))
        
            var display_username = api_message.substring(api_message.indexOf('display-name=') + 13, api_message.indexOf(';'));
            api_message = api_message.substring(api_message.indexOf('user-type=') + 0);
            
            var username = api_message;    
            username = username.substring(username.indexOf(':') + 1, username.indexOf('!'));
        
            var channel = api_message;
            channel = channel.substring(channel.lastIndexOf("#") + 1, channel.lastIndexOf(":"));
        
            var message = api_message;    
            message = message.substring(message.lastIndexOf(" :") + 2, message.lastIndexOf(""));

            var message_lower = message.toLowerCase();
            var stream_user_lower = stream_user.toLowerCase();
            var count_username = message.indexOf(stream_user_lower);
            
            if (color_talk_to_stream) {
                if (message_lower.indexOf(stream_user_lower) && count_username != -1) {     
                var username_url = message.slice(count_username, message.length);
                
                username_url.substring(username_url.lastIndexOf(stream_user_lower), username_url.lastIndexOf(" "));
                message = message.replace(username_url, "<font id='talk_to_streamer' style='color:#ff00fa;'>" + username_url + "</font>");
                }   
            }
            
            if(new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(message)) {
                
            var count = message.indexOf("https://");
                
            if (count == -1) {
                count = message.indexOf("http://");
            } else {
                count = message.indexOf("https://");
            }
                
            var custom_url = message.slice(count, message.length);
            message = message.replace(custom_url, "<font id='links' style='color:#ff00fa;'>" + "<a href='" + custom_url + "' target='_blank'>" + custom_url + "</a>"+ "</font>");
                
            console.log("Link!");    
            }
            
            if (backwards_message_bool) {
                message = make_message_backwards(message);
            }
            
            function make_message_backwards(str) {
                var array = str.split("");
                array.reverse();
                var result = array.join("");
                return result;
            }
            
            var result = "<font id='tw-text>'>" + display_username + ": " + "</font>" + message; 
        
            if (json.messages.length != messages_length) {
                
                if (color_at_person) {
                    message = message.split('@' + display_username).join('<font id="at_person" style="color:ff00fa;">' + '@' + display_username + '</font>');
                }  
                
                document.getElementById("multi-chat").innerHTML += linebreak + '<i style="font-size:' + twitch_icon_size + '; margin-right: 10px;" class="fa">&#xf1e8;</i>' + result + linebreak_end;    
            }
        }
        
        TW_skip = TW_i;
        messages_length = json.messages.length;
        
    },
    async: false
    
});
    
}