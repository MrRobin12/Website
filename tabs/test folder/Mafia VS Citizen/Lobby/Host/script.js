function codegenerator() { 
        if (localStorage.getItem("select") == "true") {
            document.getElementById("code").value = localStorage.getItem("random-code");
        } else {
            document.getElementById("code").value = localStorage.getItem("random-code"); 
    }
}