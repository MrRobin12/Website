function updateText2() {
    document.getElementById("fortnite_stats").innerHTML = localStorage.getItem("fortnite_stats");
}

function Load_API2() {
    if (screen.width < 425) {
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
        
        var title = '<br><font id="title" onclick="open_stats();" link style="font-size: 1.5em; color: goldenrod; text-decoration: underline; text-underline-position: under;">';
        var title_end = '</font>';
        
        console.log("test!");
        
        var breakline = '<br>';
        var font_red = '<font color="red">';
        var font_gold = '<font color="goldenrod">';
        var font_purple = '<font color="rebeccapurple">';
        var font_gray = '<font color="gray">';
        var font_end = '</font>';
            
        var accountID = "Account ID: " + response.accountId + breakline;     
        var username = "Name: " + font_gray + response.epicUserHandle + font_end + breakline;
        var platform = "Platform: " + font_gray +  response.platformNameLong + font_end + breakline;
        var wins = "Wins: " + font_gold + response.lifeTimeStats[8].value + font_end + breakline;
        var kills = "Kills: " + font_gold + response.lifeTimeStats[10].value + font_end + breakline;
        var matches_played = "Matches Played: " + font_gold + response.lifeTimeStats[7].value + font_end + breakline;
        var wins_percentage = "Wins: " + font_gray + response.lifeTimeStats[9].value + font_end;
        var top3 = ", " + "Top 3: " + font_gray + response.lifeTimeStats[0].value + font_end + breakline;
        var kd = "K/d: " + font_gray + response.lifeTimeStats[11].value + font_end;
        var top25 = ", " + "Top 25s: " + font_gray + response.lifeTimeStats[5].value + font_end;
        
        var game = "ADD ME ON FORTNITE";
        
        var result = big + normal + username + platform + normal_end + breakline + big + wins + kills + matches_played + big_end + breakline + small + wins_percentage + top3 + kd + top25 + small_end + breakline + title + game + title_end + big_end;
        
        localStorage.setItem("fortnite_stats", result);
    }};    
        xhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/profile/pc/mrrobin123?", true);
        xhttp.setRequestHeader('Access-Control-Allow-Origin', "*");
        xhttp.setRequestHeader('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');   
        xhttp.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type');  
        xhttp.setRequestHeader("TRN-Api-Key", "f99edc6e-0930-43d3-82ea-3a824d15ea99");
        xhttp.send();         
    } else {
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
            
        var accountID = "Account ID: " + response.accountId + breakline;     
        var username = "Name: " + font_gray + response.epicUserHandle + font_end + breakline;
        var platform = "Platform: " + font_gray +  response.platformNameLong + font_end + breakline;
        var wins = "Wins: " + font_gold + response.lifeTimeStats[8].value + font_end + breakline;
        var kills = "Kills: " + font_gold + response.lifeTimeStats[10].value + font_end + breakline;
        var matches_played = "Matches Played: " + font_gold + response.lifeTimeStats[7].value + font_end + breakline;
        var wins_percentage = "Wins: " + font_gray + response.lifeTimeStats[9].value + font_end;
        var top3 = ", " + "Top 3: " + font_gray + response.lifeTimeStats[0].value + font_end + breakline;
        var kd = "K/d: " + font_gray + response.lifeTimeStats[11].value + font_end;
        var top25 = ", " + "Top 25s: " + font_gray + response.lifeTimeStats[5].value + font_end;
        
        var game = "ADD ME ON FORTNITE";
        
        var result = normal + username + platform + normal_end + breakline + big + wins + kills + matches_played + big_end + breakline + small + wins_percentage + top3 + kd + top25 + small_end + breakline + title + game + title_end;
        
        localStorage.setItem("fortnite_stats", result);
    }};
        xhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/profile/pc/mrrobin123?", true);
        xhttp.setRequestHeader('Access-Control-Allow-Origin', "*");
        xhttp.setRequestHeader('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
        xhttp.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type');
        xhttp.setRequestHeader("TRN-Api-Key", "f99edc6e-0930-43d3-82ea-3a824d15ea99");
        xhttp.send();           
    }
}

function open_stats() {
   window.open('https://www.epicgames.com/fortnite/friend/MrRobin123', '_blank');
}