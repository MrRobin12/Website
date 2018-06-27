var ajaxhttp = new XMLHttpRequest();

var playerCount = "1";
var url = "Player1.json";

ajaxhttp.open("GET", url, true);
ajaxhttp.setRequestHeader("content-type", "application/json");

ajaxhttp.onreadystatechange = function () {
    if (ajaxhttp.readyState == 4 && ajaxhttp.status == 200) {
        var jcontent = ajaxhttp.responseText;
        console.log(jcontent);
        console.log(ajaxhttp);
    }
}

ajaxhttp.send(null);

var filepath = "test.txt";
var output = "Hello world!";

var txtFile = new File(filepath);
txtFile.open("w"); //
txtFile.writeln(output);
txtFile.close();